window.BAI = {
 "bai": 20,
 "ma": "bai20",
 "nhan": "Bài 20",
 "tieu_de": "SVM — máy vector hỗ trợ",
 "phan": "Phần B · Học có giám sát",
 "cau_hoi": "Nhiều đường cùng tách được hai nhóm — đường nào an toàn nhất?",
 "gioi_thieu": [
  "Logistic, cây quyết định đều vẽ ra một ranh giới. Nhưng thường có <b>rất nhiều</b> ranh giới cùng tách được hai nhóm. SVM trả lời: chọn đường cách xa cả hai nhóm nhất.",
  "Năm chặng: nhiều đường cùng tách, lề rộng nhất, SVM trên bảng của lớp, khi không kẻ được đường thẳng, và SVM trong scikit-learn. Bảng khối 10 là bảng mô phỏng; phần Tự thử dùng số liệu minh hoạ.",
  "Con dùng lại: khoảng cách và đưa về 0 – 1 (Bài 5, 12), đường thẳng (Bài 14), ranh giới quyết định (Bài 12, 17)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai20",
 "muc_tieu": [
  "Giải thích được vì sao nhiều đường cùng tách được hai nhóm.",
  "Mô tả được “lề” và vì sao SVM chọn đường có lề rộng nhất.",
  "Nhận ra vector hỗ trợ là những điểm quyết định đường của SVM.",
  "Mô tả ý tưởng kernel khi dữ liệu không tách được bằng đường thẳng.",
  "Dùng SVC trong scikit-learn và so với các model đã học."
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
       "Học > 3,05 giờ → Đạt",
       "88,7%"
      ],
      [
       "B",
       "Học > 3,45 giờ → Đạt",
       "91,1%"
      ],
      [
       "C",
       "Đường xiên theo cả giờ học và phút mạng",
       "90,5%"
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
     "id": "bai20-q1",
     "q": "Trên tập huấn luyện, đường nào trong ba đường đúng nhiều nhất?",
     "giai": "Đường B: 91,1%.",
     "goi_y": "So cột “Đúng” của bảng.",
     "a": [
      "Đường B",
      "Đường A",
      "Đường C",
      "Ba đường bằng hệt nhau"
     ],
     "h": "54aeab80950a5"
    },
    {
     "k": "ds",
     "id": "bai20-q2",
     "q": "Với hai nhóm tách rời nhau, chỉ có đúng một đường tách được.",
     "giai": "Có vô số đường — xoay, dịch một chút vẫn tách được.",
     "goi_y": "Dịch đường sang trái một chút thì sao?",
     "h": "e0f9c45611701"
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
     "cap": "Ba đường đều tách được — khoảng cách tới điểm gần nhất: 1,16 · 0,55 · 0,37",
     "alt": "Ba đường đều tách được — khoảng cách tới điểm gần nhất: 1,16 · 0,55 · 0,37",
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
      "Đo lề theo chiều dọc như sai số của Bài 14 — lề đo vuông góc với đường."
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
     "id": "bai20-q3",
     "q": "Trong hình ba đường tách táo và cam, đường nào có lề rộng nhất?",
     "giai": "Khoảng cách tới điểm gần nhất lớn nhất: 1,16.",
     "goi_y": "Đường nào đi xa cả táo lẫn cam nhất?",
     "a": [
      "Đường 1",
      "Đường 2",
      "Đường 3",
      "Ba đường như nhau"
     ],
     "h": "4b3c3f010511c"
    },
    {
     "k": "dd",
     "id": "bai20-q4",
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
     "h": "14e2d6687f00be"
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
       "0,412"
      ],
      [
       "Số vector hỗ trợ",
       "66 / 168 bạn"
      ],
      [
       "Độ chính xác trên tập kiểm tra",
       "91,7%"
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
     "id": "bai20-q5",
     "q": "SVM của lớp có bao nhiêu vector hỗ trợ?",
     "giai": "Những bạn nằm trên hoặc trong lề.",
     "goi_y": "Đếm các vòng tròn vàng — hoặc đọc chú thích hình.",
     "a": [
      "66",
      "168",
      "72",
      "2"
     ],
     "h": "1578f2ae76041e"
    },
    {
     "k": "ds",
     "id": "bai20-q6",
     "q": "Với dữ liệu thật, SVM cho phép một vài điểm nằm sai phía đường.",
     "giai": "Lề mềm, điều khiển bằng tham số C.",
     "goi_y": "Có kẻ được đường nào tách hoàn toàn bảng khối 10 không?",
     "h": "4f010f769a3b9"
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
     "id": "bai20-q7",
     "q": "Kernel giúp SVM làm gì?",
     "giai": "Nâng chiều rồi tách bằng mặt phẳng.",
     "goi_y": "Nhìn hình hai vòng tròn lồng nhau.",
     "a": [
      "Tách dữ liệu cần ranh giới cong",
      "Tăng số dòng của dữ liệu",
      "Bỏ bớt các vector hỗ trợ",
      "Đưa mọi cột về 0 – 1"
     ],
     "h": "1b9d9c6197cebd"
    },
    {
     "k": "ds",
     "id": "bai20-q8",
     "q": "Với hai vòng tròn lồng nhau, một đường thẳng có thể tách hoàn toàn hai nhóm.",
     "giai": "Nhóm ngoài bao quanh nhóm trong.",
     "goi_y": "Kẻ thử một đường thẳng bất kỳ qua hình.",
     "h": "1054dc2184c942"
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
       "54,2%"
      ],
      [
       "KNN (K = 9)",
       "<b>95,8%</b>"
      ],
      [
       "Logistic",
       "91,7%"
      ],
      [
       "Cây sâu 2",
       "91,7%"
      ],
      [
       "Naïve Bayes",
       "91,7%"
      ],
      [
       "SVM tuyến tính",
       "91,7%"
      ]
     ],
     "ket_luan": "Trừ model lười, các model chỉ chênh 4,1 điểm — khoảng 3 bạn trên 72. Trên bảng này chọn model nào cũng gần như nhau; Bài 23 sẽ đo cho công bằng hơn.",
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "SVM đo khoảng cách",
     "html": "Như KNN, lề đo bằng khoảng cách nên các cột cần cùng thang đo. Trên bảng này không đưa về 0 – 1 cho 93,1%, đưa về cho 91,7% — chênh 1 bạn, không đủ để kết luận."
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
     "id": "bai20-q9",
     "q": "Lớp scikit-learn nào tạo SVM phân loại?",
     "giai": "SVC = Support Vector Classifier.",
     "goi_y": "C ở cuối là Classifier.",
     "a": [
      "SVC",
      "SVR",
      "GaussianNB",
      "KNeighborsClassifier"
     ],
     "h": "133d392724e7c8"
    },
    {
     "k": "ma",
     "id": "bai20-q10",
     "q": "Hai nhận xét nào đúng về bảng sáu model? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Chênh chỉ vài bạn trên 72.",
     "goi_y": "So cột cao nhất và thấp nhất (trừ model lười).",
     "a": [
      "Các model thật chênh nhau rất ít",
      "Model nào cũng vượt xa model lười",
      "SVM luôn là model tốt nhất",
      "Cây sâu 2 kém hơn hẳn model khác"
     ],
     "h": "10c4e8cf1fda4b"
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
    "h": "1e24443499944e"
   },
   {
    "k": "mc",
    "id": "bai20-q12",
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
    "h": "a4007d891cfc4"
   },
   {
    "k": "mc",
    "id": "bai20-q13",
    "q": "Nhìn hình. Model nào có cột thấp hẳn so với các model khác?",
    "giai": "Luôn đoán Đạt: 54,2%.",
    "img": {
     "src": "img/sau-model-tren-cung-bai-toan.png"
    },
    "a": [
     "Model lười",
     "KNN (K = 9)",
     "SVM tuyến tính",
     "Naïve Bayes"
    ],
    "h": "54bec43e2036a"
   },
   {
    "k": "mc",
    "id": "bai20-q14",
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
    "h": "1058efc566e8a8"
   },
   {
    "k": "mc",
    "id": "bai20-q15",
    "q": "Nhìn hình. Đường nào đi sát táo nhất?",
    "giai": "Khoảng cách tới điểm gần nhất chỉ 0,37.",
    "img": {
     "src": "img/ba-duong-tach-tao-va-cam-minh-hoa.png"
    },
    "a": [
     "Đường 3",
     "Đường 1",
     "Đường 2",
     "Ba đường cách đều"
    ],
    "h": "24cd6ea138b17"
   },
   {
    "k": "mc",
    "id": "bai20-q16",
    "q": "Robot hút bụi phải đi giữa hai dãy ghế. Vì sao nên chọn lối đi cách đều hai bên nhất?",
    "giai": "Giống lề rộng của SVM.",
    "a": [
     "Lệch một chút vẫn không va vào ghế",
     "Để đi nhanh gấp đôi bình thường",
     "Để đi ngang qua nhiều ghế hơn",
     "Để khỏi phải cần tới cảm biến"
    ],
    "h": "530818f1721d1"
   },
   {
    "k": "mc",
    "id": "bai20-q17",
    "q": "Xoá một điểm nằm rất xa đường ranh giới SVM. Đường thay đổi thế nào?",
    "giai": "Chỉ vector hỗ trợ quyết định đường.",
    "a": [
     "Gần như không thay đổi",
     "Dịch về phía điểm đó",
     "Xoay 90 độ",
     "Biến mất"
    ],
    "h": "128e39398758b6"
   },
   {
    "k": "mc",
    "id": "bai20-q18",
    "q": "Tăng tham số C của SVM rất lớn. Điều gì dễ xảy ra?",
    "giai": "C lớn phạt nặng điểm sai phía.",
    "a": [
     "Lề hẹp, bám sát dữ liệu",
     "Lề rộng hơn hẳn trước",
     "Model đoán ngẫu nhiên",
     "Không còn vector hỗ trợ"
    ],
    "h": "164245acc9fe1"
   },
   {
    "k": "mc",
    "id": "bai20-q19",
    "q": "Dữ liệu cột Thu nhập (triệu) và cột Tuổi. Trước SVM cần làm gì?",
    "giai": "Lề đo bằng khoảng cách.",
    "a": [
     "Đưa hai cột về cùng thang đo",
     "Xoá cột Thu nhập đi",
     "Chuyển Tuổi thành chữ",
     "Không cần làm gì cả"
    ],
    "h": "1f946d4b342059"
   },
   {
    "k": "ma",
    "id": "bai20-q20",
    "q": "Những phát biểu nào đúng về lề của SVM? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Lề rộng = an toàn.",
    "a": [
     "Là khoảng cách tới điểm gần nhất",
     "SVM chọn lề rộng nhất",
     "Đo theo chiều dọc như Bài 14",
     "Lề càng hẹp càng an toàn"
    ],
    "h": "1080cbbc13601b"
   },
   {
    "k": "ma",
    "id": "bai20-q21",
    "q": "Vector hỗ trợ có đặc điểm nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Chỉ những điểm sát lề.",
    "a": [
     "Nằm sát hoặc trong lề",
     "Quyết định vị trí đường",
     "Là tâm của mỗi nhóm",
     "Là mọi điểm của tập huấn luyện"
    ],
    "h": "147dfd8b633c0e"
   },
   {
    "k": "ma",
    "id": "bai20-q22",
    "q": "Kernel RBF dùng khi nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ranh giới cong.",
    "a": [
     "Dữ liệu cần ranh giới cong",
     "Hai nhóm lồng vào nhau",
     "Muốn bớt dữ liệu",
     "Muốn đọc luật NẾU… THÌ…"
    ],
    "h": "2dda687490601"
   },
   {
    "k": "ma",
    "id": "bai20-q23",
    "q": "Những bước nào cần khi dùng SVM tuyến tính? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Scale rồi fit.",
    "a": [
     "Đưa các cột về 0 – 1",
     "Fit SVC(kernel=\"linear\")",
     "Chọn K láng giềng",
     "Làm mịn Laplace"
    ],
    "h": "16574cc622873"
   },
   {
    "k": "sx",
    "id": "bai20-q24",
    "q": "Sắp xếp các bước SVM chọn đường.",
    "giai": "Xét → đo → chọn → vector hỗ trợ.",
    "a": [
     "Xét các đường tách được hai nhóm",
     "Đo khoảng cách tới điểm gần nhất",
     "Chọn đường có khoảng cách lớn nhất",
     "Ghi nhận các vector hỗ trợ"
    ],
    "h": "15e5a12497f394"
   },
   {
    "k": "sx",
    "id": "bai20-q25",
    "q": "Sắp xếp các bước dùng SVC trong scikit-learn.",
    "giai": "Chia → scale → fit → predict → so.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Fit MinMaxScaler trên tập huấn luyện",
     "Fit SVC",
     "Predict tập kiểm tra",
     "So với các model khác"
    ],
    "h": "12033fc7e4dc82"
   },
   {
    "k": "dd",
    "id": "bai20-q26",
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
    "h": "1566c92dc3718c"
   },
   {
    "k": "dd",
    "id": "bai20-q27",
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
      "91,7%",
      "54,2%",
      "100%",
      "95,8%"
     ]
    ],
    "h": "492ee20fa9829"
   },
   {
    "k": "dd",
    "id": "bai20-q28",
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
    "h": "877084d8ef9f"
   },
   {
    "k": "dd",
    "id": "bai20-q29",
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
    "h": "1f4678d1f7fac6"
   },
   {
    "k": "ds",
    "id": "bai20-q30",
    "q": "Chỉ các vector hỗ trợ quyết định vị trí đường của SVM.",
    "giai": "Điểm xa lề không ảnh hưởng.",
    "h": "77e31d27030ff"
   },
   {
    "k": "ds",
    "id": "bai20-q31",
    "q": "SVM không cần đưa các cột về cùng thang đo.",
    "giai": "Lề đo bằng khoảng cách.",
    "h": "1b1781852c71ab"
   },
   {
    "k": "ds",
    "id": "bai20-q32",
    "q": "Trên bảng khối 10, các model đã học chênh nhau rất nhiều.",
    "giai": "Chỉ vài bạn trên 72.",
    "h": "c5cc54aa1e3a1"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
