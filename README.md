# Machine Learning Level 1 — Bài học trên web

Trang tĩnh chạy trên GitHub Pages, không cần máy chủ. Học sinh tự học lý thuyết theo từng chặng,
qua checkpoint rồi nhận chứng chỉ PNG nộp lên Canvas.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html`, `assets/home.js`, `assets/home3d.js`, `assets/home.css` | Trang chủ hành trình 3D, sáu khu học tập và danh sách bài theo khu |
| `assets/the-gioi.js` | Tên, mô tả, màu, biểu tượng và kiểu cảnh riêng của 25 bài; sáu khu dùng trên trang chủ |
| `baiNN/index.html` + `baiNN/data.js` | Một bài học. `data.js` sinh bằng `_Scripts/build_web.py` của bài đó |
| `baiNN/img/` | Hình tự vẽ + bản dự phòng khi ảnh GfG không tải được |
| `assets/app.js`, `assets/style.css`, `assets/lesson-world.css` | Bộ chạy và giao diện đọc dùng chung; màu và lời mời 3D theo từng bài |
| `baiNN/quest.html` | Game đi cảnh 3D cho cả 25 bài; mỗi trạm mở một chặng học |
| `assets/quest3d.js`, `assets/quest3d.css` | Bộ chạy và giao diện game 3D dùng chung |
| `_Chung/build_quest_ml.py` | Dựng lại `quest.html` và nối các asset chủ đề vào `index.html` sau khi build bài đọc |
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
- Quy ước số của khóa: **dấu `.` cho phần thập phân**, **dấu `,` giữa các phần tử vector**. Ví dụ trên web/slide: `(3.5, 120)`; trong Python, đây là tuple, còn `np.array([3.5, 120])` là mảng dùng để tính toán. Tránh `(3,5; 120)` và tránh đổi `2.6` thành `2,6` khi hiển thị đồ thị. Bộ chạy web cũng dùng dấu `.`.
- `lib_web.py` tự chuẩn hóa văn bản và băm lại đáp án sau khi dựng một bài. Khi cập nhật nhiều bài hoặc slide, chạy `_Chung/chuan_hoa_ky_hieu.py` để chuẩn hóa toàn bộ sản phẩm đang dùng; công cụ giữ bố cục PowerPoint và bỏ qua bản lưu/tài liệu tham khảo. Sau đó chạy `_Chung/build_quest_ml.py` để gắn lại cổng 3D và phiên bản asset mới. Kiểm tra phương án nhiễu của câu hỏi Python: phép đổi dấu có thể khiến phương án sai trùng đáp án đúng.

### Dựng lại toàn bộ web

Từ thư mục gốc khóa học, chạy theo thứ tự:

```bash
python _Tools/_Chung/dung_lai_tat_ca.py --chi web
python _Tools/_Chung/chuan_hoa_ky_hieu.py
python _Tools/_Chung/build_quest_ml.py
python _Tools/_Chung/dang_web.py "Cập nhật toàn bộ web"
```

Kiểm tra dòng `SO BUOC LOI: 0` sau bước đầu. Bài 12, 13 và 18 cần `scikit-learn`/`scipy` trong môi trường Python dùng để dựng bài. Bước `build_quest_ml.py` phải chạy sau cùng để giữ nút vào cổng 3D và phiên bản asset của cả 25 bài.

## Hành trình 3D và video

- Trang chủ có sáu khu 3D để học sinh tìm bài theo mạch kiến thức. Mỗi khu có cảnh, màu và ký hiệu riêng; đảo chuyển động nhẹ, sáng và phóng lớn khi rê chuột hoặc dùng bàn phím. Chọn khu để xem bài của khu ấy. Toàn bộ 25 bài đang có đều có cổng 3D với tên gắn nội dung, ví dụ **Thành phố Thống kê và Xác suất**, **Trường Vector**, **Rừng Cây quyết định**. Không dùng cùng một kiểu thành phố cho mọi bài. Metadata tập trung ở `assets/the-gioi.js` để tên ở trang chủ, trang đọc và game khớp nhau.
- Học sinh đi bằng WASD/phím mũi tên, nhấn E để vào trạm; trên màn hình cảm ứng có cần điều khiển và chạm trạm để tự đi tới. Menu cho phép dịch chuyển tới trạm đã mở. Trang đọc luôn có nút vào thế giới 3D gần đầu bài. Các chuyển động trang chủ tôn trọng chế độ giảm chuyển động.
- Một trạm tương ứng đúng một chặng của `index.html`. Sau checkpoint, game dừng ở màn trao đổi và ghi bài; giáo viên cho tiếp tục thì mới đi tới trạm sau. Qua đủ trạm mới mở checkpoint cuối và chứng chỉ. Tiến độ, tên, lớp và chứng chỉ dùng chung với chế độ đọc qua `localStorage`.
- Game tải Three.js từ jsDelivr; cần mạng và trình duyệt hỗ trợ WebGL. Nếu không tải được, trang hiện nút vào chế độ đọc. Luôn giữ `index.html` làm đường học dự phòng. Sau khi chạy `build_web.py` của bất kỳ bài nào, chạy `_Chung/build_quest_ml.py` để nối lại `the-gioi.js`, `lesson-world.css` và tạo lại cổng 3D. Không sửa tay `quest.html`; sửa metadata trong `the-gioi.js` hoặc cảnh dùng chung trong `quest3d.js`.
- Bài 1 có video Google for Developers về AI, ML và học sâu; Bài 2 có video IBM Technology về học có giám sát và không giám sát. Video ở đúng chặng liên quan, có ghi nguồn và mô tả bằng tiếng Việt. Đây là phần xem thêm; không cộng thời lượng video vào 60 phút hoạt động chính.
