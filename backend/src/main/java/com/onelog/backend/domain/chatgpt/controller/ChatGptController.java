package com.onelog.backend.domain.chatgpt.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.onelog.backend.domain.chatgpt.service.ChatGptService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("api/chat-gpt")
public class ChatGptController {

    private final ChatGptService chatGptService;

    public ChatGptController(ChatGptService chatGptService) {
        this.chatGptService = chatGptService;
    }

    @PostMapping(value="/ask-stream/v1", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> ask(@RequestBody String message){
        try {
            return chatGptService.ask(message);
        }catch (JsonProcessingException je){
            return Flux.empty();
        }
    }
}

