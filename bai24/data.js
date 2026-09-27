window.BAI = {
 "bai": 24,
 "ma": "bai24",
 "nhan": "Bài 24",
 "tieu_de": "Đánh giá cho công bằng",
 "phan": "Module 12 · Evaluating Models",
 "cau_hoi": "Một lần chia train / test có phải là may rủi?",
 "gioi_thieu": [
  "Từ Bài 12, con luôn chia dữ liệu <b>một lần</b> (random_state = 42) rồi tin con số trên tập kiểm tra. Hôm nay con kiểm tra lại niềm tin đó — và học cách đo cho công bằng hơn: <b>kiểm định chéo</b>.",
  "Năm chặng: một lần chia là may rủi, kiểm định chéo, so model công bằng, chọn tham số đúng cách, và scikit-learn. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại: chia dữ liệu (Bài 8), học vẹt và chọn K (Bài 13), các model đã học (Bài 11 – 17)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai24",
 "muc_tieu": [
  "Giải thích được vì sao một lần chia train / test có thể cho kết quả may rủi.",
  "Mô tả được kiểm định chéo k phần.",
  "Dùng kiểm định chéo để so các model công bằng hơn.",
  "Chọn tham số (như K) bằng kiểm định chéo trên tập huấn luyện, giữ tập kiểm tra đến cuối.",
  "Dùng cross_val_score và GridSearchCV trong scikit-learn."
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
   "ten": "Một lần chia là may rủi",
   "ten_ngan": "May rủi",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao một lần chia train / test có thể cho kết quả may rủi.",
   "khoi_dong": "Đổi random_state từ 42 sang số khác. Độ chính xác có đổi không?",
   "khoi": [
    {
     "t": "demo_truot",
     "tieu_de": "mười lần chia khác nhau",
     "huong_dan": "Kéo để đổi cách chia (random_state). Cùng model logistic, cùng dữ liệu — chỉ khác những bạn nào rơi vào tập kiểm tra.",
     "dieu_kien": "random_state = <b>{x}</b>",
     "moc": [
      {
       "x": 0,
       "n": "lần chia số 0",
       "p": 91.7
      },
      {
       "x": 1,
       "n": "lần chia số 1",
       "p": 90.3
      },
      {
       "x": 2,
       "n": "lần chia số 2",
       "p": 88.9
      },
      {
       "x": 3,
       "n": "lần chia số 3",
       "p": 84.7
      },
      {
       "x": 4,
       "n": "lần chia số 4",
       "p": 83.3
      },
      {
       "x": 5,
       "n": "lần chia số 5",
       "p": 93.1
      },
      {
       "x": 6,
       "n": "lần chia số 6",
       "p": 91.7
      },
      {
       "x": 7,
       "n": "lần chia số 7",
       "p": 93.1
      },
      {
       "x": 8,
       "n": "lần chia số 8",
       "p": 93.1
      },
      {
       "x": 9,
       "n": "lần chia số 9",
       "p": 93.1
      }
     ],
     "nhan_n": "Cách chia",
     "nhan_p": "Độ chính xác trên tập kiểm tra",
     "so_le_x": 0,
     "bat_dau": 0
    },
    {
     "t": "anh",
     "cap": "Cùng một model, mười con số từ 83,3% tới 93,1%",
     "alt": "Cùng một model, mười con số từ 83,3% tới 93,1%",
     "src": "img/muoi-lan-chia-khac-nhau.png"
    },
    {
     "t": "p",
     "html": "Tập kiểm tra chỉ 72 bạn: vài bạn “khó” rơi vào hay không đã đủ làm con số nhảy gần 9,8 điểm. Một lần đo giống như một bài kiểm tra 15 phút — có thể may, có thể xui."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn random_state cho con số đẹp nhất để báo cáo.",
      "So hai model trên hai cách chia khác nhau."
     ]
    },
    {
     "t": "video",
     "yt": "fSytzGwwBVw",
     "ten": "StatQuest — Machine Learning Fundamentals: Cross Validation",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Một lần chia chỉ là một mẫu thử; con số có thể lệch vài điểm do may rủi."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Cross Validation in Machine Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/cross-validation-machine-learning/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai24-q1",
     "q": "Trong mười lần chia, độ chính xác thấp nhất là bao nhiêu?",
     "giai": "Lần chia random_state = 4.",
     "goi_y": "Kéo thanh trượt, tìm cột đỏ.",
     "a": [
      "83,3%",
      "93,1%",
      "91,7%",
      "50,0%"
     ],
     "h": "9629bf2da5cd6"
    },
    {
     "k": "ds",
     "id": "bai24-q2",
     "q": "Đổi random_state có thể làm độ chính xác trên tập kiểm tra thay đổi vài điểm.",
     "giai": "Khác bạn nào rơi vào tập kiểm tra.",
     "goi_y": "Nhìn lại mười cột.",
     "h": "158b2260f7e668"
    }
   ]
  },
  {
   "ten": "Kiểm định chéo",
   "ten_ngan": "Kiểm định chéo",
   "phut": 5,
   "muc_tieu": "mô tả được kiểm định chéo k phần.",
   "khoi_dong": "Làm sao cho mọi bạn đều được một lần “làm kiểm tra”?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Kiểm định chéo k phần (k-fold cross-validation)",
     "html": "Chia dữ liệu thành k phần bằng nhau. Lần lượt mỗi phần làm tập kiểm tra, k − 1 phần còn lại huấn luyện. Được k điểm → lấy <b>trung bình</b> (và xem khoảng dao động).",
     "ky_hieu": "Thường dùng k = 5 hoặc 10."
    },
    {
     "t": "anh",
     "cap": "Kiểm định chéo 5 phần: 5 vòng, 5 điểm",
     "alt": "Kiểm định chéo 5 phần: 5 vòng, 5 điểm",
     "src": "img/so-do-kiem-dinh-cheo-5-phan.png"
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "năm vòng của model logistic",
     "huong_dan": "Bấm “Bước tiếp” để chạy từng vòng. Cột cuối là trung bình tính tới vòng đó.",
     "nhan_chon": "Model",
     "cot": [
      "Vòng",
      "Việc",
      "Điểm vòng này",
      "Trung bình tới giờ"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Logistic",
       "dong": [
        [
         "1",
         "Phần 1 làm kiểm tra, 4 phần còn lại huấn luyện",
         "89,6%",
         "89,6%"
        ],
        [
         "2",
         "Phần 2 làm kiểm tra, 4 phần còn lại huấn luyện",
         "91,7%",
         "90,7%"
        ],
        [
         "3",
         "Phần 3 làm kiểm tra, 4 phần còn lại huấn luyện",
         "97,9%",
         "93,1%"
        ],
        [
         "4",
         "Phần 4 làm kiểm tra, 4 phần còn lại huấn luyện",
         "87,5%",
         "91,7%"
        ],
        [
         "5",
         "Phần 5 làm kiểm tra, 4 phần còn lại huấn luyện",
         "85,4%",
         "90,4%"
        ]
       ]
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Kiểm định chéo đo gì?",
     "html": "Nó đo <b>cách làm</b> (model + tham số) tốt tới đâu trên dữ liệu chưa thấy — trung bình qua nhiều lần, ít phụ thuộc may rủi của một lần chia."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ kiểm định chéo cho ra một model mới — nó chỉ đo; muốn dùng thì fit lại trên dữ liệu huấn luyện.",
      "Quên xem khoảng dao động giữa các phần."
     ]
    },
    {
     "t": "tom_tat",
     "html": "k phần, mỗi phần làm kiểm tra một lần → k điểm → lấy trung bình."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai24-q3",
     "q": "Trong kiểm định chéo 5 phần, mỗi dòng dữ liệu được làm kiểm tra mấy lần?",
     "giai": "Mỗi phần làm kiểm tra đúng một vòng.",
     "goi_y": "Nhìn cột màu vàng trong sơ đồ.",
     "a": [
      "Đúng 1 lần",
      "0 lần",
      "5 lần",
      "4 lần"
     ],
     "h": "17496b5ea9b58a"
    },
    {
     "k": "sx",
     "id": "bai24-q4",
     "q": "Sắp xếp các bước kiểm định chéo 5 phần.",
     "giai": "Chia → luân phiên → lặp → trung bình.",
     "goi_y": "Bắt đầu từ việc chia dữ liệu.",
     "a": [
      "Chia dữ liệu thành 5 phần",
      "Lấy một phần làm kiểm tra, 4 phần huấn luyện",
      "Lặp lại cho đủ 5 phần",
      "Lấy trung bình 5 điểm"
     ],
     "h": "1e05b64ac4ef6c"
    }
   ]
  },
  {
   "ten": "So model cho công bằng",
   "ten_ngan": "So model",
   "phut": 4,
   "muc_tieu": "dùng kiểm định chéo để so các model công bằng hơn.",
   "khoi_dong": "Bài 22: KNN đúng 95,8%, bốn model khác 91,7%. KNN có thật sự giỏi hơn?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Sáu model, kiểm định chéo 5 phần trên cả 240 bạn",
     "alt": "Sáu model, kiểm định chéo 5 phần trên cả 240 bạn",
     "src": "img/sau-model-kiem-dinh-cheo.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "trung bình 5 phần",
     "de": null,
     "cot": [
      "Model",
      "Trung bình",
      "Thấp nhất – cao nhất"
     ],
     "dong": [
      [
       "KNN (K = 9)",
       "91,3%",
       "89,6 – 93,8"
      ],
      [
       "Logistic",
       "90,4%",
       "85,4 – 97,9"
      ],
      [
       "Cây sâu 2",
       "89,6%",
       "85,4 – 95,8"
      ],
      [
       "Naïve Bayes",
       "90,8%",
       "87,5 – 95,8"
      ],
      [
       "SVM",
       "90,8%",
       "87,5 – 97,9"
      ],
      [
       "Rừng 100 cây",
       "90,9%",
       "89,6 – 93,8"
      ]
     ],
     "ket_luan": "Các model chỉ chênh 1,7 điểm trung bình, trong khi mỗi model tự dao động vài điểm giữa các phần — không model nào hơn hẳn.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Kết luận model A giỏi hơn chỉ vì hơn 1 – 2 bạn trên một lần chia.",
      "Chỉ nhìn trung bình mà bỏ qua khoảng dao động."
     ]
    },
    {
     "t": "tom_tat",
     "html": "So model bằng kiểm định chéo: xem trung bình và khoảng dao động, không chỉ một con số."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai24-q5",
     "q": "Theo kiểm định chéo, chênh lệch trung bình giữa model cao nhất và thấp nhất khoảng bao nhiêu điểm?",
     "giai": "Nhỏ hơn cả độ dao động của một model.",
     "goi_y": "Trừ trung bình cao nhất cho thấp nhất.",
     "a": [
      "1,7 điểm",
      "4,1 điểm",
      "15,0 điểm",
      "0,0 điểm"
     ],
     "h": "8ea83946d6b16"
    },
    {
     "k": "ds",
     "id": "bai24-q6",
     "q": "Theo kiểm định chéo, KNN hơn hẳn mọi model khác trên bảng khối 10.",
     "giai": "Chênh chưa tới 2 điểm.",
     "goi_y": "So cột trung bình của bảng.",
     "h": "ea251cea0ba76"
    }
   ]
  },
  {
   "ten": "Chọn tham số đúng cách",
   "ten_ngan": "Dò tham số",
   "phut": 5,
   "muc_tieu": "chọn tham số bằng kiểm định chéo trên tập huấn luyện, giữ tập kiểm tra đến cuối.",
   "khoi_dong": "Bài 13 chọn K = 9 vì cao nhất trên tập kiểm tra. Vì sao làm vậy là “gian lận nhẹ”?",
   "khoi": [
    {
     "t": "p",
     "html": "Nếu dùng tập kiểm tra để <b>chọn</b> K, tập kiểm tra đã góp phần huấn luyện — nó không còn là dữ liệu “chưa thấy”. Con số đo trên nó sẽ lạc quan hơn thực tế."
    },
    {
     "t": "dinh_nghia",
     "ten": "Dò tham số (tuning) đúng cách",
     "html": "Chỉ dùng <b>tập huấn luyện</b>: thử từng giá trị tham số bằng kiểm định chéo, chọn giá trị tốt nhất. Sau cùng mới đo <b>một lần</b> trên tập kiểm tra.",
     "ky_hieu": "Phần dữ liệu dùng để chọn tham số gọi là <b>tập kiểm định</b> (validation)."
    },
    {
     "t": "anh",
     "cap": "Kiểm định chéo chọn K = 3; tập kiểm tra (nếu dùng để chọn) sẽ chọn K = 9",
     "alt": "Kiểm định chéo chọn K = 3; tập kiểm tra (nếu dùng để chọn) sẽ chọn K = 9",
     "src": "img/chon-k-bang-kiem-dinh-cheo.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "hai cách chọn K",
     "de": null,
     "cot": [
      "Cách chọn",
      "K được chọn",
      "Con số báo cáo"
     ],
     "dong": [
      [
       "Theo tập kiểm tra (Bài 13)",
       "9",
       "95,8% — lạc quan"
      ],
      [
       "Kiểm định chéo trên tập huấn luyện",
       "3",
       "<b>91,7%</b> — trung thực"
      ]
     ],
     "ket_luan": "Con số trung thực thấp hơn — nhưng đó mới là điều ta có thể hứa với dữ liệu mới.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Thử hàng trăm cấu hình trên tập kiểm tra rồi báo cáo con số cao nhất.",
      "Đưa MinMaxScaler ra ngoài kiểm định chéo — min, max của phần kiểm tra bị lọt vào."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Chọn tham số bằng kiểm định chéo trên tập huấn luyện; tập kiểm tra chỉ dùng một lần ở cuối."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai24-q7",
     "q": "Kiểm định chéo trên tập huấn luyện chọn K bằng bao nhiêu?",
     "giai": "Điểm cao nhất của đường xanh.",
     "goi_y": "Tìm đỉnh của đường liền màu xanh.",
     "a": [
      "3",
      "9",
      "1",
      "41"
     ],
     "h": "11b221fbc98463"
    },
    {
     "k": "dd",
     "id": "bai24-q8",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Giữ tập kiểm tra tới phút cuối.",
     "goi_y": "Tập nào phải giữ “chưa thấy”?",
     "mau": "Chọn tham số bằng tập {0}; đo kết quả cuối cùng một lần trên tập {1}.",
     "o": [
      [
       "huấn luyện",
       "kiểm tra",
       "toàn bộ",
       "ngẫu nhiên"
      ],
      [
       "kiểm tra",
       "huấn luyện",
       "kiểm định",
       "toàn bộ"
      ]
     ],
     "h": "1c29ab6db0034b"
    }
   ]
  },
  {
   "ten": "Kiểm định chéo trong scikit-learn",
   "ten_ngan": "scikit-learn",
   "phut": 4,
   "muc_tieu": "dùng cross_val_score và GridSearchCV trong scikit-learn.",
   "khoi_dong": "Viết tay 5 vòng thì dài. scikit-learn làm giúp thế nào?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Việc",
      "Lệnh"
     ],
     "dong": [
      [
       "Gộp chuẩn hoá + model",
       "<code>m = make_pipeline(MinMaxScaler(), KNeighborsClassifier(9))</code>"
      ],
      [
       "Kiểm định chéo 5 phần",
       "<code>cross_val_score(m, X, y, cv=5)</code>"
      ],
      [
       "Dò tham số",
       "<code>GridSearchCV(m, {\"kneighborsclassifier__n_neighbors\": [1, 3, 5, …]}, cv=5)</code>"
      ],
      [
       "Kết quả",
       "<code>.best_params_</code> · <code>.best_score_</code> · <code>.score(X_test, y_test)</code>"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Vì sao dùng make_pipeline?",
     "html": "Để MinMaxScaler được fit lại <b>bên trong</b> mỗi vòng — chỉ trên phần huấn luyện của vòng đó. Nếu scale cả bảng trước rồi mới kiểm định chéo, thông tin phần kiểm tra đã lọt vào."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Gọi GridSearchCV trên cả X, y rồi báo best_score_ như kết quả cuối.",
      "Quên rằng best_score_ là điểm kiểm định chéo, không phải điểm tập kiểm tra."
     ]
    },
    {
     "t": "tom_tat",
     "html": "cross_val_score để đo; GridSearchCV để chọn tham số; make_pipeline để không rò rỉ."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai24-q9",
     "q": "Hàm nào chạy kiểm định chéo và trả về điểm từng phần?",
     "giai": "Trả về mảng k điểm.",
     "goi_y": "Tên có chữ cross (chéo).",
     "a": [
      "cross_val_score",
      "train_test_split",
      "accuracy_score",
      "MinMaxScaler"
     ],
     "h": "1a49c2d5a1efc3"
    },
    {
     "k": "ma",
     "id": "bai24-q10",
     "q": "Hai lý do nào để đặt MinMaxScaler trong pipeline? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Fit trên phần huấn luyện của từng vòng.",
     "goi_y": "Đọc hộp “Vì sao dùng make_pipeline?”.",
     "a": [
      "Scaler chỉ học từ phần huấn luyện mỗi vòng",
      "Tránh rò rỉ thông tin phần kiểm tra",
      "Để model chạy nhanh gấp đôi",
      "Để không cần tập kiểm tra"
     ],
     "h": "c0e7d6d41095c"
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
    "id": "bai24-q11",
    "q": "Nhìn hình. Lần chia nào cho độ chính xác thấp nhất?",
    "giai": "Cột đỏ: 83,3%.",
    "img": {
     "src": "img/muoi-lan-chia-khac-nhau.png"
    },
    "a": [
     "random_state = 4",
     "random_state = 0",
     "random_state = 5",
     "random_state = 9"
    ],
    "h": "2398da94e6ea2"
   },
   {
    "k": "mc",
    "id": "bai24-q12",
    "q": "Nhìn hình. Ở vòng 3, phần nào làm tập kiểm tra?",
    "giai": "Ô vàng ở vòng 3.",
    "img": {
     "src": "img/so-do-kiem-dinh-cheo-5-phan.png"
    },
    "a": [
     "Phần thứ ba",
     "Phần thứ nhất",
     "Cả năm phần",
     "Không phần nào"
    ],
    "h": "12ebf69c24d128"
   },
   {
    "k": "mc",
    "id": "bai24-q13",
    "q": "Nhìn hình. Model nào có khoảng dao động giữa các phần RỘNG nhất?",
    "giai": "Thanh xanh nhạt dài nhất.",
    "img": {
     "src": "img/sau-model-kiem-dinh-cheo.png"
    },
    "a": [
     "Logistic",
     "KNN (K = 9)",
     "Rừng 100 cây",
     "Naïve Bayes"
    ],
    "h": "18537e8dd3df7a"
   },
   {
    "k": "mc",
    "id": "bai24-q14",
    "q": "Nhìn hình. Đường nét đứt xám cao hơn đường xanh ở hầu hết K. Vì sao?",
    "giai": "Chọn trên tập nào thì tập đó cho số lạc quan.",
    "img": {
     "src": "img/chon-k-bang-kiem-dinh-cheo.png"
    },
    "a": [
     "Nó đo trên đúng tập dùng để chọn",
     "Tập kiểm tra dễ hơn hẳn",
     "Đường xanh bị vẽ sai",
     "Kiểm định chéo luôn thấp"
    ],
    "h": "31f66cb5c2078"
   },
   {
    "k": "mc",
    "id": "bai24-q15",
    "q": "Một bạn thi thử 5 lần được 6, 9, 7, 8, 5 điểm. Cách ước lượng sức học nào hợp lý nhất?",
    "giai": "Giống kiểm định chéo.",
    "a": [
     "Lấy trung bình 5 lần: 7 điểm",
     "Lấy lần cao nhất: 9 điểm",
     "Lấy lần đầu tiên: 6 điểm",
     "Lấy lần thấp nhất: 5 điểm"
    ],
    "h": "15a95dd3ca9b3e"
   },
   {
    "k": "mc",
    "id": "bai24-q16",
    "q": "Nhóm thử 200 cấu hình model, mỗi lần đo trên tập kiểm tra, rồi báo con số cao nhất. Vấn đề là gì?",
    "giai": "Tập kiểm tra đã bị dùng để chọn.",
    "a": [
     "Con số đó lạc quan, không trung thực",
     "Con số đó quá thấp so với thật",
     "Không có vấn đề gì cả",
     "Model sẽ chạy quá chậm"
    ],
    "h": "805f0ee3e8c6c"
   },
   {
    "k": "mc",
    "id": "bai24-q17",
    "q": "Kiểm định chéo 10 phần trên 200 dòng. Mỗi vòng tập kiểm tra có bao nhiêu dòng?",
    "giai": "200 : 10.",
    "a": [
     "20 dòng",
     "10 dòng",
     "180 dòng",
     "200 dòng"
    ],
    "h": "11b46acf0d1f1a"
   },
   {
    "k": "mc",
    "id": "bai24-q18",
    "q": "best_score_ của GridSearchCV là điểm gì?",
    "giai": "Chưa phải điểm tập kiểm tra.",
    "a": [
     "Trung bình kiểm định chéo của cấu hình tốt",
     "Điểm trên tập kiểm tra cuối cùng",
     "Điểm trên toàn bộ dữ liệu huấn luyện",
     "Điểm cao nhất trong một phần"
    ],
    "h": "e52ef2aa63351"
   },
   {
    "k": "mc",
    "id": "bai24-q19",
    "q": "Vì sao con số “trung thực” (K = 3) thấp hơn con số Bài 13 (K = 9)?",
    "giai": "Chọn trên tập kiểm tra → lạc quan.",
    "a": [
     "Bài 13 đã nhìn tập kiểm tra khi chọn K",
     "K = 3 là giá trị K tệ nhất",
     "Kiểm định chéo làm model kém đi",
     "Bài 13 dùng dữ liệu khác hẳn"
    ],
    "h": "134d04cbe186e9"
   },
   {
    "k": "ma",
    "id": "bai24-q20",
    "q": "Những phát biểu nào đúng về kiểm định chéo? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "k vòng, k điểm.",
    "a": [
     "Mỗi dòng được làm kiểm tra đúng một lần",
     "Cho trung bình và độ dao động",
     "Chỉ dùng một lần chia",
     "Thay hoàn toàn tập huấn luyện"
    ],
    "h": "77a9f282fe45d"
   },
   {
    "k": "ma",
    "id": "bai24-q21",
    "q": "Hai việc nào là dò tham số đúng cách? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Giữ tập kiểm tra tới cuối.",
    "a": [
     "Kiểm định chéo trên tập huấn luyện",
     "Đo tập kiểm tra một lần ở cuối",
     "Chọn tham số theo tập kiểm tra",
     "Đổi random_state tới khi đẹp"
    ],
    "h": "2ee89798da0fc"
   },
   {
    "k": "ma",
    "id": "bai24-q22",
    "q": "Vì sao một lần chia có thể may rủi? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Mẫu thử nhỏ.",
    "a": [
     "Tập kiểm tra nhỏ",
     "Vài dòng khó rơi vào hay không",
     "Máy tính cộng sai",
     "Model đổi thuật toán mỗi lần"
    ],
    "h": "1ad8929279a692"
   },
   {
    "k": "ma",
    "id": "bai24-q23",
    "q": "Hai lệnh nào dùng trong bài? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đo và dò.",
    "a": [
     "cross_val_score",
     "GridSearchCV",
     "export_text",
     "predict_proba_cv"
    ],
    "h": "1d9150ebb3f9f0"
   },
   {
    "k": "sx",
    "id": "bai24-q24",
    "q": "Sắp xếp quy trình chọn K đúng cách.",
    "giai": "Chia → CV → chọn → fit → đo.",
    "a": [
     "Chia tập huấn luyện và tập kiểm tra",
     "Kiểm định chéo từng K trên tập huấn luyện",
     "Chọn K có điểm trung bình cao nhất",
     "Fit lại với K đó trên tập huấn luyện",
     "Đo một lần trên tập kiểm tra"
    ],
    "h": "69eac5cef544c"
   },
   {
    "k": "sx",
    "id": "bai24-q25",
    "q": "Sắp xếp các bước kiểm định chéo 5 phần.",
    "giai": "Chia → luân phiên → trung bình.",
    "a": [
     "Chia thành 5 phần",
     "Vòng 1: phần 1 làm kiểm tra",
     "Lặp tới vòng 5",
     "Tính trung bình 5 điểm"
    ],
    "h": "192a6c6bc8d313"
   },
   {
    "k": "dd",
    "id": "bai24-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "k-fold.",
    "mau": "Kiểm định chéo {0} phần: mỗi phần làm kiểm tra {1} lần.",
    "o": [
     [
      "k",
      "2",
      "0",
      "100"
     ],
     [
      "đúng một",
      "hai",
      "không",
      "k"
     ]
    ],
    "h": "11d30ce3b51efd"
   },
   {
    "k": "dd",
    "id": "bai24-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Cùng model, khác cách chia.",
    "mau": "Mười lần chia cho kết quả từ {0} tới {1}.",
    "o": [
     [
      "83,3%",
      "93,1%",
      "50,0%",
      "100%"
     ],
     [
      "93,1%",
      "83,3%",
      "100%",
      "75,0%"
     ]
    ],
    "h": "1694f657fcf935"
   },
   {
    "k": "dd",
    "id": "bai24-q28",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Bài 24 sửa Bài 13.",
    "mau": "Kiểm định chéo chọn K = {0}; con số trung thực trên tập kiểm tra là {1}.",
    "o": [
     [
      "3",
      "9",
      "1",
      "41"
     ],
     [
      "91,7%",
      "95,8%",
      "100%",
      "83,3%"
     ]
    ],
    "h": "87426eea88645"
   },
   {
    "k": "dd",
    "id": "bai24-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Validation / test.",
    "mau": "Dữ liệu dùng để chọn tham số gọi là tập {0}; dữ liệu đo một lần cuối là tập {1}.",
    "o": [
     [
      "kiểm định",
      "kiểm tra",
      "huấn luyện",
      "ngẫu nhiên"
     ],
     [
      "kiểm tra",
      "kiểm định",
      "huấn luyện",
      "toàn bộ"
     ]
    ],
    "h": "4f9810ad4bc01"
   },
   {
    "k": "ds",
    "id": "bai24-q30",
    "q": "Báo cáo con số cao nhất trong nhiều lần chia là trung thực.",
    "giai": "Đó là chọn may.",
    "h": "1a8350f1864740"
   },
   {
    "k": "ds",
    "id": "bai24-q31",
    "q": "Kiểm định chéo cho biết cả độ dao động của kết quả.",
    "giai": "Xem thấp nhất – cao nhất.",
    "h": "1829035da37dbd"
   },
   {
    "k": "ds",
    "id": "bai24-q32",
    "q": "Đặt MinMaxScaler trong pipeline giúp tránh rò rỉ dữ liệu khi kiểm định chéo.",
    "giai": "Fit trên phần huấn luyện mỗi vòng.",
    "h": "11b6366c3c4834"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
