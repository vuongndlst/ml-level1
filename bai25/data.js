window.BAI = {
 "bai": 25,
 "ma": "bai25",
 "nhan": "Bài 25",
 "tieu_de": "K-Means: máy tự chia nhóm",
 "phan": "Phần D · Học không giám sát",
 "cau_hoi": "Không có nhãn, máy có tự chia được nhóm không?",
 "gioi_thieu": [
  "Từ Bài 11 tới Bài 24, bảng nào cũng có cột <b>nhãn</b> (Đạt / Chưa đạt) để máy học theo. Nhưng rất nhiều dữ liệu ngoài đời không có nhãn: danh sách khách hàng, bài hát, ảnh.",
  "Bài này con gặp nhánh thứ hai của Machine Learning: <b>học không giám sát</b>. Thuật toán K-Means tự chia dữ liệu thành k nhóm chỉ bằng khoảng cách. Bảng khối 10 là bảng mô phỏng; lần này máy không được nhìn cột Result.",
  "Con dùng lại khoảng cách và việc đưa về cùng thang đo (Bài 12)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai25",
 "muc_tieu": [
  "Phân biệt học có giám sát và học không giám sát.",
  "Mô tả được hai bước lặp của K-Means: gán vào tâm gần nhất, dời tâm.",
  "Dùng đường khuỷu tay để chọn số nhóm k.",
  "Giải thích vì sao phải đưa các cột về cùng thang đo trước K-Means.",
  "Đặt tên và diễn giải các nhóm bằng tâm của nhóm."
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
   "ten": "Khi không có nhãn",
   "ten_ngan": "Không nhãn",
   "phut": 4,
   "muc_tieu": "phân biệt học có giám sát và học không giám sát.",
   "khoi_dong": "Một cửa hàng có danh sách 10 000 khách nhưng không ai ghi “khách loại gì”. Cửa hàng có thể làm gì với danh sách đó?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Chỉ có hai cột số — không có cột Đạt / Chưa đạt",
     "alt": "Chỉ có hai cột số — không có cột Đạt / Chưa đạt",
     "src": "img/du-lieu-khong-co-nhan.png"
    },
    {
     "t": "bang",
     "cot": [
      "",
      "Học có giám sát (Bài 11 – 24)",
      "Học không giám sát (Bài 25)"
     ],
     "dong": [
      [
       "Dữ liệu",
       "Có cột nhãn để học theo",
       "Không có cột nhãn"
      ],
      [
       "Máy làm gì",
       "Học cách đoán nhãn cho dòng mới",
       "Tự tìm các nhóm giống nhau"
      ],
      [
       "Ví dụ",
       "Đoán Đạt / Chưa đạt",
       "Chia khách hàng thành nhóm"
      ],
      [
       "Đánh giá",
       "So với nhãn thật: độ chính xác",
       "Không có đáp án — con người diễn giải"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Gom nhóm (clustering)",
     "html": "Chia các dòng dữ liệu thành các nhóm sao cho dòng <b>cùng nhóm thì giống nhau</b>, khác nhóm thì khác nhau. Máy không biết tên nhóm — con người đặt tên sau.",
     "ky_hieu": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ gom nhóm là phân loại — phân loại cần nhãn có sẵn, gom nhóm thì không.",
      "Nghĩ máy tự biết “nhóm 1 là nhóm học giỏi” — máy chỉ đánh số nhóm."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Không có nhãn → học không giám sát; gom nhóm tìm các dòng giống nhau."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q1",
     "q": "Bài toán nào là học không giám sát?",
     "giai": "Không có nhãn sẵn cho bài hát.",
     "goi_y": "Bài toán nào không có cột đáp án để học theo?",
     "a": [
      "Chia 5 000 bài hát thành các nhóm giống nhau",
      "Đoán email có phải thư rác theo mẫu đã gắn nhãn",
      "Đoán giá nhà từ bảng có sẵn giá",
      "Đoán Đạt / Chưa đạt theo bảng năm trước"
     ],
     "h": "4ed8412906882"
    },
    {
     "k": "ds",
     "id": "bai25-q2",
     "q": "Sau khi gom nhóm, máy tự đặt tên nhóm như “nhóm chăm học”.",
     "giai": "Máy chỉ đánh số 0, 1, 2… Con người đặt tên.",
     "goi_y": "Máy có biết ý nghĩa của các cột không?",
     "h": "16332eaf973728"
    }
   ]
  },
  {
   "ten": "K-Means làm thế nào?",
   "ten_ngan": "Thuật toán",
   "phut": 5,
   "muc_tieu": "mô tả được hai bước lặp của K-Means: gán vào tâm gần nhất, dời tâm.",
   "khoi_dong": "Nếu phải chia 240 bạn thành 2 nhóm chỉ bằng cách nhìn chấm trên hình, con sẽ làm thế nào?",
   "khoi": [
    {
     "t": "p",
     "html": "K-Means chọn trước <b>k</b> tâm, rồi lặp hai bước tới khi không bạn nào đổi nhóm:"
    },
    {
     "t": "ds",
     "muc": [
      "<b>Gán:</b> mỗi bạn vào nhóm của tâm gần nhất (khoảng cách Bài 12).",
      "<b>Dời tâm:</b> mỗi tâm dời về điểm giữa (trung bình) của các bạn trong nhóm."
     ]
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "K-Means với k = 2 trên bảng khối 10",
     "huong_dan": "Bấm “Bước tiếp” để xem từng lần gán và dời tâm. Toạ độ đã đưa về 0 – 1 (giờ tự học ; phút mạng XH).",
     "nhan_chon": "Lần chạy",
     "cot": [
      "Vòng",
      "Việc",
      "Kết quả"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Bắt đầu từ 2 tâm ngẫu nhiên",
       "dong": [
        [
         "0",
         "Chọn ngẫu nhiên 2 bạn làm tâm",
         "Tâm A (0,09 ; 0,13), tâm B (0,71 ; 0,24)"
        ],
        [
         "0",
         "Gán mỗi bạn vào tâm gần nhất",
         "A: 96 bạn, B: 144 bạn — tổng khoảng cách² 21,11"
        ],
        [
         "1",
         "Dời tâm về giữa nhóm",
         "Tâm A (0,18 ; 0,39), tâm B (0,69 ; 0,27)"
        ],
        [
         "1",
         "Gán lại mỗi bạn vào tâm gần nhất",
         "A: 110 bạn, B: 130 bạn — tổng khoảng cách² 13,11"
        ],
        [
         "2",
         "Dời tâm về giữa nhóm",
         "Tâm A (0,21 ; 0,39), tâm B (0,72 ; 0,25)"
        ],
        [
         "2",
         "Gán lại mỗi bạn vào tâm gần nhất",
         "A: 119 bạn, B: 121 bạn — tổng khoảng cách² 12,68"
        ],
        [
         "3",
         "Dời tâm về giữa nhóm",
         "Tâm A (0,23 ; 0,40), tâm B (0,74 ; 0,24)"
        ],
        [
         "3",
         "Gán lại mỗi bạn vào tâm gần nhất",
         "A: 127 bạn, B: 113 bạn — tổng khoảng cách² 12,46"
        ],
        [
         "…",
         "Lặp tới khi không bạn nào đổi nhóm",
         "Dừng — hai nhóm ổn định"
        ]
       ]
      }
     ]
    },
    {
     "t": "anh",
     "cap": "Sau mỗi vòng, tổng khoảng cách² giảm: 21,11 → 13,11 → 12,68 → 12,46",
     "alt": "Sau mỗi vòng, tổng khoảng cách² giảm: 21,11 → 13,11 → 12,68 → 12,46",
     "src": "img/k-means-tung-vong.png"
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Tổng khoảng cách² (inertia)",
     "html": "Cộng bình phương khoảng cách từ mỗi bạn tới tâm nhóm mình. Càng nhỏ, các nhóm càng “chặt”. Mỗi vòng K-Means chỉ làm con số này nhỏ đi hoặc giữ nguyên."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ tâm phải là một bạn có thật — sau vòng đầu, tâm là điểm trung bình.",
      "Nghĩ K-Means chạy một lần là xong — nó lặp tới khi ổn định."
     ]
    },
    {
     "t": "tom_tat",
     "html": "K-Means = lặp (gán vào tâm gần nhất → dời tâm về giữa nhóm) tới khi ổn định."
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai25-q3",
     "q": "Sắp xếp các bước của K-Means.",
     "giai": "Chọn tâm → gán → dời → lặp.",
     "goi_y": "Xem thứ tự các dòng trong phần Tự thử.",
     "a": [
      "Chọn k tâm ban đầu",
      "Gán mỗi điểm vào tâm gần nhất",
      "Dời tâm về giữa nhóm",
      "Lặp tới khi không điểm nào đổi nhóm"
     ],
     "h": "4ad0e6841fe7b"
    },
    {
     "k": "mc",
     "id": "bai25-q4",
     "q": "Theo phần Tự thử, sau vòng 1 tổng khoảng cách² còn bao nhiêu?",
     "giai": "Giảm từ 21,11 xuống 13,11.",
     "goi_y": "Bấm “Bước tiếp” tới dòng gán lại ở vòng 1.",
     "a": [
      "13,11",
      "21,11",
      "12,46",
      "29,67"
     ],
     "h": "133d8b54f6e65b"
    }
   ]
  },
  {
   "ten": "Chọn số nhóm k",
   "ten_ngan": "Chọn k",
   "phut": 5,
   "muc_tieu": "dùng đường khuỷu tay để chọn số nhóm k.",
   "khoi_dong": "Nếu cho mỗi bạn một nhóm riêng (k = 240), tổng khoảng cách² bằng bao nhiêu? Có nên chọn k lớn nhất không?",
   "khoi": [
    {
     "t": "demo_truot",
     "tieu_de": "thử số nhóm k",
     "huong_dan": "Kéo để đổi k. Thanh cho biết tổng khoảng cách² đã giảm bao nhiêu phần trăm so với k = 1. Chú ý chỗ phần giảm thêm bắt đầu nhỏ lại.",
     "dieu_kien": "k = <b>{x}</b> nhóm",
     "moc": [
      {
       "x": 1,
       "n": "tổng khoảng cách² = 29,67",
       "p": 0.0
      },
      {
       "x": 2,
       "n": "tổng khoảng cách² = 12,33; giảm thêm 17,34 so với k = 1",
       "p": 58.4
      },
      {
       "x": 3,
       "n": "tổng khoảng cách² = 8,81; giảm thêm 3,52 so với k = 2",
       "p": 70.3
      },
      {
       "x": 4,
       "n": "tổng khoảng cách² = 6,18; giảm thêm 2,63 so với k = 3",
       "p": 79.2
      },
      {
       "x": 5,
       "n": "tổng khoảng cách² = 4,85; giảm thêm 1,33 so với k = 4",
       "p": 83.7
      },
      {
       "x": 6,
       "n": "tổng khoảng cách² = 4,11; giảm thêm 0,74 so với k = 5",
       "p": 86.1
      },
      {
       "x": 7,
       "n": "tổng khoảng cách² = 3,52; giảm thêm 0,59 so với k = 6",
       "p": 88.1
      }
     ],
     "nhan_n": "Tổng khoảng cách²",
     "nhan_p": "Đã giảm so với k = 1",
     "so_le_x": 0,
     "bat_dau": 0
    },
    {
     "t": "anh",
     "cap": "Đường khuỷu tay của bảng khối 10 (đã đưa về 0 – 1)",
     "alt": "Đường khuỷu tay của bảng khối 10 (đã đưa về 0 – 1)",
     "src": "img/duong-khuyu-tay.png"
    },
    {
     "t": "p",
     "html": "Từ k = 1 lên k = 2, tổng khoảng cách² giảm 58,4%. Từ k = 2 lên k = 3 chỉ giảm thêm 3,52. Chỗ “gập” như khuỷu tay là k = 2."
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Khuỷu tay chỉ là gợi ý",
     "html": "k càng lớn thì tổng khoảng cách² càng nhỏ — k = số bạn thì bằng 0, nhưng vô nghĩa. Chọn k còn tuỳ mục đích: thầy cô muốn chia lớp phụ đạo thành 3 nhóm thì k = 3 hợp lý hơn."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn k có tổng khoảng cách² nhỏ nhất.",
      "Tin rằng đường khuỷu tay luôn có một chỗ gập rõ ràng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Chọn k ở chỗ gập của đường khuỷu tay, rồi kiểm tra bằng mục đích sử dụng."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q5",
     "q": "Theo phần Tự thử, k = 2 đã làm tổng khoảng cách² giảm bao nhiêu so với k = 1?",
     "giai": "29,67 → 12,33.",
     "goi_y": "Kéo thanh tới k = 2.",
     "a": [
      "58,4%",
      "70,3%",
      "100%",
      "83,7%"
     ],
     "h": "360a98918f19e"
    },
    {
     "k": "ds",
     "id": "bai25-q6",
     "q": "Nên chọn k có tổng khoảng cách² nhỏ nhất.",
     "giai": "k lớn nhất luôn nhỏ nhất nhưng vô nghĩa.",
     "goi_y": "Nếu mỗi bạn một nhóm thì sao?",
     "h": "18207befb9bbd0"
    }
   ]
  },
  {
   "ten": "Thang đo và kiểm tra nhóm",
   "ten_ngan": "Thang đo",
   "phut": 4,
   "muc_tieu": "giải thích vì sao phải đưa các cột về cùng thang đo trước K-Means.",
   "khoi_dong": "Giờ tự học từ 0 tới 8, phút mạng XH từ 0 tới hơn 300. Khi đo khoảng cách, cột nào sẽ “nói to” hơn?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Máy không được xem nhãn, nhưng hai nhóm trùng 87,1% với Đạt / Chưa đạt",
     "alt": "Máy không được xem nhãn, nhưng hai nhóm trùng 87,1% với Đạt / Chưa đạt",
     "src": "img/hai-nhom-va-nhan-that.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "so sánh",
     "de": "K-Means k = 2 trên cùng hai cột, đối chiếu với cột Result sau khi chia.",
     "cot": [
      "Cách làm",
      "Trùng với Đạt / Chưa đạt"
     ],
     "dong": [
      [
       "Đưa về 0 – 1 (MinMaxScaler)",
       "87,1%"
      ],
      [
       "Để nguyên đơn vị",
       "70,0%"
      ]
     ],
     "ket_luan": "Để nguyên, phút mạng XH lấn át giờ tự học: máy gần như chỉ chia theo phút mạng XH.",
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nhãn chỉ để kiểm tra",
     "html": "Bảng khối 10 có sẵn cột Result nên con <b>đối chiếu</b> được. Máy vẫn không dùng cột đó khi chia. Với dữ liệu thật không có nhãn, con kiểm tra bằng cách đọc tâm nhóm."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên đưa về cùng thang đo — lỗi giống KNN ở Bài 12.",
      "Nghĩ 87,1% là “độ chính xác” — K-Means không đoán nhãn, đây chỉ là mức trùng khớp."
     ]
    },
    {
     "t": "tom_tat",
     "html": "K-Means đo khoảng cách → phải đưa các cột về cùng thang đo."
    }
   ],
   "checkpoint": [
    {
     "k": "dd",
     "id": "bai25-q7",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "Đưa về cùng thang đo giúp cả hai cột cùng được tính.",
     "goi_y": "Đọc bảng so sánh.",
     "mau": "Đưa về 0 – 1: trùng {0}; để nguyên đơn vị: trùng {1}.",
     "o": [
      [
       "87,1%",
       "70,0%",
       "100%",
       "50,0%"
      ],
      [
       "70,0%",
       "87,1%",
       "100%",
       "95,0%"
      ]
     ],
     "h": "1358a2409488aa"
    },
    {
     "k": "mc",
     "id": "bai25-q8",
     "q": "Vì sao để nguyên đơn vị thì kết quả kém hơn?",
     "giai": "Khoảng cách bị cột số lớn chi phối.",
     "goi_y": "Hai cột có thang đo chênh nhau bao nhiêu?",
     "a": [
      "Phút mạng XH có số lớn, lấn át giờ học",
      "K-Means không dùng được cột số",
      "Giờ tự học có quá nhiều ô trống",
      "Máy đã nhìn thấy cột Result"
     ],
     "h": "9248c458b9b41"
    }
   ]
  },
  {
   "ten": "Đặt tên và dùng các nhóm",
   "ten_ngan": "Diễn giải",
   "phut": 4,
   "muc_tieu": "đặt tên và diễn giải các nhóm bằng tâm của nhóm.",
   "khoi_dong": "Máy trả về nhóm 0, 1, 2. Làm sao biết nhóm nào là nhóm nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "k = 3: ba nhóm với ba tâm",
     "alt": "k = 3: ba nhóm với ba tâm",
     "src": "img/ba-nhom-cua-khoi-10.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc tâm nhóm",
     "de": "Tâm nhóm đổi lại về đơn vị gốc (giờ, phút) để dễ đọc.",
     "cot": [
      "Tên con đặt",
      "Số bạn",
      "Giờ tự học",
      "Phút mạng XH",
      "Đạt (đối chiếu)"
     ],
     "dong": [
      [
       "Học ít",
       "91",
       "1,64",
       "193",
       "4 / 91"
      ],
      [
       "Ở giữa",
       "75",
       "3,82",
       "159",
       "51 / 75"
      ],
      [
       "Học nhiều",
       "74",
       "6,05",
       "97",
       "74 / 74"
      ]
     ],
     "ket_luan": "Nhóm “Ở giữa” có 51 / 75 bạn Đạt — nhóm cần thầy cô để ý nhất.",
     "nhan_manh": []
    },
    {
     "t": "bang",
     "cot": [
      "Ngoài đời",
      "Gom nhóm để làm gì"
     ],
     "dong": [
      [
       "Cửa hàng",
       "Chia khách thành nhóm để gửi ưu đãi phù hợp"
      ],
      [
       "Ứng dụng nhạc",
       "Gom bài hát giống nhau thành playlist"
      ],
      [
       "Ảnh",
       "Gom màu gần nhau để nén ảnh"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Dùng nhóm cho đúng",
     "html": "Nhóm chỉ mô tả dữ liệu đã có — không phải nhãn dán lên một người. Ở thực hành, con dùng K-Means để gom bài hát, không để xếp loại bạn bè."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đặt tên nhóm mà không đọc tâm nhóm.",
      "Dùng nhóm như lời phán xét về một người."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Đọc tâm nhóm (đơn vị gốc) → đặt tên → dùng cho mục đích cụ thể."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai25-q9",
     "q": "Nhóm có tâm 6,05 giờ tự học, 97 phút mạng XH nên được đặt tên gì?",
     "giai": "Giờ học cao nhất, phút mạng XH thấp nhất.",
     "goi_y": "So với hai tâm còn lại trong bảng.",
     "a": [
      "Học nhiều, ít mạng XH",
      "Học ít, nhiều mạng XH",
      "Học vừa, mạng XH vừa",
      "Không đặt tên được"
     ],
     "h": "1f423d09d2d5ec"
    },
    {
     "k": "ma",
     "id": "bai25-q10",
     "q": "Hai việc nào hợp với gom nhóm? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Không cần nhãn có sẵn.",
     "goi_y": "Việc nào không có cột đáp án?",
     "a": [
      "Gom bài hát thành playlist",
      "Chia khách hàng để gửi ưu đãi",
      "Đoán giá nhà từ diện tích",
      "Đoán email thư rác theo nhãn"
     ],
     "h": "fcdcb0491c9b5"
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
    "q": "Nhìn hình. Vì sao các chấm chỉ có một màu xám?",
    "giai": "Chưa ai gắn nhãn.",
    "img": {
     "src": "img/du-lieu-khong-co-nhan.png"
    },
    "a": [
     "Dữ liệu không có nhãn",
     "Máy đã chia xong nhóm",
     "Chỉ có một bạn",
     "Hình bị lỗi màu"
    ],
    "h": "1f8e07cb1e52df"
   },
   {
    "k": "mc",
    "id": "bai25-q12",
    "q": "Nhìn hình. Khuỷu tay của đường nằm ở k bằng mấy?",
    "giai": "Sau k = 2 đường giảm chậm.",
    "img": {
     "src": "img/duong-khuyu-tay.png"
    },
    "a": [
     "k = 2",
     "k = 1",
     "k = 5",
     "k = 7"
    ],
    "h": "1f2fff50f44617"
   },
   {
    "k": "mc",
    "id": "bai25-q13",
    "q": "Nhìn hình. Nhóm nào có ít bạn Đạt nhất?",
    "giai": "4 / 91 bạn.",
    "img": {
     "src": "img/ba-nhom-cua-khoi-10.png"
    },
    "a": [
     "Học ít",
     "Ở giữa",
     "Học nhiều",
     "Ba nhóm bằng nhau"
    ],
    "h": "12f5f29fd3b50"
   },
   {
    "k": "mc",
    "id": "bai25-q14",
    "q": "Nhìn hình. Qua các vòng, tổng khoảng cách² thay đổi thế nào?",
    "giai": "K-Means luôn làm nó nhỏ đi.",
    "img": {
     "src": "img/k-means-tung-vong.png"
    },
    "a": [
     "Giảm dần",
     "Tăng dần",
     "Giữ nguyên",
     "Tăng rồi giảm"
    ],
    "h": "8ad2e75e79270"
   },
   {
    "k": "mc",
    "id": "bai25-q15",
    "q": "Trong K-Means, chữ K là gì?",
    "giai": "Khác K trong KNN.",
    "a": [
     "Số nhóm cần chia",
     "Số láng giềng gần nhất",
     "Số cột dữ liệu",
     "Số vòng lặp tối đa"
    ],
    "h": "dc96783f38df7"
   },
   {
    "k": "mc",
    "id": "bai25-q16",
    "q": "Sau vòng đầu, tâm của một nhóm là gì?",
    "giai": "Dời tâm về giữa.",
    "a": [
     "Trung bình các điểm trong nhóm",
     "Điểm xa nhất trong nhóm",
     "Điểm đầu tiên của bảng",
     "Một điểm chọn ngẫu nhiên mới"
    ],
    "h": "1270700dd78e51"
   },
   {
    "k": "mc",
    "id": "bai25-q17",
    "q": "Dữ liệu có cột tuổi (10 – 18) và thu nhập gia đình (triệu). Trước K-Means cần làm gì?",
    "giai": "Khoảng cách.",
    "a": [
     "Đưa các cột về cùng thang đo",
     "Xoá hẳn cột tuổi khỏi bảng",
     "Thêm một cột nhãn mới",
     "Sắp xếp các dòng theo tuổi"
    ],
    "h": "1594989b6bf31c"
   },
   {
    "k": "mc",
    "id": "bai25-q18",
    "q": "Ứng dụng nhạc muốn tự tạo playlist từ đặc điểm bài hát, không có nhãn thể loại. Dùng gì?",
    "giai": "Không có nhãn.",
    "a": [
     "Gom nhóm bằng K-Means",
     "Hồi quy tuyến tính",
     "Hồi quy logistic",
     "Cây phân loại"
    ],
    "h": "1d2c49eb03d44f"
   },
   {
    "k": "mc",
    "id": "bai25-q19",
    "q": "Thầy cô chỉ có đủ người phụ đạo cho 3 nhóm. Khuỷu tay gợi ý k = 2. Chọn k nào hợp lý?",
    "giai": "Mục đích sử dụng.",
    "a": [
     "k = 3 theo mục đích",
     "k = 2 bắt buộc",
     "k = 240",
     "k = 1"
    ],
    "h": "a01ad4e256e98"
   },
   {
    "k": "ma",
    "id": "bai25-q20",
    "q": "Hai điều nào đúng về học không giám sát? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Không có đáp án sẵn.",
    "a": [
     "Không cần cột nhãn",
     "Con người diễn giải kết quả",
     "Đo bằng độ chính xác",
     "Luôn cần tập kiểm tra có nhãn"
    ],
    "h": "26c1dbdfd985d"
   },
   {
    "k": "ma",
    "id": "bai25-q21",
    "q": "Hai bước nào lặp lại trong K-Means? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hai bước.",
    "a": [
     "Gán vào tâm gần nhất",
     "Dời tâm về giữa nhóm",
     "Chia train / test",
     "Tính độ chính xác"
    ],
    "h": "7e0258fe019e1"
   },
   {
    "k": "ma",
    "id": "bai25-q22",
    "q": "Hai cách nào giúp đặt tên nhóm? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Diễn giải.",
    "a": [
     "Đọc tâm nhóm theo đơn vị gốc",
     "So các tâm với nhau",
     "Đếm số vòng lặp",
     "Xem random_state"
    ],
    "h": "15f81aab70c55c"
   },
   {
    "k": "ma",
    "id": "bai25-q23",
    "q": "Hai lỗi nào hay gặp với K-Means? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hai lỗi.",
    "a": [
     "Quên đưa về cùng thang đo",
     "Chọn k có tổng khoảng cách² nhỏ nhất",
     "Đọc tâm nhóm",
     "Vẽ đường khuỷu tay"
    ],
    "h": "27f4dc9ab0a8c"
   },
   {
    "k": "sx",
    "id": "bai25-q24",
    "q": "Sắp xếp các bước dùng K-Means trên một bảng mới.",
    "giai": "Chuẩn bị → chọn k → chạy → diễn giải.",
    "a": [
     "Chọn các cột số",
     "Đưa về cùng thang đo",
     "Vẽ đường khuỷu tay chọn k",
     "Chạy K-Means",
     "Đọc tâm và đặt tên nhóm"
    ],
    "h": "6723c19085a98"
   },
   {
    "k": "sx",
    "id": "bai25-q25",
    "q": "Sắp xếp một vòng K-Means từ đầu.",
    "giai": "Một vòng.",
    "a": [
     "Chọn k tâm",
     "Gán điểm vào tâm gần nhất",
     "Dời tâm",
     "Kiểm tra còn điểm đổi nhóm không"
    ],
    "h": "5023d29a0a085"
   },
   {
    "k": "dd",
    "id": "bai25-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hai nhánh.",
    "mau": "Học có giám sát cần {0}; gom nhóm là học {1}.",
    "o": [
     [
      "nhãn",
      "tâm",
      "khuỷu tay",
      "k nhóm"
     ],
     [
      "không giám sát",
      "có giám sát",
      "tăng cường",
      "hồi quy"
     ]
    ],
    "h": "a03a366a09a8b"
   },
   {
    "k": "dd",
    "id": "bai25-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đường khuỷu tay.",
    "mau": "Tổng khoảng cách² với k = 1 là {0}; với k = 2 là {1}.",
    "o": [
     [
      "29,67",
      "8,81",
      "3,52",
      "0,00"
     ],
     [
      "12,33",
      "6,18",
      "4,11",
      "0,00"
     ]
    ],
    "h": "3df551e88215c"
   },
   {
    "k": "dd",
    "id": "bai25-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hai bước.",
    "mau": "K-Means gán mỗi điểm vào tâm {0} rồi dời tâm về {1} của nhóm.",
    "o": [
     [
      "gần nhất",
      "xa nhất",
      "đầu tiên",
      "ngẫu nhiên"
     ],
     [
      "trung bình",
      "điểm xa nhất",
      "điểm đầu",
      "góc trái"
     ]
    ],
    "h": "fd31c82412a33"
   },
   {
    "k": "dd",
    "id": "bai25-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Diễn giải.",
    "mau": "Máy đặt tên nhóm là {0}; tên có ý nghĩa do {1} đặt.",
    "o": [
     [
      "số 0, 1, 2",
      "tên tiếng Việt",
      "màu sắc",
      "chữ cái"
     ],
     [
      "con người",
      "máy",
      "thư viện",
      "tập kiểm tra"
     ]
    ],
    "h": "bc74dbc514fbb"
   },
   {
    "k": "ds",
    "id": "bai25-q30",
    "q": "K-Means có thể chạy khi bảng không có cột nhãn.",
    "giai": "Học không giám sát.",
    "h": "1d11ddbbb94e93"
   },
   {
    "k": "ds",
    "id": "bai25-q31",
    "q": "Tổng khoảng cách² luôn giảm hoặc giữ nguyên khi tăng k.",
    "giai": "Nhiều tâm hơn, gần hơn.",
    "h": "1b0c85c5d7fa46"
   },
   {
    "k": "ds",
    "id": "bai25-q32",
    "q": "K trong K-Means và K trong KNN có cùng ý nghĩa.",
    "giai": "Số nhóm khác số láng giềng.",
    "h": "1b1dfd34888dc9"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
