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
       "Phút mạng: trung bình 152,8, trung vị 135"
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
       "ten": "Exploratory Data Analysis in Python",
       "url": "https://www.geeksforgeeks.org/data-analysis/exploratory-data-analysis-in-python/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
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
   "khoi_dong": "Số trung bình phút mạng là 152,8 nhưng trung vị chỉ 135. Hình dạng dữ liệu như thế nào thì hai số này lệch nhau?",
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
       "152,8",
       "135",
       "Lệch phải",
       "<b>Trung vị</b>"
      ],
      [
       "Điểm học kỳ",
       "5,26",
       "5,2",
       "Gần cân đối",
       "Số trung bình"
      ],
      [
       "Số lần nộp trễ",
       "1,48",
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
       "ten": "Advanced EDA",
       "url": "https://www.geeksforgeeks.org/data-analysis/advanced-eda/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q4",
     "q": "Một cột có số trung bình 1,43 nhưng trung vị là 1. Hình dạng phân bố nhiều khả năng là gì?",
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
     "html": "Hộp kéo dài từ Q<sub>1</sub> tới Q<sub>3</sub>, vạch giữa hộp là trung vị. Râu kéo tới giá trị nhỏ nhất và lớn nhất <b>không bất thường</b>; chấm tròn ngoài râu là giá trị bất thường (quy tắc 1,5·Δ<sub>Q</sub> — Bài 7).",
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
       "1,9 giờ",
       "5,4 giờ"
      ],
      [
       "Hộp (Q<sub>1</sub> – Q<sub>3</sub>)",
       "1,3 – 2,5",
       "4,1 – 6,3"
      ],
      [
       "Giá trị bất thường",
       "Vài bạn học trên 4,5 giờ vẫn Chưa đạt",
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
     "cap": "Điểm trung bình ba lớp: biểu đồ A trục đứng bắt đầu từ 0, biểu đồ B bắt đầu từ 5,5",
     "alt": "Điểm trung bình ba lớp: biểu đồ A trục đứng bắt đầu từ 0, biểu đồ B bắt đầu từ 5,5",
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
     "html": "Chiều cao cột được mắt so như độ lớn. Cắt trục đứng làm chênh lệch 0,14 điểm giữa 10A1 và 10A6 trông như gấp nhiều lần. Luôn đọc số trên trục trước khi kết luận."
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
     "q": "Trong phần Tự thử, khi kéo trục đứng lên gần 5,57 thì điều gì xảy ra?",
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
    "giai": "Vạch đỏ của nhóm Đạt ở 5,4, nhóm Chưa đạt ở 1,9.",
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
    "giai": "Trung bình 5,26 gần bằng trung vị 5,2.",
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
    "q": "describe() cho 25% = 3,8 và 75% = 6,6. Khoảng tứ phân vị là bao nhiêu?",
    "giai": "Δ<sub>Q</sub> = Q3 − Q1 = 6,6 − 3,8 = 2,8.",
    "a": [
     "2,8",
     "10,4",
     "3,8",
     "6,6"
    ],
    "h": "56fea204d22f9"
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
