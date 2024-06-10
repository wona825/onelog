package com.onelog.backend.domain.chatgpt.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.onelog.backend.domain.chatgpt.config.ChatGptConfig;
import com.onelog.backend.domain.chatgpt.dto.ChatGptRequest;
import com.onelog.backend.domain.chatgpt.dto.Message;
import com.onelog.backend.domain.chatgpt.entity.QuestionLog;
import com.onelog.backend.domain.chatgpt.repository.QuestionLogRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ChatGptService {

    private final ObjectMapper objectMapper;
    private final QuestionLogRepository questionLogRepository;

    @Value("${chatgpt.api-key}")
    private String chatGptKey;

    public Flux<String> ask(String message) throws JsonProcessingException {
        String extractedMessage = extractMessageContent(message);
        questionLogRepository.save(new QuestionLog(extractedMessage));

        WebClient client = WebClient.builder()
                .baseUrl(ChatGptConfig.URL)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(ChatGptConfig.AUTHORIZATION, ChatGptConfig.BEARER + chatGptKey)
                .build();

        List<Message> messages = new ArrayList<>();

        messages.add(Message.builder()
                .role("assistant")
                .content(ChatGptConfig.PROMPT)
                .build());

        messages.add(Message.builder()
                .role(ChatGptConfig.ROLE)
                .content(extractedMessage)
                .build());

        ChatGptRequest chatGptRequest = new ChatGptRequest(
                ChatGptConfig.MODEL,
                ChatGptConfig.TEMPERATURE,
                ChatGptConfig.STREAM,
                messages
        );

        return client.post()
                .bodyValue(objectMapper.writeValueAsString(chatGptRequest))
                .accept(MediaType.TEXT_EVENT_STREAM)
                .retrieve()
                .bodyToFlux(String.class)
                .map(response -> {
                    try {
                        return objectMapper.readTree(response)
                                .path("choices")
                                .get(0)
                                .path("delta")
                                .path("content")
                                .asText();
                    } catch (JsonProcessingException e) {
                        return "";
                    }
                });
    }

    private String extractMessageContent(String message) throws JsonProcessingException {
        JsonNode jsonNode = objectMapper.readTree(message);
        return jsonNode.path("message").asText();
    }

    public List<QuestionLog> getAllQuestionsOrderByCreatedAtDesc() {
        return questionLogRepository.findAllByOrderByCreatedAtDesc();
    }

    public List<QuestionLog> getTodayQuestions() {
        LocalDateTime today = LocalDateTime.now().toLocalDate().atStartOfDay();
        return questionLogRepository.findAllByOrderByCreatedAtDesc().stream()
                .filter(question -> question.getCreatedAt().isAfter(today))
                .collect(Collectors.toList());
    }
}
