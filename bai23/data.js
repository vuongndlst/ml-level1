window.BAI = {
 "bai": 23,
 "ma": "bai23",
 "nhan": "Bài 23",
 "tieu_de": "Đưa model thành ứng dụng",
 "phan": "Phần E · Trải nghiệm",
 "cau_hoi": "Làm sao để người không biết code cũng dùng được model của con?",
 "gioi_thieu": [
  "Model của con đang nằm trong notebook — chỉ người biết Python mới dùng được. Bài này con biến model thành một <b>ứng dụng web nhỏ</b> có thanh trượt và nút bấm, bằng thư viện <b>Gradio</b> ngay trong Colab.",
  "Model là hồi quy logistic 2 cột của Bài 13 trên bảng khối 10 (mô phỏng), đúng 91,7% trên tập kiểm tra. Trọng tâm không phải model, mà là: bọc model thành hàm, dựng giao diện, kiểm thử và chia sẻ có trách nhiệm.",
  "Con dùng lại predict_proba (Bài 13) và ý tưởng “vùng có dữ liệu” (Bài 12)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai23",
 "muc_tieu": [
  "Mô tả được đường đi từ người dùng tới model và ngược lại.",
  "Bọc model trong một hàm nhận đầu vào, trả kết quả bằng lời.",
  "Nêu được ba phần của gr.Interface: fn, inputs, outputs.",
  "Kiểm thử app với đầu vào ngoài vùng dữ liệu và đầu vào vô lý.",
  "Chia sẻ app có trách nhiệm: ghi nguồn dữ liệu, giới hạn, quyền riêng tư."
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
   "ten": "Từ notebook tới người dùng",
   "ten_ngan": "Người dùng",
   "phut": 4,
   "muc_tieu": "mô tả được đường đi từ người dùng tới model và ngược lại.",
   "khoi_dong": "Khi xem dự báo thời tiết, con có mở notebook Python không? Vậy model thời tiết tới tay con bằng cách nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Đường đi của một lần dự đoán trong app",
     "alt": "Đường đi của một lần dự đoán trong app",
     "src": "img/so-do-ung-dung.png"
    },
    {
     "t": "bang",
     "cot": [
      "Phần",
      "Việc",
      "Ai làm"
     ],
     "dong": [
      [
       "Ô nhập",
       "Nhận số liệu từ người dùng",
       "Gradio vẽ sẵn"
      ],
      [
       "Hàm du_doan",
       "Kiểm tra đầu vào, gọi model, viết câu trả lời",
       "Con viết"
      ],
      [
       "Model",
       "Tính xác suất",
       "Đã huấn luyện trước"
      ],
      [
       "Ô kết quả",
       "Hiện câu trả lời",
       "Gradio vẽ sẵn"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ app huấn luyện lại model mỗi lần bấm nút — model đã học xong, app chỉ gọi dự đoán.",
      "Đưa thẳng con số 0,818 cho người dùng mà không giải thích."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Người dùng → ô nhập → hàm → model → câu trả lời bằng lời."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai23-q1",
     "q": "Trong sơ đồ, phần nào do con tự viết?",
     "giai": "Gradio vẽ giao diện; con viết hàm.",
     "goi_y": "Xem cột “Ai làm” trong bảng.",
     "a": [
      "Hàm du_doan kiểm tra đầu vào",
      "Thanh trượt của ô nhập",
      "Khung hiện kết quả chữ",
      "Nút Submit màu cam"
     ],
     "h": "1c3693615b9615"
    },
    {
     "k": "ds",
     "id": "bai23-q2",
     "q": "Mỗi lần người dùng bấm Submit, app huấn luyện lại model từ đầu.",
     "giai": "Model đã học xong; app chỉ gọi dự đoán.",
     "goi_y": "Huấn luyện xảy ra trước hay sau khi dựng app?",
     "h": "196c3c380a51aa"
    }
   ]
  },
  {
   "ten": "Bọc model trong một hàm",
   "ten_ngan": "Hàm",
   "phut": 5,
   "muc_tieu": "bọc model trong một hàm nhận đầu vào, trả kết quả bằng lời.",
   "khoi_dong": "Người dùng nhập 5 giờ và 100 phút. Con muốn app trả lời thế nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Hàm <code>du_doan(gio, phut)</code> làm ba việc: đặt hai số vào một bảng 1 dòng có đúng tên cột như lúc huấn luyện, gọi <code>model.predict_proba</code>, rồi viết câu trả lời."
    },
    {
     "t": "vi_du",
     "tieu_de": "gọi hàm với vài đầu vào",
     "de": "Model logistic 2 cột, bảng khối 10 (mô phỏng).",
     "cot": [
      "Giờ tự học",
      "Phút mạng XH",
      "Câu app trả về"
     ],
     "dong": [
      [
       "0,0",
       "300",
       "Khả năng Đạt: 4%"
      ],
      [
       "2,0",
       "200",
       "Khả năng Đạt: 22%"
      ],
      [
       "3,5",
       "150",
       "Khả năng Đạt: 53%"
      ],
      [
       "5,0",
       "100",
       "Khả năng Đạt: 82%"
      ],
      [
       "7,0",
       "60",
       "Khả năng Đạt: 96%"
      ]
     ],
     "ket_luan": "Cùng một model, nhưng câu trả lời bằng lời dễ hiểu hơn con số 0,818.",
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Tên cột phải khớp",
     "html": "Model học trên bảng có cột StudyHours, PhutMangXH. Hàm phải tạo bảng với <b>đúng</b> hai tên cột đó, đúng thứ tự — sai tên thì model báo lỗi hoặc cảnh báo."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Trả về cả mảng [[0,18 0,82]] — người dùng không hiểu.",
      "Tạo bảng với tên cột khác lúc huấn luyện."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Hàm = bảng 1 dòng đúng tên cột → predict_proba → câu trả lời bằng lời."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai23-q3",
     "q": "Theo ví dụ, nhập 3,5 giờ và 150 phút thì app trả lời gì?",
     "giai": "Gần ngưỡng 50%.",
     "goi_y": "Tìm dòng 3,5 giờ trong bảng ví dụ.",
     "a": [
      "Khả năng Đạt: 53%",
      "Khả năng Đạt: 82%",
      "Khả năng Đạt: 22%",
      "Khả năng Đạt: 100%"
     ],
     "h": "133b6db8c981a4"
    },
    {
     "k": "sx",
     "id": "bai23-q4",
     "q": "Sắp xếp các việc trong hàm du_doan.",
     "giai": "Nhận → bảng → dự đoán → trả lời.",
     "goi_y": "Model cần bảng trước khi dự đoán.",
     "a": [
      "Nhận giờ và phút từ ô nhập",
      "Đặt vào bảng 1 dòng đúng tên cột",
      "Gọi model.predict_proba",
      "Trả về câu “Khả năng Đạt: …%”"
     ],
     "h": "d485f9a4cfcab"
    }
   ]
  },
  {
   "ten": "Dựng giao diện bằng Gradio",
   "ten_ngan": "Gradio",
   "phut": 5,
   "muc_tieu": "nêu được ba phần của gr.Interface: fn, inputs, outputs.",
   "khoi_dong": "Một ứng dụng dự đoán cần tối thiểu những phần nào trên màn hình?",
   "khoi": [
    {
     "t": "demo_tung_buoc",
     "tieu_de": "dựng app từng dòng",
     "huong_dan": "Bấm “Bước tiếp” để thêm từng dòng code và xem mỗi dòng làm gì.",
     "nhan_chon": "Mẫu",
     "cot": [
      "Dòng",
      "Code",
      "Tác dụng"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "App dự đoán Đạt",
       "dong": [
        [
         "1",
         "<code>import gradio as gr</code>",
         "Nạp thư viện Gradio"
        ],
        [
         "2",
         "<code>def du_doan(gio, phut): …</code>",
         "Hàm nhận 2 số, trả về một câu"
        ],
        [
         "3",
         "<code>o_gio = gr.Slider(0, 7, label=\"Giờ tự học\")</code>",
         "Ô nhập thứ nhất: thanh trượt 0 – 7 giờ (đúng vùng dữ liệu)"
        ],
        [
         "4",
         "<code>o_phut = gr.Slider(0, 450, label=\"Phút mạng XH\")</code>",
         "Ô nhập thứ hai: 0 – 450 phút"
        ],
        [
         "5",
         "<code>app = gr.Interface(fn=du_doan, inputs=[o_gio, o_phut], outputs=\"text\")</code>",
         "Ghép: 2 ô nhập → hàm → ô kết quả chữ"
        ],
        [
         "6",
         "<code>app.launch()</code>",
         "Chạy app ngay dưới ô code trong Colab"
        ]
       ]
      }
     ]
    },
    {
     "t": "anh",
     "cap": "Giao diện app sau khi chạy (hình minh hoạ vẽ lại)",
     "alt": "Giao diện app sau khi chạy (hình minh hoạ vẽ lại)",
     "src": "img/giao-dien-mau.png"
    },
    {
     "t": "bang",
     "cot": [
      "Phần của gr.Interface",
      "Trong app của bài"
     ],
     "dong": [
      [
       "fn",
       "Hàm du_doan"
      ],
      [
       "inputs",
       "Hai thanh trượt: giờ (0 – 7), phút (0 – 450)"
      ],
      [
       "outputs",
       "Một ô chữ"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Chạy trong Colab",
     "html": "Colab chưa có sẵn Gradio: chạy <code>!pip install -q gradio</code> một lần. <code>app.launch()</code> hiện app ngay dưới ô code; tắt Colab thì app cũng tắt."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đặt thanh trượt 0 – 24 giờ trong khi dữ liệu chỉ có 0,5 – 7 giờ.",
      "Truyền du_doan() (có ngoặc) vào fn — phải truyền tên hàm du_doan."
     ]
    },
    {
     "t": "tom_tat",
     "html": "gr.Interface(fn=hàm, inputs=[ô nhập], outputs=ô kết quả) rồi launch()."
    }
   ],
   "checkpoint": [
    {
     "k": "dd",
     "id": "bai23-q5",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Ba phần: fn, inputs, outputs.",
     "goi_y": "Xem bảng ba phần.",
     "mau": "Trong gr.Interface, hàm dự đoán truyền vào {0}; các thanh trượt truyền vào {1}.",
     "o": [
      [
       "fn",
       "inputs",
       "outputs",
       "launch"
      ],
      [
       "inputs",
       "fn",
       "outputs",
       "label"
      ]
     ],
     "h": "8e7e449407c0d"
    },
    {
     "k": "mc",
     "id": "bai23-q6",
     "q": "Theo phần Tự thử, dòng nào làm app hiện ra dưới ô code?",
     "giai": "launch = khởi chạy.",
     "goi_y": "Xem dòng cuối cùng.",
     "a": [
      "app.launch()",
      "import gradio as gr",
      "def du_doan(gio, phut)",
      "gr.Slider(0, 7)"
     ],
     "h": "fab6f5968e79a"
    }
   ]
  },
  {
   "ten": "Kiểm thử trước khi chia sẻ",
   "ten_ngan": "Kiểm thử",
   "phut": 5,
   "muc_tieu": "kiểm thử app với đầu vào ngoài vùng dữ liệu và đầu vào vô lý.",
   "khoi_dong": "Nếu một bạn nhập 20 giờ tự học mỗi ngày, model sẽ nói gì? Có tin được không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Phút mạng XH giữ 150; kéo giờ tự học từ 0 tới 24",
     "alt": "Phút mạng XH giữ 150; kéo giờ tự học từ 0 tới 24",
     "src": "img/ngoai-vung-du-lieu.png"
    },
    {
     "t": "bang",
     "cot": [
      "Đầu vào thử",
      "Model trả về",
      "Vấn đề"
     ],
     "dong": [
      [
       "12 giờ, 150 phút",
       "99,9%",
       "Ngoài vùng dữ liệu (tối đa 7 giờ)"
      ],
      [
       "20 giờ, 150 phút",
       "100,0%",
       "Vô lý: một ngày chỉ có 24 giờ"
      ],
      [
       "−3 giờ, 100 phút",
       "0,9%",
       "Số âm — không thể có"
      ],
      [
       "4 giờ, 1 000 phút",
       "3,9%",
       "1 000 phút > 16 giờ, ngoài vùng dữ liệu"
      ]
     ]
    },
    {
     "t": "p",
     "html": "Model không biết mình “không biết”: ngoài vùng dữ liệu nó vẫn trả lời rất chắc chắn. Việc chặn đầu vào là của người làm app."
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Hai cách chặn",
     "html": "(1) Đặt giới hạn thanh trượt đúng vùng dữ liệu: 0,5 – 7 giờ, 15 – 450 phút. (2) Trong hàm, nếu đầu vào ngoài vùng thì trả lời “Ngoài phạm vi dữ liệu, không dự đoán được” thay vì một con số."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chỉ thử vài đầu vào “đẹp” rồi chia sẻ.",
      "Tin con số 100% ở đầu vào 20 giờ."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Kiểm thử cả đầu vào biên, vô lý, ngoài vùng dữ liệu; chặn bằng giới hạn và kiểm tra."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai23-q7",
     "q": "Theo bảng kiểm thử, nhập −3 giờ thì model trả về bao nhiêu?",
     "giai": "Model vẫn trả một con số, dù đầu vào vô lý.",
     "goi_y": "Tìm dòng −3 giờ.",
     "a": [
      "0,9%",
      "Báo lỗi, không trả số",
      "0%",
      "3,9%"
     ],
     "h": "e56ce4c318fc1"
    },
    {
     "k": "ma",
     "id": "bai23-q8",
     "q": "Hai cách nào giúp app không trả lời bừa? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Chặn từ ô nhập và trong hàm.",
     "goi_y": "Xem hộp “Hai cách chặn”.",
     "a": [
      "Giới hạn thanh trượt theo vùng dữ liệu",
      "Kiểm tra đầu vào trong hàm",
      "Làm tròn xác suất lên 100%",
      "Ẩn ô kết quả khỏi màn hình"
     ],
     "h": "131216bbc11012"
    }
   ]
  },
  {
   "ten": "Chia sẻ có trách nhiệm",
   "ten_ngan": "Trách nhiệm",
   "phut": 4,
   "muc_tieu": "chia sẻ app có trách nhiệm: ghi nguồn dữ liệu, giới hạn, quyền riêng tư.",
   "khoi_dong": "Con gửi link app cho cả lớp. Một bạn dùng kết quả để trêu bạn khác “sắp trượt”. Lỗi ở đâu?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Việc",
      "Vì sao"
     ],
     "dong": [
      [
       "Ghi rõ “dữ liệu mô phỏng, chỉ để học”",
       "Người dùng biết không nên tin như thật"
      ],
      [
       "Ghi độ chính xác và vùng dữ liệu",
       "Người dùng biết khi nào model hay sai"
      ],
      [
       "Không yêu cầu nhập họ tên, lớp",
       "Không thu thập thông tin cá nhân không cần thiết"
      ],
      [
       "Cẩn thận với launch(share=True)",
       "Link công khai: ai có link đều dùng được (hết hạn sau 72 giờ)"
      ],
      [
       "Không dùng để xếp loại hay trêu chọc",
       "Model đoán xu hướng, không phán xét một người"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Sau bài này",
     "html": "Buổi dự án cuối khoá, nhóm con có thể thêm một app Gradio nhỏ vào poster để thầy cô và các bạn thử model của nhóm."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chia sẻ link công khai mà không ghi nguồn dữ liệu và giới hạn.",
      "Thêm ô nhập họ tên “cho đẹp”."
     ]
    },
    {
     "t": "tom_tat",
     "html": "App tốt = dự đoán đúng vùng + nói rõ giới hạn + tôn trọng người dùng."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai23-q9",
     "q": "Vì sao không nên thêm ô nhập họ tên vào app?",
     "giai": "Chỉ thu thập điều cần thiết.",
     "goi_y": "Model có dùng họ tên để tính không?",
     "a": [
      "Không cần cho dự đoán, lại lộ thông tin",
      "Gradio không có ô nhập chữ",
      "Họ tên làm model chạy chậm hơn",
      "Model sẽ học thuộc tên từng bạn"
     ],
     "h": "65e22bd7f3ec0"
    },
    {
     "k": "ds",
     "id": "bai23-q10",
     "q": "Link tạo bằng launch(share=True) chỉ mình con mở được.",
     "giai": "Ai có link đều mở được, tới khi link hết hạn.",
     "goi_y": "Xem dòng share=True trong bảng.",
     "h": "1e284668446c0a"
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
    "id": "bai23-q11",
    "q": "Nhìn hình. Ô màu vàng trong sơ đồ là gì?",
    "giai": "Ô giữa.",
    "img": {
     "src": "img/so-do-ung-dung.png"
    },
    "a": [
     "Hàm du_doan kiểm tra đầu vào",
     "Model logistic đã học",
     "Người dùng là học sinh",
     "Kết quả trả về bằng lời"
    ],
    "h": "a43e2e5b92481"
   },
   {
    "k": "mc",
    "id": "bai23-q12",
    "q": "Nhìn hình. App mẫu có mấy thanh trượt?",
    "giai": "Giờ và phút.",
    "img": {
     "src": "img/giao-dien-mau.png"
    },
    "a": [
     "2",
     "1",
     "3",
     "4"
    ],
    "h": "1ad3eb30f62864"
   },
   {
    "k": "mc",
    "id": "bai23-q13",
    "q": "Nhìn hình. Vùng tô xanh nhạt là gì?",
    "giai": "0,5 – 7 giờ.",
    "img": {
     "src": "img/ngoai-vung-du-lieu.png"
    },
    "a": [
     "Vùng giờ tự học có trong dữ liệu",
     "Vùng model đoán sai hết",
     "Vùng xác suất trên 50%",
     "Vùng bị cấm nhập số"
    ],
    "h": "a21437479efa9"
   },
   {
    "k": "mc",
    "id": "bai23-q14",
    "q": "Nhìn hình. Ở 20 giờ mỗi ngày, model trả về khoảng bao nhiêu?",
    "giai": "Rất tự tin dù vô lý.",
    "img": {
     "src": "img/ngoai-vung-du-lieu.png"
    },
    "a": [
     "Gần 100%",
     "Khoảng 50%",
     "Khoảng 10%",
     "Không trả về gì"
    ],
    "h": "35b172c4458fc"
   },
   {
    "k": "mc",
    "id": "bai23-q15",
    "q": "Thư viện nào dùng để dựng app trong bài?",
    "giai": "gr.Interface.",
    "a": [
     "Gradio",
     "Pandas",
     "Matplotlib",
     "Seaborn"
    ],
    "h": "1ba33cfd62dbe1"
   },
   {
    "k": "mc",
    "id": "bai23-q16",
    "q": "Hàm nào của model cho xác suất Đạt?",
    "giai": "Bài 13.",
    "a": [
     "predict_proba",
     "fit",
     "score",
     "train_test_split"
    ],
    "h": "f5a09475af784"
   },
   {
    "k": "mc",
    "id": "bai23-q17",
    "q": "App dự đoán giá xe cũ, dữ liệu có xe 1 – 10 năm tuổi. Thanh trượt “số năm” nên đặt thế nào?",
    "giai": "Theo vùng dữ liệu.",
    "a": [
     "Từ 1 tới 10 năm",
     "Từ 0 tới 100 năm",
     "Từ −10 tới 10 năm",
     "Không giới hạn"
    ],
    "h": "15f50cd413e92f"
   },
   {
    "k": "mc",
    "id": "bai23-q18",
    "q": "App cần chạy lại dòng nào mỗi khi mở Colab mới?",
    "giai": "Colab mới chưa có Gradio.",
    "a": [
     "Cài và nạp Gradio",
     "Xoá dữ liệu khối 10",
     "Tắt máy tính",
     "Đổi tên cột"
    ],
    "h": "d9294f6668e3c"
   },
   {
    "k": "mc",
    "id": "bai23-q19",
    "q": "Người dùng thấy “Khả năng Đạt: 82%”. Câu nào nên thêm ngay dưới?",
    "giai": "Nói rõ giới hạn.",
    "a": [
     "Dữ liệu mô phỏng, chỉ để học",
     "Chắc chắn con sẽ Đạt",
     "Hãy chia sẻ cho cả lớp",
     "Model luôn đúng 100%"
    ],
    "h": "1c0c9c53c0e5e9"
   },
   {
    "k": "ma",
    "id": "bai23-q20",
    "q": "Hai thứ nào là phần của gr.Interface? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "fn, inputs, outputs.",
    "a": [
     "fn",
     "outputs",
     "fit",
     "predict"
    ],
    "h": "125a568ca780a6"
   },
   {
    "k": "ma",
    "id": "bai23-q21",
    "q": "Hai đầu vào nào cần chặn khi kiểm thử? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Vô lý hoặc ngoài vùng.",
    "a": [
     "−3 giờ tự học",
     "20 giờ tự học mỗi ngày",
     "4 giờ tự học",
     "150 phút mạng XH"
    ],
    "h": "518533bf4492c"
   },
   {
    "k": "ma",
    "id": "bai23-q22",
    "q": "Hai việc nào là chia sẻ có trách nhiệm? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Trung thực, tôn trọng.",
    "a": [
     "Ghi rõ dữ liệu mô phỏng",
     "Nêu độ chính xác",
     "Bắt nhập họ tên",
     "Nói model luôn đúng"
    ],
    "h": "1e07fbd7fa1698"
   },
   {
    "k": "ma",
    "id": "bai23-q23",
    "q": "Hai việc nào hàm du_doan phải làm? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hàm.",
    "a": [
     "Đặt đầu vào vào bảng đúng tên cột",
     "Trả câu trả lời dễ hiểu",
     "Huấn luyện lại model",
     "Vẽ thanh trượt"
    ],
    "h": "13a83f65567ee1"
   },
   {
    "k": "sx",
    "id": "bai23-q24",
    "q": "Sắp xếp các bước làm app.",
    "giai": "Model → hàm → giao diện → chạy.",
    "a": [
     "Huấn luyện model",
     "Viết hàm du_doan",
     "Tạo ô nhập và ô kết quả",
     "Ghép bằng gr.Interface",
     "launch() rồi kiểm thử"
    ],
    "h": "5a098eef4af6f"
   },
   {
    "k": "sx",
    "id": "bai23-q25",
    "q": "Sắp xếp đường đi của một lần dự đoán.",
    "giai": "Người dùng → hàm → kết quả.",
    "a": [
     "Người dùng kéo thanh trượt",
     "Bấm Submit",
     "Hàm gọi model",
     "Ô kết quả hiện câu trả lời"
    ],
    "h": "1f554b09ce1f34"
   },
   {
    "k": "dd",
    "id": "bai23-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Ba phần.",
    "mau": "Hàm dự đoán truyền vào {0}; ô kết quả chữ truyền vào {1}.",
    "o": [
     [
      "fn",
      "inputs",
      "launch",
      "label"
     ],
     [
      "outputs",
      "inputs",
      "fn",
      "label"
     ]
    ],
    "h": "1df49fa08e39b3"
   },
   {
    "k": "dd",
    "id": "bai23-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Vùng dữ liệu.",
    "mau": "Dữ liệu có giờ tự học từ {0} tới {1} giờ.",
    "o": [
     [
      "0,5",
      "0",
      "2,0",
      "1,5"
     ],
     [
      "7",
      "24",
      "12",
      "10"
     ]
    ],
    "h": "d7d4075be56c3"
   },
   {
    "k": "dd",
    "id": "bai23-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Kiểm thử.",
    "mau": "Ngoài vùng dữ liệu, model vẫn trả lời rất {0}; người làm app phải {1} đầu vào.",
    "o": [
     [
      "chắc chắn",
      "dè dặt",
      "chậm",
      "ngắn"
     ],
     [
      "chặn",
      "phóng to",
      "xoá hết",
      "làm tròn"
     ]
    ],
    "h": "19b481fb1aa282"
   },
   {
    "k": "dd",
    "id": "bai23-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Chia sẻ.",
    "mau": "Link share=True là link {0}, hết hạn sau {1}.",
    "o": [
     [
      "công khai",
      "riêng tư",
      "nội bộ",
      "có mật khẩu"
     ],
     [
      "72 giờ",
      "1 giờ",
      "1 năm",
      "không bao giờ"
     ]
    ],
    "h": "1ee4ae771ae097"
   },
   {
    "k": "ds",
    "id": "bai23-q30",
    "q": "Model biết khi nào đầu vào nằm ngoài vùng dữ liệu của nó.",
    "giai": "Nó vẫn trả lời chắc chắn.",
    "h": "1a88bcb40f407"
   },
   {
    "k": "ds",
    "id": "bai23-q31",
    "q": "Tên cột trong hàm dự đoán phải khớp tên cột lúc huấn luyện.",
    "giai": "Khớp đúng.",
    "h": "7597c8c76b289"
   },
   {
    "k": "ds",
    "id": "bai23-q32",
    "q": "App Gradio chạy trong Colab sẽ tắt khi tắt Colab.",
    "giai": "App sống cùng phiên Colab.",
    "h": "306fc4a85c26c"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
