package com.onelog.backend.domain.chatgpt.repository;

import com.onelog.backend.domain.chatgpt.entity.QuestionLog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionLogRepository extends JpaRepository<QuestionLog, Long> {
    List<QuestionLog> findAllByOrderByCreatedAtDesc();
}
