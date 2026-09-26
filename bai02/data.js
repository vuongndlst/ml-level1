window.BAI = {
 "bai": 2,
 "ma": "bai02",
 "nhan": "Bài 2",
 "tieu_de": "Máy học như thế nào?",
 "phan": "Mở đầu · AI và Machine Learning",
 "cau_hoi": "Máy “học” nghĩa là gì — và học từ đâu?",
 "gioi_thieu": [
  "Bài 1 cho thấy AI dự đoán từ dữ liệu. Bài này trả lời: máy <b>học</b> để dự đoán như thế nào? Khác gì với lập trình bình thường, và vì sao dữ liệu quyết định máy giỏi hay dở?",
  "Con tiếp tục dùng bộ ảnh chữ số viết tay: cho máy học ít hoặc nhiều ví dụ, giấu một chữ số, gắn nhãn sai — và xem chuyện gì xảy ra. Cuối bài là bản đồ ba loại học máy và quy trình một dự án.",
  "Mọi con số trên trang là kết quả chạy thật của notebook bài học."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai02",
 "muc_tieu": [
  "Phân biệt lập trình bằng quy tắc với học máy.",
  "Giải thích vì sao nhiều ví dụ giúp máy đoán đúng hơn.",
  "Nhận ra máy chỉ biết những gì có trong dữ liệu; nhãn sai làm máy học sai.",
  "Phân biệt ba loại học máy: có giám sát, không giám sát, tăng cường.",
  "Kể được 5 bước của một dự án học máy."
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
   "ten": "Quy tắc hay học từ ví dụ?",
   "ten_ngan": "Quy tắc / học",
   "phut": 4,
   "muc_tieu": "phân biệt lập trình bằng quy tắc với học máy.",
   "khoi_dong": "Nếu phải viết quy tắc để máy nhận ra chữ số 1 viết tay, con sẽ viết gì?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Hai cách làm cho máy tính giải một bài toán",
     "alt": "Hai cách làm cho máy tính giải một bài toán",
     "src": "img/quy-tac-va-hoc.png"
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "viết quy tắc hay cho máy học",
     "huong_dan": "Bấm “Bước tiếp” để so hai cách nhận ra chữ số.",
     "nhan_chon": "Cách",
     "cot": [
      "Bước",
      "Việc",
      "Kết quả"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Nhận chữ số viết tay",
       "dong": [
        [
         "0",
         "Nhiệm vụ: nhận ra chữ số viết tay",
         "Hai cách làm"
        ],
        [
         "1",
         "Cách viết quy tắc: “số 1 là một nét thẳng đứng”",
         "Người viết nghiêng, có chân đế… → quy tắc sai"
        ],
        [
         "2",
         "Thêm quy tắc cho từng kiểu viết",
         "Hàng trăm quy tắc, vẫn sót — không làm nổi cho 10 chữ số"
        ],
        [
         "3",
         "Cách học máy: đưa 1257 ảnh có đáp án",
         "Máy tự tìm quy luật từ ví dụ"
        ],
        [
         "4",
         "Thử trên 540 ảnh mới",
         "Đúng 95,9% — không ai phải viết quy tắc"
        ]
       ]
      }
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Học máy (Machine Learning)",
     "html": "Cách làm cho máy tính <b>tự tìm quy luật từ ví dụ có đáp án</b>, thay vì con người viết sẵn từng quy tắc. Quy luật máy tìm được gọi là <b>model</b>.",
     "ky_hieu": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ học máy là máy tự học mọi thứ không cần con người — con người chọn dữ liệu và đáp án.",
      "Nghĩ bài toán nào cũng cần học máy — cộng hai số thì viết quy tắc là đủ."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Lập trình thường: quy tắc → kết quả. Học máy: ví dụ + đáp án → quy tắc (model)."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q1",
     "q": "Trong học máy, thứ gì do máy tự tìm ra?",
     "giai": "Máy tìm quy tắc từ ví dụ.",
     "goi_y": "Xem ô màu đỏ ở hình bên phải.",
     "a": [
      "Quy tắc (model)",
      "Dữ liệu đầu vào",
      "Đáp án của ví dụ",
      "Câu hỏi của bài toán"
     ],
     "h": "c7ad7ba825021"
    },
    {
     "k": "ds",
     "id": "bai02-q2",
     "q": "Để nhận ra chữ số viết tay, viết quy tắc bằng tay dễ hơn cho máy học.",
     "giai": "Quá nhiều kiểu viết.",
     "goi_y": "Xem bước 2 của phần Tự thử.",
     "h": "439c4aeb5cce7"
    }
   ]
  },
  {
   "ten": "Càng nhiều ví dụ càng giỏi?",
   "ten_ngan": "Nhiều ví dụ",
   "phut": 5,
   "muc_tieu": "giải thích vì sao nhiều ví dụ giúp máy đoán đúng hơn.",
   "khoi_dong": "Con học một kiểu bài toán qua 2 ví dụ hay 50 ví dụ thì làm bài chắc hơn?",
   "khoi": [
    {
     "t": "demo_truot",
     "tieu_de": "số ảnh cho máy học",
     "huong_dan": "Kéo để đổi số ảnh có đáp án. Mỗi mức học 5 lần (5 cách chia khác nhau), thanh là độ chính xác trung bình trên ảnh mới.",
     "dieu_kien": "Học <b>{x}</b> ảnh",
     "moc": [
      {
       "x": 10,
       "n": "học 10 ảnh",
       "p": 41.6
      },
      {
       "x": 20,
       "n": "học 20 ảnh",
       "p": 57.4
      },
      {
       "x": 50,
       "n": "học 50 ảnh",
       "p": 80.1
      },
      {
       "x": 100,
       "n": "học 100 ảnh",
       "p": 88.7
      },
      {
       "x": 200,
       "n": "học 200 ảnh",
       "p": 92.6
      },
      {
       "x": 500,
       "n": "học 500 ảnh",
       "p": 94.9
      },
      {
       "x": 1000,
       "n": "học 1000 ảnh",
       "p": 95.9
      }
     ],
     "nhan_n": "Máy học",
     "nhan_p": "Đoán đúng ảnh mới",
     "so_le_x": 0,
     "bat_dau": 0
    },
    {
     "t": "anh",
     "cap": "Độ chính xác theo số ảnh học (trục ngang giãn theo cấp số)",
     "alt": "Độ chính xác theo số ảnh học (trục ngang giãn theo cấp số)",
     "src": "img/cang-nhieu-vi-du.png"
    },
    {
     "t": "p",
     "html": "Chỉ 10 ảnh: đúng 41,6%. 100 ảnh: 88,7%. 1000 ảnh: 95,9% — tăng rất nhanh lúc đầu, rồi chậm dần."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ cứ thêm dữ liệu là tăng mãi — tới một lúc tăng rất ít.",
      "Kiểm tra máy bằng chính ảnh nó đã học — phải thử trên ảnh mới."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Nhiều ví dụ hơn → đoán đúng hơn, nhưng mức tăng chậm dần."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q3",
     "q": "Theo phần Tự thử, học 100 ảnh thì máy đoán đúng bao nhiêu?",
     "giai": "Kéo tới 100.",
     "goi_y": "Kéo thanh tới 100 ảnh.",
     "a": [
      "88,7%",
      "41,6%",
      "95,9%",
      "80,1%"
     ],
     "h": "16f7c3dca9067e"
    },
    {
     "k": "dd",
     "id": "bai02-q4",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "Nhiều ví dụ hơn.",
     "goi_y": "Đọc hai đầu đường cong.",
     "mau": "Học 10 ảnh: đúng {0}; học 1000 ảnh: đúng {1}.",
     "o": [
      [
       "41,6%",
       "95,9%",
       "100%",
       "0%"
      ],
      [
       "95,9%",
       "41,6%",
       "100%",
       "50,0%"
      ]
     ],
     "h": "17f7b040fa6864"
    }
   ]
  },
  {
   "ten": "Dữ liệu quyết định",
   "ten_ngan": "Dữ liệu",
   "phut": 5,
   "muc_tieu": "nhận ra máy chỉ biết những gì có trong dữ liệu; nhãn sai làm máy học sai.",
   "khoi_dong": "Nếu chưa bao giờ thấy con kiwi, con gọi nó là quả gì?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Máy học mọi chữ số trừ số 5, rồi thử trên 55 ảnh số 5",
     "alt": "Máy học mọi chữ số trừ số 5, rồi thử trên 55 ảnh số 5",
     "src": "img/thieu-mot-chu-so.png"
    },
    {
     "t": "p",
     "html": "Không ảnh nào được đoán đúng: máy chưa từng thấy số 5 nên chỉ chọn được trong những số đã học — nhiều nhất là “3” (17 ảnh) và “9” (17 ảnh)."
    },
    {
     "t": "anh",
     "cap": "Gắn nhãn sai một phần ảnh học rồi thử trên ảnh mới",
     "alt": "Gắn nhãn sai một phần ảnh học rồi thử trên ảnh mới",
     "src": "img/nhan-sai.png"
    },
    {
     "t": "p",
     "html": "Gắn sai 20% nhãn: còn 87,4%. Gắn sai 60%: còn 77,2%. Đáp án mẫu sai thì máy học theo cái sai."
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Thử ở nhà: Teachable Machine",
     "html": "Trang <b>teachablemachine.withgoogle.com</b> (Google, không cần đăng nhập) cho con dạy máy nhận ra cử chỉ bằng webcam trong vài phút. Thử dạy chỉ với ảnh nền sáng rồi kiểm tra ở chỗ tối — máy sẽ đoán kém, đúng như bài học."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đổ lỗi cho máy khi dữ liệu thiếu hoặc sai.",
      "Nghĩ máy “đoán ra” được thứ chưa từng học."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Máy chỉ biết điều có trong dữ liệu; nhãn sai → học sai. Dữ liệu tốt quan trọng hơn hết."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q5",
     "q": "Máy chưa từng học số 5. Khi gặp ảnh số 5, máy làm gì?",
     "giai": "Chỉ chọn trong các số đã học.",
     "goi_y": "Xem hình cột màu đỏ.",
     "a": [
      "Đoán thành một số đã học",
      "Nói rằng “tôi không biết”",
      "Đoán đúng là số 5",
      "Từ chối đưa ra dự đoán"
     ],
     "h": "150e21de6fdc15"
    },
    {
     "k": "ds",
     "id": "bai02-q6",
     "q": "Khi 60% nhãn học bị sai, máy vẫn đoán đúng như khi nhãn đúng.",
     "giai": "77,2% so với 96,3%.",
     "goi_y": "So cột đầu và cột cuối.",
     "h": "2353bcc228893"
    }
   ]
  },
  {
   "ten": "Ba loại học máy",
   "ten_ngan": "Ba loại",
   "phut": 4,
   "muc_tieu": "phân biệt ba loại học máy: có giám sát, không giám sát, tăng cường.",
   "khoi_dong": "Học có thầy chấm bài, tự khám phá, và học qua thử – sai: con đã từng học theo kiểu nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Ba cách máy học",
     "alt": "Ba cách máy học",
     "src": "img/ba-loai-hoc-may.png"
    },
    {
     "t": "bang",
     "cot": [
      "Loại",
      "Dữ liệu",
      "Máy học gì",
      "Ví dụ",
      "Trong khoá"
     ],
     "dong": [
      [
       "Có giám sát",
       "Có đáp án",
       "Đoán đáp án cho dữ liệu mới",
       "Nhận chữ số, lọc thư rác",
       "Bài 11 – 24"
      ],
      [
       "Không giám sát",
       "Không đáp án",
       "Tự tìm nhóm giống nhau",
       "Gom bài hát thành playlist",
       "Bài 25"
      ],
      [
       "Tăng cường",
       "Điểm thưởng sau mỗi lần thử",
       "Cách hành động tốt nhất",
       "Máy chơi cờ, robot đi",
       "Bài 27"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ học không giám sát là máy tự biết tên nhóm — con người đặt tên.",
      "Nghĩ máy nhìn chữ số là học tăng cường — nó có đáp án nên là có giám sát."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Có đáp án → có giám sát; không đáp án → không giám sát; điểm thưởng → tăng cường."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q7",
     "q": "Máy nhìn chữ số trong bài học theo kiểu nào?",
     "giai": "Ảnh có đáp án.",
     "goi_y": "Dữ liệu có đáp án không?",
     "a": [
      "Có giám sát",
      "Không giám sát",
      "Tăng cường",
      "Không phải học máy"
     ],
     "h": "17aa06a3c23b75"
    },
    {
     "k": "ma",
     "id": "bai02-q8",
     "q": "Hai bài toán nào là không giám sát hoặc tăng cường? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Không có đáp án sẵn.",
     "goi_y": "Bài toán nào không có cột đáp án?",
     "a": [
      "Gom khách hàng thành nhóm",
      "Robot học giữ thăng bằng",
      "Đoán giá nhà có sẵn giá cũ",
      "Nhận chữ số có đáp án"
     ],
     "h": "10689ff11c98ac"
    }
   ]
  },
  {
   "ten": "Một dự án học máy",
   "ten_ngan": "Dự án",
   "phut": 4,
   "muc_tieu": "kể được 5 bước của một dự án học máy.",
   "khoi_dong": "Nếu muốn làm một app đoán “bạn có đi học muộn không”, con bắt đầu từ đâu?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Năm bước — và vòng quay lại khi kết quả chưa tốt",
     "alt": "Năm bước — và vòng quay lại khi kết quả chưa tốt",
     "src": "img/quy-trinh-du-an.png"
    },
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
       "Cần đoán gì? Ai dùng kết quả?",
       "Bài 11"
      ],
      [
       "2 · Dữ liệu",
       "Thu thập, làm sạch, khám phá",
       "Bài 4 – 9"
      ],
      [
       "3 · Huấn luyện",
       "Chọn model, cho máy học",
       "Bài 12 – 21"
      ],
      [
       "4 · Đánh giá",
       "Thử trên dữ liệu mới, so với mốc",
       "Bài 11, 23"
      ],
      [
       "5 · Dùng và theo dõi",
       "Đưa thành app, kiểm tra khi dùng",
       "Bài 29"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Khoá học của con",
     "html": "Bài 3 học Python; Bài 4 – 9 học về dữ liệu; từ Bài 11 bắt đầu xây model. Xen giữa là 6 bài thực hành nhóm và dự án cuối khoá (Bài 30 – 32)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nhảy ngay vào chọn model mà chưa rõ câu hỏi và dữ liệu.",
      "Nghĩ đánh giá xong là hết — model cần theo dõi khi dùng thật."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Câu hỏi → dữ liệu → huấn luyện → đánh giá → dùng và theo dõi; chưa tốt thì quay lại."
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai02-q9",
     "q": "Sắp xếp các bước của một dự án học máy.",
     "giai": "Năm bước.",
     "goi_y": "Nhìn hình quy trình.",
     "a": [
      "Đặt câu hỏi",
      "Thu thập và làm sạch dữ liệu",
      "Huấn luyện model",
      "Đánh giá trên dữ liệu mới",
      "Dùng và theo dõi"
     ],
     "h": "1ae32c3c53270b"
    },
    {
     "k": "mc",
     "id": "bai02-q10",
     "q": "Kết quả đánh giá chưa tốt. Theo hình, nên làm gì?",
     "giai": "Mũi tên đỏ quay lại.",
     "goi_y": "Xem mũi tên màu đỏ.",
     "a": [
      "Quay lại lấy thêm dữ liệu, sửa câu hỏi",
      "Đưa ngay model vào sử dụng",
      "Xoá hết dữ liệu làm lại từ đầu",
      "Đổi tên model cho hay hơn"
     ],
     "h": "70b6dec62fcf"
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
    "id": "bai02-q11",
    "q": "Nhìn hình. Trong học máy, “Kết quả mẫu” đóng vai trò gì?",
    "giai": "Đáp án là đầu vào.",
    "img": {
     "src": "img/quy-tac-va-hoc.png"
    },
    "a": [
     "Đầu vào cho máy học",
     "Đầu ra cuối cùng của máy",
     "Thứ máy tự nghĩ ra",
     "Thứ không cần thiết"
    ],
    "h": "a6dbf49c36e56"
   },
   {
    "k": "mc",
    "id": "bai02-q12",
    "q": "Nhìn hình. Từ 500 lên 1000 ảnh, độ chính xác thay đổi thế nào?",
    "giai": "Chậm dần.",
    "img": {
     "src": "img/cang-nhieu-vi-du.png"
    },
    "a": [
     "Tăng rất ít",
     "Tăng gấp đôi",
     "Giảm mạnh",
     "Về 0"
    ],
    "h": "1cf0108e5b238b"
   },
   {
    "k": "mc",
    "id": "bai02-q13",
    "q": "Nhìn hình. Ảnh số 5 thường bị đoán thành số nào nhiều nhất?",
    "giai": "Cột cao nhất.",
    "img": {
     "src": "img/thieu-mot-chu-so.png"
    },
    "a": [
     "3",
     "0",
     "1",
     "2"
    ],
    "h": "1dff97c46363ed"
   },
   {
    "k": "mc",
    "id": "bai02-q14",
    "q": "Nhìn hình. Loại học nào có các chấm cùng một màu xám?",
    "giai": "Không có đáp án.",
    "img": {
     "src": "img/ba-loai-hoc-may.png"
    },
    "a": [
     "Không giám sát",
     "Có giám sát",
     "Tăng cường",
     "Lập trình quy tắc"
    ],
    "h": "171c658dd22aae"
   },
   {
    "k": "mc",
    "id": "bai02-q15",
    "q": "Bước đầu tiên của một dự án học máy là gì?",
    "giai": "Câu hỏi trước.",
    "a": [
     "Đặt câu hỏi",
     "Chọn model",
     "Đánh giá",
     "Dùng app"
    ],
    "h": "a2845100c8224"
   },
   {
    "k": "mc",
    "id": "bai02-q16",
    "q": "Muốn máy lọc thư rác tốt hơn, cách nào hiệu quả nhất?",
    "giai": "Dữ liệu tốt.",
    "a": [
     "Thêm nhiều thư có nhãn đúng",
     "Đổi màu giao diện hộp thư",
     "Bớt số thư dùng để học",
     "Gắn nhãn ngẫu nhiên cho thư"
    ],
    "h": "1518cb1d9028e7"
   },
   {
    "k": "mc",
    "id": "bai02-q17",
    "q": "Một app nhận diện cây chỉ học ảnh cây xoài. Gặp cây ổi, app sẽ?",
    "giai": "Chỉ biết điều đã học.",
    "a": [
     "Đoán thành cây đã học",
     "Nhận ra đúng là cây ổi",
     "Tự tìm ảnh cây ổi để học",
     "Báo rằng mình không chắc"
    ],
    "h": "1c1031abe87e83"
   },
   {
    "k": "mc",
    "id": "bai02-q18",
    "q": "Gắn nhãn sai nhiều ảnh học thì điều gì xảy ra?",
    "giai": "Học theo cái sai.",
    "a": [
     "Máy đoán sai nhiều hơn",
     "Máy đoán đúng hơn trước",
     "Không ảnh hưởng gì",
     "Máy tự sửa nhãn"
    ],
    "h": "1a2274d4e4305"
   },
   {
    "k": "mc",
    "id": "bai02-q19",
    "q": "Máy chơi cờ học bằng cách tự chơi và nhận điểm khi thắng. Đó là loại học nào?",
    "giai": "Điểm thưởng.",
    "a": [
     "Tăng cường",
     "Có giám sát",
     "Không giám sát",
     "Lập trình quy tắc"
    ],
    "h": "f0e7fc9fbddde"
   },
   {
    "k": "ma",
    "id": "bai02-q20",
    "q": "Hai điều nào đúng về học máy? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Học từ ví dụ.",
    "a": [
     "Máy tìm quy luật từ ví dụ",
     "Cần dữ liệu có chất lượng",
     "Con người viết sẵn mọi quy tắc",
     "Không cần dữ liệu"
    ],
    "h": "1f336369202c57"
   },
   {
    "k": "ma",
    "id": "bai02-q21",
    "q": "Hai bài toán nào là học có giám sát? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Có đáp án.",
    "a": [
     "Đoán thư rác từ thư có nhãn",
     "Nhận chữ số có đáp án",
     "Gom bài hát thành nhóm",
     "Robot tự học đi"
    ],
    "h": "ec3ecc5ee7c4f"
   },
   {
    "k": "ma",
    "id": "bai02-q22",
    "q": "Hai việc nào nằm trong bước “Dữ liệu”? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Bước 2.",
    "a": [
     "Thu thập dữ liệu",
     "Làm sạch dữ liệu",
     "Đưa app lên mạng",
     "Đặt tên cho model"
    ],
    "h": "1d00a2a83bac4c"
   },
   {
    "k": "ma",
    "id": "bai02-q23",
    "q": "Hai nguyên nhân nào làm máy đoán kém? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dữ liệu kém.",
    "a": [
     "Quá ít ví dụ",
     "Nhãn bị sai",
     "Dữ liệu nhiều và đúng",
     "Thử trên ảnh mới"
    ],
    "h": "1fcb0b76286051"
   },
   {
    "k": "sx",
    "id": "bai02-q24",
    "q": "Sắp xếp cách máy học nhận chữ số.",
    "giai": "Học → thử → đo.",
    "a": [
     "Thu thập ảnh có đáp án",
     "Máy tìm quy luật (model)",
     "Thử trên ảnh mới",
     "Đo độ chính xác"
    ],
    "h": "e4f1d2155bdb1"
   },
   {
    "k": "sx",
    "id": "bai02-q25",
    "q": "Sắp xếp theo số ảnh học, độ chính xác từ thấp tới cao.",
    "giai": "Nhiều ví dụ hơn.",
    "a": [
     "Học 10 ảnh",
     "Học 50 ảnh",
     "Học 200 ảnh",
     "Học 1000 ảnh"
    ],
    "h": "3e70ca4239ba3"
   },
   {
    "k": "dd",
    "id": "bai02-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hai cách.",
    "mau": "Lập trình thường: con người viết {0}; học máy: máy tìm {1} từ ví dụ.",
    "o": [
     [
      "quy tắc",
      "dữ liệu",
      "đáp án",
      "câu hỏi"
     ],
     [
      "quy luật",
      "dữ liệu",
      "câu hỏi",
      "màn hình"
     ]
    ],
    "h": "7f90c101b4fe6"
   },
   {
    "k": "dd",
    "id": "bai02-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Ba loại.",
    "mau": "Dữ liệu có đáp án: học {0}; không có đáp án: học {1}.",
    "o": [
     [
      "có giám sát",
      "tăng cường",
      "không giám sát",
      "lập trình"
     ],
     [
      "không giám sát",
      "có giám sát",
      "tăng cường",
      "lập trình"
     ]
    ],
    "h": "bb1f5805d28af"
   },
   {
    "k": "dd",
    "id": "bai02-q28",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Nhãn sai.",
    "mau": "Nhãn đúng: đoán đúng {0}; sai 60%% nhãn: còn {1}.",
    "o": [
     [
      "96,3%",
      "77,2%",
      "100%",
      "0%"
     ],
     [
      "77,2%",
      "96,3%",
      "100%",
      "0%"
     ]
    ],
    "h": "1183632ce8bc8d"
   },
   {
    "k": "dd",
    "id": "bai02-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Quy trình.",
    "mau": "Kết quả chưa tốt thì {0} lấy thêm dữ liệu; model dùng thật vẫn cần {1}.",
    "o": [
     [
      "quay lại",
      "bỏ qua",
      "dừng hẳn",
      "xoá"
     ],
     [
      "theo dõi",
      "xoá",
      "đổi tên",
      "giấu"
     ]
    ],
    "h": "9c6d091df0897"
   },
   {
    "k": "ds",
    "id": "bai02-q30",
    "q": "Máy có thể đoán đúng một chữ số mà nó chưa từng được học.",
    "giai": "Chỉ biết điều đã học.",
    "h": "cd8efbdf4b351"
   },
   {
    "k": "ds",
    "id": "bai02-q31",
    "q": "Tăng từ 10 lên 100 ảnh học làm độ chính xác tăng rõ rệt.",
    "giai": "41,6% → 88,7%.",
    "h": "172f383e6040eb"
   },
   {
    "k": "ds",
    "id": "bai02-q32",
    "q": "Học tăng cường cần sẵn đáp án cho từng ví dụ.",
    "giai": "Cần điểm thưởng.",
    "h": "1e2fce846b1482"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
