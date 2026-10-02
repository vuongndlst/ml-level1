window.BAI = {
 "bai": 25,
 "ma": "bai25",
 "nhan": "Bài 25",
 "tieu_de": "Chọn model nào?",
 "phan": "Module 12 · Evaluating Models",
 "cau_hoi": "Có model nào tốt nhất cho mọi bài toán không?",
 "gioi_thieu": [
  "Con đã xây sáu model phân loại và một model hồi quy. Bài này không có thuật toán mới: con <b>xếp lại</b> chúng thành một bản đồ và học cách <b>chọn</b> model theo mục đích.",
  "Năm chặng: bản đồ các model, tiêu chí ngoài độ chính xác, so sánh thực nghiệm, chọn theo tình huống, và quy trình làm một dự án trọn vẹn. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại toàn bộ Bài 12 – 24, đặc biệt kiểm định chéo (Bài 24)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai25",
 "muc_tieu": [
  "Xếp các model đã học theo cách chúng “nghĩ”.",
  "Nêu được các tiêu chí chọn model ngoài độ chính xác.",
  "Đọc được bảng so sánh các model bằng kiểm định chéo.",
  "Chọn và bảo vệ được một model cho một tình huống cụ thể.",
  "Trình bày lại quy trình trọn vẹn của một dự án học có giám sát."
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
   "ten": "Bản đồ các model",
   "ten_ngan": "Bản đồ",
   "phut": 4,
   "muc_tieu": "xếp các model đã học theo cách chúng “nghĩ”.",
   "khoi_dong": "Kể tên các model con đã học từ Bài 13. Chúng giống nhau ở điểm nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Bốn cách “nghĩ” của các model đã học",
     "alt": "Bốn cách “nghĩ” của các model đã học",
     "src": "img/ban-do-cac-model-da-hoc.png"
    },
    {
     "t": "bang",
     "cot": [
      "Cách nghĩ",
      "Model",
      "Ghi nhớ"
     ],
     "dong": [
      [
       "Đo khoảng cách",
       "KNN, SVM",
       "Cần đưa về cùng thang đo"
      ],
      [
       "Vẽ đường / xác suất",
       "Hồi quy tuyến tính, logistic",
       "Đọc được hệ số a, b"
      ],
      [
       "Hỏi câu Có / Không",
       "Cây quyết định, Random Forest",
       "Cây đọc được luật"
      ],
      [
       "Đếm rồi nhân",
       "Naïve Bayes",
       "Rất nhanh, cần ít dữ liệu"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Điều không đổi",
     "html": "Model nào cũng đi qua cùng quy trình 5 bước của Bài 12: dữ liệu → chia → huấn luyện → dự đoán → đánh giá. Thuật toán khác nhau, quy trình như nhau."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ hồi quy tuyến tính dùng cho bài Đạt / Chưa đạt — nó dự đoán con số.",
      "Nghĩ Random Forest là một cách nghĩ riêng — nó là nhiều cây quyết định."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Bốn cách nghĩ: khoảng cách · đường / xác suất · câu hỏi Có / Không · đếm rồi nhân."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q1",
     "q": "Model nào thuộc nhóm “đo khoảng cách”?",
     "giai": "KNN hỏi các láng giềng gần nhất.",
     "goi_y": "Model nào cần đưa về cùng thang đo?",
     "a": [
      "KNN",
      "Naïve Bayes",
      "Cây quyết định",
      "Hồi quy logistic"
     ],
     "h": "adcc9f17a4a1f"
    },
    {
     "k": "ds",
     "id": "bai25-q2",
     "q": "Mọi model đã học đều dùng chung quy trình 5 bước.",
     "giai": "Chỉ đổi dòng gọi thuật toán.",
     "goi_y": "Nhớ lại Bài 12.",
     "h": "59d980f0e5099"
    }
   ]
  },
  {
   "ten": "Không chỉ độ chính xác",
   "ten_ngan": "Tiêu chí",
   "phut": 4,
   "muc_tieu": "nêu được các tiêu chí chọn model ngoài độ chính xác.",
   "khoi_dong": "Hai model cùng đúng 90%. Con còn muốn biết gì trước khi chọn?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Tiêu chí",
      "Câu hỏi cần đặt",
      "Model mạnh ở tiêu chí này"
     ],
     "dong": [
      [
       "Giải thích được",
       "Có phải nói lý do bằng lời?",
       "Cây quyết định nông"
      ],
      [
       "Cho xác suất",
       "Cần chỉnh ngưỡng cảnh báo?",
       "Logistic"
      ],
      [
       "Tốc độ",
       "Dữ liệu rất lớn, cần trả lời ngay?",
       "Naïve Bayes, logistic"
      ],
      [
       "Kiểu sai",
       "Bỏ sót hay báo nhầm nguy hiểm hơn?",
       "Đo bằng bảng nhầm lẫn"
      ],
      [
       "Ổn định",
       "Kết quả có nhảy khi dữ liệu đổi?",
       "Random Forest"
      ]
     ]
    },
    {
     "t": "can_tieu_chi",
     "tieu_de": "con ưu tiên điều gì?",
     "huong_dan": "Kéo mức ưu tiên cho từng tiêu chí. Xếp hạng sáu model đổi theo. <b>Thử:</b> đặt “giải thích được” là rất quan trọng (ngân hàng), rồi đặt “ít bỏ sót” là rất quan trọng (phát hiện bạn đang đuối).",
     "tieu_chi": [
      {
       "ten": "Độ chính xác",
       "khoa": "acc",
       "kieu": "phan_tram",
       "mac_dinh": 2
      },
      {
       "ten": "Ít bỏ sót",
       "cot": "Số bạn bị bỏ sót",
       "khoa": "bo_sot",
       "kieu": "so",
       "cang_nho_cang_tot": true,
       "mac_dinh": 1
      },
      {
       "ten": "Dự đoán nhanh",
       "cot": "Thời gian dự đoán",
       "khoa": "dd",
       "kieu": "giay",
       "cang_nho_cang_tot": true,
       "mac_dinh": 1
      },
      {
       "ten": "Giải thích được",
       "khoa": "gt",
       "kieu": "sao",
       "mac_dinh": 1
      }
     ],
     "model": {
      "KNN (K = 3)": {
       "acc": 90.8,
       "bo_sot": 11,
       "dd": 0.4547,
       "gt": 1
      },
      "Logistic": {
       "acc": 90.4,
       "bo_sot": 12,
       "dd": 0.0008,
       "gt": 2
      },
      "Cây sâu 2": {
       "acc": 89.6,
       "bo_sot": 9,
       "dd": 0.0005,
       "gt": 3
      },
      "Naïve Bayes": {
       "acc": 90.8,
       "bo_sot": 10,
       "dd": 0.0009,
       "gt": 2
      },
      "SVM": {
       "acc": 90.8,
       "bo_sot": 13,
       "dd": 0.3863,
       "gt": 1
      },
      "Rừng 100 cây": {
       "acc": 90.8,
       "bo_sot": 11,
       "dd": 0.0465,
       "gt": 1
      }
     },
     "ghi": "Độ chính xác và số bạn bị bỏ sót: kiểm định chéo 5 phần trên 240 bạn (mô phỏng). Tốc độ dự đoán: đo trên 20 000 dòng mô phỏng (máy khác sẽ ra số khác). Giải thích được: đánh giá định tính 1 – 3 sao theo bài học — không phải số đo."
    },
    {
     "t": "dinh_nghia",
     "ten": "Không có model tốt nhất",
     "html": "Chỉ có model <b>phù hợp</b> với bài toán, với dữ liệu, và với người phải đọc kết quả.",
     "ky_hieu": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chỉ nhìn độ chính xác rồi chọn.",
      "Chọn model phức tạp nhất vì nghe “xịn” hơn."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Chọn model: độ chính xác + giải thích + xác suất + tốc độ + kiểu sai + ổn định."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q3",
     "q": "Ngân hàng phải nói cho khách lý do từ chối vay. Tiêu chí nào quan trọng nhất?",
     "giai": "Khách có quyền biết lý do.",
     "goi_y": "Khách hỏi “vì sao?” thì model cần gì?",
     "a": [
      "Giải thích được bằng lời",
      "Huấn luyện nhanh nhất",
      "Chạy được trên điện thoại",
      "Có nhiều tham số nhất"
     ],
     "h": "10a0d4c78aeb16"
    },
    {
     "k": "ma",
     "id": "bai25-q4",
     "q": "Hai tiêu chí nào KHÔNG phải độ chính xác? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Tiêu chí khác.",
     "goi_y": "Xem bảng tiêu chí.",
     "a": [
      "Tốc độ dự đoán",
      "Giải thích được",
      "Tỉ lệ đoán đúng",
      "Số bạn đoán đúng"
     ],
     "h": "1604d5131dc5c1"
    }
   ]
  },
  {
   "ten": "So sánh bằng thực nghiệm",
   "ten_ngan": "Thực nghiệm",
   "phut": 5,
   "muc_tieu": "đọc được bảng so sánh các model bằng kiểm định chéo.",
   "khoi_dong": "Sáu model trên cùng bảng khối 10, đo bằng kiểm định chéo. Ai thắng?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Kiểm định chéo 5 phần: độ chính xác và số bạn bị bỏ sót",
     "alt": "Kiểm định chéo 5 phần: độ chính xác và số bạn bị bỏ sót",
     "src": "img/sau-model-dung-va-bo-sot.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "bảng lớp",
     "de": null,
     "cot": [
      "Model",
      "Đúng",
      "Bỏ sót",
      "Báo nhầm"
     ],
     "dong": [
      [
       "KNN (K = 3)",
       "90.8%",
       "11",
       "11"
      ],
      [
       "Logistic",
       "90.4%",
       "12",
       "11"
      ],
      [
       "Cây sâu 2",
       "89.6%",
       "9",
       "16"
      ],
      [
       "Naïve Bayes",
       "90.8%",
       "10",
       "12"
      ],
      [
       "SVM",
       "90.8%",
       "13",
       "9"
      ],
      [
       "Rừng 100 cây",
       "90.8%",
       "11",
       "11"
      ]
     ],
     "ket_luan": "Độ chính xác chỉ chênh 1.2 điểm; bỏ sót từ 9 tới 13 bạn. Trên bảng này, các model gần như ngang nhau.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Trên dữ liệu mô phỏng 20 000 dòng: tốc độ chênh hàng trăm lần",
     "alt": "Trên dữ liệu mô phỏng 20 000 dòng: tốc độ chênh hàng trăm lần",
     "src": "img/toc-do-huan-luyen-va-du-doan.png"
    },
    {
     "t": "p",
     "html": "Tốc độ thì khác xa: Naïve Bayes huấn luyện nhanh nhất, Rừng 100 cây chậm nhất; KNN (K = 3) dự đoán chậm nhất vì phải đo tới mọi điểm cũ."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Kết luận model tốt nhất từ chênh lệch nhỏ hơn độ dao động.",
      "Đo thời gian trên dữ liệu 240 dòng rồi suy cho dữ liệu lớn."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Khi độ chính xác ngang nhau, các tiêu chí khác quyết định."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q5",
     "q": "Theo bảng, model nào bỏ sót ít bạn Chưa đạt nhất?",
     "giai": "9 bạn.",
     "goi_y": "Tìm số nhỏ nhất ở cột Bỏ sót.",
     "a": [
      "Cây sâu 2",
      "SVM",
      "Logistic",
      "Rừng 100 cây"
     ],
     "h": "18d11cb56951ca"
    },
    {
     "k": "dd",
     "id": "bai25-q6",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "Chênh chưa tới 2 điểm.",
     "goi_y": "Đọc cột “Đúng”.",
     "mau": "Độ chính xác các model từ {0} tới {1}.",
     "o": [
      [
       "89.6%",
       "90.8%",
       "50.0%",
       "100%"
      ],
      [
       "90.8%",
       "89.6%",
       "100%",
       "75.0%"
      ]
     ],
     "h": "f795ed769647c"
    }
   ]
  },
  {
   "ten": "Chọn theo tình huống",
   "ten_ngan": "Tình huống",
   "phut": 5,
   "muc_tieu": "chọn và bảo vệ được một model cho một tình huống cụ thể.",
   "khoi_dong": "Cùng dữ liệu, bốn người dùng khác nhau có chọn cùng một model không?",
   "khoi": [
    {
     "t": "demo_tung_buoc",
     "tieu_de": "chọn model cho bốn tình huống",
     "huong_dan": "Chọn một tình huống, bấm “Bước tiếp” để đi qua từng câu hỏi.",
     "nhan_chon": "Tình huống",
     "cot": [
      "#",
      "Câu hỏi",
      "Trả lời"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Bệnh viện cần giải thích cho bệnh nhân",
       "dong": [
        [
         "1",
         "Có phải giải thích lý do bằng lời không?",
         "Có — bác sĩ phải nói được vì sao"
        ],
        [
         "2",
         "Model nào đọc được luật NẾU… THÌ…?",
         "Cây quyết định (nông)"
        ],
        [
         "3",
         "Cần giảm bỏ sót người bệnh?",
         "Đo bảng nhầm lẫn; cây sâu 2 bỏ sót ít nhất ở bảng lớp"
        ],
        [
         "→",
         "Gợi ý",
         "<b>Cây quyết định nông</b>, kiểm tra bằng kiểm định chéo"
        ]
       ]
      },
      {
       "nhan": "Lọc hàng triệu tin nhắn mỗi giây",
       "dong": [
        [
         "1",
         "Có phải giải thích từng tin không?",
         "Không bắt buộc"
        ],
        [
         "2",
         "Tốc độ quan trọng tới đâu?",
         "Rất quan trọng — huấn luyện và dự đoán phải nhanh"
        ],
        [
         "3",
         "Dữ liệu dạng đếm từ?",
         "Có — hợp với đếm rồi nhân"
        ],
        [
         "→",
         "Gợi ý",
         "<b>Naïve Bayes</b>; tránh KNN (dự đoán chậm khi dữ liệu lớn)"
        ]
       ]
      },
      {
       "nhan": "Thầy chủ nhiệm muốn chỉnh mức cảnh báo",
       "dong": [
        [
         "1",
         "Cần xác suất, không chỉ nhãn?",
         "Có — để chọn ngưỡng cảnh báo"
        ],
        [
         "2",
         "Cần đọc cột nào kéo lên, kéo xuống?",
         "Có — hệ số dương / âm"
        ],
        [
         "3",
         "Dữ liệu vừa phải, ranh giới gần thẳng?",
         "Có"
        ],
        [
         "→",
         "Gợi ý",
         "<b>Hồi quy logistic</b>, chỉnh ngưỡng như Bài 16"
        ]
       ]
      },
      {
       "nhan": "Cần đúng nhất, không cần giải thích",
       "dong": [
        [
         "1",
         "Có phải giải thích bằng lời không?",
         "Không"
        ],
        [
         "2",
         "Dữ liệu có nhiều cột hữu ích?",
         "Có"
        ],
        [
         "3",
         "Chấp nhận huấn luyện chậm hơn?",
         "Có"
        ],
        [
         "→",
         "Gợi ý",
         "<b>Random Forest</b> (thử thêm KNN, SVM); so bằng kiểm định chéo"
        ]
       ]
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Bảo vệ lựa chọn bằng 3 câu",
     "html": "(1) Tiêu chí quan trọng nhất của tình huống là gì. (2) Model nào mạnh ở tiêu chí đó. (3) Số liệu kiểm định chéo cho thấy model đó không kém hơn đáng kể."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn cùng một model cho mọi tình huống.",
      "Bảo vệ lựa chọn chỉ bằng “vì nó hay”."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Mục đích quyết định tiêu chí; tiêu chí quyết định model; số liệu để bảo vệ."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q7",
     "q": "Theo phần Tự thử, tình huống lọc hàng triệu tin nhắn gợi ý model nào?",
     "giai": "Nhanh, hợp dữ liệu đếm từ.",
     "goi_y": "Chọn tình huống thứ hai, bấm tới dòng Gợi ý.",
     "a": [
      "Naïve Bayes",
      "KNN",
      "Random Forest",
      "Cây sâu 10"
     ],
     "h": "1f2e97b943a8ac"
    },
    {
     "k": "sx",
     "id": "bai25-q8",
     "q": "Sắp xếp các bước bảo vệ lựa chọn model.",
     "giai": "Tiêu chí → model → đo → trình bày.",
     "goi_y": "Bắt đầu từ nhu cầu của người dùng.",
     "a": [
      "Xác định tiêu chí quan trọng nhất",
      "Tìm model mạnh ở tiêu chí đó",
      "So bằng kiểm định chéo",
      "Trình bày lý do kèm số liệu"
     ],
     "h": "e0279c09a804b"
    }
   ]
  },
  {
   "ten": "Một dự án trọn vẹn",
   "ten_ngan": "Dự án",
   "phut": 4,
   "muc_tieu": "trình bày lại quy trình trọn vẹn của một dự án học có giám sát.",
   "khoi_dong": "Nếu phải làm một dự án từ đầu, con làm những bước nào?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Bước",
      "Việc",
      "Học ở"
     ],
     "dong": [
      [
       "1 · Câu hỏi",
       "Phân loại hay hồi quy? Ai dùng kết quả?",
       "Bài 12, 15"
      ],
      [
       "2 · Dữ liệu",
       "Khám phá, làm sạch, EDA",
       "Bài 7 – 10"
      ],
      [
       "3 · Chuẩn bị",
       "Chia train / test; thang đo trong pipeline",
       "Bài 8, 13, 24"
      ],
      [
       "4 · Chọn model",
       "So vài model bằng kiểm định chéo; dò tham số",
       "Bài 13 – 24"
      ],
      [
       "5 · Đánh giá",
       "Một lần trên tập kiểm tra; mốc; bảng nhầm lẫn",
       "Bài 12, 16"
      ],
      [
       "6 · Báo cáo",
       "Số liệu, hạn chế, không nói “gây ra”",
       "Thực hành nhóm"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Sắp tới",
     "html": "Bài 26 bước sang một nhánh mới: dữ liệu <b>không có nhãn</b> — máy tự chia nhóm (K-Means)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nhảy thẳng tới chọn model, bỏ qua làm sạch và EDA.",
      "Báo cáo con số mà không nói hạn chế của dữ liệu."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Câu hỏi → dữ liệu → chuẩn bị → chọn model → đánh giá → báo cáo trung thực."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q9",
     "q": "Bước nào nên làm trước khi so các model?",
     "giai": "Dữ liệu trước, model sau.",
     "goi_y": "Nhìn thứ tự các bước trong bảng.",
     "a": [
      "Làm sạch và khám phá dữ liệu",
      "Báo cáo kết quả cuối",
      "Đo trên tập kiểm tra",
      "Chọn ngưỡng cảnh báo"
     ],
     "h": "9e3e768df59c3"
    },
    {
     "k": "ds",
     "id": "bai25-q10",
     "q": "Tập kiểm tra nên được dùng nhiều lần trong lúc chọn model.",
     "giai": "Chỉ một lần ở cuối.",
     "goi_y": "Nhớ lại Bài 24.",
     "h": "1e2c8a6e5c4306"
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
    "id": "bai25-q11",
    "q": "Nhìn hình. Nhóm “Hỏi câu Có / Không” gồm model nào?",
    "giai": "Cả rừng cũng hỏi câu Có / Không.",
    "img": {
     "src": "img/ban-do-cac-model-da-hoc.png"
    },
    "a": [
     "Cây quyết định, Random Forest",
     "KNN và SVM",
     "Hồi quy tuyến tính, logistic",
     "Naïve Bayes và KNN"
    ],
    "h": "1eea4db1aba8f8"
   },
   {
    "k": "mc",
    "id": "bai25-q12",
    "q": "Nhìn hình. Model nào bỏ sót nhiều bạn Chưa đạt nhất?",
    "giai": "13 bạn.",
    "img": {
     "src": "img/sau-model-dung-va-bo-sot.png"
    },
    "a": [
     "SVM",
     "Cây sâu 2",
     "Naïve Bayes",
     "Logistic"
    ],
    "h": "1dd7b6e622227e"
   },
   {
    "k": "mc",
    "id": "bai25-q13",
    "q": "Nhìn hình. Model nào dự đoán chậm nhất trên dữ liệu lớn?",
    "giai": "Phải đo tới mọi điểm cũ.",
    "img": {
     "src": "img/toc-do-huan-luyen-va-du-doan.png"
    },
    "a": [
     "KNN (K = 3)",
     "Naïve Bayes",
     "Cây sâu 2",
     "Logistic"
    ],
    "h": "35ecdf5686704"
   },
   {
    "k": "mc",
    "id": "bai25-q14",
    "q": "Một app cần đoán giá thuê nhà theo diện tích. Model nào đúng loại bài toán?",
    "giai": "Giá là con số.",
    "a": [
     "Hồi quy tuyến tính",
     "Hồi quy logistic",
     "Naïve Bayes",
     "Cây phân loại"
    ],
    "h": "14cd9daf21188b"
   },
   {
    "k": "mc",
    "id": "bai25-q15",
    "q": "Hai model: A đúng 91% và giải thích được; B đúng 91.5% nhưng không giải thích được. Phòng tuyển sinh cần nói lý do. Chọn?",
    "giai": "Giải thích quan trọng hơn 0.5 điểm.",
    "a": [
     "Model A",
     "Model B",
     "Không chọn model nào",
     "Chọn ngẫu nhiên"
    ],
    "h": "1e7407d2dc4f58"
   },
   {
    "k": "mc",
    "id": "bai25-q16",
    "q": "Dữ liệu có 10 triệu dòng, cần trả lời trong tích tắc. Model nào nên tránh?",
    "giai": "KNN đo tới mọi điểm.",
    "a": [
     "KNN",
     "Naïve Bayes",
     "Logistic",
     "Cây nông"
    ],
    "h": "140b46e69266af"
   },
   {
    "k": "mc",
    "id": "bai25-q17",
    "q": "Bệnh hiếm: bỏ sót nguy hiểm hơn báo nhầm. Nên so model bằng gì ngoài độ chính xác?",
    "giai": "Đọc bảng nhầm lẫn.",
    "a": [
     "Số ca bị bỏ sót",
     "Thời gian huấn luyện",
     "Số cột dữ liệu",
     "Tên thuật toán"
    ],
    "h": "10a4be0dded884"
   },
   {
    "k": "mc",
    "id": "bai25-q18",
    "q": "Sáu model trên bảng khối 10 chênh chưa tới 2 điểm. Kết luận khách quan nhất?",
    "giai": "Chênh nhỏ hơn dao động.",
    "a": [
     "Chưa model nào hơn hẳn",
     "KNN là tốt nhất mọi lúc",
     "Cây quyết định vô dụng",
     "Cần bỏ bảng khối 10"
    ],
    "h": "1b06a86cbc5420"
   },
   {
    "k": "mc",
    "id": "bai25-q19",
    "q": "Model nào vừa cho xác suất vừa đọc được hệ số dương / âm của từng cột?",
    "giai": "Bài 16.",
    "a": [
     "Hồi quy logistic",
     "KNN",
     "Random Forest",
     "SVM kernel rbf"
    ],
    "h": "1222002cf066e5"
   },
   {
    "k": "ma",
    "id": "bai25-q20",
    "q": "Những tiêu chí nào dùng để chọn model? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ngoài độ chính xác.",
    "a": [
     "Giải thích được",
     "Tốc độ",
     "Tên model dài",
     "Màu biểu đồ"
    ],
    "h": "136f8281274737"
   },
   {
    "k": "ma",
    "id": "bai25-q21",
    "q": "Hai model nào cần đưa về cùng thang đo? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đo khoảng cách.",
    "a": [
     "KNN",
     "SVM",
     "Cây quyết định",
     "Naïve Bayes"
    ],
    "h": "1a645dbeb7d73b"
   },
   {
    "k": "ma",
    "id": "bai25-q22",
    "q": "Hai model nào đọc được lý do bằng lời tốt nhất? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Luật / hệ số.",
    "a": [
     "Cây quyết định nông",
     "Hồi quy logistic",
     "Random Forest 500 cây",
     "SVM kernel rbf"
    ],
    "h": "c50333427061b"
   },
   {
    "k": "ma",
    "id": "bai25-q23",
    "q": "Hai bước nào nằm trong một dự án trọn vẹn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Quy trình trung thực.",
    "a": [
     "Làm sạch dữ liệu",
     "Nêu hạn chế",
     "Chọn random_state đẹp nhất",
     "Bỏ qua mốc model lười"
    ],
    "h": "18e33c4c774ce6"
   },
   {
    "k": "sx",
    "id": "bai25-q24",
    "q": "Sắp xếp các bước một dự án học có giám sát.",
    "giai": "Câu hỏi → dữ liệu → chia → so → đo.",
    "a": [
     "Đặt câu hỏi",
     "Khám phá và làm sạch dữ liệu",
     "Chia train / test",
     "So model bằng kiểm định chéo",
     "Đo một lần trên tập kiểm tra"
    ],
    "h": "1296c6d850d803"
   },
   {
    "k": "sx",
    "id": "bai25-q25",
    "q": "Sắp xếp các bước bảo vệ lựa chọn model.",
    "giai": "Nhu cầu → tiêu chí → model → số liệu.",
    "a": [
     "Nêu nhu cầu người dùng",
     "Chọn tiêu chí quan trọng",
     "Chọn model mạnh ở tiêu chí đó",
     "Đưa số liệu kiểm định chéo"
    ],
    "h": "2d812fb4fa669"
   },
   {
    "k": "dd",
    "id": "bai25-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Bản đồ.",
    "mau": "KNN thuộc nhóm {0}; Naïve Bayes thuộc nhóm {1}.",
    "o": [
     [
      "đo khoảng cách",
      "đếm rồi nhân",
      "hỏi Có / Không",
      "vẽ đường"
     ],
     [
      "đếm rồi nhân",
      "đo khoảng cách",
      "hỏi Có / Không",
      "vẽ đường"
     ]
    ],
    "h": "163f3578176088"
   },
   {
    "k": "dd",
    "id": "bai25-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Theo tiêu chí.",
    "mau": "Cần xác suất để chỉnh ngưỡng: chọn {0}; cần luật đọc được: chọn {1}.",
    "o": [
     [
      "logistic",
      "KNN",
      "SVM",
      "rừng"
     ],
     [
      "cây nông",
      "KNN",
      "SVM",
      "rừng 500 cây"
     ]
    ],
    "h": "44ae4bcf0cc3b"
   },
   {
    "k": "dd",
    "id": "bai25-q28",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc biểu đồ.",
    "mau": "Bỏ sót ít nhất: {0}; nhiều nhất: {1}.",
    "o": [
     [
      "Cây sâu 2",
      "Logistic",
      "SVM",
      "KNN (K = 3)"
     ],
     [
      "SVM",
      "Cây sâu 2",
      "Naïve Bayes",
      "Logistic"
     ]
    ],
    "h": "2b398ef181011"
   },
   {
    "k": "dd",
    "id": "bai25-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Câu chốt.",
    "mau": "Không có model {0}; chỉ có model {1}.",
    "o": [
     [
      "tốt nhất",
      "chậm nhất",
      "đắt nhất",
      "mới nhất"
     ],
     [
      "phù hợp",
      "phức tạp",
      "nổi tiếng",
      "mới nhất"
     ]
    ],
    "h": "109e2a2c7f209d"
   },
   {
    "k": "ds",
    "id": "bai25-q30",
    "q": "Model có độ chính xác cao nhất luôn là lựa chọn đúng.",
    "giai": "Còn nhiều tiêu chí khác.",
    "h": "d958cdb86358e"
   },
   {
    "k": "ds",
    "id": "bai25-q31",
    "q": "Random Forest thường huấn luyện chậm hơn Naïve Bayes.",
    "giai": "Nhiều cây.",
    "h": "1b0c85c5d7fa46"
   },
   {
    "k": "ds",
    "id": "bai25-q32",
    "q": "Hồi quy tuyến tính dùng để phân loại Đạt / Chưa đạt.",
    "giai": "Nó dự đoán con số.",
    "h": "1b1dfd34888dc9"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
