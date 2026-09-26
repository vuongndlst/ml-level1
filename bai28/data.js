window.BAI = {
 "bai": 28,
 "ma": "bai28",
 "nhan": "Bài 28",
 "tieu_de": "Dự báo theo thời gian: bụi mịn PM2.5",
 "phan": "Phần E · Trải nghiệm",
 "cau_hoi": "Nhìn các ngày trước, máy có đoán được bụi mịn ngày mai không?",
 "gioi_thieu": [
  "Ứng dụng chất lượng không khí trên điện thoại thường có dòng “dự báo ngày mai”. Bài này con thử làm việc đó với số đo bụi mịn PM2.5 thật của Bắc Kinh, 2010 – 2014.",
  "Dữ liệu theo thời gian có một điều khác mọi bảng trước: <b>thứ tự quan trọng</b>. Con sẽ biến chuỗi thành bảng bằng <b>cửa sổ trượt</b>, so hồi quy tuyến tính với một mạng LSTM (dùng như hộp đen), và thấy vì sao dữ liệu đúng quan trọng hơn model phức tạp.",
  "Con dùng lại hồi quy tuyến tính và MAE (Bài 14), Random Forest (Bài 21)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai28",
 "muc_tieu": [
  "Nhận ra đặc điểm của dữ liệu chuỗi thời gian: thứ tự, mùa, ngày trống.",
  "Dùng mốc “mai giống hôm nay” và đo sai số bằng MAE.",
  "Biến chuỗi thành bảng bằng cửa sổ trượt; chia train / test theo thời gian.",
  "So sánh hồi quy tuyến tính với LSTM (hộp đen) một cách trung thực.",
  "Giải thích vì sao đoán càng xa càng khó và vì sao thêm dữ liệu thời tiết giúp ích."
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
   "ten": "Dữ liệu theo thời gian",
   "ten_ngan": "Chuỗi",
   "phut": 4,
   "muc_tieu": "nhận ra đặc điểm của dữ liệu chuỗi thời gian.",
   "khoi_dong": "Nếu xáo trộn thứ tự các ngày trong bảng, dữ liệu thời tiết có còn ý nghĩa không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "PM2.5 trung bình mỗi ngày và trung bình theo tháng",
     "alt": "PM2.5 trung bình mỗi ngày và trung bình theo tháng",
     "src": "img/pm25-theo-ngay.png"
    },
    {
     "t": "bang",
     "cot": [
      "Đặc điểm",
      "Trong bảng bụi mịn"
     ],
     "dong": [
      [
       "Thứ tự quan trọng",
       "Hôm nay liên quan hôm qua; không xáo trộn được"
      ],
      [
       "Có mùa",
       "Tháng 10 – 2 cao hơn (tháng 2: 126, tháng 5: 81 µg/m³)"
      ],
      [
       "Có ngày trống",
       "37 / 1826 ngày không có số đo nào"
      ],
      [
       "Dao động mạnh",
       "Có ngày trên 400, có ngày dưới 10"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Điền ngày trống theo thời gian",
     "html": "Với chuỗi thời gian, ngày trống thường được nội suy từ ngày trước và ngày sau (<code>interpolate()</code>), không lấy trung bình của cả 5 năm."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Xáo trộn các dòng như bảng học sinh — mất thông tin thứ tự.",
      "Điền ngày trống bằng trung bình cả chuỗi, bỏ qua mùa."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Chuỗi thời gian: thứ tự, mùa, ngày trống — phải giữ nguyên thứ tự."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai28-q1",
     "q": "Theo biểu đồ theo tháng, bụi mịn thường cao nhất vào mùa nào?",
     "giai": "Mùa lạnh, sưởi ấm và ít gió.",
     "goi_y": "Tìm các cột cao nhất.",
     "a": [
      "Tháng 10 tới tháng 2",
      "Tháng 4 tới tháng 5",
      "Tháng 6 tới tháng 8",
      "Không khác nhau giữa các tháng"
     ],
     "h": "1c47ff557edb53"
    },
    {
     "k": "ds",
     "id": "bai28-q2",
     "q": "Với chuỗi thời gian, có thể xáo trộn thứ tự các ngày mà không mất thông tin.",
     "giai": "Thứ tự mang thông tin: hôm nay liên quan hôm qua.",
     "goi_y": "Hôm qua ô nhiễm, hôm nay có hay ô nhiễm không?",
     "h": "8f553b6ac193c"
    }
   ]
  },
  {
   "ten": "Mốc đơn giản và MAE",
   "ten_ngan": "Mốc",
   "phut": 4,
   "muc_tieu": "dùng mốc “mai giống hôm nay” và đo sai số bằng MAE.",
   "khoi_dong": "Không có model nào, con đoán bụi mịn ngày mai bằng cách nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Học trên 2010 – 2013, kiểm tra trên cả 365 ngày năm 2014. Sai số đo bằng <b>MAE</b> (Bài 14): trung bình độ lệch giữa số đoán và số thật, đơn vị µg/m³."
    },
    {
     "t": "vi_du",
     "tieu_de": "hai mốc",
     "de": "Năm 2014, PM2.5 trung bình 97,8 µg/m³.",
     "cot": [
      "Mốc",
      "Cách đoán",
      "MAE năm 2014"
     ],
     "dong": [
      [
       "Đoán trung bình chung",
       "Ngày nào cũng đoán 98,8 (trung bình 2010 – 2013)",
       "59,5"
      ],
      [
       "“Mai giống hôm nay”",
       "Lấy đúng số của hôm trước",
       "52,8"
      ]
     ],
     "ket_luan": "Chỉ nhìn hôm qua đã giảm sai số từ 59,5 xuống 52,8 — thứ tự có thông tin.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Khoe model sai số 47 mà không so với mốc.",
      "Nghĩ MAE là phần trăm — đơn vị của MAE là đơn vị của dữ liệu (µg/m³)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Luôn có mốc: đoán trung bình chung và “mai giống hôm nay”."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai28-q3",
     "q": "Theo ví dụ, MAE của mốc “mai giống hôm nay” năm 2014 là bao nhiêu?",
     "giai": "Nhỏ hơn đoán trung bình chung.",
     "goi_y": "Đọc cột MAE ở dòng thứ hai.",
     "a": [
      "52,8",
      "59,5",
      "47,3",
      "35,6"
     ],
     "h": "1ceed14b5d229c"
    },
    {
     "k": "dd",
     "id": "bai28-q4",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Bài 14.",
     "goi_y": "MAE = Mean Absolute Error.",
     "mau": "MAE là trung bình {0} giữa số đoán và số thật; đơn vị là {1}.",
     "o": [
      [
       "độ lệch",
       "tổng",
       "tích",
       "tỉ lệ"
      ],
      [
       "µg/m³",
       "%",
       "ngày",
       "điểm"
      ]
     ],
     "h": "4fed336bd9d5e"
    }
   ]
  },
  {
   "ten": "Cửa sổ trượt và chia theo thời gian",
   "ten_ngan": "Cửa sổ",
   "phut": 5,
   "muc_tieu": "biến chuỗi thành bảng bằng cửa sổ trượt; chia train / test theo thời gian.",
   "khoi_dong": "Hồi quy tuyến tính cần bảng có cột X và cột y. Chuỗi chỉ có một cột. Làm sao?",
   "khoi": [
    {
     "t": "anh",
     "cap": "7 ngày trước là 7 cột đầu vào; ngày tiếp theo là y",
     "alt": "7 ngày trước là 7 cột đầu vào; ngày tiếp theo là y",
     "src": "img/cua-so-truot.png"
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "cửa sổ trượt 7 ngày",
     "huong_dan": "Bấm “Bước tiếp” để trượt cửa sổ qua từng ngày đầu năm 2014.",
     "nhan_chon": "Chuỗi",
     "cot": [
      "Bước",
      "Việc",
      "Dòng mới của bảng"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "PM2.5 đầu năm 2014",
       "dong": [
        [
         "0",
         "Chuỗi PM2.5 đầu năm 2014: 53, 163, 62, 150, 104, 151, 121, 19, 32, 80",
         "Chưa có bảng"
        ],
        [
         "1",
         "Đầu vào: 01/01 → 07/01 (7 ngày)",
         "Dòng 1: [53; 163; 62; 150; 104; 151; 121] → y = 19 (ngày 08/01)"
        ],
        [
         "2",
         "Đầu vào: 02/01 → 08/01 (7 ngày)",
         "Dòng 2: [163; 62; 150; 104; 151; 121; 19] → y = 32 (ngày 09/01)"
        ],
        [
         "3",
         "Đầu vào: 03/01 → 09/01 (7 ngày)",
         "Dòng 3: [62; 150; 104; 151; 121; 19; 32] → y = 80 (ngày 10/01)"
        ],
        [
         "…",
         "Trượt tiếp tới hết chuỗi",
         "Chuỗi 1 826 ngày thành bảng khoảng 1 800 dòng"
        ]
       ]
      }
     ]
    },
    {
     "t": "p",
     "html": "Hồi quy tuyến tính trên bảng 7 cột cho MAE 47,3, tốt hơn cả hai mốc. Hệ số của hôm qua là 0,66 — lớn nhất; các ngày xa hơn gần 0."
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Chia theo thời gian, không xáo trộn",
     "html": "Học trên các năm trước, kiểm tra trên năm sau — giống như dự báo thật: chỉ được dùng quá khứ để đoán tương lai. Không dùng <code>train_test_split</code> xáo trộn như các bài trước."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Xáo trộn rồi chia — model được “nhìn” những ngày sau ngày cần đoán.",
      "Quên rằng dòng đầu tiên cần đủ 7 ngày trước nó."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Cửa sổ trượt: 7 ngày trước → ngày sau. Chia theo thời gian: quá khứ học, tương lai kiểm tra."
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai28-q5",
     "q": "Sắp xếp các bước dự báo bằng cửa sổ trượt.",
     "giai": "Làm sạch → bảng → học → đo.",
     "goi_y": "Bảng phải có trước khi học.",
     "a": [
      "Điền ngày trống bằng nội suy",
      "Tạo bảng 7 ngày trước → ngày sau",
      "Học trên 2010 – 2013",
      "Đo MAE trên năm 2014"
     ],
     "h": "14da2a22726d98"
    },
    {
     "k": "mc",
     "id": "bai28-q6",
     "q": "Theo phần Tự thử, dòng 1 của bảng có y bằng bao nhiêu?",
     "giai": "Ngày thứ 8 (08/01).",
     "goi_y": "Bấm “Bước tiếp” một lần, đọc số sau “y =”.",
     "a": [
      "19",
      "53",
      "121",
      "32"
     ],
     "h": "c6dcc4762d6ac"
    }
   ]
  },
  {
   "ten": "LSTM — hộp đen có trí nhớ",
   "ten_ngan": "LSTM",
   "phut": 5,
   "muc_tieu": "so sánh hồi quy tuyến tính với LSTM (hộp đen) một cách trung thực.",
   "khoi_dong": "Mạng nơ-ron “có trí nhớ” nghe rất mạnh. Con đoán nó sẽ thắng hồi quy bao nhiêu?",
   "khoi": [
    {
     "t": "p",
     "html": "<b>LSTM</b> là một loại mạng nơ-ron đọc chuỗi theo thứ tự và giữ lại “trí nhớ” về những ngày đã đọc. Bài này dùng nó như <b>hộp đen</b>: con chỉ gọi <code>hoc_lstm(s)</code> và đo kết quả."
    },
    {
     "t": "anh",
     "cap": "MAE năm 2014 của các cách dự báo",
     "alt": "MAE năm 2014 của các cách dự báo",
     "src": "img/so-sanh-sai-so.png"
    },
    {
     "t": "bang",
     "cot": [
      "Cách",
      "MAE 2014",
      "Nhận xét"
     ],
     "dong": [
      [
       "Hồi quy 7 ngày",
       "47,3",
       "Đơn giản, đọc được hệ số"
      ],
      [
       "LSTM, 3 lần học",
       "47,0 – 49,6",
       "Ngang hồi quy; mỗi lần học ra số khác"
      ],
      [
       "Rừng 7 ngày",
       "47,7",
       "Ngang hồi quy"
      ]
     ]
    },
    {
     "t": "demo_truot",
     "tieu_de": "đoán trước bao nhiêu ngày",
     "huong_dan": "Kéo để đoán xa hơn. Thanh cho biết hồi quy tốt hơn “đoán trung bình chung” bao nhiêu phần trăm (0% nghĩa là không hơn).",
     "dieu_kien": "Đoán trước <b>{x}</b> ngày",
     "moc": [
      {
       "x": 1,
       "n": "hồi quy 47,3 · lấy ngày gần nhất đã biết 52,8 · đoán trung bình chung 59,5",
       "p": 20.5
      },
      {
       "x": 2,
       "n": "hồi quy 59,3 · lấy ngày gần nhất đã biết 74,7 · đoán trung bình chung 59,5",
       "p": 0.3
      },
      {
       "x": 3,
       "n": "hồi quy 59,9 · lấy ngày gần nhất đã biết 82,4 · đoán trung bình chung 59,5",
       "p": 0.0
      },
      {
       "x": 7,
       "n": "hồi quy 59,3 · lấy ngày gần nhất đã biết 78,4 · đoán trung bình chung 59,5",
       "p": 0.3
      }
     ],
     "nhan_n": "MAE năm 2014",
     "nhan_p": "Tốt hơn đoán trung bình",
     "so_le_x": 0,
     "bat_dau": 0
    },
    {
     "t": "anh",
     "cap": "Từ 2 ngày trở đi, các cách đều không hơn đoán trung bình chung",
     "alt": "Từ 2 ngày trở đi, các cách đều không hơn đoán trung bình chung",
     "src": "img/du-bao-cang-xa-cang-kho.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Tin model phức tạp luôn thắng — ở đây LSTM chỉ ngang hồi quy.",
      "Chỉ chạy LSTM một lần rồi kết luận — mỗi lần học ra một con số khác."
     ]
    },
    {
     "t": "tom_tat",
     "html": "LSTM ≈ hồi quy trên chuỗi này. Đoán xa hơn 1 ngày gần như không hơn đoán trung bình."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai28-q7",
     "q": "Theo phần Tự thử, đoán trước 2 ngày thì hồi quy có MAE bao nhiêu?",
     "giai": "Gần bằng đoán trung bình chung (59,5).",
     "goi_y": "Kéo thanh tới 2 ngày.",
     "a": [
      "59,3",
      "47,3",
      "74,7",
      "82,4"
     ],
     "h": "5094738296825"
    },
    {
     "k": "ds",
     "id": "bai28-q8",
     "q": "Trên chuỗi bụi mịn này, LSTM thắng hồi quy tuyến tính rất xa.",
     "giai": "MAE 47,0 – 49,6 so với 47,3.",
     "goi_y": "So hai cột tím và xanh ngọc.",
     "h": "19e2f310294715"
    }
   ]
  },
  {
   "ten": "Dữ liệu đúng hơn model to",
   "ten_ngan": "Thời tiết",
   "phut": 4,
   "muc_tieu": "giải thích vì sao thêm dữ liệu thời tiết giúp ích.",
   "khoi_dong": "Hôm nào gió mạnh, bầu trời thường thế nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Bụi mịn phụ thuộc nhiều vào <b>thời tiết</b>: gió mạnh thổi bụi đi, không khí ẩm và lặng gió giữ bụi lại. Thêm hai cột của chính ngày cần đoán — gió mạnh nhất và điểm sương (độ ẩm) — rừng ngẫu nhiên giảm MAE từ 47,7 xuống 35,6."
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Lấy thời tiết ngày mai ở đâu?",
     "html": "Khi dự báo thật, gió và độ ẩm ngày mai lấy từ <b>dự báo thời tiết</b> — cũng có sai số. Con số 35,6 trong bài dùng thời tiết đo thật nên lạc quan hơn thực tế một chút."
    },
    {
     "t": "bang",
     "cot": [
      "Ngoài đời",
      "Dự báo theo thời gian"
     ],
     "dong": [
      [
       "Không khí",
       "App AQI dự báo bụi mịn ngày mai"
      ],
      [
       "Điện",
       "Dự báo lượng điện cả thành phố cần"
      ],
      [
       "Cửa hàng",
       "Dự báo số hàng bán tuần sau"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đổi sang model phức tạp hơn thay vì tìm dữ liệu giải thích được hiện tượng.",
      "Quên rằng dữ liệu thời tiết ngày mai cũng chỉ là dự báo."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Dữ liệu giải thích được hiện tượng (gió, độ ẩm) giúp nhiều hơn model phức tạp."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai28-q9",
     "q": "Thêm gió và điểm sương, rừng ngẫu nhiên có MAE bao nhiêu?",
     "giai": "Giảm khoảng 12 µg/m³.",
     "goi_y": "Đọc cột xanh đậm cuối cùng.",
     "a": [
      "35,6",
      "47,7",
      "47,3",
      "52,8"
     ],
     "h": "f86767500c29f"
    },
    {
     "k": "ma",
     "id": "bai28-q10",
     "q": "Hai điều nào đúng về dự báo bụi mịn trong bài? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Dữ liệu đúng quan trọng.",
     "goi_y": "Đọc lại đoạn đầu chặng và hộp chú ý.",
     "a": [
      "Gió mạnh giúp thổi bụi đi",
      "Thời tiết ngày mai cũng là dự báo",
      "LSTM luôn thắng hồi quy",
      "Đoán 7 ngày tới rất chính xác"
     ],
     "h": "1b9205633bc27c"
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
    "id": "bai28-q11",
    "q": "Nhìn hình. Năm nào có ngày PM2.5 cao nhất (trên 500)?",
    "giai": "Đầu năm 2013.",
    "img": {
     "src": "img/pm25-theo-ngay.png"
    },
    "a": [
     "2013",
     "2010",
     "2012",
     "2014"
    ],
    "h": "816b08d726e8"
   },
   {
    "k": "mc",
    "id": "bai28-q12",
    "q": "Nhìn hình. Cột màu đỏ trong hình cửa sổ trượt là gì?",
    "giai": "7 cột xanh là đầu vào.",
    "img": {
     "src": "img/cua-so-truot.png"
    },
    "a": [
     "Ngày cần đoán (y)",
     "Ngày đầu tiên của cửa sổ",
     "Ngày không có số đo",
     "Ngày có PM2.5 cao nhất"
    ],
    "h": "e724e29c75db0"
   },
   {
    "k": "mc",
    "id": "bai28-q13",
    "q": "Nhìn hình. So với đường thực tế, đường dự báo thường thế nào?",
    "giai": "Dự báo dựa nhiều vào hôm qua.",
    "img": {
     "src": "img/du-bao-va-thuc-te.png"
    },
    "a": [
     "Chậm một nhịp",
     "Đi trước một nhịp",
     "Trùng khít hoàn toàn",
     "Là đường thẳng ngang"
    ],
    "h": "781ab62491786"
   },
   {
    "k": "mc",
    "id": "bai28-q14",
    "q": "Nhìn hình. Cách nào có MAE nhỏ nhất?",
    "giai": "35,6.",
    "img": {
     "src": "img/so-sanh-sai-so.png"
    },
    "a": [
     "Rừng 7 ngày + gió, điểm sương",
     "LSTM (hộp đen)",
     "Hồi quy 7 ngày",
     "“Mai giống hôm nay”"
    ],
    "h": "78ebca7fb6358"
   },
   {
    "k": "mc",
    "id": "bai28-q15",
    "q": "Vì sao không dùng train_test_split xáo trộn cho chuỗi thời gian?",
    "giai": "Chia theo thời gian.",
    "a": [
     "Model sẽ được nhìn tương lai",
     "Hàm đó quá chậm",
     "Hàm đó chỉ cho số nguyên",
     "Chuỗi không có cột y"
    ],
    "h": "d6c00ce729ac3"
   },
   {
    "k": "mc",
    "id": "bai28-q16",
    "q": "Một cửa sổ 14 ngày tạo ra bao nhiêu cột đầu vào?",
    "giai": "Mỗi ngày một cột.",
    "a": [
     "14",
     "7",
     "1",
     "28"
    ],
    "h": "fe669d4c1847c"
   },
   {
    "k": "mc",
    "id": "bai28-q17",
    "q": "Nhà máy điện muốn dự báo điện tiêu thụ tuần sau. Việc nào cần làm đầu tiên?",
    "giai": "Mốc trước.",
    "a": [
     "Đặt mốc “tuần sau giống tuần này”",
     "Chạy ngay LSTM thật lớn",
     "Xáo trộn dữ liệu các tuần",
     "Bỏ các tuần có số trống"
    ],
    "h": "1087cfbe77ae8f"
   },
   {
    "k": "mc",
    "id": "bai28-q18",
    "q": "LSTM chạy 3 lần cho 3 MAE khác nhau. Nên báo cáo thế nào?",
    "giai": "Trung thực.",
    "a": [
     "Nêu cả khoảng dao động",
     "Chỉ báo lần tốt nhất",
     "Chỉ báo lần đầu tiên",
     "Không báo LSTM"
    ],
    "h": "85db5adac2df1"
   },
   {
    "k": "mc",
    "id": "bai28-q19",
    "q": "Hệ số lớn nhất của hồi quy 7 ngày thuộc về ngày nào?",
    "giai": "0,66.",
    "a": [
     "Hôm qua (t-1)",
     "7 ngày trước (t-7)",
     "3 ngày trước (t-3)",
     "Các ngày bằng nhau"
    ],
    "h": "13a0ac9cb4bed"
   },
   {
    "k": "ma",
    "id": "bai28-q20",
    "q": "Hai đặc điểm nào của dữ liệu chuỗi thời gian? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Chuỗi.",
    "a": [
     "Thứ tự quan trọng",
     "Có thể có mùa",
     "Xáo trộn thoải mái",
     "Luôn không có ô trống"
    ],
    "h": "2a753b8f714fe"
   },
   {
    "k": "ma",
    "id": "bai28-q21",
    "q": "Hai mốc nào dùng trong bài? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Mốc đơn giản.",
    "a": [
     "Đoán trung bình chung",
     "“Mai giống hôm nay”",
     "LSTM 3 lớp",
     "Rừng 500 cây"
    ],
    "h": "e5bfbcc84891e"
   },
   {
    "k": "ma",
    "id": "bai28-q22",
    "q": "Hai điều nào đúng về đoán xa? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hình đoán xa.",
    "a": [
     "Càng xa càng khó",
     "Từ 2 ngày gần bằng đoán trung bình",
     "Càng xa càng chính xác",
     "Đoán 7 ngày tốt hơn 1 ngày"
    ],
    "h": "1a95d45be44bff"
   },
   {
    "k": "ma",
    "id": "bai28-q23",
    "q": "Hai cột thời tiết nào được thêm vào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Thời tiết.",
    "a": [
     "Gió mạnh nhất",
     "Điểm sương",
     "Tên thành phố",
     "Số thứ tự ngày"
    ],
    "h": "7a3934972dd53"
   },
   {
    "k": "sx",
    "id": "bai28-q24",
    "q": "Sắp xếp quy trình dự báo trong bài.",
    "giai": "Chuỗi → mốc → bảng → model → so.",
    "a": [
     "Vẽ chuỗi, tìm ngày trống",
     "Đặt mốc và đo MAE",
     "Tạo cửa sổ trượt",
     "Học hồi quy, LSTM",
     "So với mốc trên năm 2014"
    ],
    "h": "2df2bd20972ef"
   },
   {
    "k": "sx",
    "id": "bai28-q25",
    "q": "Sắp xếp các cách theo MAE năm 2014 từ lớn tới nhỏ.",
    "giai": "59,5 → 52,8 → 47,3 → 35,6.",
    "a": [
     "Đoán trung bình chung",
     "“Mai giống hôm nay”",
     "Hồi quy 7 ngày",
     "Rừng + thời tiết"
    ],
    "h": "152348db770e33"
   },
   {
    "k": "dd",
    "id": "bai28-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Chia theo thời gian.",
    "mau": "Học trên năm {0}, kiểm tra trên năm {1}.",
    "o": [
     [
      "2010 – 2013",
      "2014",
      "2012",
      "2010"
     ],
     [
      "2014",
      "2010",
      "2011",
      "2012"
     ]
    ],
    "h": "8b16e63de4855"
   },
   {
    "k": "dd",
    "id": "bai28-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Bảng sai số.",
    "mau": "MAE của hồi quy 7 ngày là {0}; của “mai giống hôm nay” là {1}.",
    "o": [
     [
      "47,3",
      "59,5",
      "35,6",
      "0,0"
     ],
     [
      "52,8",
      "59,5",
      "35,6",
      "100,0"
     ]
    ],
    "h": "5af40f81a70d1"
   },
   {
    "k": "dd",
    "id": "bai28-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Chuỗi.",
    "mau": "Ngày trống trong chuỗi nên được {0}; dữ liệu không được {1}.",
    "o": [
     [
      "nội suy",
      "xoá cột",
      "nhân đôi",
      "làm tròn"
     ],
     [
      "xáo trộn",
      "vẽ",
      "lưu",
      "đọc"
     ]
    ],
    "h": "ae9aac9afcf7f"
   },
   {
    "k": "dd",
    "id": "bai28-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Thời tiết.",
    "mau": "Gió mạnh làm bụi mịn {0}; LSTM trong bài được dùng như {1}.",
    "o": [
     [
      "giảm",
      "tăng",
      "đứng yên",
      "gấp đôi"
     ],
     [
      "hộp đen",
      "bảng Q",
      "cây quyết định",
      "mốc"
     ]
    ],
    "h": "1b52eb3406129f"
   },
   {
    "k": "ds",
    "id": "bai28-q30",
    "q": "Có 37 ngày trong chuỗi không có số đo PM2.5 nào.",
    "giai": "Nội suy.",
    "h": "1bfd41d38bebe7"
   },
   {
    "k": "ds",
    "id": "bai28-q31",
    "q": "Đoán trước 7 ngày, hồi quy tốt hơn hẳn đoán trung bình chung.",
    "giai": "Gần bằng nhau.",
    "h": "1259857886478"
   },
   {
    "k": "ds",
    "id": "bai28-q32",
    "q": "Thêm dữ liệu thời tiết giúp giảm sai số nhiều hơn đổi sang LSTM.",
    "giai": "Dữ liệu đúng.",
    "h": "103a0669541a3f"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
