window.BAI = {
 "bai": 11,
 "ma": "bai11",
 "nhan": "Bài 11",
 "tieu_de": "K láng giềng gần nhất (KNN)",
 "phan": "Phần B · Học có giám sát",
 "cau_hoi": "Máy quyết định “bạn này giống ai” bằng cách nào?",
 "gioi_thieu": [
  "Ở Bài 5 con đã cho 5 bạn gần A nhất “bỏ phiếu” đoán kết quả của A. Đó chính là ý tưởng của <b>KNN — K láng giềng gần nhất</b>, thuật toán học có giám sát đầu tiên con xây trọn vẹn.",
  "Năm chặng: ba bước của KNN, tự đoán một bạn mới bằng tay, vì sao phải đưa về cùng thang đo, chọn K, và dùng KNN trong scikit-learn. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại khoảng cách Euclid, đưa về 0 – 1 (Bài 5), chia dữ liệu (Bài 7) và quy trình 5 bước, mốc model lười (Bài 10)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai11",
 "muc_tieu": [
  "Mô tả được ba bước của thuật toán KNN.",
  "Tự dự đoán được nhãn cho một điểm mới bằng KNN.",
  "Giải thích được vì sao KNN cần đưa các cột về cùng thang đo.",
  "Giải thích được ảnh hưởng của K: K nhỏ dễ học vẹt, K lớn dễ chưa khớp.",
  "Huấn luyện và đánh giá KNN bằng scikit-learn, so với mốc."
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
   "ten": "Ba bước của KNN",
   "ten_ngan": "Ba bước",
   "phut": 4,
   "muc_tieu": "mô tả được ba bước của thuật toán KNN.",
   "khoi_dong": "Một bạn mới chuyển tới lớp. Muốn đoán bạn ấy học thế nào, con sẽ hỏi ai?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "K láng giềng gần nhất (KNN — K-Nearest Neighbours)",
     "html": "Để dự đoán nhãn cho một điểm mới: (1) đo khoảng cách từ điểm mới tới <b>mọi điểm đã biết nhãn</b>; (2) lấy <b>K điểm gần nhất</b>; (3) cho K điểm đó <b>bỏ phiếu</b> — nhãn nhiều phiếu nhất là dự đoán.",
     "ky_hieu": "K là tham số do người dùng chọn. KNN không tìm quy tắc nào khi huấn luyện — nó chỉ <b>nhớ</b> dữ liệu rồi hỏi láng giềng khi cần dự đoán."
    },
    {
     "t": "anh",
     "cap": "Bước 0: một điểm mới (ô vàng) cần xếp vào nhóm A hay B",
     "alt": "Bước 0: một điểm mới (ô vàng) cần xếp vào nhóm A hay B",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512150739534897/Initial-Data.webp",
     "du_phong": "img/minh-hoa-diem-moi-can-phan-loai.png",
     "nguon": {
      "ten": "GeeksforGeeks — K nearest neighbours",
      "url": "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/"
     },
     "chu_giai": [
      [
       "Initial Data",
       "Dữ liệu ban đầu"
      ],
      [
       "New example to classify",
       "Điểm mới cần phân loại"
      ],
      [
       "Class A, Class B",
       "Nhóm A (ngôi sao), nhóm B (tam giác)"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Bước 1: đo khoảng cách tới các điểm đã biết",
     "alt": "Bước 1: đo khoảng cách tới các điểm đã biết",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512150738992167/Calculate-Data.webp",
     "du_phong": "img/minh-hoa-do-khoang-cach-tu-diem-moi-den-moi-diem.png",
     "nguon": {
      "ten": "GeeksforGeeks — K nearest neighbours",
      "url": "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/"
     },
     "chu_giai": [
      [
       "Calculate Data",
       "Tính khoảng cách"
      ],
      [
       "X-Axis, Y-Axis",
       "Trục hoành, trục tung"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Bước 2 – 3: lấy K = 3 điểm gần nhất rồi bỏ phiếu",
     "alt": "Bước 2 – 3: lấy K = 3 điểm gần nhất rồi bỏ phiếu",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512162457630554/Finding_Neighbor_Voting_for_Labels.webp",
     "du_phong": "img/minh-hoa-ba-hang-xom-gan-nhat-bo-phieu.png",
     "nguon": {
      "ten": "GeeksforGeeks — K nearest neighbours",
      "url": "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/"
     },
     "chu_giai": [
      [
       "Finding Neighbors & Voting for Labels",
       "Tìm láng giềng và bỏ phiếu"
      ],
      [
       "K = 3",
       "Lấy 3 láng giềng gần nhất"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ KNN “học” ra một công thức — nó chỉ nhớ dữ liệu và đo khoảng cách lúc dự đoán.",
      "Lấy K điểm xa nhất thay vì gần nhất."
     ]
    },
    {
     "t": "video",
     "yt": "HVXime0nQeI",
     "ten": "StatQuest — K-nearest neighbors, Clearly Explained",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "KNN: đo khoảng cách → lấy K gần nhất → bỏ phiếu đa số."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "K-Nearest Neighbor (KNN) Algorithm",
       "url": "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai11-q1",
     "q": "Sắp xếp ba bước dự đoán nhãn cho một điểm mới bằng KNN.",
     "giai": "Đo → chọn → bỏ phiếu.",
     "goi_y": "Muốn biết điểm nào gần nhất thì phải làm gì trước?",
     "a": [
      "Đo khoảng cách tới mọi điểm đã biết nhãn",
      "Chọn K điểm gần nhất",
      "Cho K điểm đó bỏ phiếu, lấy nhãn nhiều phiếu nhất"
     ],
     "h": "112239366e14bd"
    },
    {
     "k": "mc",
     "id": "bai11-q2",
     "q": "K = 5 láng giềng gần nhất có 3 bạn Chưa đạt, 2 bạn Đạt. KNN đoán bạn mới thế nào?",
     "giai": "Đa số là Chưa đạt (3 > 2).",
     "goi_y": "Nhãn nào nhiều phiếu hơn?",
     "a": [
      "Chưa đạt",
      "Đạt",
      "Không đoán được",
      "Nửa Đạt, nửa Chưa đạt"
     ],
     "h": "1fc608c56b84d6"
    }
   ]
  },
  {
   "ten": "Tự dự đoán một bạn mới",
   "ten_ngan": "Tính tay",
   "phut": 5,
   "muc_tieu": "tự dự đoán được nhãn của một điểm mới bằng KNN và thấy kết quả có thể đổi theo K.",
   "khoi_dong": "Bạn mới tự học 3,4 giờ, dùng mạng 150 phút mỗi ngày. Bạn ấy Đạt hay Chưa đạt?",
   "khoi": [
    {
     "t": "p",
     "html": "Máy đã đưa hai cột về 0 – 1 (dùng min, max của tập huấn luyện: giờ 0,5 – 7,0, phút 15 – 450), rồi đo khoảng cách từ bạn mới tới 168 bạn trong tập huấn luyện. Dưới đây là 9 bạn gần nhất."
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "9 láng giềng gần nhất của bạn mới",
     "huong_dan": "Bấm “Bước tiếp” để thêm từng láng giềng, từ gần tới xa. Theo dõi cột cuối: kiểm phiếu sau K láng giềng.",
     "nhan_chon": "Láng giềng",
     "cot": [
      "Hạng",
      "Mã",
      "Giờ học",
      "Phút mạng",
      "Khoảng cách (0 – 1)",
      "Kết quả",
      "Kiểm phiếu"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "9 láng giềng",
       "dong": [
        [
         "—",
         "Bạn mới",
         "3,4",
         "150",
         "—",
         "?",
         "—"
        ],
        [
         "1",
         "HS186",
         "3,5",
         "147",
         "0,017",
         "Đạt",
         "1 Đạt – 0 Chưa đạt"
        ],
        [
         "2",
         "HS057",
         "3,2",
         "144",
         "0,034",
         "Chưa đạt",
         "1 Đạt – 1 Chưa đạt"
        ],
        [
         "3",
         "HS084",
         "3,3",
         "135",
         "0,038",
         "Chưa đạt",
         "1 Đạt – 2 Chưa đạt"
        ],
        [
         "4",
         "HS214",
         "3,3",
         "133",
         "0,042",
         "Đạt",
         "2 Đạt – 2 Chưa đạt"
        ],
        [
         "5",
         "HS199",
         "3,6",
         "164",
         "0,045",
         "Đạt",
         "3 Đạt – 2 Chưa đạt"
        ],
        [
         "6",
         "HS011",
         "3,1",
         "136",
         "0,056",
         "Chưa đạt",
         "3 Đạt – 3 Chưa đạt"
        ],
        [
         "7",
         "HS046",
         "3,7",
         "128",
         "0,068",
         "Đạt",
         "4 Đạt – 3 Chưa đạt"
        ],
        [
         "8",
         "HS239",
         "3,2",
         "123",
         "0,069",
         "Đạt",
         "5 Đạt – 3 Chưa đạt"
        ],
        [
         "9",
         "HS045",
         "3,3",
         "185",
         "0,082",
         "Đạt",
         "6 Đạt – 3 Chưa đạt"
        ]
       ]
      }
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "kết quả theo từng K",
     "de": null,
     "cot": [
      "K",
      "Phiếu Đạt",
      "Phiếu Chưa đạt",
      "KNN đoán"
     ],
     "dong": [
      [
       "1",
       "1",
       "0",
       "<b>Đạt</b>"
      ],
      [
       "3",
       "1",
       "2",
       "<b>Chưa đạt</b>"
      ],
      [
       "5",
       "3",
       "2",
       "<b>Đạt</b>"
      ],
      [
       "9",
       "6",
       "3",
       "<b>Đạt</b>"
      ]
     ],
     "ket_luan": "Cùng một bạn mới, K khác nhau cho câu trả lời khác nhau — vì bạn ấy nằm ở vùng giáp ranh. Chặng 4 sẽ chọn K bằng dữ liệu.",
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Vì sao K thường là số lẻ?",
     "html": "Với hai nhãn, K lẻ không bao giờ hoà phiếu (ví dụ K = 4 có thể 2 – 2)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên đưa điểm mới về 0 – 1 bằng cùng min, max với tập huấn luyện.",
      "Đếm cả chính điểm mới vào danh sách láng giềng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Dự đoán bằng KNN: đưa về 0 – 1, đo, sắp xếp, lấy K đầu danh sách, kiểm phiếu."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai11-q3",
     "q": "Trong phần Tự thử, với K = 3 KNN đoán bạn mới thế nào?",
     "giai": "Ba láng giềng đầu: 1 Đạt, 2 Chưa đạt.",
     "goi_y": "Bấm tới láng giềng thứ 3 rồi đọc cột kiểm phiếu.",
     "a": [
      "Chưa đạt",
      "Đạt",
      "Hoà phiếu",
      "Không đoán được"
     ],
     "h": "9430d67bbc6b1"
    },
    {
     "k": "ds",
     "id": "bai11-q4",
     "q": "Với hai nhãn, chọn K là số chẵn có thể bị hoà phiếu.",
     "giai": "K = 4 có thể ra 2 – 2.",
     "goi_y": "Thử K = 2: hai láng giềng khác nhãn thì sao?",
     "h": "1397dcd39d632c"
    }
   ]
  },
  {
   "ten": "KNN cần cùng thang đo",
   "ten_ngan": "Thang đo",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao KNN phải đưa các cột về cùng thang đo, bằng số liệu.",
   "khoi_dong": "Bài 5: đo thô thì cột phút mạng lấn át cột giờ học. Điều đó ảnh hưởng tới KNN thế nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Vẽ hai cột trên cùng một thang đo: cả cột giờ học chỉ còn là một dải hẹp",
     "alt": "Vẽ hai cột trên cùng một thang đo: cả cột giờ học chỉ còn là một dải hẹp",
     "src": "img/thang-do-goc-nuot-mat-cot-gio-hoc.png"
    },
    {
     "t": "anh",
     "cap": "Cùng KNN, cùng K = 5: chưa đưa về cùng thang đo 72,2% — đã đưa 94,4%",
     "alt": "Cùng KNN, cùng K = 5: chưa đưa về cùng thang đo 72,2% — đã đưa 94,4%",
     "src": "img/duong-bien-knn-chua-scale-va-da-scale.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "KNN K = 5 trên tập kiểm tra",
     "de": null,
     "cot": [
      "Cách làm",
      "Độ chính xác"
     ],
     "dong": [
      [
       "Chưa đưa về cùng thang đo",
       "72,2%"
      ],
      [
       "Đưa về 0 – 1 (MinMaxScaler)",
       "<b>94,4%</b>"
      ],
      [
       "Mốc model lười",
       "54,2%"
      ]
     ],
     "ket_luan": "Chênh 22,2 điểm chỉ vì thang đo — không đổi thuật toán, không đổi dữ liệu.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Đưa về 0 – 1 đúng cách",
     "html": "Tính min, max <b>trên tập huấn luyện</b>, rồi dùng đúng min, max đó để đổi cả tập huấn luyện, tập kiểm tra và mọi điểm mới.",
     "ky_hieu": "<code>sc = MinMaxScaler().fit(X_train)</code> · <code>X_train_s = sc.transform(X_train)</code> · <code>X_test_s = sc.transform(X_test)</code>"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Tính min, max trên cả bảng (gồm tập kiểm tra) — tập kiểm tra không còn “chưa thấy”.",
      "Đổi tập huấn luyện mà quên đổi tập kiểm tra."
     ]
    },
    {
     "t": "tom_tat",
     "html": "KNN đo khoảng cách nên cột số to lấn át cột số nhỏ. Luôn đưa về cùng thang đo, với min, max lấy từ tập huấn luyện."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai11-q5",
     "q": "Với KNN K = 5, đưa về cùng thang đo làm độ chính xác trên tập kiểm tra thay đổi thế nào?",
     "giai": "Hết bị cột phút lấn át, KNN chọn đúng láng giềng hơn.",
     "goi_y": "Xem bảng ví dụ ở trên.",
     "a": [
      "Tăng từ 72,2% lên 94,4%",
      "Giảm từ 94,4% xuống 72,2%",
      "Giữ nguyên 72,2%",
      "Tăng lên 100,0%"
     ],
     "h": "17777d02556e39"
    },
    {
     "k": "dd",
     "id": "bai11-q6",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Min, max lấy từ tập huấn luyện; dùng để đổi mọi dữ liệu.",
     "goi_y": "Phần dữ liệu để chấm ở cuối có được nhìn thấy lúc chuẩn bị không?",
     "mau": "MinMaxScaler phải .fit() trên tập {0}, rồi .transform() cả tập huấn luyện và tập {1}.",
     "o": [
      [
       "huấn luyện",
       "kiểm tra",
       "toàn bộ bảng",
       "nhãn"
      ],
      [
       "kiểm tra",
       "nhãn",
       "feature",
       "trùng lặp"
      ]
     ],
     "h": "b0a7cbaa96fb1"
    }
   ]
  },
  {
   "ten": "Chọn K",
   "ten_ngan": "Chọn K",
   "phut": 5,
   "muc_tieu": "giải thích được ảnh hưởng của K và chọn K bằng dữ liệu.",
   "khoi_dong": "K = 1 hay K = 41 — láng giềng ít hay nhiều thì tốt hơn?",
   "khoi": [
    {
     "t": "demo_truot",
     "tieu_de": "thử các giá trị K",
     "huong_dan": "Kéo thanh trượt để đổi K. So độ chính xác trên tập huấn luyện và tập kiểm tra.",
     "dieu_kien": "KNN với K = <b>{x}</b> láng giềng (đã đưa về cùng thang đo)",
     "moc": [
      {
       "x": 1,
       "n": "100,0%",
       "p": 86.1
      },
      {
       "x": 3,
       "n": "94,0%",
       "p": 91.7
      },
      {
       "x": 5,
       "n": "91,7%",
       "p": 94.4
      },
      {
       "x": 9,
       "n": "92,3%",
       "p": 95.8
      },
      {
       "x": 15,
       "n": "91,1%",
       "p": 93.1
      },
      {
       "x": 25,
       "n": "88,7%",
       "p": 91.7
      },
      {
       "x": 41,
       "n": "89,9%",
       "p": 93.1
      }
     ],
     "nhan_n": "Đúng trên tập huấn luyện",
     "nhan_p": "Đúng trên tập kiểm tra",
     "so_le_x": 0,
     "bat_dau": 3
    },
    {
     "t": "anh",
     "cap": "Độ chính xác theo K trên train và test",
     "alt": "Độ chính xác theo K trên train và test",
     "src": "img/do-chinh-xac-theo-tung-gia-tri-k.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc hình chọn K",
     "de": null,
     "cot": [
      "K",
      "Train",
      "Test",
      "Nhận xét"
     ],
     "dong": [
      [
       "1",
       "100,0%",
       "86,1%",
       "Học vẹt — mỗi điểm tự bầu cho chính nó"
      ],
      [
       "9",
       "92,3%",
       "<b>95,8%</b>",
       "Tốt nhất trên test"
      ],
      [
       "41",
       "89,9%",
       "93,1%",
       "Ranh giới mượt quá, bắt đầu chưa khớp"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "anh",
     "cap": "Ranh giới quyết định với K = 1, 5, 9, 25 — K nhỏ thì lởm chởm, K lớn thì mượt",
     "alt": "Ranh giới quyết định với K = 1, 5, 9, 25 — K nhỏ thì lởm chởm, K lớn thì mượt",
     "src": "img/duong-bien-voi-bon-gia-tri-k.png"
    },
    {
     "t": "anh",
     "cap": "Một bộ dữ liệu khác: ranh giới của KNN khi k = 1, 3, 5, 10",
     "alt": "Một bộ dữ liệu khác: ranh giới của KNN khi k = 1, 3, 5, 10",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20240910125132/casestudy1.webp",
     "du_phong": "img/minh-hoa-duong-bien-thay-doi-theo-gia-tri-k.png",
     "nguon": {
      "ten": "GeeksforGeeks — Understanding decision boundaries in k nearest neighbors knn",
      "url": "https://www.geeksforgeeks.org/machine-learning/understanding-decision-boundaries-in-k-nearest-neighbors-knn/"
     },
     "chu_giai": [
      [
       "KNN Decision Boundaries (k=1)",
       "Ranh giới quyết định của KNN với k = 1"
      ],
      [
       "Feature 1, Feature 2",
       "Feature thứ nhất, thứ hai"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Chọn K bằng tập nào?",
     "html": "Bài này dùng tập kiểm tra để minh hoạ cho dễ thấy. Làm đúng quy trình thì chọn K bằng một phần tách riêng từ tập huấn luyện (tập kiểm định) — Bài 18 sẽ học cách làm này."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn K = 1 vì đúng 100% trên tập huấn luyện.",
      "Nghĩ K càng lớn càng tốt."
     ]
    },
    {
     "t": "tom_tat",
     "html": "K nhỏ: dễ học vẹt. K lớn: dễ chưa khớp. Thử nhiều K, chọn K tốt trên dữ liệu chưa thấy."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Understanding Decision Boundaries in KNN",
       "url": "https://www.geeksforgeeks.org/machine-learning/understanding-decision-boundaries-in-k-nearest-neighbors-knn/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai11-q7",
     "q": "Vì sao KNN với K = 1 luôn đúng 100% trên tập huấn luyện?",
     "giai": "Mỗi điểm tự “bầu” cho nhãn của chính nó — học vẹt.",
     "goi_y": "Khi dự đoán một điểm của tập huấn luyện, láng giềng gần nhất là ai?",
     "a": [
      "Điểm gần nhất của mỗi điểm là chính nó",
      "K = 1 là giá trị K tốt nhất",
      "Tập huấn luyện không có lỗi nào",
      "Máy đoán ngẫu nhiên mà trúng"
     ],
     "h": "2b69b76d87df0"
    },
    {
     "k": "dd",
     "id": "bai11-q8",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "K nhỏ bám từng điểm; K lớn làm mờ ranh giới.",
     "goi_y": "Nhìn ranh giới K = 1 (lởm chởm) và K = 25 (rất mượt).",
     "mau": "K quá nhỏ dễ {0}; K quá lớn dễ {1}.",
     "o": [
      [
       "học vẹt",
       "chưa khớp",
       "rò rỉ",
       "lệch nhãn"
      ],
      [
       "chưa khớp",
       "học vẹt",
       "rò rỉ",
       "lệch nhãn"
      ]
     ],
     "h": "9805c952ab953"
    }
   ]
  },
  {
   "ten": "KNN trong scikit-learn và đánh giá",
   "ten_ngan": "scikit-learn",
   "phut": 4,
   "muc_tieu": "huấn luyện, dự đoán và đánh giá KNN bằng scikit-learn, so với mốc.",
   "khoi_dong": "Con đã làm bằng tay. Máy làm cho 72 bạn chỉ với vài dòng lệnh thế nào?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Bước (quy trình 5 bước)",
      "Lệnh"
     ],
     "dong": [
      [
       "Chia dữ liệu",
       "<code>train_test_split(X, y, test_size=0.3, stratify=y)</code>"
      ],
      [
       "Đưa về 0 – 1",
       "<code>sc = MinMaxScaler().fit(X_train)</code>"
      ],
      [
       "Huấn luyện (nhớ dữ liệu)",
       "<code>knn = KNeighborsClassifier(n_neighbors=9)</code><br><code>knn.fit(sc.transform(X_train), y_train)</code>"
      ],
      [
       "Dự đoán",
       "<code>du_doan = knn.predict(sc.transform(X_test))</code>"
      ],
      [
       "Đánh giá",
       "<code>accuracy_score(y_test, du_doan)</code>"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "so KNN với các model trước",
     "de": null,
     "cot": [
      "Model",
      "Độ chính xác trên tập kiểm tra"
     ],
     "dong": [
      [
       "Model lười (Bài 7, 10)",
       "54,2%"
      ],
      [
       "Model ngưỡng giờ học (Bài 10)",
       "91,7%"
      ],
      [
       "KNN K = 9, đã đưa về cùng thang đo",
       "<b>95,8%</b>"
      ]
     ],
     "ket_luan": "KNN nhìn được hai cột cùng lúc nên vượt model ngưỡng một cột.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "anh",
     "cap": "Ranh giới quyết định: vùng mà mọi điểm mới rơi vào sẽ được đoán cùng một nhãn",
     "alt": "Ranh giới quyết định: vùng mà mọi điểm mới rơi vào sẽ được đoán cùng một nhãn",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251113175949623882/420046938.webp",
     "du_phong": "img/minh-hoa-duong-bien-quyet-dinh-cua-knn.png",
     "nguon": {
      "ten": "GeeksforGeeks — Understanding decision boundaries in k nearest neighbors knn",
      "url": "https://www.geeksforgeeks.org/machine-learning/understanding-decision-boundaries-in-k-nearest-neighbors-knn/"
     },
     "chu_giai": [
      [
       "Decision Boundary (KNN)",
       "Ranh giới quyết định của KNN"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Ưu điểm",
      "Hạn chế"
     ],
     "dong": [
      [
       "Dễ hiểu, dễ giải thích bằng “láng giềng”",
       "Dự đoán chậm khi dữ liệu rất lớn"
      ],
      [
       "Không cần tìm công thức",
       "Bắt buộc đưa về cùng thang đo"
      ],
      [
       "Dùng được cho nhiều nhãn",
       "Cột thừa, cột nhiễu làm sai khoảng cách"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Buổi sau: thực hành nhóm 2",
     "html": "Nhóm dùng KNN chẩn đoán khối u lành hay ác trên một bộ dữ liệu y khoa thật — quy trình y hệt hôm nay."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên transform tập kiểm tra trước khi predict.",
      "Không so với mốc model lười nên không biết KNN có thật sự học được gì."
     ]
    },
    {
     "t": "tom_tat",
     "html": "scikit-learn: chia → MinMaxScaler → KNeighborsClassifier.fit → predict → accuracy_score; luôn so với mốc."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai11-q9",
     "q": "Lệnh nào tạo một model KNN với 7 láng giềng trong scikit-learn?",
     "giai": "n_neighbors là K.",
     "goi_y": "Tên lớp có chữ Neighbors.",
     "a": [
      "KNeighborsClassifier(n_neighbors=7)",
      "MinMaxScaler(n_neighbors=7)",
      "train_test_split(n_neighbors=7)",
      "accuracy_score(n_neighbors=7)"
     ],
     "h": "18f07f575950e6"
    },
    {
     "k": "ma",
     "id": "bai11-q10",
     "q": "Những hạn chế nào đúng với KNN? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "KNN dễ giải thích; dùng tốt cho phân loại.",
     "goi_y": "Xem bảng ưu điểm, hạn chế.",
     "a": [
      "Cần đưa các cột về cùng thang đo",
      "Dự đoán chậm khi dữ liệu rất lớn",
      "Chỉ dùng được cho hồi quy",
      "Không giải thích được bằng lời"
     ],
     "h": "97c6aa27877f7"
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
    "id": "bai11-q11",
    "q": "Nhìn hình. Vòng tròn nét đứt quanh ô vàng cho biết điều gì?",
    "giai": "Vòng tròn khoanh 3 điểm gần ô vàng nhất — những điểm được bỏ phiếu.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512162457630554/Finding_Neighbor_Voting_for_Labels.webp",
     "du_phong": "img/minh-hoa-ba-hang-xom-gan-nhat-bo-phieu.png",
     "nguon": {
      "ten": "GeeksforGeeks — K nearest neighbours",
      "url": "https://www.geeksforgeeks.org/machine-learning/k-nearest-neighbours/"
     }
    },
    "a": [
     "Vùng chứa K = 3 láng giềng gần nhất",
     "Ranh giới giữa nhóm A và nhóm B",
     "Vùng chứa mọi điểm của nhóm B",
     "Khoảng cách xa nhất của dữ liệu"
    ],
    "h": "db01e682fb594"
   },
   {
    "k": "mc",
    "id": "bai11-q12",
    "q": "Nhìn hình. K nào cho độ chính xác cao nhất trên tập kiểm tra?",
    "giai": "Đỉnh đường test ở K = 9.",
    "img": {
     "src": "img/do-chinh-xac-theo-tung-gia-tri-k.png"
    },
    "a": [
     "K = 9",
     "K = 1",
     "K = 41",
     "K = 3"
    ],
    "h": "1b14d611019194"
   },
   {
    "k": "mc",
    "id": "bai11-q13",
    "q": "Nhìn hình. Vì sao hình bên trái kém hơn hình bên phải?",
    "giai": "Cùng K = 5, chỉ khác thang đo.",
    "img": {
     "src": "img/duong-bien-knn-chua-scale-va-da-scale.png"
    },
    "a": [
     "Cột phút mạng lấn át cột giờ học",
     "Dùng K khác nhau ở hai hình",
     "Hình trái có ít dữ liệu hơn",
     "Hình trái dùng thuật toán khác"
    ],
    "h": "18e9e6449c4205"
   },
   {
    "k": "mc",
    "id": "bai11-q14",
    "q": "Nhìn hình. Ranh giới với K = 1 có đặc điểm gì?",
    "giai": "K = 1 bám từng điểm — dấu hiệu học vẹt.",
    "img": {
     "src": "img/duong-bien-voi-bon-gia-tri-k.png"
    },
    "a": [
     "Lởm chởm, bám sát từng điểm",
     "Mượt, gần như thẳng",
     "Không có ranh giới",
     "Giống hệt K = 25"
    ],
    "h": "15aa4cd0c0829e"
   },
   {
    "k": "mc",
    "id": "bai11-q15",
    "q": "KNN nhớ dữ liệu và chỉ tính khi cần dự đoán. Điều này gây khó khăn gì?",
    "giai": "Mỗi lần dự đoán phải đo tới mọi điểm.",
    "a": [
     "Dự đoán chậm khi dữ liệu rất lớn",
     "Huấn luyện mất rất nhiều giờ",
     "Không dự đoán được điểm mới",
     "Không dùng được cho phân loại"
    ],
    "h": "189dbad7c23335"
   },
   {
    "k": "mc",
    "id": "bai11-q16",
    "q": "Bảng có cột Chiều cao (cm) và cột Chiều dài bàn chân (cm). Có cần đưa về cùng thang đo trước KNN không?",
    "giai": "Cùng đơn vị nhưng khoảng biến thiên khác nhau vẫn lấn át.",
    "a": [
     "Có — khoảng biến thiên hai cột khác nhau",
     "Không — hai cột cùng đơn vị cm",
     "Không — KNN tự đổi thang đo",
     "Có — vì cột cm luôn phải bỏ"
    ],
    "h": "1c4eb7f1ecebb5"
   },
   {
    "k": "mc",
    "id": "bai11-q17",
    "q": "KNN với K = 7 đúng 88% trên test, mốc model lười 90%. Nhận xét nào đúng?",
    "giai": "Không vượt mốc thì model chưa có ích.",
    "a": [
     "KNN còn kém hơn đoán một nhãn",
     "KNN rất tốt vì gần 90%",
     "KNN đang học vẹt",
     "Cần tăng K lên 1000"
    ],
    "h": "15c6c8f0b19636"
   },
   {
    "k": "mc",
    "id": "bai11-q18",
    "q": "K = 4 láng giềng có 2 Đạt, 2 Chưa đạt. Chuyện gì xảy ra?",
    "giai": "Vì vậy với hai nhãn thường chọn K lẻ.",
    "a": [
     "Hoà phiếu, khó quyết định",
     "Chắc chắn đoán Đạt",
     "Chắc chắn đoán Chưa đạt",
     "KNN báo lỗi không chạy"
    ],
    "h": "193930ea36f0d6"
   },
   {
    "k": "mc",
    "id": "bai11-q19",
    "q": "Thêm một cột ngẫu nhiên vô nghĩa vào KNN. Điều gì dễ xảy ra?",
    "giai": "KNN dùng mọi cột để đo khoảng cách.",
    "a": [
     "Khoảng cách bị nhiễu, đoán kém hơn",
     "Đoán chính xác hơn hẳn trước",
     "Không ảnh hưởng gì tới kết quả",
     "KNN tự động bỏ qua cột đó"
    ],
    "h": "5f9225e19a2f"
   },
   {
    "k": "ma",
    "id": "bai11-q20",
    "q": "Những bước nào có trong thuật toán KNN? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đo → chọn K → bỏ phiếu.",
    "a": [
     "Đo khoảng cách tới các điểm đã biết",
     "Bỏ phiếu theo đa số",
     "Tính hệ số tương quan",
     "Xoá các điểm xa nhất"
    ],
    "h": "10cf0a2ae979b2"
   },
   {
    "k": "ma",
    "id": "bai11-q21",
    "q": "Những phát biểu nào đúng về K trong KNN? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "K là tham số chọn bằng dữ liệu.",
    "a": [
     "K là số láng giềng được hỏi",
     "K do người dùng chọn",
     "K luôn phải bằng 1",
     "K càng lớn càng chính xác"
    ],
    "h": "1f12cc47167eef"
   },
   {
    "k": "ma",
    "id": "bai11-q22",
    "q": "Những việc nào đúng khi đưa về 0 – 1 cho KNN? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Fit trên train, transform mọi dữ liệu.",
    "a": [
     "Lấy min, max từ tập huấn luyện",
     "Đổi cả tập kiểm tra bằng min, max đó",
     "Lấy min, max từ cả bảng",
     "Chỉ đổi tập huấn luyện"
    ],
    "h": "19c067e0daea1b"
   },
   {
    "k": "ma",
    "id": "bai11-q23",
    "q": "KNN với K = 1 có những đặc điểm nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "K = 1 bám từng điểm.",
    "a": [
     "Đúng 100% trên tập huấn luyện",
     "Dễ học vẹt",
     "Luôn tốt nhất trên tập kiểm tra",
     "Ranh giới rất mượt"
    ],
    "h": "15c029d7d20e14"
   },
   {
    "k": "sx",
    "id": "bai11-q24",
    "q": "Sắp xếp các bước dùng KNN trong scikit-learn.",
    "giai": "Chia → scaler → fit → predict → chấm.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Fit MinMaxScaler trên tập huấn luyện",
     "Fit KNeighborsClassifier",
     "Predict tập kiểm tra",
     "Tính accuracy_score"
    ],
    "h": "7c41d9e4824b0"
   },
   {
    "k": "sx",
    "id": "bai11-q25",
    "q": "Sắp xếp các bước chọn K.",
    "giai": "Thử → học → đo → giữ.",
    "a": [
     "Chọn danh sách K để thử",
     "Huấn luyện KNN với từng K",
     "Đo độ chính xác trên dữ liệu chưa thấy",
     "Giữ K cho kết quả tốt nhất"
    ],
    "h": "1aeb671f469ffc"
   },
   {
    "k": "dd",
    "id": "bai11-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "K láng giềng, bỏ phiếu.",
    "mau": "KNN dự đoán bằng cách hỏi {0} láng giềng gần nhất rồi {1}.",
    "o": [
     [
      "K",
      "tất cả",
      "một nửa",
      "hai"
     ],
     [
      "bỏ phiếu đa số",
      "lấy trung bình cộng",
      "chọn ngẫu nhiên",
      "xoá láng giềng"
     ]
    ],
    "h": "1222a6e9914b02"
   },
   {
    "k": "dd",
    "id": "bai11-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Chênh 22,2 điểm.",
    "mau": "KNN K = 5 chưa đưa về cùng thang đo đúng {0}; đã đưa đúng {1}.",
    "o": [
     [
      "72,2%",
      "94,4%",
      "54,2%",
      "95,8%"
     ],
     [
      "94,4%",
      "72,2%",
      "54,2%",
      "100,0%"
     ]
    ],
    "h": "1cf59a7733740f"
   },
   {
    "k": "dd",
    "id": "bai11-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "n_neighbors = K; MinMaxScaler đưa về 0 – 1.",
    "mau": "Tham số n_neighbors là {0}; lớp dùng để đưa về 0 – 1 là {1}.",
    "o": [
     [
      "K",
      "nhãn",
      "ngưỡng",
      "độ dốc"
     ],
     [
      "MinMaxScaler",
      "KNeighborsClassifier",
      "train_test_split",
      "accuracy_score"
     ]
    ],
    "h": "14fc4048ce35e2"
   },
   {
    "k": "dd",
    "id": "bai11-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "K lẻ không hoà phiếu với hai nhãn.",
    "mau": "Với hai nhãn nên chọn K {0} để tránh {1}.",
    "o": [
     [
      "lẻ",
      "chẵn",
      "bằng 0",
      "âm"
     ],
     [
      "hoà phiếu",
      "học vẹt",
      "rò rỉ",
      "thiếu dữ liệu"
     ]
    ],
    "h": "11aafaf2b98781"
   },
   {
    "k": "ds",
    "id": "bai11-q30",
    "q": "KNN tìm ra một công thức trong lúc huấn luyện.",
    "giai": "KNN chỉ nhớ dữ liệu; tính khoảng cách khi dự đoán.",
    "h": "1e4ce5e829ec15"
   },
   {
    "k": "ds",
    "id": "bai11-q31",
    "q": "Đưa về cùng thang đo có thể thay đổi láng giềng gần nhất của một điểm.",
    "giai": "Bài 5 và chặng 3: láng giềng đổi khi hết bị cột lớn lấn át.",
    "h": "c3c46a4ce574"
   },
   {
    "k": "ds",
    "id": "bai11-q32",
    "q": "K càng lớn thì KNN càng chính xác trên dữ liệu mới.",
    "giai": "K quá lớn làm ranh giới quá mượt — chưa khớp.",
    "h": "19d3baec28a87c"
   },
   {
    "k": "ds",
    "id": "bai11-q33",
    "q": "KNN có thể dùng cho bài toán có nhiều hơn hai nhãn.",
    "giai": "Bỏ phiếu chọn nhãn nhiều phiếu nhất.",
    "h": "1d8342c1328476"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
