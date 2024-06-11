package com.onelog.backend.domain.chatgpt.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.onelog.backend.domain.chatgpt.entity.QuestionLog;
import com.onelog.backend.domain.chatgpt.service.ChatGptService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.List;

@RestController
@RequestMapping("api/chat-gpt")
public class ChatGptController {

    // ChatGptService 인스턴스를 주입받음
    private final ChatGptService chatGptService;

    // ChatGptController 생성자
    public ChatGptController(ChatGptService chatGptService) {
        this.chatGptService = chatGptService;
    }

    /**
     * 사용자로부터 메시지를 받아 ChatGptService를 통해 처리하고,
     * 결과를 텍스트 스트림 형태로 반환합니다.
     *
     * @param message 사용자가 보낸 메시지
     * @return ChatGptService의 응답을 Flux 형태로 반환
     */
    @PostMapping(value="/ask-stream/v1", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> ask(@RequestBody String message){
        try {
            return chatGptService.ask(message);
        } catch (JsonProcessingException je) {
            return Flux.empty(); // JSON 처리 오류 발생 시 빈 Flux 반환
        }
    }

    /**
     * 모든 질문 로그를 생성일자 기준으로 내림차순 정렬하여 반환합니다.
     *
     * @return 생성일자 기준으로 정렬된 질문 로그 목록
     */
    @GetMapping("/questions/v1")
    public ResponseEntity<List<QuestionLog>> getAllQuestionsOrderByCreatedAtDesc() {
        List<QuestionLog> questionLogs = chatGptService.getAllQuestionsOrderByCreatedAtDesc();
        return ResponseEntity.ok(questionLogs);
    }

    /**
     * 오늘 날짜에 생성된 질문 로그를 반환합니다.
     *
     * @return 오늘 생성된 질문 로그 목록
     */
    @GetMapping("/questions/today/v1")
    public List<QuestionLog> getTodayQuestions() {
        return chatGptService.getTodayQuestions();
    }
}
