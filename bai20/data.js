window.BAI = {
 "bai": 20,
 "ma": "bai20",
 "nhan": "Bài 20",
 "tieu_de": "Tổ hợp model và Random Forest",
 "phan": "Module 10 · Trees and Forests",
 "cau_hoi": "Nhiều model “bình thường” hợp lại có thành một model giỏi không?",
 "gioi_thieu": [
  "Mỗi model con đã học đều có lúc sai. Nếu ta cho <b>nhiều model</b> cùng bỏ phiếu thì sao? Đó là ý tưởng của <b>tổ hợp model</b> (ensemble), và Random Forest — rừng gồm nhiều cây quyết định — là ví dụ nổi tiếng nhất.",
  "Năm chặng: trí tuệ đám đông, rừng ngẫu nhiên, rừng trên bảng của lớp, khi rừng không thắng, và rừng trong scikit-learn. Bảng khối 10 là bảng mô phỏng; bài dùng 4 cột.",
  "Con dùng lại: cây quyết định và học vẹt (Bài 18), bỏ phiếu (Bài 13), tương quan (Bài 10)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai20",
 "muc_tieu": [
  "Giải thích được vì sao trung bình / bỏ phiếu của nhiều dự đoán thường tốt hơn phần lớn từng dự đoán.",
  "Mô tả được Random Forest: nhiều cây, mỗi cây học một tập con ngẫu nhiên, rồi bỏ phiếu.",
  "Đọc được kết quả rừng so với từng cây, và thấy rừng ổn định hơn.",
  "Nhận ra rừng không phải lúc nào cũng thắng cây tốt nhất.",
  "Dùng RandomForestClassifier và đọc mức quan trọng của từng cột."
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
   "ten": "Trí tuệ đám đông",
   "ten_ngan": "Đám đông",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao trung bình của nhiều dự đoán thường tốt hơn phần lớn từng dự đoán.",
   "khoi_dong": "Ba mươi bạn đoán số kẹo trong lọ. Nên tin bạn giỏi nhất, hay tin trung bình cả lớp?",
   "khoi": [
    {
     "t": "anh",
     "cap": "30 bạn đoán số kẹo (số liệu minh hoạ)",
     "alt": "30 bạn đoán số kẹo (số liệu minh hoạ)",
     "src": "img/keo-trong-lo-minh-hoa.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc hình",
     "de": null,
     "cot": [
      "",
      "Giá trị"
     ],
     "dong": [
      [
       "Số kẹo thật",
       "250"
      ],
      [
       "Các bạn đoán",
       "từ 131 tới 535"
      ],
      [
       "Trung bình cả lớp",
       "<b>266</b>"
      ],
      [
       "Số bạn đoán xa hơn trung bình",
       "<b>25 / 30</b>"
      ]
     ],
     "ket_luan": "Sai lệch của từng bạn lệch theo nhiều hướng khác nhau nên phần lớn triệt tiêu nhau khi lấy trung bình.",
     "nhan_manh": [
      3
     ]
    },
    {
     "t": "tra_bang",
     "tieu_de": "càng nhiều bạn góp, trung bình càng gần",
     "huong_dan": "Kéo để đổi số bạn góp vào con số trung bình. Con số lớn là <b>trung bình sai lệch</b> so với 250 kẹo thật (thử 200 cách chọn bạn khác nhau).",
     "nhan_truot": "Số bạn góp vào trung bình",
     "khoa": [
      "1",
      "2",
      "3",
      "5",
      "8",
      "12",
      "20",
      "30"
     ],
     "so": [
      76.5,
      54.2,
      42.5,
      32.3,
      27.9,
      22.7,
      17.1,
      16.5
     ],
     "nhan_so": "Sai lệch trung bình",
     "don_vi": " kẹo",
     "so_le": 1,
     "kieu": "cot",
     "ymin": 0,
     "truc_x": "Số bạn",
     "truc_y": "Sai lệch (kẹo)",
     "ghi": [
      "Một bạn đoán một mình: lệch trung bình 76.5 kẹo.",
      "2 bạn: lệch 54.2 kẹo.",
      "3 bạn: lệch 42.5 kẹo.",
      "5 bạn: lệch 32.3 kẹo.",
      "8 bạn: lệch 27.9 kẹo.",
      "12 bạn: lệch 22.7 kẹo.",
      "20 bạn: lệch 17.1 kẹo.",
      "30 bạn: lệch 16.5 kẹo."
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Tổ hợp model (ensemble)",
     "html": "Kết hợp nhiều model: phân loại thì <b>bỏ phiếu</b>, hồi quy thì <b>lấy trung bình</b>. Hiệu quả nhất khi các model <b>sai theo những cách khác nhau</b>.",
     "ky_hieu": null
    },
    {
     "t": "anh",
     "cap": "Nhiều model học rồi kết hợp dự đoán",
     "alt": "Nhiều model học rồi kết hợp dự đoán",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216112827581506/ensemble_learning.webp",
     "du_phong": "img/minh-hoa-hoc-to-hop-nhieu-model.png",
     "nguon": {
      "ten": "GeeksforGeeks — A comprehensive guide to ensemble learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/a-comprehensive-guide-to-ensemble-learning/"
     },
     "chu_giai": [
      [
       "Training data",
       "Dữ liệu huấn luyện"
      ],
      [
       "Base learners",
       "Các model con"
      ],
      [
       "Individual predictions",
       "Dự đoán riêng"
      ],
      [
       "Ensemble prediction",
       "Dự đoán của cả nhóm"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ trung bình luôn tốt hơn mọi cá nhân — chỉ tốt hơn phần lớn.",
      "Ghép nhiều model giống hệt nhau — chúng sai cùng chỗ nên không giúp gì."
     ]
    },
    {
     "t": "video",
     "yt": "J4Wdy0Wc_xQ",
     "ten": "StatQuest — Random Forests Part 1",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Nhiều dự đoán sai theo nhiều hướng → gộp lại thường sát hơn phần lớn từng dự đoán."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "scikit-learn — Ensembles: random forests",
       "url": "https://scikit-learn.org/stable/modules/ensemble.html#forest",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "Google — Decision Forests: Random forests",
       "url": "https://developers.google.com/machine-learning/decision-forests/random-forests",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "A Comprehensive Guide to Ensemble Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/a-comprehensive-guide-to-ensemble-learning/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai20-q1",
     "q": "Trong hình đoán kẹo, bao nhiêu bạn đoán xa số thật hơn trung bình cả lớp?",
     "giai": "Trung bình 266, số thật 250.",
     "goi_y": "Đọc dòng cuối của bảng ví dụ.",
     "a": [
      "25 / 30",
      "0 / 30",
      "15 / 30",
      "30 / 30"
     ],
     "h": "13d63b31ffa345"
    },
    {
     "k": "ds",
     "id": "bai20-q2",
     "q": "Tổ hợp nhiều model giống hệt nhau giúp tăng độ chính xác rất nhiều.",
     "giai": "Chúng sai cùng chỗ — bỏ phiếu không sửa được.",
     "goi_y": "Mười bạn chép cùng một bài thì trung bình có khác bài gốc không?",
     "h": "e0f9c45611701"
    }
   ]
  },
  {
   "ten": "Rừng ngẫu nhiên",
   "ten_ngan": "Random Forest",
   "phut": 5,
   "muc_tieu": "mô tả được Random Forest: nhiều cây, mỗi cây học một tập con ngẫu nhiên, rồi bỏ phiếu.",
   "khoi_dong": "Nếu 100 cây học cùng một dữ liệu thì cây nào cũng giống hệt nhau. Làm sao cho chúng khác nhau?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Random Forest",
     "html": "Tạo nhiều cây quyết định; mỗi cây học trên <b>một tập con dữ liệu rút ngẫu nhiên</b> (có lặp lại) và mỗi lần chia chỉ được xét <b>vài cột ngẫu nhiên</b>. Dự đoán: các cây <b>bỏ phiếu</b>.",
     "ky_hieu": "Rút ngẫu nhiên rồi bỏ phiếu gọi là <b>bagging</b>."
    },
    {
     "t": "anh",
     "cap": "Mỗi cây một tập con ngẫu nhiên, rồi bỏ phiếu",
     "alt": "Mỗi cây một tập con ngẫu nhiên, rồi bỏ phiếu",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250521100554969405/XG-Boost.webp",
     "du_phong": "img/minh-hoa-nhieu-cay-tren-cac-tap-con-ngau-nhien.png",
     "nguon": {
      "ten": "GeeksforGeeks — Xgboost",
      "url": "https://www.geeksforgeeks.org/machine-learning/xgboost/"
     },
     "chu_giai": [
      [
       "Instance",
       "Mẫu cần dự đoán"
      ],
      [
       "Random Subset",
       "Tập con ngẫu nhiên"
      ],
      [
       "Tree 1 … Tree n",
       "Cây 1 … cây n"
      ],
      [
       "Final Result",
       "Kết quả cuối (đa số)"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Một cây và cả rừng",
     "alt": "Một cây và cả rừng",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216121929207068/random_forest.webp",
     "du_phong": "img/minh-hoa-mot-cay-so-voi-ca-rung.png",
     "nguon": {
      "ten": "GeeksforGeeks — Random forest algorithm in machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/random-forest-algorithm-in-machine-learning/"
     },
     "chu_giai": [
      [
       "Single Decision Tree",
       "Một cây quyết định"
      ],
      [
       "Random Forest",
       "Rừng ngẫu nhiên — nhiều cây"
      ],
      [
       "Prediction from a single decision path",
       "Mỗi cây một đường dự đoán"
      ]
     ]
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "11 cây bỏ phiếu cho một bạn mới",
     "huong_dan": "Bạn mới: học 3.3 giờ, mạng 180 phút, ngủ 7 giờ, nộp trễ 1 lần. Bấm “Bước tiếp” để xem từng cây bỏ phiếu.",
     "nhan_chon": "Bạn mới",
     "cot": [
      "#",
      "Cây",
      "Phiếu",
      "Kiểm phiếu"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "11 cây đầu của rừng",
       "dong": [
        [
         "1",
         "Cây 1",
         "Đạt",
         "1 Đạt – 0 Chưa đạt"
        ],
        [
         "2",
         "Cây 2",
         "Chưa đạt",
         "1 Đạt – 1 Chưa đạt"
        ],
        [
         "3",
         "Cây 3",
         "Chưa đạt",
         "1 Đạt – 2 Chưa đạt"
        ],
        [
         "4",
         "Cây 4",
         "Đạt",
         "2 Đạt – 2 Chưa đạt"
        ],
        [
         "5",
         "Cây 5",
         "Chưa đạt",
         "2 Đạt – 3 Chưa đạt"
        ],
        [
         "6",
         "Cây 6",
         "Đạt",
         "3 Đạt – 3 Chưa đạt"
        ],
        [
         "7",
         "Cây 7",
         "Đạt",
         "4 Đạt – 3 Chưa đạt"
        ],
        [
         "8",
         "Cây 8",
         "Đạt",
         "5 Đạt – 3 Chưa đạt"
        ],
        [
         "9",
         "Cây 9",
         "Đạt",
         "6 Đạt – 3 Chưa đạt"
        ],
        [
         "10",
         "Cây 10",
         "Đạt",
         "7 Đạt – 3 Chưa đạt"
        ],
        [
         "11",
         "Cây 11",
         "Đạt",
         "8 Đạt – 3 Chưa đạt"
        ],
        [
         "—",
         "Cả rừng (11 cây)",
         "<b>Đạt</b>",
         "đa số thắng"
        ]
       ]
      }
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ “ngẫu nhiên” là rừng đoán bừa — mỗi cây vẫn học thật, chỉ trên dữ liệu khác nhau.",
      "Nhầm Random Forest với một cây rất sâu."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Random Forest = nhiều cây, mỗi cây một tập con ngẫu nhiên + vài cột ngẫu nhiên → bỏ phiếu."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai20-q3",
     "q": "Theo phần Tự thử, 11 cây bỏ phiếu cho bạn mới thế nào?",
     "giai": "Rừng đoán theo đa số.",
     "goi_y": "Bấm tới dòng cuối cùng rồi đọc cột kiểm phiếu.",
     "a": [
      "8 Đạt – 3 Chưa đạt",
      "11 Đạt – 0 Chưa đạt",
      "3 Đạt – 8 Chưa đạt",
      "6 Đạt – 5 Chưa đạt"
     ],
     "h": "17bba541c5b635"
    },
    {
     "k": "ma",
     "id": "bai20-q4",
     "q": "Hai điều nào làm các cây trong rừng khác nhau? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Hai nguồn ngẫu nhiên.",
     "goi_y": "Đọc lại định nghĩa Random Forest.",
     "a": [
      "Mỗi cây học một tập con ngẫu nhiên",
      "Mỗi lần chia chỉ xét vài cột ngẫu nhiên",
      "Mỗi cây dùng một nhãn khác nhau",
      "Mỗi cây có độ sâu bằng 0"
     ],
     "h": "4d2c19cacdf5d"
    }
   ]
  },
  {
   "ten": "Rừng trên bảng của lớp",
   "ten_ngan": "Bảng lớp",
   "phut": 5,
   "muc_tieu": "đọc được kết quả rừng so với từng cây, và thấy rừng ổn định hơn.",
   "khoi_dong": "Rừng 100 cây. Cây giỏi nhất và cây dở nhất khác nhau bao nhiêu?",
   "khoi": [
    {
     "t": "anh",
     "cap": "100 cây lẻ và cả rừng trên 72 bạn kiểm tra",
     "alt": "100 cây lẻ và cả rừng trên 72 bạn kiểm tra",
     "src": "img/tram-cay-le-va-ca-rung.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc hình",
     "de": null,
     "cot": [
      "",
      "Độ chính xác"
     ],
     "dong": [
      [
       "Cây lẻ dở nhất · giỏi nhất",
       "66.7% · 95.8%"
      ],
      [
       "Trung bình một cây",
       "86.8%"
      ],
      [
       "Cả rừng",
       "<b>93.1%</b>"
      ]
     ],
     "ket_luan": "Rừng hơn 90 / 100 cây của chính nó, không hơn cây giỏi nhất — nhưng ta không biết trước cây nào sẽ giỏi nhất.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "demo_truot",
     "tieu_de": "thử số cây trong rừng",
     "huong_dan": "Kéo để đổi số cây. Mỗi số cây được huấn luyện 20 lần với cách rút ngẫu nhiên khác nhau. So khoảng dao động và độ chính xác trung bình.",
     "dieu_kien": "Rừng có <b>{x}</b> cây",
     "moc": [
      {
       "x": 1,
       "n": "77.8 – 97.2",
       "p": 86.8
      },
      {
       "x": 3,
       "n": "80.6 – 94.4",
       "p": 89.0
      },
      {
       "x": 5,
       "n": "86.1 – 95.8",
       "p": 91.2
      },
      {
       "x": 11,
       "n": "88.9 – 97.2",
       "p": 92.6
      },
      {
       "x": 25,
       "n": "88.9 – 95.8",
       "p": 93.1
      },
      {
       "x": 51,
       "n": "91.7 – 97.2",
       "p": 93.8
      },
      {
       "x": 101,
       "n": "91.7 – 95.8",
       "p": 93.8
      }
     ],
     "nhan_n": "Dao động qua 20 lần (%)",
     "nhan_p": "Trung bình",
     "so_le_x": 0,
     "bat_dau": 3
    },
    {
     "t": "anh",
     "cap": "Càng nhiều cây, kết quả càng ổn định",
     "alt": "Càng nhiều cây, kết quả càng ổn định",
     "src": "img/rung-theo-so-cay.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ rừng luôn giỏi hơn mọi cây của nó.",
      "Nghĩ càng nhiều cây độ chính xác càng tăng mãi — nó chững lại, chỉ ổn định hơn."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Rừng không giỏi nhất ở mọi lần, nhưng ổn định: ít phụ thuộc may rủi của một cây."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai20-q5",
     "q": "Rừng 100 cây đúng bao nhiêu trên tập kiểm tra?",
     "giai": "Trung bình một cây chỉ 86.8%.",
     "goi_y": "Đường đậm trên biểu đồ.",
     "a": [
      "93.1%",
      "86.8%",
      "95.8%",
      "66.7%"
     ],
     "h": "1401aadab0a2c3"
    },
    {
     "k": "dd",
     "id": "bai20-q6",
     "q": "Chọn số đúng cho mỗi chỗ trống.",
     "giai": "Nhiều cây → ổn định hơn.",
     "goi_y": "Kéo thanh trượt tới 1 cây rồi tới 101 cây.",
     "mau": "Rừng 1 cây dao động khoảng {0} điểm; rừng 101 cây dao động khoảng {1} điểm.",
     "o": [
      [
       "19.4",
       "4.1",
       "0.0",
       "50.0"
      ],
      [
       "4.1",
       "19.4",
       "0.0",
       "50.0"
      ]
     ],
     "h": "dd8936ed8b8d"
    }
   ]
  },
  {
   "ten": "Khi rừng không thắng",
   "ten_ngan": "Không luôn thắng",
   "phut": 3,
   "muc_tieu": "nhận ra rừng không phải lúc nào cũng thắng cây tốt nhất.",
   "khoi_dong": "Chỉ dùng 2 cột (giờ học, phút mạng) thì rừng còn thắng không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Cây không giới hạn, cây sâu 2 và rừng — với 2 cột và 4 cột",
     "alt": "Cây không giới hạn, cây sâu 2 và rừng — với 2 cột và 4 cột",
     "src": "img/hai-cot-va-bon-cot.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "so hai bảng cột",
     "de": null,
     "cot": [
      "Model",
      "2 cột",
      "4 cột"
     ],
     "dong": [
      [
       "Cây không giới hạn",
       "87.5%",
       "87.5%"
      ],
      [
       "Cây sâu 2",
       "91.7%",
       "91.7%"
      ],
      [
       "Rừng 100 cây",
       "90.3%",
       "<b>93.1%</b>"
      ]
     ],
     "ket_luan": "Với 2 cột, rừng (90.3%) thua cây sâu 2 (91.7%). Có thêm cột, các cây khác nhau hơn và rừng mới phát huy.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Nói cho đúng",
     "html": "Rừng <b>thường</b> tốt và <b>ổn định hơn</b> một cây. Nó không phải phép màu: dữ liệu ít cột hoặc một câu hỏi đã đủ tốt thì một cây nông có thể ngang hoặc hơn."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nói “rừng luôn thắng cây”.",
      "Chỉ so trên một lần chia dữ liệu rồi kết luận chắc chắn."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Rừng mạnh khi các cây đủ khác nhau; không phải lúc nào cũng thắng cây tốt nhất."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai20-q7",
     "q": "Với 2 cột, model nào đúng nhất trong bảng?",
     "giai": "91.7% so với rừng 90.3%.",
     "goi_y": "So cột “2 cột”.",
     "a": [
      "Cây sâu 2",
      "Rừng 100 cây",
      "Cây không giới hạn",
      "Ba model bằng nhau"
     ],
     "h": "eaddbf4baadef"
    },
    {
     "k": "ds",
     "id": "bai20-q8",
     "q": "Random Forest luôn chính xác hơn mọi cây quyết định.",
     "giai": "Với 2 cột, cây sâu 2 hơn rừng.",
     "goi_y": "Nhìn lại bảng hai cột.",
     "h": "1054dc2184c942"
    }
   ]
  },
  {
   "ten": "Rừng trong scikit-learn",
   "ten_ngan": "scikit-learn",
   "phut": 5,
   "muc_tieu": "dùng RandomForestClassifier và đọc mức quan trọng của từng cột.",
   "khoi_dong": "Rừng có 100 cây — ta còn đọc được “vì sao” như một cây không?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Việc",
      "Lệnh"
     ],
     "dong": [
      [
       "Huấn luyện",
       "<code>rung = RandomForestClassifier(n_estimators=100, random_state=42)</code><br><code>rung.fit(X_train, y_train)</code>"
      ],
      [
       "Mức quan trọng",
       "<code>rung.feature_importances_</code>"
      ],
      [
       "Dự đoán, đánh giá",
       "<code>rung.predict(X_test)</code> · <code>accuracy_score</code>"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Mức quan trọng trong rừng và tương quan với điểm (Bài 10)",
     "alt": "Mức quan trọng trong rừng và tương quan với điểm (Bài 10)",
     "src": "img/muc-quan-trong-cua-cot.png"
    },
    {
     "t": "p",
     "html": "Không đọc được 100 cây, nhưng rừng cho biết mỗi cột giúp giảm độ lẫn lộn bao nhiêu — <b>mức quan trọng</b>. Thứ tự ở đây trùng thứ tự tương quan của Bài 10: giờ học > phút mạng > giờ ngủ > nộp trễ."
    },
    {
     "t": "anh",
     "cap": "Boosting: model sau học sửa lỗi của model trước (chỉ cần biết tên)",
     "alt": "Boosting: model sau học sửa lỗi của model trước (chỉ cần biết tên)",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216112827912821/boosting.webp",
     "du_phong": "img/minh-hoa-cach-boosting-hoat-dong.png",
     "nguon": {
      "ten": "GeeksforGeeks — A comprehensive guide to ensemble learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/a-comprehensive-guide-to-ensemble-learning/"
     },
     "chu_giai": [
      [
       "Base Models",
       "Các model con"
      ],
      [
       "Prediction",
       "Dự đoán"
      ],
      [
       "The training is modified based on the predictions",
       "Lần học sau dựa trên chỗ sai của lần trước"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Ba cách tổ hợp — chỉ cần biết tên",
     "html": "<b>Bagging</b> (Random Forest): học song song, bỏ phiếu. <b>Boosting</b> (AdaBoost, Gradient Boosting, XGBoost): học nối tiếp, sửa lỗi nhau. <b>Stacking</b>: một model học cách gộp các model khác."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ mức quan trọng là tương quan — nó đo cột giúp cây chia tốt tới đâu.",
      "Quên random_state nên mỗi lần chạy ra số hơi khác."
     ]
    },
    {
     "t": "tom_tat",
     "html": "RandomForestClassifier(n_estimators=...) → fit → feature_importances_ → predict."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai20-q9",
     "q": "Cột nào quan trọng nhất trong rừng của lớp?",
     "giai": "Mức quan trọng 0.68.",
     "goi_y": "Thanh dài nhất bên trái.",
     "a": [
      "Giờ tự học",
      "Phút mạng xã hội",
      "Giờ ngủ",
      "Số lần nộp trễ"
     ],
     "h": "59c5f3a7c485e"
    },
    {
     "k": "dd",
     "id": "bai20-q10",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Song song / nối tiếp.",
     "goi_y": "Cách nào học song song, cách nào sửa lỗi nối tiếp?",
     "mau": "Random Forest thuộc kiểu {0}; AdaBoost thuộc kiểu {1}.",
     "o": [
      [
       "bagging",
       "boosting",
       "stacking",
       "kernel"
      ],
      [
       "boosting",
       "bagging",
       "stacking",
       "làm mịn"
      ]
     ],
     "h": "157db80307b84f"
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
    "id": "bai20-q11",
    "q": "Nhìn hình. Đường nét đứt xanh trong hình đoán kẹo biểu diễn gì?",
    "giai": "Trung bình 266.",
    "img": {
     "src": "img/keo-trong-lo-minh-hoa.png"
    },
    "a": [
     "Trung bình cả lớp",
     "Số kẹo thật",
     "Bạn đoán giỏi nhất",
     "Bạn đoán lớn nhất"
    ],
    "h": "1d8aa12cffc554"
   },
   {
    "k": "mc",
    "id": "bai20-q12",
    "q": "Nhìn hình. Cây lẻ dở nhất đúng khoảng bao nhiêu?",
    "giai": "Cột ngoài cùng bên trái.",
    "img": {
     "src": "img/tram-cay-le-va-ca-rung.png"
    },
    "a": [
     "66.7%",
     "95.8%",
     "93.1%",
     "86.8%"
    ],
    "h": "89d5a47cbe0a4"
   },
   {
    "k": "mc",
    "id": "bai20-q13",
    "q": "Nhìn hình. Khi tăng số cây, vùng tô nhạt thay đổi thế nào?",
    "giai": "Kết quả ổn định hơn.",
    "img": {
     "src": "img/rung-theo-so-cay.png"
    },
    "a": [
     "Hẹp dần lại",
     "Rộng dần ra",
     "Không thay đổi",
     "Biến mất ngay từ 3 cây"
    ],
    "h": "498080f9747bc"
   },
   {
    "k": "mc",
    "id": "bai20-q14",
    "q": "Nhìn hình. Với 4 cột, model nào cao nhất?",
    "giai": "93.1%.",
    "img": {
     "src": "img/hai-cot-va-bon-cot.png"
    },
    "a": [
     "Rừng 100 cây",
     "Cây sâu 2",
     "Cây không giới hạn",
     "Ba model bằng nhau"
    ],
    "h": "83a98ccbabacc"
   },
   {
    "k": "mc",
    "id": "bai20-q15",
    "q": "Nhìn hình. Mỗi cây trong rừng nhận dữ liệu gì?",
    "giai": "Bagging.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250521100554969405/XG-Boost.webp",
     "du_phong": "img/minh-hoa-nhieu-cay-tren-cac-tap-con-ngau-nhien.png",
     "nguon": {
      "ten": "GeeksforGeeks — Xgboost",
      "url": "https://www.geeksforgeeks.org/machine-learning/xgboost/"
     }
    },
    "a": [
     "Một tập con rút ngẫu nhiên",
     "Toàn bộ dữ liệu như nhau",
     "Chỉ các điểm bị đoán sai",
     "Chỉ một dòng dữ liệu"
    ],
    "h": "2bdac0508ebe4"
   },
   {
    "k": "mc",
    "id": "bai20-q16",
    "q": "Một đội bóng hỏi ý kiến 11 huấn luyện viên có cách nhìn khác nhau rồi theo đa số. Đó là ý tưởng của gì?",
    "giai": "Ensemble / bagging.",
    "a": [
     "Tổ hợp model bỏ phiếu",
     "Cây quyết định một tầng",
     "Hồi quy tuyến tính",
     "Đưa về cùng thang đo"
    ],
    "h": "70d4b4d3d22c8"
   },
   {
    "k": "mc",
    "id": "bai20-q17",
    "q": "Rừng dự đoán giá nhà (con số) gộp các cây thế nào?",
    "giai": "Hồi quy → trung bình.",
    "a": [
     "Lấy trung bình dự đoán các cây",
     "Chọn cây sâu nhất",
     "Bỏ phiếu theo đa số",
     "Lấy dự đoán lớn nhất"
    ],
    "h": "fc3a2a7118ab4"
   },
   {
    "k": "mc",
    "id": "bai20-q18",
    "q": "Vì sao mỗi cây trong rừng chỉ xét vài cột ngẫu nhiên khi chia?",
    "giai": "Cây khác nhau → sai khác nhau → bỏ phiếu hiệu quả.",
    "a": [
     "Để các cây khác nhau hơn",
     "Để cây chạy chậm hơn",
     "Để bỏ hết cột yếu",
     "Để cây sâu vô hạn"
    ],
    "h": "e98ec6d1789c9"
   },
   {
    "k": "mc",
    "id": "bai20-q19",
    "q": "AdaBoost và Gradient Boosting thuộc cách tổ hợp nào?",
    "giai": "Học nối tiếp, sửa lỗi.",
    "a": [
     "Boosting",
     "Bagging",
     "Stacking",
     "Kernel"
    ],
    "h": "88f3003894c49"
   },
   {
    "k": "ma",
    "id": "bai20-q20",
    "q": "Những phát biểu nào đúng về Random Forest? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Nhiều cây + bỏ phiếu.",
    "a": [
     "Gồm nhiều cây quyết định",
     "Các cây bỏ phiếu",
     "Chỉ có đúng một cây",
     "Không cần dữ liệu huấn luyện"
    ],
    "h": "c103005fa6b10"
   },
   {
    "k": "ma",
    "id": "bai20-q21",
    "q": "Hai điều nào đúng về rừng trên bảng lớp (4 cột)? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ổn định, thường tốt.",
    "a": [
     "Thắng phần lớn cây của nó",
     "Ổn định hơn một cây",
     "Thắng mọi cây của nó",
     "Kém hơn model lười"
    ],
    "h": "109ec87c58c2a2"
   },
   {
    "k": "ma",
    "id": "bai20-q22",
    "q": "Tổ hợp model hiệu quả nhất khi nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đa dạng + đủ tốt.",
    "a": [
     "Các model sai theo cách khác nhau",
     "Mỗi model tự nó khá tốt",
     "Các model giống hệt nhau",
     "Chỉ có một model"
    ],
    "h": "1e62780d94b3d0"
   },
   {
    "k": "ma",
    "id": "bai20-q23",
    "q": "Lệnh nào dùng với rừng trong scikit-learn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Rừng + mức quan trọng.",
    "a": [
     "RandomForestClassifier",
     "feature_importances_",
     "KNeighborsClassifier",
     "predict_proba_ngau_nhien"
    ],
    "h": "162f29b3e55018"
   },
   {
    "k": "sx",
    "id": "bai20-q24",
    "q": "Sắp xếp các bước Random Forest đoán một mẫu mới.",
    "giai": "Rút → học → đoán → bỏ phiếu.",
    "a": [
     "Rút nhiều tập con ngẫu nhiên",
     "Mỗi tập con huấn luyện một cây",
     "Mỗi cây dự đoán mẫu mới",
     "Bỏ phiếu lấy đa số"
    ],
    "h": "1f7836e694a96a"
   },
   {
    "k": "sx",
    "id": "bai20-q25",
    "q": "Sắp xếp các bước dùng rừng trong scikit-learn.",
    "giai": "Chia → tạo → fit → đo → đọc.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Tạo RandomForestClassifier",
     "Fit trên tập huấn luyện",
     "Đo trên tập kiểm tra",
     "Đọc feature_importances_"
    ],
    "h": "beee6d00d1a61"
   },
   {
    "k": "dd",
    "id": "bai20-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Nhãn → phiếu; số → trung bình.",
    "mau": "Phân loại: rừng {0}; hồi quy: rừng {1}.",
    "o": [
     [
      "bỏ phiếu",
      "lấy trung bình",
      "chọn cây đầu",
      "nhân xác suất"
     ],
     [
      "lấy trung bình",
      "bỏ phiếu",
      "chọn cây sâu nhất",
      "đếm lá"
     ]
    ],
    "h": "1d64871b971d53"
   },
   {
    "k": "dd",
    "id": "bai20-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc biểu đồ 100 cây.",
    "mau": "Rừng đúng {0}; trung bình một cây đúng {1}.",
    "o": [
     [
      "93.1%",
      "86.8%",
      "66.7%",
      "100%"
     ],
     [
      "86.8%",
      "93.1%",
      "95.8%",
      "50.0%"
     ]
    ],
    "h": "1a28cc6b56d78a"
   },
   {
    "k": "dd",
    "id": "bai20-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "n_estimators, feature_importances_.",
    "mau": "Tham số {0} là số cây; thuộc tính {1} cho mức quan trọng.",
    "o": [
     [
      "n_estimators",
      "max_depth",
      "n_neighbors",
      "alpha"
     ],
     [
      "feature_importances_",
      "coef_",
      "support_",
      "classes_"
     ]
    ],
    "h": "9ffc9f23b8f46"
   },
   {
    "k": "dd",
    "id": "bai20-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Rừng không luôn thắng.",
    "mau": "Với 2 cột, rừng đúng {0}, thua cây sâu 2 ({1}).",
    "o": [
     [
      "90.3%",
      "91.7%",
      "93.1%",
      "100%"
     ],
     [
      "91.7%",
      "90.3%",
      "87.5%",
      "50.0%"
     ]
    ],
    "h": "23aca041b5f0e"
   },
   {
    "k": "ds",
    "id": "bai20-q30",
    "q": "Mức quan trọng trong rừng của lớp xếp cùng thứ tự với tương quan ở Bài 10.",
    "giai": "Giờ học > phút mạng > giờ ngủ > nộp trễ.",
    "h": "77e31d27030ff"
   },
   {
    "k": "ds",
    "id": "bai20-q31",
    "q": "Tăng số cây từ 100 lên 1 000 chắc chắn làm độ chính xác tăng mạnh.",
    "giai": "Nó chững lại; chỉ ổn định hơn.",
    "h": "1b1781852c71ab"
   },
   {
    "k": "ds",
    "id": "bai20-q32",
    "q": "Mỗi cây trong Random Forest học trên đúng cùng một dữ liệu.",
    "giai": "Mỗi cây một tập con ngẫu nhiên.",
    "h": "c5cc54aa1e3a1"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
