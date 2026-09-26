window.BAI = {
 "bai": 21,
 "ma": "bai21",
 "nhan": "Bài 21",
 "tieu_de": "Học tăng cường: học qua thử và sai",
 "phan": "Phần E · Trải nghiệm",
 "cau_hoi": "Không ai chỉ đường, máy có tự học cách thoát mê cung không?",
 "gioi_thieu": [
  "Học có giám sát cần đáp án, gom nhóm cần dữ liệu. Nhánh thứ ba — <b>học tăng cường</b> — không cần cả hai: máy tự <b>hành động</b>, nhận <b>điểm thưởng</b> hoặc bị trừ điểm, và dần rút ra cách làm tốt nhất.",
  "Bài này là bài trải nghiệm: con chạy và quan sát một máy học thoát mê cung 5 × 5 bằng Q-learning. Mọi con số trên trang được tính lại từ chính mê cung đó.",
  "Con dùng lại ý tưởng “đánh giá bằng con số” và “lặp tới khi ổn định” của các bài trước."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai21",
 "muc_tieu": [
  "Nêu được các thành phần của học tăng cường: tác tử, môi trường, hành động, phần thưởng.",
  "Mô tả được một tập học: thử, nhận thưởng, cập nhật điểm.",
  "Đọc được bảng Q và đường đi máy chọn.",
  "Giải thích được khám phá và khai thác.",
  "Nhận ra hậu quả của phần thưởng đặt sai."
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
   "ten": "Nhánh thứ ba của ML",
   "ten_ngan": "Ba nhánh",
   "phut": 4,
   "muc_tieu": "nêu được các thành phần của học tăng cường.",
   "khoi_dong": "Con học đi xe đạp thế nào? Có ai đưa con bảng đáp án không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Mê cung của bài: đi từ Xuất phát tới Đích, tránh Hố",
     "alt": "Mê cung của bài: đi từ Xuất phát tới Đích, tránh Hố",
     "src": "img/me-cung.png"
    },
    {
     "t": "bang",
     "cot": [
      "",
      "Có giám sát",
      "Không giám sát",
      "Tăng cường"
     ],
     "dong": [
      [
       "Máy nhận gì",
       "Dữ liệu + đáp án",
       "Dữ liệu, không đáp án",
       "Điểm thưởng sau mỗi hành động"
      ],
      [
       "Máy học gì",
       "Đoán nhãn / con số",
       "Tìm nhóm",
       "Cách hành động tốt nhất"
      ],
      [
       "Ví dụ",
       "Đạt / Chưa đạt",
       "Playlist",
       "Thoát mê cung, chơi cờ, robot đi lại"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Thành phần",
      "Trong mê cung"
     ],
     "dong": [
      [
       "Tác tử (agent)",
       "Người máy đi trong mê cung"
      ],
      [
       "Môi trường",
       "Mê cung 5 × 5 với tường, hố, đích"
      ],
      [
       "Trạng thái",
       "Ô đang đứng"
      ],
      [
       "Hành động",
       "Lên, xuống, trái, phải"
      ],
      [
       "Phần thưởng",
       "Mỗi bước −1 · rơi hố −10 · tới đích +10"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ học tăng cường cần bảng dữ liệu có đáp án.",
      "Nghĩ phần thưởng chỉ có ở cuối — ở đây mỗi bước đều có điểm (−1)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Học tăng cường: hành động → nhận điểm thưởng → điều chỉnh cách hành động."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q1",
     "q": "Trong mê cung của bài, “hành động” là gì?",
     "giai": "Trạng thái là ô, phần thưởng là điểm.",
     "goi_y": "Người máy có thể làm gì ở mỗi ô?",
     "a": [
      "Đi lên, xuống, trái hoặc phải",
      "Ô người máy đang đứng",
      "Điểm +10 khi tới đích",
      "Bức tường màu xám đậm"
     ],
     "h": "719829f7466f"
    },
    {
     "k": "ds",
     "id": "bai21-q2",
     "q": "Học tăng cường cần một bảng dữ liệu có sẵn đáp án.",
     "giai": "Máy tự tạo trải nghiệm bằng cách hành động.",
     "goi_y": "Máy lấy thông tin từ đâu để học?",
     "h": "eb899003fa2b5"
    }
   ]
  },
  {
   "ten": "Một tập học: thử và nhận điểm",
   "ten_ngan": "Thử và sai",
   "phut": 5,
   "muc_tieu": "mô tả được một tập học: thử, nhận thưởng, cập nhật điểm.",
   "khoi_dong": "Lần đầu vào mê cung, người máy chưa biết gì. Nó sẽ đi thế nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Một <b>tập</b> (episode) là một lần đi từ ô Xuất phát tới khi tới đích, rơi hố, hoặc hết 100 bước. Máy ghi nhớ điểm của từng cặp (ô, hướng) trong một bảng gọi là <b>bảng Q</b>."
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "tập học đầu tiên",
     "huong_dan": "Bấm “Bước tiếp” để xem người máy đi từng bước trong tập đầu tiên. Ô ghi (hàng, cột).",
     "nhan_chon": "Tập",
     "cot": [
      "Bước",
      "Người máy làm gì",
      "Điểm"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Tập 1 (bảng Q ban đầu toàn số 0)",
       "dong": [
        [
         "0",
         "Đứng ở ô Xuất phát (1, 1); bảng Q toàn số 0",
         "Tổng điểm 0"
        ],
        [
         "1",
         "Chọn điểm cao nhất (hoà thì bốc ngẫu nhiên): xuống → (2, 1)",
         "thưởng −1 · Q[(1, 1), xuống]: 0,0 → −0,5 · tổng −1"
        ],
        [
         "2",
         "Chọn điểm cao nhất (hoà thì bốc ngẫu nhiên): phải → (2, 1) (đâm tường, đứng yên)",
         "thưởng −1 · Q[(2, 1), phải]: 0,0 → −0,5 · tổng −2"
        ],
        [
         "3",
         "Chọn điểm cao nhất (hoà thì bốc ngẫu nhiên): xuống → (3, 1)",
         "thưởng −1 · Q[(2, 1), xuống]: 0,0 → −0,5 · tổng −3"
        ],
        [
         "4",
         "Chọn điểm cao nhất (hoà thì bốc ngẫu nhiên): trái → (3, 1) (đâm tường, đứng yên)",
         "thưởng −1 · Q[(3, 1), trái]: 0,0 → −0,5 · tổng −4"
        ],
        [
         "5",
         "Chọn điểm cao nhất (hoà thì bốc ngẫu nhiên): phải → (3, 2)",
         "thưởng −1 · Q[(3, 1), phải]: 0,0 → −0,5 · tổng −5"
        ],
        [
         "6",
         "Thử ngẫu nhiên: lên → (3, 2) (đâm tường, đứng yên)",
         "thưởng −1 · Q[(3, 2), lên]: 0,0 → −0,5 · tổng −6"
        ],
        [
         "7",
         "Chọn điểm cao nhất (hoà thì bốc ngẫu nhiên): phải → (3, 3)",
         "thưởng −1 · Q[(3, 2), phải]: 0,0 → −0,5 · tổng −7"
        ],
        [
         "…",
         "Đi tiếp 39 bước nữa, cuối cùng rơi xuống hố",
         "Tập 1 kết thúc: tổng −55 điểm"
        ]
       ]
      }
     ]
    },
    {
     "t": "anh",
     "cap": "Trung bình 20 lần học: số bước mỗi tập giảm dần về 8",
     "alt": "Trung bình 20 lần học: số bước mỗi tập giảm dần về 8",
     "src": "img/so-buoc-moi-tap.png"
    },
    {
     "t": "p",
     "html": "5 tập đầu, người máy cần trung bình 52,4 bước; 50 tập cuối chỉ còn 8,8 bước — gần bằng đường ngắn nhất 8 bước."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ tập đầu tiên máy đã đi đúng — nó gần như đi mò.",
      "Nghĩ máy nhớ đường đi — nó nhớ <b>điểm</b> của từng (ô, hướng)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Mỗi tập: thử → nhận điểm → cập nhật bảng Q. Qua nhiều tập, đường đi ngắn dần."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q3",
     "q": "Theo phần Tự thử, ở bước 1 của tập đầu, điểm thưởng người máy nhận là bao nhiêu?",
     "giai": "Mỗi bước bình thường bị trừ 1.",
     "goi_y": "Xem cột Điểm ở dòng bước 1.",
     "a": [
      "−1",
      "+10",
      "0",
      "−10"
     ],
     "h": "58a228d0b600c"
    },
    {
     "k": "sx",
     "id": "bai21-q4",
     "q": "Sắp xếp những gì xảy ra trong một bước học.",
     "giai": "Chọn → nhận → cập nhật → tiếp.",
     "goi_y": "Hành động phải có trước điểm thưởng.",
     "a": [
      "Người máy chọn một hướng",
      "Môi trường cho ô mới và điểm thưởng",
      "Máy cập nhật điểm của (ô, hướng) vừa đi",
      "Người máy đứng ở ô mới, chọn tiếp"
     ],
     "h": "1206004d017384"
    }
   ]
  },
  {
   "ten": "Bảng Q và cách cập nhật",
   "ten_ngan": "Bảng Q",
   "phut": 5,
   "muc_tieu": "đọc được bảng Q và đường đi máy chọn.",
   "khoi_dong": "Nếu mỗi ô có 4 hướng, bảng Q của mê cung 5 × 5 có bao nhiêu ô số?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Điểm Q",
     "html": "Q[ô, hướng] ước lượng <b>tổng điểm sẽ nhận được</b> nếu đứng ở ô đó, đi hướng đó, rồi sau đó đi khôn ngoan. Điểm cao hơn = hướng tốt hơn.",
     "ky_hieu": null
    },
    {
     "t": "cong_thuc",
     "html": "Q mới = Q cũ + 0,5 × (thưởng + 0,9 × Q tốt nhất ở ô mới − Q cũ)"
    },
    {
     "t": "vi_du",
     "tieu_de": "cập nhật một lần",
     "de": "Q cũ = −0,5; đi một bước được thưởng −1; ở ô mới, hướng tốt nhất có Q = 2,0.",
     "cot": [
      "Bước",
      "Tính",
      "Kết quả"
     ],
     "dong": [
      [
       "1",
       "Mục tiêu = −1 + 0,9 × 2,0",
       "0,8"
      ],
      [
       "2",
       "Chênh lệch = 0,8 − (−0,5)",
       "1,3"
      ],
      [
       "3",
       "Q mới = −0,5 + 0,5 × 1,3",
       "0,15"
      ]
     ],
     "ket_luan": "Ô mới có triển vọng (Q = 2,0) kéo điểm của bước đi này lên, dù bước đi bị trừ 1.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Sau 300 tập: điểm của 4 hướng ở ô Xuất phát",
     "alt": "Sau 300 tập: điểm của 4 hướng ở ô Xuất phát",
     "src": "img/bang-q-o-xuat-phat.png"
    },
    {
     "t": "anh",
     "cap": "Mỗi ô: mũi tên chỉ hướng có điểm Q cao nhất",
     "alt": "Mỗi ô: mũi tên chỉ hướng có điểm Q cao nhất",
     "src": "img/duong-di-sau-khi-hoc.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Ô ít khi đi qua",
     "html": "Ở góc dưới bên trái, người máy hiếm khi ghé nên mũi tên có thể chỉ vào tường. Bảng Q chỉ đáng tin ở những ô đã được thử nhiều."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ 0,5 và 0,9 là xác suất — đây là tốc độ học và mức coi trọng tương lai.",
      "Tin mọi mũi tên trên hình, kể cả ở ô hiếm khi đi qua."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Bảng Q: điểm của mỗi (ô, hướng). Đi theo điểm cao nhất → đường đi của máy."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q5",
     "q": "Theo hình bảng Q ở ô Xuất phát, người máy sẽ đi hướng nào?",
     "giai": "Hướng có cột cao nhất (-0,43).",
     "goi_y": "Tìm cột cao nhất.",
     "a": [
      "Phải",
      "Lên",
      "Xuống",
      "Trái"
     ],
     "h": "1930ac3d2274a1"
    },
    {
     "k": "dd",
     "id": "bai21-q6",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "25 × 4 = 100.",
     "goi_y": "Nhân số ô với số hướng; đếm đoạn thẳng trên hình đường đi.",
     "mau": "Mê cung 5 × 5, mỗi ô 4 hướng: bảng Q có {0} ô số. Đường đi sau khi học dài {1} bước.",
     "o": [
      [
       "100",
       "25",
       "20",
       "9"
      ],
      [
       "8",
       "5",
       "12",
       "25"
      ]
     ],
     "h": "1dcf9ad6f631be"
    }
   ]
  },
  {
   "ten": "Học bao nhiêu, thử bao nhiêu?",
   "ten_ngan": "Khám phá",
   "phut": 5,
   "muc_tieu": "giải thích được khám phá và khai thác.",
   "khoi_dong": "Quán ăn quen luôn ngon. Có nên thỉnh thoảng thử quán mới không?",
   "khoi": [
    {
     "t": "demo_truot",
     "tieu_de": "số tập học",
     "huong_dan": "Kéo để đổi số tập. Mỗi số tập được học lại 20 lần với cách thử ngẫu nhiên khác nhau; thanh cho biết bao nhiêu lần người máy học được đường tới đích.",
     "dieu_kien": "Học <b>{x}</b> tập",
     "moc": [
      {
       "x": 1,
       "n": "0 / 20 lần học tới đích, 0 lần đi đường ngắn nhất 8 bước",
       "p": 0.0
      },
      {
       "x": 5,
       "n": "0 / 20 lần học tới đích, 0 lần đi đường ngắn nhất 8 bước",
       "p": 0.0
      },
      {
       "x": 10,
       "n": "2 / 20 lần học tới đích, 2 lần đi đường ngắn nhất 8 bước",
       "p": 10.0
      },
      {
       "x": 20,
       "n": "20 / 20 lần học tới đích, 20 lần đi đường ngắn nhất 8 bước",
       "p": 100.0
      },
      {
       "x": 50,
       "n": "20 / 20 lần học tới đích, 20 lần đi đường ngắn nhất 8 bước",
       "p": 100.0
      },
      {
       "x": 100,
       "n": "20 / 20 lần học tới đích, 20 lần đi đường ngắn nhất 8 bước",
       "p": 100.0
      },
      {
       "x": 300,
       "n": "20 / 20 lần học tới đích, 20 lần đi đường ngắn nhất 8 bước",
       "p": 100.0
      }
     ],
     "nhan_n": "Kết quả 20 lần học",
     "nhan_p": "Tỉ lệ tới đích",
     "so_le_x": 0,
     "bat_dau": 0
    },
    {
     "t": "bang",
     "cot": [
      "",
      "Khai thác",
      "Khám phá"
     ],
     "dong": [
      [
       "Làm gì",
       "Đi hướng có điểm Q cao nhất",
       "Thử một hướng ngẫu nhiên"
      ],
      [
       "Lợi",
       "Dùng điều đã học",
       "Có thể tìm ra đường tốt hơn"
      ],
      [
       "Hại",
       "Có thể kẹt ở đường “tạm được”",
       "Mắc lỗi, mất điểm khi đang học"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Tỉ lệ bước thử ngẫu nhiên và điểm trung bình khi học (300 tập, 20 lần)",
     "alt": "Tỉ lệ bước thử ngẫu nhiên và điểm trung bình khi học (300 tập, 20 lần)",
     "src": "img/kham-pha-va-khai-thac.png"
    },
    {
     "t": "p",
     "html": "Mê cung nhỏ nên mọi mức đều tìm ra đường. Nhưng thử ngẫu nhiên 50% số bước thì điểm trung bình mỗi tập khi học chỉ còn -12,2, so với -1,0 khi thử 10%."
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Vì sao 0% vẫn học được ở đây?",
     "html": "Bảng Q bắt đầu bằng 0, còn mỗi bước đi bị trừ điểm — nên hướng chưa thử luôn trông “hấp dẫn” hơn hướng đã thử. Ở bài toán lớn, không khám phá thì dễ kẹt ở cách làm tạm được."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ học càng ít tập càng tốt — dưới 20 tập người máy thường chưa tới được đích.",
      "Nghĩ khám phá càng nhiều càng tốt."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Cân bằng: khai thác điều đã biết, khám phá một phần để tìm cách tốt hơn."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q7",
     "q": "Theo phần Tự thử, học 20 tập thì bao nhiêu lần trên 20 người máy tới được đích?",
     "giai": "Từ 20 tập trở lên, lần học nào cũng tới đích.",
     "goi_y": "Kéo thanh tới 20 tập.",
     "a": [
      "20 / 20",
      "2 / 20",
      "0 / 20",
      "10 / 20"
     ],
     "h": "12e84effa51532"
    },
    {
     "k": "ma",
     "id": "bai21-q8",
     "q": "Hai câu nào đúng về khám phá? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Khám phá = thử ngẫu nhiên.",
     "goi_y": "Xem bảng Khai thác – Khám phá.",
     "a": [
      "Có thể tìm ra đường tốt hơn",
      "Làm mất điểm khi đang học",
      "Luôn chọn điểm Q cao nhất",
      "Không bao giờ mắc lỗi"
     ],
     "h": "17057c17572b4a"
    }
   ]
  },
  {
   "ten": "Phần thưởng quyết định tất cả",
   "ten_ngan": "Phần thưởng",
   "phut": 4,
   "muc_tieu": "nhận ra hậu quả của phần thưởng đặt sai.",
   "khoi_dong": "Nếu thầy cô chấm điểm theo số trang viết, không theo nội dung, học sinh sẽ làm gì?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Cùng mê cung, cùng thuật toán — chỉ đổi điểm của hố",
     "alt": "Cùng mê cung, cùng thuật toán — chỉ đổi điểm của hố",
     "src": "img/phan-thuong-dat-sai.png"
    },
    {
     "t": "p",
     "html": "Hố −10: 20 / 20 lần học tới đích. Lỡ đặt hố +5: 20 / 20 lần người máy lao thẳng vào hố — với phần thưởng đó, vào hố thật sự “lời” hơn đi tới đích."
    },
    {
     "t": "bang",
     "cot": [
      "Ngoài đời",
      "Học tăng cường làm gì"
     ],
     "dong": [
      [
       "Trò chơi",
       "AlphaGo tự chơi hàng triệu ván cờ vây"
      ],
      [
       "Robot",
       "Học giữ thăng bằng, cầm nắm đồ vật"
      ],
      [
       "Chatbot",
       "Học trả lời theo điểm người dùng chấm"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Đặt phần thưởng là việc của con người",
     "html": "Máy chỉ tối ưu con số được giao. Phần thưởng lệch khỏi ý muốn thật thì máy sẽ “khôn” theo hướng sai — người thiết kế phải kiểm tra hành vi, không chỉ nhìn điểm."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đổ lỗi cho thuật toán khi máy làm điều lạ — thường là do phần thưởng.",
      "Nghĩ điểm cao nghĩa là máy làm đúng ý mình."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Máy tối ưu đúng phần thưởng — không phải đúng ý người đặt."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai21-q9",
     "q": "Khi lỡ đặt hố +5 điểm, người máy làm gì?",
     "giai": "Vào hố lời hơn với phần thưởng đó.",
     "goi_y": "Xem hình bên phải.",
     "a": [
      "Lao vào hố trong cả 20 lần học",
      "Vẫn tới đích như cũ trong 20 lần",
      "Đứng yên ở ô Xuất phát mãi mãi",
      "Đi vòng quanh mê cung không dừng"
     ],
     "h": "aaa48124649ad"
    },
    {
     "k": "ds",
     "id": "bai21-q10",
     "q": "Người máy lao vào hố vì thuật toán Q-learning bị lỗi.",
     "giai": "Thuật toán đúng; phần thưởng đặt sai.",
     "goi_y": "Hai hình chỉ khác nhau ở điều gì?",
     "h": "121da24ed63cc6"
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
    "q": "Nhìn hình. Ô nào cho +10 điểm?",
    "giai": "Đích +10.",
    "img": {
     "src": "img/me-cung.png"
    },
    "a": [
     "Ô Đích ở góc dưới phải",
     "Ô Hố ở giữa mê cung",
     "Ô Xuất phát ở góc trên",
     "Ô màu xám đậm bất kỳ"
    ],
    "h": "1e11b5067f5141"
   },
   {
    "k": "mc",
    "id": "bai21-q12",
    "q": "Nhìn hình. Khoảng bao nhiêu tập thì số bước gần chạm đường 8 bước?",
    "giai": "Đường cong giảm nhanh rồi đi ngang.",
    "img": {
     "src": "img/so-buoc-moi-tap.png"
    },
    "a": [
     "Khoảng 20 – 40 tập",
     "Ngay tập đầu tiên",
     "Sau đúng 100 tập",
     "Không bao giờ chạm"
    ],
    "h": "13be72ed03d5dc"
   },
   {
    "k": "mc",
    "id": "bai21-q13",
    "q": "Nhìn hình. Từ ô Xuất phát, đường đi rẽ xuống ở cột thứ mấy?",
    "giai": "Đi phải 3 ô rồi xuống.",
    "img": {
     "src": "img/duong-di-sau-khi-hoc.png"
    },
    "a": [
     "Cột 4",
     "Cột 1",
     "Cột 2",
     "Cột 5"
    ],
    "h": "1587413be48f96"
   },
   {
    "k": "mc",
    "id": "bai21-q14",
    "q": "Nhìn hình. Mức thử ngẫu nhiên nào cho điểm trung bình thấp nhất?",
    "giai": "Thử nhiều, mắc lỗi nhiều.",
    "img": {
     "src": "img/kham-pha-va-khai-thac.png"
    },
    "a": [
     "50%",
     "0%",
     "10%",
     "30%"
    ],
    "h": "198b17a3a6fb3f"
   },
   {
    "k": "mc",
    "id": "bai21-q15",
    "q": "Trong học tăng cường, “tác tử” là gì?",
    "giai": "Tác tử = agent.",
    "a": [
     "Người máy ra quyết định hành động",
     "Mê cung chứa tường và hố",
     "Điểm thưởng sau mỗi bước",
     "Bảng dữ liệu có đáp án"
    ],
    "h": "15a171c2614113"
   },
   {
    "k": "mc",
    "id": "bai21-q16",
    "q": "Điểm Q[ô, hướng] ước lượng điều gì?",
    "giai": "Điểm tương lai.",
    "a": [
     "Tổng điểm sẽ nhận nếu đi hướng đó",
     "Số lần người máy đã đi qua ô đó",
     "Khoảng cách từ ô đó tới ô Đích",
     "Xác suất rơi xuống hố từ ô đó"
    ],
    "h": "1a46cd49221d1a"
   },
   {
    "k": "mc",
    "id": "bai21-q17",
    "q": "Vì sao mỗi bước đi bị trừ 1 điểm?",
    "giai": "Càng nhiều bước càng mất điểm.",
    "a": [
     "Để máy ưu tiên đường ngắn",
     "Để máy đi chậm lại",
     "Để máy đâm vào tường",
     "Để bảng Q luôn bằng 0"
    ],
    "h": "7c48a28fb1894"
   },
   {
    "k": "mc",
    "id": "bai21-q18",
    "q": "Robot hút bụi được thưởng theo số lần bật máy hút, không theo độ sạch. Rủi ro là gì?",
    "giai": "Phần thưởng lệch ý muốn.",
    "a": [
     "Robot bật tắt liên tục mà nhà vẫn bẩn",
     "Robot hút sạch hơn bình thường",
     "Robot không bao giờ bật máy hút",
     "Robot tự sửa lại phần thưởng"
    ],
    "h": "9cd6896c9fe5d"
   },
   {
    "k": "mc",
    "id": "bai21-q19",
    "q": "Q cũ = 0; bước đi được −1; Q tốt nhất ở ô mới = 0. Q mới bằng bao nhiêu?",
    "giai": "0 + 0,5 × (−1 + 0 − 0).",
    "a": [
     "−0,5",
     "−1",
     "0",
     "+0,5"
    ],
    "h": "c5c5d662b5e40"
   },
   {
    "k": "ma",
    "id": "bai21-q20",
    "q": "Hai thứ nào là thành phần của học tăng cường? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Tác tử, môi trường, hành động, phần thưởng.",
    "a": [
     "Hành động",
     "Phần thưởng",
     "Cột nhãn",
     "Tâm nhóm"
    ],
    "h": "1f924764e5a48b"
   },
   {
    "k": "ma",
    "id": "bai21-q21",
    "q": "Hai việc nào là khai thác? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Khai thác = dùng cái đã biết.",
    "a": [
     "Đi hướng có điểm Q cao nhất",
     "Dùng điều đã học",
     "Thử một hướng ngẫu nhiên",
     "Đi thử vào ô chưa tới"
    ],
    "h": "13f343f8035cdb"
   },
   {
    "k": "ma",
    "id": "bai21-q22",
    "q": "Hai ví dụ nào dùng học tăng cường? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Học qua hành động.",
    "a": [
     "Máy tự chơi cờ vây",
     "Robot học giữ thăng bằng",
     "Chia khách hàng thành nhóm",
     "Đoán giá nhà từ diện tích"
    ],
    "h": "8d998feab1c20"
   },
   {
    "k": "ma",
    "id": "bai21-q23",
    "q": "Hai điều nào đúng về bảng Q? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Bảng Q.",
    "a": [
     "Mỗi (ô, hướng) có một điểm",
     "Được cập nhật sau mỗi bước",
     "Được nhập tay từ trước",
     "Chỉ có một số duy nhất"
    ],
    "h": "e12f66615db3a"
   },
   {
    "k": "sx",
    "id": "bai21-q24",
    "q": "Sắp xếp một bước học Q-learning.",
    "giai": "Một bước.",
    "a": [
     "Chọn hướng (khai thác hoặc khám phá)",
     "Nhận ô mới và điểm thưởng",
     "Tính mục tiêu = thưởng + 0,9 × Q tốt nhất ô mới",
     "Cập nhật Q của (ô, hướng) cũ"
    ],
    "h": "11397e2dcbda69"
   },
   {
    "k": "sx",
    "id": "bai21-q25",
    "q": "Sắp xếp các giai đoạn người máy học mê cung.",
    "giai": "Qua nhiều tập.",
    "a": [
     "Đi mò, rất nhiều bước",
     "Bảng Q dần có điểm",
     "Số bước giảm dần",
     "Đi đúng đường ngắn nhất"
    ],
    "h": "96c71e8ac3437"
   },
   {
    "k": "dd",
    "id": "bai21-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Ba nhánh.",
    "mau": "Học có giám sát cần {0}; học tăng cường cần {1}.",
    "o": [
     [
      "đáp án",
      "phần thưởng",
      "tâm nhóm",
      "khuỷu tay"
     ],
     [
      "phần thưởng",
      "đáp án",
      "tâm nhóm",
      "cột nhãn"
     ]
    ],
    "h": "5bec73f4e7b4e"
   },
   {
    "k": "dd",
    "id": "bai21-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hai lựa chọn.",
    "mau": "Đi theo điểm Q cao nhất là {0}; thử hướng ngẫu nhiên là {1}.",
    "o": [
     [
      "khai thác",
      "khám phá",
      "gom nhóm",
      "phân loại"
     ],
     [
      "khám phá",
      "khai thác",
      "hồi quy",
      "phân loại"
     ]
    ],
    "h": "182a99931e7f82"
   },
   {
    "k": "dd",
    "id": "bai21-q28",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Phần thưởng của bài.",
    "mau": "Tới đích được {0} điểm; rơi hố bị {1} điểm.",
    "o": [
     [
      "+10",
      "−1",
      "+5",
      "0"
     ],
     [
      "−10",
      "−1",
      "+10",
      "0"
     ]
    ],
    "h": "1356b393e11060"
   },
   {
    "k": "dd",
    "id": "bai21-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Câu chốt.",
    "mau": "Máy tối ưu đúng {0}, không phải đúng {1} người đặt.",
    "o": [
     [
      "phần thưởng",
      "mê cung",
      "bảng dữ liệu",
      "khoảng cách"
     ],
     [
      "ý muốn",
      "mê cung",
      "bảng Q",
      "thuật toán"
     ]
    ],
    "h": "f155660ada43"
   },
   {
    "k": "ds",
    "id": "bai21-q30",
    "q": "Trong tập học đầu tiên, người máy gần như đi mò.",
    "giai": "Bảng Q toàn số 0.",
    "h": "69b3f3ad83c10"
   },
   {
    "k": "ds",
    "id": "bai21-q31",
    "q": "Khám phá càng nhiều, điểm khi đang học càng cao.",
    "giai": "Thử nhiều, mắc lỗi nhiều.",
    "h": "627bcc0154d91"
   },
   {
    "k": "ds",
    "id": "bai21-q32",
    "q": "Đổi phần thưởng có thể làm máy học hành vi hoàn toàn khác.",
    "giai": "Hố +5.",
    "h": "88d49a0a976f8"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
