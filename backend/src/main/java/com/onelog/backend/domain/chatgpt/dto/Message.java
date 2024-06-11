package com.onelog.backend.domain.chatgpt.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * gpt 요청 dto를 위한 dto
 */
@Getter
@NoArgsConstructor
public class Message implements Serializable {
    String role;
    String content;

    @Builder
    public Message(String role, String content) {
        this.role = role;
        this.content = content;
    }
}
