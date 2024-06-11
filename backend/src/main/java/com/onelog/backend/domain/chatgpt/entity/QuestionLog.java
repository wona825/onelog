package com.onelog.backend.domain.chatgpt.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 사용자로부터 질문받은 내역을 기록하기 위한 entity
 */
@Entity
@Getter
@NoArgsConstructor
public class QuestionLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private LocalDateTime createdAt;

    public QuestionLog(String content) {
        this.content = content;
        this.createdAt = LocalDateTime.now();
    }
}
