window.BAI = {
 "bai": 9,
 "ma": "bai09",
 "nhan": "Bài 9",
 "tieu_de": "Đọc dữ liệu bằng biểu đồ",
 "phan": "Module 07 · Exploratory Data Analysis",
 "cau_hoi": "Làm sao nhìn ra câu chuyện mà một bảng số đang giấu?",
 "gioi_thieu": [
  "Bảng khối 10 có 240 dòng và 10 cột — hơn hai nghìn con số. Không ai đọc hết từng ô. Người làm dữ liệu <b>nhìn tổng quan</b> rồi <b>vẽ</b>.",
  "Năm chặng dưới đây là bước đầu của <b>phân tích khám phá dữ liệu (EDA)</b>: soi bảng, đọc hình dạng một cột số bằng biểu đồ tần số, đếm cột chữ bằng biểu đồ cột, so các nhóm bằng biểu đồ hộp, và cảnh giác với biểu đồ gây hiểu nhầm. Bảng dùng trong bài là bảng mô phỏng.",
  "Con dùng lại số trung bình, trung vị, mốt (Bài 5) và tứ phân vị (Bài 7, Toán 10)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai09",
 "muc_tieu": [
  "Nêu được mục đích của phân tích khám phá dữ liệu (EDA).",
  "Dùng head, info, describe để nhìn tổng quan một bảng dữ liệu.",
  "Đọc được hình dạng phân bố (cân đối, lệch phải, lệch trái) trên biểu đồ tần số.",
  "Đọc và so sánh các nhóm bằng biểu đồ hộp.",
  "Chọn đúng loại biểu đồ và nhận ra biểu đồ gây hiểu nhầm."
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
   "ten": "EDA và nhìn tổng quan một bảng",
   "ten_ngan": "Nhìn tổng quan",
   "phut": 4,
   "muc_tieu": "nêu được mục đích của EDA và dùng các lệnh xem tổng quan một bảng.",
   "khoi_dong": "Được giao một bảng 240 dòng. Con làm gì đầu tiên?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Phân tích khám phá dữ liệu (EDA — Exploratory Data Analysis)",
     "html": "Bước <b>nhìn và vẽ</b> dữ liệu trước khi xây model: bảng có gì, mỗi cột phân bố thế nào, các nhóm khác nhau ra sao, có điều gì bất thường. EDA đặt câu hỏi; model chưa được xây.",
     "ky_hieu": "Trực quan hoá dữ liệu (data visualization): biến số liệu thành hình để mắt người đọc nhanh."
    },
    {
     "t": "anh",
     "cap": "Trực quan hoá dữ liệu là gì",
     "alt": "Trực quan hoá dữ liệu là gì",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251211110903742649/what_is_data_visualization_.webp",
     "du_phong": "img/minh-hoa-truc-quan-hoa-du-lieu-la-gi.png",
     "nguon": {
      "ten": "GeeksforGeeks — Data visualization and its importance",
      "url": "https://www.geeksforgeeks.org/data-visualization/data-visualization-and-its-importance/"
     },
     "chu_giai": [
      [
       "What is Data Visualization?",
       "Trực quan hoá dữ liệu là gì?"
      ],
      [
       "Turning data into visual formats like charts, graphs, and maps",
       "Biến dữ liệu thành biểu đồ, đồ thị, bản đồ"
      ],
      [
       "Makes complex data easy to understand at a glance",
       "Giúp dữ liệu phức tạp dễ hiểu chỉ trong một cái nhìn"
      ],
      [
       "Helps identify trends, patterns, and insights",
       "Giúp nhận ra xu hướng, quy luật và điều đáng chú ý"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Lệnh Pandas",
      "Cho biết",
      "Với bảng khối 10"
     ],
     "dong": [
      [
       "<code>df.head()</code>",
       "Vài dòng đầu",
       "Tên cột, kiểu giá trị"
      ],
      [
       "<code>df.shape</code>",
       "(số dòng, số cột)",
       "(240, 10)"
      ],
      [
       "<code>df.info()</code>",
       "Kiểu và số ô có dữ liệu của từng cột",
       "0 ô trống"
      ],
      [
       "<code>df.describe()</code>",
       "count, mean, std, min, 25%, 50%, 75%, max",
       "Phút mạng: trung bình 152.8, trung vị 135"
      ],
      [
       "<code>df[\"cột\"].value_counts()</code>",
       "Đếm từng giá trị của cột chữ",
       "Mỗi lớp 30 bạn"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Kết quả describe() của một bảng rượu vang: mỗi hàng một cột số",
     "alt": "Kết quả describe() của một bảng rượu vang: mỗi hàng một cột số",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250731152213452639/describe.webp",
     "du_phong": "img/minh-hoa-bang-thong-ke-mo-ta-describe.png",
     "nguon": {
      "ten": "GeeksforGeeks — Exploratory data analysis in python",
      "url": "https://www.geeksforgeeks.org/data-analysis/exploratory-data-analysis-in-python/"
     },
     "chu_giai": [
      [
       "count",
       "Số ô có dữ liệu"
      ],
      [
       "mean, std",
       "Số trung bình, độ lệch chuẩn"
      ],
      [
       "min, max",
       "Giá trị nhỏ nhất, lớn nhất"
      ],
      [
       "25%, 50%, 75%",
       "Tứ phân vị Q1, trung vị Q2, Q3"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Vẽ ngay mà chưa xem bảng có bao nhiêu dòng, có ô trống không.",
      "Đọc describe() mà quên rằng 50% chính là trung vị."
     ]
    },
    {
     "t": "tom_tat",
     "html": "EDA là nhìn và vẽ để hiểu dữ liệu trước khi xây model. Bắt đầu bằng head, shape, info, describe."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Kaggle Learn — Data Visualization",
       "url": "https://www.kaggle.com/learn/data-visualization",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "pandas — DataFrame.describe",
       "url": "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "dd",
     "id": "bai09-q1",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "50% là giá trị đứng giữa — trung vị; count đếm số ô có dữ liệu.",
     "goi_y": "Trung vị chia dãy thành hai nửa bằng nhau.",
     "mau": "Trong bảng describe(), dòng {0} là trung vị, dòng {1} là số ô có dữ liệu.",
     "o": [
      [
       "50%",
       "mean",
       "25%",
       "max"
      ],
      [
       "count",
       "mean",
       "std",
       "min"
      ]
     ],
     "h": "d9b587316eb97"
    },
    {
     "k": "mc",
     "id": "bai09-q2",
     "q": "Lệnh nào cho biết bảng có bao nhiêu dòng và bao nhiêu cột?",
     "giai": "shape trả về (số dòng, số cột).",
     "goi_y": "Xem bảng năm lệnh ở trên.",
     "a": [
      "df.shape",
      "df.head()",
      "df.describe()",
      "df.value_counts()"
     ],
     "h": "876664595d8ef"
    },
    {
     "k": "ds",
     "id": "bai09-q3",
     "q": "EDA là bước xây model dự đoán.",
     "giai": "EDA là nhìn và vẽ dữ liệu để hiểu nó — trước khi xây model.",
     "goi_y": "Chữ E trong EDA là Exploratory — khám phá.",
     "h": "261fa3bdd36b5"
    }
   ]
  },
  {
   "ten": "Biểu đồ tần số và hình dạng phân bố",
   "ten_ngan": "Biểu đồ tần số",
   "phut": 5,
   "muc_tieu": "đọc được hình dạng phân bố của một cột số trên biểu đồ tần số.",
   "khoi_dong": "Số trung bình phút mạng là 152.8 nhưng trung vị chỉ 135. Hình dạng dữ liệu như thế nào thì hai số này lệch nhau?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Biểu đồ tần số (histogram)",
     "html": "Chia trục ngang thành các khoảng bằng nhau, mỗi cột cao bằng <b>số giá trị rơi vào khoảng đó</b>. Biểu đồ cho thấy dữ liệu tập trung ở đâu và trải ra thế nào.",
     "ky_hieu": "<code>plt.hist(df[\"cột\"], bins=10)</code> — bins là số khoảng"
    },
    {
     "t": "anh",
     "cap": "Phút mạng xã hội của 240 học sinh",
     "alt": "Phút mạng xã hội của 240 học sinh",
     "src": "img/bieu-do-tan-suat-phut-mang-xa-hoi.png"
    },
    {
     "t": "dinh_nghia",
     "ten": "Ba hình dạng phân bố",
     "html": "<b>Cân đối</b>: hai bên gần như đối xứng. <b>Lệch phải</b>: đuôi dài kéo sang phải (vài giá trị rất lớn). <b>Lệch trái</b>: đuôi dài kéo sang trái.",
     "ky_hieu": "Lệch phải: số trung bình &gt; trung vị · Lệch trái: số trung bình &lt; trung vị"
    },
    {
     "t": "anh",
     "cap": "Ba hình dạng phân bố",
     "alt": "Ba hình dạng phân bố",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260317165726003916/customized_histogram.webp",
     "du_phong": "img/minh-hoa-ba-dang-lech-cua-phan-bo.png",
     "nguon": {
      "ten": "GeeksforGeeks — Advanced eda",
      "url": "https://www.geeksforgeeks.org/data-analysis/advanced-eda/"
     },
     "chu_giai": [
      [
       "Right Skew",
       "Lệch phải — đuôi dài bên phải"
      ],
      [
       "Left Skew",
       "Lệch trái — đuôi dài bên trái"
      ],
      [
       "Zero Skew",
       "Không lệch — cân đối"
      ],
      [
       "Frequency",
       "Tần số"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc hai cột của bảng khối 10",
     "de": null,
     "cot": [
      "Cột",
      "Số trung bình",
      "Trung vị",
      "Hình dạng",
      "Nên mô tả bằng"
     ],
     "dong": [
      [
       "Phút mạng xã hội",
       "152.8",
       "135",
       "Lệch phải",
       "<b>Trung vị</b>"
      ],
      [
       "Điểm học kỳ",
       "5.26",
       "5.2",
       "Gần cân đối",
       "Số trung bình"
      ],
      [
       "Số lần nộp trễ",
       "1.48",
       "1",
       "Lệch phải rất mạnh",
       "<b>Trung vị</b>"
      ]
     ],
     "ket_luan": "Lệch phải thì vài giá trị lớn kéo số trung bình về bên phải — giống bài học giá trị bất thường ở Bài 5.",
     "nhan_manh": [
      0,
      2
     ]
    },
    {
     "t": "anh",
     "cap": "Điểm học kỳ của 240 học sinh",
     "alt": "Điểm học kỳ của 240 học sinh",
     "src": "img/bieu-do-tan-suat-diem.png"
    },
    {
     "t": "histogram",
     "tieu_de": "đổi cột, đổi số khoảng",
     "huong_dan": "Chọn một cột, kéo thanh trượt đổi số khoảng (bins). Cột nào <b>lệch phải</b>? Nhìn đường đỏ (số trung bình) và đường xanh đậm (trung vị) để kiểm tra. Số khoảng quá ít hay quá nhiều thì hình dạng còn rõ không?",
     "cot": [
      {
       "ten": "Phút mạng xã hội",
       "ma_cot": "df[\"PhutMangXH\"]",
       "nhan_x": "Phút mạng xã hội mỗi ngày",
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
       ]
      },
      {
       "ten": "Điểm học kỳ",
       "ma_cot": "df[\"Score\"]",
       "nhan_x": "Điểm học kỳ",
       "gia_tri": [
        3.4,
        6.2,
        5.3,
        3.6,
        8.5,
        6.7,
        4.9,
        4.7,
        2.2,
        2.7,
        4.2,
        3.4,
        8.0,
        9.2,
        4.3,
        6.3,
        5.1,
        5.2,
        7.9,
        3.2,
        7.4,
        5.3,
        3.3,
        7.0,
        4.3,
        5.3,
        7.3,
        6.4,
        2.7,
        4.0,
        4.2,
        3.5,
        4.6,
        3.3,
        5.7,
        3.9,
        3.8,
        6.3,
        6.0,
        4.0,
        4.9,
        3.0,
        3.2,
        7.5,
        5.8,
        5.2,
        5.4,
        5.8,
        2.0,
        5.2,
        3.3,
        3.4,
        4.3,
        8.2,
        5.7,
        6.1,
        4.9,
        3.7,
        2.6,
        4.7,
        6.3,
        3.1,
        7.5,
        4.4,
        5.3,
        3.2,
        5.2,
        6.2,
        7.1,
        8.6,
        6.4,
        6.9,
        2.2,
        7.0,
        3.7,
        6.3,
        5.7,
        6.6,
        9.2,
        8.9,
        3.2,
        6.0,
        6.3,
        4.8,
        6.5,
        5.8,
        5.9,
        5.2,
        2.9,
        3.5,
        3.8,
        9.1,
        4.4,
        7.4,
        4.9,
        3.1,
        7.9,
        2.4,
        5.3,
        4.5,
        6.9,
        6.6,
        7.6,
        8.6,
        7.6,
        3.7,
        4.8,
        7.3,
        3.3,
        3.7,
        3.8,
        7.8,
        6.7,
        7.2,
        3.3,
        3.1,
        4.8,
        2.7,
        6.8,
        8.1,
        8.2,
        4.8,
        1.7,
        4.5,
        6.7,
        6.5,
        3.2,
        5.4,
        2.5,
        4.3,
        4.0,
        6.0,
        5.4,
        7.1,
        4.0,
        1.8,
        6.0,
        4.8,
        5.5,
        4.7,
        3.3,
        3.8,
        7.1,
        5.0,
        4.6,
        3.9,
        7.5,
        5.7,
        6.8,
        2.6,
        4.9,
        2.1,
        4.9,
        7.2,
        4.5,
        3.5,
        5.9,
        5.8,
        3.2,
        7.6,
        8.0,
        2.6,
        4.3,
        7.1,
        2.9,
        2.9,
        6.8,
        7.5,
        5.4,
        3.9,
        5.4,
        5.4,
        3.9,
        4.2,
        5.7,
        7.6,
        5.6,
        4.6,
        3.2,
        6.8,
        3.2,
        5.9,
        8.3,
        6.6,
        6.0,
        5.0,
        7.6,
        3.6,
        6.1,
        6.1,
        6.7,
        5.6,
        7.8,
        8.2,
        4.0,
        4.6,
        4.7,
        5.3,
        5.7,
        6.2,
        4.2,
        2.1,
        8.0,
        6.2,
        4.9,
        3.2,
        5.3,
        3.4,
        6.0,
        3.2,
        3.4,
        8.3,
        7.7,
        5.0,
        6.2,
        4.0,
        7.3,
        7.6,
        4.0,
        7.9,
        4.3,
        7.5,
        3.3,
        8.3,
        2.9,
        3.5,
        5.1,
        4.0,
        7.4,
        2.6,
        7.6,
        4.3,
        5.7,
        1.9,
        3.4,
        3.8,
        8.5,
        5.5,
        5.3,
        5.4
       ]
      },
      {
       "ten": "Số lần nộp trễ",
       "ma_cot": "df[\"SoLanNopTre\"]",
       "nhan_x": "Số lần nộp trễ",
       "gia_tri": [
        0,
        0,
        2,
        2,
        3,
        3,
        0,
        9,
        2,
        0,
        3,
        0,
        3,
        7,
        0,
        3,
        0,
        1,
        3,
        4,
        1,
        1,
        2,
        1,
        0,
        1,
        4,
        2,
        3,
        2,
        3,
        1,
        5,
        1,
        5,
        3,
        6,
        2,
        2,
        1,
        3,
        4,
        1,
        0,
        2,
        0,
        1,
        0,
        0,
        0,
        6,
        4,
        2,
        1,
        0,
        2,
        1,
        3,
        3,
        2,
        3,
        1,
        5,
        0,
        2,
        1,
        0,
        14,
        0,
        0,
        0,
        0,
        0,
        3,
        0,
        1,
        0,
        1,
        2,
        0,
        0,
        4,
        0,
        0,
        3,
        1,
        1,
        0,
        2,
        0,
        4,
        4,
        0,
        0,
        1,
        4,
        2,
        1,
        0,
        4,
        8,
        2,
        1,
        3,
        0,
        1,
        1,
        2,
        0,
        2,
        0,
        1,
        0,
        3,
        2,
        0,
        1,
        0,
        0,
        0,
        5,
        0,
        0,
        0,
        0,
        3,
        0,
        0,
        1,
        2,
        0,
        0,
        3,
        4,
        2,
        0,
        2,
        2,
        2,
        1,
        0,
        0,
        0,
        2,
        5,
        4,
        0,
        0,
        1,
        0,
        5,
        0,
        1,
        1,
        3,
        0,
        1,
        1,
        3,
        1,
        2,
        1,
        0,
        0,
        2,
        0,
        0,
        1,
        0,
        1,
        0,
        1,
        1,
        0,
        2,
        2,
        2,
        0,
        1,
        0,
        3,
        0,
        2,
        1,
        5,
        0,
        1,
        0,
        0,
        1,
        2,
        2,
        1,
        0,
        0,
        3,
        2,
        0,
        0,
        0,
        2,
        2,
        1,
        3,
        0,
        0,
        1,
        3,
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        3,
        1,
        0,
        2,
        0,
        0,
        2,
        0,
        2,
        0,
        2,
        3,
        0,
        1,
        1,
        0,
        1,
        0,
        5,
        1,
        0,
        3,
        2,
        0,
        0
       ]
      },
      {
       "ten": "Giờ ngủ",
       "ma_cot": "df[\"SleepHours\"]",
       "nhan_x": "Giờ ngủ mỗi ngày",
       "gia_tri": [
        5.1,
        5.2,
        5.5,
        6.5,
        8.7,
        8.8,
        8.6,
        8.7,
        5.5,
        6.0,
        4.7,
        5.3,
        9.4,
        8.3,
        7.4,
        8.9,
        7.1,
        8.6,
        8.0,
        5.7,
        5.8,
        8.0,
        6.2,
        6.8,
        6.9,
        6.5,
        7.9,
        8.8,
        7.4,
        5.0,
        8.5,
        8.5,
        9.5,
        5.6,
        5.2,
        5.8,
        6.4,
        8.6,
        5.0,
        6.2,
        4.8,
        8.0,
        7.2,
        7.7,
        9.3,
        5.5,
        6.0,
        4.9,
        4.8,
        4.8,
        4.7,
        5.7,
        9.5,
        7.3,
        6.2,
        9.3,
        7.2,
        7.1,
        7.0,
        5.3,
        5.8,
        7.9,
        9.2,
        5.1,
        6.7,
        7.3,
        6.1,
        8.9,
        8.9,
        7.5,
        6.5,
        7.5,
        5.3,
        8.5,
        5.9,
        7.9,
        8.1,
        5.8,
        9.1,
        8.1,
        6.6,
        8.6,
        9.5,
        6.3,
        5.0,
        8.2,
        8.8,
        4.7,
        5.1,
        4.7,
        7.8,
        9.3,
        8.5,
        8.1,
        7.5,
        8.1,
        6.4,
        5.3,
        4.6,
        7.1,
        6.8,
        8.0,
        9.3,
        6.7,
        8.2,
        6.0,
        8.1,
        6.4,
        8.6,
        8.6,
        4.5,
        5.3,
        7.0,
        4.6,
        8.6,
        4.8,
        9.3,
        5.7,
        5.0,
        5.3,
        6.3,
        5.7,
        6.3,
        8.0,
        4.5,
        6.5,
        6.8,
        5.8,
        5.2,
        4.5,
        5.4,
        6.1,
        5.5,
        8.6,
        8.7,
        6.9,
        4.9,
        4.8,
        8.0,
        6.1,
        7.3,
        9.4,
        8.0,
        6.0,
        8.2,
        6.6,
        8.1,
        7.6,
        8.2,
        9.4,
        4.8,
        9.5,
        5.7,
        6.6,
        6.6,
        7.6,
        8.2,
        9.0,
        7.4,
        8.8,
        8.2,
        5.5,
        7.5,
        5.9,
        6.9,
        9.0,
        7.6,
        5.0,
        6.8,
        6.8,
        6.0,
        6.8,
        8.1,
        6.6,
        8.8,
        4.7,
        8.6,
        4.8,
        6.3,
        6.9,
        6.1,
        8.3,
        8.4,
        8.1,
        7.4,
        6.6,
        4.6,
        8.9,
        7.0,
        7.2,
        6.5,
        7.4,
        7.5,
        8.5,
        5.3,
        9.2,
        8.3,
        9.1,
        8.5,
        6.2,
        7.1,
        7.7,
        9.2,
        4.7,
        7.7,
        8.0,
        7.3,
        8.1,
        9.4,
        7.0,
        6.1,
        6.1,
        5.3,
        8.2,
        7.1,
        6.6,
        7.5,
        5.1,
        7.5,
        6.2,
        8.3,
        7.0,
        8.9,
        9.1,
        9.0,
        5.1,
        7.1,
        8.2,
        8.3,
        9.4,
        8.4,
        6.7,
        5.9,
        6.4,
        8.9,
        4.9,
        6.7,
        7.3,
        4.8,
        9.0
       ]
      }
     ],
     "mac_dinh": 12,
     "bins_min": 3,
     "bins_max": 40,
     "duong": true,
     "so_le": 2,
     "ghi": "Dữ liệu mô phỏng, 240 bạn. Hình dạng phân bố là của dữ liệu; số khoảng chỉ là cách nhìn."
    },
    {
     "t": "anh",
     "cap": "Trên phân bố lệch phải: mốt ở đỉnh, trung vị ở giữa, số trung bình bị kéo xa nhất",
     "alt": "Trên phân bố lệch phải: mốt ở đỉnh, trung vị ở giữa, số trung bình bị kéo xa nhất",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250501122658765639/mean_mod_median.webp",
     "du_phong": "img/minh-hoa-mode-median-mean-tren-phan-bo-lech.png",
     "nguon": {
      "ten": "GeeksforGeeks — Advanced eda",
      "url": "https://www.geeksforgeeks.org/data-analysis/advanced-eda/"
     },
     "chu_giai": [
      [
       "MODE — the most frequent value",
       "Mốt — giá trị gặp nhiều nhất (đỉnh)"
      ],
      [
       "MEDIAN — the middle value",
       "Trung vị — chia diện tích làm đôi 50% / 50%"
      ],
      [
       "MEAN — the average",
       "Số trung bình"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nhầm “lệch phải” là đỉnh nằm bên phải — thật ra là ĐUÔI dài bên phải, đỉnh thường lệch về bên trái.",
      "Dùng số trung bình để mô tả cột lệch mạnh."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Biểu đồ tần số cho thấy hình dạng: cân đối, lệch phải (trung bình > trung vị), lệch trái (trung bình < trung vị)."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Toán 10 — chương Thống kê: mẫu số liệu, tần số",
       "url": null,
       "ghi_chu": "SGK"
      },
      {
       "ten": "Matplotlib — hist",
       "url": "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q4",
     "q": "Một cột có số trung bình 1.43 nhưng trung vị là 1. Hình dạng phân bố nhiều khả năng là gì?",
     "giai": "Số trung bình lớn hơn trung vị: vài giá trị lớn kéo sang phải.",
     "goi_y": "Số trung bình bị kéo về phía đuôi dài.",
     "a": [
      "Lệch phải",
      "Lệch trái",
      "Cân đối",
      "Không đọc được"
     ],
     "h": "1cbd434923350e"
    },
    {
     "k": "mc",
     "id": "bai09-q5",
     "q": "Trên biểu đồ tần số, chiều cao mỗi cột cho biết điều gì?",
     "giai": "Cột càng cao, càng nhiều giá trị nằm trong khoảng.",
     "goi_y": "Trục đứng của biểu đồ ghi gì?",
     "a": [
      "Số giá trị rơi vào khoảng đó",
      "Giá trị lớn nhất của khoảng đó",
      "Số trung bình của cả cột dữ liệu",
      "Thứ tự của khoảng trên trục ngang"
     ],
     "h": "17f265c4f90d1"
    },
    {
     "k": "ds",
     "id": "bai09-q6",
     "q": "Với cột lệch phải, số trung bình mô tả “một bạn bình thường” tốt hơn trung vị.",
     "giai": "Lệch phải thì số trung bình bị kéo lên — trung vị đại diện tốt hơn.",
     "goi_y": "Nhớ phút mạng: trung bình hay trung vị gần với đa số các bạn?",
     "h": "5f6a6ec1825b1"
    }
   ]
  },
  {
   "ten": "Biểu đồ cột đếm và biểu đồ tròn cho cột chữ",
   "ten_ngan": "Cột chữ",
   "phut": 3,
   "muc_tieu": "chọn được biểu đồ phù hợp để mô tả một cột chữ hoặc một cột số nguyên ít giá trị.",
   "khoi_dong": "Cột Lớp, cột Giới tính là chữ. Không vẽ được biểu đồ tần số — vậy vẽ gì?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Biểu đồ cột đếm (count plot)",
     "html": "Mỗi giá trị một cột, cột cao bằng <b>số lần giá trị đó xuất hiện</b>. Dùng cho cột chữ hoặc cột số nguyên có ít giá trị. Cột cao nhất là <b>mốt</b>.",
     "ky_hieu": "<code>df[\"cột\"].value_counts().plot(kind=\"bar\")</code>"
    },
    {
     "t": "anh",
     "cap": "Số học sinh theo số lần nộp trễ — cột cao nhất ở 0",
     "alt": "Số học sinh theo số lần nộp trễ — cột cao nhất ở 0",
     "src": "img/so-hoc-sinh-theo-so-lan-nop-tre.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc biểu đồ số lần nộp trễ",
     "de": null,
     "cot": [
      "Câu hỏi",
      "Trả lời"
     ],
     "dong": [
      [
       "Mốt là bao nhiêu?",
       "0 lần (93 bạn)"
      ],
      [
       "Có bao nhiêu bạn nộp trễ từ 4 lần trở lên?",
       "25"
      ],
      [
       "Giá trị lớn nhất?",
       "14 lần — chỉ 1 bạn, cần kiểm tra lại"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Biểu đồ cột đếm số chai rượu theo điểm chất lượng",
     "alt": "Biểu đồ cột đếm số chai rượu theo điểm chất lượng",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250508160319714718/eda7.webp",
     "du_phong": "img/minh-hoa-bieu-do-cot-dem-so-luong.png",
     "nguon": {
      "ten": "GeeksforGeeks — Exploratory data analysis in python",
      "url": "https://www.geeksforgeeks.org/data-analysis/exploratory-data-analysis-in-python/"
     },
     "chu_giai": [
      [
       "Count Plot of Quality",
       "Biểu đồ cột đếm theo điểm chất lượng"
      ],
      [
       "Quality",
       "Điểm chất lượng (3 đến 8)"
      ],
      [
       "Count",
       "Số lượng"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Biểu đồ tròn (pie chart)",
     "html": "Mỗi phần là tỉ lệ của một nhóm trong tổng. Chỉ dùng khi ít nhóm (2 – 5) và các phần cộng lại đúng 100%.",
     "ky_hieu": null
    },
    {
     "t": "anh",
     "cap": "Một biểu đồ tròn không có chú thích tên nhóm — người xem không biết phần 35% là gì",
     "alt": "Một biểu đồ tròn không có chú thích tên nhóm — người xem không biết phần 35% là gì",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260317151457654718/123.webp",
     "du_phong": "img/minh-hoa-bieu-do-tron.png",
     "nguon": {
      "ten": "GeeksforGeeks — Advanced eda",
      "url": "https://www.geeksforgeeks.org/data-analysis/advanced-eda/"
     },
     "chu_giai": [
      [
       "35%, 23%, 20%, 18%, 4%",
       "Tỉ lệ của từng nhóm — cộng lại 100%, nhưng hình không ghi tên nhóm"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Vẽ biểu đồ tròn khi có quá nhiều nhóm — các lát nhỏ không đọc được.",
      "Vẽ biểu đồ không có tên trục, tên nhóm."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Cột chữ: biểu đồ cột đếm (cột cao nhất là mốt). Biểu đồ tròn chỉ cho ít nhóm, luôn ghi chú thích."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q7",
     "q": "Muốn biết mỗi lớp trong khối có bao nhiêu học sinh, vẽ biểu đồ nào?",
     "giai": "Lớp là cột chữ — đếm số bạn mỗi lớp bằng biểu đồ cột đếm.",
     "goi_y": "Cột Lớp là chữ hay số?",
     "a": [
      "Biểu đồ cột đếm",
      "Biểu đồ tần số",
      "Biểu đồ hộp",
      "Biểu đồ đường"
     ],
     "h": "1f22a437733365"
    },
    {
     "k": "ds",
     "id": "bai09-q8",
     "q": "Trên biểu đồ cột đếm, cột cao nhất cho biết mốt của cột dữ liệu.",
     "giai": "Mốt là giá trị gặp nhiều nhất — cột cao nhất.",
     "goi_y": "Nhớ định nghĩa mốt ở Bài 5.",
     "h": "e1e8a36fcc5a7"
    }
   ]
  },
  {
   "ten": "Biểu đồ hộp — so sánh các nhóm",
   "ten_ngan": "Biểu đồ hộp",
   "phut": 5,
   "muc_tieu": "đọc được biểu đồ hộp và dùng nó để so sánh các nhóm.",
   "khoi_dong": "Các bạn Đạt và Chưa đạt khác nhau về giờ tự học đến mức nào? Làm sao vẽ hai nhóm trên cùng một hình?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Biểu đồ hộp (box plot)",
     "html": "Hộp kéo dài từ Q<sub>1</sub> tới Q<sub>3</sub>, vạch giữa hộp là trung vị. Râu kéo tới giá trị nhỏ nhất và lớn nhất <b>không bất thường</b>; chấm tròn ngoài râu là giá trị bất thường (quy tắc 1.5·Δ<sub>Q</sub> — Bài 7).",
     "ky_hieu": "Hộp chứa 50% dữ liệu ở giữa · <code>df.boxplot(column=\"cột\", by=\"nhóm\")</code>"
    },
    {
     "t": "anh",
     "cap": "Cấu tạo biểu đồ hộp",
     "alt": "Cấu tạo biểu đồ hộp",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250819105344705834/boxplot.webp",
     "du_phong": "img/minh-hoa-cau-tao-bieu-do-hop.png",
     "nguon": {
      "ten": "GeeksforGeeks — Advanced eda",
      "url": "https://www.geeksforgeeks.org/data-analysis/advanced-eda/"
     },
     "chu_giai": [
      [
       "IQR (Q3 − Q1)",
       "Khoảng tứ phân vị Δ<sub>Q</sub>"
      ],
      [
       "Q1, Q2/Median, Q3",
       "Tứ phân vị thứ nhất, trung vị, tứ phân vị thứ ba"
      ],
      [
       "Minimum / Maximum Non-outlier",
       "Giá trị nhỏ / lớn nhất không bất thường (đầu râu)"
      ],
      [
       "Q1 − 1.5*IQR, Q3 + 1.5*IQR",
       "Hai ngưỡng của giá trị bất thường"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Giờ tự học của nhóm Đạt và nhóm Chưa đạt",
     "alt": "Giờ tự học của nhóm Đạt và nhóm Chưa đạt",
     "src": "img/gio-tu-hoc-theo-ket-qua.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc hai hộp",
     "de": null,
     "cot": [
      "",
      "Chưa đạt",
      "Đạt"
     ],
     "dong": [
      [
       "Trung vị",
       "1.9 giờ",
       "5.4 giờ"
      ],
      [
       "Hộp (Q<sub>1</sub> – Q<sub>3</sub>)",
       "1.3 – 2.5",
       "4.1 – 6.3"
      ],
      [
       "Giá trị bất thường",
       "Vài bạn học trên 4.5 giờ vẫn Chưa đạt",
       "Không có"
      ]
     ],
     "ket_luan": "Hai hộp không chồng lên nhau: giờ tự học của hai nhóm khác nhau rõ rệt. Nhưng vẫn có bạn học nhiều mà Chưa đạt — biểu đồ hộp cho thấy cả ngoại lệ.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Nồng độ cồn của rượu vang theo từng điểm chất lượng",
     "alt": "Nồng độ cồn của rượu vang theo từng điểm chất lượng",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250728152858175356/box-plot.png",
     "du_phong": "img/minh-hoa-bieu-do-hop-theo-tung-nhom.png",
     "nguon": {
      "ten": "GeeksforGeeks — Exploratory data analysis in python",
      "url": "https://www.geeksforgeeks.org/data-analysis/exploratory-data-analysis-in-python/"
     },
     "chu_giai": [
      [
       "alcohol",
       "Nồng độ cồn"
      ],
      [
       "quality",
       "Điểm chất lượng"
      ],
      [
       "o (chấm tròn)",
       "Giá trị bất thường"
      ]
     ]
    },
    {
     "t": "bieu_do_hop",
     "tieu_de": "so sánh các nhóm bằng biểu đồ hộp",
     "huong_dan": "Chọn một cột số và một cách chia nhóm. So <b>trung vị</b> (vạch đỏ) và <b>độ rộng hộp</b> của các nhóm. Cách chia nào làm hai hộp tách hẳn nhau? Cách chia nào gần như không khác gì?",
     "cot": [
      "StudyHours",
      "Score",
      "SleepHours",
      "PhutMangXH"
     ],
     "nhom": [
      "Kết quả",
      "Giới tính",
      "Lớp",
      "Cả khối"
     ],
     "bang": {
      "Score|Kết quả": {
       "Chưa đạt": {
        "n": 111,
        "q1": 3.2,
        "q2": 3.7,
        "q3": 4.3,
        "min": 1.7,
        "max": 4.9,
        "rau_duoi": 1.7,
        "rau_tren": 4.9,
        "la": []
       },
       "Đạt": {
        "n": 129,
        "q1": 5.7,
        "q2": 6.5,
        "q3": 7.5,
        "min": 5.0,
        "max": 9.2,
        "rau_duoi": 5.0,
        "rau_tren": 9.2,
        "la": []
       }
      },
      "Score|Giới tính": {
       "Nam": {
        "n": 115,
        "q1": 3.7,
        "q2": 5.2,
        "q3": 6.65,
        "min": 1.7,
        "max": 9.2,
        "rau_duoi": 1.7,
        "rau_tren": 9.2,
        "la": []
       },
       "Nu": {
        "n": 125,
        "q1": 3.9,
        "q2": 5.4,
        "q3": 6.5,
        "min": 2.0,
        "max": 9.2,
        "rau_duoi": 2.0,
        "rau_tren": 9.2,
        "la": []
       }
      },
      "Score|Lớp": {
       "10A1": {
        "n": 30,
        "q1": 4.325,
        "q2": 5.699999999999999,
        "q3": 7.375,
        "min": 1.8,
        "max": 8.9,
        "rau_duoi": 1.8,
        "rau_tren": 8.9,
        "la": []
       },
       "10A2": {
        "n": 30,
        "q1": 3.6,
        "q2": 5.0,
        "q3": 6.0,
        "min": 2.0,
        "max": 8.2,
        "rau_duoi": 2.0,
        "rau_tren": 8.2,
        "la": []
       },
       "10A3": {
        "n": 30,
        "q1": 3.225,
        "q2": 4.1,
        "q3": 5.275,
        "min": 1.9,
        "max": 8.2,
        "rau_duoi": 1.9,
        "rau_tren": 8.2,
        "la": []
       },
       "10A4": {
        "n": 30,
        "q1": 3.475,
        "q2": 4.4,
        "q3": 5.475,
        "min": 1.7,
        "max": 8.0,
        "rau_duoi": 1.7,
        "rau_tren": 8.0,
        "la": []
       },
       "10A5": {
        "n": 30,
        "q1": 3.8249999999999997,
        "q2": 4.75,
        "q3": 6.375,
        "min": 3.1,
        "max": 9.1,
        "rau_duoi": 3.1,
        "rau_tren": 9.1,
        "la": []
       },
       "10A6": {
        "n": 30,
        "q1": 4.3,
        "q2": 5.75,
        "q3": 6.875,
        "min": 2.7,
        "max": 8.5,
        "rau_duoi": 2.7,
        "rau_tren": 8.5,
        "la": []
       },
       "10A7": {
        "n": 30,
        "q1": 3.8499999999999996,
        "q2": 5.65,
        "q3": 6.6,
        "min": 2.6,
        "max": 9.2,
        "rau_duoi": 2.6,
        "rau_tren": 9.2,
        "la": []
       },
       "10A8": {
        "n": 30,
        "q1": 4.45,
        "q2": 5.7,
        "q3": 6.775,
        "min": 3.2,
        "max": 9.2,
        "rau_duoi": 3.2,
        "rau_tren": 9.2,
        "la": []
       }
      },
      "Score|Cả khối": {
       "Cả khối": {
        "n": 240,
        "q1": 3.8,
        "q2": 5.2,
        "q3": 6.625,
        "min": 1.7,
        "max": 9.2,
        "rau_duoi": 1.7,
        "rau_tren": 9.2,
        "la": []
       }
      },
      "StudyHours|Kết quả": {
       "Chưa đạt": {
        "n": 111,
        "q1": 1.3,
        "q2": 1.9,
        "q3": 2.5,
        "min": 0.5,
        "max": 4.8,
        "rau_duoi": 0.5,
        "rau_tren": 3.8,
        "la": [
         4.6,
         4.7,
         4.7,
         4.8
        ]
       },
       "Đạt": {
        "n": 129,
        "q1": 4.1,
        "q2": 5.4,
        "q3": 6.3,
        "min": 2.4,
        "max": 7.0,
        "rau_duoi": 2.4,
        "rau_tren": 7.0,
        "la": []
       }
      },
      "StudyHours|Giới tính": {
       "Nam": {
        "n": 115,
        "q1": 1.9,
        "q2": 3.3,
        "q3": 5.4,
        "min": 0.5,
        "max": 7.0,
        "rau_duoi": 0.5,
        "rau_tren": 7.0,
        "la": []
       },
       "Nu": {
        "n": 125,
        "q1": 2.0,
        "q2": 3.7,
        "q3": 5.5,
        "min": 0.5,
        "max": 7.0,
        "rau_duoi": 0.5,
        "rau_tren": 7.0,
        "la": []
       }
      },
      "StudyHours|Lớp": {
       "10A1": {
        "n": 30,
        "q1": 3.2,
        "q2": 4.75,
        "q3": 6.225,
        "min": 0.6,
        "max": 6.9,
        "rau_duoi": 0.6,
        "rau_tren": 6.9,
        "la": []
       },
       "10A2": {
        "n": 30,
        "q1": 1.9249999999999998,
        "q2": 2.85,
        "q3": 4.7,
        "min": 0.5,
        "max": 6.8,
        "rau_duoi": 0.5,
        "rau_tren": 6.8,
        "la": []
       },
       "10A3": {
        "n": 30,
        "q1": 1.8,
        "q2": 2.45,
        "q3": 4.55,
        "min": 0.5,
        "max": 6.8,
        "rau_duoi": 0.5,
        "rau_tren": 6.8,
        "la": []
       },
       "10A4": {
        "n": 30,
        "q1": 2.0,
        "q2": 3.05,
        "q3": 4.5,
        "min": 0.5,
        "max": 6.7,
        "rau_duoi": 0.5,
        "rau_tren": 6.7,
        "la": []
       },
       "10A5": {
        "n": 30,
        "q1": 2.025,
        "q2": 3.3499999999999996,
        "q3": 5.4,
        "min": 0.7,
        "max": 6.7,
        "rau_duoi": 0.7,
        "rau_tren": 6.7,
        "la": []
       },
       "10A6": {
        "n": 30,
        "q1": 2.2,
        "q2": 3.9,
        "q3": 5.574999999999999,
        "min": 0.7,
        "max": 6.8,
        "rau_duoi": 0.7,
        "rau_tren": 6.8,
        "la": []
       },
       "10A7": {
        "n": 30,
        "q1": 2.3,
        "q2": 4.0,
        "q3": 5.25,
        "min": 0.6,
        "max": 7.0,
        "rau_duoi": 0.6,
        "rau_tren": 7.0,
        "la": []
       },
       "10A8": {
        "n": 30,
        "q1": 2.125,
        "q2": 3.6500000000000004,
        "q3": 5.4,
        "min": 1.0,
        "max": 7.0,
        "rau_duoi": 1.0,
        "rau_tren": 7.0,
        "la": []
       }
      },
      "StudyHours|Cả khối": {
       "Cả khối": {
        "n": 240,
        "q1": 2.0,
        "q2": 3.55,
        "q3": 5.425000000000001,
        "min": 0.5,
        "max": 7.0,
        "rau_duoi": 0.5,
        "rau_tren": 7.0,
        "la": []
       }
      },
      "SleepHours|Kết quả": {
       "Chưa đạt": {
        "n": 111,
        "q1": 5.7,
        "q2": 6.9,
        "q3": 8.1,
        "min": 4.5,
        "max": 9.5,
        "rau_duoi": 4.5,
        "rau_tren": 9.5,
        "la": []
       },
       "Đạt": {
        "n": 129,
        "q1": 6.0,
        "q2": 7.3,
        "q3": 8.4,
        "min": 4.5,
        "max": 9.5,
        "rau_duoi": 4.5,
        "rau_tren": 9.5,
        "la": []
       }
      },
      "SleepHours|Giới tính": {
       "Nam": {
        "n": 115,
        "q1": 5.95,
        "q2": 7.1,
        "q3": 8.2,
        "min": 4.5,
        "max": 9.5,
        "rau_duoi": 4.5,
        "rau_tren": 9.5,
        "la": []
       },
       "Nu": {
        "n": 125,
        "q1": 5.7,
        "q2": 7.0,
        "q3": 8.3,
        "min": 4.5,
        "max": 9.5,
        "rau_duoi": 4.5,
        "rau_tren": 9.5,
        "la": []
       }
      },
      "SleepHours|Lớp": {
       "10A1": {
        "n": 30,
        "q1": 5.85,
        "q2": 6.85,
        "q3": 8.4,
        "min": 4.7,
        "max": 9.5,
        "rau_duoi": 4.7,
        "rau_tren": 9.5,
        "la": []
       },
       "10A2": {
        "n": 30,
        "q1": 5.55,
        "q2": 6.85,
        "q3": 7.5,
        "min": 4.8,
        "max": 9.5,
        "rau_duoi": 4.8,
        "rau_tren": 9.5,
        "la": []
       },
       "10A3": {
        "n": 30,
        "q1": 5.125,
        "q2": 6.2,
        "q3": 7.074999999999999,
        "min": 4.5,
        "max": 8.6,
        "rau_duoi": 4.5,
        "rau_tren": 8.6,
        "la": []
       },
       "10A4": {
        "n": 30,
        "q1": 5.6,
        "q2": 6.8,
        "q3": 7.975,
        "min": 4.6,
        "max": 9.5,
        "rau_duoi": 4.6,
        "rau_tren": 9.5,
        "la": []
       },
       "10A5": {
        "n": 30,
        "q1": 5.825,
        "q2": 6.45,
        "q3": 7.8500000000000005,
        "min": 4.7,
        "max": 9.3,
        "rau_duoi": 4.7,
        "rau_tren": 9.3,
        "la": []
       },
       "10A6": {
        "n": 30,
        "q1": 6.4750000000000005,
        "q2": 7.9,
        "q3": 8.45,
        "min": 4.5,
        "max": 9.5,
        "rau_duoi": 4.5,
        "rau_tren": 9.5,
        "la": []
       },
       "10A7": {
        "n": 30,
        "q1": 7.225,
        "q2": 8.05,
        "q3": 8.6,
        "min": 5.0,
        "max": 9.4,
        "rau_duoi": 5.5,
        "rau_tren": 9.4,
        "la": [
         5.0
        ]
       },
       "10A8": {
        "n": 30,
        "q1": 6.275,
        "q2": 7.45,
        "q3": 8.575,
        "min": 4.5,
        "max": 9.3,
        "rau_duoi": 4.5,
        "rau_tren": 9.3,
        "la": []
       }
      },
      "SleepHours|Cả khối": {
       "Cả khối": {
        "n": 240,
        "q1": 5.8,
        "q2": 7.1,
        "q3": 8.225,
        "min": 4.5,
        "max": 9.5,
        "rau_duoi": 4.5,
        "rau_tren": 9.5,
        "la": []
       }
      },
      "PhutMangXH|Kết quả": {
       "Chưa đạt": {
        "n": 111,
        "q1": 126.5,
        "q2": 182.0,
        "q3": 236.0,
        "min": 70.0,
        "max": 450.0,
        "rau_duoi": 70.0,
        "rau_tren": 396.0,
        "la": [
         445.0,
         449.0,
         450.0
        ]
       },
       "Đạt": {
        "n": 129,
        "q1": 82.0,
        "q2": 108.0,
        "q3": 147.0,
        "min": 15.0,
        "max": 450.0,
        "rau_duoi": 15.0,
        "rau_tren": 244.0,
        "la": [
         254.0,
         258.0,
         277.0,
         295.0,
         310.0,
         450.0
        ]
       }
      },
      "PhutMangXH|Giới tính": {
       "Nam": {
        "n": 115,
        "q1": 90.0,
        "q2": 132.0,
        "q3": 203.0,
        "min": 15.0,
        "max": 450.0,
        "rau_duoi": 15.0,
        "rau_tren": 331.0,
        "la": [
         396.0,
         445.0,
         450.0
        ]
       },
       "Nu": {
        "n": 125,
        "q1": 100.0,
        "q2": 135.0,
        "q3": 187.0,
        "min": 15.0,
        "max": 450.0,
        "rau_duoi": 15.0,
        "rau_tren": 310.0,
        "la": [
         355.0,
         449.0,
         450.0
        ]
       }
      },
      "PhutMangXH|Lớp": {
       "10A1": {
        "n": 30,
        "q1": 83.0,
        "q2": 118.0,
        "q3": 214.25,
        "min": 15.0,
        "max": 449.0,
        "rau_duoi": 15.0,
        "rau_tren": 295.0,
        "la": [
         449.0
        ]
       },
       "10A2": {
        "n": 30,
        "q1": 102.0,
        "q2": 129.5,
        "q3": 202.5,
        "min": 34.0,
        "max": 310.0,
        "rau_duoi": 34.0,
        "rau_tren": 310.0,
        "la": []
       },
       "10A3": {
        "n": 30,
        "q1": 111.25,
        "q2": 156.5,
        "q3": 240.5,
        "min": 15.0,
        "max": 355.0,
        "rau_duoi": 15.0,
        "rau_tren": 355.0,
        "la": []
       },
       "10A4": {
        "n": 30,
        "q1": 112.25,
        "q2": 142.0,
        "q3": 205.0,
        "min": 65.0,
        "max": 450.0,
        "rau_duoi": 65.0,
        "rau_tren": 277.0,
        "la": [
         396.0,
         450.0
        ]
       },
       "10A5": {
        "n": 30,
        "q1": 88.75,
        "q2": 130.5,
        "q3": 178.75,
        "min": 15.0,
        "max": 450.0,
        "rau_duoi": 15.0,
        "rau_tren": 298.0,
        "la": [
         450.0
        ]
       },
       "10A6": {
        "n": 30,
        "q1": 92.0,
        "q2": 132.5,
        "q3": 179.0,
        "min": 15.0,
        "max": 445.0,
        "rau_duoi": 15.0,
        "rau_tren": 265.0,
        "la": [
         316.0,
         445.0
        ]
       },
       "10A7": {
        "n": 30,
        "q1": 93.0,
        "q2": 117.5,
        "q3": 198.0,
        "min": 30.0,
        "max": 281.0,
        "rau_duoi": 30.0,
        "rau_tren": 281.0,
        "la": []
       },
       "10A8": {
        "n": 30,
        "q1": 101.75,
        "q2": 141.5,
        "q3": 172.25,
        "min": 49.0,
        "max": 274.0,
        "rau_duoi": 49.0,
        "rau_tren": 274.0,
        "la": []
       }
      },
      "PhutMangXH|Cả khối": {
       "Cả khối": {
        "n": 240,
        "q1": 97.25,
        "q2": 135.0,
        "q3": 201.0,
        "min": 15.0,
        "max": 450.0,
        "rau_duoi": 15.0,
        "rau_tren": 355.0,
        "la": [
         396.0,
         445.0,
         449.0,
         450.0,
         450.0
        ]
       }
      }
     },
     "cot_nhom": {
      "Kết quả": "Result",
      "Giới tính": "GioiTinh",
      "Lớp": "Lop"
     },
     "ghi": "Tứ phân vị tính bằng pandas (quantile) — có thể lệch rất ít so với cách tính tay trong SGK Toán 10 vì hai cách lấy điểm giữa khác nhau. Chấm đỏ: giá trị bất thường theo quy tắc 1.5·Δ<sub>Q</sub>."
    },
    {
     "t": "video",
     "yt": "oBREri10ZHk",
     "ten": "Khan Academy — Interpreting box plots",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ hộp dài là có nhiều học sinh hơn — hộp dài chỉ là dữ liệu trải rộng hơn.",
      "Nhầm vạch giữa hộp là số trung bình — đó là trung vị."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Biểu đồ hộp: hộp Q1 – Q3, vạch trung vị, râu, chấm bất thường. Vẽ nhiều hộp cạnh nhau để so các nhóm."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q9",
     "q": "Trong biểu đồ hộp, vạch kẻ ở giữa hộp là gì?",
     "giai": "Vạch giữa hộp là Q2 — trung vị.",
     "goi_y": "Xem hình cấu tạo biểu đồ hộp.",
     "a": [
      "Trung vị",
      "Số trung bình",
      "Mốt",
      "Giá trị lớn nhất"
     ],
     "h": "1201d39797b3a5"
    },
    {
     "k": "mc",
     "id": "bai09-q10",
     "q": "Hộp của nhóm X dài gấp đôi hộp của nhóm Y. Điều đó nghĩa là gì?",
     "giai": "Chiều dài hộp là Δ<sub>Q</sub> — đo độ trải của 50% dữ liệu ở giữa, không nói về số người.",
     "goi_y": "Hộp kéo từ Q1 tới Q3 — độ dài đó đo điều gì?",
     "a": [
      "50% ở giữa của X trải rộng hơn",
      "Nhóm X có đông người hơn",
      "Nhóm X có trung vị cao hơn",
      "Nhóm X có nhiều bất thường hơn"
     ],
     "h": "47c894d4165b6"
    },
    {
     "k": "sx",
     "id": "bai09-q11",
     "q": "Sắp xếp các mốc trên một biểu đồ hộp từ trái sang phải.",
     "giai": "Râu trái → Q1 → trung vị → Q3 → râu phải.",
     "goi_y": "Hộp nằm giữa hai râu; trung vị nằm trong hộp.",
     "a": [
      "Đầu râu trái",
      "Q1 — cạnh trái của hộp",
      "Trung vị",
      "Q3 — cạnh phải của hộp",
      "Đầu râu phải"
     ],
     "h": "140575e6cf58ff"
    }
   ]
  },
  {
   "ten": "Chọn biểu đồ đúng và nhận ra biểu đồ gây hiểu nhầm",
   "ten_ngan": "Chọn biểu đồ",
   "phut": 5,
   "muc_tieu": "chọn đúng loại biểu đồ cho từng câu hỏi và nhận ra trục đứng bị cắt.",
   "khoi_dong": "Hai biểu đồ vẽ từ cùng ba con số. Vì sao một hình trông ba lớp gần bằng nhau, hình kia trông 10A1 vượt hẳn?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Câu hỏi",
      "Loại dữ liệu",
      "Biểu đồ"
     ],
     "dong": [
      [
       "Một cột số phân bố thế nào?",
       "Số",
       "Biểu đồ tần số"
      ],
      [
       "Mỗi nhóm có bao nhiêu phần tử?",
       "Chữ / số nguyên ít giá trị",
       "Biểu đồ cột đếm"
      ],
      [
       "Các nhóm khác nhau về một cột số?",
       "Số theo nhóm",
       "Biểu đồ hộp"
      ],
      [
       "Mỗi nhóm chiếm bao nhiêu phần trăm?",
       "Ít nhóm, cộng 100%",
       "Biểu đồ tròn"
      ],
      [
       "Hai cột số liên quan thế nào?",
       "Số và số",
       "Biểu đồ phân tán (Bài 10)"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Điểm trung bình ba lớp: biểu đồ A trục đứng bắt đầu từ 0, biểu đồ B bắt đầu từ 5.5",
     "alt": "Điểm trung bình ba lớp: biểu đồ A trục đứng bắt đầu từ 0, biểu đồ B bắt đầu từ 5.5",
     "src": "img/hai-bieu-do-cung-so-lieu-khac-truc.png"
    },
    {
     "t": "demo_truc",
     "tieu_de": "cắt trục đứng",
     "huong_dan": "Kéo thanh trượt để trục đứng bắt đầu từ số lớn hơn 0. Nhìn chiều cao các cột và tỉ số bên dưới.",
     "nhan": [
      "10A1",
      "10A8",
      "10A6"
     ],
     "gia_tri": [
      5.71,
      5.64,
      5.57
     ],
     "so_le": 2,
     "tran": 6.0
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Biểu đồ cột phải bắt đầu từ 0",
     "html": "Chiều cao cột được mắt so như độ lớn. Cắt trục đứng làm chênh lệch 0.14 điểm giữa 10A1 và 10A6 trông như gấp nhiều lần. Luôn đọc số trên trục trước khi kết luận."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Kết luận từ chiều cao cột mà không đọc số trên trục đứng.",
      "Dùng biểu đồ tròn để so hai cột số."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Chọn biểu đồ theo câu hỏi và loại dữ liệu. Biểu đồ cột phải bắt đầu từ 0; luôn đọc trục trước khi kết luận."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Our World in Data — cách đọc biểu đồ (ví dụ biểu đồ đúng chuẩn)",
       "url": "https://ourworldindata.org/",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Data Visualization and its Importance",
       "url": "https://www.geeksforgeeks.org/data-visualization/data-visualization-and-its-importance/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q12",
     "q": "Muốn so điểm của học sinh nam và nữ, vẽ biểu đồ nào hợp nhất?",
     "giai": "So một cột số (điểm) giữa các nhóm (giới tính): biểu đồ hộp.",
     "goi_y": "Có mấy nhóm cần so? Cột so sánh là số hay chữ?",
     "a": [
      "Hai biểu đồ hộp cạnh nhau",
      "Một biểu đồ tròn",
      "Một biểu đồ cột đếm",
      "Biểu đồ tần số một cột"
     ],
     "h": "1994681bb43d0e"
    },
    {
     "k": "mc",
     "id": "bai09-q13",
     "q": "Trong phần Tự thử, khi kéo trục đứng lên gần 5.57 thì điều gì xảy ra?",
     "giai": "Số liệu không đổi, chỉ trục đổi — chênh lệch nhỏ trông rất lớn.",
     "goi_y": "Kéo thanh trượt sang phải rồi đọc tỉ số bên dưới.",
     "a": [
      "Cột 10A1 trông cao gấp nhiều lần 10A6",
      "Ba cột trông cao bằng nhau hơn",
      "Điểm trung bình của 10A1 tăng lên",
      "Cột 10A6 biến mất khỏi biểu đồ"
     ],
     "h": "3d31fbd8b2bcb"
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
    "id": "bai09-q14",
    "q": "Nhìn hình. Vì sao đường trung bình nằm bên phải đường trung vị?",
    "giai": "Phân bố lệch phải: đuôi dài kéo số trung bình về bên phải.",
    "img": {
     "src": "img/bieu-do-tan-suat-phut-mang-xa-hoi.png"
    },
    "a": [
     "Vài bạn dùng mạng rất nhiều kéo lên",
     "Đa số dùng mạng trên 300 phút",
     "Trung bình luôn lớn hơn trung vị",
     "Biểu đồ đặt sai trục ngang"
    ],
    "h": "e1d32c444c289"
   },
   {
    "k": "mc",
    "id": "bai09-q15",
    "q": "Nhìn hình. Nhóm nào có trung vị giờ tự học cao hơn?",
    "giai": "Vạch đỏ của nhóm Đạt ở 5.4, nhóm Chưa đạt ở 1.9.",
    "img": {
     "src": "img/gio-tu-hoc-theo-ket-qua.png"
    },
    "a": [
     "Nhóm Đạt",
     "Nhóm Chưa đạt",
     "Hai nhóm bằng nhau",
     "Không đọc được"
    ],
    "h": "1064ed12bbd4e"
   },
   {
    "k": "mc",
    "id": "bai09-q16",
    "q": "Nhìn hình. Mốt của số lần nộp trễ là bao nhiêu?",
    "giai": "Cột cao nhất ở 0.",
    "img": {
     "src": "img/so-hoc-sinh-theo-so-lan-nop-tre.png"
    },
    "a": [
     "0 lần",
     "1 lần",
     "14 lần",
     "2 lần"
    ],
    "h": "d766265a55a84"
   },
   {
    "k": "mc",
    "id": "bai09-q17",
    "q": "Nhìn hình. Biểu đồ B gây hiểu nhầm ở chỗ nào?",
    "giai": "Số giống hệt biểu đồ A; chỉ trục đứng bị cắt.",
    "img": {
     "src": "img/hai-bieu-do-cung-so-lieu-khac-truc.png"
    },
    "a": [
     "Trục đứng không bắt đầu từ 0",
     "Số liệu của 10A6 bị ghi sai",
     "Thiếu một lớp trong ba lớp",
     "Cột vẽ quá rộng so với trục"
    ],
    "h": "139ce3de5b921f"
   },
   {
    "k": "mc",
    "id": "bai09-q18",
    "q": "Nhìn hình. Điểm học kỳ có hình dạng phân bố nào?",
    "giai": "Trung bình 5.26 gần bằng trung vị 5.2.",
    "img": {
     "src": "img/bieu-do-tan-suat-diem.png"
    },
    "a": [
     "Gần cân đối",
     "Lệch phải rất mạnh",
     "Lệch trái rất mạnh",
     "Không có hình dạng nào"
    ],
    "h": "101afcffd93e4e"
   },
   {
    "k": "mc",
    "id": "bai09-q19",
    "q": "Cột Thu nhập hộ gia đình có trung bình 18 triệu, trung vị 12 triệu. Hình dạng phân bố là gì?",
    "giai": "Trung bình lớn hơn trung vị: vài hộ thu nhập rất cao.",
    "a": [
     "Lệch phải",
     "Lệch trái",
     "Cân đối",
     "Hình chữ U"
    ],
    "h": "1dfc82cc596a2f"
   },
   {
    "k": "mc",
    "id": "bai09-q20",
    "q": "describe() cho 25% = 3.8 và 75% = 6.6. Khoảng tứ phân vị là bao nhiêu?",
    "giai": "Δ<sub>Q</sub> = Q3 − Q1 = 6.6 − 3.8 = 2.8.",
    "a": [
     "2.8",
     "10.4",
     "3.8",
     "6.6"
    ],
    "h": "1bc116281937d"
   },
   {
    "k": "mc",
    "id": "bai09-q21",
    "q": "Muốn xem phân bố tuổi của 500 khách hàng, vẽ biểu đồ nào?",
    "giai": "Tuổi là cột số nhiều giá trị: chia khoảng và vẽ biểu đồ tần số.",
    "a": [
     "Biểu đồ tần số",
     "Biểu đồ tròn",
     "Biểu đồ cột đếm từng tuổi lẻ",
     "Biểu đồ hộp theo tên"
    ],
    "h": "143af852f75842"
   },
   {
    "k": "mc",
    "id": "bai09-q22",
    "q": "Biểu đồ tròn có 12 lát, nhiều lát dưới 3%. Nhận xét nào đúng?",
    "giai": "Biểu đồ tròn chỉ hợp với ít nhóm.",
    "a": [
     "Quá nhiều nhóm — nên dùng biểu đồ cột",
     "Biểu đồ rất rõ ràng và dễ đọc",
     "Nên thêm lát để dễ so sánh",
     "Chỉ cần đổi màu các lát là đủ"
    ],
    "h": "18958e80121a1c"
   },
   {
    "k": "ma",
    "id": "bai09-q23",
    "q": "Những lệnh nào dùng để nhìn tổng quan một bảng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "info, describe chỉ xem; dropna, drop_duplicates thay đổi bảng.",
    "a": [
     "df.info()",
     "df.describe()",
     "df.dropna()",
     "df.drop_duplicates()"
    ],
    "h": "1d8fcb328d8c1e"
   },
   {
    "k": "ma",
    "id": "bai09-q24",
    "q": "Những phát biểu nào đúng về biểu đồ hộp? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Vạch giữa là trung vị; độ dài hộp đo độ trải, không đo số người.",
    "a": [
     "Hộp chứa 50% dữ liệu ở giữa",
     "Chấm ngoài râu là giá trị bất thường",
     "Vạch giữa hộp là số trung bình",
     "Hộp dài hơn là có nhiều người hơn"
    ],
    "h": "1c6ae5a1244f79"
   },
   {
    "k": "ma",
    "id": "bai09-q25",
    "q": "Với phân bố lệch phải, những phát biểu nào đúng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Lệch phải: đuôi phải dài, trung bình bị kéo lên.",
    "a": [
     "Số trung bình lớn hơn trung vị",
     "Đuôi dài nằm bên phải",
     "Đỉnh luôn nằm bên phải",
     "Số trung bình nhỏ hơn trung vị"
    ],
    "h": "12327b7ba6901"
   },
   {
    "k": "ma",
    "id": "bai09-q26",
    "q": "Những lỗi nào làm biểu đồ gây hiểu nhầm? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ghi số và dùng màu hợp lý giúp đọc dễ hơn.",
    "a": [
     "Biểu đồ cột có trục đứng bị cắt",
     "Không ghi tên trục và đơn vị",
     "Ghi số trên đầu mỗi cột",
     "Dùng màu khác nhau cho các nhóm"
    ],
    "h": "3c7c645811ef5"
   },
   {
    "k": "ma",
    "id": "bai09-q27",
    "q": "Những câu hỏi nào nên trả lời bằng biểu đồ hộp? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Biểu đồ hộp so một cột số giữa các nhóm.",
    "a": [
     "Điểm của nam và nữ khác nhau thế nào?",
     "Giờ ngủ của ba khối lớp khác nhau ra sao?",
     "Mỗi lớp có bao nhiêu học sinh?",
     "Mỗi môn chiếm bao nhiêu phần trăm?"
    ],
    "h": "1a2ccb314f119c"
   },
   {
    "k": "sx",
    "id": "bai09-q28",
    "q": "Sắp xếp các bước EDA một bảng mới.",
    "giai": "Nhìn tổng quan → kiểm tra → một cột → so nhóm.",
    "a": [
     "Xem vài dòng đầu và kích thước bảng",
     "Kiểm tra kiểu cột và ô trống",
     "Vẽ biểu đồ từng cột",
     "So các nhóm bằng biểu đồ hộp"
    ],
    "h": "6912105e2be52"
   },
   {
    "k": "sx",
    "id": "bai09-q29",
    "q": "Sắp xếp các bước vẽ biểu đồ tần số bằng tay.",
    "giai": "Min, max → chia khoảng → đếm → vẽ.",
    "a": [
     "Tìm giá trị nhỏ nhất và lớn nhất",
     "Chia thành các khoảng bằng nhau",
     "Đếm số giá trị trong mỗi khoảng",
     "Vẽ mỗi khoảng một cột"
    ],
    "h": "17f5701c25611f"
   },
   {
    "k": "dd",
    "id": "bai09-q30",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Số: tần số. Chữ: cột đếm.",
    "mau": "Cột số dùng biểu đồ {0}; cột chữ dùng biểu đồ {1}.",
    "o": [
     [
      "tần số",
      "tròn",
      "cột đếm",
      "đường"
     ],
     [
      "cột đếm",
      "tần số",
      "hộp",
      "phân tán"
     ]
    ],
    "h": "3544b726266ad"
   },
   {
    "k": "dd",
    "id": "bai09-q31",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Lệch phải: trung bình > trung vị; dùng trung vị.",
    "mau": "Phân bố lệch phải thì số trung bình {0} trung vị; nên mô tả bằng {1}.",
    "o": [
     [
      "lớn hơn",
      "nhỏ hơn",
      "bằng",
      "gấp đôi"
     ],
     [
      "trung vị",
      "số trung bình",
      "giá trị lớn nhất",
      "mốt"
     ]
    ],
    "h": "159e6fe92963bb"
   },
   {
    "k": "dd",
    "id": "bai09-q32",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Hộp kéo từ Q1 tới Q3.",
    "mau": "Trong biểu đồ hộp, cạnh trái của hộp là {0}, cạnh phải là {1}.",
    "o": [
     [
      "Q1",
      "Q3",
      "trung vị",
      "giá trị nhỏ nhất"
     ],
     [
      "Q3",
      "Q1",
      "trung vị",
      "giá trị lớn nhất"
     ]
    ],
    "h": "e47dd4b40960b"
   },
   {
    "k": "dd",
    "id": "bai09-q33",
    "q": "Chọn lệnh đúng cho mỗi chỗ trống.",
    "giai": "value_counts đếm; plt.hist vẽ biểu đồ tần số.",
    "mau": "Lệnh {0} đếm từng giá trị của cột chữ; lệnh {1} vẽ biểu đồ tần số.",
    "o": [
     [
      "value_counts()",
      "describe()",
      "head()",
      "info()"
     ],
     [
      "plt.hist()",
      "plt.pie()",
      "plt.boxplot()",
      "plt.scatter()"
     ]
    ],
    "h": "133903af8c2e5c"
   },
   {
    "k": "ds",
    "id": "bai09-q34",
    "q": "Hai biểu đồ vẽ từ cùng số liệu luôn cho cùng một ấn tượng.",
    "giai": "Cắt trục đứng có thể làm chênh lệch nhỏ trông rất lớn.",
    "h": "1456b52125928"
   },
   {
    "k": "ds",
    "id": "bai09-q35",
    "q": "Trong describe(), dòng 50% chính là trung vị.",
    "giai": "50% là giá trị đứng giữa.",
    "h": "16d775921661bc"
   },
   {
    "k": "ds",
    "id": "bai09-q36",
    "q": "Biểu đồ tròn phù hợp để so điểm trung bình của 8 lớp.",
    "giai": "So các giá trị giữa nhiều nhóm nên dùng biểu đồ cột; biểu đồ tròn dành cho tỉ lệ ít nhóm.",
    "h": "1e07d80d6d523a"
   },
   {
    "k": "ds",
    "id": "bai09-q37",
    "q": "Biểu đồ hộp cho thấy được cả giá trị bất thường.",
    "giai": "Các chấm ngoài râu.",
    "h": "7df48de3475d8"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
