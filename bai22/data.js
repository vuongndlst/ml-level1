window.BAI = {
 "bai": 22,
 "ma": "bai22",
 "nhan": "Bài 22",
 "tieu_de": "SVM — máy vector hỗ trợ",
 "phan": "Module 11 · More Classifiers",
 "cau_hoi": "Nhiều đường cùng tách được hai nhóm — đường nào an toàn nhất?",
 "gioi_thieu": [
  "Logistic, cây quyết định đều vẽ ra một ranh giới. Nhưng thường có <b>rất nhiều</b> ranh giới cùng tách được hai nhóm. SVM trả lời: chọn đường cách xa cả hai nhóm nhất.",
  "Năm chặng: nhiều đường cùng tách, lề rộng nhất, SVM trên bảng của lớp, khi không kẻ được đường thẳng, và SVM trong scikit-learn. Bảng khối 10 là bảng mô phỏng; phần Tự thử dùng số liệu minh hoạ.",
  "Con dùng lại: khoảng cách và đưa về 0 – 1 (Bài 6, 13), đường thẳng (Bài 15), ranh giới quyết định (Bài 13, 18)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai22",
 "muc_tieu": [
  "Giải thích được vì sao nhiều đường cùng tách được hai nhóm.",
  "Mô tả được “lề” và vì sao SVM chọn đường có lề rộng nhất.",
  "Nhận ra vector hỗ trợ là những điểm quyết định đường của SVM.",
  "Mô tả ý tưởng kernel khi dữ liệu không tách được bằng đường thẳng.",
  "Dùng SVC trong scikit-learn và so với các model đã học."
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
   "ten": "Nhiều đường cùng tách được",
   "ten_ngan": "Nhiều đường",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao nhiều đường cùng tách được hai nhóm.",
   "khoi_dong": "Kẻ một đường tách bạn Đạt và Chưa đạt. Bạn bên cạnh có kẻ giống con không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "168 bạn của tập huấn luyện — chưa có đường nào",
     "alt": "168 bạn của tập huấn luyện — chưa có đường nào",
     "src": "img/hai-nhom-diem-chua-ke-duong-nao.png"
    },
    {
     "t": "anh",
     "cap": "Ba đường lớp nào cũng có bạn nghĩ ra",
     "alt": "Ba đường lớp nào cũng có bạn nghĩ ra",
     "src": "img/ba-duong-hoc-sinh-hay-ke.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "ba đường trên tập huấn luyện",
     "de": null,
     "cot": [
      "Đường",
      "Mô tả",
      "Đúng"
     ],
     "dong": [
      [
       "A",
       "Học > 3.05 giờ → Đạt",
       "88.7%"
      ],
      [
       "B",
       "Học > 3.45 giờ → Đạt",
       "91.1%"
      ],
      [
       "C",
       "Đường xiên theo cả giờ học và phút mạng",
       "90.5%"
      ]
     ],
     "ket_luan": "Ba đường đúng gần bằng nhau — độ chính xác không đủ để chọn.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Hình GfG: rất nhiều đường cùng tách hai nhóm",
     "alt": "Hình GfG: rất nhiều đường cùng tách hai nhóm",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250805115844223142/SVM.webp",
     "du_phong": "img/minh-hoa-nhieu-duong-cung-tach-duoc-hai-nhom.png",
     "nguon": {
      "ten": "GeeksforGeeks — Support vector machine algorithm",
      "url": "https://www.geeksforgeeks.org/machine-learning/support-vector-machine-algorithm/"
     },
     "chu_giai": [
      [
       "Class A / Class B",
       "Nhóm A / nhóm B"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ chỉ có một đường đúng duy nhất.",
      "Chọn đường chỉ vì nó đi sát nhiều điểm."
     ]
    },
    {
     "t": "video",
     "yt": "efR1C6CvhmE",
     "ten": "StatQuest — Support Vector Machines Part 1: Main Ideas",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Thường có vô số đường cùng tách hai nhóm; cần một tiêu chí để chọn."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "scikit-learn — Support Vector Machines",
       "url": "https://scikit-learn.org/stable/modules/svm.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "Support Vector Machine (SVM) Algorithm",
       "url": "https://www.geeksforgeeks.org/machine-learning/support-vector-machine-algorithm/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai22-q1",
     "q": "Trên tập huấn luyện, đường nào trong ba đường đúng nhiều nhất?",
     "giai": "Đường B: 91.1%.",
     "goi_y": "So cột “Đúng” của bảng.",
     "a": [
      "Đường B",
      "Đường A",
      "Đường C",
      "Ba đường bằng hệt nhau"
     ],
     "h": "ef90dd6a8e72c"
    },
    {
     "k": "ds",
     "id": "bai22-q2",
     "q": "Với hai nhóm tách rời nhau, chỉ có đúng một đường tách được.",
     "giai": "Có vô số đường — xoay, dịch một chút vẫn tách được.",
     "goi_y": "Dịch đường sang trái một chút thì sao?",
     "h": "18c7589ad0175e"
    }
   ]
  },
  {
   "ten": "Lề rộng nhất",
   "ten_ngan": "Lề",
   "phut": 5,
   "muc_tieu": "mô tả được “lề” và vì sao SVM chọn đường có lề rộng nhất.",
   "khoi_dong": "Đi trên một con đường giữa hai hàng rào: con muốn đường hẹp hay rộng?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Lề (margin) và vector hỗ trợ",
     "html": "Lề là khoảng cách từ đường ranh giới tới <b>điểm gần nhất</b> của mỗi nhóm. SVM chọn đường có lề <b>rộng nhất</b>. Những điểm nằm sát lề gọi là <b>vector hỗ trợ</b> — chỉ chúng quyết định vị trí của đường.",
     "ky_hieu": "Lề rộng → một điểm mới hơi lệch vẫn được xếp đúng: ranh giới “an toàn” hơn."
    },
    {
     "t": "demo_ke_duong",
     "id": "kd1",
     "tieu_de": "tách táo và cam, làm lề rộng nhất",
     "huong_dan": "Kéo a, b để đường tách táo (đỏ) và cam (vàng). Khi không còn điểm sai phía, ô giữa cho biết lề của con. Cố làm lề to nhất, rồi bấm nút xem đường SVM.",
     "diem": [
      [
       2.4,
       2.25
      ],
      [
       3.29,
       2.29
      ],
      [
       2.25,
       3.11
      ],
      [
       1.79,
       2.13
      ],
      [
       2.28,
       2.25
      ],
      [
       1.66,
       2.31
      ],
      [
       2.04,
       2.67
      ],
      [
       1.45,
       2.08
      ],
      [
       2.72,
       3.24
      ],
      [
       1.52,
       2.69
      ],
      [
       1.76,
       2.01
      ],
      [
       1.81,
       2.21
      ],
      [
       2.65,
       2.72
      ],
      [
       2.23,
       2.24
      ],
      [
       5.4,
       5.15
      ],
      [
       5.76,
       4.92
      ],
      [
       5.4,
       5.15
      ],
      [
       5.38,
       5.31
      ],
      [
       5.49,
       5.8
      ],
      [
       5.36,
       5.9
      ],
      [
       5.26,
       4.99
      ],
      [
       5.45,
       5.36
      ],
      [
       5.52,
       5.78
      ],
      [
       5.91,
       5.42
      ],
      [
       5.25,
       5.15
      ],
      [
       6.04,
       5.3
      ],
      [
       4.81,
       4.89
      ],
      [
       5.14,
       5.72
      ]
     ],
     "mien": {
      "x": [
       0,
       8
      ],
      "y": [
       0,
       8
      ]
     },
     "a": {
      "min": -3,
      "max": 3,
      "buoc": 0.05,
      "dau": 0.3,
      "so_le": 2
     },
     "b": {
      "min": -2,
      "max": 12,
      "buoc": 0.1,
      "dau": 2.0,
      "so_le": 1
     },
     "tot": {
      "a": -1.265,
      "b": 8.824,
      "le": 1.33
     },
     "nhan_x": "Độ nặng (minh hoạ)",
     "nhan_y": "Độ ngọt (minh hoạ)",
     "vach_x": [
      0,
      2,
      4,
      6,
      8
     ],
     "vach_y": [
      0,
      2,
      4,
      6,
      8
     ],
     "nhan_a": null,
     "nhan_b": null,
     "nhan_tot": "Lề của đường SVM",
     "nhan": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
     ]
    },
    {
     "t": "anh",
     "cap": "Ba đường đều tách được — khoảng cách tới điểm gần nhất: 1.16 · 0.55 · 0.37",
     "alt": "Ba đường đều tách được — khoảng cách tới điểm gần nhất: 1.16 · 0.55 · 0.37",
     "src": "img/ba-duong-tach-tao-va-cam-minh-hoa.png"
    },
    {
     "t": "anh",
     "cap": "Hình GfG: đường ranh giới, lề và vector hỗ trợ",
     "alt": "Hình GfG: đường ranh giới, lề và vector hỗ trợ",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250807122724737293/support_vectors_hyperplane.webp",
     "du_phong": "img/minh-hoa-vector-ho-tro-va-sieu-phang.png",
     "nguon": {
      "ten": "GeeksforGeeks — Support vector machine algorithm",
      "url": "https://www.geeksforgeeks.org/machine-learning/support-vector-machine-algorithm/"
     },
     "chu_giai": [
      [
       "Hyperplane",
       "Đường (mặt) ranh giới"
      ],
      [
       "Support Vectors",
       "Vector hỗ trợ"
      ],
      [
       "Margin",
       "Lề"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ mọi điểm đều ảnh hưởng tới đường của SVM — chỉ vector hỗ trợ ảnh hưởng.",
      "Đo lề theo chiều dọc như sai số của Bài 15 — lề đo vuông góc với đường."
     ]
    },
    {
     "t": "tom_tat",
     "html": "SVM chọn đường cách điểm gần nhất xa nhất; các điểm sát lề là vector hỗ trợ."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai22-q3",
     "q": "Trong hình ba đường tách táo và cam, đường nào có lề rộng nhất?",
     "giai": "Khoảng cách tới điểm gần nhất lớn nhất: 1.16.",
     "goi_y": "Đường nào đi xa cả táo lẫn cam nhất?",
     "a": [
      "Đường 1",
      "Đường 2",
      "Đường 3",
      "Ba đường như nhau"
     ],
     "h": "1af2cbf7c946ad"
    },
    {
     "k": "dd",
     "id": "bai22-q4",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Lề rộng nhất, vector hỗ trợ.",
     "goi_y": "Tên thuật toán: Support Vector Machine.",
     "mau": "SVM chọn đường có lề {0}; các điểm nằm sát lề gọi là {1}.",
     "o": [
      [
       "rộng nhất",
       "hẹp nhất",
       "dài nhất",
       "dốc nhất"
      ],
      [
       "vector hỗ trợ",
       "láng giềng",
       "lá",
       "tâm cụm"
      ]
     ],
     "h": "1aa9297bc68557"
    }
   ]
  },
  {
   "ten": "SVM trên bảng của lớp",
   "ten_ngan": "Bảng lớp",
   "phut": 4,
   "muc_tieu": "nhận ra vector hỗ trợ là những điểm quyết định đường của SVM.",
   "khoi_dong": "Dữ liệu thật có bạn Đạt nằm lẫn trong vùng Chưa đạt. SVM xử lý thế nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "SVM tuyến tính trên bảng khối 10 (đã đưa về 0 – 1)",
     "alt": "SVM tuyến tính trên bảng khối 10 (đã đưa về 0 – 1)",
     "src": "img/le-rong-nhat-va-vector-ho-tro.png"
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
       "Độ rộng lề (thang 0 – 1)",
       "0.412"
      ],
      [
       "Số vector hỗ trợ",
       "66 / 168 bạn"
      ],
      [
       "Độ chính xác trên tập kiểm tra",
       "91.7%"
      ]
     ],
     "ket_luan": "Dữ liệu thật không tách được hoàn toàn: SVM cho phép vài điểm nằm trong lề hoặc sai phía (“lề mềm”), đổi lại lề rộng hơn.",
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Tham số C",
     "html": "C lớn: phạt nặng điểm sai phía → lề hẹp, bám dữ liệu (dễ học vẹt). C nhỏ: chấp nhận sai nhiều hơn → lề rộng. Mặc định C = 1."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ vector hỗ trợ là một mũi tên — ở đây nó là một điểm dữ liệu.",
      "Nghĩ SVM luôn tách đúng 100% trên dữ liệu thật."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Dữ liệu thật: SVM dùng lề mềm; tham số C cân bằng giữa lề rộng và ít điểm sai."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai22-q5",
     "q": "SVM của lớp có bao nhiêu vector hỗ trợ?",
     "giai": "Những bạn nằm trên hoặc trong lề.",
     "goi_y": "Đếm các vòng tròn vàng — hoặc đọc chú thích hình.",
     "a": [
      "66",
      "168",
      "72",
      "2"
     ],
     "h": "2def185814726"
    },
    {
     "k": "ds",
     "id": "bai22-q6",
     "q": "Với dữ liệu thật, SVM cho phép một vài điểm nằm sai phía đường.",
     "giai": "Lề mềm, điều khiển bằng tham số C.",
     "goi_y": "Có kẻ được đường nào tách hoàn toàn bảng khối 10 không?",
     "h": "6dd666b28bde8"
    }
   ]
  },
  {
   "ten": "Khi không kẻ được đường thẳng",
   "ten_ngan": "Kernel",
   "phut": 4,
   "muc_tieu": "mô tả ý tưởng kernel khi dữ liệu không tách được bằng đường thẳng.",
   "khoi_dong": "Một nhóm nằm giữa, nhóm kia bao quanh như chiếc nhẫn. Kẻ đường thẳng được không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Hai vòng tròn lồng nhau — không đường thẳng nào tách được",
     "alt": "Hai vòng tròn lồng nhau — không đường thẳng nào tách được",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512161104208459/svm1.png",
     "du_phong": "img/minh-hoa-du-lieu-hai-vong-tron-long-nhau.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml non linear svm",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-non-linear-svm/"
     },
     "chu_giai": [
      [
       "Class 0 / Class 1",
       "Nhóm 0 / nhóm 1"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Thêm một chiều mới: nhóm giữa nằm thấp, nhóm ngoài nằm cao — giờ một mặt phẳng tách được",
     "alt": "Thêm một chiều mới: nhóm giữa nằm thấp, nhóm ngoài nằm cao — giờ một mặt phẳng tách được",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512161104398353/svm2.png",
     "du_phong": "img/minh-hoa-nang-du-lieu-len-chieu-thu-ba.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml non linear svm",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-non-linear-svm/"
     },
     "chu_giai": [
      [
       "Feature 1, Feature 2",
       "Cột 1, cột 2"
      ],
      [
       "Feature 3",
       "Cột mới tính từ hai cột"
      ]
     ]
    },
    {
     "t": "mat_phang",
     "tieu_de": "nâng hai vòng tròn lên chiều thứ ba",
     "huong_dan": "Mỗi điểm được thêm một chiều mới <b>z = x² + y²</b> (bình phương khoảng cách tới tâm). Kéo chuột để xoay: nhóm giữa (xanh) nằm thấp, nhóm ngoài (cam) nằm cao. Bật mặt phẳng: một mặt phẳng <b>ngang</b> tách được hai nhóm — nhìn lại trên mặt phẳng cũ, nó chính là một đường tròn.",
     "x": [
      0.727,
      -0.05,
      0.95,
      0.848,
      -0.827,
      -0.052,
      0.955,
      -0.306,
      0.456,
      -1.021,
      0.454,
      -0.148,
      -0.962,
      -0.059,
      -0.412,
      -0.918,
      -0.845,
      0.17,
      -0.362,
      -0.339,
      -0.405,
      -0.35,
      0.073,
      0.682,
      0.342,
      -0.703,
      0.312,
      0.935,
      -0.432,
      0.179,
      0.801,
      0.956,
      0.376,
      0.715,
      0.552,
      -0.343,
      -1.019,
      -0.407,
      0.805,
      -0.525,
      -0.361,
      -0.235,
      0.062,
      0.804,
      -0.119,
      -0.998,
      0.315,
      -0.11,
      0.184,
      -0.283,
      -0.189,
      -0.176,
      0.33,
      -0.003,
      0.355,
      0.307,
      -0.277,
      -0.789,
      -0.819,
      0.343,
      -0.757,
      0.953,
      -0.883,
      -0.271,
      0.069,
      -0.038,
      0.543,
      0.397,
      0.725,
      0.651,
      0.085,
      0.31,
      0.229,
      0.773,
      0.532,
      -0.078,
      -0.52,
      -0.841,
      -0.333,
      -0.236,
      -0.41,
      -0.383,
      0.009,
      0.007,
      -0.849,
      -0.804,
      -0.382,
      0.055,
      -0.577,
      -0.242,
      0.111,
      -0.783,
      -0.719,
      -0.136,
      0.373,
      -0.396,
      0.947,
      0.237,
      -0.125,
      -0.819,
      0.313,
      0.227,
      0.24,
      -0.039,
      0.114,
      0.815,
      0.44,
      0.922,
      -0.259,
      -0.875,
      -0.236,
      0.817,
      -0.352,
      -0.325,
      -0.097,
      0.132,
      0.389,
      -0.071,
      0.272,
      0.455,
      -0.36,
      0.153,
      -0.482,
      -0.527,
      0.93,
      0.316,
      -0.74,
      0.127,
      -0.05,
      -0.934,
      1.071,
      -0.396,
      -0.917,
      0.68,
      0.161,
      0.429,
      0.072,
      -0.317,
      -0.025,
      0.664,
      0.228,
      -0.332,
      -0.016,
      1.031,
      0.445,
      0.395,
      -0.476,
      -0.025,
      0.228,
      0.106,
      -0.324,
      0.262,
      -0.132,
      -0.144,
      0.172,
      0.003,
      0.998,
      -0.187,
      0.502,
      -0.226
     ],
     "y": [
      -0.651,
      -0.475,
      0.544,
      0.222,
      -0.514,
      -0.408,
      -0.27,
      -0.259,
      -0.139,
      0.052,
      0.862,
      -0.416,
      -0.027,
      -0.428,
      0.867,
      -0.171,
      0.612,
      -0.417,
      -0.983,
      -0.207,
      -0.04,
      0.172,
      -0.436,
      -0.974,
      0.337,
      -0.674,
      -0.243,
      0.248,
      -0.852,
      -0.412,
      -0.529,
      0.253,
      -1.125,
      0.897,
      0.786,
      0.899,
      0.184,
      -0.236,
      0.588,
      0.819,
      -0.001,
      0.399,
      0.49,
      -0.629,
      -0.46,
      -0.268,
      0.237,
      0.978,
      0.941,
      -0.112,
      -0.98,
      0.901,
      0.186,
      -0.39,
      0.217,
      0.253,
      0.317,
      -0.425,
      0.368,
      -0.28,
      -0.764,
      -0.184,
      0.438,
      -0.163,
      0.149,
      0.951,
      -0.804,
      0.135,
      0.696,
      0.84,
      0.382,
      -0.145,
      0.267,
      0.601,
      0.086,
      0.34,
      0.827,
      0.196,
      0.311,
      -0.129,
      -0.059,
      -0.012,
      -0.978,
      0.393,
      -0.353,
      0.372,
      -0.07,
      -0.36,
      -0.808,
      0.307,
      -0.888,
      -0.47,
      0.742,
      -0.382,
      0.952,
      -0.941,
      -0.262,
      0.056,
      0.421,
      0.642,
      0.035,
      0.86,
      0.3,
      0.433,
      0.498,
      -0.382,
      0.096,
      0.054,
      -0.279,
      -0.458,
      0.146,
      -0.661,
      0.335,
      -1.0,
      -0.404,
      -0.96,
      0.941,
      0.427,
      -0.838,
      -0.132,
      -0.945,
      -0.25,
      0.879,
      0.149,
      -0.163,
      -0.184,
      -0.642,
      0.447,
      1.001,
      0.17,
      -0.056,
      -0.069,
      0.671,
      0.531,
      -0.972,
      -0.086,
      0.391,
      0.396,
      0.333,
      -0.78,
      0.283,
      -0.178,
      -0.983,
      0.197,
      -0.949,
      0.136,
      0.959,
      -0.356,
      0.36,
      -0.275,
      -0.089,
      -0.38,
      -0.485,
      0.306,
      -0.387,
      0.979,
      0.065,
      -0.32,
      -0.131,
      0.372
     ],
     "z": [
      0.952,
      0.228,
      1.199,
      0.769,
      0.947,
      0.169,
      0.984,
      0.161,
      0.227,
      1.045,
      0.949,
      0.195,
      0.927,
      0.187,
      0.922,
      0.872,
      1.088,
      0.203,
      1.097,
      0.158,
      0.166,
      0.152,
      0.196,
      1.413,
      0.23,
      0.949,
      0.156,
      0.936,
      0.912,
      0.202,
      0.921,
      0.978,
      1.406,
      1.317,
      0.922,
      0.926,
      1.072,
      0.221,
      0.994,
      0.946,
      0.13,
      0.214,
      0.244,
      1.041,
      0.226,
      1.067,
      0.155,
      0.969,
      0.919,
      0.093,
      0.996,
      0.844,
      0.144,
      0.152,
      0.173,
      0.158,
      0.177,
      0.803,
      0.806,
      0.196,
      1.156,
      0.943,
      0.973,
      0.1,
      0.027,
      0.906,
      0.942,
      0.176,
      1.011,
      1.129,
      0.153,
      0.117,
      0.124,
      0.959,
      0.291,
      0.121,
      0.954,
      0.746,
      0.208,
      0.072,
      0.171,
      0.147,
      0.956,
      0.154,
      0.845,
      0.784,
      0.151,
      0.133,
      0.987,
      0.153,
      0.8,
      0.834,
      1.069,
      0.164,
      1.045,
      1.042,
      0.966,
      0.059,
      0.193,
      1.083,
      0.099,
      0.791,
      0.147,
      0.189,
      0.261,
      0.811,
      0.203,
      0.853,
      0.145,
      0.975,
      0.077,
      1.104,
      0.236,
      1.105,
      0.173,
      0.939,
      1.036,
      0.188,
      0.776,
      0.224,
      1.023,
      0.086,
      1.005,
      0.3,
      0.891,
      0.134,
      0.96,
      0.216,
      1.004,
      0.901,
      1.15,
      0.162,
      1.292,
      0.745,
      0.97,
      0.192,
      0.158,
      0.258,
      0.111,
      1.05,
      0.132,
      0.142,
      0.966,
      1.103,
      1.099,
      0.175,
      1.146,
      0.127,
      0.182,
      0.087,
      0.113,
      0.213,
      0.253,
      0.115,
      0.179,
      0.959,
      1.0,
      0.137,
      0.269,
      0.19
     ],
     "a1": 0,
     "a2": 0,
     "b": 0.522,
     "nhan": [
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "ngoai",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "trong",
      "trong",
      "ngoai",
      "ngoai",
      "ngoai",
      "trong",
      "ngoai",
      "trong",
      "trong",
      "trong",
      "trong",
      "trong",
      "trong",
      "trong",
      "trong",
      "ngoai",
      "ngoai",
      "trong",
      "trong",
      "trong"
     ],
     "thu_tu": [
      "trong",
      "ngoai"
     ],
     "cong_thuc": "z = 0.52",
     "nhan_x": "x",
     "nhan_y": "y",
     "nhan_z": "z = x² + y²",
     "ghi": "Số liệu minh hoạ (make_circles của scikit-learn, 160 điểm). Kernel RBF làm việc tương tự nhưng máy không cần tính chiều mới ra thật."
    },
    {
     "t": "anh",
     "cap": "Kernel RBF: ranh giới cong khi nhìn lại trên mặt phẳng",
     "alt": "Kernel RBF: ranh giới cong khi nhìn lại trên mặt phẳng",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250121153712588915/download4.png",
     "du_phong": "img/minh-hoa-duong-bien-voi-nhan-rbf.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml non linear svm",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-non-linear-svm/"
     },
     "chu_giai": [
      [
       "SVM with RBF Kernel",
       "SVM với kernel RBF"
      ],
      [
       "Decision Boundary",
       "Ranh giới quyết định"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Kernel (hàm nhân)",
     "html": "Cách SVM “nâng” dữ liệu lên không gian nhiều chiều hơn, nơi tách bằng mặt phẳng được; nhìn lại ở hai chiều thì ranh giới thành đường cong.",
     "ky_hieu": "<code>kernel=\"linear\"</code>: đường thẳng · <code>kernel=\"rbf\"</code>: ranh giới cong. Chi tiết toán học để dành cho Level 2."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ kernel thêm dữ liệu mới — nó chỉ tính thêm cột từ các cột cũ.",
      "Nghĩ luôn nên dùng kernel cong — bảng khối 10 chỉ cần đường thẳng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Không tách được bằng đường thẳng → kernel nâng lên chiều cao hơn → ranh giới cong."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai22-q7",
     "q": "Kernel giúp SVM làm gì?",
     "giai": "Nâng chiều rồi tách bằng mặt phẳng.",
     "goi_y": "Nhìn hình hai vòng tròn lồng nhau.",
     "a": [
      "Tách dữ liệu cần ranh giới cong",
      "Tăng số dòng của dữ liệu",
      "Bỏ bớt các vector hỗ trợ",
      "Đưa mọi cột về 0 – 1"
     ],
     "h": "d20bcab817810"
    },
    {
     "k": "ds",
     "id": "bai22-q8",
     "q": "Với hai vòng tròn lồng nhau, một đường thẳng có thể tách hoàn toàn hai nhóm.",
     "giai": "Nhóm ngoài bao quanh nhóm trong.",
     "goi_y": "Kẻ thử một đường thẳng bất kỳ qua hình.",
     "h": "56a4ec24983c8"
    }
   ]
  },
  {
   "ten": "SVM trong scikit-learn",
   "ten_ngan": "scikit-learn",
   "phut": 5,
   "muc_tieu": "dùng SVC trong scikit-learn và so với các model đã học.",
   "khoi_dong": "Sáu model trên cùng 72 bạn kiểm tra: chênh nhau bao nhiêu?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Việc",
      "Lệnh"
     ],
     "dong": [
      [
       "Đưa về 0 – 1",
       "<code>sc = MinMaxScaler().fit(X_train)</code>"
      ],
      [
       "Huấn luyện",
       "<code>svm = SVC(kernel=\"linear\").fit(sc.transform(X_train), y_train)</code>"
      ],
      [
       "Vector hỗ trợ",
       "<code>len(svm.support_)</code>"
      ],
      [
       "Dự đoán, đánh giá",
       "<code>svm.predict(...)</code> · <code>accuracy_score</code>"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Sáu model trên cùng 72 bạn kiểm tra",
     "alt": "Sáu model trên cùng 72 bạn kiểm tra",
     "src": "img/sau-model-tren-cung-bai-toan.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "các model đã học",
     "de": null,
     "cot": [
      "Model",
      "Độ chính xác"
     ],
     "dong": [
      [
       "Model lười",
       "54.2%"
      ],
      [
       "KNN (K = 9)",
       "<b>95.8%</b>"
      ],
      [
       "Logistic",
       "91.7%"
      ],
      [
       "Cây sâu 2",
       "91.7%"
      ],
      [
       "Naïve Bayes",
       "91.7%"
      ],
      [
       "SVM tuyến tính",
       "91.7%"
      ]
     ],
     "ket_luan": "Trừ model lười, các model chỉ chênh 4.1 điểm — khoảng 3 bạn trên 72. Trên bảng này chọn model nào cũng gần như nhau; Bài 24 sẽ đo cho công bằng hơn.",
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "SVM đo khoảng cách",
     "html": "Như KNN, lề đo bằng khoảng cách nên các cột cần cùng thang đo. Trên bảng này không đưa về 0 – 1 cho 93.1%, đưa về cho 91.7% — chênh 1 bạn, không đủ để kết luận."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn model chỉ vì cao hơn 1 bạn trên tập kiểm tra nhỏ.",
      "Quên đưa về 0 – 1 trước SVM."
     ]
    },
    {
     "t": "tom_tat",
     "html": "SVC(kernel=...) → fit → support_ → predict; đưa về cùng thang đo trước."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai22-q9",
     "q": "Lớp scikit-learn nào tạo SVM phân loại?",
     "giai": "SVC = Support Vector Classifier.",
     "goi_y": "C ở cuối là Classifier.",
     "a": [
      "SVC",
      "SVR",
      "GaussianNB",
      "KNeighborsClassifier"
     ],
     "h": "136ec8683d1c8"
    },
    {
     "k": "ma",
     "id": "bai22-q10",
     "q": "Hai nhận xét nào đúng về bảng sáu model? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Chênh chỉ vài bạn trên 72.",
     "goi_y": "So cột cao nhất và thấp nhất (trừ model lười).",
     "a": [
      "Các model thật chênh nhau rất ít",
      "Model nào cũng vượt xa model lười",
      "SVM luôn là model tốt nhất",
      "Cây sâu 2 kém hơn hẳn model khác"
     ],
     "h": "1bdd1be7c6dee"
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
    "id": "bai22-q11",
    "q": "Nhìn hình. Các vòng tròn vàng đánh dấu gì?",
    "giai": "Những bạn nằm trên hoặc trong lề.",
    "img": {
     "src": "img/le-rong-nhat-va-vector-ho-tro.png"
    },
    "a": [
     "Vector hỗ trợ",
     "Các điểm bị đoán sai",
     "Tâm của hai nhóm",
     "Các điểm ngoại lai"
    ],
    "h": "671e592b2ff0f"
   },
   {
    "k": "mc",
    "id": "bai22-q12",
    "q": "Nhìn hình. Đường C khác đường A và B ở điểm nào?",
    "giai": "Đường xiên phụ thuộc cả hai cột.",
    "img": {
     "src": "img/ba-duong-hoc-sinh-hay-ke.png"
    },
    "a": [
     "Dùng cả giờ học và phút mạng",
     "Chỉ dùng giờ học",
     "Chỉ dùng phút mạng",
     "Không tách được nhóm nào"
    ],
    "h": "10af6b056aa1df"
   },
   {
    "k": "mc",
    "id": "bai22-q13",
    "q": "Nhìn hình. Model nào có cột thấp hẳn so với các model khác?",
    "giai": "Luôn đoán Đạt: 54.2%.",
    "img": {
     "src": "img/sau-model-tren-cung-bai-toan.png"
    },
    "a": [
     "Model lười",
     "KNN (K = 9)",
     "SVM tuyến tính",
     "Naïve Bayes"
    ],
    "h": "f7d652c0bf814"
   },
   {
    "k": "mc",
    "id": "bai22-q14",
    "q": "Nhìn hình. Vì sao phải thêm chiều thứ ba?",
    "giai": "Ý tưởng của kernel.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512161104398353/svm2.png",
     "du_phong": "img/minh-hoa-nang-du-lieu-len-chieu-thu-ba.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml non linear svm",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-non-linear-svm/"
     }
    },
    "a": [
     "Để tách được bằng một mặt phẳng",
     "Để vẽ hình đẹp hơn",
     "Để có thêm dữ liệu mới",
     "Để bỏ bớt một nhóm"
    ],
    "h": "bfcc3d681f12"
   },
   {
    "k": "mc",
    "id": "bai22-q15",
    "q": "Nhìn hình. Đường nào đi sát táo nhất?",
    "giai": "Khoảng cách tới điểm gần nhất chỉ 0.37.",
    "img": {
     "src": "img/ba-duong-tach-tao-va-cam-minh-hoa.png"
    },
    "a": [
     "Đường 3",
     "Đường 1",
     "Đường 2",
     "Ba đường cách đều"
    ],
    "h": "fd4c6c58496a7"
   },
   {
    "k": "mc",
    "id": "bai22-q16",
    "q": "Robot hút bụi phải đi giữa hai dãy ghế. Vì sao nên chọn lối đi cách đều hai bên nhất?",
    "giai": "Giống lề rộng của SVM.",
    "a": [
     "Lệch một chút vẫn không va vào ghế",
     "Để đi nhanh gấp đôi bình thường",
     "Để đi ngang qua nhiều ghế hơn",
     "Để khỏi phải cần tới cảm biến"
    ],
    "h": "10f92d4a8f29c0"
   },
   {
    "k": "mc",
    "id": "bai22-q17",
    "q": "Xoá một điểm nằm rất xa đường ranh giới SVM. Đường thay đổi thế nào?",
    "giai": "Chỉ vector hỗ trợ quyết định đường.",
    "a": [
     "Gần như không thay đổi",
     "Dịch về phía điểm đó",
     "Xoay 90 độ",
     "Biến mất"
    ],
    "h": "94d69fd31d504"
   },
   {
    "k": "mc",
    "id": "bai22-q18",
    "q": "Tăng tham số C của SVM rất lớn. Điều gì dễ xảy ra?",
    "giai": "C lớn phạt nặng điểm sai phía.",
    "a": [
     "Lề hẹp, bám sát dữ liệu",
     "Lề rộng hơn hẳn trước",
     "Model đoán ngẫu nhiên",
     "Không còn vector hỗ trợ"
    ],
    "h": "940aabdb8372"
   },
   {
    "k": "mc",
    "id": "bai22-q19",
    "q": "Dữ liệu cột Thu nhập (triệu) và cột Tuổi. Trước SVM cần làm gì?",
    "giai": "Lề đo bằng khoảng cách.",
    "a": [
     "Đưa hai cột về cùng thang đo",
     "Xoá cột Thu nhập đi",
     "Chuyển Tuổi thành chữ",
     "Không cần làm gì cả"
    ],
    "h": "61baae56a10f2"
   },
   {
    "k": "ma",
    "id": "bai22-q20",
    "q": "Những phát biểu nào đúng về lề của SVM? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Lề rộng = an toàn.",
    "a": [
     "Là khoảng cách tới điểm gần nhất",
     "SVM chọn lề rộng nhất",
     "Đo theo chiều dọc như Bài 15",
     "Lề càng hẹp càng an toàn"
    ],
    "h": "176682dad959d4"
   },
   {
    "k": "ma",
    "id": "bai22-q21",
    "q": "Vector hỗ trợ có đặc điểm nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Chỉ những điểm sát lề.",
    "a": [
     "Nằm sát hoặc trong lề",
     "Quyết định vị trí đường",
     "Là tâm của mỗi nhóm",
     "Là mọi điểm của tập huấn luyện"
    ],
    "h": "132b8d503de0e9"
   },
   {
    "k": "ma",
    "id": "bai22-q22",
    "q": "Kernel RBF dùng khi nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ranh giới cong.",
    "a": [
     "Dữ liệu cần ranh giới cong",
     "Hai nhóm lồng vào nhau",
     "Muốn bớt dữ liệu",
     "Muốn đọc luật NẾU… THÌ…"
    ],
    "h": "13a5fd116bb9cc"
   },
   {
    "k": "ma",
    "id": "bai22-q23",
    "q": "Những bước nào cần khi dùng SVM tuyến tính? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Scale rồi fit.",
    "a": [
     "Đưa các cột về 0 – 1",
     "Fit SVC(kernel=\"linear\")",
     "Chọn K láng giềng",
     "Làm mịn Laplace"
    ],
    "h": "7f7566cf5360c"
   },
   {
    "k": "sx",
    "id": "bai22-q24",
    "q": "Sắp xếp các bước SVM chọn đường.",
    "giai": "Xét → đo → chọn → vector hỗ trợ.",
    "a": [
     "Xét các đường tách được hai nhóm",
     "Đo khoảng cách tới điểm gần nhất",
     "Chọn đường có khoảng cách lớn nhất",
     "Ghi nhận các vector hỗ trợ"
    ],
    "h": "40b65ba1e8fd4"
   },
   {
    "k": "sx",
    "id": "bai22-q25",
    "q": "Sắp xếp các bước dùng SVC trong scikit-learn.",
    "giai": "Chia → scale → fit → predict → so.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Fit MinMaxScaler trên tập huấn luyện",
     "Fit SVC",
     "Predict tập kiểm tra",
     "So với các model khác"
    ],
    "h": "14360b079169c8"
   },
   {
    "k": "dd",
    "id": "bai22-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Lề, vector hỗ trợ.",
    "mau": "SVM chọn đường có {0} rộng nhất; điểm sát lề là {1}.",
    "o": [
     [
      "lề",
      "độ dốc",
      "sai số",
      "độ sâu"
     ],
     [
      "vector hỗ trợ",
      "láng giềng",
      "lá",
      "nhãn"
     ]
    ],
    "h": "362809dea4de3"
   },
   {
    "k": "dd",
    "id": "bai22-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc hình và bảng.",
    "mau": "SVM của lớp có {0} vector hỗ trợ và đúng {1} trên tập kiểm tra.",
    "o": [
     [
      "66",
      "168",
      "2",
      "72"
     ],
     [
      "91.7%",
      "54.2%",
      "100%",
      "95.8%"
     ]
    ],
    "h": "124bf65ed8315c"
   },
   {
    "k": "dd",
    "id": "bai22-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Tuyến tính / cong.",
    "mau": "kernel=\"linear\" cho ranh giới {0}; kernel=\"rbf\" cho ranh giới {1}.",
    "o": [
     [
      "thẳng",
      "cong",
      "bậc thang",
      "tròn"
     ],
     [
      "cong",
      "thẳng",
      "bậc thang",
      "ngang"
     ]
    ],
    "h": "138b3a231d8c1"
   },
   {
    "k": "dd",
    "id": "bai22-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "C cân bằng lề và điểm sai.",
    "mau": "Tham số C lớn làm lề {0}; C nhỏ làm lề {1}.",
    "o": [
     [
      "hẹp",
      "rộng",
      "biến mất",
      "cong"
     ],
     [
      "rộng",
      "hẹp",
      "biến mất",
      "thẳng"
     ]
    ],
    "h": "f586dc3194299"
   },
   {
    "k": "ds",
    "id": "bai22-q30",
    "q": "Chỉ các vector hỗ trợ quyết định vị trí đường của SVM.",
    "giai": "Điểm xa lề không ảnh hưởng.",
    "h": "12ade66c16b1e5"
   },
   {
    "k": "ds",
    "id": "bai22-q31",
    "q": "SVM không cần đưa các cột về cùng thang đo.",
    "giai": "Lề đo bằng khoảng cách.",
    "h": "1d1db07544af81"
   },
   {
    "k": "ds",
    "id": "bai22-q32",
    "q": "Trên bảng khối 10, các model đã học chênh nhau rất nhiều.",
    "giai": "Chỉ vài bạn trên 72.",
    "h": "174a53ef6a2361"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
