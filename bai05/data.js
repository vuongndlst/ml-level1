window.BAI = {
 "bai": 5,
 "ma": "bai05",
 "nhan": "Bài 5",
 "tieu_de": "Thống kê và xác suất",
 "phan": "Module 05 · Math for Machine Learning",
 "cau_hoi": "Một con số có đủ để mô tả cả một lớp không?",
 "gioi_thieu": [
  "Đầu giờ con đã nhìn hai lớp <b>10A1</b> và <b>10A8</b>: điểm trung bình gần bằng nhau (5,71 và 5,64). Vậy hai lớp có học lực giống nhau không?",
  "Năm chặng dưới đây giúp con trả lời bằng số liệu. Mọi ví dụ lấy từ <b>bảng dữ liệu 240 học sinh khối 10</b> — bảng mô phỏng, dựng giống một khối lớp thật để luyện tập, cũng là bảng con mở trên Colab.",
  "Nhiều khái niệm con đã gặp ở chương Thống kê, Toán 10. Ở đây con dùng lại chúng để đọc dữ liệu như một người làm Machine Learning."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai05",
 "muc_tieu": [
  "Tính và giải thích được số trung bình, trung vị, mốt của một dãy số liệu.",
  "Nhận ra giá trị bất thường và chọn đúng con số đại diện.",
  "Dùng độ lệch chuẩn để so sánh mức phân tán của hai nhóm.",
  "Tính xác suất và xác suất có điều kiện bằng cách đếm trong bảng dữ liệu.",
  "Đọc đúng một dự đoán dạng xác suất của model Machine Learning."
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
   "ten": "Số đặc trưng đo xu thế trung tâm",
   "ten_ngan": "Con số ở giữa",
   "phut": 6,
   "muc_tieu": "tính được số trung bình, trung vị, mốt của một dãy số liệu và biết lệnh Pandas tương ứng.",
   "khoi_dong": "Muốn tóm tắt cả một cột số bằng <b>một con số</b> — ví dụ “một bạn khối 10 dùng mạng xã hội bao lâu mỗi ngày?” — con chọn con số nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Các số đặc trưng đo <b>xu thế trung tâm</b> cho biết dữ liệu “tập trung” quanh giá trị nào. Có ba số hay dùng, mỗi số hiểu chữ “ở giữa” theo một cách."
    },
    {
     "t": "dinh_nghia",
     "ten": "Số trung bình (mean)",
     "html": "Tổng tất cả các giá trị chia cho số giá trị.",
     "ky_hieu": "Với n giá trị x<sub>1</sub>, x<sub>2</sub>, …, x<sub>n</sub>: &nbsp; <span class=\"frac\"><span>x<sub>1</sub> + x<sub>2</sub> + … + x<sub>n</sub></span><span>n</span></span>, ký hiệu x̄ (đọc là “x ngang”)."
    },
    {
     "t": "dinh_nghia",
     "ten": "Trung vị (median)",
     "html": "Sắp xếp dãy theo thứ tự <b>không giảm</b>, trung vị là giá trị đứng chính giữa. Nếu số giá trị n là số chẵn, trung vị là <b>trung bình cộng của hai giá trị đứng giữa</b>.",
     "ky_hieu": "n lẻ: giá trị thứ <span class=\"frac\"><span>n + 1</span><span>2</span></span> · n chẵn: trung bình của giá trị thứ <span class=\"frac\"><span>n</span><span>2</span></span> và thứ <span class=\"frac\"><span>n</span><span>2</span></span> + 1"
    },
    {
     "t": "dinh_nghia",
     "ten": "Mốt (mode)",
     "html": "Giá trị xuất hiện <b>nhiều lần nhất</b> (có tần số lớn nhất). Một dãy có thể có nhiều mốt. Mốt dùng được cả với dữ liệu dạng chữ — ví dụ lớp nào đông học sinh nhất.",
     "ky_hieu": null
    },
    {
     "t": "vi_du",
     "tieu_de": "7 học sinh trong bảng khối 10",
     "de": "Số phút dùng mạng xã hội mỗi ngày của 7 bạn (HS222, HS070, HS038, HS101, HS036, HS012, HS197): <b>30 · 89 · 108 · 151 · 182 · 208 · 445</b>.",
     "cot": [
      "Bước",
      "Làm gì",
      "Kết quả"
     ],
     "dong": [
      [
       "1",
       "Sắp xếp theo thứ tự không giảm",
       "30 · 89 · 108 · 151 · 182 · 208 · 445"
      ],
      [
       "2",
       "Cộng tất cả các giá trị",
       "30 + 89 + 108 + 151 + 182 + 208 + 445 = 1213"
      ],
      [
       "3",
       "Số trung bình = tổng : số giá trị",
       "1213 : 7 ≈ <b>173,3 phút</b>"
      ],
      [
       "4",
       "n = 7 lẻ → trung vị là giá trị thứ (7 + 1) : 2 = 4",
       "<b>151 phút</b>"
      ],
      [
       "5",
       "Mốt: có giá trị nào lặp lại không?",
       "Không — mỗi giá trị xuất hiện một lần"
      ]
     ],
     "ket_luan": "Hai con số “ở giữa” lệch nhau hơn 20 phút. Chặng 2 giải thích vì sao.",
     "nhan_manh": [
      2,
      3
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Số đặc trưng",
      "Cách tính",
      "Lệnh Pandas"
     ],
     "dong": [
      [
       "Số trung bình",
       "Tổng chia số giá trị",
       "<code>df[\"cột\"].mean()</code>"
      ],
      [
       "Trung vị",
       "Sắp xếp, lấy giá trị giữa",
       "<code>df[\"cột\"].median()</code>"
      ],
      [
       "Mốt",
       "Giá trị có tần số lớn nhất",
       "<code>df[\"cột\"].mode()</code>"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Tìm trung vị mà <b>quên sắp xếp</b> dãy trước.",
      "Với n chẵn, lấy một trong hai giá trị giữa thay vì <b>trung bình của cả hai</b>.",
      "Nghĩ rằng trung vị luôn là một giá trị có trong dãy — với n chẵn thì chưa chắc."
     ]
    },
    {
     "t": "video",
     "yt": "h8EYEJ32oQ8",
     "ten": "Khan Academy — Statistics intro: Mean, median, and mode",
     "ghi_chu": "tiếng Anh, có phụ đề (CC); không bắt buộc — xem nếu con muốn thêm ví dụ",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Số trung bình cộng mọi giá trị; trung vị là giá trị đứng giữa dãy đã sắp xếp; mốt là giá trị gặp nhiều nhất."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Thống kê: các số đặc trưng đo xu thế trung tâm",
       "url": null,
       "ghi_chu": "SGK — cùng tên gọi, cùng công thức"
      },
      {
       "ten": "Khan Academy — Summarizing quantitative data",
       "url": "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data",
       "ghi_chu": "tiếng Anh, có bài tập tự chấm"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q1",
     "q": "Dãy số liệu: 4 · 6 · 6 · 9 · 10. Trung vị của dãy bằng bao nhiêu?",
     "giai": "Dãy đã sắp xếp, n = 5 lẻ nên trung vị là giá trị thứ 3: 6. Số 7 là số trung bình (35 : 5).",
     "goi_y": "Dãy đã sắp xếp chưa? Có mấy giá trị — lẻ hay chẵn? Giá trị thứ mấy đứng giữa?",
     "a": [
      "6",
      "7",
      "9",
      "8"
     ],
     "h": "a7ce8cad781bf"
    },
    {
     "k": "mc",
     "id": "bai05-q2",
     "q": "Dãy 6 giá trị đã sắp xếp: 2 · 4 · 5 · 7 · 8 · 9. Trung vị bằng bao nhiêu?",
     "giai": "n = 6 chẵn nên trung vị là trung bình hai giá trị thứ 3 và thứ 4: (5 + 7) : 2 = 6. 5,8 là số trung bình của cả dãy.",
     "goi_y": "Với n chẵn, không có một giá trị nào đứng chính giữa. Nhìn lại định nghĩa.",
     "a": [
      "6",
      "5",
      "7",
      "5,8"
     ],
     "h": "14cff38057e7ea"
    },
    {
     "k": "dd",
     "id": "bai05-q3",
     "q": "Chọn lệnh Pandas đúng cho mỗi chỗ trống.",
     "giai": "mean = số trung bình, median = trung vị, mode = mốt.",
     "goi_y": "Tên lệnh chính là tên tiếng Anh của số đặc trưng — xem bảng cuối chặng.",
     "mau": "Lệnh {0} tính số trung bình của một cột, còn lệnh {1} tính trung vị.",
     "o": [
      [
       ".mean()",
       ".median()",
       ".mode()",
       ".sum()"
      ],
      [
       ".median()",
       ".mean()",
       ".mode()",
       ".max()"
      ]
     ],
     "h": "1e1f84cc1cfbe8"
    }
   ]
  },
  {
   "ten": "Giá trị bất thường và lựa chọn con số đại diện",
   "ten_ngan": "Giá trị bất thường",
   "phut": 4,
   "muc_tieu": "giải thích được vì sao số trung bình bị giá trị bất thường kéo lệch còn trung vị thì không, và chọn đúng con số đại diện.",
   "khoi_dong": "Trong 7 bạn ở chặng 1, bạn cuối dùng mạng 445 phút mỗi ngày — hơn 7 tiếng. Nếu con số đó còn lớn hơn nữa, số trung bình và trung vị thay đổi thế nào?",
   "khoi": [
    {
     "t": "demo_tb_tv",
     "tieu_de": "số trung bình và trung vị",
     "huong_dan": "Sửa ô màu vàng (bạn thứ 7) thành 1000, rồi 2000. Quan sát hai ô kết quả.",
     "gia_tri": [
      30,
      89,
      108,
      151,
      182,
      208,
      445
     ],
     "sua": 6
    },
    {
     "t": "vi_du",
     "tieu_de": "đổi một giá trị",
     "de": "So sánh dãy gốc với dãy sau khi đổi 445 thành 1000:",
     "cot": [
      "",
      "Dãy gốc",
      "Đổi 445 → 1000"
     ],
     "dong": [
      [
       "Số trung bình",
       "173,3 phút",
       "<b>252,6 phút</b>"
      ],
      [
       "Trung vị",
       "151 phút",
       "<b>151 phút</b>"
      ]
     ],
     "ket_luan": "Số trung bình cộng mọi giá trị nên bị kéo theo. Trung vị chỉ phụ thuộc vị trí — bạn thứ 7 vẫn đứng cuối dãy, giá trị thứ 4 vẫn là 151.",
     "nhan_manh": []
    },
    {
     "t": "histogram",
     "tieu_de": "phút mạng xã hội của cả khối",
     "huong_dan": "Kéo thanh trượt đổi số cột. Đường <b style=\"color:#DC2626\">đỏ nét đứt</b> là số trung bình, đường <b>xanh đậm</b> là trung vị. Vì sao đường đỏ luôn nằm bên phải?",
     "gia_tri": [
      126,
      135,
      111,
      132,
      69,
      90,
      113,
      449,
      277,
      249,
      136,
      208,
      38,
      88,
      73,
      139,
      115,
      131,
      65,
      202,
      114,
      148,
      147,
      54,
      159,
      137,
      100,
      114,
      235,
      114,
      205,
      129,
      116,
      355,
      277,
      182,
      182,
      108,
      124,
      290,
      102,
      105,
      182,
      169,
      185,
      128,
      147,
      204,
      295,
      127,
      205,
      228,
      70,
      168,
      182,
      212,
      144,
      106,
      261,
      100,
      128,
      210,
      142,
      215,
      154,
      201,
      145,
      198,
      46,
      89,
      98,
      82,
      187,
      88,
      234,
      41,
      144,
      89,
      60,
      34,
      236,
      242,
      88,
      135,
      92,
      77,
      65,
      95,
      223,
      268,
      256,
      87,
      180,
      40,
      198,
      250,
      34,
      331,
      201,
      239,
      151,
      102,
      64,
      15,
      117,
      127,
      139,
      42,
      316,
      102,
      131,
      15,
      100,
      15,
      187,
      158,
      265,
      116,
      151,
      102,
      71,
      325,
      205,
      111,
      130,
      102,
      167,
      185,
      233,
      86,
      137,
      450,
      105,
      119,
      121,
      292,
      117,
      91,
      90,
      94,
      138,
      233,
      85,
      254,
      189,
      257,
      70,
      83,
      87,
      256,
      200,
      153,
      182,
      57,
      150,
      147,
      69,
      106,
      155,
      95,
      102,
      182,
      126,
      77,
      170,
      281,
      141,
      69,
      105,
      210,
      116,
      82,
      92,
      71,
      233,
      66,
      86,
      156,
      396,
      102,
      120,
      149,
      88,
      88,
      258,
      147,
      150,
      129,
      135,
      208,
      174,
      165,
      57,
      228,
      111,
      159,
      445,
      120,
      164,
      100,
      84,
      262,
      120,
      142,
      176,
      281,
      185,
      282,
      85,
      194,
      222,
      67,
      184,
      133,
      125,
      86,
      133,
      99,
      450,
      15,
      124,
      30,
      274,
      21,
      207,
      157,
      116,
      298,
      157,
      222,
      49,
      107,
      310,
      236,
      111,
      112,
      15,
      244,
      123,
      295
     ],
     "ma_cot": "df[\"PhutMangXH\"]",
     "nhan_x": "Phút dùng mạng xã hội mỗi ngày",
     "mac_dinh": 20,
     "bins_min": 5,
     "bins_max": 40,
     "duong": true,
     "so_le": 1,
     "ghi": "Dữ liệu mô phỏng, 240 bạn. Vài bạn dùng mạng rất lâu nằm ở đuôi bên phải — chúng kéo số trung bình, không kéo được trung vị."
    },
    {
     "t": "dinh_nghia",
     "ten": "Giá trị bất thường (ngoại lai, outlier)",
     "html": "Giá trị khác biệt hẳn so với phần lớn các giá trị còn lại của dãy.",
     "ky_hieu": "Khi dãy có giá trị bất thường, nên dùng <b>trung vị</b> làm con số đại diện."
    },
    {
     "t": "anh",
     "cap": "Ba dạng giá trị bất thường",
     "alt": "Ba dạng giá trị bất thường",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250728113900581184/types_of_outliers.webp",
     "du_phong": "img/minh-hoa-cac-loai-gia-tri-ngoai-lai.png",
     "nguon": {
      "ten": "GeeksforGeeks — What is outlier detection",
      "url": "https://www.geeksforgeeks.org/machine-learning/what-is-outlier-detection/"
     },
     "chu_giai": [
      [
       "Types of Outliers",
       "Các dạng giá trị bất thường"
      ],
      [
       "Global Outliers",
       "Bất thường toàn cục — tách khỏi toàn bộ dữ liệu"
      ],
      [
       "Contextual Outliers",
       "Bất thường theo bối cảnh — ví dụ 35 °C vào tháng 12"
      ],
      [
       "Collective Outliers",
       "Bất thường theo cụm — một nhóm nhỏ cùng lạ"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Phút mạng xã hội của 240 học sinh: trung bình 152,8, trung vị 135 — vài bạn dùng rất nhiều kéo số trung bình sang phải",
     "alt": "Phút mạng xã hội của 240 học sinh: trung bình 152,8, trung vị 135 — vài bạn dùng rất nhiều kéo số trung bình sang phải",
     "src": "img/trung-binh-bi-keo-lech.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Giá trị bất thường không phải lúc nào cũng là lỗi",
     "html": "Một bạn học 7 giờ và được 9,8 điểm là hiếm nhưng có thể — cần giữ. Một bạn học 25 giờ mỗi ngày là lỗi nhập liệu — cần sửa. Bài 7 con sẽ tự phân biệt hai trường hợp này."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Thấy giá trị lạ là xoá ngay, không kiểm tra nó có thể xảy ra thật không.",
      "Dùng số trung bình để mô tả dữ liệu có vài giá trị rất lớn (thu nhập, phút mạng xã hội…)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Giá trị bất thường kéo số trung bình về phía nó; trung vị thì không. Dữ liệu có giá trị bất thường nên dùng trung vị."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q4",
     "q": "Vài bạn dùng mạng xã hội rất nhiều. Muốn mô tả “một bạn bình thường dùng mạng bao lâu”, nên dùng số đặc trưng nào?",
     "giai": "Giá trị bất thường kéo số trung bình về phía nó; trung vị chỉ phụ thuộc vị trí.",
     "goi_y": "Nhớ lại phần Tự thử: khi đổi số cuối thành 1000, ô nào đứng yên?",
     "a": [
      "Trung vị, vì không bị giá trị bất thường kéo lệch",
      "Số trung bình, vì dùng đến mọi giá trị của dãy",
      "Giá trị lớn nhất, vì dễ nhận ra nhất",
      "Mốt, vì luôn là giá trị đứng giữa dãy"
     ],
     "h": "510b952166b6d"
    },
    {
     "k": "ds",
     "id": "bai05-q5",
     "q": "Đổi giá trị lớn nhất của một dãy 7 số thành một số còn lớn hơn nữa thì trung vị của dãy không đổi.",
     "giai": "Giá trị lớn nhất vẫn đứng cuối dãy, giá trị thứ 4 vẫn là giá trị thứ 4.",
     "goi_y": "Sau khi đổi, thứ tự sắp xếp của dãy có thay đổi không?",
     "h": "1f3694eca79981"
    }
   ]
  },
  {
   "ten": "Số đặc trưng đo mức độ phân tán",
   "ten_ngan": "Độ lệch chuẩn",
   "phut": 6,
   "muc_tieu": "nêu được các bước tính phương sai, độ lệch chuẩn và dùng độ lệch chuẩn để so sánh mức phân tán của hai nhóm.",
   "khoi_dong": "10A1 và 10A8 có số trung bình gần bằng nhau. Làm sao biết điểm lớp nào <b>đồng đều</b> hơn?",
   "khoi": [
    {
     "t": "p",
     "html": "Số trung bình chỉ cho biết dữ liệu tập trung quanh đâu, chưa cho biết các giá trị <b>tản ra</b> hay <b>chụm lại</b>. Cần một số đặc trưng đo <b>mức độ phân tán</b>."
    },
    {
     "t": "dinh_nghia",
     "ten": "Phương sai và độ lệch chuẩn",
     "html": "<b>Độ lệch</b> của một giá trị là hiệu của giá trị đó với số trung bình. <b>Phương sai</b> là trung bình cộng các bình phương độ lệch. <b>Độ lệch chuẩn</b> là căn bậc hai của phương sai — nó cho biết các giá trị thường cách số trung bình bao xa, và có cùng đơn vị với dữ liệu.",
     "ky_hieu": "Phương sai s<sup>2</sup> = <span class=\"frac\"><span>(x<sub>1</sub> − x̄)<sup>2</sup> + … + (x<sub>n</sub> − x̄)<sup>2</sup></span><span>n</span></span> &nbsp;·&nbsp; Độ lệch chuẩn s = √s<sup>2</sup>"
    },
    {
     "t": "vi_du",
     "tieu_de": "độ lệch chuẩn chiều cao 6 người",
     "de": "Chiều cao: 150 · 155 · 160 · 165 · 170 · 175 cm. Số trung bình x̄ = 975 : 6 = <b>162,5 cm</b>.",
     "cot": [
      "Chiều cao x (cm)",
      "Độ lệch x − x̄",
      "Bình phương (x − x̄)<sup>2</sup>"
     ],
     "dong": [
      [
       "150",
       "−12,5",
       "156,25"
      ],
      [
       "155",
       "−7,5",
       "56,25"
      ],
      [
       "160",
       "−2,5",
       "6,25"
      ],
      [
       "165",
       "2,5",
       "6,25"
      ],
      [
       "170",
       "7,5",
       "56,25"
      ],
      [
       "175",
       "12,5",
       "156,25"
      ],
      [
       "Tổng",
       "0",
       "<b>437,50</b>"
      ]
     ],
     "ket_luan": "Phương sai s<sup>2</sup> = 437,5 : 6 ≈ 72,92 · Độ lệch chuẩn s = √72,92 ≈ <b>8,54 cm</b>: chiều cao mỗi người thường cách số trung bình khoảng 8,5 cm.",
     "nhan_manh": [
      6
     ]
    },
    {
     "t": "anh",
     "cap": "Mỗi mũi tên là độ lệch của một người; dải xanh là khoảng số trung bình ± 1 độ lệch chuẩn",
     "alt": "Mỗi mũi tên là độ lệch của một người; dải xanh là khoảng số trung bình ± 1 độ lệch chuẩn",
     "src": "img/do-lech-chieu-cao-6-nguoi.png"
    },
    {
     "t": "keo_diem",
     "tieu_de": "kéo chiều cao, xem độ lệch chuẩn",
     "huong_dan": "Kéo các chấm (hoặc bấm vào hình rồi dùng phím mũi tên, phím cách để chọn chấm khác). <b>Thử thách:</b> giữ số trung bình 162,5 cm mà làm độ lệch chuẩn <b>nhỏ hơn 3 cm</b>. Rồi làm nó <b>lớn hơn 12 cm</b>.",
     "gia_tri": [
      150,
      155,
      160,
      165,
      170,
      175
     ],
     "lo": 140,
     "hi": 185,
     "buoc": 0.5,
     "nhan_x": "Chiều cao (cm)",
     "don_vi": "cm",
     "so_le": 2,
     "so_vach": 9,
     "ghi": "Trang này tính độ lệch chuẩn bằng cách <b>chia cho n</b>, đúng công thức SGK Toán 10."
    },
    {
     "t": "vi_du",
     "tieu_de": "so sánh hai lớp đầu giờ",
     "de": null,
     "cot": [
      "Lớp",
      "Số trung bình",
      "Độ lệch chuẩn",
      "Nhận xét"
     ],
     "dong": [
      [
       "10A1",
       "5,71",
       "1,92",
       "Điểm tản ra hơn"
      ],
      [
       "10A8",
       "5,64",
       "1,58",
       "Điểm đồng đều hơn"
      ]
     ],
     "ket_luan": "Số trung bình gần bằng nhau nhưng độ lệch chuẩn khác nhau: một con số không đủ để mô tả cả một lớp.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "anh",
     "cap": "Phân bố điểm của 10A1 và 10A8 — 10A8 chụm quanh số trung bình, 10A1 trải rộng hơn",
     "alt": "Phân bố điểm của 10A1 và 10A8 — 10A8 chụm quanh số trung bình, 10A1 trải rộng hơn",
     "src": "img/hai-lop-gan-cung-trung-binh.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Pandas chia cho n − 1",
     "html": "Lệnh <code>.std()</code> của Pandas mặc định chia cho <b>n − 1</b> thay vì n — cách tính dùng khi dữ liệu chỉ là một <b>mẫu</b> của nhóm lớn hơn. Muốn đúng công thức SGK thì viết <code>.std(ddof=0)</code>. Với 30 bạn một lớp, hai cách chênh chưa tới 2% và <b>thứ tự các lớp không đổi</b>: 10A1 là 1,92 (Pandas) hay 1,89 (chia n)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Cộng các độ lệch rồi chia n — tổng các độ lệch luôn bằng 0, nên phải <b>bình phương</b> trước.",
      "Quên lấy căn bậc hai: phương sai có đơn vị cm², độ lệch chuẩn mới có đơn vị cm.",
      "Nghĩ độ lệch chuẩn lớn là lớp học giỏi hơn — nó chỉ nói mức phân tán."
     ]
    },
    {
     "t": "video",
     "yt": "SzZ6GpcfoQY",
     "ten": "StatQuest — Calculating the Mean, Variance and Standard Deviation",
     "ghi_chu": "tiếng Anh, có phụ đề; xem từ đầu tới phút 7",
     "bat_dau": null,
     "ket_thuc": 420
    },
    {
     "t": "tom_tat",
     "html": "Độ lệch chuẩn đo các giá trị tản ra quanh số trung bình bao xa: càng nhỏ càng đồng đều."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Thống kê: các số đặc trưng đo độ phân tán",
       "url": null,
       "ghi_chu": "SGK — phương sai, độ lệch chuẩn"
      },
      {
       "ten": "Seeing Theory (Đại học Brown) — Basic Probability / Expectation, Variance",
       "url": "https://seeing-theory.brown.edu/basic-probability/",
       "ghi_chu": "tiếng Anh, hình động kéo thả"
      },
      {
       "ten": "pandas — Series.std (tham số ddof)",
       "url": "https://pandas.pydata.org/docs/reference/api/pandas.Series.std.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q6",
     "q": "Lớp A và lớp B cùng có số trung bình 6,0. Độ lệch chuẩn của lớp A là 0,5, của lớp B là 2,5. Nhận xét nào đúng?",
     "giai": "Độ lệch chuẩn nhỏ nghĩa là các điểm nằm sát số trung bình, tức là đồng đều hơn.",
     "goi_y": "Độ lệch chuẩn đo điều gì: mức giỏi hay mức tản ra?",
     "a": [
      "Điểm lớp A đồng đều hơn điểm lớp B",
      "Điểm lớp B đồng đều hơn điểm lớp A",
      "Học lực hai lớp giống hệt nhau",
      "Lớp B học giỏi hơn lớp A"
     ],
     "h": "1554f292ac3e2"
    },
    {
     "k": "sx",
     "id": "bai05-q7",
     "q": "Sắp xếp các bước tính độ lệch chuẩn theo đúng thứ tự.",
     "giai": "Số trung bình → độ lệch → phương sai → độ lệch chuẩn.",
     "goi_y": "Muốn có độ lệch, cần biết số trung bình trước. Bước cuối cho ra đơn vị cm.",
     "a": [
      "Tính số trung bình của dãy",
      "Tính độ lệch của từng giá trị",
      "Tính trung bình các bình phương độ lệch",
      "Lấy căn bậc hai của phương sai"
     ],
     "h": "13cc4672303638"
    },
    {
     "k": "mc",
     "id": "bai05-q8",
     "q": "Độ lệch chuẩn của một dãy số liệu bằng 0. Điều đó nghĩa là gì?",
     "giai": "Không giá trị nào lệch khỏi số trung bình, tức là tất cả bằng nhau — không nhất thiết bằng 0.",
     "goi_y": "Độ lệch chuẩn bằng 0 thì mọi độ lệch x − x̄ bằng bao nhiêu?",
     "a": [
      "Mọi giá trị trong dãy đều bằng nhau",
      "Mọi giá trị trong dãy đều bằng 0",
      "Dãy số liệu không có giá trị nào",
      "Số trung bình bằng đúng trung vị"
     ],
     "h": "117bac89a37656"
    }
   ]
  },
  {
   "ten": "Xác suất và xác suất có điều kiện",
   "ten_ngan": "Xác suất",
   "phut": 6,
   "muc_tieu": "tính được xác suất bằng cách đếm trong bảng dữ liệu, và tính lại xác suất khi biết thêm một điều kiện.",
   "khoi_dong": "Chọn ngẫu nhiên một bạn khối 10. Khả năng bạn ấy Đạt là bao nhiêu? Nếu biết thêm bạn ấy tự học hơn 4 giờ mỗi ngày thì sao?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Xác suất của biến cố",
     "html": "Xác suất của biến cố A là số đo khả năng A xảy ra, nằm từ 0 (không thể xảy ra) đến 1 (chắc chắn xảy ra). Khi các kết quả có khả năng như nhau:",
     "ky_hieu": "P(A) = <span class=\"frac\"><span>n(A)</span><span>n(Ω)</span></span> — n(A): số kết quả thuận lợi cho A; n(Ω): số kết quả có thể."
    },
    {
     "t": "dinh_nghia",
     "ten": "Xác suất có điều kiện",
     "html": "Xác suất của A <b>khi biết</b> B đã xảy ra, ký hiệu P(A | B). Với bảng dữ liệu: chỉ đếm trong nhóm thoả B.",
     "ky_hieu": "P(A | B) = <span class=\"frac\"><span>số trường hợp có cả A và B</span><span>số trường hợp có B</span></span> — Toán 12 sẽ học kỹ hơn."
    },
    {
     "t": "vi_du",
     "tieu_de": "xác suất Đạt trong bảng khối 10",
     "de": null,
     "cot": [
      "Nhóm (điều kiện đã biết)",
      "Số học sinh",
      "Số học sinh Đạt",
      "Xác suất Đạt"
     ],
     "dong": [
      [
       "Cả khối — chưa biết gì thêm",
       "240",
       "129",
       "129 : 240 ≈ 53,8%"
      ],
      [
       "Tự học hơn 4 giờ mỗi ngày",
       "104",
       "100",
       "100 : 104 ≈ <b>96,2%</b>"
      ],
      [
       "Dùng mạng hơn 300 phút mỗi ngày",
       "10",
       "2",
       "2 : 10 = 20,0%"
      ]
     ],
     "ket_luan": "Biết thêm một điều kiện thì mẫu số đổi thành số học sinh của nhóm đó — và xác suất có thể thay đổi rất nhiều.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "anh",
     "cap": "Tỉ lệ Đạt của cả khối và của hai nhóm điều kiện",
     "alt": "Tỉ lệ Đạt của cả khối và của hai nhóm điều kiện",
     "src": "img/xac-suat-dat-khi-biet-them.png"
    },
    {
     "t": "demo_truot",
     "tieu_de": "xác suất Đạt khi biết giờ tự học",
     "huong_dan": "Kéo thanh trượt để đổi điều kiện. Máy đếm lại trong nhóm mới rồi chia.",
     "dieu_kien": "Điều kiện: tự học <b>hơn</b> {x} giờ mỗi ngày",
     "moc": [
      {
       "x": 0.0,
       "n": 240,
       "p": 53.8
      },
      {
       "x": 0.5,
       "n": 237,
       "p": 54.4
      },
      {
       "x": 1.0,
       "n": 221,
       "p": 58.4
      },
      {
       "x": 1.5,
       "n": 202,
       "p": 63.9
      },
      {
       "x": 2.0,
       "n": 174,
       "p": 74.1
      },
      {
       "x": 2.5,
       "n": 152,
       "p": 82.2
      },
      {
       "x": 3.0,
       "n": 140,
       "p": 87.1
      },
      {
       "x": 3.5,
       "n": 120,
       "p": 94.2
      },
      {
       "x": 4.0,
       "n": 104,
       "p": 96.2
      },
      {
       "x": 4.5,
       "n": 86,
       "p": 95.3
      },
      {
       "x": 5.0,
       "n": 72,
       "p": 100.0
      },
      {
       "x": 5.5,
       "n": 56,
       "p": 100.0
      },
      {
       "x": 6.0,
       "n": 40,
       "p": 100.0
      },
      {
       "x": 6.5,
       "n": 18,
       "p": 100.0
      }
     ],
     "nhan_n": "Số học sinh trong nhóm",
     "nhan_p": "Xác suất Đạt trong nhóm",
     "so_le_x": 1,
     "bat_dau": 8
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Hai điều cần cẩn thận",
     "html": "<b>Nhóm càng nhỏ, con số càng kém tin cậy:</b> nhóm dùng mạng hơn 300 phút chỉ có 10 học sinh — thêm hoặc bớt 1 bạn là xác suất đổi 10 điểm phần trăm.<br><b>Liên quan không có nghĩa là gây ra:</b> xác suất Đạt thấp ở nhóm đó chưa chứng minh mạng xã hội làm học sinh trượt."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Tính xác suất có điều kiện nhưng vẫn chia cho cả khối 240 học sinh.",
      "Hiểu xác suất 0,96 là “chắc chắn” — chỉ xác suất 1 mới là chắc chắn."
     ]
    },
    {
     "t": "video",
     "yt": "_IgyaD7vOOA",
     "ten": "StatQuest — Conditional Probabilities, Clearly Explained",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Xác suất = đếm rồi chia. Biết thêm điều kiện B thì chỉ đếm và chia trong nhóm thoả B."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Đại số tổ hợp và Xác suất: định nghĩa cổ điển của xác suất",
       "url": null,
       "ghi_chu": "SGK"
      },
      {
       "ten": "Seeing Theory (Đại học Brown) — Compound Probability, Conditional Probability",
       "url": "https://seeing-theory.brown.edu/compound-probability/",
       "ghi_chu": "tiếng Anh, hình động"
      },
      {
       "ten": "Khan Academy — Conditional probability",
       "url": "https://www.khanacademy.org/math/statistics-probability/probability-library",
       "ghi_chu": "tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q9",
     "q": "Khối 10 có 129 học sinh Đạt trong 240 học sinh. Chọn ngẫu nhiên một bạn, xác suất chọn được bạn Đạt xấp xỉ bao nhiêu?",
     "giai": "n(A) = 129, n(Ω) = 240 → 129 : 240 ≈ 53,8%.",
     "goi_y": "Số kết quả thuận lợi là bao nhiêu, tổng số kết quả là bao nhiêu?",
     "a": [
      "53,8%",
      "46,2%",
      "96,2%",
      "50,0%"
     ],
     "h": "af5a3deb1899a"
    },
    {
     "k": "dd",
     "id": "bai05-q10",
     "q": "Chọn cụm từ đúng cho mỗi chỗ trống.",
     "giai": "Chỉ đếm trong nhóm đã biết: mẫu số là cả nhóm tự học hơn 4 giờ, tử số là những bạn Đạt trong nhóm đó.",
     "goi_y": "Điều kiện đứng sau dấu | cho biết con đếm trong nhóm nào.",
     "mau": "P(Đạt | tự học hơn 4 giờ): tử số là {0}, mẫu số là {1}.",
     "o": [
      [
       "số học sinh vừa Đạt vừa tự học hơn 4 giờ",
       "số học sinh Đạt của cả khối",
       "số học sinh tự học hơn 4 giờ",
       "tổng số học sinh cả khối"
      ],
      [
       "số học sinh tự học hơn 4 giờ",
       "tổng số học sinh cả khối",
       "số học sinh Đạt của cả khối",
       "số học sinh vừa Đạt vừa tự học hơn 4 giờ"
      ]
     ],
     "h": "4aa5ed28fc4f7"
    },
    {
     "k": "ds",
     "id": "bai05-q11",
     "q": "Xác suất Đạt của một bạn là 0,96 nghĩa là bạn đó chắc chắn sẽ Đạt.",
     "giai": "0,96 là rất có khả năng, nhưng chỉ xác suất 1 mới là chắc chắn: cứ 100 bạn như vậy vẫn có khoảng 4 bạn không Đạt.",
     "goi_y": "Xác suất bằng bao nhiêu thì mới là “chắc chắn xảy ra”?",
     "h": "17f8b4d567313"
    }
   ]
  },
  {
   "ten": "Thống kê và xác suất trong Machine Learning",
   "ten_ngan": "Nối với ML",
   "phut": 3,
   "muc_tieu": "giải thích được vì sao Machine Learning cần thống kê và xác suất, và đọc đúng một dự đoán dạng xác suất.",
   "khoi_dong": "Một ứng dụng báo: “bạn có 80% khả năng Đạt học kỳ này”. Con hiểu câu đó thế nào?",
   "khoi": [
    {
     "t": "p",
     "html": "Model Machine Learning học từ một <b>mẫu</b> dữ liệu — ví dụ 240 học sinh trong bảng khối 10 — để dự đoán cho những học sinh nó chưa gặp. Vì chỉ thấy một phần, mọi dự đoán đều có <b>độ không chắc chắn</b>; xác suất là cách nói ra độ không chắc chắn đó."
    },
    {
     "t": "anh",
     "cap": "Từ tổng thể lấy mẫu, phân tích mẫu, xây model để dự đoán cho tổng thể",
     "alt": "Từ tổng thể lấy mẫu, phân tích mẫu, xây model để dự đoán cho tổng thể",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250901184952477952/probability_matters_in_machine_learning.webp",
     "du_phong": "img/minh-hoa-vi-sao-xac-suat-quan-trong-voi-machine-learning.png",
     "nguon": {
      "ten": "GeeksforGeeks — Probability in machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/probability-in-machine-learning/"
     },
     "chu_giai": [
      [
       "Population — all possible data",
       "Tổng thể — toàn bộ dữ liệu có thể có"
      ],
      [
       "Sampled Data",
       "Mẫu — phần dữ liệu thu được"
      ],
      [
       "Data Collection",
       "Thu thập dữ liệu"
      ],
      [
       "Exploratory Data Analysis",
       "Phân tích khám phá dữ liệu"
      ],
      [
       "Building Model — Predicting about Population",
       "Xây model — dự đoán cho tổng thể"
      ],
      [
       "Inference",
       "Suy luận"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Sáu ứng dụng của xác suất trong Machine Learning",
     "alt": "Sáu ứng dụng của xác suất trong Machine Learning",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250901143745729057/probability_ml.webp",
     "du_phong": "img/minh-hoa-cac-ung-dung-cua-xac-suat-trong-machine-learning.png",
     "nguon": {
      "ten": "GeeksforGeeks — Probability in machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/probability-in-machine-learning/"
     },
     "chu_giai": [
      [
       "Classification Algorithms",
       "Thuật toán phân loại"
      ],
      [
       "Hidden Markov Models",
       "Mô hình Markov ẩn"
      ],
      [
       "Anomaly Detection",
       "Phát hiện bất thường"
      ],
      [
       "Reinforcement Learning",
       "Học tăng cường"
      ],
      [
       "Bayesian Inference",
       "Suy luận Bayes"
      ],
      [
       "Uncertainty Estimation",
       "Ước lượng độ không chắc chắn"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Đọc đúng một dự đoán",
     "html": "“80% khả năng Đạt” nghĩa là: trong 10 học sinh có đặc điểm giống vậy, khoảng 8 bạn Đạt. Không có nghĩa là bạn ấy chắc chắn Đạt, cũng không có nghĩa là bạn ấy được 8 điểm."
    },
    {
     "t": "bang",
     "cot": [
      "Hôm nay con học",
      "Sẽ dùng lại ở"
     ],
     "dong": [
      [
       "Trung vị, giá trị bất thường",
       "Bài 7 — làm sạch dữ liệu"
      ],
      [
       "Độ lệch chuẩn, mức phân tán",
       "Bài 6, Bài 8 — khoảng cách, chuẩn bị feature"
      ],
      [
       "Xác suất",
       "Bài 16 — hồi quy logistic trả về xác suất"
      ],
      [
       "Xác suất có điều kiện",
       "Bài 21 — Naïve Bayes"
      ]
     ]
    },
    {
     "t": "tom_tat",
     "html": "Model học từ mẫu nên dự đoán luôn kèm độ không chắc chắn — và được nói ra bằng xác suất."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Google Machine Learning Crash Course — Logistic regression: calculating a probability",
       "url": "https://developers.google.com/machine-learning/crash-course/logistic-regression",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Probability in Machine Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/probability-in-machine-learning/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q12",
     "q": "Model dự đoán một bạn có 80% khả năng Đạt. Cách hiểu nào đúng nhất?",
     "giai": "Xác suất nói về tần suất trong nhiều trường hợp giống nhau — không phải điểm số, không phải độ chính xác của model.",
     "goi_y": "Đọc lại khung “Đọc đúng một dự đoán”.",
     "a": [
      "Mười bạn như vậy thì khoảng tám bạn Đạt",
      "Bạn ấy chắc chắn sẽ Đạt kỳ thi này",
      "Bạn ấy sẽ được đúng 8 điểm kỳ thi này",
      "Model dự đoán đúng 80% mọi học sinh"
     ],
     "h": "3afba7e964ff7"
    },
    {
     "k": "ma",
     "id": "bai05-q13",
     "q": "Theo hình “Sáu ứng dụng của xác suất”, những ứng dụng nào dưới đây có trong hình? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Hình liệt kê: phân loại, mô hình Markov ẩn, phát hiện bất thường, học tăng cường, suy luận Bayes, ước lượng độ không chắc chắn.",
     "goi_y": "Đối chiếu từng phương án với sáu dòng trong hình và bảng chú giải.",
     "img": {
      "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250901143745729057/probability_ml.webp",
      "du_phong": "img/minh-hoa-cac-ung-dung-cua-xac-suat-trong-machine-learning.png",
      "nguon": {
       "ten": "GeeksforGeeks — Probability in machine learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/probability-in-machine-learning/"
      }
     },
     "a": [
      "Phát hiện bất thường (Anomaly Detection)",
      "Suy luận Bayes (Bayesian Inference)",
      "Đưa dữ liệu về cùng thang đo (Feature Scaling)",
      "Làm sạch dữ liệu (Data Cleaning)"
     ],
     "h": "1a4265086b5130"
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
    "id": "bai05-q14",
    "q": "Bảy học sinh dùng mạng xã hội 30, 89, 108, 151, 182, 208, 445 phút mỗi ngày. Trung vị bằng bao nhiêu phút?",
    "giai": "n = 7 lẻ → giá trị thứ 4 của dãy đã sắp xếp: 151. 173,3 là số trung bình.",
    "a": [
     "151 phút",
     "173,3 phút",
     "182 phút",
     "108 phút"
    ],
    "h": "b8bef128ccc04"
   },
   {
    "k": "mc",
    "id": "bai05-q15",
    "q": "Bảy học sinh dùng mạng xã hội 30, 89, 108, 151, 182, 208, 445 phút mỗi ngày. Số trung bình xấp xỉ bao nhiêu phút?",
    "giai": "Tổng 1213 chia 7 ≈ 173,3.",
    "a": [
     "173,3 phút",
     "151,0 phút",
     "182,0 phút",
     "226,5 phút"
    ],
    "h": "78f948fa27a1a"
   },
   {
    "k": "mc",
    "id": "bai05-q16",
    "q": "Trong dãy 30, 89, 108, 151, 182, 208, 445, đổi 445 thành 1000. Số trung bình và trung vị thay đổi thế nào?",
    "giai": "Số trung bình cộng cả 1000 nên tăng lên 252,6; giá trị thứ 4 vẫn là 151.",
    "a": [
     "Số trung bình tăng, trung vị giữ nguyên",
     "Cả hai cùng tăng lên như nhau",
     "Trung vị tăng, số trung bình giữ nguyên",
     "Cả hai cùng giữ nguyên như cũ"
    ],
    "h": "12a1b735a9327"
   },
   {
    "k": "mc",
    "id": "bai05-q17",
    "q": "Nhìn hai biểu đồ phân bố điểm. Lớp nào có điểm đồng đều hơn, và vì sao?",
    "giai": "Độ lệch chuẩn 10A8 là 1,58, nhỏ hơn 1,92 của 10A1.",
    "img": {
     "src": "img/hai-lop-gan-cung-trung-binh.png"
    },
    "a": [
     "10A8, vì độ lệch chuẩn nhỏ hơn",
     "10A1, vì số trung bình cao hơn",
     "10A1, vì độ lệch chuẩn lớn hơn",
     "Như nhau, vì số trung bình gần bằng"
    ],
    "h": "44db51931f43f"
   },
   {
    "k": "mc",
    "id": "bai05-q18",
    "q": "Nhìn biểu đồ phút mạng xã hội. Vì sao đường số trung bình nằm bên phải đường trung vị?",
    "giai": "Vài giá trị rất lớn kéo số trung bình về phía chúng; trung vị không bị kéo.",
    "img": {
     "src": "img/trung-binh-bi-keo-lech.png"
    },
    "a": [
     "Có vài bạn dùng mạng xã hội rất nhiều",
     "Đa số các bạn dùng trên 150 phút",
     "Số trung bình luôn lớn hơn trung vị",
     "Biểu đồ được vẽ lệch sang bên phải"
    ],
    "h": "8987785cbc403"
   },
   {
    "k": "mc",
    "id": "bai05-q19",
    "q": "Nhìn biểu đồ. Biết một bạn dùng mạng hơn 300 phút mỗi ngày, xác suất bạn ấy Đạt là bao nhiêu?",
    "giai": "Cột của nhóm dùng mạng hơn 300 phút: 20,0%.",
    "img": {
     "src": "img/xac-suat-dat-khi-biet-them.png"
    },
    "a": [
     "20,0%",
     "53,8%",
     "96,2%",
     "80,0%"
    ],
    "h": "104b331f21552b"
   },
   {
    "k": "mc",
    "id": "bai05-q20",
    "q": "Hai biểu đồ hộp (box plot) của nhóm Plot A và Plot B. Đường kẻ ngang giữa mỗi hộp là trung vị. Nhóm nào có trung vị cao hơn?",
    "giai": "Đường giữa hộp của Plot B nằm cao hơn của Plot A.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251208155708391963/plot.webp",
     "du_phong": "img/minh-hoa-bieu-do-hop-so-sanh-hai-nhom-du-lieu.png",
     "nguon": {
      "ten": "GeeksforGeeks — Box plot",
      "url": "https://www.geeksforgeeks.org/maths/box-plot/"
     }
    },
    "a": [
     "Nhóm Plot B",
     "Nhóm Plot A",
     "Hai nhóm bằng nhau",
     "Không đọc được từ hình"
    ],
    "h": "19f86e0878d8ff"
   },
   {
    "k": "mc",
    "id": "bai05-q21",
    "q": "Biểu đồ cột cho biết số trận đã chơi (Games Played) của bốn bạn. Số trận trung bình của bốn bạn là bao nhiêu?",
    "giai": "(5 + 7 + 9 + 6) : 4 = 27 : 4 = 6,75 trận.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260504115244347887/1.webp",
     "du_phong": "img/minh-hoa-bieu-do-cot-so-tran-da-choi.png",
     "nguon": {
      "ten": "GeeksforGeeks — Mean median mode",
      "url": "https://www.geeksforgeeks.org/maths/mean-median-mode/"
     }
    },
    "a": [
     "6,75 trận",
     "6,00 trận",
     "7,00 trận",
     "9,00 trận"
    ],
    "h": "1c149be797d367"
   },
   {
    "k": "mc",
    "id": "bai05-q22",
    "q": "Chiều cao sáu người có số trung bình 162,5 cm, độ lệch chuẩn 8,5 cm. Câu nào mô tả đúng?",
    "giai": "Độ lệch chuẩn là khoảng cách điển hình từ mỗi giá trị tới số trung bình.",
    "a": [
     "Chiều cao thường cách số trung bình khoảng 8,5 cm",
     "Người cao nhất hơn người thấp nhất đúng 8,5 cm",
     "Có 8,5% số người cao hơn số trung bình",
     "Chiều cao trung bình của cả nhóm là 8,5 cm"
    ],
    "h": "1e8de5ed05a7fe"
   },
   {
    "k": "mc",
    "id": "bai05-q23",
    "q": "Nhóm dùng mạng hơn 300 phút chỉ có 10 học sinh, xác suất Đạt 20,0%. Nên hiểu con số này thế nào?",
    "giai": "Nhóm nhỏ thì thêm bớt một bạn là con số đổi nhiều; liên quan không có nghĩa là gây ra.",
    "a": [
     "Tính đúng nhưng kém tin cậy vì nhóm quá nhỏ",
     "Sai hoàn toàn nên phải bỏ đi",
     "Đúng tuyệt đối với mọi học sinh",
     "Chứng minh mạng xã hội gây ra việc trượt"
    ],
    "h": "19a082f30b5da5"
   },
   {
    "k": "mc",
    "id": "bai05-q24",
    "q": "Cột Lop ghi tên lớp của 240 học sinh. Số đặc trưng nào dùng được để tóm tắt cột này?",
    "giai": "Tên lớp là chữ, không cộng chia hay sắp xếp theo độ lớn được; chỉ đếm được lớp nào gặp nhiều nhất.",
    "a": [
     "Mốt",
     "Số trung bình",
     "Trung vị",
     "Độ lệch chuẩn"
    ],
    "h": "1f1f0a49f84cf5"
   },
   {
    "k": "ma",
    "id": "bai05-q25",
    "q": "Những lệnh Pandas nào cho ra số đặc trưng đo xu thế trung tâm của một cột số? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": ".mean() là số trung bình, .median() là trung vị; .std() đo mức phân tán, .count() đếm, .max() lấy giá trị lớn nhất.",
    "a": [
     ".mean()",
     ".median()",
     ".std()",
     ".count()",
     ".max()"
    ],
    "h": "13e515841d1b50"
   },
   {
    "k": "ma",
    "id": "bai05-q26",
    "q": "Những phát biểu nào đúng về trung vị? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Trung vị có thể lớn hay nhỏ hơn số trung bình; dãy chẵn thì lấy trung bình hai giá trị giữa.",
    "a": [
     "Là giá trị đứng giữa khi dãy đã sắp xếp",
     "Ít bị ảnh hưởng bởi giá trị bất thường",
     "Luôn lớn hơn số trung bình của dãy",
     "Chỉ tính được khi dãy có số lẻ giá trị"
    ],
    "h": "1f948c111e1384"
   },
   {
    "k": "ma",
    "id": "bai05-q27",
    "q": "Những phát biểu nào đúng về độ lệch chuẩn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Độ lệch chuẩn là căn bậc hai nên không bao giờ âm.",
    "a": [
     "Càng lớn thì dữ liệu càng tản ra",
     "Bằng 0 khi mọi giá trị bằng nhau",
     "Luôn bằng số trung bình chia cho hai",
     "Có thể âm khi dữ liệu giảm dần"
    ],
    "h": "147c222b3885b8"
   },
   {
    "k": "ma",
    "id": "bai05-q28",
    "q": "Những số nào có thể là xác suất của một biến cố? <b>(Chọn 3 đáp án đúng.)</b>",
    "giai": "Xác suất nằm từ 0 đến 1, tính cả 0 và 1.",
    "a": [
     "0",
     "0,75",
     "1",
     "1,2",
     "−0,3"
    ],
    "h": "10475bb816d760"
   },
   {
    "k": "ma",
    "id": "bai05-q29",
    "q": "Theo hình “Sáu ứng dụng của xác suất”, những ứng dụng nào có trong hình? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đưa về cùng thang đo và làm sạch là bước chuẩn bị dữ liệu, không có trong hình.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250901143745729057/probability_ml.webp",
     "du_phong": "img/minh-hoa-cac-ung-dung-cua-xac-suat-trong-machine-learning.png",
     "nguon": {
      "ten": "GeeksforGeeks — Probability in machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/probability-in-machine-learning/"
     }
    },
    "a": [
     "Phát hiện bất thường (Anomaly Detection)",
     "Học tăng cường (Reinforcement Learning)",
     "Đưa dữ liệu về cùng thang đo (Feature Scaling)",
     "Làm sạch dữ liệu (Data Cleaning)"
    ],
    "h": "130ab9ce809394"
   },
   {
    "k": "sx",
    "id": "bai05-q30",
    "q": "Sắp xếp các bước tính độ lệch chuẩn theo đúng thứ tự.",
    "giai": "Số trung bình → độ lệch → phương sai → độ lệch chuẩn.",
    "a": [
     "Tính số trung bình của dãy",
     "Tính độ lệch của từng giá trị",
     "Tính trung bình các bình phương độ lệch",
     "Lấy căn bậc hai của phương sai"
    ],
    "h": "3b8a8a60508f"
   },
   {
    "k": "sx",
    "id": "bai05-q31",
    "q": "Sắp xếp các bước tìm trung vị của một dãy có số chẵn giá trị.",
    "giai": "Phải sắp xếp trước, rồi lấy trung bình hai giá trị giữa.",
    "a": [
     "Sắp xếp các giá trị theo thứ tự không giảm",
     "Tìm hai giá trị đứng ở chính giữa",
     "Cộng hai giá trị đó lại",
     "Chia tổng vừa được cho 2"
    ],
    "h": "117b936260fbd3"
   },
   {
    "k": "sx",
    "id": "bai05-q32",
    "q": "Sắp xếp các bước tính xác suất Đạt của nhóm học sinh tự học hơn 4 giờ.",
    "giai": "Xác suất có điều kiện: lọc nhóm trước, rồi đếm và chia trong nhóm.",
    "a": [
     "Lọc ra các bạn tự học hơn 4 giờ",
     "Đếm số học sinh trong nhóm vừa lọc",
     "Đếm số học sinh Đạt trong nhóm đó",
     "Chia số học sinh Đạt cho số học sinh của nhóm"
    ],
    "h": "99fbfa15a0685"
   },
   {
    "k": "dd",
    "id": "bai05-q33",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cộng hết rồi chia cho số giá trị.",
    "mau": "Số trung bình: {0} tất cả các giá trị, rồi {1} cho số giá trị.",
    "o": [
     [
      "cộng",
      "nhân",
      "sắp xếp",
      "đếm"
     ],
     [
      "chia",
      "nhân",
      "cộng",
      "trừ"
     ]
    ],
    "h": "1224637990807b"
   },
   {
    "k": "dd",
    "id": "bai05-q34",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Trung vị chỉ phụ thuộc vị trí nên không bị giá trị bất thường kéo lệch.",
    "mau": "Dãy có giá trị bất thường thì nên mô tả bằng {0}, vì số đặc trưng này {1}.",
    "o": [
     [
      "trung vị",
      "số trung bình",
      "giá trị lớn nhất",
      "độ lệch chuẩn"
     ],
     [
      "không bị kéo lệch",
      "luôn lớn hơn",
      "dễ tính hơn",
      "luôn bằng 0"
     ]
    ],
    "h": "1c7f387ed7de1d"
   },
   {
    "k": "dd",
    "id": "bai05-q35",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Phương sai là trung bình các bình phương độ lệch; độ lệch chuẩn nhỏ nghĩa là dữ liệu đồng đều.",
    "mau": "Độ lệch chuẩn là căn bậc hai của {0}; con số này càng {1} thì dữ liệu càng đồng đều.",
    "o": [
     [
      "phương sai",
      "số trung bình",
      "trung vị",
      "xác suất"
     ],
     [
      "nhỏ",
      "lớn",
      "gần 1",
      "gần 100"
     ]
    ],
    "h": "47b5759151bca"
   },
   {
    "k": "dd",
    "id": "bai05-q36",
    "q": "Chọn số đúng cho mỗi chỗ trống.",
    "giai": "n(A) là số học sinh Đạt, n(Ω) là tổng số học sinh.",
    "mau": "Khối 10 có 129 học sinh Đạt trong 240 học sinh. Xác suất chọn ngẫu nhiên được một bạn Đạt bằng {0} chia cho {1}.",
    "o": [
     [
      "129",
      "240",
      "111",
      "104"
     ],
     [
      "240",
      "129",
      "111",
      "104"
     ]
    ],
    "h": "3d5d970bbc75f"
   },
   {
    "k": "dd",
    "id": "bai05-q37",
    "q": "Chọn lệnh đúng cho mỗi chỗ trống.",
    "giai": ".std() là standard deviation (độ lệch chuẩn); .count() đếm số ô có dữ liệu.",
    "mau": "Lệnh {0} tính độ lệch chuẩn của một cột, còn lệnh {1} đếm số ô có dữ liệu trong cột.",
    "o": [
     [
      ".std()",
      ".mean()",
      ".var()",
      ".mode()"
     ],
     [
      ".count()",
      ".sum()",
      ".max()",
      ".min()"
     ]
    ],
    "h": "1a45560dc95e61"
   },
   {
    "k": "ds",
    "id": "bai05-q38",
    "q": "Xác suất 0,96 nghĩa là chắc chắn biến cố sẽ xảy ra.",
    "giai": "Chỉ xác suất 1 mới là chắc chắn.",
    "h": "b294af9129033"
   },
   {
    "k": "ds",
    "id": "bai05-q39",
    "q": "Hai lớp có cùng số trung bình thì điểm của hai lớp phân bố giống hệt nhau.",
    "giai": "Cùng số trung bình vẫn có thể khác mức phân tán — xem 10A1 và 10A8.",
    "h": "13c3bae58de886"
   },
   {
    "k": "ds",
    "id": "bai05-q40",
    "q": "Giá trị bất thường không phải lúc nào cũng là lỗi nhập liệu.",
    "giai": "Có giá trị bất thường thật (hiếm nhưng có thể) và có giá trị do nhập sai.",
    "h": "1a8c10b411ae73"
   },
   {
    "k": "ds",
    "id": "bai05-q41",
    "q": "Biết thêm thông tin về một học sinh có thể làm thay đổi xác suất Đạt của bạn đó.",
    "giai": "Đó chính là xác suất có điều kiện: 53,8% → 96,2% khi biết bạn ấy tự học hơn 4 giờ.",
    "h": "595836d5005e3"
   },
   {
    "k": "ds",
    "id": "bai05-q42",
    "q": "Trung vị của một dãy số liệu luôn là một giá trị có mặt trong dãy.",
    "giai": "Dãy có số chẵn giá trị thì trung vị là trung bình hai giá trị giữa — có thể không có mặt trong dãy.",
    "h": "2daadbeee5cbb"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
