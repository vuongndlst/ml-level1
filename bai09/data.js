window.BAI = {
 "bai": 9,
 "ma": "bai09",
 "nhan": "Bài 9",
 "tieu_de": "Tương quan và kể chuyện bằng dữ liệu",
 "phan": "Phần A · Nền tảng dữ liệu",
 "cau_hoi": "Hai cột số đi cùng nhau — có nghĩa là cột này gây ra cột kia không?",
 "gioi_thieu": [
  "Ở Bài 8, con đọc từng cột một. Bài này đọc <b>hai cột cùng lúc</b>: giờ học và điểm, phút mạng và điểm đi cùng nhau thế nào — và kể lại điều mình thấy thành một câu chuyện có số liệu.",
  "Năm chặng: biểu đồ phân tán, hệ số tương quan, bản đồ nhiệt, những cái bẫy khi đọc tương quan, và cách kể chuyện bằng dữ liệu. Bảng khối 10 là bảng mô phỏng.",
  "Bài này khép lại Phần A. Buổi sau là <b>thực hành nhóm 1</b>: nhóm tự khám phá một bộ dữ liệu mới và kể câu chuyện của nó."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai09",
 "muc_tieu": [
  "Vẽ và đọc được biểu đồ phân tán của hai cột số.",
  "Đọc được chiều và độ mạnh của hệ số tương quan r.",
  "Đọc được bản đồ nhiệt tương quan nhiều cột.",
  "Giải thích được vì sao tương quan không có nghĩa là nguyên nhân, và vì sao phải vẽ chứ không chỉ tính số.",
  "Viết được một câu chuyện dữ liệu có con số, so sánh và lời cảnh báo."
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
   "ten": "Biểu đồ phân tán — hai cột số",
   "ten_ngan": "Phân tán",
   "phut": 4,
   "muc_tieu": "vẽ và đọc được biểu đồ phân tán của hai cột số.",
   "khoi_dong": "Bạn nào tự học nhiều thì điểm có cao không? Làm sao nhìn cả 240 bạn cùng lúc?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Biểu đồ phân tán (scatter plot)",
     "html": "Mỗi học sinh là <b>một chấm</b>: hoành độ là giá trị cột thứ nhất, tung độ là giá trị cột thứ hai. Nhìn cả đám chấm để thấy hai cột đi cùng nhau thế nào.",
     "ky_hieu": "<code>plt.scatter(df[\"StudyHours\"], df[\"Score\"])</code>"
    },
    {
     "t": "anh",
     "cap": "Giờ tự học và điểm của 240 học sinh — đám chấm đi lên",
     "alt": "Giờ tự học và điểm của 240 học sinh — đám chấm đi lên",
     "src": "img/phan-tan-gio-hoc-va-diem.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc biểu đồ phân tán",
     "de": null,
     "cot": [
      "Hình dạng đám chấm",
      "Ý nghĩa"
     ],
     "dong": [
      [
       "Đi lên từ trái sang phải",
       "Cột này tăng thì cột kia thường tăng"
      ],
      [
       "Đi xuống từ trái sang phải",
       "Cột này tăng thì cột kia thường giảm"
      ],
      [
       "Tản đều, không hướng",
       "Gần như không liên quan"
      ],
      [
       "Chụm sát một đường",
       "Liên quan chặt"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Nhiệt độ và số kem bán ra — chỉ có 4 điểm, nên đường xu hướng rất kém chắc chắn (vùng mờ rộng)",
     "alt": "Nhiệt độ và số kem bán ra — chỉ có 4 điểm, nên đường xu hướng rất kém chắc chắn (vùng mờ rộng)",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251103115807717805/download-.webp",
     "du_phong": "img/minh-hoa-phan-tich-hai-bien-nhiet-do-va-kem.png",
     "nguon": {
      "ten": "GeeksforGeeks — Univariate bivariate and multivariate data and its analysis",
      "url": "https://www.geeksforgeeks.org/data-analysis/univariate-bivariate-and-multivariate-data-and-its-analysis/"
     },
     "chu_giai": [
      [
       "Bivariate Analysis",
       "Phân tích hai biến"
      ],
      [
       "Temperature (°C)",
       "Nhiệt độ"
      ],
      [
       "Ice Cream Sales",
       "Số kem bán ra"
      ],
      [
       "Vùng tô mờ",
       "Mức không chắc chắn của đường xu hướng"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đổi chỗ hai trục rồi đọc ngược ý nghĩa — luôn đọc tên trục trước.",
      "Nhìn vài chấm lạ rồi kết luận cho cả đám."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Biểu đồ phân tán: mỗi chấm một đối tượng, nhìn hướng và độ chụm của đám chấm."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Univariate, Bivariate and Multivariate data",
       "url": "https://www.geeksforgeeks.org/data-analysis/univariate-bivariate-and-multivariate-data-and-its-analysis/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q1",
     "q": "Muốn xem chiều cao và cân nặng của 100 bạn liên quan thế nào, vẽ biểu đồ nào?",
     "giai": "Hai cột số cùng lúc: biểu đồ phân tán.",
     "goi_y": "Có mấy cột số cần xem cùng lúc?",
     "a": [
      "Biểu đồ phân tán",
      "Biểu đồ tần số",
      "Biểu đồ tròn",
      "Biểu đồ cột đếm"
     ],
     "h": "12c4c552b53223"
    },
    {
     "k": "ds",
     "id": "bai09-q2",
     "q": "Trên biểu đồ phân tán, mỗi chấm là một học sinh.",
     "giai": "Mỗi chấm là một dòng của bảng — một học sinh.",
     "goi_y": "Mỗi dòng của bảng được vẽ thành gì?",
     "h": "1481cefaaded1c"
    }
   ]
  },
  {
   "ten": "Hệ số tương quan r",
   "ten_ngan": "Hệ số r",
   "phut": 5,
   "muc_tieu": "đọc được chiều và độ mạnh của hệ số tương quan.",
   "khoi_dong": "Đám chấm giờ học – điểm đi lên rõ; đám chấm phút mạng – điểm đi xuống. Có con số nào tóm tắt “đi lên mạnh tới đâu” không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Hệ số tương quan r (Pearson)",
     "html": "Một con số từ −1 đến 1 đo hai cột số đi cùng nhau <b>theo đường thẳng</b> mạnh tới đâu. <b>Dấu</b> cho biết chiều (dương: cùng tăng; âm: một tăng một giảm). <b>Độ lớn</b> cho biết mức mạnh: càng gần 1 hoặc −1 càng chặt, gần 0 là gần như không liên quan theo đường thẳng.",
     "ky_hieu": "<code>df[\"StudyHours\"].corr(df[\"Score\"])</code> · máy tính theo công thức, lớp 10 chỉ cần đọc."
    },
    {
     "t": "anh",
     "cap": "Ba dạng tương quan",
     "alt": "Ba dạng tương quan",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/Correl.png",
     "du_phong": "img/minh-hoa-tuong-quan-duong-khong-va-am.png",
     "nguon": {
      "ten": "GeeksforGeeks — What is correlation analysis",
      "url": "https://www.geeksforgeeks.org/data-analysis/what-is-correlation-analysis/"
     },
     "chu_giai": [
      [
       "Positive Correlation",
       "Tương quan dương"
      ],
      [
       "Zero Correlation",
       "Không tương quan"
      ],
      [
       "Negative Correlation",
       "Tương quan âm"
      ]
     ]
    },
    {
     "t": "demo_phan_tan",
     "tieu_de": "đám chấm thay đổi theo r",
     "huong_dan": "Kéo thanh trượt từ trái sang phải. Quan sát hướng của đám chấm và độ chụm khi r đi từ −0,9 tới 0,9.",
     "bo": [
      {
       "r": "−0,90",
       "doc": "Âm, mạnh",
       "x": [
        0.792,
        0.044,
        0.528,
        0.367,
        0.386,
        0.425,
        0.131,
        0.422,
        0.319,
        1.0,
        0.496,
        0.402,
        0.414,
        0.351,
        0.288,
        0.396,
        0.538,
        0.421,
        0.615,
        0.427,
        0.464,
        0.711,
        0.548,
        0.378,
        0.43,
        0.548,
        0.774,
        0.416,
        0.42,
        0.623,
        0.316,
        0.412,
        0.603,
        0.554,
        0.475,
        0.569,
        0.0,
        0.626,
        0.304,
        0.189,
        0.505,
        0.574,
        0.387,
        0.285,
        0.464,
        0.451,
        0.688,
        0.581,
        0.491,
        0.64,
        0.426,
        0.309,
        0.555,
        0.554,
        0.425,
        0.333,
        0.497,
        0.054,
        0.572,
        0.54
       ],
       "y": [
        0.104,
        0.924,
        0.399,
        0.679,
        0.447,
        0.498,
        0.893,
        0.66,
        0.5,
        0.0,
        0.527,
        0.542,
        0.701,
        0.544,
        0.721,
        0.514,
        0.572,
        0.57,
        0.364,
        0.434,
        0.662,
        0.362,
        0.512,
        0.699,
        0.59,
        0.406,
        0.185,
        0.515,
        0.678,
        0.274,
        0.623,
        0.555,
        0.421,
        0.493,
        0.426,
        0.303,
        0.959,
        0.476,
        0.738,
        0.803,
        0.47,
        0.454,
        0.584,
        0.76,
        0.471,
        0.554,
        0.317,
        0.466,
        0.524,
        0.566,
        0.682,
        0.79,
        0.292,
        0.423,
        0.521,
        0.694,
        0.326,
        1.0,
        0.515,
        0.362
       ]
      },
      {
       "r": "−0,60",
       "doc": "Âm, vừa",
       "x": [
        0.244,
        0.283,
        0.469,
        0.6,
        0.909,
        0.416,
        0.628,
        0.493,
        0.846,
        0.622,
        0.76,
        0.222,
        0.417,
        0.28,
        0.79,
        0.604,
        0.392,
        0.36,
        0.566,
        0.305,
        0.255,
        0.565,
        1.0,
        0.405,
        0.337,
        0.202,
        0.166,
        0.574,
        0.646,
        0.461,
        0.532,
        0.485,
        0.49,
        0.124,
        0.358,
        0.484,
        0.287,
        0.354,
        0.279,
        0.386,
        0.646,
        0.37,
        0.425,
        0.638,
        0.601,
        0.831,
        0.0,
        0.647,
        0.353,
        0.489,
        0.643,
        0.697,
        0.687,
        0.493,
        0.813,
        0.397,
        0.428,
        0.635,
        0.338,
        0.934
       ],
       "y": [
        0.812,
        1.0,
        0.518,
        0.391,
        0.341,
        0.679,
        0.341,
        0.579,
        0.338,
        0.737,
        0.264,
        0.828,
        0.432,
        0.442,
        0.242,
        0.245,
        0.585,
        0.759,
        0.505,
        0.713,
        0.917,
        0.525,
        0.302,
        0.504,
        0.299,
        0.786,
        0.355,
        0.588,
        0.435,
        0.727,
        0.48,
        0.368,
        0.576,
        0.588,
        0.543,
        0.523,
        0.586,
        0.544,
        0.465,
        0.529,
        0.055,
        0.542,
        0.33,
        0.641,
        0.686,
        0.0,
        0.774,
        0.414,
        0.391,
        0.608,
        0.356,
        0.097,
        0.37,
        0.484,
        0.376,
        0.337,
        0.652,
        0.574,
        0.381,
        0.181
       ]
      },
      {
       "r": "−0,30",
       "doc": "Âm, yếu",
       "x": [
        0.476,
        0.369,
        0.878,
        0.54,
        0.271,
        0.32,
        0.481,
        1.0,
        0.455,
        0.522,
        0.607,
        0.485,
        0.997,
        0.377,
        0.658,
        0.529,
        0.631,
        0.235,
        0.884,
        0.467,
        0.502,
        0.288,
        0.333,
        0.618,
        0.711,
        0.66,
        0.76,
        0.651,
        0.5,
        0.678,
        0.625,
        0.472,
        0.654,
        0.777,
        0.546,
        0.416,
        0.652,
        0.913,
        0.448,
        0.474,
        0.464,
        0.764,
        0.089,
        0.575,
        0.757,
        0.315,
        0.822,
        0.612,
        0.373,
        0.539,
        0.156,
        0.369,
        0.897,
        0.297,
        0.901,
        0.476,
        0.713,
        0.504,
        0.0,
        0.368
       ],
       "y": [
        0.628,
        0.447,
        0.278,
        0.639,
        0.553,
        0.375,
        0.49,
        0.59,
        0.53,
        0.732,
        0.802,
        0.601,
        0.279,
        0.422,
        0.545,
        0.722,
        0.598,
        0.75,
        0.418,
        0.648,
        0.518,
        0.599,
        0.435,
        0.313,
        0.459,
        0.375,
        0.371,
        0.656,
        0.575,
        1.0,
        0.703,
        0.5,
        0.672,
        0.572,
        0.472,
        0.788,
        0.429,
        0.0,
        0.731,
        0.502,
        0.835,
        0.418,
        0.519,
        0.814,
        0.353,
        0.674,
        0.731,
        0.579,
        0.614,
        0.597,
        0.817,
        0.501,
        0.579,
        0.738,
        0.848,
        0.546,
        0.39,
        0.706,
        0.666,
        0.673
       ]
      },
      {
       "r": "0,00",
       "doc": "Gần như không liên quan",
       "x": [
        0.587,
        0.813,
        0.414,
        0.538,
        0.0,
        0.363,
        0.893,
        0.409,
        0.404,
        0.292,
        0.684,
        0.597,
        0.298,
        0.704,
        0.615,
        0.722,
        0.418,
        0.937,
        0.647,
        0.532,
        0.444,
        0.504,
        0.745,
        0.499,
        0.793,
        0.685,
        0.852,
        0.736,
        0.544,
        0.14,
        0.623,
        0.73,
        0.593,
        0.679,
        0.455,
        0.475,
        0.352,
        0.855,
        0.592,
        0.45,
        0.267,
        0.524,
        0.873,
        0.659,
        0.399,
        0.87,
        0.87,
        0.772,
        0.73,
        0.81,
        0.676,
        0.727,
        0.387,
        0.885,
        0.608,
        1.0,
        0.111,
        0.712,
        0.772,
        0.483
       ],
       "y": [
        0.587,
        0.607,
        0.643,
        0.391,
        0.568,
        0.743,
        0.702,
        0.545,
        0.542,
        0.587,
        0.69,
        0.275,
        0.272,
        0.499,
        0.261,
        0.349,
        0.541,
        0.531,
        0.263,
        0.668,
        0.154,
        0.62,
        0.141,
        0.247,
        0.589,
        0.393,
        0.283,
        0.376,
        0.597,
        0.561,
        0.481,
        0.685,
        0.345,
        0.38,
        0.41,
        0.754,
        0.739,
        0.711,
        0.486,
        0.486,
        0.725,
        0.424,
        0.614,
        0.63,
        0.383,
        0.426,
        0.419,
        0.817,
        1.0,
        0.434,
        0.481,
        0.0,
        0.572,
        0.439,
        0.269,
        0.582,
        0.256,
        0.427,
        0.489,
        0.255
       ]
      },
      {
       "r": "0,30",
       "doc": "Dương, yếu",
       "x": [
        0.68,
        0.74,
        0.006,
        0.0,
        0.603,
        0.413,
        0.059,
        0.334,
        0.39,
        0.38,
        0.671,
        0.538,
        0.954,
        0.835,
        0.626,
        0.746,
        0.82,
        0.635,
        0.055,
        0.681,
        0.444,
        0.909,
        0.451,
        0.581,
        0.522,
        0.927,
        0.476,
        0.342,
        0.515,
        0.291,
        0.471,
        0.42,
        0.504,
        1.0,
        0.301,
        0.434,
        0.363,
        0.625,
        0.068,
        0.215,
        0.411,
        0.587,
        0.409,
        0.272,
        0.162,
        0.576,
        0.856,
        0.52,
        0.479,
        0.556,
        0.14,
        0.329,
        0.342,
        0.511,
        0.413,
        0.057,
        0.76,
        0.931,
        0.344,
        0.542
       ],
       "y": [
        0.721,
        0.837,
        0.202,
        0.797,
        0.559,
        0.841,
        0.517,
        0.501,
        0.564,
        0.761,
        0.501,
        0.559,
        0.65,
        0.38,
        0.906,
        0.799,
        0.703,
        0.882,
        0.316,
        0.655,
        0.939,
        0.92,
        0.178,
        0.0,
        0.427,
        0.941,
        0.523,
        0.536,
        0.742,
        0.394,
        0.654,
        0.752,
        0.712,
        0.832,
        0.451,
        0.702,
        0.501,
        0.906,
        1.0,
        0.401,
        0.177,
        0.562,
        0.669,
        0.762,
        0.738,
        0.49,
        0.564,
        0.871,
        0.405,
        0.846,
        0.48,
        0.723,
        0.715,
        0.774,
        0.756,
        0.311,
        0.749,
        0.74,
        0.638,
        0.87
       ]
      },
      {
       "r": "0,60",
       "doc": "Dương, vừa",
       "x": [
        0.438,
        0.346,
        0.342,
        0.43,
        0.652,
        0.324,
        0.737,
        0.556,
        0.448,
        0.216,
        0.546,
        0.64,
        0.125,
        0.744,
        0.84,
        0.566,
        0.598,
        1.0,
        0.753,
        0.307,
        0.491,
        0.462,
        0.463,
        0.0,
        0.653,
        0.362,
        0.529,
        0.466,
        0.677,
        0.433,
        0.328,
        0.606,
        0.789,
        0.428,
        0.782,
        0.55,
        0.383,
        0.814,
        0.323,
        0.707,
        0.391,
        0.589,
        0.237,
        0.32,
        0.718,
        0.534,
        0.503,
        0.403,
        0.588,
        0.202,
        0.26,
        0.462,
        0.32,
        0.348,
        0.48,
        0.466,
        0.448,
        0.843,
        0.706,
        0.752
       ],
       "y": [
        0.394,
        0.282,
        0.148,
        0.345,
        0.214,
        0.26,
        0.652,
        0.681,
        0.536,
        0.168,
        0.52,
        0.388,
        0.357,
        0.534,
        0.716,
        0.818,
        0.605,
        1.0,
        0.578,
        0.287,
        0.609,
        0.649,
        0.333,
        0.191,
        0.305,
        0.332,
        0.566,
        0.4,
        0.437,
        0.2,
        0.394,
        0.592,
        0.654,
        0.428,
        0.391,
        0.698,
        0.363,
        0.564,
        0.443,
        0.231,
        0.365,
        0.454,
        0.35,
        0.526,
        0.602,
        0.191,
        0.383,
        0.409,
        0.493,
        0.103,
        0.079,
        0.486,
        0.387,
        0.35,
        0.179,
        0.658,
        0.0,
        0.548,
        0.821,
        0.531
       ]
      },
      {
       "r": "0,90",
       "doc": "Dương, mạnh",
       "x": [
        0.535,
        0.164,
        0.831,
        0.134,
        0.541,
        0.509,
        0.197,
        0.707,
        0.101,
        0.294,
        0.466,
        0.365,
        0.597,
        0.717,
        0.397,
        0.331,
        0.338,
        0.378,
        0.687,
        0.417,
        0.581,
        0.45,
        0.252,
        0.701,
        0.201,
        0.476,
        0.865,
        0.186,
        0.459,
        0.057,
        0.34,
        0.081,
        0.379,
        0.332,
        0.509,
        0.891,
        0.548,
        0.647,
        0.461,
        0.41,
        0.254,
        0.0,
        0.492,
        0.903,
        0.599,
        0.333,
        0.908,
        0.36,
        0.311,
        0.155,
        0.221,
        0.409,
        1.0,
        0.42,
        0.202,
        0.315,
        0.415,
        0.023,
        0.507,
        0.658
       ],
       "y": [
        0.627,
        0.319,
        0.746,
        0.082,
        0.721,
        0.675,
        0.153,
        0.771,
        0.21,
        0.431,
        0.555,
        0.399,
        0.671,
        0.776,
        0.469,
        0.245,
        0.146,
        0.384,
        0.585,
        0.514,
        0.705,
        0.545,
        0.309,
        0.753,
        0.404,
        0.478,
        0.979,
        0.349,
        0.554,
        0.301,
        0.357,
        0.276,
        0.372,
        0.345,
        0.477,
        0.958,
        0.524,
        0.703,
        0.427,
        0.583,
        0.514,
        0.138,
        0.709,
        0.979,
        0.854,
        0.426,
        0.789,
        0.577,
        0.385,
        0.161,
        0.255,
        0.336,
        1.0,
        0.396,
        0.435,
        0.461,
        0.338,
        0.0,
        0.521,
        0.532
       ]
      }
     ],
     "bat_dau": 3
    },
    {
     "t": "bang",
     "cot": [
      "|r| (bỏ dấu)",
      "Cách đọc thường dùng"
     ],
     "dong": [
      [
       "từ 0,7 trở lên",
       "Liên quan mạnh"
      ],
      [
       "từ 0,3 đến dưới 0,7",
       "Liên quan vừa"
      ],
      [
       "dưới 0,3",
       "Liên quan yếu hoặc gần như không"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "hệ số tương quan với Điểm trong bảng khối 10",
     "de": null,
     "cot": [
      "Cột",
      "r với Điểm",
      "Chiều",
      "Mức"
     ],
     "dong": [
      [
       "Giờ tự học",
       "0,92",
       "Dương",
       "Mạnh"
      ],
      [
       "Phút mạng xã hội",
       "−0,54",
       "Âm",
       "Vừa"
      ],
      [
       "Giờ ngủ",
       "0,15",
       "Dương",
       "Yếu"
      ],
      [
       "Số lần nộp trễ",
       "0,06",
       "—",
       "Gần như không"
      ]
     ],
     "ket_luan": "Bảng cho thấy mức liên quan; chưa nói gì về nguyên nhân (chặng 4).",
     "nhan_manh": [
      0,
      1
     ]
    },
    {
     "t": "anh",
     "cap": "Phút mạng xã hội và điểm — đám chấm đi xuống, tản hơn",
     "alt": "Phút mạng xã hội và điểm — đám chấm đi xuống, tản hơn",
     "src": "img/phan-tan-phut-mang-va-diem.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ r = −0,54 yếu hơn r = 0,15 vì là số âm — độ mạnh xét độ lớn, bỏ dấu.",
      "Nghĩ r = 0 là hai cột chắc chắn không liên quan gì — r chỉ đo quan hệ đường thẳng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "r từ −1 đến 1: dấu là chiều, độ lớn là mức mạnh. Chỉ đo quan hệ theo đường thẳng."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "What is Correlation Analysis?",
       "url": "https://www.geeksforgeeks.org/data-analysis/what-is-correlation-analysis/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q3",
     "q": "Cột nào liên quan MẠNH hơn tới điểm: r = −0,8 hay r = 0,5?",
     "giai": "So độ lớn: 0,8 > 0,5. Dấu âm chỉ cho biết chiều ngược nhau.",
     "goi_y": "Độ mạnh xét độ lớn hay xét dấu?",
     "a": [
      "r = −0,8",
      "r = 0,5",
      "Mạnh như nhau",
      "Không so được"
     ],
     "h": "6e1bda9cf17ff"
    },
    {
     "k": "dd",
     "id": "bai09-q4",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Độ lớn 0,9 là mạnh; dấu âm là ngược chiều.",
     "goi_y": "Tách hai phần: độ lớn và dấu.",
     "mau": "r = −0,9 nghĩa là liên quan {0} và {1}.",
     "o": [
      [
       "mạnh",
       "yếu",
       "gần như không",
       "vừa"
      ],
      [
       "ngược chiều",
       "cùng chiều",
       "không có chiều",
       "bằng nhau"
      ]
     ],
     "h": "1188b2db1e6293"
    },
    {
     "k": "ds",
     "id": "bai09-q5",
     "q": "Hệ số tương quan có thể bằng 1,5.",
     "giai": "r luôn nằm từ −1 đến 1.",
     "goi_y": "Nhớ khoảng giá trị của r.",
     "h": "933a9e06c4b38"
    }
   ]
  },
  {
   "ten": "Bản đồ nhiệt — nhiều cột cùng lúc",
   "ten_ngan": "Bản đồ nhiệt",
   "phut": 4,
   "muc_tieu": "đọc được bản đồ nhiệt tương quan và tìm được các cặp cột liên quan mạnh.",
   "khoi_dong": "Bảng có 5 cột số. Có bao nhiêu cặp cột cần xem tương quan? Có cách nào nhìn hết một lần không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Bản đồ nhiệt tương quan (heatmap)",
     "html": "Bảng vuông ghi hệ số r của <b>mọi cặp cột</b>, tô màu theo độ lớn. Đường chéo luôn bằng 1 (cột với chính nó); bảng đối xứng qua đường chéo.",
     "ky_hieu": "<code>df.corr()</code> cho bảng số; tô màu để mắt thấy nhanh."
    },
    {
     "t": "anh",
     "cap": "Bản đồ nhiệt của 5 cột số trong bảng khối 10",
     "alt": "Bản đồ nhiệt của 5 cột số trong bảng khối 10",
     "src": "img/ban-do-nhiet-tuong-quan-khoi-10.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc bản đồ nhiệt",
     "de": null,
     "cot": [
      "Câu hỏi",
      "Trả lời"
     ],
     "dong": [
      [
       "Cột nào liên quan mạnh nhất với Điểm?",
       "Giờ học (0,92)"
      ],
      [
       "Hai cột đầu vào nào liên quan với nhau?",
       "Phút mạng và giờ học (−0,41)"
      ],
      [
       "Cột nào gần như không liên quan với Điểm?",
       "Nộp trễ (0,06)"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nối với Bài 7",
     "html": "Bản đồ nhiệt giúp chọn feature: giữ cột liên quan với nhãn, và cảnh giác khi hai feature liên quan chặt với nhau (thông tin bị lặp)."
    },
    {
     "t": "anh",
     "cap": "Bản đồ nhiệt của một bảng rượu vang",
     "alt": "Bản đồ nhiệt của một bảng rượu vang",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250508161201512231/eda13.webp",
     "du_phong": "img/minh-hoa-ban-do-nhiet-tuong-quan-nhieu-cot.png",
     "nguon": {
      "ten": "GeeksforGeeks — Exploratory data analysis in python",
      "url": "https://www.geeksforgeeks.org/data-analysis/exploratory-data-analysis-in-python/"
     },
     "chu_giai": [
      [
       "Correlation Heatmap",
       "Bản đồ nhiệt tương quan"
      ],
      [
       "fixed acidity, citric acid, pH…",
       "Các chỉ số hoá học của rượu"
      ],
      [
       "quality",
       "Điểm chất lượng"
      ],
      [
       "Thanh màu bên phải",
       "Mỗi màu ứng với một khoảng giá trị r — đọc số trong ô"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đọc ô trên đường chéo (luôn bằng 1) như một phát hiện.",
      "Chỉ nhìn màu mà không đọc số trong ô."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Bản đồ nhiệt ghi r của mọi cặp cột: tìm cột liên quan mạnh với nhãn, và cặp feature lặp thông tin."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q6",
     "q": "Trên bản đồ nhiệt tương quan, các ô trên đường chéo luôn bằng bao nhiêu?",
     "giai": "Mỗi cột tương quan hoàn toàn với chính nó.",
     "goi_y": "Ô đường chéo là tương quan của một cột với chính cột đó.",
     "a": [
      "1",
      "0",
      "−1",
      "0,5"
     ],
     "h": "39645fbcf7057"
    },
    {
     "k": "mc",
     "id": "bai09-q7",
     "q": "Bảng có 4 cột số. Bản đồ nhiệt có bao nhiêu ô?",
     "giai": "4 × 4 = 16 ô (kể cả đường chéo).",
     "goi_y": "Bản đồ nhiệt là bảng vuông: số hàng bằng số cột.",
     "a": [
      "16",
      "4",
      "8",
      "12"
     ],
     "h": "155646d8446fd0"
    }
   ]
  },
  {
   "ten": "Những cái bẫy khi đọc tương quan",
   "ten_ngan": "Bẫy tương quan",
   "phut": 5,
   "muc_tieu": "giải thích được vì sao tương quan không phải nguyên nhân và vì sao phải vẽ trước khi tin con số.",
   "khoi_dong": "Ngày nóng bán nhiều kem, cũng có nhiều người đi bơi. Ăn kem có làm người ta đi bơi không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Tương quan không có nghĩa là nguyên nhân",
     "html": "Hai cột đi cùng nhau có thể vì <b>một cột thứ ba</b> ảnh hưởng tới cả hai (nhiệt độ làm tăng cả kem và người đi bơi), hoặc do tình cờ. Muốn biết nguyên nhân cần thí nghiệm có đối chứng, không chỉ nhìn bảng số.",
     "ky_hieu": null
    },
    {
     "t": "vi_du",
     "tieu_de": "phút mạng xã hội và điểm",
     "de": null,
     "cot": [
      "Quan sát",
      "Số liệu"
     ],
     "dong": [
      [
       "Phút mạng và điểm",
       "r = −0,54 (âm, vừa)"
      ],
      [
       "Phút mạng và giờ học",
       "r = −0,41 — bạn dùng mạng nhiều cũng tự học ít hơn"
      ],
      [
       "Giờ học và điểm",
       "r = 0,92 (dương, mạnh)"
      ]
     ],
     "ket_luan": "Điểm thấp ở nhóm dùng mạng nhiều có thể một phần do học ít hơn. Bảng số không đủ để nói “mạng xã hội làm điểm thấp”.",
     "nhan_manh": []
    },
    {
     "t": "dinh_nghia",
     "ten": "Phải vẽ trước khi tin con số",
     "html": "Bốn bộ số liệu của Anscombe có cùng số trung bình, cùng độ lệch chuẩn, cùng r ≈ 0,82 — nhưng vẽ ra thì khác hẳn: một đường thẳng, một đường cong, một đường có điểm lạ, một cột dọc với một điểm xa.",
     "ky_hieu": null
    },
    {
     "t": "anh",
     "cap": "Bốn bộ số liệu: các con số tóm tắt gần như giống hệt",
     "alt": "Bốn bộ số liệu: các con số tóm tắt gần như giống hệt",
     "src": "img/bon-bo-so-lieu-cung-thong-ke.png"
    },
    {
     "t": "anh",
     "cap": "Bộ tứ Anscombe — cùng con số, khác hình dạng",
     "alt": "Bộ tứ Anscombe — cùng con số, khác hình dạng",
     "src": "img/bo-tu-anscombe-bon-bieu-do.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết “X làm tăng Y” khi chỉ có số liệu tương quan.",
      "Tin r mà không vẽ biểu đồ phân tán — một điểm lạ có thể tạo ra r cao."
     ]
    },
    {
     "t": "video",
     "yt": "8B271L3NtAw",
     "ten": "TEDx Delft — Ionica Smeets: The danger of mixing up causality and correlation",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Tương quan chỉ là liên quan; có thể do cột thứ ba hoặc tình cờ. Luôn vẽ trước khi tin một con số tóm tắt."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai09-q8",
     "q": "Các thành phố có nhiều cửa hàng kem cũng có nhiều vụ đuối nước hơn. Giải thích nào hợp lý nhất?",
     "giai": "Nhiệt độ (cột thứ ba) ảnh hưởng tới cả hai.",
     "goi_y": "Có yếu tố nào làm tăng cả hai cùng lúc không?",
     "a": [
      "Trời nóng làm tăng cả hai",
      "Ăn kem làm dễ đuối nước",
      "Đuối nước làm tăng bán kem",
      "Số liệu chắc chắn bị sai"
     ],
     "h": "1f682a88462a1b"
    },
    {
     "k": "ds",
     "id": "bai09-q9",
     "q": "Bốn bộ số liệu có cùng r thì có biểu đồ phân tán giống nhau.",
     "giai": "Bộ tứ Anscombe: cùng r ≈ 0,82 mà hình dạng khác hẳn.",
     "goi_y": "Nhớ bốn biểu đồ của Anscombe.",
     "h": "12164e3c748fcf"
    },
    {
     "k": "sx",
     "id": "bai09-q10",
     "q": "Sắp xếp cách kiểm tra một mối liên quan giữa hai cột cho cẩn thận.",
     "giai": "Vẽ → tính → tìm biến thứ ba → kết luận thận trọng.",
     "goi_y": "Nhìn hình trước, con số sau, kết luận cuối.",
     "a": [
      "Vẽ biểu đồ phân tán",
      "Tính hệ số tương quan r",
      "Tìm cột thứ ba có thể ảnh hưởng cả hai",
      "Viết kết luận, nói rõ chỉ là liên quan"
     ],
     "h": "e1ad06650beb2"
    }
   ]
  },
  {
   "ten": "Kể chuyện bằng dữ liệu",
   "ten_ngan": "Kể chuyện",
   "phut": 4,
   "muc_tieu": "viết được một câu chuyện dữ liệu có con số, so sánh, biểu đồ và lời cảnh báo.",
   "khoi_dong": "Con phát hiện một điều thú vị trong bảng. Làm sao kể cho người khác hiểu và tin — mà không nói quá?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Câu chuyện dữ liệu",
     "html": "Một kết luận ngắn, trả lời một câu hỏi rõ ràng, có <b>con số</b> làm bằng chứng, có <b>so sánh</b>, có <b>biểu đồ</b> phù hợp và có <b>lời cảnh báo</b> về giới hạn của dữ liệu.",
     "ky_hieu": null
    },
    {
     "t": "bang",
     "cot": [
      "Phần",
      "Câu hỏi tự kiểm tra",
      "Ví dụ với bảng khối 10"
     ],
     "dong": [
      [
       "Câu hỏi",
       "Mình muốn biết điều gì?",
       "Phút mạng liên quan tới điểm thế nào?"
      ],
      [
       "Con số",
       "Bằng chứng là số nào?",
       "Nhóm trên 200 phút: điểm trung bình 3,88"
      ],
      [
       "So sánh",
       "So với ai?",
       "Nhóm đến 100 phút: 6,81 — cao hơn 2,93 điểm"
      ],
      [
       "Biểu đồ",
       "Hình nào cho thấy rõ nhất?",
       "Biểu đồ cột ba nhóm (bắt đầu từ 0)"
      ],
      [
       "Cảnh báo",
       "Điều gì con số chưa nói được?",
       "Nhóm dùng mạng nhiều cũng tự học ít hơn (2,63 so với 5,20 giờ); dữ liệu mô phỏng"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Điểm trung bình theo nhóm phút mạng xã hội",
     "alt": "Điểm trung bình theo nhóm phút mạng xã hội",
     "src": "img/diem-theo-nhom-phut-mang.png"
    },
    {
     "t": "hop",
     "kieu": "thu",
     "tieu_de": "Một câu chuyện mẫu",
     "html": "“Trong 240 học sinh khối 10 (dữ liệu mô phỏng), nhóm dùng mạng xã hội trên 200 phút mỗi ngày có điểm trung bình 3,88, thấp hơn nhóm dùng đến 100 phút (6,81). Tuy vậy, nhóm này cũng tự học ít hơn, nên chưa thể nói mạng xã hội là nguyên nhân.”"
    },
    {
     "t": "anh",
     "cap": "Sáu nhóm việc của EDA nâng cao",
     "alt": "Sáu nhóm việc của EDA nâng cao",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260317165652014263/advanced_eda.webp",
     "du_phong": "img/minh-hoa-sau-viec-cua-eda-nang-cao.png",
     "nguon": {
      "ten": "GeeksforGeeks — Advanced eda",
      "url": "https://www.geeksforgeeks.org/data-analysis/advanced-eda/"
     },
     "chu_giai": [
      [
       "Advanced EDA",
       "EDA nâng cao"
      ],
      [
       "Understanding the basics of Descriptive Statistics",
       "Nắm các số đặc trưng mô tả (Bài 4)"
      ],
      [
       "Visualizing Distributions",
       "Vẽ phân bố (Bài 8)"
      ],
      [
       "Handling Multivariate Data: Feature Interactions",
       "Xử lý nhiều cột: quan hệ giữa các feature (Bài 9)"
      ],
      [
       "Identifying Outliers & Anomalies",
       "Tìm giá trị bất thường (Bài 6)"
      ],
      [
       "Feature Engineering",
       "Tạo feature (Bài 7)"
      ],
      [
       "Dimensionality Reduction",
       "Giảm số chiều (học sau)"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Kể chuyện không có con số — chỉ là cảm nhận.",
      "Nói quá: “chứng minh”, “gây ra”, “luôn luôn” khi chỉ có tương quan.",
      "Quên nói cỡ mẫu và nguồn dữ liệu."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Câu chuyện dữ liệu = câu hỏi + con số + so sánh + biểu đồ + cảnh báo."
    }
   ],
   "checkpoint": [
    {
     "k": "ma",
     "id": "bai09-q11",
     "q": "Một câu chuyện dữ liệu tốt cần có những phần nào? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Câu hỏi, con số, so sánh, biểu đồ phù hợp, cảnh báo.",
     "goi_y": "Xem bảng năm phần ở trên.",
     "a": [
      "Con số làm bằng chứng",
      "Lời cảnh báo về giới hạn",
      "Càng nhiều biểu đồ càng tốt",
      "Từ “chứng minh” cho mạnh mẽ"
     ],
     "h": "199d367853fe38"
    },
    {
     "k": "ds",
     "id": "bai09-q12",
     "q": "Câu “Học sinh dùng mạng nhiều có điểm thấp hơn, chứng tỏ mạng xã hội làm giảm điểm” là một kết luận cẩn thận.",
     "giai": "Chỉ có tương quan; còn cột thứ ba (giờ học). Không được nói “chứng tỏ”.",
     "goi_y": "Có từ nào trong câu nói quá so với dữ liệu tương quan không?",
     "h": "17bac2ce4c2033"
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
    "id": "bai09-q13",
    "q": "Nhìn hình. Đám chấm giờ học – điểm cho thấy điều gì?",
    "giai": "Đám chấm đi lên rõ, r = 0,92.",
    "img": {
     "src": "img/phan-tan-gio-hoc-va-diem.png"
    },
    "a": [
     "Học nhiều thì điểm thường cao",
     "Học nhiều thì điểm thường thấp",
     "Giờ học không liên quan tới điểm",
     "Mọi bạn học nhiều đều đạt 10"
    ],
    "h": "100833706341af"
   },
   {
    "k": "mc",
    "id": "bai09-q14",
    "q": "Nhìn hình. Cặp cột đầu vào nào liên quan với nhau rõ nhất?",
    "giai": "r = −0,41 — lớn nhất (theo độ lớn) giữa các cột đầu vào.",
    "img": {
     "src": "img/ban-do-nhiet-tuong-quan-khoi-10.png"
    },
    "a": [
     "Phút mạng và giờ học",
     "Giờ ngủ và nộp trễ",
     "Giờ học và giờ ngủ",
     "Nộp trễ và phút mạng"
    ],
    "h": "e6d9b4c39e144"
   },
   {
    "k": "mc",
    "id": "bai09-q15",
    "q": "Nhìn hình. Bộ nào có quan hệ theo đường cong chứ không phải đường thẳng?",
    "giai": "Bộ II đi lên rồi đi xuống — một đường cong.",
    "img": {
     "src": "img/bo-tu-anscombe-bon-bieu-do.png"
    },
    "a": [
     "Bộ II",
     "Bộ I",
     "Bộ III",
     "Bộ IV"
    ],
    "h": "1e7f307b2e528f"
   },
   {
    "k": "mc",
    "id": "bai09-q16",
    "q": "Nhìn hình. Nhóm dùng mạng trên 200 phút có điểm trung bình bao nhiêu?",
    "giai": "Cột đỏ bên phải.",
    "img": {
     "src": "img/diem-theo-nhom-phut-mang.png"
    },
    "a": [
     "3,88",
     "6,81",
     "5,09",
     "5,26"
    ],
    "h": "107ea0070ffeef"
   },
   {
    "k": "mc",
    "id": "bai09-q17",
    "q": "r giữa số giờ luyện đàn và số lỗi khi biểu diễn là −0,85. Cách đọc nào đúng?",
    "giai": "Âm, mạnh: một tăng một giảm. “Chắc chắn gây ra” là nói quá.",
    "a": [
     "Luyện nhiều thì thường ít lỗi hơn",
     "Luyện nhiều thì thường nhiều lỗi hơn",
     "Hai cột gần như không liên quan",
     "Luyện đàn gây ra ít lỗi, chắc chắn"
    ],
    "h": "10d956e78e4927"
   },
   {
    "k": "mc",
    "id": "bai09-q18",
    "q": "Bộ số liệu có r = 0,02. Kết luận nào cẩn thận nhất?",
    "giai": "r chỉ đo quan hệ đường thẳng; vẫn có thể có quan hệ cong.",
    "a": [
     "Gần như không có quan hệ đường thẳng",
     "Hai cột chắc chắn không liên quan",
     "Hai cột liên quan rất chặt chẽ",
     "Một cột gây ra cột còn lại"
    ],
    "h": "1e64d01fa46e30"
   },
   {
    "k": "mc",
    "id": "bai09-q19",
    "q": "Số giáo viên và số học sinh vi phạm nội quy ở các trường có r = 0,8. Giải thích nào hợp lý?",
    "giai": "Quy mô trường là cột thứ ba.",
    "a": [
     "Trường lớn có nhiều cả hai",
     "Giáo viên gây ra vi phạm",
     "Vi phạm làm tăng giáo viên",
     "Số liệu chắc chắn bị sai"
    ],
    "h": "1ec0b23eeba994"
   },
   {
    "k": "mc",
    "id": "bai09-q20",
    "q": "Muốn so điểm trung bình của ba nhóm phút mạng, vẽ biểu đồ nào để kể chuyện?",
    "giai": "So giá trị trung bình giữa các nhóm: biểu đồ cột bắt đầu từ 0.",
    "a": [
     "Biểu đồ cột ba nhóm từ 0",
     "Biểu đồ tròn ba nhóm",
     "Bản đồ nhiệt năm cột",
     "Biểu đồ tần số điểm"
    ],
    "h": "10ba73e4030ea"
   },
   {
    "k": "ma",
    "id": "bai09-q21",
    "q": "Những phát biểu nào đúng về hệ số tương quan r? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Độ mạnh xét độ lớn; tương quan không chứng minh nguyên nhân.",
    "a": [
     "Luôn nằm từ −1 đến 1",
     "Dấu cho biết chiều của quan hệ",
     "r âm nghĩa là quan hệ yếu",
     "r = 0,9 chứng minh nguyên nhân"
    ],
    "h": "f799f7ccdbffa"
   },
   {
    "k": "ma",
    "id": "bai09-q22",
    "q": "Những phát biểu nào đúng về bản đồ nhiệt tương quan? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Mỗi ô là r của một cặp cột.",
    "a": [
     "Đường chéo luôn bằng 1",
     "Bảng đối xứng qua đường chéo",
     "Mỗi ô là số dòng của bảng",
     "Ô càng đậm càng nhiều ô trống"
    ],
    "h": "100bd30fa2ab05"
   },
   {
    "k": "ma",
    "id": "bai09-q23",
    "q": "Những cách giải thích nào có thể đứng sau một tương quan mạnh? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Tương quan có thể do biến thứ ba hoặc tình cờ.",
    "a": [
     "Một cột thứ ba ảnh hưởng cả hai",
     "Tình cờ trong một mẫu nhỏ",
     "Chắc chắn cột X gây ra cột Y",
     "Máy tính đã tính sai r"
    ],
    "h": "6590a31d57083"
   },
   {
    "k": "ma",
    "id": "bai09-q24",
    "q": "Những câu nào nói quá so với dữ liệu tương quan? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "“Chứng tỏ”, “chắc chắn” vượt quá điều tương quan cho biết.",
    "a": [
     "Mạng xã hội chứng tỏ làm giảm điểm",
     "Học thêm một giờ chắc chắn tăng điểm",
     "Học nhiều thường đi cùng điểm cao",
     "Dùng mạng nhiều thường đi cùng điểm thấp"
    ],
    "h": "6c00f41780dfa"
   },
   {
    "k": "sx",
    "id": "bai09-q25",
    "q": "Sắp xếp năm phần của một câu chuyện dữ liệu.",
    "giai": "Câu hỏi → con số → so sánh → biểu đồ → cảnh báo.",
    "a": [
     "Đặt câu hỏi",
     "Đưa con số làm bằng chứng",
     "So sánh với nhóm khác",
     "Chọn biểu đồ phù hợp",
     "Nêu lời cảnh báo"
    ],
    "h": "3e8c1f60a3cbc"
   },
   {
    "k": "sx",
    "id": "bai09-q26",
    "q": "Sắp xếp cách đọc một bản đồ nhiệt.",
    "giai": "Nhãn → từng cột → cặp đầu vào → ghi chú.",
    "a": [
     "Tìm hàng của cột nhãn",
     "Đọc r của từng cột với nhãn",
     "Tìm cặp đầu vào liên quan chặt",
     "Ghi chú cột có thể thừa"
    ],
    "h": "1aacf52085195f"
   },
   {
    "k": "dd",
    "id": "bai09-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cùng chiều: dương; ngược chiều: âm.",
    "mau": "Hai cột cùng tăng thì r {0}; một tăng một giảm thì r {1}.",
    "o": [
     [
      "dương",
      "âm",
      "bằng 0",
      "lớn hơn 1"
     ],
     [
      "âm",
      "dương",
      "bằng 1",
      "lớn hơn 1"
     ]
    ],
    "h": "92d228032edd3"
   },
   {
    "k": "dd",
    "id": "bai09-q28",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "corr tính r; scatter vẽ phân tán.",
    "mau": "Lệnh {0} cho hệ số tương quan giữa hai cột; lệnh {1} vẽ biểu đồ phân tán.",
    "o": [
     [
      ".corr()",
      ".mean()",
      ".describe()",
      ".count()"
     ],
     [
      "plt.scatter()",
      "plt.hist()",
      "plt.pie()",
      "plt.boxplot()"
     ]
    ],
    "h": "17465dcdb8ee23"
   },
   {
    "k": "dd",
    "id": "bai09-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Correlation is not causation.",
    "mau": "Tương quan không có nghĩa là {0}; có thể do một {1}.",
    "o": [
     [
      "nguyên nhân",
      "liên quan",
      "số liệu",
      "biểu đồ"
     ],
     [
      "cột thứ ba",
      "dòng trùng",
      "ô trống",
      "biểu đồ tròn"
     ]
    ],
    "h": "90ff7130cdf70"
   },
   {
    "k": "dd",
    "id": "bai09-q30",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Quy ước thường dùng.",
    "mau": "|r| từ 0,7 trở lên thường đọc là liên quan {0}; |r| dưới 0,3 là liên quan {1}.",
    "o": [
     [
      "mạnh",
      "yếu",
      "vừa",
      "âm"
     ],
     [
      "yếu",
      "mạnh",
      "vừa",
      "dương"
     ]
    ],
    "h": "188168841ceac6"
   },
   {
    "k": "ds",
    "id": "bai09-q31",
    "q": "r = −0,7 cho thấy liên quan mạnh hơn r = 0,4.",
    "giai": "So độ lớn: 0,7 > 0,4.",
    "h": "1e957aaef34cfc"
   },
   {
    "k": "ds",
    "id": "bai09-q32",
    "q": "Chỉ cần tính r là đủ, không cần vẽ biểu đồ phân tán.",
    "giai": "Bộ tứ Anscombe: cùng r mà hình dạng khác hẳn.",
    "h": "172cd83ac9fc60"
   },
   {
    "k": "ds",
    "id": "bai09-q33",
    "q": "Một câu chuyện dữ liệu tốt nêu cả giới hạn của dữ liệu.",
    "giai": "Cảnh báo giúp người nghe không hiểu quá.",
    "h": "10cd269281aed7"
   },
   {
    "k": "ds",
    "id": "bai09-q34",
    "q": "Hai cột có r = 0 thì chắc chắn không có quan hệ nào.",
    "giai": "r chỉ đo quan hệ đường thẳng; quan hệ cong vẫn có thể cho r gần 0.",
    "h": "1456b52125928"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
