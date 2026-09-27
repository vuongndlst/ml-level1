window.BAI = {
 "bai": 3,
 "ma": "bai03",
 "nhan": "Bài 3",
 "tieu_de": "Python cơ bản trên Colab",
 "phan": "Module 04 · Python for Machine Learning",
 "cau_hoi": "Con có cần học thuộc Python để làm được Machine Learning không?",
 "gioi_thieu": [
  "Từ bài này con bắt đầu <b>tự viết</b> Python trên Google Colab: lưu giá trị vào biến, cho máy chọn theo điều kiện, lặp lại một việc cho cả lớp, và gói việc đó thành một hàm.",
  "Không cần học thuộc: con cần hiểu mỗi dòng làm gì, biết đọc thông báo lỗi và biết hỏi đúng cách — kể cả hỏi trợ lý <b>Gemini</b> có sẵn trong Colab. Bài 4 con sẽ dùng Python để đọc cả một bảng dữ liệu.",
  "Mọi bảng, biểu đồ và thông báo lỗi trên trang là kết quả chạy thật."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai03",
 "muc_tieu": [
  "Chạy ô code trong Colab đúng thứ tự; biết Gemini trong Colab giúp được gì.",
  "Dùng biến, kiểu dữ liệu và câu lệnh if.",
  "Dùng list, vòng lặp for và tự viết một hàm đơn giản.",
  "Lần theo từng dòng khi máy chạy một chương trình.",
  "Đọc thông báo lỗi, tự sửa lỗi; hỏi Gemini để hiểu chứ không để chép."
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
   "ten": "Colab, ô code và Gemini",
   "ten_ngan": "Colab",
   "phut": 4,
   "muc_tieu": "chạy ô code trong Colab đúng thứ tự; biết Gemini trong Colab giúp được gì.",
   "khoi_dong": "Ở Bài 1, 2 con làm thí nghiệm trên web. Viết code thật thì con làm ở đâu?",
   "khoi": [
    {
     "t": "p",
     "html": "<b>Google Colab</b> là notebook chạy Python trên trình duyệt, không cần cài gì. Notebook gồm các <b>ô chữ</b> (hướng dẫn) và <b>ô code</b>. Bấm <b>Shift + Enter</b> để chạy một ô; kết quả hiện ngay dưới ô đó."
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "chạy ô sai thứ tự",
     "huong_dan": "Bấm “Bước tiếp” để xem chuyện gì xảy ra khi chạy ô không theo thứ tự.",
     "nhan_chon": "Tình huống",
     "cot": [
      "Bước",
      "Việc",
      "Kết quả"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Ba ô code",
       "dong": [
        [
         "0",
         "Notebook có 3 ô: ô A tạo biến, ô B in biến, ô C tính trung bình",
         "Chưa chạy ô nào"
        ],
        [
         "1",
         "Chạy ô B trước: <code>print(diem)</code>",
         "Lỗi <code>NameError</code> — biến <code>diem</code> chưa có"
        ],
        [
         "2",
         "Chạy ô A: <code>diem = [7, 8, 9]</code>",
         "Biến <code>diem</code> được tạo trong bộ nhớ"
        ],
        [
         "3",
         "Chạy lại ô B",
         "In ra <code>[7, 8, 9]</code>"
        ],
        [
         "4",
         "Chạy ô C: <code>sum(diem) / len(diem)</code>",
         "Kết quả <code>8.0</code>"
        ],
        [
         "→",
         "Quy tắc",
         "Chạy từ trên xuống; mở lại Colab thì chạy lại từ đầu"
        ]
       ]
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Gemini trong Colab",
     "html": "Colab có trợ lý AI <b>Gemini</b>: nút ✨ trên thanh công cụ để hỏi, và nút <b>Explain error</b> (giải thích lỗi) hiện dưới ô bị lỗi. Trong khoá học, con dùng Gemini để <b>hiểu</b> — hỏi một dòng code làm gì, lỗi nghĩa là gì — rồi <b>tự sửa</b>. Không nhờ Gemini viết cả lời giải, và luôn chạy lại để kiểm tra vì Gemini có thể sai."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Google Colab — Welcome to Colab",
       "url": "https://colab.research.google.com/notebooks/intro.ipynb",
       "ghi_chu": "notebook giới thiệu chính thức"
      },
      {
       "ten": "Hướng dẫn Python chính thức (Python Tutorial)",
       "url": "https://docs.python.org/3/tutorial/",
       "ghi_chu": "tiếng Anh"
      }
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chạy ô ở giữa khi chưa chạy ô phía trên — biến chưa được tạo.",
      "Mở lại notebook và nghĩ biến vẫn còn — Colab xoá bộ nhớ khi phiên làm việc kết thúc."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Shift + Enter để chạy; chạy từ trên xuống; Gemini giúp hiểu, không làm thay."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q1",
     "q": "Theo phần Tự thử, chạy <code>print(diem)</code> trước khi tạo biến thì sao?",
     "giai": "Biến chưa có trong bộ nhớ.",
     "goi_y": "Xem bước 1 của phần Tự thử.",
     "a": [
      "Lỗi NameError",
      "In ra số 0",
      "In ra danh sách rỗng",
      "Colab tự tạo biến"
     ],
     "h": "4f6169b7dbbb6"
    },
    {
     "k": "mc",
     "id": "bai03-q2",
     "q": "Cách dùng Gemini nào đúng tinh thần của khoá học?",
     "giai": "Gemini để hiểu.",
     "goi_y": "Đọc hộp “Gemini trong Colab”.",
     "a": [
      "Hỏi lỗi nghĩa là gì rồi tự sửa",
      "Nhờ viết cả lời giải để nộp",
      "Chép câu trả lời, không chạy thử",
      "Hỏi đáp án câu checkpoint"
     ],
     "h": "1ba5536144a2d8"
    }
   ]
  },
  {
   "ten": "Biến, kiểu dữ liệu, điều kiện",
   "ten_ngan": "Biến và if",
   "phut": 5,
   "muc_tieu": "dùng biến, kiểu dữ liệu và câu lệnh if.",
   "khoi_dong": "Một bạn được 7,5 điểm. Con lưu con số đó vào máy tính thế nào?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Kết quả thật của type() với năm giá trị",
     "alt": "Kết quả thật của type() với năm giá trị",
     "src": "img/kieu-du-lieu.png"
    },
    {
     "t": "bang",
     "cot": [
      "Kiểu",
      "Ví dụ",
      "Dùng cho"
     ],
     "dong": [
      [
       "int (số nguyên)",
       "<code>so_ban = 240</code>",
       "Đếm"
      ],
      [
       "float (số thực)",
       "<code>gio_hoc = 3.5</code>",
       "Đo — dùng dấu chấm, không dấu phẩy"
      ],
      [
       "str (chữ)",
       "<code>ket_qua = \"Pass\"</code>",
       "Nhãn, tên — trong dấu ngoặc kép"
      ],
      [
       "bool (đúng/sai)",
       "<code>dat = gio_hoc &gt;= 3</code>",
       "Kết quả so sánh: True / False"
      ],
      [
       "list (danh sách)",
       "<code>diem = [7, 8, 9]</code>",
       "Nhiều giá trị trong một biến"
      ]
     ]
    },
    {
     "t": "p",
     "html": "Câu lệnh <b>if</b> chọn việc làm theo điều kiện. Cuối dòng <code>if</code> có <b>dấu hai chấm</b>; dòng bên trong phải <b>thụt vào 4 dấu cách</b>:"
    },
    {
     "t": "cong_thuc",
     "html": "if gio_hoc >= 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Nhiều\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Ít\")"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết số thập phân bằng dấu phẩy: <code>3,5</code> — Python hiểu là hai số.",
      "Quên dấu hai chấm sau <code>if</code> hoặc quên thụt lề."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Biến lưu giá trị; kiểu hay dùng: int, float, str, bool, list; if chọn theo điều kiện."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q3",
     "q": "<code>gio_hoc = 3.5</code> có kiểu dữ liệu gì?",
     "giai": "Số có phần thập phân.",
     "goi_y": "Xem hình kết quả type().",
     "a": [
      "float",
      "int",
      "str",
      "bool"
     ],
     "h": "8d45c0cce63e4"
    },
    {
     "k": "dd",
     "id": "bai03-q4",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "Chữ trong ngoặc kép; so sánh đúng.",
     "goi_y": "Chữ nằm trong ngoặc kép là kiểu gì?",
     "mau": "<code>\"Pass\"</code> có kiểu {0}; <code>5 &gt;= 3</code> cho kết quả {1}.",
     "o": [
      [
       "str",
       "int",
       "float",
       "bool"
      ],
      [
       "True",
       "False",
       "5",
       "3"
      ]
     ],
     "h": "1cca5bb8a6c391"
    }
   ]
  },
  {
   "ten": "List, vòng lặp, hàm",
   "ten_ngan": "List và hàm",
   "phut": 5,
   "muc_tieu": "dùng list, vòng lặp for và tự viết một hàm đơn giản.",
   "khoi_dong": "Có điểm của 30 bạn. Con muốn xếp loại từng bạn mà không viết 30 lần.",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Công cụ",
      "Ví dụ",
      "Kết quả"
     ],
     "dong": [
      [
       "list",
       "<code>diem = [7, 8, 9, 6]</code>",
       "Một biến chứa nhiều giá trị"
      ],
      [
       "len, sum",
       "<code>sum(diem) / len(diem)</code>",
       "7.5 — trung bình"
      ],
      [
       "for",
       "<code>for d in diem: print(d)</code>",
       "Lần lượt in 7, 8, 9, 6"
      ],
      [
       "hàm",
       "<code>def xep_loai(d): …</code>",
       "Gói việc lặp lại thành một tên"
      ]
     ]
    },
    {
     "t": "p",
     "html": "Hàm <code>xep_loai(d)</code> trả về “Giỏi” nếu d ≥ 8, “Đạt” nếu d ≥ 5, còn lại “Chưa đạt”. Kết hợp với <code>for</code>, con xếp loại cả lớp chỉ bằng vài dòng. Hình dưới là hàm đó chạy thật trên điểm 30 bạn lớp 10A1 (dữ liệu mô phỏng)."
    },
    {
     "t": "anh",
     "cap": "Hàm xep_loai chạy trên 30 điểm: 4 Giỏi, 16 Đạt, 10 Chưa đạt",
     "alt": "Hàm xep_loai chạy trên 30 điểm: 4 Giỏi, 16 Đạt, 10 Chưa đạt",
     "src": "img/xep-loai-ca-lop.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đếm vị trí trong list từ 1 — Python đếm từ 0: <code>diem[0]</code> là phần tử đầu.",
      "Quên <code>return</code> trong hàm — hàm không trả kết quả."
     ]
    },
    {
     "t": "tom_tat",
     "html": "list chứa nhiều giá trị; for lặp qua từng giá trị; hàm gói việc lặp lại."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q5",
     "q": "<code>diem = [7, 8, 9]</code>. <code>diem[0]</code> bằng bao nhiêu?",
     "giai": "Python đếm từ 0.",
     "goi_y": "Phần tử đầu tiên có vị trí 0.",
     "a": [
      "7",
      "8",
      "9",
      "0"
     ],
     "h": "1b91d147546b32"
    },
    {
     "k": "mc",
     "id": "bai03-q6",
     "q": "Theo hình, lớp 10A1 có bao nhiêu bạn được hàm xếp loại “Giỏi”?",
     "giai": "Đọc biểu đồ “Đếm theo loại”.",
     "goi_y": "Xem thanh màu xanh đậm.",
     "a": [
      "4",
      "16",
      "10",
      "30"
     ],
     "h": "130327d36d4b39"
    }
   ]
  },
  {
   "ten": "Máy chạy code từng dòng",
   "ten_ngan": "Từng dòng",
   "phut": 4,
   "muc_tieu": "lần theo từng dòng khi máy chạy một chương trình.",
   "khoi_dong": "Khi con bấm Shift + Enter, máy đọc cả ô cùng lúc hay từng dòng một?",
   "khoi": [
    {
     "t": "p",
     "html": "Máy chạy <b>từng dòng, từ trên xuống</b>. Gặp <code>for</code>, máy quay lại đầu vòng lặp cho mỗi giá trị; gặp lời gọi hàm, máy nhảy vào hàm, chạy tới <code>return</code> rồi quay về. Phần dưới được ghi lại từ một lần chạy thật — bấm “Chạy dòng tiếp” và xem bảng biến thay đổi."
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "chạy từng dòng",
     "huong_dan": "Dòng đang chạy được tô sáng. Theo dõi biến <code>d</code> và màn hình sau mỗi bước.",
     "code": [
      "diem = [9, 7.5, 4]",
      "def xep_loai(d):",
      "    if d >= 8:",
      "        return \"Giỏi\"",
      "    elif d >= 5:",
      "        return \"Đạt\"",
      "    return \"Chưa đạt\"",
      "for d in diem:",
      "    print(d, xep_loai(d))"
     ],
     "buoc": [
      {
       "dong": -1,
       "bien": {},
       "in": ""
      },
      {
       "dong": 0,
       "bien": {},
       "in": ""
      },
      {
       "dong": 1,
       "bien": {
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ]
       },
       "in": ""
      },
      {
       "dong": 7,
       "bien": {
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": ""
      },
      {
       "dong": 8,
       "bien": {
        "d": [
         "9",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": ""
      },
      {
       "dong": 2,
       "bien": {
        "d": [
         "9",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "9",
         "int"
        ]
       },
       "in": ""
      },
      {
       "dong": 3,
       "bien": {
        "d": [
         "9",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "9",
         "int"
        ]
       },
       "in": ""
      },
      {
       "dong": 7,
       "bien": {
        "d": [
         "9",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": "9 Giỏi\n"
      },
      {
       "dong": 8,
       "bien": {
        "d": [
         "7.5",
         "float"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": "9 Giỏi\n"
      },
      {
       "dong": 2,
       "bien": {
        "d": [
         "7.5",
         "float"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "7.5",
         "float"
        ]
       },
       "in": "9 Giỏi\n"
      },
      {
       "dong": 4,
       "bien": {
        "d": [
         "7.5",
         "float"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "7.5",
         "float"
        ]
       },
       "in": "9 Giỏi\n"
      },
      {
       "dong": 5,
       "bien": {
        "d": [
         "7.5",
         "float"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "7.5",
         "float"
        ]
       },
       "in": "9 Giỏi\n"
      },
      {
       "dong": 7,
       "bien": {
        "d": [
         "7.5",
         "float"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n"
      },
      {
       "dong": 8,
       "bien": {
        "d": [
         "4",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n"
      },
      {
       "dong": 2,
       "bien": {
        "d": [
         "4",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "4",
         "int"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n"
      },
      {
       "dong": 4,
       "bien": {
        "d": [
         "4",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "4",
         "int"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n"
      },
      {
       "dong": 6,
       "bien": {
        "d": [
         "4",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ],
        "d (trong hàm)": [
         "4",
         "int"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n"
      },
      {
       "dong": 7,
       "bien": {
        "d": [
         "4",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n4 Chưa đạt\n"
      },
      {
       "dong": -1,
       "bien": {
        "d": [
         "4",
         "int"
        ],
        "diem": [
         "[9, 7.5, 4]",
         "list"
        ],
        "xep_loai": [
         "hàm xep_loai",
         "function"
        ]
       },
       "in": "9 Giỏi\n7.5 Đạt\n4 Chưa đạt\n"
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Để ý",
     "html": "Có <b>hai</b> biến tên <code>d</code>: <code>d</code> của vòng lặp, và <code>d</code> bên trong hàm (nhận giá trị khi gọi <code>xep_loai(d)</code>). Hàm dùng bản sao riêng của nó."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ dòng <code>def</code> chạy luôn phần bên trong — máy chỉ ghi nhớ hàm, chạy khi được gọi.",
      "Nghĩ <code>return</code> xong thì hàm vẫn chạy tiếp các dòng dưới."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Máy chạy từng dòng; for lặp lại khối bên trong; gọi hàm thì nhảy vào hàm rồi quay về."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q7",
     "q": "Khi máy gặp dòng <code>def xep_loai(d):</code> lần đầu, máy làm gì?",
     "giai": "Hàm chỉ chạy khi được gọi.",
     "goi_y": "Bấm vài bước đầu và xem dòng nào được tô sáng.",
     "a": [
      "Ghi nhớ hàm, chưa chạy bên trong",
      "Chạy ngay các dòng bên trong",
      "Báo lỗi vì chưa có biến d",
      "Bỏ qua và xoá hàm đó"
     ],
     "h": "1ff3746b3c7f62"
    },
    {
     "k": "mc",
     "id": "bai03-q8",
     "q": "Theo phần Tự thử, màn hình cuối cùng in ra mấy dòng?",
     "giai": "Mỗi phần tử của diem một dòng.",
     "goi_y": "Bấm tới bước cuối, đếm số dòng ở ô Màn hình.",
     "a": [
      "3",
      "1",
      "2",
      "9"
     ],
     "h": "94ddcb0574223"
    }
   ]
  },
  {
   "ten": "Đọc lỗi và hỏi Gemini",
   "ten_ngan": "Đọc lỗi",
   "phut": 4,
   "muc_tieu": "đọc thông báo lỗi, tự sửa lỗi; hỏi Gemini để hiểu chứ không để chép.",
   "khoi_dong": "Ô code hiện một khối chữ đỏ. Con đọc dòng nào trước?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Thông báo lỗi thật do Python 3.12 in ra (cùng phiên bản với Colab)",
     "alt": "Thông báo lỗi thật do Python 3.12 in ra (cùng phiên bản với Colab)",
     "src": "img/ba-loi-thuong-gap.png"
    },
    {
     "t": "bang",
     "cot": [
      "Lỗi",
      "Nghĩa là",
      "Cách sửa"
     ],
     "dong": [
      [
       "<code>NameError</code>",
       "Biến chưa có hoặc gõ sai tên",
       "Kiểm tra chính tả, chạy ô tạo biến"
      ],
      [
       "<code>SyntaxError</code>",
       "Viết sai cú pháp — ở đây thiếu dấu hai chấm",
       "Thêm <code>:</code> cuối dòng if"
      ],
      [
       "<code>TypeError</code>",
       "Cộng chữ với số",
       "Đổi số thành chữ: <code>str(8)</code>"
      ]
     ]
    },
    {
     "t": "p",
     "html": "<b>Đọc dòng cuối</b> của thông báo trước: tên lỗi + lời giải thích ngắn. Chưa hiểu thì bấm <b>Explain error</b> để Gemini giải thích — đọc xong, <b>tự sửa</b> rồi chạy lại."
    },
    {
     "t": "bang",
     "cot": [
      "Hỏi Gemini như thế này",
      "Không nên"
     ],
     "dong": [
      [
       "“Lỗi TypeError này nghĩa là gì?”",
       "“Sửa hết code cho mình.”"
      ],
      [
       "“Dòng <code>return</code> trong hàm để làm gì?”",
       "“Viết lời giải thử thách 2.”"
      ],
      [
       "“Vì sao Python đếm từ 0?”",
       "Chép câu trả lời mà không chạy thử"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Sợ dòng chữ đỏ — đọc dòng cuối cùng, nó nói rõ lỗi gì.",
      "Sửa lung tung khi chưa đọc thông báo lỗi."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Đọc dòng cuối thông báo lỗi; chưa hiểu thì hỏi Gemini để hiểu, rồi tự sửa và chạy lại."
    }
   ],
   "checkpoint": [
    {
     "k": "ma",
     "id": "bai03-q9",
     "q": "Hai lỗi nào trong hình do người gõ code viết sai chính tả hoặc cú pháp? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Sai tên biến; thiếu dấu hai chấm.",
     "goi_y": "Xem hai ô đầu của hình.",
     "a": [
      "NameError",
      "SyntaxError",
      "ZeroDivisionError",
      "IndexError"
     ],
     "h": "1bbce820dd11f9"
    },
    {
     "k": "ds",
     "id": "bai03-q10",
     "q": "Gặp lỗi, nên đọc dòng cuối của thông báo trước khi hỏi Gemini.",
     "giai": "Dòng cuối nói tên lỗi và lý do.",
     "goi_y": "Đọc đoạn ngay dưới bảng lỗi.",
     "h": "1880fb6b656d62"
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
    "id": "bai03-q11",
    "q": "Nhìn hình. <code>diem = [7, 8, 9]</code> có kiểu gì?",
    "giai": "Danh sách.",
    "img": {
     "src": "img/kieu-du-lieu.png"
    },
    "a": [
     "list",
     "int",
     "str",
     "float"
    ],
    "h": "d1a6ecaa3f748"
   },
   {
    "k": "mc",
    "id": "bai03-q12",
    "q": "Nhìn hình. Đường nét đứt màu xanh ở mức điểm nào?",
    "giai": "Ngưỡng Giỏi.",
    "img": {
     "src": "img/xep-loai-ca-lop.png"
    },
    "a": [
     "8",
     "5",
     "10",
     "7"
    ],
    "h": "1b294524cae76b"
   },
   {
    "k": "mc",
    "id": "bai03-q13",
    "q": "Nhìn hình. Thiếu dấu hai chấm sau <code>if</code> thì Python báo lỗi gì?",
    "giai": "Sai cú pháp.",
    "img": {
     "src": "img/ba-loi-thuong-gap.png"
    },
    "a": [
     "SyntaxError",
     "NameError",
     "TypeError",
     "IndexError"
    ],
    "h": "16fdbc59436712"
   },
   {
    "k": "mc",
    "id": "bai03-q14",
    "q": "Phím tắt để chạy một ô trong Colab là gì?",
    "giai": "Chạy ô.",
    "a": [
     "Shift + Enter",
     "Ctrl + S",
     "Alt + F4",
     "Tab"
    ],
    "h": "1be1cb97129420"
   },
   {
    "k": "mc",
    "id": "bai03-q15",
    "q": "Viết số 7,5 trong Python thế nào?",
    "giai": "Dấu chấm.",
    "a": [
     "7.5",
     "7,5",
     "\"7,5\"",
     "7 5"
    ],
    "h": "b4f646adb6c6"
   },
   {
    "k": "mc",
    "id": "bai03-q16",
    "q": "<code>for d in [1, 2, 3]: print(d * 2)</code> in ra gì?",
    "giai": "Mỗi phần tử nhân 2.",
    "a": [
     "2, 4, 6",
     "1, 2, 3",
     "6",
     "123"
    ],
    "h": "10707fb98cd4fc"
   },
   {
    "k": "mc",
    "id": "bai03-q17",
    "q": "<code>print(\"Điểm: \" + 8)</code> báo lỗi gì?",
    "giai": "Cộng chữ với số.",
    "a": [
     "TypeError",
     "NameError",
     "SyntaxError",
     "IndexError"
    ],
    "h": "154e6331dffc5c"
   },
   {
    "k": "mc",
    "id": "bai03-q18",
    "q": "Muốn hàm gửi kết quả ra ngoài, dùng từ khoá nào?",
    "giai": "Trả kết quả.",
    "a": [
     "return",
     "print",
     "def",
     "for"
    ],
    "h": "165109b50636a1"
   },
   {
    "k": "mc",
    "id": "bai03-q19",
    "q": "Nút nào trong Colab nhờ Gemini giải thích một ô bị lỗi?",
    "giai": "Giải thích lỗi.",
    "a": [
     "Explain error",
     "Run all",
     "Share",
     "Save"
    ],
    "h": "194e26c271196d"
   },
   {
    "k": "ma",
    "id": "bai03-q20",
    "q": "Hai kiểu dữ liệu nào là số? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Số nguyên, số thực.",
    "a": [
     "int",
     "float",
     "str",
     "bool"
    ],
    "h": "120dafa20b256b"
   },
   {
    "k": "ma",
    "id": "bai03-q21",
    "q": "Hai điều nào đúng về câu lệnh if? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Cú pháp if.",
    "a": [
     "Cần dấu hai chấm",
     "Dòng bên trong thụt lề",
     "Không cần điều kiện",
     "Viết bằng dấu phẩy"
    ],
    "h": "1ec4ffda2b39d3"
   },
   {
    "k": "ma",
    "id": "bai03-q22",
    "q": "Hai việc nào nên làm khi gặp lỗi? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Săn lỗi.",
    "a": [
     "Đọc dòng cuối thông báo",
     "Kiểm tra chính tả tên",
     "Xoá hết notebook",
     "Nhờ Gemini viết lại cả bài"
    ],
    "h": "3973b8d70f375"
   },
   {
    "k": "ma",
    "id": "bai03-q23",
    "q": "Hai cách hỏi Gemini nào đúng tinh thần khoá học? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hỏi để hiểu.",
    "a": [
     "Hỏi lỗi này nghĩa là gì",
     "Hỏi một dòng code làm gì",
     "Nhờ viết cả lời giải",
     "Hỏi đáp án checkpoint"
    ],
    "h": "e730465271e94"
   },
   {
    "k": "sx",
    "id": "bai03-q24",
    "q": "Sắp xếp các dòng để xếp loại cả lớp.",
    "giai": "Dữ liệu → hàm → lặp → dùng hàm.",
    "a": [
     "diem = [7, 8, 4]",
     "def xep_loai(d): …",
     "for d in diem:",
     "    print(xep_loai(d))"
    ],
    "h": "17f42f765e156c"
   },
   {
    "k": "sx",
    "id": "bai03-q25",
    "q": "Sắp xếp các bước khi gặp lỗi.",
    "giai": "Đọc → hỏi → sửa → chạy lại.",
    "a": [
     "Đọc dòng cuối thông báo",
     "Chưa hiểu thì hỏi Gemini",
     "Tự sửa code",
     "Chạy lại để kiểm tra"
    ],
    "h": "fac18517c32b4"
   },
   {
    "k": "dd",
    "id": "bai03-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cú pháp.",
    "mau": "Chữ phải đặt trong {0}; số thập phân dùng dấu {1}.",
    "o": [
     [
      "dấu ngoặc kép",
      "dấu phẩy",
      "dấu chấm",
      "dấu cách"
     ],
     [
      "chấm",
      "phẩy",
      "cách",
      "gạch"
     ]
    ],
    "h": "16b7c8f326cc52"
   },
   {
    "k": "dd",
    "id": "bai03-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "List và for.",
    "mau": "Python đếm vị trí trong list từ {0}; lệnh lặp qua từng phần tử là {1}.",
    "o": [
     [
      "0",
      "1",
      "2",
      "-1"
     ],
     [
      "for",
      "if",
      "def",
      "print"
     ]
    ],
    "h": "1a054c72442b6f"
   },
   {
    "k": "dd",
    "id": "bai03-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hàm.",
    "mau": "Hàm bắt đầu bằng {0} và gửi kết quả ra bằng {1}.",
    "o": [
     [
      "def",
      "for",
      "if",
      "print"
     ],
     [
      "return",
      "print",
      "input",
      "len"
     ]
    ],
    "h": "31ecfe0f0449b"
   },
   {
    "k": "dd",
    "id": "bai03-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đếm theo loại.",
    "mau": "Lớp 10A1: {0} bạn Giỏi và {1} bạn Chưa đạt.",
    "o": [
     [
      "4",
      "16",
      "30",
      "0"
     ],
     [
      "10",
      "16",
      "0",
      "30"
     ]
    ],
    "h": "e8283912f1c61"
   },
   {
    "k": "ds",
    "id": "bai03-q30",
    "q": "Trong Python, <code>Diem</code> và <code>diem</code> là hai tên khác nhau.",
    "giai": "Phân biệt hoa thường.",
    "h": "174e9f161dd085"
   },
   {
    "k": "ds",
    "id": "bai03-q31",
    "q": "Có thể chạy các ô theo thứ tự bất kỳ mà không bị lỗi.",
    "giai": "Chạy từ trên xuống.",
    "h": "6fa12a932c390"
   },
   {
    "k": "ds",
    "id": "bai03-q32",
    "q": "Làm Machine Learning bắt buộc phải học thuộc mọi lệnh Python.",
    "giai": "Hiểu và tra cứu.",
    "h": "3a2ea31885e61"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
