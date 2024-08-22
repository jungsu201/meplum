const express = require('express');
const router = express.Router();
const db = require('../../util/db');

// POST /api/auth/signin
router.all('/signin', (req, res) => {
    // 여기에 로그인 로직을 구현하세요
    // 요청 본문에서 사용자 이름과 비밀번호를 가져옵니다
    const { email, password } = req.body;

    console.log(email, password);

    // 이메일과 패스워드로 administrators 테이블을 조회하고 결과 값을 반환합니다
    db.executeQuery('SELECT * FROM administrators WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: '내부 서버 오류' });
        } else {
            if (results.length > 0) {
                // 로그인 성공
                res.json({ message: '로그인 성공' });
            } else {
                // 로그인 실패
                res.status(401).json({ message: '유효하지 않은 이메일 또는 비밀번호' });
            }
        }
    });

});

module.exports = router;
