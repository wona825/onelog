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

    // ObjectMapper 인스턴스를 주입받음
    private final ObjectMapper objectMapper;

    // QuestionLogRepository 인스턴스를 주입받음
    private final QuestionLogRepository questionLogRepository;

    // chatgpt.api-key 값을 주입받음
    @Value("${chatgpt.api-key}")
    private String chatGptKey;

    /**
     * 사용자로부터 메시지를 받아 ChatGpt API를 호출하여 응답을 Flux 형태로 반환합니다.
     *
     * @param message 사용자가 보낸 메시지
     * @return ChatGpt API의 응답을 Flux 형태로 반환
     * @throws JsonProcessingException JSON 처리 중 예외가 발생할 수 있음
     */
    public Flux<String> ask(String message) throws JsonProcessingException {
        String extractedMessage = extractMessageContent(message); // 메시지 내용 추출
        questionLogRepository.save(new QuestionLog(extractedMessage)); // 질문 로그 저장

        // WebClient 설정
        WebClient client = WebClient.builder()
                .baseUrl(ChatGptConfig.URL)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(ChatGptConfig.AUTHORIZATION, ChatGptConfig.BEARER + chatGptKey)
                .build();

        List<Message> messages = new ArrayList<>();

        // 초기 메시지 설정
        messages.add(Message.builder()
                .role("assistant")
                .content(ChatGptConfig.PROMPT)
                .build());

        // 사용자 메시지 추가
        messages.add(Message.builder()
                .role(ChatGptConfig.ROLE)
                .content(extractedMessage)
                .build());

        // ChatGptRequest 생성
        ChatGptRequest chatGptRequest = new ChatGptRequest(
                ChatGptConfig.MODEL,
                ChatGptConfig.TEMPERATURE,
                ChatGptConfig.STREAM,
                messages
        );

        // WebClient를 사용하여 API 호출 및 응답 처리
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

    /**
     * 메시지 내용에서 "message" 필드를 추출합니다.
     *
     * @param message JSON 형식의 메시지
     * @return 추출된 메시지 내용
     * @throws JsonProcessingException JSON 처리 중 예외가 발생할 수 있음
     */
    private String extractMessageContent(String message) throws JsonProcessingException {
        JsonNode jsonNode = objectMapper.readTree(message);
        return jsonNode.path("message").asText();
    }

    /**
     * 생성일자 기준으로 내림차순 정렬된 모든 질문 로그를 반환합니다.
     *
     * @return 생성일자 기준으로 정렬된 질문 로그 목록
     */
    public List<QuestionLog> getAllQuestionsOrderByCreatedAtDesc() {
        return questionLogRepository.findAllByOrderByCreatedAtDesc();
    }

    /**
     * 오늘 날짜에 생성된 질문 로그를 반환합니다.
     *
     * @return 오늘 생성된 질문 로그 목록
     */
    public List<QuestionLog> getTodayQuestions() {
        LocalDateTime today = LocalDateTime.now().toLocalDate().atStartOfDay();
        return questionLogRepository.findAllByOrderByCreatedAtDesc().stream()
                .filter(question -> question.getCreatedAt().isAfter(today))
                .collect(Collectors.toList());
    }
}
