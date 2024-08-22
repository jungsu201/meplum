# 관리자 테이블
CREATE TABLE administrators (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '관리자 ID (자동 증가)',
    name VARCHAR(100) COMMENT '이름',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT '이메일 (필수, 중복 불가)',
    password_hash VARCHAR(255) NOT NULL COMMENT '비밀번호 해시 (필수)',
    is_active BOOLEAN DEFAULT TRUE COMMENT '활성화 여부 (기본값: TRUE)',
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP COMMENT '생성일시 (기본값: 현재 시간)',
    last_login TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP(3) COMMENT '마지막 로그인 일시'
);

