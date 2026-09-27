window.BAI = {
 "bai": 21,
 "ma": "bai21",
 "nhan": "Bài 21",
 "tieu_de": "Naïve Bayes",
 "phan": "Module 11 · More Classifiers",
 "cau_hoi": "Đếm, rồi nhân xác suất — máy đoán được gì?",
 "gioi_thieu": [
  "Ở Bài 5 con đã tính xác suất có điều kiện: biết thêm một điều thì xác suất đổi. Hôm nay con dùng đúng ý đó để xây một model: <b>Naïve Bayes</b> — đếm trong dữ liệu, rồi nhân các xác suất lại.",
  "Năm chặng: ý tưởng đếm và nhân, bảng tần suất của lớp, tự nhân cho một bạn, ô bằng 0, và Naïve Bayes trong scikit-learn. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại: xác suất có điều kiện (Bài 5), chia dữ liệu và mốc (Bài 12)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai21",
 "muc_tieu": [
  "Giải thích được ý tưởng của Naïve Bayes: đếm tần suất rồi nhân xác suất.",
  "Lập và đọc được bảng tần suất của từng cột theo nhãn.",
  "Tự nhân xác suất để dự đoán nhãn cho một điểm mới.",
  "Giải thích được vì sao một ô bằng 0 là vấn đề và cách khắc phục.",
  "Dùng GaussianNB trong scikit-learn và so với mốc."
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
   "ten": "Đếm rồi nhân",
   "ten_ngan": "Ý tưởng",
   "phut": 4,
   "muc_tieu": "giải thích được ý tưởng của Naïve Bayes: đếm tần suất rồi nhân xác suất.",
   "khoi_dong": "Hôm qua trời nắng, gió nhẹ. Có nên đi đá bóng không? Con sẽ tra lại những ngày trước đó thế nào?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Naïve Bayes",
     "html": "Với mỗi nhãn, nhân: <b>tỉ lệ nhãn đó</b> × tỉ lệ giá trị cột 1 trong nhãn đó × tỉ lệ giá trị cột 2 trong nhãn đó × … Nhãn nào có tích lớn hơn là dự đoán.",
     "ky_hieu": "“Naïve” (ngây thơ): máy nhân các cột như thể chúng không liên quan gì tới nhau — một giả định đơn giản hoá, thường sai một chút nhưng vẫn dùng tốt."
    },
    {
     "t": "anh",
     "cap": "Ví dụ GfG: đếm số ngày đi chơi theo thời tiết",
     "alt": "Ví dụ GfG: đếm số ngày đi chơi theo thời tiết",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260227115947481605/outlook.webp",
     "du_phong": "img/minh-hoa-bang-tan-suat-cot-outlook.png",
     "nguon": {
      "ten": "GeeksforGeeks — Naive bayes classifiers",
      "url": "https://www.geeksforgeeks.org/machine-learning/naive-bayes-classifiers/"
     },
     "chu_giai": [
      [
       "Outlook",
       "Bầu trời"
      ],
      [
       "Sunny / Overcast / Rainy",
       "Nắng / Âm u / Mưa"
      ],
      [
       "Yes / No",
       "Có / Không đi chơi"
      ],
      [
       "P(yes)",
       "Tỉ lệ trong nhóm Có"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Tỉ lệ của từng cột cho một ngày cụ thể",
     "alt": "Tỉ lệ của từng cột cho một ngày cụ thể",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216105654598399/feature.webp",
     "du_phong": "img/minh-hoa-bang-xac-suat-cua-tung-dac-trung.png",
     "nguon": {
      "ten": "GeeksforGeeks — Naive bayes classifiers",
      "url": "https://www.geeksforgeeks.org/machine-learning/naive-bayes-classifiers/"
     },
     "chu_giai": [
      [
       "Feature / Value",
       "Cột / Giá trị"
      ],
      [
       "P(Value | Yes)",
       "Tỉ lệ giá trị đó trong nhóm Có"
      ],
      [
       "Temperature, Humidity, Wind",
       "Nhiệt độ, độ ẩm, gió"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nối Bài 5",
     "html": "P(học Nhiều | Đạt) chính là xác suất có điều kiện: trong các bạn Đạt, bao nhiêu phần trăm học nhiều?"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Lấy tỉ lệ trong cả lớp thay vì tỉ lệ trong từng nhóm nhãn.",
      "Cộng các xác suất thay vì nhân."
     ]
    },
    {
     "t": "video",
     "yt": "O2L2Uv9pdDA",
     "ten": "StatQuest — Naive Bayes, Clearly Explained!!!",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Naïve Bayes: với mỗi nhãn, nhân tỉ lệ nhãn với tỉ lệ từng cột trong nhãn đó; nhãn có tích lớn nhất thắng."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "scikit-learn — Naive Bayes (CategoricalNB, GaussianNB)",
       "url": "https://scikit-learn.org/stable/modules/naive_bayes.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "Naive Bayes Classifiers",
       "url": "https://www.geeksforgeeks.org/machine-learning/naive-bayes-classifiers/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q1",
     "q": "Naïve Bayes làm phép toán gì với các xác suất của từng cột?",
     "giai": "Tích của tỉ lệ nhãn và tỉ lệ từng cột.",
     "goi_y": "Tên thuật toán nhắc tới Bayes — quy tắc của xác suất có điều kiện.",
     "a": [
      "Nhân lại với nhau",
      "Cộng lại với nhau",
      "Lấy số lớn nhất",
      "Lấy trung bình"
     ],
     "h": "1a42d06a1265e9"
    },
    {
     "k": "ds",
     "id": "bai21-q2",
     "q": "Chữ “naïve” nghĩa là máy coi các cột như không liên quan tới nhau.",
     "giai": "Giả định đơn giản hoá để chỉ cần nhân.",
     "goi_y": "Naïve nghĩa là ngây thơ, đơn giản quá mức.",
     "h": "1e80cc99638588"
    }
   ]
  },
  {
   "ten": "Bảng tần suất của lớp",
   "ten_ngan": "Bảng tần suất",
   "phut": 4,
   "muc_tieu": "lập và đọc được bảng tần suất của từng cột theo nhãn.",
   "khoi_dong": "Chia giờ học thành Ít / Vừa / Nhiều. Trong 90 bạn Đạt, bao nhiêu bạn học Nhiều?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Bảng tần suất trên 168 bạn của tập huấn luyện",
     "alt": "Bảng tần suất trên 168 bạn của tập huấn luyện",
     "src": "img/bang-tan-suat-dem-tay.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc một ô",
     "de": null,
     "cot": [
      "Ô",
      "Nghĩa là",
      "Tỉ lệ"
     ],
     "dong": [
      [
       "Học Nhiều · Đạt",
       "69 trong 90 bạn Đạt học > 4 giờ",
       "0,767"
      ],
      [
       "Học Nhiều · Chưa đạt",
       "4 trong 78 bạn Chưa đạt",
       "0,051"
      ],
      [
       "Mạng Ít · Đạt",
       "71 trong 90 bạn Đạt",
       "0,789"
      ]
     ],
     "ket_luan": "Tỉ lệ luôn tính <b>trong nhóm nhãn</b>: chia cho 90 (Đạt) hoặc 78 (Chưa đạt).",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chia cho 168 (cả lớp) thay vì cho số bạn trong nhóm nhãn.",
      "Quên rằng tỉ lệ trong mỗi cột của một nhãn cộng lại bằng 1."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Mỗi ô: số bạn có giá trị đó trong nhãn ÷ tổng số bạn của nhãn."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q3",
     "q": "Trong bảng, tỉ lệ học Nhiều ở nhóm Đạt bằng bao nhiêu?",
     "giai": "69 : 90.",
     "goi_y": "Tìm cột Giờ tự học, dòng Nhiều, cột Đạt.",
     "a": [
      "0,767",
      "0,051",
      "0,789",
      "0,536"
     ],
     "h": "98dcdcaa73e00"
    },
    {
     "k": "dd",
     "id": "bai21-q4",
     "q": "Chọn số đúng cho mỗi chỗ trống.",
     "giai": "Chia cho tổng số bạn của nhãn đó.",
     "goi_y": "Mỗi nhóm nhãn có bao nhiêu bạn?",
     "mau": "Tỉ lệ trong nhóm Đạt chia cho {0}; trong nhóm Chưa đạt chia cho {1}.",
     "o": [
      [
       "90",
       "78",
       "168",
       "100"
      ],
      [
       "78",
       "90",
       "168",
       "72"
      ]
     ],
     "h": "1492374a61c3d2"
    }
   ]
  },
  {
   "ten": "Tự nhân cho một bạn",
   "ten_ngan": "Nhân tay",
   "phut": 5,
   "muc_tieu": "tự nhân xác suất để dự đoán nhãn cho một điểm mới.",
   "khoi_dong": "Một bạn học Nhiều, dùng mạng Ít. Nhân thế nào để biết bạn ấy Đạt hay Chưa đạt?",
   "khoi": [
    {
     "t": "demo_tung_buoc",
     "tieu_de": "nhân từng bước cho ba bạn mới",
     "huong_dan": "Chọn một bạn, bấm “Bước tiếp” để nhân từng thừa số cho cả hai nhãn.",
     "nhan_chon": "Bạn mới",
     "cot": [
      "Bước",
      "Việc",
      "Đạt",
      "Chưa đạt"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Học nhiều · mạng ít",
       "dong": [
        [
         "1",
         "Tỉ lệ Đạt / Chưa đạt ban đầu",
         "0,536",
         "0,464"
        ],
        [
         "2",
         "× tỉ lệ học “Nhiều” trong nhóm",
         "0,767",
         "0,051"
        ],
        [
         "3",
         "× tỉ lệ mạng “Ít” trong nhóm",
         "0,789",
         "0,372"
        ],
        [
         "4",
         "= Tích",
         "0,3242",
         "0,0088"
        ],
        [
         "5",
         "Kết luận",
         "<b>ĐẠT</b>",
         "—"
        ]
       ]
      },
      {
       "nhan": "Học vừa · mạng vừa",
       "dong": [
        [
         "1",
         "Tỉ lệ Đạt / Chưa đạt ban đầu",
         "0,536",
         "0,464"
        ],
        [
         "2",
         "× tỉ lệ học “Vừa” trong nhóm",
         "0,233",
         "0,372"
        ],
        [
         "3",
         "× tỉ lệ mạng “Vừa” trong nhóm",
         "0,189",
         "0,538"
        ],
        [
         "4",
         "= Tích",
         "0,0236",
         "0,0929"
        ],
        [
         "5",
         "Kết luận",
         "—",
         "<b>CHƯA ĐẠT</b>"
        ]
       ]
      },
      {
       "nhan": "Học vừa · mạng ít",
       "dong": [
        [
         "1",
         "Tỉ lệ Đạt / Chưa đạt ban đầu",
         "0,536",
         "0,464"
        ],
        [
         "2",
         "× tỉ lệ học “Vừa” trong nhóm",
         "0,233",
         "0,372"
        ],
        [
         "3",
         "× tỉ lệ mạng “Ít” trong nhóm",
         "0,789",
         "0,372"
        ],
        [
         "4",
         "= Tích",
         "0,0987",
         "0,0641"
        ],
        [
         "5",
         "Kết luận",
         "<b>ĐẠT</b>",
         "—"
        ]
       ]
      }
     ]
    },
    {
     "t": "nhan_bayes",
     "tieu_de": "tự nhân cho một bạn bất kỳ",
     "huong_dan": "Chọn mức giờ tự học và phút mạng của một bạn. Trang lấy đúng các ô đếm ở bảng tần suất phía trên rồi nhân. <b>Thử:</b> chọn học <b>Ít</b> — chuyện gì xảy ra với tích của Đạt? Rồi bật làm mịn.",
     "muc": [
      "Ít",
      "Vừa",
      "Nhiều"
     ],
     "bang": {
      "Giờ tự học": {
       "Ít": [
        0,
        45
       ],
       "Vừa": [
        21,
        29
       ],
       "Nhiều": [
        69,
        4
       ]
      },
      "Phút mạng": {
       "Ít": [
        71,
        29
       ],
       "Vừa": [
        17,
        42
       ],
       "Nhiều": [
        2,
        7
       ]
      }
     },
     "n": [
      90,
      78
     ],
     "ten_lop": [
      "Đạt",
      "Chưa đạt"
     ],
     "mac_dinh": {
      "Giờ tự học": "Nhiều",
      "Phút mạng": "Ít"
     },
     "ghi": "Đếm trên 168 bạn tập huấn luyện (mô phỏng). Làm mịn cộng 1 vào mỗi ô và cộng số mức vào mẫu — scikit-learn gọi là alpha=1."
    },
    {
     "t": "anh",
     "cap": "Học Nhiều, mạng Ít: Đạt gấp 37 lần",
     "alt": "Học Nhiều, mạng Ít: Đạt gấp 37 lần",
     "src": "img/nhan-xac-suat-mot-ban-cu-the.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đổi tích ra phần trăm",
     "de": null,
     "cot": [
      "",
      "Giá trị"
     ],
     "dong": [
      [
       "Tích Đạt",
       "0,3240"
      ],
      [
       "Tích Chưa đạt",
       "0,0089"
      ],
      [
       "% Đạt = Đạt ÷ (Đạt + Chưa đạt)",
       "<b>97,3%</b>"
      ]
     ],
     "ket_luan": "Hai tích rất nhỏ, nhưng chỉ cần so với nhau.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ tích 0,3240 là “32% Đạt” — phải chia cho tổng hai tích.",
      "Quên nhân tỉ lệ nhãn ban đầu (bước 1)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Nhân cho từng nhãn, so hai tích; đổi ra % bằng cách chia cho tổng."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q5",
     "q": "Theo phần Tự thử, bạn học Vừa và mạng Vừa được đoán thế nào?",
     "giai": "Tích Đạt 0,0236, tích Chưa đạt 0,0929.",
     "goi_y": "Chọn bạn đó, bấm tới dòng Kết luận.",
     "a": [
      "Chưa đạt",
      "Đạt",
      "Hoà",
      "Không đoán được"
     ],
     "h": "dfb8238edf1ab"
    },
    {
     "k": "sx",
     "id": "bai21-q6",
     "q": "Sắp xếp các bước Naïve Bayes đoán một bạn mới.",
     "giai": "Tỉ lệ nhãn → nhân → so → chọn.",
     "goi_y": "Bắt đầu từ việc lớp có bao nhiêu phần trăm Đạt.",
     "a": [
      "Lấy tỉ lệ mỗi nhãn ban đầu",
      "Nhân với tỉ lệ từng cột trong nhãn",
      "So tích của các nhãn",
      "Chọn nhãn có tích lớn nhất"
     ],
     "h": "1e3e73ee91bed4"
    }
   ]
  },
  {
   "ten": "Một ô bằng 0",
   "ten_ngan": "Ô bằng 0",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao một ô bằng 0 là vấn đề và cách khắc phục.",
   "khoi_dong": "Trong 90 bạn Đạt, không bạn nào học Ít. Chuyện gì xảy ra khi nhân?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Một thừa số bằng 0 → cả tích bằng 0",
     "alt": "Một thừa số bằng 0 → cả tích bằng 0",
     "src": "img/o-bang-0-nuot-mat-bang-chung.png"
    },
    {
     "t": "p",
     "html": "Nhân với 0 thì kết quả luôn là 0 — mọi thông tin khác (mạng Ít nghiêng về Đạt) bị “nuốt” mất. Máy sẽ không bao giờ đoán Đạt cho bạn học Ít, chỉ vì tập huấn luyện chưa gặp trường hợp đó."
    },
    {
     "t": "dinh_nghia",
     "ten": "Làm mịn (Laplace)",
     "html": "Cộng thêm 1 vào mọi ô khi đếm, để không ô nào bằng 0. Ô 0 thành một số rất nhỏ — vẫn nói “hiếm”, nhưng không xoá hết bằng chứng khác.",
     "ky_hieu": "scikit-learn làm sẵn qua tham số <code>alpha</code> (mặc định 1)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ ô 0 là lỗi nhập liệu — đó là trường hợp chưa gặp trong tập huấn luyện.",
      "Nghĩ chưa gặp nghĩa là không thể xảy ra."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Ô bằng 0 xoá sạch tích; làm mịn bằng cách cộng thêm 1 vào mọi ô."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q7",
     "q": "Vì sao một ô tỉ lệ bằng 0 gây rắc rối cho Naïve Bayes?",
     "giai": "Nhân với 0 → 0, bất kể các cột khác.",
     "goi_y": "Nhân một số bất kỳ với 0 được bao nhiêu?",
     "a": [
      "Cả tích thành 0",
      "Máy báo lỗi chia cho 0",
      "Tích lớn vô hạn",
      "Bảng không vẽ được"
     ],
     "h": "be6d896b0e058"
    },
    {
     "k": "ds",
     "id": "bai21-q8",
     "q": "Làm mịn Laplace cộng thêm 1 vào mọi ô khi đếm.",
     "giai": "Để không còn ô nào bằng 0.",
     "goi_y": "Làm mịn là làm gì với các ô đếm?",
     "h": "1365e4ef255555"
    }
   ]
  },
  {
   "ten": "Naïve Bayes trong scikit-learn",
   "ten_ngan": "scikit-learn",
   "phut": 5,
   "muc_tieu": "dùng GaussianNB trong scikit-learn và so với mốc.",
   "khoi_dong": "Chia giờ học thành 3 mức thì mất thông tin. Có cách nào dùng thẳng số giờ?",
   "khoi": [
    {
     "t": "anh",
     "cap": "GaussianNB: thay bảng đếm bằng đường cong hình chuông cho mỗi nhãn",
     "alt": "GaussianNB: thay bảng đếm bằng đường cong hình chuông cho mỗi nhãn",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250514094215279104/Gaussian-Naive-Bayes.webp",
     "du_phong": "img/minh-hoa-naive-bayes-voi-phan-bo-chuan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Gaussian naive bayes",
      "url": "https://www.geeksforgeeks.org/machine-learning/gaussian-naive-bayes/"
     },
     "chu_giai": [
      [
       "Gaussian Naive Bayes",
       "Naïve Bayes với phân bố chuẩn"
      ],
      [
       "p(x|A), p(x|B)",
       "Mật độ của x trong nhóm A, nhóm B"
      ],
      [
       "Class A / Class B",
       "Nhóm A / nhóm B"
      ]
     ]
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
       "<code>nb = GaussianNB().fit(X_train, y_train)</code>"
      ],
      [
       "Dự đoán",
       "<code>nb.predict(X_test)</code> · <code>nb.predict_proba(X_test)</code>"
      ],
      [
       "Đánh giá",
       "<code>accuracy_score(y_test, du_doan)</code>"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "kết quả trên tập kiểm tra",
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
       "Naïve Bayes đếm 3 mức",
       "88,9%"
      ],
      [
       "GaussianNB (số giờ, số phút thật)",
       "<b>91,7%</b>"
      ],
      [
       "Logistic (Bài 16) · cây sâu 2 (Bài 18)",
       "91,7%"
      ]
     ],
     "ket_luan": "Dùng số thật tốt hơn chia mức; ngang logistic và cây.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Naïve Bayes ở đâu ngoài đời?",
     "html": "Bộ lọc thư rác đời đầu: đếm mỗi từ xuất hiện trong thư rác và thư thường bao nhiêu lần, rồi nhân. Nhanh, cần ít dữ liệu, dễ cập nhật khi có thư mới."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đưa về 0 – 1 trước GaussianNB — không cần, mỗi cột có đường cong riêng.",
      "Nghĩ Naïve Bayes luôn kém vì “ngây thơ”."
     ]
    },
    {
     "t": "tom_tat",
     "html": "GaussianNB().fit → predict / predict_proba; nhanh, ít tham số, dùng tốt với nhiều cột."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q9",
     "q": "Lớp scikit-learn nào dùng Naïve Bayes với cột số liên tục?",
     "giai": "Gaussian = phân bố chuẩn (hình chuông).",
     "goi_y": "Tên lớp có chữ NB.",
     "a": [
      "GaussianNB",
      "LinearRegression",
      "KNeighborsClassifier",
      "MinMaxScaler"
     ],
     "h": "79ee23bae36e1"
    },
    {
     "k": "ma",
     "id": "bai21-q10",
     "q": "GaussianNB so với cách đếm 3 mức: hai điều nào đúng? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Không mất thông tin khi chia mức.",
     "goi_y": "So hai dòng giữa của bảng kết quả.",
     "a": [
      "Dùng thẳng số giờ, số phút",
      "Đúng hơn trên tập kiểm tra của bài",
      "Bắt buộc chia mức trước",
      "Cần đưa về 0 – 1 trước"
     ],
     "h": "fcf8d4e3b8fc5"
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
    "id": "bai21-q11",
    "q": "Nhìn hình. Trong nhóm Chưa đạt, tỉ lệ học Ít bằng bao nhiêu?",
    "giai": "45 : 78.",
    "img": {
     "src": "img/bang-tan-suat-dem-tay.png"
    },
    "a": [
     "0,577",
     "0,000",
     "0,372",
     "0,538"
    ],
    "h": "125fe38a6caa64"
   },
   {
    "k": "mc",
    "id": "bai21-q12",
    "q": "Nhìn hình. Tích của nhãn Đạt bằng bao nhiêu?",
    "giai": "Tích ba thừa số.",
    "img": {
     "src": "img/nhan-xac-suat-mot-ban-cu-the.png"
    },
    "a": [
     "0,3240",
     "0,0089",
     "0,536",
     "1,0000"
    ],
    "h": "30cb95984644b"
   },
   {
    "k": "mc",
    "id": "bai21-q13",
    "q": "Nhìn hình. Vì sao tích Đạt bằng 0?",
    "giai": "P(học Ít | Đạt) = 0.",
    "img": {
     "src": "img/o-bang-0-nuot-mat-bang-chung.png"
    },
    "a": [
     "Không bạn Đạt nào học Ít",
     "Không bạn nào dùng mạng Ít",
     "Tỉ lệ Đạt ban đầu bằng 0",
     "Máy tính bị lỗi làm tròn"
    ],
    "h": "1197cc74adabff"
   },
   {
    "k": "mc",
    "id": "bai21-q14",
    "q": "Nhìn hình. Trong bảng Outlook, có bao nhiêu ngày Overcast đi chơi (Yes)?",
    "giai": "Dòng Overcast, cột Yes.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260227115947481605/outlook.webp",
     "du_phong": "img/minh-hoa-bang-tan-suat-cot-outlook.png",
     "nguon": {
      "ten": "GeeksforGeeks — Naive bayes classifiers",
      "url": "https://www.geeksforgeeks.org/machine-learning/naive-bayes-classifiers/"
     }
    },
    "a": [
     "4",
     "0",
     "2",
     "3"
    ],
    "h": "13c060612b5dfb"
   },
   {
    "k": "mc",
    "id": "bai21-q15",
    "q": "Nhìn hình. Đường cong màu đỏ và xanh biểu diễn điều gì?",
    "giai": "Mỗi nhóm một đường chuông.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250514094215279104/Gaussian-Naive-Bayes.webp",
     "du_phong": "img/minh-hoa-naive-bayes-voi-phan-bo-chuan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Gaussian naive bayes",
      "url": "https://www.geeksforgeeks.org/machine-learning/gaussian-naive-bayes/"
     }
    },
    "a": [
     "Phân bố giá trị x trong từng nhóm",
     "Ranh giới giữa hai nhóm",
     "Đường hồi quy của x",
     "Số lần x xuất hiện trong cả bảng"
    ],
    "h": "455e9aeadda37"
   },
   {
    "k": "mc",
    "id": "bai21-q16",
    "q": "Trong 50 email lừa đảo, 30 email có chữ “khẩn cấp”. Tỉ lệ “khẩn cấp” trong nhóm lừa đảo là bao nhiêu?",
    "giai": "30 : 50.",
    "a": [
     "0,6",
     "0,3",
     "0,5",
     "30"
    ],
    "h": "4f0829fe13360"
   },
   {
    "k": "mc",
    "id": "bai21-q17",
    "q": "Naïve Bayes cho tích Có = 0,02, tích Không = 0,06. Dự đoán là gì?",
    "giai": "Tích lớn hơn thắng.",
    "a": [
     "Không",
     "Có",
     "Hoà",
     "Không đoán được"
    ],
    "h": "13781390e72fd1"
   },
   {
    "k": "mc",
    "id": "bai21-q18",
    "q": "Bộ lọc thư rác chưa từng thấy từ “voucher” trong thư thường. Không làm mịn thì sao?",
    "giai": "Tỉ lệ 0 trong nhóm thường → tích nhóm thường bằng 0.",
    "a": [
     "Mọi thư có “voucher” bị coi là rác",
     "Thư đó chắc chắn là thư thường",
     "Bộ lọc tự học thêm từ mới",
     "Không ảnh hưởng gì tới kết quả"
    ],
    "h": "a3f97e2a1f77e"
   },
   {
    "k": "mc",
    "id": "bai21-q19",
    "q": "Vì sao Naïve Bayes được gọi là “ngây thơ”?",
    "giai": "Giả định đơn giản để chỉ cần nhân.",
    "a": [
     "Coi các cột như không liên quan nhau",
     "Chỉ dùng được cho trẻ em",
     "Luôn đoán nhãn nhiều nhất",
     "Không cần dữ liệu huấn luyện"
    ],
    "h": "b3072c358808c"
   },
   {
    "k": "ma",
    "id": "bai21-q20",
    "q": "Những bước nào có trong Naïve Bayes? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đếm rồi nhân.",
    "a": [
     "Đếm tần suất theo nhãn",
     "Nhân các tỉ lệ",
     "Tìm K láng giềng gần nhất",
     "Kẻ đường có lề rộng nhất"
    ],
    "h": "189b77cd8a5966"
   },
   {
    "k": "ma",
    "id": "bai21-q21",
    "q": "Hai điểm mạnh nào của Naïve Bayes? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đơn giản, nhanh.",
    "a": [
     "Huấn luyện rất nhanh",
     "Cần ít dữ liệu",
     "Luôn chính xác nhất",
     "Không bao giờ gặp ô bằng 0"
    ],
    "h": "1a7e633b043150"
   },
   {
    "k": "ma",
    "id": "bai21-q22",
    "q": "Tỉ lệ P(học Nhiều | Đạt) được tính thế nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Trong nhóm nhãn Đạt.",
    "a": [
     "Đếm bạn Đạt học Nhiều",
     "Chia cho tổng số bạn Đạt",
     "Chia cho cả lớp",
     "Chia cho số bạn học Nhiều"
    ],
    "h": "34a4b65668b00"
   },
   {
    "k": "ma",
    "id": "bai21-q23",
    "q": "Cách nào tránh được tích bằng 0? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Làm mịn Laplace.",
    "a": [
     "Cộng thêm 1 vào mọi ô",
     "Dùng tham số alpha",
     "Xoá cột có ô bằng 0",
     "Nhân thêm với 0"
    ],
    "h": "e7902173c64c3"
   },
   {
    "k": "sx",
    "id": "bai21-q24",
    "q": "Sắp xếp các bước lập bảng tần suất.",
    "giai": "Chia mức → đếm → chia → ghi.",
    "a": [
     "Chia giá trị cột thành các mức",
     "Đếm số bạn mỗi mức trong từng nhãn",
     "Chia cho tổng số bạn của nhãn",
     "Ghi tỉ lệ vào bảng"
    ],
    "h": "1cae65e1a375a1"
   },
   {
    "k": "sx",
    "id": "bai21-q25",
    "q": "Sắp xếp các bước dùng GaussianNB.",
    "giai": "Chia → fit → predict → so mốc.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Fit GaussianNB",
     "Predict tập kiểm tra",
     "So với mốc model lười"
    ],
    "h": "105b5dc2181b13"
   },
   {
    "k": "dd",
    "id": "bai21-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Nhân rồi chọn lớn nhất.",
    "mau": "Naïve Bayes {0} các tỉ lệ; nhãn có tích {1} là dự đoán.",
    "o": [
     [
      "nhân",
      "cộng",
      "trừ",
      "chia"
     ],
     [
      "lớn nhất",
      "nhỏ nhất",
      "bằng 0",
      "bằng 1"
     ]
    ],
    "h": "1021ee23c52dfa"
   },
   {
    "k": "dd",
    "id": "bai21-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc từ hình nhân tay.",
    "mau": "Học Nhiều, mạng Ít: Đạt gấp {0} lần, tức khoảng {1} Đạt.",
    "o": [
     [
      "37",
      "2",
      "10",
      "100"
     ],
     [
      "97,3%",
      "50,0%",
      "32,4%",
      "100%"
     ]
    ],
    "h": "d456f1b8142a7"
   },
   {
    "k": "dd",
    "id": "bai21-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Laplace.",
    "mau": "Một ô bằng 0 làm tích bằng {0}; cách khắc phục gọi là {1}.",
    "o": [
     [
      "0",
      "1",
      "vô cùng",
      "0,5"
     ],
     [
      "làm mịn",
      "đưa về 0 – 1",
      "cắt tỉa",
      "bỏ phiếu"
     ]
    ],
    "h": "12422398b73875"
   },
   {
    "k": "dd",
    "id": "bai21-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "So với mốc.",
    "mau": "GaussianNB đúng {0} trên tập kiểm tra; mốc model lười là {1}.",
    "o": [
     [
      "91,7%",
      "54,2%",
      "100%",
      "50,0%"
     ],
     [
      "54,2%",
      "91,7%",
      "100%",
      "90,0%"
     ]
    ],
    "h": "16969557b9b752"
   },
   {
    "k": "ds",
    "id": "bai21-q30",
    "q": "Naïve Bayes cần đưa các cột về cùng thang đo.",
    "giai": "Mỗi cột được xét riêng trong từng nhãn.",
    "h": "75bc14782835c"
   },
   {
    "k": "ds",
    "id": "bai21-q31",
    "q": "Tỉ lệ trong bảng tần suất của một nhãn tính trên số bạn của nhãn đó.",
    "giai": "Xác suất có điều kiện.",
    "h": "188a7a42a0698c"
   },
   {
    "k": "ds",
    "id": "bai21-q32",
    "q": "Tích 0,3240 nghĩa là bạn đó có 32,4% khả năng Đạt.",
    "giai": "Phải chia cho tổng hai tích: 97,3%.",
    "h": "1884f913bd3e1d"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
