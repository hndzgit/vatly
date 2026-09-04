<div align="center">

# Ô Chữ Vật Lý

### Trò chơi ô chữ tương tác giúp ôn tập kiến thức chuyển động và cơ học

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111)
![Questions](https://img.shields.io/badge/Câu_hỏi-8-8B5CF6?style=flat-square)

</div>

## Giới thiệu

**Ô Chữ Vật Lý** là ứng dụng web học tập giúp người chơi củng cố kiến thức qua tám câu hỏi tương tác. Mỗi đáp án đúng đóng góp vào từ khóa bí mật, tạo cảm giác vừa học vừa khám phá.

## Tính năng nổi bật

- Bộ tám câu hỏi về chuyển động, tần số, radian, đòn bẩy và các chủ đề vật lý liên quan.
- Cơ chế giải ô chữ và khám phá từ khóa bí mật.
- Chế độ hỏi đáp miệng với lựa chọn Đúng/Sai.
- Đồng hồ đếm thời gian cho từng lượt chơi.
- Âm thanh đọc câu hỏi và phản hồi kết quả.
- Minh họa vật lý bằng SVG có chuyển động.
- Giao diện tương tác, phù hợp để trình chiếu trong lớp học.
- Không cần backend hoặc cơ sở dữ liệu.

## Chạy dự án

~~~bash
git clone https://github.com/hndzgit/vatly.git
cd vatly
python -m http.server 8000
~~~

Sau đó mở <http://localhost:8000>. Có thể mở trực tiếp <code>index.html</code>, nhưng chạy qua local server sẽ giúp trình duyệt tải audio và tài nguyên ổn định hơn.

## Cấu trúc dự án

~~~text
vatly/
├── index.html       # Giao diện trò chơi
├── style.css        # Thiết kế và hiệu ứng
├── script.js        # Câu hỏi, luật chơi và tương tác
├── images/          # Hình ảnh minh họa
├── voices/          # Giọng đọc câu hỏi
└── *.mp3            # Âm thanh phản hồi
~~~

## Công nghệ

Ứng dụng được xây dựng hoàn toàn bằng HTML, CSS, JavaScript thuần, SVG và audio — nhẹ, dễ chạy và dễ triển khai lên dịch vụ static hosting.

---

<div align="center">
Một dự án học tập được duy trì bởi <a href="https://github.com/hndzgit">Nam Hoai</a>
</div>
