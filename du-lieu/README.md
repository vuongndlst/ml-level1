# Dữ liệu dùng trong khoá học (thực hành nhóm và bài học)

Có hai loại: **dữ liệu thật** (ghi rõ nguồn và giấy phép bên dưới) và **dữ liệu mô phỏng** do giáo viên sinh bằng máy tính để dạy một ý cụ thể. Dữ liệu mô phỏng không mô tả người hay đồ vật có thật nào — mọi tên, mã trong đó là giả.

## Dữ liệu mô phỏng

| File | Nội dung | Dùng trong |
|---|---|---|
| `khoi10_hocky2.csv` | 240 học sinh khối 10 **mô phỏng** × 10 cột: giờ tự học, giờ ngủ, phút mạng xã hội, số lần nộp trễ, điểm, Đạt / Chưa đạt | Bài 3 – 6, 9, 10, 12, 13, 15, 16, 18, 20 – 22, 24 – 26, 31 |
| `students_ban.csv` | 95 dòng **mô phỏng**, cố ý có lỗi (trùng dòng, thiếu giá trị, sai định dạng, giá trị bất thường) để học làm sạch | Bài 7, 8 |
| `students_da_don.csv` | Bảng trên sau khi làm sạch (90 dòng) | Bài 7, 8 |
| `dienthoai_cu.csv` | 120 tin rao điện thoại cũ **mô phỏng**: tuổi máy, dung lượng, pin còn lại, số lần rơi, giá | Bài 15 |

`dienthoai_cu.csv` sinh bằng `Lesson 14. Linear Regression/_Scripts/build_dulieudienthoai.py` (seed cố định). Các file đã phát hành được giữ nguyên, không sinh lại — mọi con số trên web, slide, notebook và quiz đều do notebook chạy thật trên đúng các file này.

# Dữ liệu thật

## smmh.csv — Social Media and Mental Health

- Nguồn: Kaggle, [Social Media and Mental Health](https://www.kaggle.com/datasets/souvikahmed071/social-media-and-mental-health) — souvikahmed071 và cộng sự, khảo sát trực tuyến năm 2022, 481 câu trả lời × 21 cột.
- Giấy phép: **Open Database License (ODbL) v1.0** cho cơ sở dữ liệu; nội dung © các tác giả gốc. <https://opendatacommons.org/licenses/odbl/1-0/>
- Bản này giữ nguyên nội dung gốc, không sửa dòng nào (bản có đủ giây trong cột Timestamp, lấy từ một bản sao công khai trên GitHub và đối chiếu với hai bản sao khác).
- Dùng trong: Bài 11 và Bài 17 (thực hành), Machine Learning Level 1, Trường THCS và THPT Đinh Thiện Lý.

## zoo.csv — Zoo (UCI Machine Learning Repository)

- Nguồn: Forsyth, R. (1990). *Zoo* [Dataset]. UCI Machine Learning Repository. <https://doi.org/10.24432/C5R59V> — 101 con vật × 18 cột.
- Giấy phép: **Creative Commons Attribution 4.0 (CC BY 4.0)**.
- Bản này giữ nguyên số liệu gốc; chỉ thêm dòng tên cột (bản gốc `zoo.data` không có tiêu đề).
- Dùng trong: Bài 19 (thực hành).

## water_potability.csv — Water Quality (Kaggle)

- Nguồn: Kaggle, [Water Quality](https://www.kaggle.com/datasets/adityakadiwal/water-potability) — Aditya Kadiwal. 3 276 mẫu nước × 10 cột.
- Giấy phép: **CC0: Public Domain**.
- Bản này giữ nguyên nội dung gốc (lấy từ một bản sao công khai trên GitHub, đối chiếu trùng khớp với bản sao thứ hai).
- Lưu ý dạy học: nguồn đo đạc không được mô tả rõ; tương quan của mọi cột với nhãn gần 0 — dùng để dạy đánh giá chất lượng dữ liệu.
- Dùng trong: Bài 23 (thực hành).

## spotify_mau.csv — Spotify Songs (TidyTuesday)

- Nguồn: R for Data Science Online Learning Community, TidyTuesday 2020-01-21 — [Spotify Songs](https://github.com/rfordatascience/tidytuesday/tree/main/data/2020/2020-01-21). Dữ liệu do Kaylin Pavlik thu thập từ Spotify Web API qua gói [spotifyr](https://www.rcharlie.com/spotifyr/) (Charlie Thompson, Josiah Parry, Donal Phipps, Tom Wolff).
- Giấy phép: repo TidyTuesday phát hành theo **CC0 1.0 Universal**. Tên bài hát, ca sĩ thuộc về chủ sở hữu tương ứng; chỉ số âm thanh do Spotify ước lượng.
- Bản này là **mẫu rút gọn**: từ 32 833 dòng gốc, rút 180 bài mỗi thể loại (seed 7) và giữ mọi dòng của các bài đó → 1 235 dòng × 11 cột (bỏ bớt cột ID, album, key, mode, loudness, instrumentalness, liveness; thêm cột `nam` từ ngày phát hành; làm tròn 3 chữ số). Các dòng trùng (một bài nằm trong nhiều playlist) được giữ nguyên để học sinh làm sạch.
- Dùng trong: Bài 27 (thực hành).

## bui_min_ngay.csv — Beijing PM2.5 (UCI), gộp theo ngày

- Nguồn: Liang, X., Zou, T., Guo, B., Li, S., Zhang, H., Zhang, S., Huang, H. & Chen, S. X. (2015). *Beijing PM2.5* [Dataset]. UCI Machine Learning Repository. <https://archive.ics.uci.edu/dataset/381/beijing+pm2+5+data> (DOI 10.24432/C5JS49) — số đo theo giờ tại Đại sứ quán Mỹ ở Bắc Kinh, 2010 – 2014.
- Giấy phép: **Creative Commons Attribution 4.0 (CC BY 4.0)**.
- Bản này là **bản gộp theo ngày** (1 826 ngày × 6 cột): `pm25` trung bình các giờ có số đo (để trống nếu cả ngày không có số đo — 37 ngày), `diem_suong`, `nhiet_do`, `ap_suat` trung bình ngày, `gio_max` tốc độ gió cộng dồn lớn nhất trong ngày. Bản theo giờ lấy từ bản sao jbrownlee/Datasets (`pollution.csv`), đối chiếu trùng khớp với phần tải được từ UCI.
- Dùng trong: Bài 30; đề 1 và dự án mẫu của Dự án cuối khoá.

## forestfires.csv — Forest Fires (UCI)

- Nguồn: Cortez, P. & Morais, A. (2007). *Forest Fires* [Dataset]. UCI Machine Learning Repository. <https://archive.ics.uci.edu/dataset/162/forest+fires> — 517 vụ cháy ở công viên Montesinho (Bồ Đào Nha) × 13 cột.
- Giấy phép: **Creative Commons Attribution 4.0 (CC BY 4.0)**.
- Bản này giữ nguyên file gốc `forestfires.csv` tải từ UCI.
- Lưu ý dạy học: đa số vụ có diện tích cháy rất nhỏ hoặc 0; model phân loại “có lan rộng” chỉ nhỉnh hơn mốc — đề khó, dùng để dạy kết luận trung thực.
- Dùng trong: Dự án cuối khoá — Bài 32 – 34 (đề 3).

## Thyroid_Diff.csv — Differentiated Thyroid Cancer Recurrence (UCI)

- Nguồn: Borzooei, S. & Tarokhian, A. (2023). *Differentiated Thyroid Cancer Recurrence* [Dataset]. UCI Machine Learning Repository. <https://archive.ics.uci.edu/dataset/915/differentiated+thyroid+cancer+recurrence> — 383 bệnh nhân × 17 cột, theo dõi 10 năm; target `Recurred` (tái phát: 108 có, 275 không).
- Giấy phép: **Creative Commons Attribution 4.0 (CC BY 4.0)**.
- Bản này giữ nguyên file gốc `Thyroid_Diff.csv` tải từ UCI (dữ liệu đã ẩn danh, không có tên hay mã bệnh nhân).
- Lưu ý dạy học: cột `Response` là kết quả sau điều trị — có nó model đúng khoảng 96%, bỏ đi còn khoảng 88% (mốc 71,8%): dạy câu hỏi “lúc dự đoán thì đã biết cột này chưa?”. Có 19 dòng giống hệt nhau — có thể là các bệnh nhân khác nhau có cùng thông số, nhóm phải nêu cách xử lý và lý do. Đề nhạy cảm: model không dùng để chẩn đoán.
- Dùng trong: Dự án cuối khoá — Bài 32 – 34 (đề 8).
