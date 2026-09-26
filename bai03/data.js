window.BAI = {
 "bai": 3,
 "ma": "bai03",
 "nhan": "Bài 3",
 "tieu_de": "Python cho Machine Learning",
 "phan": "Mở đầu · Công cụ Python",
 "cau_hoi": "Con có cần học thuộc Python để làm được Machine Learning không?",
 "gioi_thieu": [
  "Hai bài đầu con chỉ đổi con số và chạy ô. Từ bài này con bắt đầu <b>tự viết</b> vài dòng Python — đủ để đọc một bảng dữ liệu, tính toán, vẽ biểu đồ và hiểu một chương trình Machine Learning.",
  "Không cần học thuộc: con cần hiểu mỗi dòng làm gì, biết đọc thông báo lỗi và biết tra cứu. Dữ liệu là bảng khối 10 (mô phỏng) — con sẽ gặp lại nó ở nhiều bài sau.",
  "Mọi bảng, biểu đồ, thông báo lỗi trên trang là kết quả chạy thật của notebook bài học."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai03",
 "muc_tieu": [
  "Chạy ô code trong Colab đúng thứ tự và đọc kết quả.",
  "Dùng biến, kiểu dữ liệu, phép toán, câu lệnh if.",
  "Dùng list, vòng lặp for và tự viết một hàm đơn giản.",
  "Đọc bảng bằng pandas: head, shape, mean, value_counts; vẽ biểu đồ đầu tiên.",
  "Đọc hiểu chương trình Machine Learning 5 dòng và sửa ba lỗi hay gặp."
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
   "ten": "Colab và ô code",
   "ten_ngan": "Colab",
   "phut": 4,
   "muc_tieu": "chạy ô code trong Colab đúng thứ tự và đọc kết quả.",
   "khoi_dong": "Con đã chạy ô ở Bài 1, 2. Nếu chạy ô ở giữa trước ô đầu thì sao?",
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
     "t": "loi_hay_gap",
     "muc": [
      "Chạy ô ở giữa khi chưa chạy ô phía trên — biến chưa được tạo.",
      "Mở lại notebook và nghĩ biến vẫn còn — Colab xoá bộ nhớ khi tắt."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Shift + Enter để chạy; chạy từ trên xuống; mở lại thì chạy lại từ đầu."
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
     "k": "ds",
     "id": "bai03-q2",
     "q": "Tắt Colab rồi mở lại, các biến đã tạo vẫn còn nguyên.",
     "giai": "Phải chạy lại từ đầu.",
     "goi_y": "Xem dòng Quy tắc.",
     "h": "26c4937929afa"
    }
   ]
  },
  {
   "ten": "Biến, kiểu dữ liệu, điều kiện",
   "ten_ngan": "Biến và if",
   "phut": 5,
   "muc_tieu": "dùng biến, kiểu dữ liệu, phép toán, câu lệnh if.",
   "khoi_dong": "Một bạn được 7,5 điểm. Con lưu con số đó vào máy tính thế nào?",
   "khoi": [
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
      ]
     ]
    },
    {
     "t": "p",
     "html": "Câu lệnh <b>if</b> chọn việc làm theo điều kiện. Dòng bên trong phải <b>thụt vào 4 dấu cách</b>:"
    },
    {
     "t": "cong_thuc",
     "html": "if gio_hoc >= 3:  print(\"Nhiều\")   else:  print(\"Ít\")"
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
     "html": "Biến lưu giá trị; bốn kiểu hay dùng: int, float, str, bool; if chọn theo điều kiện."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q3",
     "q": "<code>gio_hoc = 3.5</code> có kiểu dữ liệu gì?",
     "giai": "Số có phần thập phân.",
     "goi_y": "Xem bảng kiểu dữ liệu.",
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
     "html": "Hàm <code>xep_loai(d)</code> trả về “Giỏi” nếu d ≥ 8, “Đạt” nếu d ≥ 5, còn lại “Chưa đạt”. Kết hợp với for, con xếp loại cả lớp chỉ bằng vài dòng."
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
     "k": "sx",
     "id": "bai03-q6",
     "q": "Sắp xếp các dòng để xếp loại cả lớp.",
     "giai": "Dữ liệu → hàm → lặp → dùng hàm.",
     "goi_y": "Hàm phải được định nghĩa trước khi dùng.",
     "a": [
      "diem = [7, 8, 4]",
      "def xep_loai(d): …",
      "for d in diem:",
      "    print(xep_loai(d))"
     ],
     "h": "ce803bc5a4ada"
    }
   ]
  },
  {
   "ten": "Đọc bảng bằng pandas",
   "ten_ngan": "pandas",
   "phut": 5,
   "muc_tieu": "đọc bảng bằng pandas và vẽ biểu đồ đầu tiên.",
   "khoi_dong": "Bảng khối 10 có 240 bạn. Làm sao xem nhanh vài dòng đầu và tính trung bình?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Kết quả thật của df.head(6)",
     "alt": "Kết quả thật của df.head(6)",
     "src": "img/bang-khoi-10.png"
    },
    {
     "t": "bang",
     "cot": [
      "Lệnh",
      "Làm gì",
      "Kết quả với bảng khối 10"
     ],
     "dong": [
      [
       "<code>pd.read_csv(\"khoi10_hocky2.csv\")</code>",
       "Đọc file thành bảng",
       "Bảng df"
      ],
      [
       "<code>df.shape</code>",
       "Số dòng, số cột",
       "(240, 10)"
      ],
      [
       "<code>df[\"StudyHours\"].mean()</code>",
       "Trung bình một cột",
       "3,68 giờ"
      ],
      [
       "<code>df[\"Result\"].value_counts()</code>",
       "Đếm từng nhãn",
       "Pass 129 · Fail 111"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "plt.hist vẽ phân bố giờ tự học",
     "alt": "plt.hist vẽ phân bố giờ tự học",
     "src": "img/bieu-do-dau-tien.png"
    },
    {
     "t": "anh",
     "cap": "Đếm Đạt / Chưa đạt",
     "alt": "Đếm Đạt / Chưa đạt",
     "src": "img/dat-va-chua-dat.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Gõ sai hoa thường tên cột: <code>studyhours</code> khác <code>StudyHours</code>.",
      "Quên <code>import pandas as pd</code> ở đầu notebook."
     ]
    },
    {
     "t": "tom_tat",
     "html": "pandas: read_csv → head, shape, mean, value_counts; matplotlib: plt.hist, plt.bar."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q7",
     "q": "Lệnh nào cho biết bảng có bao nhiêu dòng, bao nhiêu cột?",
     "giai": "shape = kích thước.",
     "goi_y": "Xem bảng lệnh.",
     "a": [
      "df.shape",
      "df.head()",
      "df.mean()",
      "df.value_counts()"
     ],
     "h": "1ed25671cdb8b4"
    },
    {
     "k": "mc",
     "id": "bai03-q8",
     "q": "Theo bảng lệnh, trung bình giờ tự học của khối 10 là bao nhiêu?",
     "giai": "mean().",
     "goi_y": "Dòng df[\"StudyHours\"].mean().",
     "a": [
      "3,68 giờ",
      "7,04 giờ",
      "7,00 giờ",
      "0,50 giờ"
     ],
     "h": "17d65746985cd6"
    }
   ]
  },
  {
   "ten": "Chương trình ML 5 dòng và săn lỗi",
   "ten_ngan": "5 dòng ML",
   "phut": 4,
   "muc_tieu": "đọc hiểu chương trình Machine Learning 5 dòng và sửa ba lỗi hay gặp.",
   "khoi_dong": "Bài 2 con đã cho máy học chữ số. Bên trong, chương trình dài bao nhiêu dòng?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Chương trình chạy thật trên bảng khối 10",
     "alt": "Chương trình chạy thật trên bảng khối 10",
     "src": "img/nam-dong-ml.png"
    },
    {
     "t": "p",
     "html": "Máy học từ giờ tự học và giờ ngủ để đoán Đạt / Chưa đạt, đúng 93,1% trên 72 bạn dùng để thử. Con chưa cần hiểu hết — từ Bài 11 con sẽ học kỹ từng dòng."
    },
    {
     "t": "anh",
     "cap": "Thông báo lỗi thật khi gõ sai tên biến, tên cột, tên file",
     "alt": "Thông báo lỗi thật khi gõ sai tên biến, tên cột, tên file",
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
       "<code>KeyError</code>",
       "Không có cột tên đó",
       "Xem <code>df.columns</code>, sửa đúng tên"
      ],
      [
       "<code>FileNotFoundError</code>",
       "Không tìm thấy file",
       "Kiểm tra tên file, file đã tải lên chưa"
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
     "html": "ML 5 dòng: chọn X, y → chia → tạo model → fit → đo. Đọc dòng cuối của thông báo lỗi để sửa."
    }
   ],
   "checkpoint": [
    {
     "k": "ma",
     "id": "bai03-q9",
     "q": "Hai lỗi nào do gõ sai tên? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Sai tên biến, sai tên cột.",
     "goi_y": "Xem bảng lỗi.",
     "a": [
      "NameError",
      "KeyError",
      "SyntaxWarning",
      "ZeroDivisionError"
     ],
     "h": "1156f729025641"
    },
    {
     "k": "ds",
     "id": "bai03-q10",
     "q": "Thấy lỗi FileNotFoundError, trước hết nên kiểm tra tên file và file đã có trong Colab chưa.",
     "giai": "Không tìm thấy file.",
     "goi_y": "Xem dòng thứ ba của bảng lỗi.",
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
    "q": "Nhìn hình. Cột nào là nhãn Đạt / Chưa đạt?",
    "giai": "Pass / Fail.",
    "img": {
     "src": "img/bang-khoi-10.png"
    },
    "a": [
     "Result",
     "Score",
     "StudyHours",
     "StudentID"
    ],
    "h": "cfd9489fea48c"
   },
   {
    "k": "mc",
    "id": "bai03-q12",
    "q": "Nhìn hình. Đường nét đứt đỏ trong biểu đồ là gì?",
    "giai": "mean().",
    "img": {
     "src": "img/bieu-do-dau-tien.png"
    },
    "a": [
     "Giờ tự học trung bình",
     "Giờ tự học cao nhất",
     "Số bạn Đạt",
     "Giờ ngủ trung bình"
    ],
    "h": "f68b72b20c4c1"
   },
   {
    "k": "mc",
    "id": "bai03-q13",
    "q": "Nhìn hình. Dòng nào cho máy học?",
    "giai": "fit = học.",
    "img": {
     "src": "img/nam-dong-ml.png"
    },
    "a": [
     "may.fit(X_hoc, y_hoc)",
     "may.score(X_thu, y_thu)",
     "train_test_split(...)",
     "DecisionTreeClassifier(...)"
    ],
    "h": "1893628fbfd867"
   },
   {
    "k": "mc",
    "id": "bai03-q14",
    "q": "Nhìn hình. Gõ <code>df[\"Diem\"]</code> thì Python báo lỗi gì?",
    "giai": "Không có cột.",
    "img": {
     "src": "img/ba-loi-thuong-gap.png"
    },
    "a": [
     "KeyError",
     "NameError",
     "FileNotFoundError",
     "TypeError"
    ],
    "h": "154b4777dc5e5a"
   },
   {
    "k": "mc",
    "id": "bai03-q15",
    "q": "Phím tắt để chạy một ô trong Colab là gì?",
    "giai": "Chạy ô.",
    "a": [
     "Shift + Enter",
     "Ctrl + S",
     "Alt + F4",
     "Tab"
    ],
    "h": "1d33545e251062"
   },
   {
    "k": "mc",
    "id": "bai03-q16",
    "q": "Viết số 7,5 trong Python thế nào?",
    "giai": "Dấu chấm.",
    "a": [
     "7.5",
     "7,5",
     "\"7,5\"",
     "7 5"
    ],
    "h": "140cf256aed3da"
   },
   {
    "k": "mc",
    "id": "bai03-q17",
    "q": "<code>for d in [1, 2, 3]: print(d * 2)</code> in ra gì?",
    "giai": "Mỗi phần tử nhân 2.",
    "a": [
     "2, 4, 6",
     "1, 2, 3",
     "6",
     "123"
    ],
    "h": "198d1e0861e7c8"
   },
   {
    "k": "mc",
    "id": "bai03-q18",
    "q": "Muốn đếm có bao nhiêu bạn Pass, Fail, dùng lệnh nào?",
    "giai": "Đếm nhãn.",
    "a": [
     "value_counts()",
     "mean()",
     "head()",
     "shape"
    ],
    "h": "1b411600fcdf34"
   },
   {
    "k": "mc",
    "id": "bai03-q19",
    "q": "Muốn xem 5 dòng đầu của bảng, dùng lệnh nào?",
    "giai": "head.",
    "a": [
     "df.head()",
     "df.shape",
     "df.tail(0)",
     "df.mean()"
    ],
    "h": "1b2ad3ad9e32b0"
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
    "q": "Hai lệnh nào của pandas? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "pandas.",
    "a": [
     "read_csv",
     "value_counts",
     "print_all",
     "draw_table"
    ],
    "h": "c9f3e1ba23716"
   },
   {
    "k": "ma",
    "id": "bai03-q23",
    "q": "Hai việc nào nên làm khi gặp lỗi? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Săn lỗi.",
    "a": [
     "Đọc dòng cuối thông báo",
     "Kiểm tra chính tả tên",
     "Xoá hết notebook",
     "Tắt máy tính ngay"
    ],
    "h": "c1351df5d2a17"
   },
   {
    "k": "sx",
    "id": "bai03-q24",
    "q": "Sắp xếp chương trình ML 5 dòng.",
    "giai": "Năm dòng.",
    "a": [
     "Chọn X và y",
     "Chia dữ liệu học / thử",
     "Tạo model",
     "Cho máy học (fit)",
     "Đo trên dữ liệu thử"
    ],
    "h": "e97fb709bd4ea"
   },
   {
    "k": "sx",
    "id": "bai03-q25",
    "q": "Sắp xếp các bước xem nhanh một bảng dữ liệu.",
    "giai": "Đọc rồi xem.",
    "a": [
     "import pandas as pd",
     "df = pd.read_csv(...)",
     "df.head()",
     "df.shape"
    ],
    "h": "9eaa792aa349"
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
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "shape.",
    "mau": "Bảng khối 10 có {0} dòng và {1} cột.",
    "o": [
     [
      "240",
      "10",
      "100",
      "6"
     ],
     [
      "10",
      "240",
      "6",
      "100"
     ]
    ],
    "h": "b0f2881b95756"
   },
   {
    "k": "dd",
    "id": "bai03-q28",
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
    "h": "1015224e6eaf2e"
   },
   {
    "k": "dd",
    "id": "bai03-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "value_counts và score.",
    "mau": "Có 129 bạn Pass và {0} bạn Fail; model 5 dòng đúng {1}.",
    "o": [
     [
      "111",
      "129",
      "240",
      "0"
     ],
     [
      "93,1%",
      "100%",
      "50,0%",
      "0%"
     ]
    ],
    "h": "c20723585410e"
   },
   {
    "k": "ds",
    "id": "bai03-q30",
    "q": "Trong Python, <code>StudyHours</code> và <code>studyhours</code> là hai tên khác nhau.",
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
