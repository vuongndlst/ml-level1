window.BAI = {
 "bai": 1,
 "ma": "bai01",
 "nhan": "Bài 1",
 "tieu_de": "AI là gì?",
 "phan": "Mở đầu · AI và Machine Learning",
 "cau_hoi": "AI là gì — và AI không phải là gì?",
 "gioi_thieu": [
  "Con dùng AI mỗi ngày: mở khoá bằng khuôn mặt, xem video được gợi ý, hỏi chatbot. Nhưng “AI” thật ra là gì? Nó có “hiểu” và “nghĩ” như con người không?",
  "Bài đầu tiên của khoá: con khám phá bốn nhóm ứng dụng AI, xem một máy thật đoán chữ số viết tay và một máy nhỏ tự đoán từ tiếp theo — rồi tập nói về AI cho đúng.",
  "Không cần biết lập trình. Mọi con số trên trang là kết quả chạy thật của notebook bài học."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai01",
 "muc_tieu": [
  "Nhận ra các ứng dụng AI quanh mình và điểm chung của chúng: dự đoán từ dữ liệu.",
  "Phân biệt hệ thống AI với chương trình làm theo quy tắc cố định.",
  "Giải thích vì sao AI có thể đoán sai, kể cả khi rất “tự tin”.",
  "Mô tả cách AI tạo sinh tạo ra chữ bằng cách đoán từ tiếp theo.",
  "Dùng ngôn ngữ kỹ thuật khi nói về AI; nêu được lợi ích và rủi ro."
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
   "ten": "AI quanh con",
   "ten_ngan": "Quanh con",
   "phut": 4,
   "muc_tieu": "nhận ra các ứng dụng AI quanh mình và điểm chung của chúng.",
   "khoi_dong": "Kể ba thứ con dùng hôm qua mà con nghĩ là có AI bên trong.",
   "khoi": [
    {
     "t": "anh",
     "cap": "Bốn nhóm ứng dụng AI hay gặp",
     "alt": "Bốn nhóm ứng dụng AI hay gặp",
     "src": "img/ai-quanh-con.png"
    },
    {
     "t": "dinh_nghia",
     "ten": "Trí tuệ nhân tạo (AI)",
     "html": "Các hệ thống máy tính làm được những việc thường cần trí tuệ con người — như nhận ra khuôn mặt, dịch câu, gợi ý — bằng cách <b>đưa ra dự đoán</b> dựa trên dữ liệu.",
     "ky_hieu": null
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Điểm chung",
     "html": "Mọi ứng dụng trong hình đều <b>dự đoán</b>: đây là mặt ai, câu này dịch thế nào, con thích video nào, từ tiếp theo là gì. Dự đoán có thể đúng hoặc sai."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ AI là robot biết đi biết nói — phần lớn AI là phần mềm trong điện thoại, máy tính.",
      "Nghĩ AI chỉ là chatbot — AI có trong camera, bản đồ, ứng dụng nhạc…"
     ]
    },
    {
     "t": "tom_tat",
     "html": "AI là hệ thống máy tính đưa ra dự đoán từ dữ liệu, có mặt khắp quanh con."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q1",
     "q": "Ứng dụng “đọc biển số xe ở bãi gửi xe” thuộc nhóm AI nào?",
     "giai": "Máy nhìn ảnh biển số.",
     "goi_y": "Máy dùng camera để làm việc này.",
     "a": [
      "Thị giác máy tính",
      "Xử lý ngôn ngữ",
      "Gợi ý",
      "AI tạo sinh"
     ],
     "h": "1620b96752e996"
    },
    {
     "k": "ds",
     "id": "bai01-q2",
     "q": "Mọi ứng dụng AI trong hình đều đưa ra dự đoán.",
     "giai": "Dự đoán dựa trên dữ liệu là điểm chung.",
     "goi_y": "Đọc hộp “Điểm chung”.",
     "h": "12604b58061e9e"
    }
   ]
  },
  {
   "ten": "AI hay không phải AI?",
   "ten_ngan": "AI hay không",
   "phut": 4,
   "muc_tieu": "phân biệt hệ thống AI với chương trình làm theo quy tắc cố định.",
   "khoi_dong": "Máy tính bỏ túi làm phép nhân rất nhanh. Nó có phải là AI không?",
   "khoi": [
    {
     "t": "demo_tung_buoc",
     "tieu_de": "AI hay không phải AI",
     "huong_dan": "Bấm “Bước tiếp” để xem lần lượt từng ví dụ và lý do.",
     "nhan_chon": "Ví dụ",
     "cot": [
      "#",
      "Ví dụ",
      "AI? Vì sao"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Sáu ví dụ quen thuộc",
       "dong": [
        [
         "1",
         "Máy tính bỏ túi tính 25 × 4",
         "Không — làm đúng một quy tắc viết sẵn, không học, không dự đoán"
        ],
        [
         "2",
         "Điện thoại mở khoá bằng khuôn mặt",
         "Có — dự đoán “đây có phải chủ máy” từ ảnh"
        ],
        [
         "3",
         "Đèn giao thông đổi màu mỗi 30 giây",
         "Không — hẹn giờ cố định"
        ],
        [
         "4",
         "Ứng dụng gợi ý video tiếp theo",
         "Có — dự đoán video con dễ xem tiếp, học từ lịch sử xem"
        ],
        [
         "5",
         "Chatbot trả lời câu hỏi",
         "Có — dự đoán từ tiếp theo, lặp lại nhiều lần để thành câu"
        ],
        [
         "6",
         "Bộ lọc thư rác",
         "Có — dự đoán thư rác hay không, học từ hàng triệu thư"
        ]
       ]
      }
     ]
    },
    {
     "t": "bang",
     "cot": [
      "",
      "Chương trình quy tắc",
      "Hệ thống AI"
     ],
     "dong": [
      [
       "Làm thế nào",
       "Con người viết sẵn từng quy tắc",
       "Học quy luật từ dữ liệu"
      ],
      [
       "Kết quả",
       "Luôn giống nhau, chắc chắn",
       "Là dự đoán — có thể sai"
      ],
      [
       "Ví dụ",
       "Máy tính bỏ túi, đèn hẹn giờ",
       "Lọc thư rác, mở khoá khuôn mặt"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Gọi mọi thứ “thông minh” là AI — máy tính bỏ túi không học, không dự đoán.",
      "Nghĩ AI luôn đúng như máy tính bỏ túi."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Quy tắc viết sẵn thì không phải AI; học từ dữ liệu để dự đoán mới là AI."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q3",
     "q": "Theo phần Tự thử, vì sao đèn giao thông đổi màu mỗi 30 giây KHÔNG phải AI?",
     "giai": "Không học, không dự đoán.",
     "goi_y": "Xem dòng 3 trong phần Tự thử.",
     "a": [
      "Nó chỉ hẹn giờ cố định",
      "Nó không có màn hình",
      "Nó chạy bằng điện",
      "Nó đổi màu quá nhanh"
     ],
     "h": "1ba7b912582ad2"
    },
    {
     "k": "ma",
     "id": "bai01-q4",
     "q": "Hai thứ nào là hệ thống AI? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Học từ dữ liệu để dự đoán.",
     "goi_y": "Thứ nào phải học từ nhiều ví dụ?",
     "a": [
      "Bộ lọc thư rác",
      "Mở khoá bằng khuôn mặt",
      "Máy tính bỏ túi",
      "Đèn hẹn giờ 30 giây"
     ],
     "h": "700b821077278"
    }
   ]
  },
  {
   "ten": "Máy nhìn chữ số",
   "ten_ngan": "Nhìn chữ số",
   "phut": 5,
   "muc_tieu": "giải thích vì sao AI có thể đoán sai, kể cả khi rất “tự tin”.",
   "khoi_dong": "Làm sao máy tính “nhìn” được một chữ số viết tay?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Bộ 1797 ảnh chữ số viết tay có sẵn trong thư viện scikit-learn",
     "alt": "Bộ 1797 ảnh chữ số viết tay có sẵn trong thư viện scikit-learn",
     "src": "img/chu-so-viet-tay.png"
    },
    {
     "t": "p",
     "html": "Mỗi ảnh chỉ là một bảng 8 × 8 = 64 con số (độ đậm của từng ô). Máy học trên 1257 ảnh có sẵn đáp án, rồi đoán 540 ảnh nó chưa từng thấy."
    },
    {
     "t": "anh",
     "cap": "Mỗi dự đoán kèm độ tin cậy; khung đỏ là đoán sai",
     "alt": "Mỗi dự đoán kèm độ tin cậy; khung đỏ là đoán sai",
     "src": "img/may-du-doan-chu-so.png"
    },
    {
     "t": "p",
     "html": "Máy đoán đúng 96,3% — nhưng vẫn sai 20 ảnh. Nhìn ảnh sai bên dưới: có ảnh máy đoán sai với độ tin cậy 99,5%."
    },
    {
     "t": "anh",
     "cap": "Bốn ảnh máy đoán sai và hai dự đoán cao nhất",
     "alt": "Bốn ảnh máy đoán sai và hai dự đoán cao nhất",
     "src": "img/du-doan-sai.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Dự đoán không phải là hiểu",
     "html": "Máy không “thấy” con số như con. Nó so 64 con số với những gì đã học. Độ tin cậy cao không có nghĩa là chắc chắn đúng."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ độ tin cậy 99% là chắc chắn đúng.",
      "Nghĩ máy “hiểu” chữ số như con người."
     ]
    },
    {
     "t": "tom_tat",
     "html": "AI học từ ví dụ có đáp án rồi dự đoán; dự đoán có thể sai dù rất “tự tin”."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q5",
     "q": "Máy nhìn một ảnh chữ số 8 × 8 dưới dạng gì?",
     "giai": "8 × 8 = 64 ô.",
     "goi_y": "Đếm số ô trong ảnh.",
     "a": [
      "64 con số độ đậm",
      "Một câu mô tả bằng chữ",
      "Một chữ số có sẵn",
      "Màu sắc của từng nét"
     ],
     "h": "1abf023d1a1fda"
    },
    {
     "k": "dd",
     "id": "bai01-q6",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "Có đúng, có sai.",
     "goi_y": "Đọc tiêu đề hình và đoạn chữ ngay dưới.",
     "mau": "Máy đoán đúng {0} số ảnh chưa thấy, và vẫn sai {1} ảnh.",
     "o": [
      [
       "96,3%",
       "100%",
       "50,0%",
       "75,0%"
      ],
      [
       "20",
       "0",
       "1",
       "540"
      ]
     ],
     "h": "a321ff29196aa"
    }
   ]
  },
  {
   "ten": "AI tạo sinh đoán từ tiếp theo",
   "ten_ngan": "AI tạo sinh",
   "phut": 5,
   "muc_tieu": "mô tả cách AI tạo sinh tạo ra chữ bằng cách đoán từ tiếp theo.",
   "khoi_dong": "Khi con gõ tin nhắn, bàn phím gợi ý từ tiếp theo. Nó làm thế nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Máy đếm trong 37 câu: sau “trời” thường là từ gì",
     "alt": "Máy đếm trong 37 câu: sau “trời” thường là từ gì",
     "src": "img/du-doan-tu-tiep-theo.png"
    },
    {
     "t": "p",
     "html": "Sau từ “trời”, trong 37 câu máy đã học có 9 lần “nắng”, 8 lần “mưa”, 2 lần “lạnh”. Vì thế máy đoán “nắng” với xác suất 47,4%."
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "máy tự sinh một câu",
     "huong_dan": "Bấm “Bước tiếp”: mỗi bước máy chọn từ hay đi sau nhất.",
     "nhan_chon": "Câu",
     "cot": [
      "Bước",
      "Máy cân nhắc",
      "Kết quả"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Bắt đầu từ “hôm”",
       "dong": [
        [
         "0",
         "Bắt đầu với từ “hôm”",
         "Câu: hôm"
        ],
        [
         "1",
         "Sau “hôm”: “nay” 80%, “qua” 20%",
         "Chọn “nay” → hôm nay"
        ],
        [
         "2",
         "Sau “nay”: “trời” 67%, “có” 17%, “khó” 17%",
         "Chọn “trời” → hôm nay trời"
        ],
        [
         "3",
         "Sau “trời”: “nắng” 47%, “mưa” 42%, “lạnh” 11%",
         "Chọn “nắng” → hôm nay trời nắng"
        ],
        [
         "4",
         "Sau “nắng”: “đẹp” 29%, “thì” 14%, “nóng” 14%",
         "Chọn “đẹp” → hôm nay trời nắng đẹp"
        ],
        [
         "5",
         "Sau “đẹp”: “quá” 100%",
         "Chọn “quá” → hôm nay trời nắng đẹp quá"
        ]
       ]
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Chatbot cũng vậy — ở quy mô khổng lồ",
     "html": "Chatbot học từ hàng tỉ câu thay vì 37 câu, và nhìn cả đoạn văn phía trước thay vì một từ. Nhưng ý tưởng giống nhau: <b>đoán từ tiếp theo</b>, lặp lại nhiều lần."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ chatbot “biết” câu trả lời đúng — nó đoán chữ hay đi cùng nhau, có thể bịa.",
      "Nghĩ AI tạo sinh tạo ra từ hư không — nó học từ dữ liệu con người viết."
     ]
    },
    {
     "t": "tom_tat",
     "html": "AI tạo sinh tạo chữ bằng cách đoán từ tiếp theo dựa trên dữ liệu đã học."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q7",
     "q": "Theo phần Tự thử, máy sinh ra câu nào?",
     "giai": "Mỗi bước chọn từ hay đi sau nhất.",
     "goi_y": "Bấm “Bước tiếp” tới dòng cuối.",
     "a": [
      "hôm nay trời nắng đẹp quá",
      "hôm nay trời mưa to",
      "hôm qua trời lạnh",
      "hôm nay có bài kiểm tra"
     ],
     "h": "15dba5a8d1db69"
    },
    {
     "k": "ds",
     "id": "bai01-q8",
     "q": "Nếu dữ liệu học có nhiều câu “trời mưa” hơn, máy sẽ dễ đoán “mưa” sau “trời” hơn.",
     "giai": "Máy đếm từ dữ liệu.",
     "goi_y": "Máy chọn từ theo số lần đếm được.",
     "h": "c1085815592b4"
    }
   ]
  },
  {
   "ten": "Nói về AI cho đúng",
   "ten_ngan": "Nói cho đúng",
   "phut": 4,
   "muc_tieu": "dùng ngôn ngữ kỹ thuật khi nói về AI; nêu được lợi ích và rủi ro.",
   "khoi_dong": "“AI hiểu con muốn gì.” Câu này đúng hay chưa đúng?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Cách nói dễ gây hiểu lầm",
      "Cách nói kỹ thuật"
     ],
     "dong": [
      [
       "AI hiểu câu hỏi của con",
       "Ứng dụng dự đoán câu trả lời từ dữ liệu đã học"
      ],
      [
       "AI nhìn thấy khuôn mặt",
       "Hệ thống nhận diện dự đoán đây là mặt ai"
      ],
      [
       "Một AI đã viết bài này",
       "Bài viết do một ứng dụng AI tạo sinh tạo ra"
      ],
      [
       "AI quyết định cho vay",
       "Ngân hàng dùng dự đoán của model để quyết định"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Lợi ích",
      "Rủi ro"
     ],
     "dong": [
      [
       "Dịch nhanh, hỗ trợ người khiếm thị",
       "Đoán sai mà vẫn tự tin"
      ],
      [
       "Phát hiện thư rác, gian lận",
       "Học theo định kiến có trong dữ liệu"
      ],
      [
       "Hỗ trợ học tập, sáng tạo",
       "Ảnh giả, tin giả trông như thật"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Con người chịu trách nhiệm",
     "html": "AI không tự “muốn” hay “quyết định” điều gì. Con người chọn dữ liệu, dựng hệ thống và quyết định dùng dự đoán thế nào — nên con người chịu trách nhiệm."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nói “AI nghĩ”, “AI muốn” như nói về một người.",
      "Tin mọi thứ AI tạo sinh viết ra mà không kiểm tra."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Nói “hệ thống / ứng dụng AI dự đoán…”, không nói “AI hiểu, AI nghĩ”; luôn cân nhắc lợi – hại."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q9",
     "q": "Câu nào mô tả AI theo cách kỹ thuật?",
     "giai": "Dùng từ “dự đoán”, nói về ứng dụng.",
     "goi_y": "Tránh các động từ chỉ suy nghĩ của người.",
     "a": [
      "Ứng dụng dự đoán video con dễ xem tiếp",
      "AI biết rõ con thích xem gì",
      "AI muốn con xem thêm nhiều video",
      "Một AI đang lặng lẽ theo dõi con"
     ],
     "h": "3cac1436c3995"
    },
    {
     "k": "ma",
     "id": "bai01-q10",
     "q": "Hai điều nào là rủi ro khi dùng AI? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Rủi ro, không phải lợi ích.",
     "goi_y": "Xem cột Rủi ro.",
     "a": [
      "Đoán sai mà vẫn tự tin",
      "Học theo định kiến trong dữ liệu",
      "Dịch câu nhanh hơn",
      "Lọc thư rác tự động"
     ],
     "h": "aec66a9f587f6"
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
    "id": "bai01-q11",
    "q": "Nhìn hình. “Bài hát gợi ý” thuộc nhóm nào?",
    "giai": "Đoán con thích gì.",
    "img": {
     "src": "img/ai-quanh-con.png"
    },
    "a": [
     "Gợi ý",
     "Thị giác máy tính",
     "Xử lý ngôn ngữ",
     "AI tạo sinh"
    ],
    "h": "629d00d414f8d"
   },
   {
    "k": "mc",
    "id": "bai01-q12",
    "q": "Nhìn hình. Mỗi ảnh chữ số có kích thước bao nhiêu ô?",
    "giai": "64 con số.",
    "img": {
     "src": "img/chu-so-viet-tay.png"
    },
    "a": [
     "8 × 8 ô",
     "4 × 4 ô",
     "28 × 28 ô",
     "100 × 100 ô"
    ],
    "h": "4e90bf09e2859"
   },
   {
    "k": "mc",
    "id": "bai01-q13",
    "q": "Nhìn hình. Khung màu đỏ nghĩa là gì?",
    "giai": "Đỏ = sai.",
    "img": {
     "src": "img/may-du-doan-chu-so.png"
    },
    "a": [
     "Máy đoán sai ảnh đó",
     "Ảnh bị mờ không đọc được",
     "Máy chưa đoán ảnh đó",
     "Ảnh có độ tin cậy 100%"
    ],
    "h": "10244a3bef71c5"
   },
   {
    "k": "mc",
    "id": "bai01-q14",
    "q": "Nhìn hình. Sau “trời”, từ nào có xác suất cao nhất?",
    "giai": "47,4%.",
    "img": {
     "src": "img/du-doan-tu-tiep-theo.png"
    },
    "a": [
     "nắng",
     "mưa",
     "lạnh",
     "đẹp"
    ],
    "h": "1a0fade053ad8"
   },
   {
    "k": "mc",
    "id": "bai01-q15",
    "q": "Điểm chung của mọi ứng dụng AI trong bài là gì?",
    "giai": "Dự đoán.",
    "a": [
     "Đưa ra dự đoán từ dữ liệu",
     "Đều là robot biết đi",
     "Đều không bao giờ sai",
     "Đều chạy không cần điện"
    ],
    "h": "1c9797b868251c"
   },
   {
    "k": "mc",
    "id": "bai01-q16",
    "q": "Vì sao máy tính bỏ túi không được coi là AI?",
    "giai": "Không học, không dự đoán.",
    "a": [
     "Nó chỉ làm theo quy tắc viết sẵn",
     "Nó quá nhỏ để chứa AI",
     "Nó không có kết nối mạng",
     "Nó chỉ tính được số nguyên"
    ],
    "h": "1ecb4bda4de81a"
   },
   {
    "k": "mc",
    "id": "bai01-q17",
    "q": "Chatbot tạo ra câu trả lời bằng cách nào?",
    "giai": "AI tạo sinh.",
    "a": [
     "Đoán từ tiếp theo nhiều lần liên tiếp",
     "Tra từng câu trong một cuốn sách đáp án",
     "Hỏi một người đang ngồi trả lời",
     "Chọn ngẫu nhiên một câu có sẵn"
    ],
    "h": "1fdb8541e91fc5"
   },
   {
    "k": "mc",
    "id": "bai01-q18",
    "q": "Máy đoán một chữ số với độ tin cậy 99%. Kết luận nào đúng?",
    "giai": "Dự đoán không phải chắc chắn.",
    "a": [
     "Có khả năng cao đúng, vẫn có thể sai",
     "Chắc chắn đúng 100% mọi lúc",
     "Chắc chắn là đoán sai rồi",
     "Máy đã hiểu chữ số như người"
    ],
    "h": "566137564d690"
   },
   {
    "k": "mc",
    "id": "bai01-q19",
    "q": "Ai chịu trách nhiệm khi một hệ thống AI được dùng sai?",
    "giai": "Con người.",
    "a": [
     "Những người làm và dùng hệ thống",
     "Chính hệ thống AI đó",
     "Không ai cả",
     "Chiếc máy tính chạy nó"
    ],
    "h": "196995bff33b59"
   },
   {
    "k": "ma",
    "id": "bai01-q20",
    "q": "Hai việc nào cần AI (học từ dữ liệu để dự đoán)? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dự đoán.",
    "a": [
     "Nhận diện giọng nói",
     "Gợi ý bài hát",
     "Cộng hai số",
     "Hẹn giờ báo thức"
    ],
    "h": "11fd01c415c7d1"
   },
   {
    "k": "ma",
    "id": "bai01-q21",
    "q": "Hai cách nói nào là cách nói kỹ thuật? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Nói về dự đoán.",
    "a": [
     "Ứng dụng dự đoán từ tiếp theo",
     "Hệ thống nhận diện dự đoán khuôn mặt",
     "AI hiểu con buồn",
     "AI muốn giúp con"
    ],
    "h": "e6c93c56ff920"
   },
   {
    "k": "ma",
    "id": "bai01-q22",
    "q": "Hai điều nào là lợi ích của AI? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Lợi ích.",
    "a": [
     "Dịch nhanh nhiều ngôn ngữ",
     "Hỗ trợ người khiếm thị",
     "Tạo tin giả như thật",
     "Đoán sai mà vẫn tự tin"
    ],
    "h": "fdb349b54e3e8"
   },
   {
    "k": "ma",
    "id": "bai01-q23",
    "q": "Hai điều nào giúp máy nhìn chữ số giỏi hơn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dữ liệu tốt.",
    "a": [
     "Học thêm nhiều ảnh có đáp án",
     "Ảnh rõ nét hơn",
     "Đổi màu máy tính",
     "Tắt bớt ô tin cậy"
    ],
    "h": "1a567045be0200"
   },
   {
    "k": "sx",
    "id": "bai01-q24",
    "q": "Sắp xếp cách máy học nhìn chữ số.",
    "giai": "Dữ liệu → học → ảnh mới → dự đoán.",
    "a": [
     "Thu thập ảnh có đáp án",
     "Máy học từ các ảnh đó",
     "Đưa ảnh mới chưa thấy",
     "Máy đưa ra dự đoán"
    ],
    "h": "f977c6c43fc2e"
   },
   {
    "k": "sx",
    "id": "bai01-q25",
    "q": "Sắp xếp cách máy nhỏ sinh một câu.",
    "giai": "Đoán từ tiếp theo.",
    "a": [
     "Đếm cặp từ trong các câu mẫu",
     "Bắt đầu bằng một từ",
     "Chọn từ hay đi sau nhất",
     "Lặp lại cho tới khi đủ câu"
    ],
    "h": "18ace80b21db03"
   },
   {
    "k": "dd",
    "id": "bai01-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Định nghĩa.",
    "mau": "AI đưa ra {0} dựa trên {1}.",
    "o": [
     [
      "dự đoán",
      "mệnh lệnh",
      "cảm xúc",
      "quy tắc cố định"
     ],
     [
      "dữ liệu",
      "cảm xúc",
      "phép màu",
      "may mắn"
     ]
    ],
    "h": "13b092be7afdeb"
   },
   {
    "k": "dd",
    "id": "bai01-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Quy tắc vs học.",
    "mau": "Máy tính bỏ túi làm theo {0}; bộ lọc thư rác {1} từ dữ liệu.",
    "o": [
     [
      "quy tắc viết sẵn",
      "dữ liệu",
      "dự đoán",
      "cảm xúc"
     ],
     [
      "học",
      "quên",
      "sao chép",
      "đếm ngược"
     ]
    ],
    "h": "318da021b560b"
   },
   {
    "k": "dd",
    "id": "bai01-q28",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Chia ảnh học / ảnh thử.",
    "mau": "Máy học trên {0} ảnh và thử trên {1} ảnh chưa thấy.",
    "o": [
     [
      "1257",
      "540",
      "10",
      "64"
     ],
     [
      "540",
      "1257",
      "64",
      "8"
     ]
    ],
    "h": "5220320fcadfe"
   },
   {
    "k": "dd",
    "id": "bai01-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "AI tạo sinh.",
    "mau": "Chatbot đoán từ {0}; nó có thể {1} thông tin.",
    "o": [
     [
      "tiếp theo",
      "đầu tiên",
      "dài nhất",
      "khó nhất"
     ],
     [
      "bịa",
      "xoá",
      "khoá",
      "gửi"
     ]
    ],
    "h": "b851c6b5646de"
   },
   {
    "k": "ds",
    "id": "bai01-q30",
    "q": "AI có thể đoán sai dù độ tin cậy cao.",
    "giai": "Dự đoán, không phải chắc chắn.",
    "h": "115ebf06bf5f49"
   },
   {
    "k": "ds",
    "id": "bai01-q31",
    "q": "Đèn giao thông hẹn giờ là một hệ thống AI.",
    "giai": "Quy tắc cố định.",
    "h": "40ff9f5ad2dc7"
   },
   {
    "k": "ds",
    "id": "bai01-q32",
    "q": "Nói “AI muốn…” là cách nói kỹ thuật chính xác.",
    "giai": "Nói về dự đoán của hệ thống.",
    "h": "dfeae80b04e18"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
