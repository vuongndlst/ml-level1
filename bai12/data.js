window.BAI = {
 "bai": 12,
 "ma": "bai12",
 "nhan": "Bài 12",
 "tieu_de": "Học có giám sát là gì",
 "phan": "Module 08 · Supervised Learning",
 "cau_hoi": "Máy “học” từ dữ liệu nghĩa là gì — và làm sao biết nó học thật hay chỉ thuộc lòng?",
 "gioi_thieu": [
  "Phần A đã giúp con đọc và chuẩn bị dữ liệu. Từ bài này, máy bắt đầu <b>học</b>: nhìn những ví dụ đã biết đáp án rồi đoán đáp án cho ví dụ mới.",
  "Bài này chưa dạy thuật toán nào. Năm chặng dựng cái <b>khung chung</b> mà mọi bài sau đều dùng: dữ liệu có nhãn, phân loại hay hồi quy, quy trình 5 bước, model là một quy tắc có tham số, và phân biệt model học thật với model học vẹt. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại feature, nhãn, tập huấn luyện, tập kiểm tra và model lười từ Bài 8."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai12",
 "muc_tieu": [
  "Giải thích được học có giám sát: học từ dữ liệu có nhãn để dự đoán nhãn cho dữ liệu mới.",
  "Phân biệt được bài toán phân loại và bài toán hồi quy.",
  "Sắp xếp đúng quy trình 5 bước của một bài toán học có giám sát.",
  "Hiểu model là một quy tắc có tham số, huấn luyện là tìm tham số tốt nhất.",
  "Nhận ra model học vẹt: đúng trên dữ liệu đã học, sai trên dữ liệu mới."
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
   "ten": "Học có giám sát — học từ ví dụ có đáp án",
   "ten_ngan": "Học có giám sát",
   "phut": 4,
   "muc_tieu": "giải thích được học có giám sát bằng lời của mình.",
   "khoi_dong": "Nhìn 12 bạn đã biết kết quả trên hình. Con đoán được ba bạn mới A, B, C không? Con vừa dùng quy tắc gì?",
   "khoi": [
    {
     "t": "anh",
     "cap": "12 bạn đã biết Đạt / Chưa đạt và ba bạn mới A, B, C (bạn mới là ví dụ tự đặt)",
     "alt": "12 bạn đã biết Đạt / Chưa đạt và ba bạn mới A, B, C (bạn mới là ví dụ tự đặt)",
     "src": "img/muoi-hai-ban-da-biet-va-ba-ban-moi.png"
    },
    {
     "t": "p",
     "html": "Khi đoán A, B, C, con đã làm đúng việc của một model: nhìn các ví dụ có đáp án, rút ra một quy tắc (học nhiều, dùng mạng ít thì thường Đạt), rồi áp dụng cho ví dụ mới."
    },
    {
     "t": "dinh_nghia",
     "ten": "Học có giám sát (supervised learning)",
     "html": "Máy học từ <b>dữ liệu có nhãn</b> — mỗi ví dụ đã kèm đáp án đúng — để tìm ra quy tắc nối feature với nhãn, rồi dùng quy tắc đó <b>dự đoán nhãn cho dữ liệu mới</b>. Chữ “giám sát” nghĩa là có đáp án đi kèm để kiểm tra máy học đúng hay sai.",
     "ky_hieu": "Dữ liệu có nhãn → huấn luyện → model → dự đoán cho dữ liệu mới"
    },
    {
     "t": "anh",
     "cap": "Bảng khối 10 là dữ liệu có nhãn: cột Result là đáp án",
     "alt": "Bảng khối 10 là dữ liệu có nhãn: cột Result là đáp án",
     "src": "img/bang-du-lieu-co-nhan.png"
    },
    {
     "t": "anh",
     "cap": "Học có giám sát: học từ ảnh đã gắn nhãn, rồi phân loại ảnh mới",
     "alt": "Học có giám sát: học từ ảnh đã gắn nhãn, rồi phân loại ảnh mới",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20241022160725494723/supervised-machine-learning.webp",
     "du_phong": "img/minh-hoa-hoc-co-giam-sat-tong-quan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Supervised machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/"
     },
     "chu_giai": [
      [
       "Supervised Machine Learning",
       "Học máy có giám sát"
      ],
      [
       "Labeled Data, Labels",
       "Dữ liệu có nhãn, các nhãn (voi, lạc đà, bò)"
      ],
      [
       "Algorithm, Processing",
       "Thuật toán học, xử lý"
      ],
      [
       "Output",
       "Kết quả dự đoán"
      ],
      [
       "Model is trained using labeled data…",
       "Model được huấn luyện bằng dữ liệu có nhãn để dự đoán và phân loại"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ “học” là máy tự hiểu như người — thật ra máy tìm một quy tắc khớp với các ví dụ.",
      "Quên rằng không có nhãn thì không có học có giám sát."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Học có giám sát: học từ ví dụ có đáp án để đoán đáp án cho ví dụ mới."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Supervised Machine Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai12-q1",
     "q": "Bài toán nào dưới đây là học có giám sát?",
     "giai": "Có dữ liệu đã gắn nhãn (rác / không rác) để học rồi đoán cho email mới.",
     "goi_y": "Học có giám sát cần ví dụ đã có đáp án.",
     "a": [
      "Đoán email rác từ email đã gắn nhãn",
      "Chia khách hàng thành nhóm không có nhãn",
      "Tìm các từ hay đi cùng nhau trong sách",
      "Nén ảnh cho nhỏ dung lượng hơn"
     ],
     "h": "1c7d828334f96b"
    },
    {
     "k": "ds",
     "id": "bai12-q2",
     "q": "Trong học có giám sát, mỗi dòng dữ liệu dùng để học đều kèm đáp án đúng.",
     "giai": "Đó là dữ liệu có nhãn.",
     "goi_y": "“Giám sát” nghĩa là có gì đi kèm?",
     "h": "4e690c69b2594"
    }
   ]
  },
  {
   "ten": "Phân loại và hồi quy",
   "ten_ngan": "Phân loại, hồi quy",
   "phut": 4,
   "muc_tieu": "phân biệt được bài toán phân loại và bài toán hồi quy.",
   "khoi_dong": "Đoán một bạn Đạt hay Chưa đạt, và đoán một bạn được bao nhiêu điểm — hai câu hỏi này khác nhau ở đâu?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Phân loại (classification)",
     "html": "Nhãn là một <b>nhóm</b> trong số ít nhóm cho trước. Ví dụ: Đạt / Chưa đạt; chó / mèo; email rác / không rác.",
     "ky_hieu": null
    },
    {
     "t": "dinh_nghia",
     "ten": "Hồi quy (regression)",
     "html": "Nhãn là một <b>con số</b> có thể nhận rất nhiều giá trị. Ví dụ: điểm học kỳ, giá nhà, nhiệt độ ngày mai.",
     "ky_hieu": null
    },
    {
     "t": "anh",
     "cap": "Hai nhánh của học có giám sát",
     "alt": "Hai nhánh của học có giám sát",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250902175259468148/difff.webp",
     "du_phong": "img/minh-hoa-hai-nhanh-phan-loai-va-hoi-quy.png",
     "nguon": {
      "ten": "GeeksforGeeks — Supervised machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/"
     },
     "chu_giai": [
      [
       "Supervised Learning",
       "Học có giám sát"
      ],
      [
       "Classification (defined Labels)",
       "Phân loại — nhãn là các nhóm cho trước"
      ],
      [
       "Regression (no Labels defined)",
       "Hồi quy — nhãn là số, không phải nhóm cho trước (GfG gọi là “không có nhãn định sẵn”; vẫn là học có giám sát)"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "phân loại hay hồi quy?",
     "de": null,
     "cot": [
      "Bài toán",
      "Nhãn",
      "Loại"
     ],
     "dong": [
      [
       "Đoán Đạt / Chưa đạt",
       "Pass / Fail",
       "<b>Phân loại</b>"
      ],
      [
       "Đoán điểm học kỳ",
       "Số từ 0 đến 10",
       "<b>Hồi quy</b>"
      ],
      [
       "Đoán loại hoa từ ảnh",
       "Hồng / cúc / lan",
       "Phân loại"
      ],
      [
       "Đoán số khách tới quán ngày mai",
       "Số nguyên",
       "Hồi quy"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Bảng A: nhãn Purchased là 0/1 — phân loại. Bảng B: nhãn Wind Speed là số — hồi quy",
     "alt": "Bảng A: nhãn Purchased là 0/1 — phân loại. Bảng B: nhãn Wind Speed là số — hồi quy",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250902165132990858/supervised-data.webp",
     "du_phong": "img/minh-hoa-bang-du-lieu-phan-loai-va-hoi-quy.png",
     "nguon": {
      "ten": "GeeksforGeeks — Supervised machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/"
     },
     "chu_giai": [
      [
       "Figure A: Classification",
       "Bảng A: phân loại — cột khoanh đỏ là nhãn"
      ],
      [
       "Purchased",
       "Đã mua hàng (1) hay không (0)"
      ],
      [
       "Figure B: Regression",
       "Bảng B: hồi quy"
      ],
      [
       "Wind Speed",
       "Tốc độ gió"
      ],
      [
       "Temperature, Pressure, Relative Humidity",
       "Nhiệt độ, áp suất, độ ẩm"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Ba kiểu bài toán phân loại",
     "alt": "Ba kiểu bài toán phân loại",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260312160830294415/Types-of-classification.webp",
     "du_phong": "img/minh-hoa-ba-kieu-bai-toan-phan-loai.png",
     "nguon": {
      "ten": "GeeksforGeeks — Getting started with classification",
      "url": "https://www.geeksforgeeks.org/machine-learning/getting-started-with-classification/"
     },
     "chu_giai": [
      [
       "Binary Classification",
       "Phân loại hai nhóm"
      ],
      [
       "Multi-Class Classification",
       "Phân loại nhiều nhóm — mỗi mẫu một nhóm"
      ],
      [
       "Multi-Label Classification",
       "Phân loại nhiều nhãn — một mẫu có thể nhiều nhãn"
      ],
      [
       "Category, Label",
       "Nhóm, nhãn"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ nhãn là số thì luôn là hồi quy — nhãn 0/1 chỉ là tên hai nhóm, vẫn là phân loại.",
      "Nghĩ hồi quy không có nhãn — nhãn của hồi quy là một con số."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Nhãn là nhóm → phân loại. Nhãn là con số liên tục → hồi quy."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Getting started with Classification",
       "url": "https://www.geeksforgeeks.org/machine-learning/getting-started-with-classification/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai12-q3",
     "q": "Đoán giá một chiếc điện thoại cũ (triệu đồng). Đây là bài toán gì?",
     "giai": "Nhãn là một con số — hồi quy.",
     "goi_y": "Nhãn là một nhóm hay một con số?",
     "a": [
      "Hồi quy",
      "Phân loại hai nhóm",
      "Phân loại nhiều nhóm",
      "Không phải học có giám sát"
     ],
     "h": "14d4f42b93a17"
    },
    {
     "k": "mc",
     "id": "bai12-q4",
     "q": "Nhãn của bảng là 0 hoặc 1 (không mua / có mua). Đây là bài toán gì?",
     "giai": "0 và 1 chỉ là tên của hai nhóm.",
     "goi_y": "Nhãn 0/1 có phải là số đo được lớn nhỏ không?",
     "a": [
      "Phân loại hai nhóm",
      "Hồi quy",
      "Phân loại nhiều nhóm",
      "Phân loại nhiều nhãn"
     ],
     "h": "1d405a824c8b1d"
    },
    {
     "k": "dd",
     "id": "bai12-q5",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Loại → nhóm → phân loại. Cân nặng → số → hồi quy.",
     "goi_y": "Loại trái cây là nhóm hay số? Cân nặng thì sao?",
     "mau": "Đoán loại trái cây từ ảnh là {0}; đoán cân nặng trái cây là {1}.",
     "o": [
      [
       "phân loại",
       "hồi quy",
       "làm sạch",
       "trực quan hoá"
      ],
      [
       "hồi quy",
       "phân loại",
       "làm sạch",
       "trực quan hoá"
      ]
     ],
     "h": "a98c90b0c74f3"
    }
   ]
  },
  {
   "ten": "Quy trình 5 bước",
   "ten_ngan": "Quy trình",
   "phut": 4,
   "muc_tieu": "sắp xếp đúng 5 bước của một bài toán học có giám sát.",
   "khoi_dong": "Mọi model trong các bài sau — KNN, hồi quy, cây quyết định… — có điểm gì chung trong cách làm?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Năm bước của mọi bài toán học có giám sát",
     "alt": "Năm bước của mọi bài toán học có giám sát",
     "src": "img/quy-trinh-nam-buoc.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "năm bước với bảng khối 10",
     "de": null,
     "cot": [
      "Bước",
      "Việc",
      "Với bảng khối 10"
     ],
     "dong": [
      [
       "1",
       "Dữ liệu có nhãn",
       "240 bạn, nhãn Result (129 Đạt, 111 Chưa đạt)"
      ],
      [
       "2",
       "Chia huấn luyện / kiểm tra",
       "168 / 72 bạn, có stratify"
      ],
      [
       "3",
       "Huấn luyện",
       "Máy tìm quy tắc trên 168 bạn"
      ],
      [
       "4",
       "Dự đoán",
       "Đưa 72 bạn đã giấu vào model"
      ],
      [
       "5",
       "Đánh giá",
       "So dự đoán với đáp án thật, so với mốc model lười 54,2%"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "anh",
     "cap": "Chia 240 bạn: 168 để học, 72 giấu đi để chấm",
     "alt": "Chia 240 bạn: 168 để học, 72 giấu đi để chấm",
     "src": "img/chia-train-test.png"
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Mốc so sánh",
     "html": "Trước khi khen model, luôn so với <b>model lười</b> (đoán mọi bạn cùng một nhãn — Bài 8). Với bảng này model lười đúng 54,2% trên tập kiểm tra: model nào không vượt mốc này là chưa học được gì."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đánh giá model trên chính tập huấn luyện.",
      "Khen model 70% mà không so với mốc model lười."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Dữ liệu có nhãn → chia → huấn luyện → dự đoán → đánh giá (so với mốc)."
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai12-q6",
     "q": "Sắp xếp năm bước của bài toán học có giám sát.",
     "giai": "Dữ liệu → chia → huấn luyện → dự đoán → đánh giá.",
     "goi_y": "Model phải học trước rồi mới dự đoán; chấm điểm là việc cuối.",
     "a": [
      "Chuẩn bị dữ liệu có nhãn",
      "Chia tập huấn luyện và tập kiểm tra",
      "Huấn luyện model trên tập huấn luyện",
      "Dự đoán cho tập kiểm tra",
      "Đánh giá, so với mốc model lười"
     ],
     "h": "14680bf409742"
    },
    {
     "k": "mc",
     "id": "bai12-q7",
     "q": "Với bảng khối 10, model lười đúng 54,2% trên tập kiểm tra. Một model mới đúng 55%. Nhận xét nào đúng?",
     "giai": "55% gần bằng mốc lười 54,2% — model hầu như không hơn việc đoán một nhãn.",
     "goi_y": "So 55% với mốc model lười.",
     "a": [
      "Gần như chưa học được gì",
      "Model rất tốt vì trên 50%",
      "Model tệ hơn hẳn đoán bừa",
      "Model đã học xong hoàn toàn"
     ],
     "h": "120e7c02b2a739"
    }
   ]
  },
  {
   "ten": "Model là một quy tắc, huấn luyện là tìm tham số tốt nhất",
   "ten_ngan": "Huấn luyện",
   "phut": 5,
   "muc_tieu": "hiểu model là một quy tắc có tham số và huấn luyện là tìm tham số tốt nhất.",
   "khoi_dong": "Quy tắc “học từ 3,5 giờ trở lên thì Đạt” có một con số. Nếu đổi con số đó, quy tắc đúng hơn hay sai hơn?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Model và tham số",
     "html": "<b>Model</b> là một quy tắc biến feature thành dự đoán. Quy tắc có những con số điều chỉnh được gọi là <b>tham số</b>. <b>Huấn luyện</b> là tìm giá trị tham số làm model đoán đúng nhất trên tập huấn luyện.",
     "ky_hieu": "Model ngưỡng: học từ t giờ trở lên → Đạt · tham số: ngưỡng t"
    },
    {
     "t": "anh",
     "cap": "Model ngưỡng t = 3,5 giờ trên cả 240 bạn: vòng vàng là các bạn model đoán sai",
     "alt": "Model ngưỡng t = 3,5 giờ trên cả 240 bạn: vòng vàng là các bạn model đoán sai",
     "src": "img/nguong-tren-truc-gio-hoc.png"
    },
    {
     "t": "demo_truot",
     "tieu_de": "thử các ngưỡng",
     "huong_dan": "Kéo thanh trượt để đổi ngưỡng t. Theo dõi độ chính xác trên tập huấn luyện và tập kiểm tra. Ngưỡng nào tốt nhất?",
     "dieu_kien": "Model: học từ <b>{x}</b> giờ trở lên thì đoán Đạt",
     "moc": [
      {
       "x": 0.5,
       "n": "53,6%",
       "p": 54.2
      },
      {
       "x": 1.0,
       "n": "60,7%",
       "p": 61.1
      },
      {
       "x": 1.5,
       "n": "67,9%",
       "p": 70.8
      },
      {
       "x": 2.0,
       "n": "76,8%",
       "p": 79.2
      },
      {
       "x": 2.5,
       "n": "84,5%",
       "p": 88.9
      },
      {
       "x": 3.0,
       "n": "88,7%",
       "p": 90.3
      },
      {
       "x": 3.5,
       "n": "91,1%",
       "p": 91.7
      },
      {
       "x": 4.0,
       "n": "86,3%",
       "p": 88.9
      },
      {
       "x": 4.5,
       "n": "80,4%",
       "p": 79.2
      },
      {
       "x": 5.0,
       "n": "80,4%",
       "p": 70.8
      },
      {
       "x": 5.5,
       "n": "72,0%",
       "p": 69.4
      },
      {
       "x": 6.0,
       "n": "65,5%",
       "p": 63.9
      }
     ],
     "nhan_n": "Đúng trên tập huấn luyện",
     "nhan_p": "Đúng trên tập kiểm tra",
     "so_le_x": 1,
     "bat_dau": 6
    },
    {
     "t": "anh",
     "cap": "Huấn luyện = thử các ngưỡng, giữ ngưỡng đúng nhất trên tập huấn luyện",
     "alt": "Huấn luyện = thử các ngưỡng, giữ ngưỡng đúng nhất trên tập huấn luyện",
     "src": "img/do-chinh-xac-theo-tung-nguong.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "kết quả huấn luyện",
     "de": null,
     "cot": [
      "",
      "Tập huấn luyện",
      "Tập kiểm tra"
     ],
     "dong": [
      [
       "Model lười",
       "53,6%",
       "54,2%"
      ],
      [
       "Model ngưỡng t = 3,5",
       "91,1%",
       "<b>91,7%</b>"
      ]
     ],
     "ket_luan": "Ngưỡng được chọn chỉ bằng tập huấn luyện; tập kiểm tra xác nhận model học được quy luật thật — vượt xa mốc lười.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nối với bài sau",
     "html": "Mỗi thuật toán ở Phần B là một kiểu quy tắc khác nhau với tham số khác nhau: KNN (Bài 13) dùng số láng giềng K, hồi quy tuyến tính dùng hệ số a, b (Bài 6 đã gặp)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn ngưỡng bằng cách nhìn tập kiểm tra — như vậy tập kiểm tra không còn “giấu”.",
      "Nghĩ tham số do máy tự đặt ngẫu nhiên — máy tìm nó từ dữ liệu."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Model = quy tắc có tham số. Huấn luyện = tìm tham số tốt nhất trên tập huấn luyện; tập kiểm tra để xác nhận."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai12-q8",
     "q": "Trong model “học từ t giờ trở lên thì Đạt”, t được gọi là gì?",
     "giai": "t là con số điều chỉnh được của quy tắc — tham số.",
     "goi_y": "Con số nào máy phải tìm khi huấn luyện?",
     "a": [
      "Tham số của model",
      "Nhãn của dữ liệu",
      "Tập kiểm tra",
      "Feature mới tạo"
     ],
     "h": "1624eb42a1d5c"
    },
    {
     "k": "ds",
     "id": "bai12-q9",
     "q": "Khi huấn luyện, nên chọn ngưỡng cho kết quả cao nhất trên tập kiểm tra.",
     "giai": "Chọn tham số bằng tập huấn luyện; tập kiểm tra chỉ để xác nhận ở cuối.",
     "goi_y": "Tập kiểm tra có được dùng trong lúc huấn luyện không?",
     "h": "39a6c83f88bac"
    }
   ]
  },
  {
   "ten": "Học thật hay học vẹt",
   "ten_ngan": "Học vẹt",
   "phut": 5,
   "muc_tieu": "nhận ra model học vẹt và phân biệt chưa khớp, vừa khớp, học vẹt.",
   "khoi_dong": "Một model thuộc lòng từng dòng của tập huấn luyện, đúng 100%. Nó có đoán tốt cho bạn mới không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Học vẹt (overfitting — quá khớp)",
     "html": "Model khớp quá sát tập huấn luyện, nhớ cả những ngoại lệ, nên <b>đúng rất cao trên dữ liệu đã học nhưng kém trên dữ liệu mới</b>.",
     "ky_hieu": "Dấu hiệu: độ chính xác trên tập huấn luyện cao hơn hẳn trên tập kiểm tra."
    },
    {
     "t": "dinh_nghia",
     "ten": "Chưa khớp (underfitting)",
     "html": "Model quá đơn giản, bỏ sót quy luật — <b>kém cả trên tập huấn luyện lẫn tập kiểm tra</b>. Model tốt là <b>vừa khớp</b>: bắt đúng xu hướng chung, chấp nhận vài ngoại lệ.",
     "ky_hieu": null
    },
    {
     "t": "anh",
     "cap": "Ba model trên dữ liệu đã học và dữ liệu chưa thấy",
     "alt": "Ba model trên dữ liệu đã học và dữ liệu chưa thấy",
     "src": "img/ba-model-tren-train-va-test.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "ba model trên bảng khối 10",
     "de": null,
     "cot": [
      "Model",
      "Đã học (train)",
      "Chưa thấy (test)",
      "Nhận xét"
     ],
     "dong": [
      [
       "Lười — đoán hết Đạt",
       "53,6%",
       "54,2%",
       "Mốc so sánh"
      ],
      [
       "Ngưỡng 3,5 giờ",
       "91,1%",
       "91,7%",
       "<b>Vừa khớp</b>"
      ],
      [
       "Học vẹt — nhớ từng dòng",
       "100,0%",
       "54,2%",
       "Học vẹt"
      ]
     ],
     "ket_luan": "Model học vẹt nhớ 168 dòng đã học; gặp bạn mới không có trong sổ nó chỉ biết đoán Đạt — rơi đúng về mốc lười.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "anh",
     "cap": "Ba kiểu model: chưa khớp, vừa khớp, học vẹt",
     "alt": "Ba kiểu model: chưa khớp, vừa khớp, học vẹt",
     "src": "img/chua-khop-vua-khop-hoc-vet.png"
    },
    {
     "t": "video",
     "yt": "EuBBz3bI-aA",
     "ten": "StatQuest — Machine Learning Fundamentals: Bias and Variance",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — nói về chưa khớp và học vẹt",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Khen model đúng 100% trên tập huấn luyện.",
      "Nghĩ model phức tạp hơn luôn tốt hơn."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Model giỏi không phải model nhớ nhiều, mà là model đoán đúng thứ nó chưa từng thấy."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai12-q10",
     "q": "Model A: train 99%, test 60%. Model B: train 85%, test 83%. Nên chọn model nào?",
     "giai": "A học vẹt: chênh 39 điểm. B vừa khớp: train và test gần nhau.",
     "goi_y": "Cột nào cho biết model làm tốt với dữ liệu mới?",
     "a": [
      "Model B, vì đúng với dữ liệu mới",
      "Model A, vì train cao hơn",
      "Model A, vì học kỹ hơn",
      "Hai model tốt như nhau"
     ],
     "h": "de980cf48da1c"
    },
    {
     "k": "dd",
     "id": "bai12-q11",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Chưa khớp: quá đơn giản. Học vẹt: nhớ tập huấn luyện.",
     "goi_y": "Model quá đơn giản kém ở đâu? Model thuộc lòng kém ở đâu?",
     "mau": "Kém cả trên train lẫn test là {0}; tốt trên train nhưng kém trên test là {1}.",
     "o": [
      [
       "chưa khớp",
       "học vẹt",
       "vừa khớp",
       "rò rỉ"
      ],
      [
       "học vẹt",
       "chưa khớp",
       "vừa khớp",
       "lệch nhãn"
      ]
     ],
     "h": "82d3b5079f8ee"
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
    "id": "bai12-q12",
    "q": "Nhìn hình. Theo quy luật của 12 bạn đã biết, bạn A nhiều khả năng thế nào?",
    "giai": "A học nhiều, dùng mạng ít — nằm giữa các bạn Đạt.",
    "img": {
     "src": "img/muoi-hai-ban-da-biet-va-ba-ban-moi.png"
    },
    "a": [
     "Đạt",
     "Chưa đạt",
     "Không đoán được gì",
     "Giống hệt bạn B"
    ],
    "h": "974b1dea7fd95"
   },
   {
    "k": "mc",
    "id": "bai12-q13",
    "q": "Nhìn hình. Ngưỡng nào đúng nhất trên tập huấn luyện?",
    "giai": "Đỉnh đường tập huấn luyện ở 3,5 giờ.",
    "img": {
     "src": "img/do-chinh-xac-theo-tung-nguong.png"
    },
    "a": [
     "3,5 giờ",
     "1,0 giờ",
     "5,0 giờ",
     "2,0 giờ"
    ],
    "h": "147c758267e20f"
   },
   {
    "k": "mc",
    "id": "bai12-q14",
    "q": "Nhìn hình. Model học vẹt đúng bao nhiêu trên dữ liệu chưa thấy?",
    "giai": "Nhớ từng dòng nhưng gặp dòng mới thì chỉ đoán Đạt.",
    "img": {
     "src": "img/ba-model-tren-train-va-test.png"
    },
    "a": [
     "54,2%",
     "100,0%",
     "91,7%",
     "91,1%"
    ],
    "h": "ebd1947c5dfa5"
   },
   {
    "k": "mc",
    "id": "bai12-q15",
    "q": "Nhìn hình. Cột nào của bảng là nhãn?",
    "giai": "Cột khoanh vàng — đáp án đã biết sẵn.",
    "img": {
     "src": "img/bang-du-lieu-co-nhan.png"
    },
    "a": [
     "Result",
     "StudyHours",
     "HoTen",
     "Score"
    ],
    "h": "1ef8c070131ec3"
   },
   {
    "k": "mc",
    "id": "bai12-q16",
    "q": "Đoán số lượt xem một video sau một tuần là bài toán gì?",
    "giai": "Nhãn là con số — hồi quy.",
    "a": [
     "Hồi quy",
     "Phân loại hai nhóm",
     "Phân loại nhiều nhóm",
     "Không có nhãn"
    ],
    "h": "18e49abc5e2c74"
   },
   {
    "k": "mc",
    "id": "bai12-q17",
    "q": "Đoán một bức ảnh là chó, mèo hay thỏ là bài toán gì?",
    "giai": "Ba nhóm, mỗi ảnh thuộc một nhóm.",
    "a": [
     "Phân loại nhiều nhóm",
     "Phân loại hai nhóm",
     "Hồi quy",
     "Phân loại nhiều nhãn"
    ],
    "h": "b0d55a400fbf2"
   },
   {
    "k": "mc",
    "id": "bai12-q18",
    "q": "Model đúng 97% trên train và 58% trên test. Đây là hiện tượng gì?",
    "giai": "Chênh lệch lớn giữa train và test.",
    "a": [
     "Học vẹt",
     "Chưa khớp",
     "Vừa khớp",
     "Rò rỉ dữ liệu"
    ],
    "h": "11d37b4de7138b"
   },
   {
    "k": "mc",
    "id": "bai12-q19",
    "q": "Model đúng 55% trên train và 54% trên test, mốc lười là 54%. Đây là gì?",
    "giai": "Không hơn mốc lười — quá đơn giản.",
    "a": [
     "Chưa khớp",
     "Học vẹt",
     "Vừa khớp",
     "Model rất tốt"
    ],
    "h": "4fff0b09409b"
   },
   {
    "k": "mc",
    "id": "bai12-q20",
    "q": "Vì sao phải so model với mốc model lười?",
    "giai": "Không vượt mốc lười là chưa học được quy luật nào.",
    "a": [
     "Để biết model có học được gì không",
     "Để model chạy nhanh hơn nhiều lần",
     "Để tăng số dòng của dữ liệu",
     "Để chọn ra cột nhãn phù hợp"
    ],
    "h": "1670f5349fac46"
   },
   {
    "k": "ma",
    "id": "bai12-q21",
    "q": "Những bài toán nào là phân loại? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hai bài đầu có nhãn là nhóm.",
    "a": [
     "Email rác hay không rác",
     "Khối u lành hay ác",
     "Giá nhà bao nhiêu tỉ đồng",
     "Nhiệt độ ngày mai bao nhiêu độ"
    ],
    "h": "197352b576cee0"
   },
   {
    "k": "ma",
    "id": "bai12-q22",
    "q": "Những dấu hiệu nào cho thấy model học vẹt? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Học vẹt: khớp quá sát train.",
    "a": [
     "Train rất cao, test thấp hơn hẳn",
     "Nhớ cả các ngoại lệ trong train",
     "Train và test gần bằng nhau",
     "Train và test đều thấp"
    ],
    "h": "1bd17ebcf91ab0"
   },
   {
    "k": "ma",
    "id": "bai12-q23",
    "q": "Những việc nào thuộc bước huấn luyện? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Chấm là bước 5; chia là bước 2.",
    "a": [
     "Thử nhiều giá trị tham số",
     "Giữ tham số đúng nhất trên train",
     "Chấm model trên tập kiểm tra",
     "Chia dữ liệu thành hai phần"
    ],
    "h": "12b634584b6872"
   },
   {
    "k": "ma",
    "id": "bai12-q24",
    "q": "Những phát biểu nào đúng về học có giám sát? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gồm cả phân loại và hồi quy; luôn cần kiểm tra.",
    "a": [
     "Cần dữ liệu có nhãn",
     "Dự đoán nhãn cho dữ liệu mới",
     "Không cần tập kiểm tra",
     "Chỉ dùng cho bài toán hồi quy"
    ],
    "h": "e84b7727ace7c"
   },
   {
    "k": "sx",
    "id": "bai12-q25",
    "q": "Sắp xếp các bước huấn luyện model ngưỡng.",
    "giai": "Thử → tính → giữ → chấm.",
    "a": [
     "Chọn danh sách ngưỡng để thử",
     "Tính độ chính xác của từng ngưỡng trên train",
     "Giữ ngưỡng có độ chính xác cao nhất",
     "Chấm ngưỡng đó trên tập kiểm tra"
    ],
    "h": "1635f35f4440a1"
   },
   {
    "k": "sx",
    "id": "bai12-q26",
    "q": "Sắp xếp các bước kiểm tra xem model có học vẹt không.",
    "giai": "Học → đo train → đo test → so.",
    "a": [
     "Huấn luyện model trên tập huấn luyện",
     "Tính độ chính xác trên tập huấn luyện",
     "Tính độ chính xác trên tập kiểm tra",
     "So hai con số với nhau"
    ],
    "h": "109be09312518"
   },
   {
    "k": "dd",
    "id": "bai12-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Dữ liệu có nhãn; phân loại và hồi quy.",
    "mau": "Học có giám sát học từ dữ liệu {0}; hai loại bài toán là phân loại và {1}.",
    "o": [
     [
      "có nhãn",
      "không nhãn",
      "bị trùng",
      "bị trống"
     ],
     [
      "hồi quy",
      "làm sạch",
      "tương quan",
      "trực quan hoá"
     ]
    ],
    "h": "194f91c4da57a2"
   },
   {
    "k": "dd",
    "id": "bai12-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Tham số; huấn luyện.",
    "mau": "Con số điều chỉnh được của model gọi là {0}; tìm nó trên tập huấn luyện gọi là {1}.",
    "o": [
     [
      "tham số",
      "nhãn",
      "feature",
      "mốc"
     ],
     [
      "huấn luyện",
      "đánh giá",
      "chia dữ liệu",
      "làm sạch"
     ]
    ],
    "h": "14cb4a9715baf2"
   },
   {
    "k": "dd",
    "id": "bai12-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Số trong bảng ba model.",
    "mau": "Model ngưỡng 3,5 giờ đúng {0} trên tập kiểm tra; model lười đúng {1}.",
    "o": [
     [
      "91,7%",
      "100,0%",
      "54,2%",
      "91,1%"
     ],
     [
      "54,2%",
      "91,7%",
      "100,0%",
      "50,0%"
     ]
    ],
    "h": "2334c5d4b63a9"
   },
   {
    "k": "dd",
    "id": "bai12-q30",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Đoán đúng thứ chưa từng thấy.",
    "mau": "Model tốt là model {0}: đúng với dữ liệu {1}.",
    "o": [
     [
      "vừa khớp",
      "học vẹt",
      "chưa khớp",
      "lười"
     ],
     [
      "chưa từng thấy",
      "đã học thuộc",
      "bị trùng",
      "bị xoá"
     ]
    ],
    "h": "ad244f1b8161a"
   },
   {
    "k": "ds",
    "id": "bai12-q31",
    "q": "Model đúng 100% trên tập huấn luyện chắc chắn là model tốt.",
    "giai": "Có thể là học vẹt — phải xem tập kiểm tra.",
    "h": "efa75c769d77f"
   },
   {
    "k": "ds",
    "id": "bai12-q32",
    "q": "Nhãn 0/1 thì bài toán là hồi quy.",
    "giai": "0/1 là tên hai nhóm — phân loại.",
    "h": "c9c5cd7eb99a3"
   },
   {
    "k": "ds",
    "id": "bai12-q33",
    "q": "Một model không vượt mốc model lười là chưa học được quy luật nào đáng kể.",
    "giai": "Mốc lười là mức đoán không cần học.",
    "h": "1bd1f249c200c0"
   },
   {
    "k": "ds",
    "id": "bai12-q34",
    "q": "Cả phân loại và hồi quy đều là học có giám sát.",
    "giai": "Cả hai học từ dữ liệu có nhãn.",
    "h": "9936c116406f5"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
