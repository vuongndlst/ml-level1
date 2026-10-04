window.BAI = {
 "bai": 6,
 "ma": "bai06",
 "nhan": "Bài 6",
 "tieu_de": "Vector và khoảng cách",
 "phan": "Module 05 · Math for Machine Learning",
 "cau_hoi": "Máy so hai học sinh bằng cách nào?",
 "gioi_thieu": [
  "Đầu giờ con đã nhìn ba bạn <b>A, B, C</b> trong bảng khối 10 và đoán A giống ai hơn. Máy không “nhìn” được như con — máy chỉ có các con số.",
  "Làm <b>từng chặng</b> theo hướng dẫn trên slide. Xong checkpoint của một chặng, dừng lại để cả lớp trao đổi và ghi bài rồi mới mở chặng tiếp theo. Ba chặng của bài này giúp con biểu diễn học sinh bằng vector, đo khoảng cách và đưa các cột về cùng thang đo. Dữ liệu 240 học sinh là dữ liệu mô phỏng để luyện tập.",
  "Con sẽ dùng lại tọa độ và định lý Pythagoras đã học ở Toán. Sai số dự đoán và cách máy điều chỉnh mô hình sẽ học khi thực hành huấn luyện."
 ],
 "thoi_gian": "≈ 15 phút",
 "muoi": "LSTS-ML1-WEB|bai06",
 "muc_tieu": [
  "Biểu diễn được một học sinh bằng vector và cả bảng dữ liệu bằng ma trận.",
  "Tính được khoảng cách Euclid giữa hai vector cùng số chiều.",
  "Giải thích được vì sao cần xem thang đo trước khi so khoảng cách; đưa được một giá trị về khoảng 0 – 1."
 ],
 "du_lieu": [
  {
   "ten": "Dữ liệu học tập minh họa",
   "tep": "khoi10_hocky2.csv",
   "url": "../du-lieu/khoi10_hocky2.csv",
   "mo_ta": "Mỗi dòng là một học sinh; mỗi cột là một thông tin về học sinh đó.",
   "so_dong": 240,
   "cot": [
    "StudentID",
    "HoTen",
    "Lop",
    "GioiTinh",
    "StudyHours",
    "SleepHours",
    "PhutMangXH",
    "SoLanNopTre",
    "Score",
    "Result"
   ],
   "giai_thich": [
    "Mã học sinh",
    "Họ tên",
    "Lớp",
    "Giới tính",
    "Số giờ học",
    "Số giờ ngủ",
    "Phút dùng mạng xã hội",
    "Số lần nộp trễ",
    "Điểm số",
    "Kết quả đạt/không đạt"
   ],
   "mau": [
    [
     "HS001",
     "Tran Vy",
     "10A2",
     "Nam",
     "0.6",
     "5.1",
     "126",
     "0",
     "3.4",
     "Fail"
    ],
    [
     "HS002",
     "Pham Vy",
     "10A3",
     "Nu",
     "5.1",
     "5.2",
     "135",
     "0",
     "6.2",
     "Pass"
    ],
    [
     "HS003",
     "Dang Oanh",
     "10A4",
     "Nam",
     "3.9",
     "5.5",
     "111",
     "2",
     "5.3",
     "Pass"
    ]
   ]
  }
 ],
 "khoa": "Machine Learning Level 1",
 "truong": "Trường THCS và THPT Đinh Thiện Lý",
 "khoi": "Khối 10",
 "ds_lop": [
  "10A1",
  "10A2",
  "10A3",
  "10A4",
  "10A5",
  "10A6",
  "10A7",
  "10A8"
 ],
 "khoa_cc": "LSTS-ML1-CC",
 "tien_to_luu": "ml1_",
 "chang": [
  {
   "ten": "Vector và ma trận",
   "ten_ngan": "Vector",
   "phut": 4,
   "muc_tieu": "biểu diễn được một học sinh thành vector và cả bảng dữ liệu thành ma trận.",
   "khoi_dong": "Máy tính không “thấy” bạn A như con thấy. Vậy máy lưu bạn A dưới dạng gì?",
   "khoi": [
    {
     "t": "p",
     "html": "Ở Toán 10, một vectơ trong mặt phẳng tọa độ được xác định bởi <b>hai số</b> (x, y). Machine Learning dùng đúng ý đó để lưu dữ liệu, và cho phép dùng bao nhiêu số cũng được."
    },
    {
     "t": "dinh_nghia",
     "ten": "Vector (trong Machine Learning)",
     "html": "Một <b>dãy số có thứ tự</b>; mỗi số ứng với một đặc điểm (một cột) của đối tượng. Số lượng số trong dãy gọi là <b>số chiều</b> của vector.",
     "ky_hieu": "Bạn A với hai cột (giờ tự học; phút mạng xã hội): A = (2.6, 86) — vector 2 chiều."
    },
    {
     "t": "dinh_nghia",
     "ten": "Ma trận",
     "html": "Bảng số gồm nhiều dòng và nhiều cột. Bảng dữ liệu có m dòng, n cột là một ma trận <b>cỡ m × n</b> (ghi số dòng trước, số cột sau); mỗi dòng là vector của một đối tượng.",
     "ky_hieu": "Bảng khối 10 lấy 2 cột: ma trận cỡ 240 × 2."
    },
    {
     "t": "anh",
     "cap": "Vector, ma trận và tensor",
     "alt": "Vector, ma trận và tensor",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250820180052737722/vector_tensor.webp",
     "du_phong": "img/minh-hoa-vector-ma-tran-va-tensor.png",
     "nguon": {
      "ten": "GeeksforGeeks — Machine learning mathematics",
      "url": "https://www.geeksforgeeks.org/machine-learning/machine-learning-mathematics/"
     },
     "chu_giai": [
      [
       "Vector",
       "Vector — một dãy số"
      ],
      [
       "Matrix",
       "Ma trận — bảng số nhiều dòng, nhiều cột"
      ],
      [
       "Tensor",
       "Tensor — nhiều ma trận xếp chồng lên nhau (gặp lại ở Level 2)"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "ba bạn A, B, C thành ba vector",
     "de": "Lấy hai cột trong bảng khối 10, theo thứ tự (giờ tự học; phút mạng xã hội):",
     "cot": [
      "Bạn",
      "Mã học sinh",
      "Giờ tự học",
      "Phút mạng xã hội",
      "Vector"
     ],
     "dong": [
      [
       "A",
       "HS130",
       "2.6",
       "86",
       "<b>(2.6, 86)</b>"
      ],
      [
       "B",
       "HS147",
       "6.7",
       "70",
       "<b>(6.7, 70)</b>"
      ],
      [
       "C",
       "HS043",
       "2.2",
       "182",
       "<b>(2.2, 182)</b>"
      ]
     ],
     "ket_luan": "Ba vector xếp chồng thành một ma trận 3 × 2. Cả khối 240 bạn là ma trận 240 × 2 — chính là bảng con mở bằng Pandas.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Một bức ảnh cũng là ma trận: ô trắng (đường viền trái tim) ghi 1, ô nền xanh ghi 0",
     "alt": "Một bức ảnh cũng là ma trận: ô trắng (đường viền trái tim) ghi 1, ô nền xanh ghi 0",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250707145023542851/matrix_image.webp",
     "du_phong": "img/minh-hoa-mot-buc-anh-duoc-luu-duoi-dang-ma-tran.png",
     "nguon": {
      "ten": "GeeksforGeeks — Machine learning mathematics",
      "url": "https://www.geeksforgeeks.org/machine-learning/machine-learning-mathematics/"
     },
     "chu_giai": [
      [
       "Example using matrices for image processing",
       "Ví dụ dùng ma trận để xử lý ảnh"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Vì sao máy cần vector?",
     "html": "Mọi thuật toán Machine Learning đều tính toán trên số. Biến mỗi học sinh, mỗi bức ảnh, mỗi câu văn thành vector là bước đầu tiên để máy có thể so sánh và học."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đổi thứ tự các số: (2.6, 86) và (86, 2.6) là hai vector khác nhau — thứ tự số phải khớp thứ tự cột.",
      "Ghi cỡ ma trận ngược: bảng 240 dòng, 2 cột là 240 × 2, không phải 2 × 240.",
      "Nghĩ vector bắt buộc phải là mũi tên. Trong Machine Learning, vector đơn giản là một dãy số có thứ tự."
     ]
    },
    {
     "t": "video",
     "yt": "fNk_zzaMoSs",
     "ten": "3Blue1Brown — Vectors, what even are they?",
     "ghi_chu": "tiếng Anh, có phụ đề (CC); không bắt buộc — 3 phút đầu nói về ba cách nhìn vector",
     "bat_dau": null,
     "ket_thuc": 200
    },
    {
     "t": "tom_tat",
     "html": "Một đối tượng là một vector — dãy số có thứ tự. Nhiều vector xếp chồng thành ma trận, chính là bảng dữ liệu."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Vectơ: toạ độ của vectơ",
       "url": null,
       "ghi_chu": "SGK"
      },
      {
       "ten": "3Blue1Brown — Essence of linear algebra (tập 1)",
       "url": "https://www.3blue1brown.com/lessons/vectors",
       "ghi_chu": "tiếng Anh, hình động"
      },
      {
       "ten": "NumPy — the absolute basics for beginners (mảng 1 chiều, 2 chiều)",
       "url": "https://numpy.org/doc/stable/user/absolute_beginners.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q1",
     "q": "Bạn D tự học 3.5 giờ và dùng mạng xã hội 120 phút mỗi ngày. Theo thứ tự cột (giờ tự học; phút mạng xã hội), vector của bạn D là gì?",
     "giai": "Hai cột nên vector có 2 số, theo đúng thứ tự cột: giờ tự học trước, phút mạng sau. Tên bạn D không phải là số đo.",
     "goi_y": "Mỗi số ứng với một cột, và thứ tự các số phải theo đúng thứ tự cột.",
     "a": [
      "(3.5, 120)",
      "(120, 3.5)",
      "(123.5,)",
      "(3.5, 120, 0)"
     ],
     "h": "118664e11e38d4"
    },
    {
     "k": "dd",
     "id": "bai06-q2",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "Cỡ ma trận ghi số dòng (30) trước, số cột (4) sau. Số chiều của vector bằng số cột.",
     "goi_y": "Mỗi dòng là một học sinh. Số chiều của vector bằng số cột.",
     "mau": "Bảng có 30 học sinh, mỗi học sinh 4 cột số. Bảng là ma trận cỡ {0}; mỗi học sinh là một vector {1} chiều.",
     "o": [
      [
       "30 × 4",
       "4 × 30",
       "30 × 30",
       "34 × 1"
      ],
      [
       "4",
       "30",
       "2",
       "120"
      ]
     ],
     "h": "196425732a164f"
    },
    {
     "k": "ds",
     "id": "bai06-q3",
     "q": "Vector (2.6, 86) và vector (86, 2.6) biểu diễn cùng một học sinh.",
     "giai": "Thứ tự số phải khớp thứ tự cột: (86, 2.6) nghĩa là học 86 giờ và dùng mạng 2.6 phút — một học sinh khác hẳn.",
     "goi_y": "Nếu đọc (86, 2.6) theo thứ tự cột (giờ tự học; phút mạng) thì được gì?",
     "h": "11157f65fe677f"
    }
   ]
  },
  {
   "ten": "Khoảng cách Euclid",
   "ten_ngan": "Khoảng cách",
   "phut": 5,
   "muc_tieu": "tính được khoảng cách Euclid giữa hai vector và dùng nó để so sánh mức giống nhau.",
   "khoi_dong": "Nếu mỗi bạn là một điểm trên mặt phẳng tọa độ, làm sao đo được hai bạn “gần” nhau đến mức nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Toán 10: khoảng cách giữa hai điểm A(x<sub>1</sub>, y<sub>1</sub>) và B(x<sub>2</sub>, y<sub>2</sub>) là AB = √[(x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>]. Công thức có từ <b>định lý Pythagoras</b>: hai hiệu là hai cạnh góc vuông, khoảng cách là cạnh huyền."
    },
    {
     "t": "anh",
     "cap": "Khoảng cách d giữa A và B là cạnh huyền của tam giác vuông ABC",
     "alt": "Khoảng cách d giữa A và B là cạnh huyền của tam giác vuông ABC",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260729183612327319/euclidean-distance-formula-derivation-2.png",
     "du_phong": "img/minh-hoa-cong-thuc-khoang-cach-euclid-tu-dinh-ly-pythagoras.png",
     "nguon": {
      "ten": "GeeksforGeeks — Euclidean distance",
      "url": "https://www.geeksforgeeks.org/maths/euclidean-distance/"
     },
     "chu_giai": [
      [
       "d",
       "Khoảng cách (distance) giữa A và B"
      ],
      [
       "x<sub>2</sub> − x<sub>1</sub>",
       "Cạnh góc vuông nằm ngang: hiệu hoành độ"
      ],
      [
       "y<sub>2</sub> − y<sub>1</sub>",
       "Cạnh góc vuông thẳng đứng: hiệu tung độ"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Khoảng cách Euclid",
     "html": "Với hai vector cùng số chiều: lấy <b>hiệu</b> từng cặp số cùng cột, <b>bình phương</b>, <b>cộng</b> lại rồi lấy <b>căn bậc hai</b>. Khoảng cách càng nhỏ, hai đối tượng càng gần nhau <b>theo các cột và thang đo đã chọn</b>; bằng 0 khi hai vector trùng nhau.",
     "ky_hieu": "d(A, B) = √[(a<sub>1</sub> − b<sub>1</sub>)<sup>2</sup> + (a<sub>2</sub> − b<sub>2</sub>)<sup>2</sup> + … + (a<sub>n</sub> − b<sub>n</sub>)<sup>2</sup>]"
    },
    {
     "t": "vi_du",
     "tieu_de": "khoảng cách từ A đến B và từ A đến C",
     "de": "A = (2.6, 86), B = (6.7, 70), C = (2.2, 182).",
     "cot": [
      "Bước",
      "A → B",
      "A → C"
     ],
     "dong": [
      [
       "Hiệu giờ tự học",
       "2.6 − 6.7 = −4.1",
       "2.6 − 2.2 = 0.4"
      ],
      [
       "Hiệu phút mạng",
       "86 − 70 = 16",
       "86 − 182 = −96"
      ],
      [
       "Bình phương hai hiệu",
       "16.81 và 256",
       "0.16 và 9216"
      ],
      [
       "Cộng lại",
       "272.81",
       "9216.16"
      ],
      [
       "Lấy căn bậc hai",
       "<b>≈ 16.5</b>",
       "<b>≈ 96.0</b>"
      ]
     ],
     "ket_luan": "Theo phép đo này, A gần B hơn nhiều (16.5 so với 96.0) — ngược với điều mắt con thấy trên hình đầu giờ. Chặng 3 giải thích vì sao.",
     "nhan_manh": [
      4
     ]
    },
    {
     "t": "demo_khoang_cach",
     "tieu_de": "khoảng cách giữa hai bạn",
     "huong_dan": "Sửa số trong các ô vàng để đổi số liệu của A và B. Máy hiện từng bước tính — con so với bảng ví dụ ở trên.",
     "cot": [
      "Giờ tự học",
      "Phút mạng xã hội"
     ],
     "diem": {
      "A": [
       2.6,
       86
      ],
      "B": [
       6.7,
       70
      ]
     },
     "mien": null,
     "nhan_thang_do": null
    },
    {
     "t": "anh",
     "cap": "Ba ứng dụng của khoảng cách Euclid ngoài đời",
     "alt": "Ba ứng dụng của khoảng cách Euclid ngoài đời",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260729183611662101/2056958497.webp",
     "du_phong": "img/minh-hoa-ba-ung-dung-thuc-te-cua-khoang-cach-euclid.png",
     "nguon": {
      "ten": "GeeksforGeeks — Euclidean distance",
      "url": "https://www.geeksforgeeks.org/maths/euclidean-distance/"
     },
     "chu_giai": [
      [
       "In Geographic Navigation",
       "Dẫn đường trên bản đồ — khoảng cách đường chim bay"
      ],
      [
       "Between Two Facial Points",
       "Giữa hai điểm trên khuôn mặt — dùng trong nhận diện khuôn mặt"
      ],
      [
       "Between Two Coordinates",
       "Giữa hai toạ độ trên bản đồ — ví dụ Paris và Berlin"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên bình phương: cộng thẳng hai hiệu (−4.1) + 16 thì số âm và số dương bù trừ nhau, ra kết quả sai.",
      "Quên lấy căn bậc hai ở bước cuối.",
      "Trong Python, viết <code>2.6</code> cho số thập phân; dấu phẩy dùng để tách các phần tử, ví dụ <code>(2.6, 86)</code>."
     ]
    },
    {
     "t": "video",
     "yt": "nyZuite17Pc",
     "ten": "Khan Academy — Distance formula",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — ôn lại công thức Toán 10",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Khoảng cách Euclid: hiệu từng cột → bình phương → cộng → lấy căn. Khoảng cách càng nhỏ, hai đối tượng càng gần nhau theo các đặc điểm đang xét."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Phương pháp toạ độ trong mặt phẳng: khoảng cách giữa hai điểm",
       "url": null,
       "ghi_chu": "SGK"
      },
      {
       "ten": "scikit-learn — Nearest Neighbors (khoảng cách dùng để tìm láng giềng)",
       "url": "https://scikit-learn.org/stable/modules/neighbors.html",
       "ghi_chu": "tài liệu chính thức, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q4",
     "q": "Hai điểm P(1, 2) và Q(4, 6). Khoảng cách PQ bằng bao nhiêu?",
     "giai": "Hiệu hoành độ 3, hiệu tung độ 4 → √(3² + 4²) = √25 = 5. Số 7 là cộng thẳng hai hiệu, số 25 là quên lấy căn.",
     "goi_y": "Tính hai hiệu, bình phương, cộng — rồi đừng quên bước cuối.",
     "a": [
      "5",
      "7",
      "25",
      "3"
     ],
     "h": "1b0c0120ef3726"
    },
    {
     "k": "sx",
     "id": "bai06-q5",
     "q": "Sắp xếp các bước tính khoảng cách Euclid giữa hai vector theo đúng thứ tự.",
     "giai": "Hiệu → bình phương → cộng → căn.",
     "goi_y": "Bước cuối cùng làm cho kết quả trở về cùng đơn vị với dữ liệu.",
     "a": [
      "Lấy hiệu từng cặp số cùng cột",
      "Bình phương từng hiệu",
      "Cộng các bình phương lại",
      "Lấy căn bậc hai của tổng"
     ],
     "h": "1e22fd093eb90d"
    },
    {
     "k": "ds",
     "id": "bai06-q6",
     "q": "Khoảng cách Euclid giữa hai học sinh bằng 0 nghĩa là số liệu của hai bạn giống hệt nhau ở mọi cột đã dùng để đo.",
     "giai": "Tổng các bình phương bằng 0 chỉ khi mọi hiệu đều bằng 0.",
     "goi_y": "Tổng của các số không âm bằng 0 khi nào?",
     "h": "1fa2540c8ff20b"
    }
   ]
  },
  {
   "ten": "Đưa các cột về cùng thang đo",
   "ten_ngan": "Cùng thang đo",
   "phut": 5,
   "muc_tieu": "giải thích được vì sao cột có số lớn lấn át cột có số nhỏ, và đưa được một giá trị về khoảng 0 – 1.",
   "khoi_dong": "Trên hình đầu giờ, A trông gần C. Phép đo ở chặng 2 lại bảo A gần B. Tin mắt hay tin phép đo?",
   "khoi": [
    {
     "t": "p",
     "html": "Nhìn lại ví dụ chặng 2: hiệu phút mạng (16 và 96) lớn hơn hiệu giờ học (4.1 và 0.4) rất nhiều. Sau khi bình phương, cột phút quyết định gần như toàn bộ khoảng cách — cột giờ tự học gần như không được tính. Lý do nằm ở <b>khoảng biến thiên</b> của hai cột:"
    },
    {
     "t": "bang",
     "cot": [
      "Cột",
      "Nhỏ nhất",
      "Lớn nhất",
      "Khoảng biến thiên (lớn nhất − nhỏ nhất)"
     ],
     "dong": [
      [
       "Giờ tự học",
       "0.5",
       "7.0",
       "6.5"
      ],
      [
       "Phút mạng xã hội",
       "15",
       "450",
       "435"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Đưa về khoảng 0 – 1 (chuẩn hoá min – max)",
     "html": "Biến đổi mỗi giá trị x của một cột thành x′: giá trị <b>nhỏ nhất</b> của cột thành <b>0</b>, giá trị <b>lớn nhất</b> thành <b>1</b>, các giá trị khác nằm ở giữa theo đúng tỉ lệ. Sau khi đổi, các cột có cùng khoảng giá trị nên cột có số lớn không tự lấn át phép đo. Điều này chưa bảo đảm các cột quan trọng ngang nhau.",
     "ky_hieu": "x′ = <span class=\"frac\"><span>x − min</span><span>max − min</span></span> — min, max là giá trị nhỏ nhất, lớn nhất của chính cột đó."
    },
    {
     "t": "vi_du",
     "tieu_de": "đưa A, B, C về 0 – 1",
     "de": "Giờ tự học: min 0.5, max 7.0. Phút mạng: min 15, max 450.",
     "cot": [
      "Bạn",
      "Giờ tự học → 0 – 1",
      "Phút mạng → 0 – 1"
     ],
     "dong": [
      [
       "A",
       "(2.6 − 0.5) : 6.5 ≈ <b>0.323</b>",
       "(86 − 15) : 435 ≈ <b>0.163</b>"
      ],
      [
       "B",
       "(6.7 − 0.5) : 6.5 ≈ <b>0.954</b>",
       "(70 − 15) : 435 ≈ <b>0.126</b>"
      ],
      [
       "C",
       "(2.2 − 0.5) : 6.5 ≈ <b>0.262</b>",
       "(182 − 15) : 435 ≈ <b>0.384</b>"
      ]
     ],
     "ket_luan": "Đo lại bằng số mới: A → B ≈ 0.632, A → C ≈ 0.229. <b>Kết luận đảo ngược</b>: A gần C hơn — khớp với điều mắt con thấy, và A, C cùng học ít, cùng Chưa đạt.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Khoảng cách A → B và A → C: đo thẳng số gốc (trái) và sau khi đưa hai cột về 0 – 1 (phải)",
     "alt": "Khoảng cách A → B và A → C: đo thẳng số gốc (trái) và sau khi đưa hai cột về 0 – 1 (phải)",
     "src": "img/truoc-va-sau-khi-cung-thang-do.png"
    },
    {
     "t": "demo_khoang_cach",
     "tieu_de": "đo lại sau khi đưa về 0 – 1",
     "huong_dan": "Đánh dấu ô “Đưa từng cột về 0 – 1” để máy đổi số trước khi đo. So khoảng cách A → C trước và sau khi đánh dấu.",
     "cot": [
      "Giờ tự học",
      "Phút mạng xã hội"
     ],
     "diem": {
      "A": [
       2.6,
       86
      ],
      "C": [
       2.2,
       182
      ]
     },
     "mien": [
      [
       0.5,
       7.0
      ],
      [
       15.0,
       450.0
      ]
     ],
     "nhan_thang_do": null
    },
    {
     "t": "anh",
     "cap": "Bảng giá nhà trước khi đổi: cột giá lên tới hàng chục triệu, cột số phòng chỉ vài đơn vị",
     "alt": "Bảng giá nhà trước khi đổi: cột giá lên tới hàng chục triệu, cột số phòng chỉ vài đơn vị",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250829163533984164/Screenshot-2025-08-29-163245.webp",
     "du_phong": "img/minh-hoa-du-lieu-goc-truoc-khi-chuan-hoa.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml feature scaling part 2",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-feature-scaling-part-2/"
     },
     "chu_giai": [
      [
       "price",
       "Giá nhà"
      ],
      [
       "area",
       "Diện tích"
      ],
      [
       "bedrooms",
       "Số phòng ngủ"
      ],
      [
       "bathrooms",
       "Số phòng tắm"
      ],
      [
       "stories",
       "Số tầng"
      ],
      [
       "parking",
       "Số chỗ đỗ xe"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Cùng bảng đó sau khi đưa từng cột về 0 – 1 — mọi cột giờ đều nằm trong cùng một thang đo",
     "alt": "Cùng bảng đó sau khi đưa từng cột về 0 – 1 — mọi cột giờ đều nằm trong cùng một thang đo",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250829163652707844/Screenshot-2025-08-29-163253.webp",
     "du_phong": "img/minh-hoa-du-lieu-sau-khi-chuan-hoa-ve-khoang-0-den-1.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml feature scaling part 2",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-feature-scaling-part-2/"
     },
     "chu_giai": [
      [
       "price, area, bedrooms…",
       "Các cột giống bảng trên, giá trị đã đổi về 0 – 1"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nối với Machine Learning: K láng giềng gần nhất (KNN)",
     "html": "Gặp một học sinh mới, thuật toán KNN đo khoảng cách tới mọi học sinh cũ, lấy K bạn gần nhất rồi cho các bạn đó “bỏ phiếu” đoán kết quả. Đo sai thang đo thì chọn nhầm láng giềng. Bài 13 con sẽ tự xây model này."
    },
    {
     "t": "anh",
     "cap": "KNN: điểm mới (ô vàng có dấu ?) được gán nhãn theo đa số trong K láng giềng gần nhất",
     "alt": "KNN: điểm mới (ô vàng có dấu ?) được gán nhãn theo đa số trong K láng giềng gần nhất",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512162457630554/Finding_Neighbor_Voting_for_Labels.webp",
     "du_phong": "img/minh-hoa-ba-hang-xom-gan-nhat-bo-phieu-chon-nhan.png",
     "nguon": {
      "ten": "GeeksforGeeks — K nearest neighbours",
      "url": "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/"
     },
     "chu_giai": [
      [
       "Finding Neighbors & Voting for Labels",
       "Tìm láng giềng và bỏ phiếu chọn nhãn"
      ],
      [
       "Class A, Class B",
       "Nhóm A, nhóm B — hai nhãn"
      ],
      [
       "K = 3",
       "Lấy 3 láng giềng gần nhất"
      ],
      [
       "X-Axis, Y-Axis",
       "Trục hoành, trục tung"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chỉ đổi một cột về 0 – 1 còn cột kia giữ nguyên — trong ví dụ này, cần đổi <b>cả hai cột</b> dùng để đo.",
      "Dùng min, max của cột này để đổi cột khác.",
      "Nghĩ cột có số lớn là cột quan trọng hơn — số lớn chỉ do đơn vị đo (phút), không do mức quan trọng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Cột có khoảng số lớn có thể lấn át khoảng cách. Trong ví dụ này, đưa cả hai cột về 0 – 1 bằng x′ = (x − min) : (max − min) rồi đo lại. Chọn cột và cách đo vẫn là quyết định của người làm model."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Google Machine Learning Crash Course — Numerical data: Normalization",
       "url": "https://developers.google.com/machine-learning/crash-course/numerical-data/normalization",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "scikit-learn — MinMaxScaler",
       "url": "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q7",
     "q": "Cột nhiệt độ có giá trị nhỏ nhất 20 °C, lớn nhất 40 °C. Đưa về 0 – 1 thì 35 °C thành bao nhiêu?",
     "giai": "(35 − 20) : (40 − 20) = 15 : 20 = 0.75. Số 0.875 là 35 : 40 (quên trừ min); 15 là quên chia.",
     "goi_y": "Lấy giá trị trừ min trước, rồi chia cho (max − min).",
     "a": [
      "0.75",
      "0.875",
      "0.35",
      "15"
     ],
     "h": "3ec00d668a178"
    },
    {
     "k": "mc",
     "id": "bai06-q8",
     "q": "Vì sao khi đo thô, cột phút mạng quyết định gần như toàn bộ khoảng cách giữa hai bạn?",
     "giai": "Khoảng biến thiên của cột phút là 435, của cột giờ chỉ 6.5. Bình phương lên, chênh lệch càng lớn.",
     "goi_y": "So khoảng biến thiên của hai cột trong bảng đầu chặng.",
     "a": [
      "Số ở cột phút lớn hơn cột giờ rất nhiều",
      "Phút mạng quan trọng hơn giờ tự học",
      "Cột giờ tự học có nhiều ô bị trống",
      "Máy tính cột giờ tự học bị sai"
     ],
     "h": "28cce4b2520ef"
    },
    {
     "k": "dd",
     "id": "bai06-q9",
     "q": "Chọn số đúng cho mỗi chỗ trống.",
     "giai": "Thay x = min vào công thức được 0; thay x = max được (max − min) : (max − min) = 1.",
     "goi_y": "Thay x = min, rồi x = max vào công thức x′.",
     "mau": "Sau khi đưa một cột về 0 – 1, giá trị nhỏ nhất của cột thành {0}, giá trị lớn nhất thành {1}.",
     "o": [
      [
       "0",
       "1",
       "0.5",
       "−1"
      ],
      [
       "1",
       "0",
       "100",
       "10"
      ]
     ],
     "h": "4ab1cfe4287fe"
    }
   ]
  }
 ],
 "cuoi": {
  "so_cau": 10,
  "dat": 8,
  "co_cau": {
   "mc": 4,
   "ma": 2,
   "sx": 1,
   "dd": 2,
   "ds": 1
  },
  "ngan_hang": [
   {
    "k": "mc",
    "id": "bai06-q10",
    "q": "Bảng có 50 học sinh, mỗi bạn 3 cột số. Bảng là ma trận cỡ bao nhiêu?",
    "giai": "Số dòng (50) trước, số cột (3) sau.",
    "a": [
     "50 × 3",
     "3 × 50",
     "50 × 50",
     "53 × 1"
    ],
    "h": "142651e085ffc2"
   },
   {
    "k": "mc",
    "id": "bai06-q11",
    "q": "Khoảng cách giữa hai điểm M(0, 0) và N(6, 8) bằng bao nhiêu?",
    "giai": "√(6² + 8²) = √100 = 10.",
    "a": [
     "10",
     "14",
     "100",
     "48"
    ],
    "h": "1a8847402a884c"
   },
   {
    "k": "mc",
    "id": "bai06-q12",
    "q": "Hai bạn có vector (2, 100) và (5, 104). Khoảng cách Euclid bằng bao nhiêu?",
    "giai": "Hiệu hai cột là 3 và 4; √(3² + 4²) = 5.",
    "a": [
     "5",
     "7",
     "25",
     "4"
    ],
    "h": "f49239f04780a"
   },
   {
    "k": "mc",
    "id": "bai06-q13",
    "q": "Cột cân nặng có min 40 kg, max 80 kg. Đưa 50 kg về 0–1 được bao nhiêu?",
    "giai": "(50 − 40) / (80 − 40) = 0.25.",
    "a": [
     "0.25",
     "0.5",
     "0.625",
     "10"
    ],
    "h": "58efa713be576"
   },
   {
    "k": "mc",
    "id": "bai06-q14",
    "q": "A = (0.3, 0.2), B = (0.7, 0.5). Khoảng cách Euclid bằng bao nhiêu?",
    "giai": "√(0.4² + 0.3²) = 0.5.",
    "a": [
     "0.5",
     "0.7",
     "0.25",
     "1.2"
    ],
    "h": "aef63e23de120"
   },
   {
    "k": "mc",
    "id": "bai06-q15",
    "q": "Nhìn hình: sau khi đưa hai cột về 0–1, bạn gần A nhất thay đổi thế nào?",
    "giai": "Đo số gốc A gần B; sau khi đưa về 0–1, A gần C.",
    "img": {
     "src": "img/truoc-va-sau-khi-cung-thang-do.png"
    },
    "a": [
     "Đổi từ B sang C",
     "Đổi từ C sang B",
     "Vẫn là B như cũ",
     "Vẫn là C như cũ"
    ],
    "h": "e433b45ab539a"
   },
   {
    "k": "mc",
    "id": "bai06-q16",
    "q": "Vì sao cần xem thang đo các cột trước khi dùng khoảng cách?",
    "giai": "Cột có khoảng biến thiên lớn có thể lấn át phép đo.",
    "a": [
     "Tránh cột số lớn lấn át",
     "Để bảng có ít dòng hơn",
     "Để mọi kết quả là Đạt",
     "Để khỏi chọn các cột"
    ],
    "h": "1689df41b179f5"
   },
   {
    "k": "mc",
    "id": "bai06-q17",
    "q": "Vector (3.5, 120) có hai cột theo thứ tự (giờ học, phút mạng). Số 120 chỉ gì?",
    "giai": "Thứ tự phần tử của vector phải khớp thứ tự cột.",
    "a": [
     "Phút dùng mạng",
     "Giờ tự học",
     "Mã học sinh",
     "Điểm kiểm tra"
    ],
    "h": "2029714707e5b"
   },
   {
    "k": "ma",
    "id": "bai06-q18",
    "q": "Những việc nào có trong cách tính khoảng cách Euclid? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hiệu → bình phương → cộng → căn; không chia, không sắp xếp.",
    "a": [
     "Bình phương hiệu của từng cột",
     "Lấy căn bậc hai của tổng",
     "Chia tổng cho số cột",
     "Sắp xếp các số tăng dần"
    ],
    "h": "17c934307435ca"
   },
   {
    "k": "ma",
    "id": "bai06-q19",
    "q": "Những phát biểu nào đúng khi đưa một cột về 0–1? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Min thành 0, max thành 1; mỗi cột dùng để đo cần được xem xét.",
    "a": [
     "Giá trị nhỏ nhất của cột thành 0",
     "Giá trị lớn nhất của cột thành 1",
     "Mọi giá trị của cột thành 0.5",
     "Chỉ cần đổi cột có số lớn nhất"
    ],
    "h": "1d213b2cb25a14"
   },
   {
    "k": "ma",
    "id": "bai06-q20",
    "q": "Bảng 240 học sinh lấy hai cột số. Những phát biểu nào đúng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Số dòng là số học sinh; số cột là số đặc điểm.",
    "a": [
     "Bảng là ma trận 240 × 2",
     "Mỗi học sinh là vector hai chiều",
     "Bảng là ma trận 2 × 240",
     "Mỗi học sinh là vector 240 chiều"
    ],
    "h": "c2203c07fccee"
   },
   {
    "k": "ma",
    "id": "bai06-q21",
    "q": "Để so hai học sinh bằng khoảng cách, cần làm gì? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hai vector phải cùng ý nghĩa và thứ tự cột; thang đo ảnh hưởng kết quả.",
    "a": [
     "Dùng cùng thứ tự cột cho hai bạn",
     "Xem thang đo của từng cột",
     "Đổi thứ tự cột ở riêng một bạn",
     "Bỏ qua đơn vị của các cột"
    ],
    "h": "1131b70056853e"
   },
   {
    "k": "sx",
    "id": "bai06-q22",
    "q": "Sắp xếp các bước đưa một giá trị x về khoảng 0–1.",
    "giai": "x′ = (x − min) / (max − min).",
    "a": [
     "Tìm min và max của cột",
     "Tính max − min",
     "Lấy x trừ min",
     "Chia kết quả cho max − min"
    ],
    "h": "146cc22a8d7b9e"
   },
   {
    "k": "sx",
    "id": "bai06-q23",
    "q": "Sắp xếp các bước tìm bạn gần A nhất theo hai cột số.",
    "giai": "Đo trên cùng thang, rồi chọn khoảng cách nhỏ nhất.",
    "a": [
     "Đưa hai cột về cùng thang đo",
     "Tính khoảng cách từ A đến từng bạn",
     "Sắp xếp khoảng cách tăng dần",
     "Chọn bạn đứng đầu danh sách"
    ],
    "h": "50fad10b2479d"
   },
   {
    "k": "dd",
    "id": "bai06-q24",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hiệu từng cột, bình phương, cộng, lấy căn bậc hai.",
    "mau": "Khoảng cách Euclid: lấy {0} từng cột, bình phương, cộng lại rồi lấy {1}.",
    "o": [
     [
      "hiệu",
      "tổng",
      "tích",
      "thương"
     ],
     [
      "căn bậc hai",
      "trung bình",
      "bình phương",
      "giá trị lớn nhất"
     ]
    ],
    "h": "ee8cd7a4e3e29"
   },
   {
    "k": "dd",
    "id": "bai06-q25",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "x′ = (x − min) / (max − min).",
    "mau": "Công thức đưa về 0–1: x′ = (x − {0}) / ({1}).",
    "o": [
     [
      "min",
      "max",
      "x",
      "trung bình"
     ],
     [
      "max − min",
      "max + min",
      "x − min",
      "max"
     ]
    ],
    "h": "1b3a30408a432b"
   },
   {
    "k": "dd",
    "id": "bai06-q26",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Cỡ ma trận ghi số dòng trước, số cột sau.",
    "mau": "Bảng có 30 dòng và 4 cột số là ma trận {0}; mỗi dòng là vector {1} chiều.",
    "o": [
     [
      "30 × 4",
      "4 × 30",
      "30 × 30",
      "34 × 1"
     ],
     [
      "4",
      "30",
      "2",
      "120"
     ]
    ],
    "h": "1c53215d388010"
   },
   {
    "k": "dd",
    "id": "bai06-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Mỗi vị trí trong vector ứng với một cột đã chọn.",
    "mau": "Vector (3.5, 120): 3.5 là {0}, còn 120 là {1}.",
    "o": [
     [
      "giờ tự học",
      "phút mạng",
      "điểm số",
      "mã học sinh"
     ],
     [
      "phút mạng",
      "giờ tự học",
      "điểm số",
      "số học sinh"
     ]
    ],
    "h": "ac11d0fb1cb15"
   },
   {
    "k": "ds",
    "id": "bai06-q28",
    "q": "Khoảng cách Euclid từ A đến B bằng khoảng cách từ B đến A.",
    "giai": "Hiệu đổi dấu nhưng bình phương thì như nhau.",
    "h": "8ebca67a2c148"
   },
   {
    "k": "ds",
    "id": "bai06-q29",
    "q": "Đưa một cột về 0–1 làm đảo ngược thứ tự lớn nhỏ của cột đó.",
    "giai": "Công thức giữ nguyên thứ tự: số lớn hơn vẫn thành số lớn hơn.",
    "h": "54702ac2ef5fd"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
