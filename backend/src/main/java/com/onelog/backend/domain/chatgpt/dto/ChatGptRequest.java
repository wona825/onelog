package com.onelog.backend.domain.chatgpt.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * chatgpt 요청을 위한 dto
 */
@Getter
@NoArgsConstructor
public class ChatGptRequest implements Serializable {

    private String model;
    private Double temperature;
    private Boolean stream;
    private List<Message> messages;

    @Builder
    public ChatGptRequest(String model, Double temperature, Boolean stream, List<Message> messages) {
        this.model = model;
        this.temperature = temperature;
        this.stream = stream;
        this.messages = messages;
    }
}

