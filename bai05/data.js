window.BAI = {
 "bai": 5,
 "ma": "bai05",
 "nhan": "Bài 5",
 "tieu_de": "Vector và khoảng cách",
 "phan": "Phần A · Nền tảng dữ liệu",
 "cau_hoi": "Máy so hai học sinh bằng cách nào?",
 "gioi_thieu": [
  "Đầu giờ con đã nhìn ba bạn <b>A, B, C</b> trong bảng khối 10 và đoán A giống ai hơn. Máy không “nhìn” được như con — máy chỉ có các con số.",
  "Năm chặng dưới đây cho con thấy máy <b>so hai học sinh</b> bằng khoảng cách, vì sao phải đo cho <b>công bằng</b>, và máy tìm ra một <b>đường dự đoán tốt</b> bằng cách đi từng bước xuống dốc. Mọi ví dụ lấy từ <b>bảng dữ liệu 240 học sinh khối 10</b> — bảng mô phỏng, dựng giống một khối lớp thật để luyện tập.",
  "Nhiều kiến thức con đã gặp ở Toán 10: tọa độ của vectơ, khoảng cách giữa hai điểm, đường thẳng y = ax + b. Ở đây con dùng lại chúng theo cách của Machine Learning."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai05",
 "muc_tieu": [
  "Biểu diễn được một học sinh thành vector và cả bảng dữ liệu thành ma trận.",
  "Tính được khoảng cách Euclid giữa hai vector và dùng nó để so mức giống nhau.",
  "Giải thích được vì sao phải đưa các cột về cùng thang đo trước khi đo khoảng cách, và đưa được một giá trị về khoảng 0 – 1.",
  "Tính được sai số trung bình bình phương (MSE) của một đường dự đoán.",
  "Mô tả được cách gradient descent đi từng bước để giảm sai số và vai trò của bước nhảy."
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
     "html": "Ở Toán 10, một vectơ trong mặt phẳng tọa độ được xác định bởi <b>hai số</b> (x; y). Machine Learning dùng đúng ý đó để lưu dữ liệu, và cho phép dùng bao nhiêu số cũng được."
    },
    {
     "t": "dinh_nghia",
     "ten": "Vector (trong Machine Learning)",
     "html": "Một <b>dãy số có thứ tự</b>; mỗi số ứng với một đặc điểm (một cột) của đối tượng. Số lượng số trong dãy gọi là <b>số chiều</b> của vector.",
     "ky_hieu": "Bạn A với hai cột (giờ tự học; phút mạng xã hội): A = (2,6; 86) — vector 2 chiều."
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
       "2,6",
       "86",
       "<b>(2,6; 86)</b>"
      ],
      [
       "B",
       "HS147",
       "6,7",
       "70",
       "<b>(6,7; 70)</b>"
      ],
      [
       "C",
       "HS043",
       "2,2",
       "182",
       "<b>(2,2; 182)</b>"
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
      "Đổi thứ tự các số: (2,6; 86) và (86; 2,6) là hai vector khác nhau — thứ tự số phải khớp thứ tự cột.",
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
       "ten": "Machine Learning Mathematics",
       "url": "https://www.geeksforgeeks.org/machine-learning/machine-learning-mathematics/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q1",
     "q": "Bạn D tự học 3,5 giờ và dùng mạng xã hội 120 phút mỗi ngày. Theo thứ tự cột (giờ tự học; phút mạng xã hội), vector của bạn D là gì?",
     "giai": "Hai cột nên vector có 2 số, theo đúng thứ tự cột: giờ tự học trước, phút mạng sau. Tên bạn D không phải là số đo.",
     "goi_y": "Mỗi số ứng với một cột, và thứ tự các số phải theo đúng thứ tự cột.",
     "a": [
      "(3,5; 120)",
      "(120; 3,5)",
      "(123,5)",
      "(3,5; 120; D)"
     ],
     "h": "6a59d69f10198"
    },
    {
     "k": "dd",
     "id": "bai05-q2",
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
     "h": "130689c8d9e60"
    },
    {
     "k": "ds",
     "id": "bai05-q3",
     "q": "Vector (2,6; 86) và vector (86; 2,6) biểu diễn cùng một học sinh.",
     "giai": "Thứ tự số phải khớp thứ tự cột: (86; 2,6) nghĩa là học 86 giờ và dùng mạng 2,6 phút — một học sinh khác hẳn.",
     "goi_y": "Nếu đọc (86; 2,6) theo thứ tự cột (giờ tự học; phút mạng) thì được gì?",
     "h": "1d1c92488af5c0"
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
     "html": "Toán 10: khoảng cách giữa hai điểm A(x<sub>1</sub>; y<sub>1</sub>) và B(x<sub>2</sub>; y<sub>2</sub>) là AB = √[(x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>]. Công thức có từ <b>định lý Pythagoras</b>: hai hiệu là hai cạnh góc vuông, khoảng cách là cạnh huyền."
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
     "html": "Với hai vector cùng số chiều: lấy <b>hiệu</b> từng cặp số cùng cột, <b>bình phương</b>, <b>cộng</b> lại rồi lấy <b>căn bậc hai</b>. Khoảng cách càng nhỏ, hai đối tượng càng giống nhau; bằng 0 khi hai vector trùng nhau.",
     "ky_hieu": "d(A, B) = √[(a<sub>1</sub> − b<sub>1</sub>)<sup>2</sup> + (a<sub>2</sub> − b<sub>2</sub>)<sup>2</sup> + … + (a<sub>n</sub> − b<sub>n</sub>)<sup>2</sup>]"
    },
    {
     "t": "vi_du",
     "tieu_de": "khoảng cách từ A đến B và từ A đến C",
     "de": "A = (2,6; 86), B = (6,7; 70), C = (2,2; 182).",
     "cot": [
      "Bước",
      "A → B",
      "A → C"
     ],
     "dong": [
      [
       "Hiệu giờ tự học",
       "2,6 − 6,7 = −4,1",
       "2,6 − 2,2 = 0,4"
      ],
      [
       "Hiệu phút mạng",
       "86 − 70 = 16",
       "86 − 182 = −96"
      ],
      [
       "Bình phương hai hiệu",
       "16,81 và 256",
       "0,16 và 9216"
      ],
      [
       "Cộng lại",
       "272,81",
       "9216,16"
      ],
      [
       "Lấy căn bậc hai",
       "<b>≈ 16,5</b>",
       "<b>≈ 96,0</b>"
      ]
     ],
     "ket_luan": "Theo phép đo này, A gần B hơn nhiều (16,5 so với 96,0) — ngược với điều mắt con thấy trên hình đầu giờ. Chặng 3 giải thích vì sao.",
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
      "Quên bình phương: cộng thẳng hai hiệu (−4,1) + 16 thì số âm và số dương bù trừ nhau, ra kết quả sai.",
      "Quên lấy căn bậc hai ở bước cuối.",
      "Gõ số thập phân trong Python bằng dấu phẩy: phải viết <code>2.6</code>, không viết <code>2,6</code>."
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
     "html": "Khoảng cách Euclid: hiệu từng cột → bình phương → cộng → lấy căn. Khoảng cách càng nhỏ, hai đối tượng càng giống nhau."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Euclidean Distance",
       "url": "https://www.geeksforgeeks.org/maths/euclidean-distance/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q4",
     "q": "Hai điểm P(1; 2) và Q(4; 6). Khoảng cách PQ bằng bao nhiêu?",
     "giai": "Hiệu hoành độ 3, hiệu tung độ 4 → √(3² + 4²) = √25 = 5. Số 7 là cộng thẳng hai hiệu, số 25 là quên lấy căn.",
     "goi_y": "Tính hai hiệu, bình phương, cộng — rồi đừng quên bước cuối.",
     "a": [
      "5",
      "7",
      "25",
      "3"
     ],
     "h": "1bab5c66c90656"
    },
    {
     "k": "sx",
     "id": "bai05-q5",
     "q": "Sắp xếp các bước tính khoảng cách Euclid giữa hai vector theo đúng thứ tự.",
     "giai": "Hiệu → bình phương → cộng → căn.",
     "goi_y": "Bước cuối cùng làm cho kết quả trở về cùng đơn vị với dữ liệu.",
     "a": [
      "Lấy hiệu từng cặp số cùng cột",
      "Bình phương từng hiệu",
      "Cộng các bình phương lại",
      "Lấy căn bậc hai của tổng"
     ],
     "h": "1273a52b9f610f"
    },
    {
     "k": "ds",
     "id": "bai05-q6",
     "q": "Khoảng cách Euclid giữa hai học sinh bằng 0 nghĩa là số liệu của hai bạn giống hệt nhau ở mọi cột đã dùng để đo.",
     "giai": "Tổng các bình phương bằng 0 chỉ khi mọi hiệu đều bằng 0.",
     "goi_y": "Tổng của các số không âm bằng 0 khi nào?",
     "h": "1a4c1f72ad628c"
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
     "html": "Nhìn lại ví dụ chặng 2: hiệu phút mạng (16 và 96) lớn hơn hiệu giờ học (4,1 và 0,4) rất nhiều. Sau khi bình phương, cột phút quyết định gần như toàn bộ khoảng cách — cột giờ tự học gần như không được tính. Lý do nằm ở <b>khoảng biến thiên</b> của hai cột:"
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
       "0,5",
       "7,0",
       "6,5"
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
     "html": "Biến đổi mỗi giá trị x của một cột thành x′: giá trị <b>nhỏ nhất</b> của cột thành <b>0</b>, giá trị <b>lớn nhất</b> thành <b>1</b>, các giá trị khác nằm ở giữa theo đúng tỉ lệ. Sau khi đổi, mọi cột có cùng thang đo nên đóng góp công bằng vào khoảng cách.",
     "ky_hieu": "x′ = <span class=\"frac\"><span>x − min</span><span>max − min</span></span> — min, max là giá trị nhỏ nhất, lớn nhất của chính cột đó."
    },
    {
     "t": "vi_du",
     "tieu_de": "đưa A, B, C về 0 – 1",
     "de": "Giờ tự học: min 0,5, max 7,0. Phút mạng: min 15, max 450.",
     "cot": [
      "Bạn",
      "Giờ tự học → 0 – 1",
      "Phút mạng → 0 – 1"
     ],
     "dong": [
      [
       "A",
       "(2,6 − 0,5) : 6,5 ≈ <b>0,323</b>",
       "(86 − 15) : 435 ≈ <b>0,163</b>"
      ],
      [
       "B",
       "(6,7 − 0,5) : 6,5 ≈ <b>0,954</b>",
       "(70 − 15) : 435 ≈ <b>0,126</b>"
      ],
      [
       "C",
       "(2,2 − 0,5) : 6,5 ≈ <b>0,262</b>",
       "(182 − 15) : 435 ≈ <b>0,384</b>"
      ]
     ],
     "ket_luan": "Đo lại bằng số mới: A → B ≈ 0,632, A → C ≈ 0,229. <b>Kết luận đảo ngược</b>: A gần C hơn — khớp với điều mắt con thấy, và A, C cùng học ít, cùng Chưa đạt.",
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
     "html": "Gặp một học sinh mới, thuật toán KNN đo khoảng cách tới mọi học sinh cũ, lấy K bạn gần nhất rồi cho các bạn đó “bỏ phiếu” đoán kết quả. Đo sai thang đo thì chọn nhầm láng giềng. Bài 11 con sẽ tự xây model này."
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
      "Chỉ đổi một cột về 0 – 1 còn cột kia giữ nguyên — phải đổi <b>mọi cột</b> dùng để đo.",
      "Dùng min, max của cột này để đổi cột khác.",
      "Nghĩ cột có số lớn là cột quan trọng hơn — số lớn chỉ do đơn vị đo (phút), không do mức quan trọng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Cột có số lớn lấn át khoảng cách. Đưa mọi cột về 0 – 1 bằng x′ = (x − min) : (max − min) rồi mới đo."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "ML | Feature Scaling – Part 2",
       "url": "https://www.geeksforgeeks.org/machine-learning/ml-feature-scaling-part-2/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q7",
     "q": "Cột nhiệt độ có giá trị nhỏ nhất 20 °C, lớn nhất 40 °C. Đưa về 0 – 1 thì 35 °C thành bao nhiêu?",
     "giai": "(35 − 20) : (40 − 20) = 15 : 20 = 0,75. Số 0,875 là 35 : 40 (quên trừ min); 15 là quên chia.",
     "goi_y": "Lấy giá trị trừ min trước, rồi chia cho (max − min).",
     "a": [
      "0,75",
      "0,875",
      "0,35",
      "15"
     ],
     "h": "639550d19d1c7"
    },
    {
     "k": "mc",
     "id": "bai05-q8",
     "q": "Vì sao khi đo thô, cột phút mạng quyết định gần như toàn bộ khoảng cách giữa hai bạn?",
     "giai": "Khoảng biến thiên của cột phút là 435, của cột giờ chỉ 6,5. Bình phương lên, chênh lệch càng lớn.",
     "goi_y": "So khoảng biến thiên của hai cột trong bảng đầu chặng.",
     "a": [
      "Số ở cột phút lớn hơn cột giờ rất nhiều",
      "Phút mạng quan trọng hơn giờ tự học",
      "Cột giờ tự học có nhiều ô bị trống",
      "Máy tính cột giờ tự học bị sai"
     ],
     "h": "a4ce313e6480d"
    },
    {
     "k": "dd",
     "id": "bai05-q9",
     "q": "Chọn số đúng cho mỗi chỗ trống.",
     "giai": "Thay x = min vào công thức được 0; thay x = max được (max − min) : (max − min) = 1.",
     "goi_y": "Thay x = min, rồi x = max vào công thức x′.",
     "mau": "Sau khi đưa một cột về 0 – 1, giá trị nhỏ nhất của cột thành {0}, giá trị lớn nhất thành {1}.",
     "o": [
      [
       "0",
       "1",
       "0,5",
       "−1"
      ],
      [
       "1",
       "0",
       "100",
       "10"
      ]
     ],
     "h": "5f7fe5136aa12"
    }
   ]
  },
  {
   "ten": "Sai số của một đường dự đoán",
   "ten_ngan": "Sai số",
   "phut": 4,
   "muc_tieu": "tính được sai số trung bình bình phương (MSE) của một đường dự đoán và dùng nó để chọn đường tốt hơn.",
   "khoi_dong": "Muốn đoán điểm học kỳ từ giờ tự học, con vẽ một đường thẳng qua đám điểm. Có vô số đường — đường nào tốt nhất?",
   "khoi": [
    {
     "t": "p",
     "html": "Đường dự đoán có dạng <b>ŷ = a·x + b</b> — đường thẳng quen thuộc y = ax + b. Ở đây x là giờ tự học, ŷ (đọc là “y mũ”) là điểm máy đoán; <b>a là hệ số góc</b> (độ dốc của đường), <b>b là hệ số chặn</b> (chỗ đường cắt trục tung)."
    },
    {
     "t": "anh",
     "cap": "Đường dự đoán, hệ số góc, hệ số chặn và sai số của một điểm",
     "alt": "Đường dự đoán, hệ số góc, hệ số chặn và sai số của một điểm",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260112155359063476/observed_value.webp",
     "du_phong": "img/minh-hoa-he-so-goc-he-so-chan-va-sai-so-trong-hoi-quy.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml linear regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/"
     },
     "chu_giai": [
      [
       "Observed value y<sub>i</sub>",
       "Giá trị thật quan sát được"
      ],
      [
       "Predicted value <sup>y</sup>P<sub>i</sub>",
       "Giá trị đường dự đoán — trong bài viết là ŷ"
      ],
      [
       "Random error ε<sub>i</sub>",
       "Sai số — khoảng lệch giữa giá trị thật và dự đoán"
      ],
      [
       "Slope = tanθ = θ<sub>2</sub>",
       "Hệ số góc (độ dốc) — trong bài là a"
      ],
      [
       "Intercept θ<sub>1</sub>",
       "Hệ số chặn — trong bài là b"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Sai số trung bình bình phương (MSE — Mean Squared Error)",
     "html": "Với mỗi điểm, <b>sai lệch</b> là giá trị thật trừ giá trị dự đoán: y − ŷ. Bình phương từng sai lệch rồi lấy <b>trung bình cộng</b>. MSE càng nhỏ, đường càng khớp với dữ liệu.",
     "ky_hieu": "MSE = <span class=\"frac\"><span>(y<sub>1</sub> − ŷ<sub>1</sub>)<sup>2</sup> + … + (y<sub>n</sub> − ŷ<sub>n</sub>)<sup>2</sup></span><span>n</span></span>"
    },
    {
     "t": "vi_du",
     "tieu_de": "MSE của đường ŷ = x + 2 với 4 bạn (số liệu minh hoạ)",
     "de": null,
     "cot": [
      "Giờ tự học x",
      "Điểm thật y",
      "Dự đoán ŷ = x + 2",
      "Sai lệch y − ŷ",
      "Bình phương (y − ŷ)<sup>2</sup>"
     ],
     "dong": [
      [
       "1",
       "3,5",
       "3",
       "0,5",
       "0,25"
      ],
      [
       "2",
       "3,5",
       "4",
       "−0,5",
       "0,25"
      ],
      [
       "3",
       "5,5",
       "5",
       "0,5",
       "0,25"
      ],
      [
       "4",
       "6,0",
       "6",
       "0,0",
       "0,00"
      ],
      [
       "Tổng",
       "",
       "",
       "",
       "<b>0,75</b>"
      ]
     ],
     "ket_luan": "MSE = 0,75 : 4 ≈ <b>0,19</b>. Làm tương tự với đường ŷ = 1,5x + 1 được MSE ≈ 0,56 — lớn hơn, nên đường ŷ = x + 2 khớp với 4 bạn này hơn.",
     "nhan_manh": [
      4
     ]
    },
    {
     "t": "anh",
     "cap": "Ba đường thử trên 240 bạn — cùng hệ số chặn b, chỉ khác hệ số góc a; đường có sai số nhỏ nhất khớp nhất",
     "alt": "Ba đường thử trên 240 bạn — cùng hệ số chặn b, chỉ khác hệ số góc a; đường có sai số nhỏ nhất khớp nhất",
     "src": "img/ba-duong-thu-cho-diem-va-gio-hoc.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Vì sao phải bình phương?",
     "html": "Sai lệch có thể âm (đoán cao hơn thật) hoặc dương (đoán thấp hơn thật); cộng thẳng thì chúng bù trừ nhau — ví dụ 0,5 + (−0,5) = 0 dù cả hai điểm đều lệch. Bình phương làm mọi số không âm, và phạt nặng hơn những điểm lệch nhiều."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Cộng thẳng các sai lệch rồi chia n — số âm và số dương bù trừ nhau.",
      "Quên chia cho số điểm n: tổng các bình phương chưa phải là MSE.",
      "Nghĩ đường khớp nhất phải đi qua đúng mọi điểm — với dữ liệu thật, điều đó gần như không bao giờ xảy ra."
     ]
    },
    {
     "t": "tom_tat",
     "html": "MSE = trung bình cộng các bình phương sai lệch y − ŷ. Đường nào có MSE nhỏ nhất là đường khớp nhất."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "ML | Linear Regression",
       "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q10",
     "q": "Đường dự đoán ŷ = 2x. Một bạn có x = 3 và điểm thật y = 7. Bình phương sai lệch của bạn này bằng bao nhiêu?",
     "giai": "ŷ = 2 × 3 = 6; sai lệch 7 − 6 = 1; bình phương bằng 1. Bình phương không bao giờ âm.",
     "goi_y": "Tính ŷ trước, rồi y − ŷ, rồi bình phương.",
     "a": [
      "1",
      "−1",
      "13",
      "49"
     ],
     "h": "1470bd17c0ba74"
    },
    {
     "k": "ds",
     "id": "bai05-q11",
     "q": "Đường có MSE bằng 0,46 khớp với dữ liệu hơn đường có MSE bằng 5,67.",
     "giai": "MSE đo mức lệch trung bình: càng nhỏ càng khớp.",
     "goi_y": "MSE đo mức khớp hay mức lệch?",
     "h": "1d8cec1f0375dd"
    },
    {
     "k": "mc",
     "id": "bai05-q12",
     "q": "Vì sao khi tính MSE phải bình phương các sai lệch?",
     "giai": "Cộng thẳng 0,5 và −0,5 được 0 dù cả hai điểm đều lệch. Bình phương làm mọi số không âm.",
     "goi_y": "Thử cộng thẳng hai sai lệch 0,5 và −0,5 xem được bao nhiêu.",
     "a": [
      "Để sai lệch âm và dương không bù trừ nhau",
      "Để kết quả luôn là một số nguyên",
      "Để đường dự đoán dốc lên hơn",
      "Để các điểm dữ liệu được sắp xếp"
     ],
     "h": "2387aec10d623"
    }
   ]
  },
  {
   "ten": "Gradient descent — đi từng bước xuống đáy sai số",
   "ten_ngan": "Gradient descent",
   "phut": 5,
   "muc_tieu": "mô tả được cách gradient descent đi từng bước để giảm sai số, và giải thích vai trò của bước nhảy.",
   "khoi_dong": "Máy không vẽ thử hàng nghìn đường rồi chọn. Vậy máy tìm ra hệ số a tốt nhất bằng cách nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Giữ b cố định (b ≈ 2,13), chỉ thay đổi a. Mỗi giá trị a cho một MSE. Vẽ MSE theo a được một đường cong hình <b>thung lũng</b>: đáy thung lũng là a tốt nhất."
    },
    {
     "t": "anh",
     "cap": "MSE theo hệ số a trên 240 bạn — một thung lũng; chấm đỏ là các bước máy đi xuống đáy",
     "alt": "MSE theo hệ số a trên 240 bạn — một thung lũng; chấm đỏ là các bước máy đi xuống đáy",
     "src": "img/duong-sai-so-hinh-thung-lung.png"
    },
    {
     "t": "dinh_nghia",
     "ten": "Gradient descent (đi xuống theo độ dốc)",
     "html": "Thuật toán lặp. Bắt đầu từ một giá trị a bất kỳ. Ở mỗi bước, máy tính <b>độ dốc</b> của sai số tại a (dốc dương nghĩa là tăng a thì sai số tăng), rồi dịch a một đoạn nhỏ <b>ngược chiều dốc</b>. Lặp lại tới khi sai số gần như không giảm nữa.",
     "ky_hieu": "a mới = a cũ − η × độ dốc &nbsp;— η (đọc là “ê-ta”) là <b>bước nhảy</b> (learning rate), do người lập trình chọn."
    },
    {
     "t": "p",
     "html": "Độ dốc do máy tính sẵn — lên lớp 11 học đạo hàm, con sẽ biết cách tính. Ở đây chỉ cần đọc <b>dấu</b> của nó: dốc âm thì a tăng, dốc dương thì a giảm."
    },
    {
     "t": "vi_du",
     "tieu_de": "ba bước đầu với bước nhảy η = 0,02",
     "de": "Bắt đầu từ a = 0, giữ b ≈ 2,13.",
     "cot": [
      "Bước",
      "a hiện tại",
      "Sai số MSE",
      "Độ dốc tại a",
      "a mới = a − 0,02 × độ dốc"
     ],
     "dong": [
      [
       "0",
       "0,000",
       "12,92",
       "−29,34",
       "0,000 − 0,02 × (−29,34) ≈ <b>0,587</b>"
      ],
      [
       "1",
       "0,587",
       "1,65",
       "−9,06",
       "0,587 − 0,02 × (−9,06) ≈ <b>0,768</b>"
      ],
      [
       "2",
       "0,768",
       "0,58",
       "−2,80",
       "0,768 − 0,02 × (−2,80) ≈ <b>0,824</b>"
      ]
     ],
     "ket_luan": "Độ dốc âm nên a tăng dần; càng gần đáy dốc càng thoải nên a đổi càng ít. Sau 8 bước a ≈ 0,849, MSE ≈ 0,46 — đúng đáy thung lũng.",
     "nhan_manh": []
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "gradient descent với bước nhảy khác nhau",
     "huong_dan": "Chọn một bước nhảy η, rồi bấm “Bước tiếp” để máy đi thêm một bước. Theo dõi cột sai số: giảm nhanh, giảm rất chậm, dao động, hay tăng vọt?",
     "nhan_chon": "Bước nhảy η",
     "cot": [
      "Bước",
      "a",
      "Sai số MSE",
      "Độ dốc tại a"
     ],
     "mac_dinh": 1,
     "lua_chon": [
      {
       "nhan": "0,005",
       "dong": [
        [
         "0",
         "0,000",
         "12,92",
         "−29,34"
        ],
        [
         "1",
         "0,147",
         "8,98",
         "−24,27"
        ],
        [
         "2",
         "0,268",
         "6,29",
         "−20,08"
        ],
        [
         "3",
         "0,368",
         "4,45",
         "−16,61"
        ],
        [
         "4",
         "0,451",
         "3,19",
         "−13,74"
        ],
        [
         "5",
         "0,520",
         "2,33",
         "−11,36"
        ],
        [
         "6",
         "0,577",
         "1,74",
         "−9,40"
        ],
        [
         "7",
         "0,624",
         "1,34",
         "−7,78"
        ],
        [
         "8",
         "0,663",
         "1,06",
         "−6,43"
        ]
       ]
      },
      {
       "nhan": "0,02",
       "dong": [
        [
         "0",
         "0,000",
         "12,92",
         "−29,34"
        ],
        [
         "1",
         "0,587",
         "1,65",
         "−9,06"
        ],
        [
         "2",
         "0,768",
         "0,58",
         "−2,80"
        ],
        [
         "3",
         "0,824",
         "0,47",
         "−0,86"
        ],
        [
         "4",
         "0,841",
         "0,46",
         "−0,27"
        ],
        [
         "5",
         "0,847",
         "0,46",
         "−0,08"
        ],
        [
         "6",
         "0,848",
         "0,46",
         "−0,03"
        ],
        [
         "7",
         "0,849",
         "0,46",
         "−0,01"
        ],
        [
         "8",
         "0,849",
         "0,46",
         "−0,00"
        ]
       ]
      },
      {
       "nhan": "0,05",
       "dong": [
        [
         "0",
         "0,000",
         "12,92",
         "−29,34"
        ],
        [
         "1",
         "1,467",
         "7,07",
         "21,36"
        ],
        [
         "2",
         "0,399",
         "3,96",
         "−15,56"
        ],
        [
         "3",
         "1,177",
         "2,32",
         "11,33"
        ],
        [
         "4",
         "0,610",
         "1,45",
         "−8,25"
        ],
        [
         "5",
         "1,023",
         "0,98",
         "6,00"
        ],
        [
         "6",
         "0,722",
         "0,74",
         "−4,37"
        ],
        [
         "7",
         "0,941",
         "0,61",
         "3,18"
        ],
        [
         "8",
         "0,782",
         "0,54",
         "−2,32"
        ]
       ]
      },
      {
       "nhan": "0,1",
       "dong": [
        [
         "0",
         "0,000",
         "12,92",
         "−29,34"
        ],
        [
         "1",
         "2,934",
         "75,60",
         "72,07"
        ],
        [
         "2",
         "−4,273",
         "453,78",
         "−177,02"
        ],
        [
         "3",
         "13,429",
         "2 735",
         "434,80"
        ],
        [
         "4",
         "−30,051",
         "16 501",
         "−1 068"
        ],
        [
         "5",
         "76,746",
         "99 548",
         "2 623"
        ],
        [
         "6",
         "−185,574",
         "600 581",
         "−6 443"
        ],
        [
         "7",
         "458,748",
         "3 623 375",
         "15 826"
        ],
        [
         "8",
         "−1 124",
         "21 860 266",
         "−38 873"
        ]
       ]
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Chọn bước nhảy",
     "html": "<b>Quá nhỏ</b> (0,005): đi đúng hướng nhưng rất chậm. <b>Vừa</b> (0,02): về đáy sau vài bước. <b>Hơi lớn</b> (0,05): nhảy qua lại hai bên đáy rồi mới dần về. <b>Quá lớn</b> (0,1): mỗi bước văng xa hơn — sai số tăng vọt, không bao giờ về đáy."
    },
    {
     "t": "anh",
     "cap": "Người đi xe đạp tìm chỗ thấp nhất: bước quá dài từ A vượt qua đáy B lên tận C",
     "alt": "Người đi xe đạp tìm chỗ thấp nhất: bước quá dài từ A vượt qua đáy B lên tận C",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260311090914419699/gradient_intuition.webp",
     "du_phong": "img/minh-hoa-gradient-descent-nhu-di-xuong-doc-tim-day.png",
     "nguon": {
      "ten": "GeeksforGeeks — Gradient descent algorithm and its variants",
      "url": "https://www.geeksforgeeks.org/machine-learning/gradient-descent-algorithm-and-its-variants/"
     },
     "chu_giai": [
      [
       "Position A, B, C",
       "Vị trí A, B, C"
      ],
      [
       "Global cost minimum",
       "Chỗ sai số thấp nhất (đáy thấp nhất)"
      ],
      [
       "Gradient",
       "Độ dốc"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Khi đổi cả a và b cùng lúc, sai số là một mặt cong; gradient descent vẫn đi xuống điểm thấp nhất",
     "alt": "Khi đổi cả a và b cùng lúc, sai số là một mặt cong; gradient descent vẫn đi xuống điểm thấp nhất",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260311162535133531/mean_squared_error_mse_.webp",
     "du_phong": "img/minh-hoa-mat-sai-so-va-diem-thap-nhat.png",
     "nguon": {
      "ten": "GeeksforGeeks — Gradient descent algorithm and its variants",
      "url": "https://www.geeksforgeeks.org/machine-learning/gradient-descent-algorithm-and-its-variants/"
     },
     "chu_giai": [
      [
       "Mean Squared Error (MSE)",
       "Sai số trung bình bình phương"
      ],
      [
       "Weight (w)",
       "Trọng số — trong bài là a"
      ],
      [
       "Bias",
       "Hệ số chặn — trong bài là b"
      ],
      [
       "Minimum",
       "Điểm thấp nhất"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Cộng thay vì trừ: a mới = a cũ + η × độ dốc thì đi lên dốc, sai số tăng.",
      "Nghĩ bước nhảy càng lớn càng về đáy nhanh.",
      "Nghĩ gradient descent thử hết mọi giá trị a — nó chỉ đi từng bước theo độ dốc."
     ]
    },
    {
     "t": "video",
     "yt": "sDv4f4s2SB8",
     "ten": "StatQuest — Gradient Descent, Step-by-Step",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — 9 phút đầu",
     "bat_dau": null,
     "ket_thuc": 540
    },
    {
     "t": "bang",
     "cot": [
      "Hôm nay con học",
      "Sẽ dùng lại ở"
     ],
     "dong": [
      [
       "Vector, khoảng cách Euclid",
       "Bài 11 — K láng giềng gần nhất (KNN)"
      ],
      [
       "Đưa về cùng thang đo",
       "Bài 7 — chuẩn bị feature; Bài 11 — KNN"
      ],
      [
       "MSE, đường dự đoán ŷ = a·x + b",
       "Phần B — hồi quy tuyến tính"
      ],
      [
       "Gradient descent, bước nhảy",
       "Phần B và Level 2 — mạng nơ-ron"
      ]
     ]
    },
    {
     "t": "tom_tat",
     "html": "Gradient descent lặp lại: tính độ dốc, bước ngược chiều dốc một đoạn η. η quá nhỏ thì chậm, quá lớn thì văng khỏi đáy."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Gradient Descent Algorithm and Its Variants",
       "url": "https://www.geeksforgeeks.org/machine-learning/gradient-descent-algorithm-and-its-variants/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q13",
     "q": "Tại giá trị a hiện tại, độ dốc của sai số là một số dương. Bước tiếp theo, a nên thay đổi thế nào?",
     "giai": "Dốc dương: tăng a thì sai số tăng, nên đi ngược lại. Theo công thức, a − η × (số dương) nhỏ hơn a.",
     "goi_y": "Dốc dương nghĩa là đi sang phải (tăng a) thì sai số cao hơn hay thấp hơn?",
     "a": [
      "Giảm a một đoạn nhỏ",
      "Tăng a một đoạn nhỏ",
      "Giữ nguyên giá trị a",
      "Đặt a về 0 rồi làm lại"
     ],
     "h": "3125634e94ac"
    },
    {
     "k": "sx",
     "id": "bai05-q14",
     "q": "Sắp xếp một vòng lặp gradient descent theo đúng thứ tự.",
     "giai": "Phải có a thì mới tính được độ dốc tại a; cập nhật xong mới lặp lại.",
     "goi_y": "Muốn tính độ dốc tại a thì phải có a trước.",
     "a": [
      "Chọn giá trị a ban đầu",
      "Tính độ dốc của sai số tại a",
      "Cập nhật a mới = a − η × độ dốc",
      "Lặp lại tới khi sai số gần như không giảm"
     ],
     "h": "e3375be8b5967"
    },
    {
     "k": "mc",
     "id": "bai05-q15",
     "q": "Trong phần Tự thử, với bước nhảy 0,1 thì sai số thay đổi thế nào sau mỗi bước?",
     "giai": "Bước nhảy quá lớn: mỗi bước vượt qua đáy và rơi xa hơn lần trước, sai số lên tới hàng triệu.",
     "goi_y": "Chọn nút 0,1 trong phần Tự thử rồi bấm “Bước tiếp” vài lần.",
     "a": [
      "Tăng vọt, a văng ngày càng xa đáy",
      "Giảm đều và về đáy nhanh nhất",
      "Giảm rất chậm nhưng đúng hướng",
      "Đứng yên ngay từ bước đầu tiên"
     ],
     "h": "b4971e98ca2c4"
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
    "id": "bai05-q16",
    "q": "Bảng có 50 học sinh, mỗi bạn 3 cột số. Bảng là ma trận cỡ bao nhiêu?",
    "giai": "Số dòng (50) trước, số cột (3) sau.",
    "a": [
     "50 × 3",
     "3 × 50",
     "50 × 50",
     "53 × 1"
    ],
    "h": "8b254e617eab"
   },
   {
    "k": "mc",
    "id": "bai05-q17",
    "q": "Khoảng cách giữa hai điểm M(0; 0) và N(6; 8) bằng bao nhiêu?",
    "giai": "√(6² + 8²) = √100 = 10.",
    "a": [
     "10",
     "14",
     "100",
     "48"
    ],
    "h": "1a71543d9420d5"
   },
   {
    "k": "mc",
    "id": "bai05-q18",
    "q": "Hai bạn có vector (2; 100) và (5; 104). Khoảng cách Euclid giữa hai bạn bằng bao nhiêu?",
    "giai": "Hiệu 3 và 4 → √(9 + 16) = √25 = 5.",
    "a": [
     "5",
     "7",
     "25",
     "4"
    ],
    "h": "9db6aeb764e83"
   },
   {
    "k": "mc",
    "id": "bai05-q19",
    "q": "Cột cân nặng có min 40 kg, max 80 kg. Đưa về 0 – 1 thì 50 kg thành bao nhiêu?",
    "giai": "(50 − 40) : (80 − 40) = 10 : 40 = 0,25.",
    "a": [
     "0,25",
     "0,5",
     "0,625",
     "10"
    ],
    "h": "f19f37ea04aab"
   },
   {
    "k": "mc",
    "id": "bai05-q20",
    "q": "A = (0,3; 0,2) và B = (0,7; 0,5) đã đưa về 0 – 1. Khoảng cách A → B bằng bao nhiêu?",
    "giai": "Hiệu 0,4 và 0,3 → √(0,16 + 0,09) = √0,25 = 0,5.",
    "a": [
     "0,5",
     "0,7",
     "0,25",
     "1,2"
    ],
    "h": "2db5dbdeb8bdd"
   },
   {
    "k": "mc",
    "id": "bai05-q21",
    "q": "Nhìn hình. Sau khi đưa hai cột về 0 – 1, bạn gần A hơn thay đổi thế nào?",
    "giai": "Đo thô: A gần B (16,5 < 96,0). Sau khi đổi: A gần C (0,229 < 0,632).",
    "img": {
     "src": "img/truoc-va-sau-khi-cung-thang-do.png"
    },
    "a": [
     "Đổi từ B sang C",
     "Đổi từ C sang B",
     "Vẫn là B như cũ",
     "Vẫn là C như cũ"
    ],
    "h": "171f23c85cde61"
   },
   {
    "k": "mc",
    "id": "bai05-q22",
    "q": "Nhìn hình. Vì sao đường a = 1,40 chưa tốt?",
    "giai": "Đường a = 1,40 dốc hơn đám điểm; sai số 5,71 lớn hơn nhiều so với 0,46 của đường a = 0,85.",
    "img": {
     "src": "img/ba-duong-thu-cho-diem-va-gio-hoc.png"
    },
    "a": [
     "Quá dốc, đoán quá cao cho bạn học nhiều",
     "Quá thoải, đoán quá thấp cho bạn học nhiều",
     "Không đi qua điểm nào của dữ liệu",
     "Có sai số nhỏ nhất trong ba đường"
    ],
    "h": "f74e86223d499"
   },
   {
    "k": "mc",
    "id": "bai05-q23",
    "q": "Nhìn hình. Đáy của thung lũng ứng với điều gì?",
    "giai": "Đáy là chỗ MSE thấp nhất, a ≈ 0,85.",
    "img": {
     "src": "img/duong-sai-so-hinh-thung-lung.png"
    },
    "a": [
     "Hệ số a làm sai số nhỏ nhất",
     "Hệ số a làm sai số lớn nhất",
     "Bước đầu tiên của thuật toán",
     "Giá trị a bằng đúng 0"
    ],
    "h": "385afe61ecb90"
   },
   {
    "k": "mc",
    "id": "bai05-q24",
    "q": "Đường ŷ = x + 1 với hai bạn (x; y) = (1; 3) và (3; 4). MSE bằng bao nhiêu?",
    "giai": "Dự đoán 2 và 4; sai lệch 1 và 0; bình phương 1 và 0; MSE = (1 + 0) : 2 = 0,5.",
    "a": [
     "0,5",
     "1",
     "0,25",
     "2"
    ],
    "h": "d974c5ee9c6a4"
   },
   {
    "k": "mc",
    "id": "bai05-q25",
    "q": "Với η = 0,005, sau 8 bước a mới tới 0,663 trong khi đáy ở a ≈ 0,85. Nên chỉnh thế nào?",
    "giai": "η nhỏ thì đúng hướng nhưng chậm; tăng vừa phải (0,02) là 8 bước về đáy. η = 1 thì văng khỏi đáy; đổi dấu cộng thì đi lên dốc.",
    "a": [
     "Tăng η lên một chút, ví dụ 0,02",
     "Tăng η lên thật lớn, ví dụ 1",
     "Đổi dấu trừ thành dấu cộng",
     "Dừng lại và lấy luôn a hiện tại"
    ],
    "h": "1145334be78e66"
   },
   {
    "k": "mc",
    "id": "bai05-q26",
    "q": "Nhìn hình. Người đi xe đạp đi từ vị trí A vượt qua đáy B lên tận C. Hình minh hoạ điều gì?",
    "giai": "Bước quá dài nên nhảy qua chỗ thấp nhất sang sườn bên kia.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260311090914419699/gradient_intuition.webp",
     "du_phong": "img/minh-hoa-gradient-descent-nhu-di-xuong-doc-tim-day.png",
     "nguon": {
      "ten": "GeeksforGeeks — Gradient descent algorithm and its variants",
      "url": "https://www.geeksforgeeks.org/machine-learning/gradient-descent-algorithm-and-its-variants/"
     }
    },
    "a": [
     "Bước nhảy quá lớn, vượt qua đáy",
     "Bước nhảy quá nhỏ, đi quá chậm",
     "Đi cùng chiều dốc, lên cao dần",
     "Dữ liệu chưa được đưa về 0 – 1"
    ],
    "h": "14227a1ecfe8f9"
   },
   {
    "k": "mc",
    "id": "bai05-q27",
    "q": "Vì sao phải đưa các cột về cùng thang đo trước khi dùng KNN?",
    "giai": "KNN chọn láng giềng theo khoảng cách; cột có số lớn sẽ lấn át nếu không đổi.",
    "a": [
     "Để mọi cột đóng góp công bằng vào khoảng cách",
     "Để máy chạy nhanh hơn gấp nhiều lần",
     "Để bảng dữ liệu có ít dòng hơn",
     "Để kết quả luôn là Đạt"
    ],
    "h": "1dccc104e7f854"
   },
   {
    "k": "ma",
    "id": "bai05-q28",
    "q": "Những việc nào có trong cách tính khoảng cách Euclid? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hiệu → bình phương → cộng → căn; không chia, không sắp xếp.",
    "a": [
     "Bình phương hiệu của từng cột",
     "Lấy căn bậc hai của tổng",
     "Chia tổng cho số cột",
     "Sắp xếp các số tăng dần"
    ],
    "h": "cd691e2509b60"
   },
   {
    "k": "ma",
    "id": "bai05-q29",
    "q": "Những phát biểu nào đúng về việc đưa một cột về 0 – 1? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Min thành 0, max thành 1, các giá trị khác nằm giữa; phải đổi mọi cột dùng để đo.",
    "a": [
     "Giá trị nhỏ nhất của cột thành 0",
     "Giá trị lớn nhất của cột thành 1",
     "Mọi giá trị của cột đều thành 0,5",
     "Chỉ cần đổi cột có số lớn nhất"
    ],
    "h": "10baec7a7d9659"
   },
   {
    "k": "ma",
    "id": "bai05-q30",
    "q": "Những phát biểu nào đúng về MSE của một đường dự đoán? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "MSE là trung bình các bình phương nên không âm; càng nhỏ càng khớp.",
    "a": [
     "Luôn lớn hơn hoặc bằng 0",
     "Càng nhỏ thì đường càng khớp",
     "Có thể âm nếu đường dốc xuống",
     "Bằng tổng các sai lệch chia 2"
    ],
    "h": "897963e3e8f10"
   },
   {
    "k": "ma",
    "id": "bai05-q31",
    "q": "Những phát biểu nào đúng về bước nhảy η trong gradient descent? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "η do người lập trình chọn; quá nhỏ thì chậm, quá lớn thì không hội tụ.",
    "a": [
     "Quá nhỏ thì về đáy rất chậm",
     "Quá lớn thì có thể văng xa khỏi đáy",
     "Càng lớn thì luôn càng tốt",
     "Máy luôn tự chọn giúp mình"
    ],
    "h": "1880b40f433ab3"
   },
   {
    "k": "ma",
    "id": "bai05-q32",
    "q": "Theo hình “Ba ứng dụng của khoảng cách Euclid”, những ứng dụng nào có trong hình? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hình có: dẫn đường, hai điểm trên khuôn mặt, hai toạ độ trên bản đồ.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260729183611662101/2056958497.webp",
     "du_phong": "img/minh-hoa-ba-ung-dung-thuc-te-cua-khoang-cach-euclid.png",
     "nguon": {
      "ten": "GeeksforGeeks — Euclidean distance",
      "url": "https://www.geeksforgeeks.org/maths/euclidean-distance/"
     }
    },
    "a": [
     "Dẫn đường trên bản đồ",
     "Đo giữa hai điểm trên khuôn mặt",
     "Dự báo thời tiết ngày mai",
     "Sắp xếp danh sách học sinh"
    ],
    "h": "4ab6af0eaf8a9"
   },
   {
    "k": "ma",
    "id": "bai05-q33",
    "q": "Bảng khối 10 lấy 2 cột là ma trận 240 × 2. Những phát biểu nào đúng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "240 × 2: 240 dòng (học sinh), 2 cột (đặc điểm).",
    "a": [
     "Có 240 dòng, mỗi dòng là một học sinh",
     "Mỗi học sinh là một vector 2 chiều",
     "Có 240 cột, mỗi cột là một học sinh",
     "Mỗi học sinh là vector 240 chiều"
    ],
    "h": "1095bc144d5023"
   },
   {
    "k": "sx",
    "id": "bai05-q34",
    "q": "Sắp xếp các bước đưa một giá trị x về khoảng 0 – 1.",
    "giai": "x′ = (x − min) : (max − min).",
    "a": [
     "Tìm giá trị nhỏ nhất và lớn nhất của cột",
     "Tính max − min của cột",
     "Lấy x trừ đi giá trị nhỏ nhất",
     "Chia kết quả cho max − min"
    ],
    "h": "ec56a2f152213"
   },
   {
    "k": "sx",
    "id": "bai05-q35",
    "q": "Sắp xếp các bước tính MSE của một đường dự đoán.",
    "giai": "Dự đoán → sai lệch → bình phương → trung bình.",
    "a": [
     "Tính giá trị dự đoán ŷ cho từng điểm",
     "Tính sai lệch y − ŷ của từng điểm",
     "Bình phương từng sai lệch",
     "Lấy trung bình cộng các bình phương"
    ],
    "h": "6782c48541e4d"
   },
   {
    "k": "sx",
    "id": "bai05-q36",
    "q": "Sắp xếp các bước tìm bạn giống A nhất trong cả khối một cách công bằng.",
    "giai": "Đổi thang đo trước, rồi đo, rồi sắp xếp, bạn có khoảng cách nhỏ nhất là giống nhất.",
    "a": [
     "Đưa mọi cột về khoảng 0 – 1",
     "Tính khoảng cách từ A tới từng bạn",
     "Sắp xếp khoảng cách tăng dần",
     "Lấy bạn đứng đầu danh sách"
    ],
    "h": "93792c8d24713"
   },
   {
    "k": "dd",
    "id": "bai05-q37",
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
    "h": "bb6f8fad775e6"
   },
   {
    "k": "dd",
    "id": "bai05-q38",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "x′ = (x − min) : (max − min).",
    "mau": "Công thức đưa về 0 – 1: x′ = (x − {0}) : ({1}).",
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
    "h": "f399624c1852d"
   },
   {
    "k": "dd",
    "id": "bai05-q39",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đi ngược chiều dốc nên dùng dấu trừ; η là bước nhảy (learning rate).",
    "mau": "Gradient descent: a mới = a cũ {0} η × độ dốc; η gọi là {1}.",
    "o": [
     [
      "−",
      "+",
      "×",
      ":"
     ],
     [
      "bước nhảy",
      "độ dốc",
      "sai số",
      "hệ số chặn"
     ]
    ],
    "h": "196d018cb30459"
   },
   {
    "k": "dd",
    "id": "bai05-q40",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "a quyết định độ dốc của đường; b là chỗ đường cắt trục tung.",
    "mau": "Trong đường dự đoán ŷ = a·x + b, a là {0} và b là {1}.",
    "o": [
     [
      "hệ số góc",
      "hệ số chặn",
      "sai số",
      "bước nhảy"
     ],
     [
      "hệ số chặn",
      "hệ số góc",
      "độ dốc",
      "sai số"
     ]
    ],
    "h": "1ac350aeb9d1de"
   },
   {
    "k": "dd",
    "id": "bai05-q41",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Phút mạng biến thiên 435 phút, giờ học chỉ 6,5 giờ.",
    "mau": "Khi đo thô, cột {0} lấn át vì có {1} lớn hơn nhiều.",
    "o": [
     [
      "phút mạng xã hội",
      "giờ tự học",
      "kết quả",
      "mã học sinh"
     ],
     [
      "khoảng biến thiên",
      "số ô trống",
      "số học sinh",
      "số chữ số thập phân"
     ]
    ],
    "h": "129cfb737f1f76"
   },
   {
    "k": "ds",
    "id": "bai05-q42",
    "q": "Khoảng cách Euclid từ A đến B luôn bằng khoảng cách từ B đến A.",
    "giai": "Hiệu đổi dấu nhưng bình phương thì như nhau.",
    "h": "4d18610eb15cb"
   },
   {
    "k": "ds",
    "id": "bai05-q43",
    "q": "Sau khi đưa về 0 – 1, thứ tự lớn nhỏ của các giá trị trong một cột bị đảo ngược.",
    "giai": "Công thức giữ nguyên thứ tự: giá trị lớn hơn vẫn thành số lớn hơn.",
    "h": "10b898ee3de1e2"
   },
   {
    "k": "ds",
    "id": "bai05-q44",
    "q": "Gradient descent chắc chắn về tới đáy với mọi bước nhảy.",
    "giai": "Bước nhảy quá lớn (ví dụ 0,1 trong bài) làm a văng ngày càng xa đáy.",
    "h": "113cf1de5d65c0"
   },
   {
    "k": "ds",
    "id": "bai05-q45",
    "q": "MSE bằng 0 nghĩa là đường dự đoán đi qua đúng mọi điểm dữ liệu.",
    "giai": "Mọi sai lệch đều bằng 0 thì MSE mới bằng 0.",
    "h": "1e4e1aa9bcd4e5"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
