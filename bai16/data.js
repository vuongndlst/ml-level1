window.BAI = {
 "bai": 16,
 "ma": "bai16",
 "nhan": "Bài 16",
 "tieu_de": "Hồi quy logistic",
 "phan": "Module 09 · Regression Models",
 "cau_hoi": "Model nói “bạn này đạt với xác suất bao nhiêu” bằng cách nào?",
 "gioi_thieu": [
  "Bài 15 dự đoán một con số bằng đường thẳng. Hôm nay quay lại câu hỏi Đạt / Chưa đạt, nhưng model không phán ngay mà trả lời bằng <b>xác suất</b>.",
  "Năm chặng: vì sao đường thẳng hỏng với nhãn 0/1, đường cong sigmoid, đọc xác suất, ma trận nhầm lẫn, và tự chọn ngưỡng. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại: xác suất (Bài 5), đường thẳng y = a·x + b (Bài 15), bỏ sót và báo nhầm (Bài 14 – thực hành), mốc model lười (Bài 12)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai16",
 "muc_tieu": [
  "Giải thích được vì sao hồi quy tuyến tính không hợp với nhãn 0/1.",
  "Mô tả được hàm sigmoid biến mọi số thành xác suất từ 0 tới 1.",
  "Đọc được xác suất model trả về và quy tắc ngưỡng 0.5.",
  "Đọc được ma trận nhầm lẫn: bỏ sót và báo nhầm.",
  "Chọn ngưỡng theo kiểu sai mình chấp nhận được."
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
   "ten": "Đường thẳng hỏng với nhãn 0/1",
   "ten_ngan": "Đường thẳng hỏng",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao hồi quy tuyến tính không hợp với nhãn 0/1.",
   "khoi_dong": "Đổi Đạt = 1, Chưa đạt = 0 rồi kẻ đường thẳng của Bài 15. Có gì sai không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Đường thẳng đoán ra 1.21 và -0.13 — không phải xác suất nào",
     "alt": "Đường thẳng đoán ra 1.21 và -0.13 — không phải xác suất nào",
     "src": "img/duong-thang-tren-du-lieu-0-va-1.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đếm các dự đoán vô nghĩa",
     "de": null,
     "cot": [
      "Đường thẳng đoán",
      "Số bạn",
      "Vì sao vô nghĩa"
     ],
     "dong": [
      [
       "Lớn hơn 1",
       "45",
       "“Đạt 121%” — không có"
      ],
      [
       "Nhỏ hơn 0",
       "22",
       "“Đạt −13%” — không có"
      ]
     ],
     "ket_luan": "67 trên 240 bạn bị đoán ra con số không thể là xác suất.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Hồi quy tuyến tính và hồi quy logistic",
     "alt": "Hồi quy tuyến tính và hồi quy logistic",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216101013909567/logistic_regression_vs_linear_regression.webp",
     "du_phong": "img/minh-hoa-so-sanh-hoi-quy-tuyen-tinh-va-logistic.png",
     "nguon": {
      "ten": "GeeksforGeeks — Understanding logistic regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/understanding-logistic-regression/"
     },
     "chu_giai": [
      [
       "Predicts continuous values",
       "Dự đoán con số liên tục"
      ],
      [
       "Uses best-fit line",
       "Dùng đường thẳng khớp nhất"
      ],
      [
       "Predicts categorical classes",
       "Dự đoán nhãn"
      ],
      [
       "Uses sigmoid S-curve",
       "Dùng đường cong chữ S (sigmoid)"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Tên gọi dễ nhầm",
     "html": "Hồi quy logistic có chữ “hồi quy” nhưng dùng cho bài toán <b>phân loại</b>: nó dự đoán xác suất thuộc một nhãn."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ “hồi quy logistic” là bài toán hồi quy vì có chữ hồi quy.",
      "Dùng thẳng giá trị đường thẳng làm xác suất."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Nhãn 0/1 cần câu trả lời nằm trong 0 – 1; đường thẳng thì chạy ra ngoài."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Google Machine Learning Crash Course — Logistic regression",
       "url": "https://developers.google.com/machine-learning/crash-course/logistic-regression",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Google Machine Learning Crash Course — Thresholds and the confusion matrix",
       "url": "https://developers.google.com/machine-learning/crash-course/classification/thresholding",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Understanding Logistic Regression",
       "url": "https://www.geeksforgeeks.org/machine-learning/understanding-logistic-regression/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai16-q1",
     "q": "Vì sao đường thẳng không hợp để đoán Đạt (1) hay Chưa đạt (0)?",
     "giai": "45 bạn bị đoán > 1, 22 bạn < 0.",
     "goi_y": "Nhìn hai vùng tô đỏ trên hình.",
     "a": [
      "Nó đoán ra số lớn hơn 1 hoặc âm",
      "Nó chỉ dùng được một cột",
      "Nó không có hệ số chặn",
      "Nó luôn đoán đúng 50%"
     ],
     "h": "b8ac20d6f1102"
    },
    {
     "k": "ds",
     "id": "bai16-q2",
     "q": "Hồi quy logistic dùng cho bài toán phân loại.",
     "giai": "Nó dự đoán xác suất thuộc một nhãn.",
     "goi_y": "Cột cần dự đoán hôm nay là con số hay nhãn?",
     "h": "1f852b97e01674"
    }
   ]
  },
  {
   "ten": "Đường cong sigmoid",
   "ten_ngan": "Sigmoid",
   "phut": 5,
   "muc_tieu": "mô tả được hàm sigmoid biến mọi số thành xác suất từ 0 tới 1.",
   "khoi_dong": "Làm sao ép một đường thẳng chạy mãi lên, mãi xuống vào trong khoảng 0 – 1?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Hàm sigmoid",
     "html": "Nhận vào một số z bất kỳ, trả về một số nằm giữa 0 và 1. z rất lớn → gần 1; z rất âm → gần 0; z = 0 → đúng 0.5.",
     "ky_hieu": "sigmoid(z) = 1 / (1 + e<sup>−z</sup>), với z = a·x + b như Bài 15."
    },
    {
     "t": "anh",
     "cap": "Đường cong chữ S của hàm sigmoid",
     "alt": "Đường cong chữ S của hàm sigmoid",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251118174609019862/2.webp",
     "du_phong": "img/minh-hoa-ham-sigmoid.png",
     "nguon": {
      "ten": "GeeksforGeeks — Understanding logistic regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/understanding-logistic-regression/"
     },
     "chu_giai": [
      [
       "sig(t)",
       "sigmoid của t (t chính là z)"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Cùng dữ liệu: đường thẳng chạy khỏi 0 – 1, đường sigmoid luôn ở trong",
     "alt": "Cùng dữ liệu: đường thẳng chạy khỏi 0 – 1, đường sigmoid luôn ở trong",
     "src": "img/duong-thang-va-duong-sigmoid.png"
    },
    {
     "t": "demo_truot",
     "tieu_de": "xác suất Đạt theo giờ tự học",
     "huong_dan": "Kéo thanh trượt để đổi số giờ tự học mỗi ngày. Model logistic một cột trả về xác suất Đạt; ngưỡng 0.5 biến xác suất thành nhãn.",
     "dieu_kien": "Bạn tự học <b>{x}</b> giờ mỗi ngày",
     "moc": [
      {
       "x": 0.5,
       "n": "Chưa đạt",
       "p": 0.5
      },
      {
       "x": 1.0,
       "n": "Chưa đạt",
       "p": 1.3
      },
      {
       "x": 1.5,
       "n": "Chưa đạt",
       "p": 3.2
      },
      {
       "x": 2.0,
       "n": "Chưa đạt",
       "p": 7.6
      },
      {
       "x": 2.5,
       "n": "Chưa đạt",
       "p": 17.0
      },
      {
       "x": 3.0,
       "n": "Chưa đạt",
       "p": 33.7
      },
      {
       "x": 3.5,
       "n": "Đạt",
       "p": 55.7
      },
      {
       "x": 4.0,
       "n": "Đạt",
       "p": 75.7
      },
      {
       "x": 4.5,
       "n": "Đạt",
       "p": 88.5
      },
      {
       "x": 5.0,
       "n": "Đạt",
       "p": 95.0
      },
      {
       "x": 5.5,
       "n": "Đạt",
       "p": 97.9
      },
      {
       "x": 6.0,
       "n": "Đạt",
       "p": 99.2
      },
      {
       "x": 6.5,
       "n": "Đạt",
       "p": 99.7
      },
      {
       "x": 7.0,
       "n": "Đạt",
       "p": 99.9
      }
     ],
     "nhan_n": "Model đoán (ngưỡng 0.5)",
     "nhan_p": "Xác suất Đạt",
     "so_le_x": 1,
     "bat_dau": 5
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ sigmoid làm thay đổi thứ tự: giờ học nhiều hơn vẫn luôn có xác suất cao hơn.",
      "Quên rằng sigmoid(0) = 0.5."
     ]
    },
    {
     "t": "video",
     "yt": "yIYKR4sgzI8",
     "ten": "StatQuest — Logistic Regression",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Logistic = đường thẳng z = a·x + b, rồi đưa qua sigmoid để thành xác suất 0 – 1."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai16-q3",
     "q": "sigmoid(0) bằng bao nhiêu?",
     "giai": "Đúng giữa: 1 / (1 + 1) = 0.5.",
     "goi_y": "e mũ 0 bằng 1.",
     "a": [
      "0.5",
      "0",
      "1",
      "−1"
     ],
     "h": "12f5222cb1c8cb"
    },
    {
     "k": "mc",
     "id": "bai16-q4",
     "q": "Theo phần Tự thử, học bao nhiêu giờ thì model bắt đầu đoán Đạt?",
     "giai": "Xác suất vượt 0.5 khi học khoảng 3.37 giờ.",
     "goi_y": "Kéo tới lúc ô bên trái đổi từ Chưa đạt sang Đạt.",
     "a": [
      "Khoảng 3.5 giờ",
      "Khoảng 1.5 giờ",
      "Khoảng 5.5 giờ",
      "Khoảng 7 giờ"
     ],
     "h": "381d09be0611d"
    }
   ]
  },
  {
   "ten": "Đọc xác suất",
   "ten_ngan": "Xác suất",
   "phut": 4,
   "muc_tieu": "đọc được xác suất model trả về và quy tắc ngưỡng 0.5.",
   "khoi_dong": "Model nói “0.34”. Con hiểu câu đó thế nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Xác suất Đạt theo giờ tự học — 50% tại 3.37 giờ",
     "alt": "Xác suất Đạt theo giờ tự học — 50% tại 3.37 giờ",
     "src": "img/xac-suat-theo-gio-hoc.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc thành lời",
     "de": null,
     "cot": [
      "Giờ tự học",
      "Xác suất Đạt",
      "Đọc là"
     ],
     "dong": [
      [
       "2 giờ",
       "0.08",
       "Khoảng 8 trên 100 bạn như vậy Đạt"
      ],
      [
       "3 giờ",
       "0.34",
       "Khoảng 34 trên 100 bạn như vậy Đạt"
      ],
      [
       "4 giờ",
       "0.76",
       "Khoảng 76 trên 100 bạn như vậy Đạt"
      ]
     ],
     "ket_luan": "Xác suất không phải điểm số, cũng không phải lời phán chắc chắn.",
     "nhan_manh": []
    },
    {
     "t": "bang",
     "cot": [
      "Việc",
      "Lệnh"
     ],
     "dong": [
      [
       "Huấn luyện",
       "<code>model = LogisticRegression().fit(X_train_s, y_train)</code>"
      ],
      [
       "Xác suất từng nhãn",
       "<code>model.predict_proba(X_test_s)</code>"
      ],
      [
       "Nhãn (ngưỡng 0.5)",
       "<code>model.predict(X_test_s)</code>"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "model hai cột (đã đưa về 0 – 1)",
     "de": null,
     "cot": [
      "Model",
      "Độ chính xác trên tập kiểm tra"
     ],
     "dong": [
      [
       "Model lười",
       "54.2%"
      ],
      [
       "Logistic 1 cột (giờ học)",
       "93.1%"
      ],
      [
       "Logistic 2 cột (giờ học, phút mạng)",
       "<b>91.7%</b>"
      ]
     ],
     "ket_luan": "Hệ số giờ học dương (5.08), phút mạng âm (-1.89): học nhiều → xác suất Đạt tăng, lướt mạng nhiều → giảm.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đọc 0.34 thành “bạn ấy được 3.4 điểm”.",
      "Nghĩ xác suất 0.76 là chắc chắn Đạt."
     ]
    },
    {
     "t": "tom_tat",
     "html": "predict_proba cho xác suất; predict dùng ngưỡng 0.5 để ra nhãn."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai16-q5",
     "q": "Model trả về xác suất Đạt 0.34 cho một bạn. Cách hiểu nào đúng?",
     "giai": "Xác suất là khả năng, không phải điểm.",
     "goi_y": "Xác suất 0.34 = 34%. Của cái gì?",
     "a": [
      "Khoảng 34 trên 100 bạn như vậy Đạt",
      "Bạn ấy chắc chắn Chưa đạt",
      "Bạn ấy được 3.4 điểm",
      "Bạn ấy đúng 34% số câu"
     ],
     "h": "1bfa8b825cf14d"
    },
    {
     "k": "dd",
     "id": "bai16-q6",
     "q": "Chọn lệnh đúng cho mỗi chỗ trống.",
     "giai": "proba = probability = xác suất.",
     "goi_y": "Chữ proba là viết tắt của từ nào?",
     "mau": "Lệnh {0} trả về xác suất; lệnh {1} trả về nhãn theo ngưỡng 0.5.",
     "o": [
      [
       "predict_proba",
       "predict",
       "fit",
       "score"
      ],
      [
       "predict",
       "predict_proba",
       "fit",
       "coef_"
      ]
     ],
     "h": "fa4b1d0c9fd10"
    }
   ]
  },
  {
   "ten": "Ma trận nhầm lẫn",
   "ten_ngan": "Nhầm lẫn",
   "phut": 4,
   "muc_tieu": "đọc được ma trận nhầm lẫn và phân biệt bỏ sót với báo nhầm.",
   "khoi_dong": "Model đúng 91.7%. 6 bạn còn lại bị sai theo cùng một kiểu không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Bốn ô của 72 bạn tập kiểm tra",
     "alt": "Bốn ô của 72 bạn tập kiểm tra",
     "src": "img/ma-tran-nham-lan-cua-lop.png"
    },
    {
     "t": "bang",
     "cot": [
      "",
      "Model đoán Chưa đạt",
      "Model đoán Đạt"
     ],
     "dong": [
      [
       "Thật Chưa đạt",
       "<b>30</b> đúng",
       "<b>3</b> bỏ sót"
      ],
      [
       "Thật Đạt",
       "<b>3</b> báo nhầm",
       "<b>36</b> đúng"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Bỏ sót và báo nhầm — hai kiểu sai với cái giá khác nhau",
     "alt": "Bỏ sót và báo nhầm — hai kiểu sai với cái giá khác nhau",
     "src": "img/hai-kieu-sai-khac-nhau.png"
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nối với bài 14 (thực hành)",
     "html": "Ở Bài 14, bỏ sót là một khối u ác tính bị đoán lành tính. Ở đây, bỏ sót là một bạn đang đuối không được thầy cô để ý hỗ trợ."
    },
    {
     "t": "anh",
     "cap": "Ma trận nhầm lẫn của một model khác (GfG)",
     "alt": "Ma trận nhầm lẫn của một model khác (GfG)",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260314101951023240/Screenshot-2026-03-14-101930.png",
     "du_phong": "img/minh-hoa-ma-tran-nham-lan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Xgboost",
      "url": "https://www.geeksforgeeks.org/machine-learning/xgboost/"
     },
     "chu_giai": [
      [
       "Confusion Matrix",
       "Ma trận nhầm lẫn"
      ],
      [
       "Actual",
       "Nhãn thật"
      ],
      [
       "Predicted",
       "Nhãn model đoán"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đọc nhầm hàng và cột: hàng là nhãn thật, cột là nhãn đoán.",
      "Chỉ báo độ chính xác, không nói model sai kiểu nào."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Đường chéo là đoán đúng; hai ô còn lại là hai kiểu sai: bỏ sót và báo nhầm."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai16-q7",
     "q": "Trong bảng của lớp, bao nhiêu bạn Chưa đạt bị model đoán là Đạt?",
     "giai": "Ô bỏ sót: thật Chưa đạt, đoán Đạt.",
     "goi_y": "Tìm hàng “Thật Chưa đạt”, cột “đoán Đạt”.",
     "a": [
      "3",
      "30",
      "36",
      "0"
     ],
     "h": "eee215252688c"
    },
    {
     "k": "ds",
     "id": "bai16-q8",
     "q": "Trên đường chéo của ma trận nhầm lẫn là các lần model đoán đúng.",
     "giai": "Nhãn thật trùng nhãn đoán.",
     "goi_y": "Ô nào có hàng và cột cùng một nhãn?",
     "h": "cf3723d05f15e"
    }
   ]
  },
  {
   "ten": "Chọn ngưỡng",
   "ten_ngan": "Ngưỡng",
   "phut": 5,
   "muc_tieu": "chọn ngưỡng theo kiểu sai mình chấp nhận được.",
   "khoi_dong": "Ngưỡng 0.5 do máy đặt sẵn. Thầy chủ nhiệm muốn không bỏ sót bạn nào — nên đổi ngưỡng thế nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Quy tắc: xác suất Đạt ≥ ngưỡng → đoán Đạt; nhỏ hơn → đoán Chưa đạt. Nâng ngưỡng lên thì model khó đoán Đạt hơn — nhiều bạn bị gắn cờ Chưa đạt hơn."
    },
    {
     "t": "nguong_nham_lan",
     "tieu_de": "kéo ngưỡng, xem ai bị đoán sai",
     "huong_dan": "Mỗi chấm là một bạn trong 72 bạn tập kiểm tra, đặt theo xác suất Đạt model đưa ra. Chấm viền đỏ là bạn bị đoán sai. Kéo ngưỡng: ô <b>bỏ sót</b> và ô <b>báo nhầm</b> đổi chỗ cho nhau thế nào? Tìm ngưỡng không bỏ sót bạn nào.",
     "moc": [
      {
       "t": 0.1,
       "acc": 59.7,
       "bo_sot": 29,
       "bao_nham": 0
      },
      {
       "t": 0.15,
       "acc": 69.4,
       "bo_sot": 22,
       "bao_nham": 0
      },
      {
       "t": 0.2,
       "acc": 77.8,
       "bo_sot": 16,
       "bao_nham": 0
      },
      {
       "t": 0.25,
       "acc": 83.3,
       "bo_sot": 12,
       "bao_nham": 0
      },
      {
       "t": 0.3,
       "acc": 90.3,
       "bo_sot": 7,
       "bao_nham": 0
      },
      {
       "t": 0.35,
       "acc": 90.3,
       "bo_sot": 7,
       "bao_nham": 0
      },
      {
       "t": 0.4,
       "acc": 91.7,
       "bo_sot": 5,
       "bao_nham": 1
      },
      {
       "t": 0.45,
       "acc": 93.1,
       "bo_sot": 3,
       "bao_nham": 2
      },
      {
       "t": 0.5,
       "acc": 91.7,
       "bo_sot": 3,
       "bao_nham": 3
      },
      {
       "t": 0.55,
       "acc": 91.7,
       "bo_sot": 1,
       "bao_nham": 5
      },
      {
       "t": 0.6,
       "acc": 87.5,
       "bo_sot": 0,
       "bao_nham": 9
      },
      {
       "t": 0.65,
       "acc": 81.9,
       "bo_sot": 0,
       "bao_nham": 13
      },
      {
       "t": 0.7,
       "acc": 80.6,
       "bo_sot": 0,
       "bao_nham": 14
      },
      {
       "t": 0.75,
       "acc": 76.4,
       "bo_sot": 0,
       "bao_nham": 17
      },
      {
       "t": 0.8,
       "acc": 72.2,
       "bo_sot": 0,
       "bao_nham": 20
      },
      {
       "t": 0.85,
       "acc": 69.4,
       "bo_sot": 0,
       "bao_nham": 22
      },
      {
       "t": 0.9,
       "acc": 63.9,
       "bo_sot": 0,
       "bao_nham": 26
      }
     ],
     "bat_dau": 8,
     "xac_suat": [
      0.8058,
      0.8736,
      0.9477,
      0.9161,
      0.3575,
      0.5313,
      0.3942,
      0.4912,
      0.5453,
      0.0918,
      0.1976,
      0.2108,
      0.1331,
      0.9327,
      0.8064,
      0.2508,
      0.0947,
      0.2833,
      0.7839,
      0.6188,
      0.1379,
      0.1983,
      0.1605,
      0.9636,
      0.2429,
      0.7212,
      0.0815,
      0.8752,
      0.7602,
      0.6885,
      0.7022,
      0.5843,
      0.9372,
      0.9573,
      0.4426,
      0.1195,
      0.2919,
      0.4246,
      0.6116,
      0.7672,
      0.883,
      0.9243,
      0.2445,
      0.1678,
      0.9073,
      0.7465,
      0.1794,
      0.1808,
      0.1285,
      0.114,
      0.892,
      0.5322,
      0.4348,
      0.1124,
      0.5506,
      0.5984,
      0.2607,
      0.2874,
      0.9509,
      0.9181,
      0.5173,
      0.1191,
      0.6022,
      0.5813,
      0.6211,
      0.9335,
      0.3746,
      0.5888,
      0.09,
      0.9006,
      0.9209,
      0.213
     ],
     "nhan": [
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Fail",
      "Pass",
      "Fail",
      "Pass",
      "Fail",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Pass",
      "Fail",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Fail",
      "Fail",
      "Pass",
      "Pass",
      "Pass",
      "Pass",
      "Fail",
      "Pass",
      "Fail",
      "Pass",
      "Pass",
      "Fail"
     ],
     "nhan_duong": "Pass",
     "nhan_am": "Fail",
     "ten_duong": "Đạt",
     "ten_am": "Chưa đạt",
     "tong_am": 33,
     "tong_duong": 39,
     "ghi": "Xác suất do LogisticRegression (hai cột, đã đưa về 0 – 1) tính trên tập kiểm tra; các con số trong ma trận đếm sẵn cho từng ngưỡng."
    },
    {
     "t": "anh",
     "cap": "Ngưỡng càng cao: bỏ sót càng ít, báo nhầm càng nhiều",
     "alt": "Ngưỡng càng cao: bỏ sót càng ít, báo nhầm càng nhiều",
     "src": "img/bo-sot-va-bao-dong-nham-theo-nguong.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "ba ngưỡng",
     "de": null,
     "cot": [
      "Ngưỡng",
      "Bỏ sót",
      "Báo nhầm",
      "Độ chính xác"
     ],
     "dong": [
      [
       "0.30",
       "7",
       "0",
       "90.3%"
      ],
      [
       "0.50",
       "3",
       "3",
       "91.7%"
      ],
      [
       "0.60",
       "0",
       "9",
       "87.5%"
      ]
     ],
     "ket_luan": "Ngưỡng 0.6: không bỏ sót ai, đổi lại 9 bạn bị báo nhầm và độ chính xác giảm.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Chọn ngưỡng là việc của con người",
     "html": "Máy chỉ đưa xác suất. Chọn ngưỡng nghĩa là chọn mình chịu kiểu sai nào: gọi nhầm một bạn ổn đi phụ đạo (báo nhầm) hay bỏ quên một bạn đang đuối (bỏ sót)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Luôn chọn ngưỡng có độ chính xác cao nhất mà không hỏi hai kiểu sai.",
      "Nghĩ ngưỡng phải luôn là 0.5."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Đổi ngưỡng: bỏ sót và báo nhầm đổi chỗ cho nhau. Chọn theo cái giá của từng kiểu sai."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai16-q9",
     "q": "Theo phần Tự thử, ngưỡng nhỏ nhất để không bỏ sót bạn nào là bao nhiêu?",
     "giai": "Từ ngưỡng này, ô bỏ sót bằng 0.",
     "goi_y": "Kéo dần sang phải tới khi số bỏ sót về 0.",
     "a": [
      "0.60",
      "0.50",
      "0.30",
      "0.90"
     ],
     "h": "a596c94e9a838"
    },
    {
     "k": "ma",
     "id": "bai16-q10",
     "q": "Nâng ngưỡng từ 0.5 lên 0.7. Hai điều nào xảy ra? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Hai kiểu sai đổi chỗ cho nhau.",
     "goi_y": "Ngưỡng cao hơn thì model dễ đoán Chưa đạt hơn hay khó hơn?",
     "a": [
      "Bỏ sót ít đi",
      "Báo nhầm nhiều lên",
      "Bỏ sót nhiều lên",
      "Độ chính xác luôn tăng"
     ],
     "h": "1034e2a3012a5f"
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
    "id": "bai16-q11",
    "q": "Nhìn hình. Vùng tô đỏ phía trên cho biết điều gì?",
    "giai": "Xác suất không thể lớn hơn 1.",
    "img": {
     "src": "img/duong-thang-tren-du-lieu-0-va-1.png"
    },
    "a": [
     "Đường thẳng đoán ra số lớn hơn 1",
     "Các bạn học nhiều nhất lớp",
     "Các bạn Chưa đạt học kỳ",
     "Đường sigmoid đi qua đó"
    ],
    "h": "15c43d809da3de"
   },
   {
    "k": "mc",
    "id": "bai16-q12",
    "q": "Nhìn hình. Đường cong xanh khác đường thẳng vàng ở điểm nào?",
    "giai": "Sigmoid ép mọi giá trị vào 0 – 1.",
    "img": {
     "src": "img/duong-thang-va-duong-sigmoid.png"
    },
    "a": [
     "Luôn nằm trong khoảng 0 – 1",
     "Dốc hơn ở mọi điểm",
     "Đi qua gốc toạ độ",
     "Chỉ dùng cho hồi quy"
    ],
    "h": "f670cf854ab80"
   },
   {
    "k": "mc",
    "id": "bai16-q13",
    "q": "Nhìn hình. Học 4 giờ mỗi ngày, xác suất Đạt khoảng bao nhiêu?",
    "giai": "Đọc điểm tại 4 giờ.",
    "img": {
     "src": "img/xac-suat-theo-gio-hoc.png"
    },
    "a": [
     "0.76",
     "0.34",
     "0.95",
     "0.08"
    ],
    "h": "e3a3cf6363774"
   },
   {
    "k": "mc",
    "id": "bai16-q14",
    "q": "Nhìn hình. Ô có số 3 màu đỏ nhạt là loại gì?",
    "giai": "Thật Chưa đạt nhưng đoán Đạt.",
    "img": {
     "src": "img/ma-tran-nham-lan-cua-lop.png"
    },
    "a": [
     "Bỏ sót",
     "Báo nhầm",
     "Đoán đúng Đạt",
     "Đoán đúng Chưa đạt"
    ],
    "h": "17f91aa5909967"
   },
   {
    "k": "mc",
    "id": "bai16-q15",
    "q": "Nhìn hình. Ở ngưỡng 0.7 có bao nhiêu bạn bị báo nhầm?",
    "giai": "Cột vàng tại ngưỡng 0.7.",
    "img": {
     "src": "img/bo-sot-va-bao-dong-nham-theo-nguong.png"
    },
    "a": [
     "14",
     "3",
     "9",
     "0"
    ],
    "h": "1ce51882eb3ae1"
   },
   {
    "k": "mc",
    "id": "bai16-q16",
    "q": "Model dự báo mưa trả về 0.8. Cách nói nào đúng?",
    "giai": "Xác suất là khả năng.",
    "a": [
     "Khả năng mưa khoảng 80%",
     "Chắc chắn sẽ mưa to",
     "Mưa trong 80 phút",
     "80% diện tích sẽ mưa"
    ],
    "h": "149e7ecbcc3959"
   },
   {
    "k": "mc",
    "id": "bai16-q17",
    "q": "Trường muốn gọi phụ đạo mọi bạn có nguy cơ, chấp nhận gọi nhầm vài bạn. Nên chỉnh ngưỡng xác suất Đạt thế nào?",
    "giai": "Ngưỡng cao → ít bỏ sót.",
    "a": [
     "Nâng ngưỡng lên cao hơn 0.5",
     "Hạ ngưỡng xuống dưới 0.5",
     "Giữ đúng ngưỡng 0.5",
     "Bỏ ngưỡng, dùng đường thẳng"
    ],
    "h": "1c6b73fb0fc6a6"
   },
   {
    "k": "mc",
    "id": "bai16-q18",
    "q": "Ô báo nhầm trong ma trận nhầm lẫn của bài là gì?",
    "giai": "Báo nhầm: báo động sai cho bạn ổn.",
    "a": [
     "Bạn thật Đạt bị đoán Chưa đạt",
     "Bạn thật Chưa đạt bị đoán Đạt",
     "Bạn Đạt được đoán Đạt",
     "Bạn Chưa đạt được đoán Chưa đạt"
    ],
    "h": "1f82988d656f8e"
   },
   {
    "k": "mc",
    "id": "bai16-q19",
    "q": "Hệ số của PhutMangXH trong model hai cột âm. Nghĩa là gì?",
    "giai": "Dấu âm: cột tăng thì xác suất giảm.",
    "a": [
     "Lướt mạng nhiều → xác suất Đạt giảm",
     "Lướt mạng nhiều → xác suất Đạt tăng",
     "Phút mạng không ảnh hưởng gì",
     "Model bị lỗi dấu"
    ],
    "h": "38e6b3c74b3af"
   },
   {
    "k": "ma",
    "id": "bai16-q20",
    "q": "Những phát biểu nào đúng về hàm sigmoid? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đường cong chữ S, từ 0 tới 1.",
    "a": [
     "Kết quả luôn nằm giữa 0 và 1",
     "sigmoid(0) = 0.5",
     "Kết quả có thể lớn hơn 1",
     "sigmoid là đường thẳng"
    ],
    "h": "167a48ee7c87e4"
   },
   {
    "k": "ma",
    "id": "bai16-q21",
    "q": "Những lệnh nào dùng trong bài? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Logistic và xác suất.",
    "a": [
     "LogisticRegression",
     "predict_proba",
     "KNeighborsClassifier",
     "LinearRegression"
    ],
    "h": "b7b4a12f86227"
   },
   {
    "k": "ma",
    "id": "bai16-q22",
    "q": "Hai ô nào là hai kiểu sai trong ma trận nhầm lẫn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hai ô ngoài đường chéo.",
    "a": [
     "Bỏ sót",
     "Báo nhầm",
     "Đúng Đạt",
     "Đúng Chưa đạt"
    ],
    "h": "170d03fcdbc932"
   },
   {
    "k": "ma",
    "id": "bai16-q23",
    "q": "Hạ ngưỡng từ 0.5 xuống 0.3. Hai điều nào xảy ra? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ngưỡng thấp → dễ đoán Đạt.",
    "a": [
     "Bỏ sót nhiều lên",
     "Báo nhầm ít đi",
     "Bỏ sót về 0",
     "Báo nhầm nhiều lên"
    ],
    "h": "121f8b3fb5245c"
   },
   {
    "k": "sx",
    "id": "bai16-q24",
    "q": "Sắp xếp các bước model logistic dự đoán một bạn mới.",
    "giai": "Thẳng → sigmoid → xác suất → ngưỡng.",
    "a": [
     "Tính z = a·x + b",
     "Đưa z qua hàm sigmoid",
     "Được xác suất Đạt",
     "So với ngưỡng để ra nhãn"
    ],
    "h": "d53e16912e4bf"
   },
   {
    "k": "sx",
    "id": "bai16-q25",
    "q": "Sắp xếp các bước dùng LogisticRegression trong scikit-learn.",
    "giai": "Chia → scale → fit → xác suất → đánh giá.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Đưa các cột về 0 – 1",
     "Fit LogisticRegression",
     "predict_proba trên tập kiểm tra",
     "Lập ma trận nhầm lẫn"
    ],
    "h": "105d1341b0ca68"
   },
   {
    "k": "dd",
    "id": "bai16-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Phân loại bằng xác suất.",
    "mau": "Hồi quy logistic dùng cho bài toán {0}; nó trả về {1}.",
    "o": [
     [
      "phân loại",
      "hồi quy",
      "gom nhóm",
      "làm sạch"
     ],
     [
      "xác suất",
      "điểm số",
      "khoảng cách",
      "số láng giềng"
     ]
    ],
    "h": "fcb79a78644ce"
   },
   {
    "k": "dd",
    "id": "bai16-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Hai ô ngoài đường chéo.",
    "mau": "Ở ngưỡng 0.5 model bỏ sót {0} bạn và báo nhầm {1} bạn.",
    "o": [
     [
      "3",
      "9",
      "30",
      "0"
     ],
     [
      "3",
      "14",
      "36",
      "1"
     ]
    ],
    "h": "3235dc0915cc7"
   },
   {
    "k": "dd",
    "id": "bai16-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hàng thật, cột đoán.",
    "mau": "Trong ma trận nhầm lẫn, hàng là nhãn {0}, cột là nhãn {1}.",
    "o": [
     [
      "thật",
      "đoán",
      "trung bình",
      "ngẫu nhiên"
     ],
     [
      "model đoán",
      "thật",
      "trung bình",
      "ngẫu nhiên"
     ]
    ],
    "h": "58759f8f88e39"
   },
   {
    "k": "dd",
    "id": "bai16-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc từ đường sigmoid và bảng kết quả.",
    "mau": "Học {0} giờ thì xác suất Đạt khoảng 50%; model hai cột đúng {1} trên tập kiểm tra.",
    "o": [
     [
      "3.37",
      "2.00",
      "5.00",
      "6.00"
     ],
     [
      "91.7%",
      "54.2%",
      "100%",
      "50.0%"
     ]
    ],
    "h": "107dc360a0fb0f"
   },
   {
    "k": "ds",
    "id": "bai16-q30",
    "q": "Hồi quy logistic là thuật toán cho bài toán hồi quy.",
    "giai": "Tên có chữ hồi quy nhưng dùng cho phân loại.",
    "h": "c5346b2497a02"
   },
   {
    "k": "ds",
    "id": "bai16-q31",
    "q": "Đổi ngưỡng có thể làm giảm bỏ sót nhưng tăng báo nhầm.",
    "giai": "Hai kiểu sai đổi chỗ cho nhau.",
    "h": "486ad440d38af"
   },
   {
    "k": "ds",
    "id": "bai16-q32",
    "q": "Xác suất 0.76 nghĩa là bạn đó chắc chắn Đạt.",
    "giai": "Khoảng 76 trên 100 bạn như vậy Đạt.",
    "h": "12c1328b45a258"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
