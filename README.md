# Machine Learning Level 1 — Bài học trên web

Trang tĩnh chạy trên GitHub Pages, không cần máy chủ. Học sinh tự học lý thuyết theo từng chặng,
qua checkpoint rồi nhận chứng chỉ PNG nộp lên Canvas.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang chủ — danh sách bài (đọc `assets/khoa.js`) |
| `baiNN/index.html` + `baiNN/data.js` | Một bài học. `data.js` sinh bằng `_Scripts/build_web.py` của bài đó |
| `baiNN/img/` | Hình tự vẽ + bản dự phòng khi ảnh GfG không tải được |
| `assets/app.js`, `assets/style.css` | Bộ chạy và giao diện dùng chung |
| `kiem-tra.html` | Giáo viên dán danh sách `Họ tên ; Lớp ; Mã` để đối chiếu mã chứng chỉ |

## Đưa lên GitHub Pages

1. Tạo repo, chép toàn bộ thư mục `_Web/` vào gốc repo.
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. Link bài: `https://vuongndlst.github.io/ml-level1/bai04/` — dán vào Canvas. Cập nhật: `python _Chung/dang_web.py "nội dung"`.

## Chạy thử trên máy

```bash
python -m http.server 8765 --directory _Web
```

Mở `http://localhost:8765/bai04/`.

## Lưu ý

- Tiến độ lưu trong `localStorage` của trình duyệt — đổi máy thì học lại từ đầu.
- Đáp án chỉ lưu dạng băm (cyrb53); mã chứng chỉ tính từ bài + họ tên + lớp. Web tĩnh nên người cố tình đọc mã nguồn vẫn dò được — đây là đánh giá quá trình, điểm chính thức ở quiz Canvas.
- Hình GfG được nhúng thẳng từ máy chủ gốc, ghi nguồn dưới hình, chỉ dùng cho mục đích học tập.
- Sửa nội dung: sửa `build_web.py` của bài rồi chạy lại — không sửa tay `data.js`.
