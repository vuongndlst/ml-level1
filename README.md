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
| `bai05/quest.html`, `bai06/quest.html` | Game đi cảnh 3D; mỗi trạm mở một chặng học |
| `assets/quest3d.js`, `assets/quest3d.css` | Bộ chạy và giao diện game 3D dùng chung |
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

## Game đi cảnh và video

- Bài 5 mở **Thành phố Dữ liệu**; Bài 6 mở **Đô thị Vector** từ trang chủ hoặc nút trong trang bài học. Mỗi thành phố dùng màu, biểu tượng và bảng chỉ dẫn riêng theo nội dung bài. Học sinh đi bằng WASD/phím mũi tên, nhấn E để vào trạm; trên màn hình cảm ứng có cần điều khiển và chạm trạm để tự đi tới. Menu cho phép dịch chuyển tới trạm đã mở.
- Một trạm tương ứng đúng một chặng của `index.html`. Sau checkpoint, game dừng ở màn trao đổi và ghi bài; giáo viên cho tiếp tục thì mới đi tới trạm sau. Qua đủ trạm mới mở checkpoint cuối và chứng chỉ. Tiến độ, tên, lớp và chứng chỉ dùng chung với chế độ đọc qua `localStorage`.
- Game tải Three.js từ jsDelivr; cần mạng và trình duyệt hỗ trợ WebGL. Nếu không tải được, trang hiện nút vào chế độ đọc. Luôn giữ `index.html` làm đường học dự phòng. Không ghi đè `quest.html` khi chạy `build_web.py`.
- Bài 1 có video Google for Developers về AI, ML và học sâu; Bài 2 có video IBM Technology về học có giám sát và không giám sát. Video ở đúng chặng liên quan, có ghi nguồn và mô tả bằng tiếng Việt. Đây là phần xem thêm; không cộng thời lượng video vào 60 phút hoạt động chính.
