window.BAI = {
 "bai": 7,
 "ma": "bai07",
 "nhan": "Bài 7",
 "tieu_de": "Làm sạch dữ liệu",
 "phan": "Module 06 · Data Preparation",
 "cau_hoi": "Vì sao dữ liệu bẩn làm hỏng cả một model tốt?",
 "gioi_thieu": [
  "Đầu giờ máy báo điểm trung bình của bảng 95 học sinh là <b>9.08</b> — trên thang 10. Máy tính không cộng chia sai. Vậy sai ở đâu?",
  "Năm chặng dưới đây giúp con nhận ra <b>năm loại lỗi</b> hay gặp trong dữ liệu, biết cách xử lý từng loại bằng Pandas, và sắp xếp các bước dọn theo đúng thứ tự. Ví dụ lấy từ bảng <b>students_ban.csv</b> — bảng mô phỏng, được cài sẵn lỗi để luyện tập, cũng là bảng con mở trên Colab.",
  "Con sẽ dùng lại trung vị, mốt (Bài 5) và tứ phân vị (Toán 10)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai07",
 "muc_tieu": [
  "Giải thích được vì sao dữ liệu bẩn làm kết quả tính toán và model sai.",
  "Phát hiện và xử lý ô trống: xoá dòng hoặc điền bằng số trung bình, trung vị, mốt.",
  "Phát hiện và xử lý dòng trùng, chữ viết nhiều kiểu.",
  "Phân biệt giá trị phi lý (lỗi nhập liệu) với giá trị bất thường có thật.",
  "Sắp xếp đúng thứ tự các bước làm sạch một bảng dữ liệu."
 ],
 "du_lieu": [
  {
   "ten": "Dữ liệu học sinh chưa làm sạch",
   "tep": "students_ban.csv",
   "url": "../du-lieu/students_ban.csv",
   "mo_ta": "Mỗi dòng là một học sinh. Hãy để ý ô trống và cách viết chưa thống nhất.",
   "so_dong": 95,
   "cot": [
    "StudentID",
    "HoTen",
    "Lop",
    "GioiTinh",
    "StudyHours",
    "SleepHours",
    "Score",
    "Result"
   ],
   "giai_thich": [
    "Mã học sinh",
    "Họ tên",
    "Lớp",
    "Giới tính",
    "Số giờ học",
    "Số giờ ngủ",
    "Điểm số",
    "Kết quả đạt/không đạt"
   ],
   "mau": [
    [
     "HS001",
     "Hoang Quan",
     "10A1",
     "Nu",
     "5.8",
     "8.8",
     "9.7",
     "Pass"
    ],
    [
     "HS002",
     "Bui Ha",
     "10A3",
     "Nu",
     "5.1",
     "7.9",
     "8.8",
     "Pass"
    ],
    [
     "HS003",
     "Tran Giang",
     "10a1",
     "Nu",
     "4.2",
     "6.2",
     "7.0",
     "Pass"
    ]
   ]
  }
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
   "ten": "Dữ liệu bẩn: rác vào, rác ra",
   "ten_ngan": "Dữ liệu bẩn",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao phải làm sạch dữ liệu trước khi tính toán hay huấn luyện model.",
   "khoi_dong": "Máy báo điểm trung bình của bảng là 9.08 trên thang 10. Con có tin con số đó không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Làm sạch dữ liệu (data cleaning)",
     "html": "Là việc <b>phát hiện và xử lý các lỗi</b> trong bảng dữ liệu — ô bị thiếu, dòng bị lặp, chữ viết không thống nhất, con số không thể có thật — để bảng phản ánh đúng thực tế trước khi tính toán hay đưa cho model học.",
     "ky_hieu": "Nguyên tắc “rác vào, rác ra” (garbage in, garbage out): dữ liệu vào sai thì kết quả ra sai, dù thuật toán tốt đến đâu."
    },
    {
     "t": "anh",
     "cap": "Làm sạch nằm ngay sau khi có dữ liệu thô — trước khi chuẩn bị feature và huấn luyện model",
     "alt": "Làm sạch nằm ngay sau khi có dữ liệu thô — trước khi chuẩn bị feature và huấn luyện model",
     "src": "img/quy-trinh-tu-du-lieu-tho-den-model.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "năm dòng đầu của bảng students_ban.csv",
     "de": "Soi từng dòng, mỗi dòng có một chỗ bất ổn:",
     "cot": [
      "Mã",
      "Lớp",
      "Giới tính",
      "Giờ tự học",
      "Điểm",
      "Chỗ bất ổn"
     ],
     "dong": [
      [
       "HS003",
       "10a1",
       "Nu",
       "4.2",
       "7.0",
       "Lớp viết chữ thường"
      ],
      [
       "HS004",
       "10A3",
       "Nam",
       "3.7",
       "6.6",
       "Thiếu họ tên"
      ],
      [
       "HS009",
       "10A1",
       "Nu",
       "<b>25.0</b>",
       "5.8",
       "Học 25 giờ mỗi ngày"
      ],
      [
       "HS010",
       "10A2",
       "<b>M</b>",
       "1.8",
       "5.2",
       "Giới tính viết kiểu khác"
      ],
      [
       "HS012",
       "10A3",
       "Nam",
       "4.2",
       "<b>55.0</b>",
       "Điểm 55 trên thang 10"
      ]
     ],
     "ket_luan": "Máy vẫn cộng cả 25 giờ và 55 điểm vào phép tính — nên điểm trung bình ra 9.08. Máy không sai; dữ liệu sai.",
     "nhan_manh": [
      2,
      4
     ]
    },
    {
     "t": "p",
     "html": "Quy tắc số một: <b>nhìn trước khi sửa</b>. Pandas có sẵn các lệnh để “soi” một bảng:"
    },
    {
     "t": "bang",
     "cot": [
      "Lệnh Pandas",
      "Cho biết"
     ],
     "dong": [
      [
       "<code>df.info()</code>",
       "Số dòng, tên cột, số ô có dữ liệu của từng cột"
      ],
      [
       "<code>df.isnull().sum()</code>",
       "Số ô trống của từng cột"
      ],
      [
       "<code>df.duplicated().sum()</code>",
       "Số dòng lặp lại y hệt một dòng khác"
      ],
      [
       "<code>df[\"cột\"].unique()</code>",
       "Các cách viết khác nhau trong một cột chữ"
      ],
      [
       "<code>df.describe()</code>",
       "Nhỏ nhất, lớn nhất, trung bình… của các cột số"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Năm dòng đầu của bảng Titanic — bộ dữ liệu luyện tập nổi tiếng của Machine Learning; NaN là ô trống",
     "alt": "Năm dòng đầu của bảng Titanic — bộ dữ liệu luyện tập nổi tiếng của Machine Learning; NaN là ô trống",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250829123024455235/Screenshot-2025-08-29-122408.webp",
     "du_phong": "img/minh-hoa-bang-du-lieu-titanic-con-nguyen-ban.png",
     "nguon": {
      "ten": "GeeksforGeeks — Data cleaning introduction",
      "url": "https://www.geeksforgeeks.org/data-analysis/data-cleaning-introduction/"
     },
     "chu_giai": [
      [
       "PassengerId, Name, Sex, Age",
       "Mã hành khách, họ tên, giới tính, tuổi"
      ],
      [
       "Survived",
       "Sống sót (1) hay không (0)"
      ],
      [
       "Pclass, Fare, Cabin",
       "Hạng vé, giá vé, số phòng"
      ],
      [
       "NaN",
       "Not a Number — ô không có dữ liệu"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Sửa ngay khi thấy một lỗi, chưa soi hết bảng — dễ bỏ sót và sửa sai thứ tự.",
      "Tin một con số chỉ vì “máy tính ra như vậy”."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Dữ liệu bẩn thì kết quả sai (rác vào, rác ra). Luôn soi bảng bằng info, isnull, duplicated, unique, describe trước khi sửa."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Kaggle Learn — Data Cleaning (khoá ngắn, có bài tập trên notebook)",
       "url": "https://www.kaggle.com/learn/data-cleaning",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "pandas — DataFrame.info, describe",
       "url": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai07-q1",
     "q": "Máy tính điểm trung bình của một bảng điểm thang 10 ra 9.08. Giải thích nào hợp lý nhất?",
     "giai": "Máy cộng chia đúng — nhưng cộng cả những điểm không thể có trên thang 10.",
     "goi_y": "Điểm trung bình trên thang 10 mà gần 9 — thử nghĩ tới các con số lạ trong bảng.",
     "a": [
      "Bảng có vài điểm phi lý như 55, 100",
      "Máy tính đã cộng chia bị sai",
      "Cả lớp đều học rất giỏi thật",
      "Trung bình luôn cao hơn thực tế"
     ],
     "h": "bc4b99f334e7b"
    },
    {
     "k": "dd",
     "id": "bai07-q2",
     "q": "Chọn lệnh đúng cho mỗi chỗ trống.",
     "giai": "isnull() đánh dấu ô trống, .sum() đếm; describe() cho min, max, trung bình…",
     "goi_y": "Xem lại bảng “soi” năm lệnh ở trên.",
     "mau": "Muốn đếm ô trống từng cột, dùng {0}; muốn xem giá trị nhỏ nhất, lớn nhất của các cột số, dùng {1}.",
     "o": [
      [
       "df.isnull().sum()",
       "df.duplicated().sum()",
       "df.unique()",
       "df.describe()"
      ],
      [
       "df.describe()",
       "df.info()",
       "df.isnull().sum()",
       "df.duplicated().sum()"
      ]
     ],
     "h": "d03ec178b913"
    },
    {
     "k": "ds",
     "id": "bai07-q3",
     "q": "Nếu thuật toán Machine Learning đủ tốt thì không cần làm sạch dữ liệu.",
     "giai": "Rác vào, rác ra: model học từ dữ liệu, nên học luôn cả lỗi.",
     "goi_y": "Model học từ đâu?",
     "h": "185ec12befd871"
    }
   ]
  },
  {
   "ten": "Ô trống — giá trị bị thiếu",
   "ten_ngan": "Ô trống",
   "phut": 5,
   "muc_tieu": "phát hiện ô trống và chọn được cách xử lý: xoá dòng hoặc điền bằng số trung bình, trung vị, mốt.",
   "khoi_dong": "Một bạn quên ghi giờ ngủ nhưng các cột khác đầy đủ. Nên bỏ cả dòng của bạn ấy, hay giữ lại?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Ô trống (giá trị bị thiếu, missing value)",
     "html": "Ô không có dữ liệu — Pandas hiển thị là <b>NaN</b>. Có hai cách xử lý: <b>xoá</b> dòng (hoặc cả cột) chứa ô trống, hoặc <b>điền</b> ô trống bằng một giá trị đại diện của cột.",
     "ky_hieu": "Đếm: <code>df.isnull().sum()</code> · Xoá dòng: <code>df.dropna()</code> · Điền: <code>df[\"cột\"].fillna(giá_trị)</code>"
    },
    {
     "t": "anh",
     "cap": "Bảng Titanic có 891 hành khách: cột Age chỉ có 714 ô có dữ liệu, cột Cabin chỉ có 204",
     "alt": "Bảng Titanic có 891 hành khách: cột Age chỉ có 714 ô có dữ liệu, cột Cabin chỉ có 204",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250829123024725201/Screenshot-2025-08-29-122359.webp",
     "du_phong": "img/minh-hoa-bang-thong-ke-so-o-khong-trong-cua-tung-cot.png",
     "nguon": {
      "ten": "GeeksforGeeks — Data cleaning introduction",
      "url": "https://www.geeksforgeeks.org/data-analysis/data-cleaning-introduction/"
     },
     "chu_giai": [
      [
       "RangeIndex: 891 entries",
       "Bảng có 891 dòng"
      ],
      [
       "Non-Null Count",
       "Số ô CÓ dữ liệu (không trống)"
      ],
      [
       "Dtype: int64, float64, object",
       "Kiểu dữ liệu: số nguyên, số thập phân, chữ"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Loại cột",
      "Điền bằng",
      "Vì sao",
      "Lệnh Pandas"
     ],
     "dong": [
      [
       "Cột số, không có giá trị lạ",
       "Số trung bình",
       "Dùng hết mọi giá trị",
       "<code>.fillna(df[\"cột\"].mean())</code>"
      ],
      [
       "Cột số, có giá trị lạ",
       "Trung vị",
       "Không bị giá trị lạ kéo lệch (Bài 5)",
       "<code>.fillna(df[\"cột\"].median())</code>"
      ],
      [
       "Cột chữ: lớp, giới tính",
       "Mốt",
       "Chữ không cộng chia được",
       "<code>.fillna(df[\"cột\"].mode()[0])</code>"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "điền một ô trống trong cột điểm",
     "de": "Điểm của 6 bạn: 5 · 6 · 6.5 · 7 · 9.5 · <b>(trống)</b>.",
     "cot": [
      "Cách điền",
      "Tính",
      "Giá trị điền"
     ],
     "dong": [
      [
       "Số trung bình",
       "(5 + 6 + 6.5 + 7 + 9.5) : 5",
       "6.8"
      ],
      [
       "Trung vị",
       "Sắp xếp 5 giá trị, lấy giá trị thứ 3",
       "<b>6.5</b>"
      ],
      [
       "Xoá dòng",
       "Bỏ bạn thứ 6",
       "Còn 5 bạn — mất cả các cột khác của bạn ấy"
      ]
     ],
     "ket_luan": "Bạn 9.5 điểm kéo số trung bình lên 6.8; trung vị 6.5 ít bị ảnh hưởng hơn.",
     "nhan_manh": []
    },
    {
     "t": "demo_tb_tv",
     "tieu_de": "vì sao nên điền bằng trung vị",
     "huong_dan": "Bảy điểm dưới đây có một điểm gõ nhầm (55). Sửa ô vàng thành 5.5 rồi thành 100. Số nào đổi nhiều nếu dùng để điền ô trống?",
     "gia_tri": [
      5.8,
      6.2,
      6.6,
      6.7,
      7.0,
      7.4,
      55
     ],
     "sua": 6
    },
    {
     "t": "anh",
     "cap": "Bảng mẫu có ô trống (NaN) ở nhiều cột",
     "alt": "Bảng mẫu có ô trống (NaN) ở nhiều cột",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251201165310561104/MV1.png",
     "du_phong": "img/minh-hoa-bang-du-lieu-co-o-trong.png",
     "nguon": {
      "ten": "GeeksforGeeks — Handling missing values machine learning",
      "url": "https://www.geeksforgeeks.org/data-analysis/handling-missing-values-machine-learning/"
     },
     "chu_giai": [
      [
       "School ID, Name, Address, City",
       "Mã trường, tên, địa chỉ, thành phố"
      ],
      [
       "Subject, Marks, Rank, Grade",
       "Môn, điểm, thứ hạng, xếp loại"
      ],
      [
       "NaN",
       "Ô trống"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Cùng bảng đó sau <code>dropna()</code>: 8 dòng chỉ còn 5",
     "alt": "Cùng bảng đó sau <code>dropna()</code>: 8 dòng chỉ còn 5",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251201165442193836/MV2.png",
     "du_phong": "img/minh-hoa-bang-sau-khi-xoa-cac-dong-bi-thieu.png",
     "nguon": {
      "ten": "GeeksforGeeks — Handling missing values machine learning",
      "url": "https://www.geeksforgeeks.org/data-analysis/handling-missing-values-machine-learning/"
     },
     "chu_giai": [
      [
       "DataFrame after removing rows with missing values",
       "Bảng sau khi xoá các dòng có ô trống"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Khi nào nên xoá?",
     "html": "Xoá dòng khi ô trống rất ít và bảng rất lớn. Xoá <b>cả cột</b> khi cột thiếu gần hết — như Cabin thiếu 687/891 ô: điền đoán ngần ấy ô còn tệ hơn bỏ cột. Còn lại, ưu tiên điền để không mất dữ liệu tốt."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Điền ô trống bằng 0 — tự bịa ra một bạn được 0 điểm, kéo số trung bình xuống.",
      "Dùng số trung bình để điền cột có giá trị lạ.",
      "Xoá mọi dòng có ô trống mà không đếm xem mất bao nhiêu dữ liệu."
     ]
    },
    {
     "t": "video",
     "yt": "AmtvgajbmMw",
     "ten": "Microsoft — Handling duplicated and missing data (Python for Beginners)",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — minh hoạ dropna, fillna, drop_duplicates",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Ô trống: đếm bằng isnull().sum(); ưu tiên điền — cột số có giá trị lạ dùng trung vị, cột chữ dùng mốt; chỉ xoá khi thiếu rất ít hoặc thiếu gần hết."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "pandas — Working with missing data (isnull, dropna, fillna)",
       "url": "https://pandas.pydata.org/docs/user_guide/missing_data.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "scikit-learn — Imputation of missing values (SimpleImputer: điền trung vị, mốt)",
       "url": "https://scikit-learn.org/stable/modules/impute.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai07-q4",
     "q": "Cột điểm: 4 · 5 · 6 · 7 · 98 (số 98 chưa kiểm tra) và một ô trống. Nên điền ô trống bằng số nào?",
     "giai": "Có giá trị lạ (98) nên dùng trung vị: dãy 4, 5, 6, 7, 98 có trung vị 6. Số trung bình bị kéo lên 24.",
     "goi_y": "Dãy có giá trị lạ không? Số đặc trưng nào không bị giá trị lạ kéo lệch?",
     "a": [
      "6 — trung vị",
      "24 — số trung bình",
      "98 — lớn nhất",
      "0 — số không"
     ],
     "h": "1ce0e3551444f"
    },
    {
     "k": "mc",
     "id": "bai07-q5",
     "q": "Cột Giới tính có vài ô trống. Nên điền bằng gì?",
     "giai": "Cột chữ không cộng chia hay sắp xếp theo độ lớn được; chỉ đếm được giá trị gặp nhiều nhất.",
     "goi_y": "Cột này là chữ hay số? Với chữ thì phép tính nào làm được?",
     "a": [
      "Mốt — giá trị gặp nhiều nhất",
      "Số trung bình của cột",
      "Trung vị của cột",
      "Chữ “Không rõ” cho mọi ô"
     ],
     "h": "a935dd22404bb"
    },
    {
     "k": "ds",
     "id": "bai07-q6",
     "q": "Lệnh df.dropna() xoá mọi dòng có ít nhất một ô trống.",
     "giai": "dropna() bỏ cả dòng dù chỉ trống một ô — nên dễ mất nhiều dữ liệu tốt.",
     "goi_y": "Nhìn lại hai bảng mẫu trước và sau khi xoá.",
     "h": "19627c950b8114"
    }
   ]
  },
  {
   "ten": "Dòng trùng và chữ viết nhiều kiểu",
   "ten_ngan": "Trùng và chữ",
   "phut": 5,
   "muc_tieu": "phát hiện, xoá dòng trùng và thống nhất cách viết của một cột chữ.",
   "khoi_dong": "Cột Lớp có “10A1”, “10a1”, “ 10A1” và “10A 1”. Con thấy mấy lớp? Máy thấy mấy lớp?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Dòng trùng (duplicate)",
     "html": "Dòng giống <b>hệt</b> một dòng khác ở <b>mọi cột</b> — thường do nhập hai lần. Dòng trùng làm một đối tượng bị đếm nhiều lần.",
     "ky_hieu": "Đếm: <code>df.duplicated().sum()</code> · Xoá: <code>df.drop_duplicates()</code>"
    },
    {
     "t": "p",
     "html": "Chú ý: <b>trùng tên chưa chắc là dòng trùng</b>. Trong bảng có hai bạn tên Hoang Quan, mã HS001 và HS010, khác lớp, khác điểm — đó là hai người, phải giữ cả hai."
    },
    {
     "t": "dinh_nghia",
     "ten": "Chữ viết nhiều kiểu (không thống nhất)",
     "html": "Cùng một giá trị nhưng được viết khác nhau: hoa/thường, thừa khoảng trắng, viết tắt. Máy so <b>từng ký tự</b> nên coi mỗi kiểu viết là một giá trị riêng.",
     "ky_hieu": "<code>.str.strip()</code> bỏ khoảng trắng hai đầu · <code>.str.upper()</code> đưa về chữ hoa · <code>.str.replace(\" \", \"\")</code> bỏ khoảng trắng ở giữa · <code>.replace({\"M\": \"NAM\"})</code> đổi một giá trị thành giá trị khác"
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "dọn cột Lớp từng bước",
     "huong_dan": "Bấm “Bước tiếp” để áp dụng lần lượt từng thao tác lên cột Lớp của bảng. Theo dõi số lớp máy đếm được.",
     "nhan_chon": "Cột",
     "cot": [
      "Bước",
      "Thao tác",
      "Các cách viết còn lại",
      "Máy đếm"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Lớp",
       "dong": [
        [
         "0",
         "Chưa dọn",
         "“ 10A1” · “ 10A2” · “10A 1” · “10A 2” · “10A 3” · “10A1” · “10A2” · “10A3” · “10a1” · “10a2” · “10a3”",
         "<b>11 lớp</b>"
        ],
        [
         "1",
         "Bỏ khoảng trắng hai đầu: .str.strip()",
         "“10A 1” · “10A 2” · “10A 3” · “10A1” · “10A2” · “10A3” · “10a1” · “10a2” · “10a3”",
         "<b>9 lớp</b>"
        ],
        [
         "2",
         "Đưa về chữ hoa: .str.upper()",
         "“10A 1” · “10A 2” · “10A 3” · “10A1” · “10A2” · “10A3”",
         "<b>6 lớp</b>"
        ],
        [
         "3",
         "Bỏ khoảng trắng ở giữa: .str.replace(\" \", \"\")",
         "“10A1” · “10A2” · “10A3”",
         "<b>3 lớp</b>"
        ]
       ]
      }
     ]
    },
    {
     "t": "anh",
     "cap": "Số dòng theo từng cách viết của cột Lớp trong bảng — 11 cách viết cho 3 lớp thật",
     "alt": "Số dòng theo từng cách viết của cột Lớp trong bảng — 11 cách viết cho 3 lớp thật",
     "src": "img/may-dem-ra-muoi-mot-lop.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "dọn cột Giới tính",
     "de": "Cột Giới tính có 7 cách viết: “F”, “M”, “NAM”, “Nam”, “Nu”, “nam”, “nu”.",
     "cot": [
      "Bước",
      "Lệnh",
      "Kết quả"
     ],
     "dong": [
      [
       "1",
       "<code>.str.strip().str.upper()</code>",
       "“F”, “M”, “NAM”, “NU”"
      ],
      [
       "2",
       "<code>.replace({\"M\": \"NAM\", \"F\": \"NU\"})</code>",
       "<b>“NAM”, “NU”</b>"
      ]
     ],
     "ket_luan": "Từ 7 cách viết còn đúng 2 giá trị. Bước 2 cần con người quyết định M là Nam, F là Nữ — máy không tự biết.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết <code>df[\"Lop\"].str.upper()</code> mà quên gán lại <code>df[\"Lop\"] = …</code> — bảng không đổi gì.",
      "Coi hai bạn trùng tên là dòng trùng rồi xoá mất một bạn.",
      "Đưa về chữ hoa nhưng quên bỏ khoảng trắng ở giữa: “10A 1” vẫn khác “10A1”."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Dòng trùng: drop_duplicates(). Chữ nhiều kiểu: strip → upper → replace, rồi đếm lại bằng unique() để kiểm tra."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "pandas — DataFrame.drop_duplicates",
       "url": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "pandas — Working with text data (str.strip, str.upper, str.replace)",
       "url": "https://pandas.pydata.org/docs/user_guide/text.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai07-q7",
     "q": "Cột Lớp có các giá trị “10A2”, “10a2”, “ 10A2”, “10A 2”. Sau khi dùng .str.strip() và .str.upper(), còn mấy cách viết?",
     "giai": "Sau strip và upper còn “10A2” và “10A 2” — khoảng trắng ở giữa chưa bỏ.",
     "goi_y": "strip chỉ bỏ khoảng trắng ở hai ĐẦU. Khoảng trắng ở giữa thì sao?",
     "a": [
      "2 cách viết",
      "1 cách viết",
      "3 cách viết",
      "4 cách viết"
     ],
     "h": "21ed7b9e625cc"
    },
    {
     "k": "sx",
     "id": "bai07-q8",
     "q": "Sắp xếp các thao tác dọn cột Lớp theo thứ tự như phần Tự thử.",
     "giai": "Dọn xong luôn đếm lại để kiểm tra.",
     "goi_y": "Bước cuối cùng không sửa gì — nó dùng để kiểm tra.",
     "a": [
      "Bỏ khoảng trắng hai đầu bằng .str.strip()",
      "Đưa về chữ hoa bằng .str.upper()",
      "Bỏ khoảng trắng ở giữa bằng .str.replace()",
      "Đếm lại số cách viết bằng .unique()"
     ],
     "h": "12cc097938f0ea"
    },
    {
     "k": "ds",
     "id": "bai07-q9",
     "q": "Hai dòng cùng họ tên nhưng khác mã học sinh là dòng trùng, cần xoá một dòng.",
     "giai": "Dòng trùng phải giống hệt ở MỌI cột. Khác mã học sinh là hai người khác nhau.",
     "goi_y": "Dòng trùng phải giống nhau ở bao nhiêu cột?",
     "h": "c1aa603344fc1"
    }
   ]
  },
  {
   "ten": "Giá trị phi lý và giá trị bất thường",
   "ten_ngan": "Phi lý, bất thường",
   "phut": 5,
   "muc_tieu": "phân biệt giá trị phi lý (lỗi nhập liệu) với giá trị bất thường có thật, và xử lý đúng từng loại.",
   "khoi_dong": "Một bạn học 25 giờ mỗi ngày. Một bạn khác học 7 giờ và được 9.8 điểm. Hai trường hợp này có giống nhau không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Giá trị phi lý",
     "html": "Giá trị <b>không thể xảy ra</b> với đối tượng được đo: điểm 55 trên thang 10, học 25 giờ mỗi ngày, số giờ âm. Đây là <b>lỗi nhập liệu</b>.",
     "ky_hieu": "Xử lý: đặt khoảng hợp lý (điểm 0 – 10, giờ học 0 – 16), đổi giá trị ngoài khoảng thành ô trống (NaN), rồi xử lý như ô trống."
    },
    {
     "t": "anh",
     "cap": "Giờ học × điểm trong bảng: chấm đỏ là 7 giá trị phi lý",
     "alt": "Giờ học × điểm trong bảng: chấm đỏ là 7 giá trị phi lý",
     "src": "img/diem-phi-ly-trong-bang.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Vì sao đổi thành ô trống mà không tự sửa?",
     "html": "Điểm 55 nhiều khả năng là 5.5 gõ thừa số 0 — nhưng đó chỉ là <b>đoán</b>. Đổi thành ô trống rồi điền bằng trung vị là cách thận trọng. Chỉ sửa trực tiếp khi <b>chắc chắn</b> nguyên nhân, ví dụ biết chắc cột ghi nhầm đơn vị."
    },
    {
     "t": "dinh_nghia",
     "ten": "Giá trị bất thường (Toán 10)",
     "html": "Giá trị quá nhỏ hoặc quá lớn so với phần lớn dữ liệu. Toán 10 dùng tứ phân vị: với khoảng tứ phân vị Δ<sub>Q</sub> = Q<sub>3</sub> − Q<sub>1</sub>, giá trị x là bất thường nếu",
     "ky_hieu": "x &gt; Q<sub>3</sub> + 1.5·Δ<sub>Q</sub> &nbsp;hoặc&nbsp; x &lt; Q<sub>1</sub> − 1.5·Δ<sub>Q</sub>"
    },
    {
     "t": "vi_du",
     "tieu_de": "tìm giá trị bất thường trong 11 điểm (số liệu minh hoạ)",
     "de": "Dãy đã sắp xếp: 4.5 · 5.8 · 6 · 6.2 · 6.6 · 6.7 · 7 · 7.4 · 8.1 · 8.8 · 55.",
     "cot": [
      "Bước",
      "Tính",
      "Kết quả"
     ],
     "dong": [
      [
       "1",
       "Trung vị Q<sub>2</sub> (giá trị thứ 6)",
       "6.7"
      ],
      [
       "2",
       "Q<sub>1</sub> = trung vị 5 giá trị đầu; Q<sub>3</sub> = trung vị 5 giá trị cuối",
       "Q<sub>1</sub> = 6, Q<sub>3</sub> = 8.1"
      ],
      [
       "3",
       "Δ<sub>Q</sub> = Q<sub>3</sub> − Q<sub>1</sub>",
       "2.1"
      ],
      [
       "4",
       "Ngưỡng trên Q<sub>3</sub> + 1.5·Δ<sub>Q</sub> · ngưỡng dưới Q<sub>1</sub> − 1.5·Δ<sub>Q</sub>",
       "11.25 · 2.85"
      ],
      [
       "5",
       "Giá trị nằm ngoài hai ngưỡng",
       "<b>55</b> — bất thường"
      ]
     ],
     "ket_luan": "Quy tắc chỉ ra 55 là bất thường. Con người mới quyết định: thang điểm 10 nên 55 là <b>phi lý</b> → đổi thành ô trống.",
     "nhan_manh": [
      4
     ]
    },
    {
     "t": "anh",
     "cap": "Biểu đồ hộp của nhiều cột trong bảng rượu vang: các chấm tròn ngoài râu là giá trị bất thường",
     "alt": "Biểu đồ hộp của nhiều cột trong bảng rượu vang: các chấm tròn ngoài râu là giá trị bất thường",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250912115313366349/boxplt.webp",
     "du_phong": "img/minh-hoa-bieu-do-hop-phat-hien-gia-tri-ngoai-lai.png",
     "nguon": {
      "ten": "GeeksforGeeks — Machine learning outlier",
      "url": "https://www.geeksforgeeks.org/machine-learning/machine-learning-outlier/"
     },
     "chu_giai": [
      [
       "Boxplots of Wine Features",
       "Biểu đồ hộp các đặc điểm của rượu vang"
      ],
      [
       "fixed acidity, citric acid, pH…",
       "Các chỉ số hoá học của rượu"
      ],
      [
       "o (chấm tròn)",
       "Giá trị nằm ngoài râu — giá trị bất thường"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Tình huống",
      "Có thể xảy ra?",
      "Xử lý"
     ],
     "dong": [
      [
       "Điểm 55 trên thang 10",
       "Không — phi lý",
       "Đổi thành ô trống"
      ],
      [
       "Học 25 giờ mỗi ngày",
       "Không — phi lý",
       "Đổi thành ô trống"
      ],
      [
       "Học 7 giờ, được 9.8 điểm",
       "Có — hiếm nhưng thật",
       "<b>Giữ lại</b>"
      ],
      [
       "Điểm 0 trong một bài kiểm tra",
       "Có — ví dụ bỏ thi",
       "Giữ lại, ghi chú kiểm tra"
      ]
     ]
    },
    {
     "t": "video",
     "yt": "b2C9I8HuCe4",
     "ten": "Khan Academy — Box and whisker plot",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — cách vẽ và đọc biểu đồ hộp",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Thấy giá trị bất thường là xoá ngay — xoá mất những trường hợp thật và thú vị nhất.",
      "Tự sửa 55 thành 5.5 khi chưa chắc chắn.",
      "Chỉ dựa vào quy tắc biểu đồ hộp: một số âm như −1.5 giờ có thể nằm trong ngưỡng mà vẫn phi lý."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Phi lý (không thể xảy ra) → đổi thành ô trống. Bất thường nhưng có thể xảy ra → giữ. Quy tắc tứ phân vị chỉ ra chỗ lạ; con người quyết định."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Thống kê: tứ phân vị, biểu đồ hộp, giá trị bất thường",
       "url": null,
       "ghi_chu": "SGK — cùng quy tắc 1.5·ΔQ"
      },
      {
       "ten": "Khan Academy — Identifying outliers",
       "url": "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/box-whisker-plots/a/identifying-outliers-iqr-rule",
       "ghi_chu": "tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai07-q10",
     "q": "Cột Tuổi của học sinh khối 10 có một ô ghi 150. Nên xử lý thế nào?",
     "giai": "Tuổi 150 không thể xảy ra — phi lý. Có thể là 15 gõ thừa số 0 nhưng chỉ là đoán, nên đổi thành ô trống.",
     "goi_y": "Giá trị này có thể xảy ra không? Con có chắc chắn nguyên nhân không?",
     "a": [
      "Đổi thành ô trống rồi điền",
      "Giữ nguyên vì là giá trị thật",
      "Xoá luôn cả cột Tuổi",
      "Sửa ngay thành tuổi 15"
     ],
     "h": "1e1acd864aa9c3"
    },
    {
     "k": "mc",
     "id": "bai07-q11",
     "q": "Dãy có Q<sub>1</sub> = 5 và Q<sub>3</sub> = 7. Theo quy tắc Toán 10, giá trị nào dưới đây là bất thường?",
     "giai": "Δ<sub>Q</sub> = 2; ngưỡng trên 7 + 3 = 10, ngưỡng dưới 5 − 3 = 2. Chỉ 10.5 vượt ngưỡng.",
     "goi_y": "Tính Δ<sub>Q</sub>, rồi hai ngưỡng Q<sub>3</sub> + 1.5·Δ<sub>Q</sub> và Q<sub>1</sub> − 1.5·Δ<sub>Q</sub>.",
     "a": [
      "10.5",
      "9.5",
      "3.0",
      "7.0"
     ],
     "h": "8a42f0c74677a"
    },
    {
     "k": "ds",
     "id": "bai07-q12",
     "q": "Mọi giá trị bất thường đều là lỗi nhập liệu và cần xoá.",
     "giai": "Có giá trị bất thường có thật (hiếm nhưng có thể) — phải giữ.",
     "goi_y": "Nhớ ví dụ học 7 giờ được 9.8 điểm.",
     "h": "14a91c9e50da70"
    }
   ]
  },
  {
   "ten": "Quy trình làm sạch một bảng dữ liệu",
   "ten_ngan": "Quy trình",
   "phut": 3,
   "muc_tieu": "sắp xếp đúng thứ tự các bước làm sạch và giải thích vì sao thứ tự đó quan trọng.",
   "khoi_dong": "Nếu điền ô trống bằng trung vị TRƯỚC khi sửa điểm 55 và 100, con số dùng để điền có bị ảnh hưởng không?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Bước",
      "Việc làm",
      "Vì sao đứng ở vị trí này"
     ],
     "dong": [
      [
       "1",
       "Soi bảng: info, isnull, duplicated, unique, describe",
       "Biết có lỗi gì trước"
      ],
      [
       "2",
       "Xoá dòng trùng",
       "Để không đếm một bạn nhiều lần khi tính trung vị"
      ],
      [
       "3",
       "Thống nhất chữ",
       "Để đếm lớp, tính theo lớp cho đúng"
      ],
      [
       "4",
       "Đổi giá trị phi lý thành ô trống",
       "Để số phi lý không lọt vào số dùng để điền"
      ],
      [
       "5",
       "Điền ô trống (trung vị, mốt)",
       "Lúc này bảng đã sạch lỗi khác"
      ],
      [
       "6",
       "Soi lại, lưu bảng sạch",
       "Kiểm tra còn ô trống không; bảng dùng cho Bài 8"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Số dòng còn lại qua từng bước dọn bảng students_ban.csv",
     "alt": "Số dòng còn lại qua từng bước dọn bảng students_ban.csv",
     "src": "img/xoa-dong-hay-dien-o-trong.png"
    },
    {
     "t": "cong_tac",
     "tieu_de": "bật từng bước dọn bảng",
     "huong_dan": "Bảng students_ban.csv có 95 dòng. Bật / tắt từng bước (máy luôn làm theo thứ tự 1 → 5) và xem bốn con số đổi thế nào. <b>Thử:</b> chỉ bật bước 4 — điểm trung bình có về gần 6.77 không? Vì sao?",
     "cong_tac": [
      {
       "ten": "Xoá dòng trùng",
       "ma": "df = df.drop_duplicates()"
      },
      {
       "ten": "Thống nhất chữ ở cột Lớp, Giới tính",
       "ma": "df[\"Lop\"] = df[\"Lop\"].str.strip().str.upper().str.replace(\" \", \"\")"
      },
      {
       "ten": "Đổi điểm, giờ học phi lý thành ô trống",
       "ma": "df.loc[(df[\"Score\"] < 0) | (df[\"Score\"] > 10), \"Score\"] = np.nan"
      },
      {
       "ten": "Điền ô trống bằng trung vị (cột số), mốt (cột chữ)",
       "ma": "df[\"Score\"] = df[\"Score\"].fillna(df[\"Score\"].median())"
      },
      {
       "ten": "Xoá mọi dòng còn ô trống",
       "ma": "df = df.dropna()"
      }
     ],
     "chi_so": [
      {
       "khoa": "dong",
       "ten": "Số dòng"
      },
      {
       "khoa": "lop",
       "ten": "Số cách viết cột Lớp",
       "nguong": 3
      },
      {
       "khoa": "trong",
       "ten": "Số ô trống",
       "nguong": 0
      },
      {
       "khoa": "tb",
       "ten": "Điểm trung bình",
       "so_le": 2,
       "nguong": 7.5
      }
     ],
     "bang": {
      "00000": {
       "dong": 95,
       "lop": 11,
       "trong": 12,
       "tb": 9.08,
       "max": 100.0
      },
      "00001": {
       "dong": 83,
       "lop": 11,
       "trong": 0,
       "tb": 9.33,
       "max": 100.0
      },
      "00010": {
       "dong": 95,
       "lop": 11,
       "trong": 0,
       "tb": 9.0,
       "max": 100.0
      },
      "00011": {
       "dong": 95,
       "lop": 11,
       "trong": 0,
       "tb": 9.0,
       "max": 100.0
      },
      "00100": {
       "dong": 95,
       "lop": 11,
       "trong": 19,
       "tb": 6.76,
       "max": 10.0
      },
      "00101": {
       "dong": 76,
       "lop": 11,
       "trong": 0,
       "tb": 6.78,
       "max": 10.0
      },
      "00110": {
       "dong": 95,
       "lop": 11,
       "trong": 0,
       "tb": 6.75,
       "max": 10.0
      },
      "00111": {
       "dong": 95,
       "lop": 11,
       "trong": 0,
       "tb": 6.75,
       "max": 10.0
      },
      "01000": {
       "dong": 95,
       "lop": 3,
       "trong": 12,
       "tb": 9.08,
       "max": 100.0
      },
      "01001": {
       "dong": 83,
       "lop": 3,
       "trong": 0,
       "tb": 9.33,
       "max": 100.0
      },
      "01010": {
       "dong": 95,
       "lop": 3,
       "trong": 0,
       "tb": 9.0,
       "max": 100.0
      },
      "01011": {
       "dong": 95,
       "lop": 3,
       "trong": 0,
       "tb": 9.0,
       "max": 100.0
      },
      "01100": {
       "dong": 95,
       "lop": 3,
       "trong": 19,
       "tb": 6.76,
       "max": 10.0
      },
      "01101": {
       "dong": 76,
       "lop": 3,
       "trong": 0,
       "tb": 6.78,
       "max": 10.0
      },
      "01110": {
       "dong": 95,
       "lop": 3,
       "trong": 0,
       "tb": 6.75,
       "max": 10.0
      },
      "01111": {
       "dong": 95,
       "lop": 3,
       "trong": 0,
       "tb": 6.75,
       "max": 10.0
      },
      "10000": {
       "dong": 90,
       "lop": 11,
       "trong": 12,
       "tb": 9.23,
       "max": 100.0
      },
      "10001": {
       "dong": 78,
       "lop": 11,
       "trong": 0,
       "tb": 9.51,
       "max": 100.0
      },
      "10010": {
       "dong": 90,
       "lop": 11,
       "trong": 0,
       "tb": 9.14,
       "max": 100.0
      },
      "10011": {
       "dong": 90,
       "lop": 11,
       "trong": 0,
       "tb": 9.14,
       "max": 100.0
      },
      "10100": {
       "dong": 90,
       "lop": 11,
       "trong": 19,
       "tb": 6.78,
       "max": 10.0
      },
      "10101": {
       "dong": 71,
       "lop": 11,
       "trong": 0,
       "tb": 6.8,
       "max": 10.0
      },
      "10110": {
       "dong": 90,
       "lop": 11,
       "trong": 0,
       "tb": 6.77,
       "max": 10.0
      },
      "10111": {
       "dong": 90,
       "lop": 11,
       "trong": 0,
       "tb": 6.77,
       "max": 10.0
      },
      "11000": {
       "dong": 90,
       "lop": 3,
       "trong": 12,
       "tb": 9.23,
       "max": 100.0
      },
      "11001": {
       "dong": 78,
       "lop": 3,
       "trong": 0,
       "tb": 9.51,
       "max": 100.0
      },
      "11010": {
       "dong": 90,
       "lop": 3,
       "trong": 0,
       "tb": 9.14,
       "max": 100.0
      },
      "11011": {
       "dong": 90,
       "lop": 3,
       "trong": 0,
       "tb": 9.14,
       "max": 100.0
      },
      "11100": {
       "dong": 90,
       "lop": 3,
       "trong": 19,
       "tb": 6.78,
       "max": 10.0
      },
      "11101": {
       "dong": 71,
       "lop": 3,
       "trong": 0,
       "tb": 6.8,
       "max": 10.0
      },
      "11110": {
       "dong": 90,
       "lop": 3,
       "trong": 0,
       "tb": 6.77,
       "max": 10.0
      },
      "11111": {
       "dong": 90,
       "lop": 3,
       "trong": 0,
       "tb": 6.77,
       "max": 10.0
      }
     },
     "dau": "df = pd.read_csv(\"students_ban.csv\")",
     "nhan_xet": [
      {
       "khi": "11110",
       "html": "Đúng quy trình: giữ đủ 90 bạn, không còn ô trống, điểm trung bình 6.77."
      },
      {
       "khi": "11101",
       "html": "Sạch nhưng chỉ còn 71 dòng — mất 19 bạn vì xoá dòng thay vì điền."
      },
      {
       "khi": "??01?",
       "html": "Điền ô trống khi điểm 55, 100 vẫn còn trong bảng — con số dùng để điền đã bị lỗi lọt vào, điểm trung bình vẫn sai."
      },
      {
       "khi": "?0???",
       "html": "Cột Lớp còn nhiều cách viết — máy vẫn tưởng khối có hơn 3 lớp."
      }
     ],
     "ghi": "Số đỏ là dấu hiệu bảng còn bẩn. Mọi con số tính sẵn bằng pandas trên chính file students_ban.csv (32 tổ hợp bật / tắt). Dòng lệnh bên dưới rút gọn — trong notebook mỗi bước có thêm cột khác."
    },
    {
     "t": "p",
     "html": "Với bảng students_ban.csv: bảng bẩn 95 dòng; xoá 5 dòng trùng còn 90. Nếu sau đó xoá mọi dòng có ô trống thì chỉ còn 71 — mất 19 bạn. Điền ô trống thì giữ đủ 90."
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nối với Machine Learning",
     "html": "Người làm Machine Learning dành phần lớn thời gian cho dữ liệu chứ không phải cho model. Bảng sạch hôm nay là đầu vào của Bài 8 — chuẩn bị feature."
    },
    {
     "t": "bang",
     "cot": [
      "Hôm nay con học",
      "Sẽ dùng lại ở"
     ],
     "dong": [
      [
       "Soi bảng, làm sạch",
       "Mọi buổi thực hành nhóm (bước “Làm sạch”)"
      ],
      [
       "Bảng students đã dọn",
       "Bài 8 — chuẩn bị feature"
      ],
      [
       "Biểu đồ hộp, giá trị bất thường",
       "Bài 9 — đọc biểu đồ"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Điền ô trống trước khi sửa giá trị phi lý — số 55, 100 lọt vào trung vị dùng để điền.",
      "Quên soi lại sau khi dọn: vẫn còn ô trống hoặc một cách viết lạ."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Soi → xoá trùng → thống nhất chữ → phi lý thành ô trống → điền → soi lại và lưu."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Kaggle Learn — Data Cleaning",
       "url": "https://www.kaggle.com/learn/data-cleaning",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Data Preprocessing in Machine Learning",
       "url": "https://www.geeksforgeeks.org/data-analysis/data-preprocessing-machine-learning-python/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai07-q13",
     "q": "Sắp xếp các bước làm sạch bảng theo đúng thứ tự.",
     "giai": "Soi → xoá trùng → phi lý thành ô trống → điền.",
     "goi_y": "Bước điền cần một con số “sạch” — những lỗi nào phải xử lý trước nó?",
     "a": [
      "Soi bảng để biết có những lỗi gì",
      "Xoá các dòng trùng lặp",
      "Đổi giá trị phi lý thành ô trống",
      "Điền ô trống bằng trung vị, mốt"
     ],
     "h": "1c1d28a5010c3"
    },
    {
     "k": "mc",
     "id": "bai07-q14",
     "q": "Đã xoá trùng, sửa phi lý, điền ô trống. Soi lại thấy cột Lớp còn 1 ô trống. Nên làm gì?",
     "giai": "Bước soi lại tìm ra chỗ còn sót. Cột chữ điền bằng mốt.",
     "goi_y": "Cột Lớp là chữ hay số? Bảng ở chặng 2 nói điền cột chữ bằng gì?",
     "a": [
      "Điền ô đó bằng mốt của cột Lớp",
      "Điền bằng trung vị của cột Lớp",
      "Xoá luôn toàn bộ cột Lớp",
      "Để nguyên vì chỉ có một ô"
     ],
     "h": "16668cecd733e3"
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
    "id": "bai07-q15",
    "q": "Lệnh df.duplicated().sum() trả về 5. Điều đó nghĩa là gì?",
    "giai": "duplicated() đánh dấu các dòng lặp lại dòng đứng trước nó; .sum() đếm số dòng đó.",
    "a": [
     "Có 5 dòng lặp lại một dòng khác",
     "Có 5 ô trống trong cả bảng",
     "Có 5 cột bị trùng tên nhau",
     "Bảng chỉ còn lại 5 dòng"
    ],
    "h": "a3317459da863"
   },
   {
    "k": "mc",
    "id": "bai07-q16",
    "q": "Máy đếm cột Lớp ra 6 giá trị: “10A1”, “10a1”, “10A2”, “10a2”, “10A3”, “10a3”. Chỉ cần thêm lệnh nào là đủ?",
    "giai": "Các cách viết chỉ khác hoa/thường, không có khoảng trắng — upper là đủ.",
    "a": [
     ".str.upper()",
     ".str.strip()",
     ".dropna()",
     ".drop_duplicates()"
    ],
    "h": "1405ba38343e6b"
   },
   {
    "k": "mc",
    "id": "bai07-q17",
    "q": "Cột Giờ ngủ có một ô ghi −7. Xử lý thế nào?",
    "giai": "Giờ ngủ không thể âm — phi lý. Có thể là 7 gõ thừa dấu trừ, nhưng chỉ là đoán.",
    "a": [
     "Đổi thành ô trống rồi điền",
     "Đổi thành 7 cho thành số dương",
     "Giữ nguyên vì là số đã nhập",
     "Xoá luôn cả cột Giờ ngủ"
    ],
    "h": "943fd6b70743e"
   },
   {
    "k": "mc",
    "id": "bai07-q18",
    "q": "Nhìn hình. Cách nào giữ được nhiều học sinh hơn?",
    "giai": "Điền giữ đủ 90 bạn; xoá dòng chỉ còn 71.",
    "img": {
     "src": "img/xoa-dong-hay-dien-o-trong.png"
    },
    "a": [
     "Điền ô trống bằng trung vị",
     "Xoá mọi dòng có ô trống",
     "Hai cách giữ như nhau",
     "Xoá dòng trùng thêm lần nữa"
    ],
    "h": "133901edbc58d2"
   },
   {
    "k": "mc",
    "id": "bai07-q19",
    "q": "Nhìn hình. Vì sao máy đếm ra 11 lớp?",
    "giai": "Các thanh cùng màu là cùng một lớp thật, bị tách ra vì cách viết.",
    "img": {
     "src": "img/may-dem-ra-muoi-mot-lop.png"
    },
    "a": [
     "Máy so từng ký tự, viết khác là lớp khác",
     "Trường thật sự có 11 lớp khối 10",
     "Vài bạn bị nhập trùng hai lần vào bảng",
     "Cột lớp có vài ô bị bỏ trống"
    ],
    "h": "106e4543f111c3"
   },
   {
    "k": "mc",
    "id": "bai07-q20",
    "q": "Nhìn hình. Có bao nhiêu chấm đỏ — giá trị phi lý?",
    "giai": "4 điểm phi lý và 3 giờ học phi lý.",
    "img": {
     "src": "img/diem-phi-ly-trong-bang.png"
    },
    "a": [
     "7",
     "5",
     "10",
     "4"
    ],
    "h": "1ee200379a69c9"
   },
   {
    "k": "mc",
    "id": "bai07-q21",
    "q": "Nhìn hình. Cột nào thiếu dữ liệu nhiều nhất?",
    "giai": "Cabin chỉ có 204/891 ô có dữ liệu.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250829123024725201/Screenshot-2025-08-29-122359.webp",
     "du_phong": "img/minh-hoa-bang-thong-ke-so-o-khong-trong-cua-tung-cot.png",
     "nguon": {
      "ten": "GeeksforGeeks — Data cleaning introduction",
      "url": "https://www.geeksforgeeks.org/data-analysis/data-cleaning-introduction/"
     }
    },
    "a": [
     "Cabin",
     "Age",
     "Embarked",
     "Name"
    ],
    "h": "1fbef38ea1725a"
   },
   {
    "k": "mc",
    "id": "bai07-q22",
    "q": "Cột Cabin thiếu 687 trên 891 ô. Cách xử lý nào hợp lý nhất?",
    "giai": "Thiếu gần hết thì điền là đoán gần như toàn bộ; xoá dòng thì mất 3/4 bảng.",
    "a": [
     "Bỏ cả cột Cabin",
     "Điền 687 ô bằng mốt",
     "Xoá 687 dòng có ô trống",
     "Điền 687 ô bằng số 0"
    ],
    "h": "1966c75cacdfd7"
   },
   {
    "k": "mc",
    "id": "bai07-q23",
    "q": "Dãy 4 · 5 · 6 · 7 · 100 có thêm một ô trống. Điền bằng số trung bình thì được bao nhiêu?",
    "giai": "(4 + 5 + 6 + 7 + 100) : 5 = 24.4 — bị 100 kéo lên; trung vị là 6.",
    "a": [
     "24.4",
     "6",
     "100",
     "0"
    ],
    "h": "be05d0fc70f18"
   },
   {
    "k": "mc",
    "id": "bai07-q24",
    "q": "Q<sub>1</sub> = 6, Q<sub>3</sub> = 8. Ngưỡng trên của giá trị bất thường là bao nhiêu?",
    "giai": "Δ<sub>Q</sub> = 2; Q<sub>3</sub> + 1.5 × 2 = 8 + 3 = 11.",
    "a": [
     "11",
     "9",
     "10",
     "14"
    ],
    "h": "8aa6602ea9228"
   },
   {
    "k": "mc",
    "id": "bai07-q25",
    "q": "Máy tính điểm trung bình trên bảng bẩn và trên bảng đã dọn. Vì sao hai kết quả khác nhau?",
    "giai": "Máy tính đúng cả hai lần; chỉ có dữ liệu là khác — rác vào, rác ra.",
    "a": [
     "Dữ liệu đầu vào khác nhau",
     "Máy tính cộng sai lần đầu",
     "Lần hai máy làm tròn số",
     "Bảng sạch bị xoá bạn giỏi"
    ],
    "h": "b693ba3b677ab"
   },
   {
    "k": "ma",
    "id": "bai07-q26",
    "q": "Những lỗi nào là lỗi dữ liệu hay gặp? <b>(Chọn 3 đáp án đúng.)</b>",
    "giai": "Năm loại: ô trống, dòng trùng, chữ nhiều kiểu, giá trị phi lý (và nhãn lệch — Bài 8).",
    "a": [
     "Ô trống",
     "Dòng trùng",
     "Chữ viết nhiều kiểu",
     "Cột có tên tiếng Anh",
     "Bảng có hơn 50 dòng"
    ],
    "h": "dcacfe52430b2"
   },
   {
    "k": "ma",
    "id": "bai07-q27",
    "q": "Những lệnh Pandas nào dùng để SOI bảng, chưa sửa gì? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "isnull().sum() và describe() chỉ cho thông tin; dropna, drop_duplicates, fillna thay đổi bảng.",
    "a": [
     "df.isnull().sum()",
     "df.describe()",
     "df.dropna()",
     "df.drop_duplicates()",
     "df.fillna(0)"
    ],
    "h": "83da5a66f633a"
   },
   {
    "k": "ma",
    "id": "bai07-q28",
    "q": "Những giá trị nào là PHI LÝ trong bảng điểm thang 10 của học sinh? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Điểm phải trong 0 – 10; 0 và 10 vẫn có thể xảy ra.",
    "a": [
     "Điểm 55",
     "Điểm −3",
     "Điểm 9.8",
     "Điểm 0",
     "Điểm 10"
    ],
    "h": "1f7bdc7f56283"
   },
   {
    "k": "ma",
    "id": "bai07-q29",
    "q": "Những cách xử lý nào hợp lý với ô trống ở cột điểm có giá trị lạ? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Điền 0 hay giá trị lớn nhất là tự bịa ra một bạn điểm rất thấp hoặc rất cao.",
    "a": [
     "Điền bằng trung vị của cột",
     "Xoá dòng nếu ô trống rất ít",
     "Điền bằng số 0",
     "Điền bằng giá trị lớn nhất"
    ],
    "h": "97aca3c967c97"
   },
   {
    "k": "ma",
    "id": "bai07-q30",
    "q": "Sau .str.strip().str.upper(), những cách viết nào của cột Lớp trở thành “10A1”? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "“10A 1” còn khoảng trắng ở giữa, cần thêm .str.replace(\" \", \"\").",
    "a": [
     "“10a1”",
     "“ 10A1”",
     "“10A 1”",
     "“10A2”"
    ],
    "h": "1c68be9c86e9c0"
   },
   {
    "k": "sx",
    "id": "bai07-q31",
    "q": "Sắp xếp các bước tìm giá trị bất thường theo quy tắc Toán 10.",
    "giai": "Sắp xếp → tứ phân vị → ΔQ → so ngưỡng.",
    "a": [
     "Sắp xếp dãy số liệu",
     "Tìm Q1 và Q3",
     "Tính khoảng tứ phân vị Q3 − Q1",
     "So từng giá trị với hai ngưỡng"
    ],
    "h": "1eb8bd56b79ea1"
   },
   {
    "k": "sx",
    "id": "bai07-q32",
    "q": "Sắp xếp các bước dọn cột Giới tính.",
    "giai": "Soi → thống nhất → đổi viết tắt → kiểm tra.",
    "a": [
     "Xem các cách viết bằng .unique()",
     "Bỏ khoảng trắng, đưa về chữ hoa",
     "Đổi M thành NAM, F thành NU",
     "Đếm lại bằng .unique() để kiểm tra"
    ],
    "h": "129ee238482c0c"
   },
   {
    "k": "sx",
    "id": "bai07-q33",
    "q": "Sắp xếp các bước xử lý một điểm 55 trên thang 10.",
    "giai": "Phát hiện → ô trống → trung vị trên dữ liệu sạch → điền.",
    "a": [
     "Phát hiện điểm ngoài khoảng 0 – 10",
     "Đổi điểm 55 thành ô trống",
     "Tính trung vị của cột đã sạch",
     "Điền ô trống bằng trung vị"
    ],
    "h": "1914d8864ebb88"
   },
   {
    "k": "dd",
    "id": "bai07-q34",
    "q": "Chọn lệnh đúng cho mỗi chỗ trống.",
    "giai": "drop_duplicates bỏ dòng trùng; dropna bỏ dòng có ô trống.",
    "mau": "Xoá dòng trùng dùng {0}; xoá mọi dòng có ô trống dùng {1}.",
    "o": [
     [
      "df.drop_duplicates()",
      "df.dropna()",
      "df.duplicated()",
      "df.fillna()"
     ],
     [
      "df.dropna()",
      "df.fillna()",
      "df.drop_duplicates()",
      "df.isnull()"
     ]
    ],
    "h": "ce6a0dcf879c4"
   },
   {
    "k": "dd",
    "id": "bai07-q35",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Trung vị không bị kéo lệch; mốt dùng được cho chữ.",
    "mau": "Cột số có giá trị lạ thì điền ô trống bằng {0}; cột chữ thì điền bằng {1}.",
    "o": [
     [
      "trung vị",
      "số trung bình",
      "số 0",
      "giá trị lớn nhất"
     ],
     [
      "mốt",
      "trung vị",
      "số trung bình",
      "chữ rỗng"
     ]
    ],
    "h": "a4db1302d62d1"
   },
   {
    "k": "dd",
    "id": "bai07-q36",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Phi lý là lỗi nhập liệu → đổi thành ô trống rồi điền.",
    "mau": "Giá trị không thể xảy ra gọi là giá trị {0}; ta đổi nó thành {1}.",
    "o": [
     [
      "phi lý",
      "bất thường có thật",
      "trung vị",
      "trùng lặp"
     ],
     [
      "ô trống",
      "số 0",
      "giá trị lớn nhất",
      "chữ hoa"
     ]
    ],
    "h": "15a87eca3c40e5"
   },
   {
    "k": "dd",
    "id": "bai07-q37",
    "q": "Chọn lệnh đúng cho mỗi chỗ trống.",
    "giai": "strip bỏ khoảng trắng hai đầu; upper đưa về chữ hoa.",
    "mau": "Lệnh {0} bỏ khoảng trắng hai đầu; lệnh {1} đưa chữ về chữ hoa.",
    "o": [
     [
      ".str.strip()",
      ".str.upper()",
      ".str.replace()",
      ".unique()"
     ],
     [
      ".str.upper()",
      ".str.strip()",
      ".str.lower()",
      ".unique()"
     ]
    ],
    "h": "1e26edd2e21dc7"
   },
   {
    "k": "dd",
    "id": "bai07-q38",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Garbage in, garbage out.",
    "mau": "Nguyên tắc “rác vào, {0}”: dữ liệu sai thì {1} sai.",
    "o": [
     [
      "rác ra",
      "vàng ra",
      "sạch ra",
      "số ra"
     ],
     [
      "kết quả",
      "máy tính",
      "bàn phím",
      "tên cột"
     ]
    ],
    "h": "1ff339b22c8bb1"
   },
   {
    "k": "ds",
    "id": "bai07-q39",
    "q": "Lệnh .str.upper() biến “10A 1” thành “10A1”.",
    "giai": "upper chỉ đổi chữ thường thành chữ hoa; khoảng trắng ở giữa vẫn còn.",
    "h": "11a00b75888895"
   },
   {
    "k": "ds",
    "id": "bai07-q40",
    "q": "Hai dòng giống hệt nhau ở mọi cột thì nên giữ lại cả hai.",
    "giai": "Đó là dòng trùng — giữ cả hai thì một bạn bị đếm hai lần.",
    "h": "1d7d304b876c86"
   },
   {
    "k": "ds",
    "id": "bai07-q41",
    "q": "Xoá mọi dòng có ô trống luôn là cách tốt nhất.",
    "giai": "Xoá dòng làm mất cả các ô còn tốt — với bảng này mất 19 bạn.",
    "h": "83b5ad2fa7529"
   },
   {
    "k": "ds",
    "id": "bai07-q42",
    "q": "Quy tắc tứ phân vị có thể bỏ sót một giá trị phi lý.",
    "giai": "Ví dụ giờ học −1.5 nằm trong ngưỡng của quy tắc nhưng vẫn phi lý (giờ không thể âm).",
    "h": "1f612fd29706b3"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
