# Dữ liệu dùng trong các buổi thực hành

## smmh.csv — Social Media and Mental Health

- Nguồn: Kaggle, [Social Media and Mental Health](https://www.kaggle.com/datasets/souvikahmed071/social-media-and-mental-health) — souvikahmed071 và cộng sự, khảo sát trực tuyến năm 2022, 481 câu trả lời × 21 cột.
- Giấy phép: **Open Database License (ODbL) v1.0** cho cơ sở dữ liệu; nội dung © các tác giả gốc. <https://opendatacommons.org/licenses/odbl/1-0/>
- Bản này giữ nguyên nội dung gốc, không sửa dòng nào (bản có đủ giây trong cột Timestamp, lấy từ một bản sao công khai trên GitHub và đối chiếu với hai bản sao khác).
- Dùng trong: Thực hành nhóm 1 và 3, Machine Learning Level 1, Trường THCS và THPT Đinh Thiện Lý.

## zoo.csv — Zoo (UCI Machine Learning Repository)

- Nguồn: Forsyth, R. (1990). *Zoo* [Dataset]. UCI Machine Learning Repository. <https://doi.org/10.24432/C5R59V> — 101 con vật × 18 cột.
- Giấy phép: **Creative Commons Attribution 4.0 (CC BY 4.0)**.
- Bản này giữ nguyên số liệu gốc; chỉ thêm dòng tên cột (bản gốc `zoo.data` không có tiêu đề).
- Dùng trong: Thực hành nhóm 4.

## water_potability.csv — Water Quality (Kaggle)

- Nguồn: Kaggle, [Water Quality](https://www.kaggle.com/datasets/adityakadiwal/water-potability) — Aditya Kadiwal. 3 276 mẫu nước × 10 cột.
- Giấy phép: **CC0: Public Domain**.
- Bản này giữ nguyên nội dung gốc (lấy từ một bản sao công khai trên GitHub, đối chiếu trùng khớp với bản sao thứ hai).
- Lưu ý dạy học: nguồn đo đạc không được mô tả rõ; tương quan của mọi cột với nhãn gần 0 — dùng để dạy đánh giá chất lượng dữ liệu.
- Dùng trong: Thực hành nhóm 5.

## spotify_mau.csv — Spotify Songs (TidyTuesday)

- Nguồn: R for Data Science Online Learning Community, TidyTuesday 2020-01-21 — [Spotify Songs](https://github.com/rfordatascience/tidytuesday/tree/main/data/2020/2020-01-21). Dữ liệu do Kaylin Pavlik thu thập từ Spotify Web API qua gói [spotifyr](https://www.rcharlie.com/spotifyr/) (Charlie Thompson, Josiah Parry, Donal Phipps, Tom Wolff).
- Giấy phép: repo TidyTuesday phát hành theo **CC0 1.0 Universal**. Tên bài hát, ca sĩ thuộc về chủ sở hữu tương ứng; chỉ số âm thanh do Spotify ước lượng.
- Bản này là **mẫu rút gọn**: từ 32 833 dòng gốc, rút 180 bài mỗi thể loại (seed 7) và giữ mọi dòng của các bài đó → 1 235 dòng × 11 cột (bỏ bớt cột ID, album, key, mode, loudness, instrumentalness, liveness; thêm cột `nam` từ ngày phát hành; làm tròn 3 chữ số). Các dòng trùng (một bài nằm trong nhiều playlist) được giữ nguyên để học sinh làm sạch.
- Dùng trong: Thực hành nhóm 6.
