window.BAI = {
 "bai": 8,
 "ma": "bai08",
 "nhan": "Bài 8",
 "tieu_de": "Chuẩn bị feature và chia dữ liệu",
 "phan": "Module 06 · Data Preparation",
 "cau_hoi": "Model đúng gần 90% — đã đáng tin chưa?",
 "gioi_thieu": [
  "Bảng học sinh đã được con dọn sạch ở Bài 7: 90 bạn, trong đó 79 Đạt và chỉ 11 Chưa đạt. Một model “lười” đoán <b>mọi bạn đều Đạt</b> vẫn đúng 87,8%. Vậy model đó có dùng được không?",
  "Năm chặng dưới đây là những việc phải làm <b>sau khi làm sạch</b> và <b>trước khi huấn luyện</b>: chọn cột đầu vào, tạo cột mới, chia dữ liệu để kiểm tra, và cảnh giác với dữ liệu lệch nhãn. Bảng dùng trong bài là bảng mô phỏng.",
  "Con dùng lại việc đưa về cùng thang đo (Bài 6) và làm sạch (Bài 7)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai08",
 "muc_tieu": [
  "Phân biệt được feature (cột đầu vào) và nhãn (cột cần dự đoán).",
  "Tạo được feature mới từ các cột có sẵn và đổi cột chữ thành số.",
  "Chọn được feature phù hợp, loại được cột vô nghĩa và cột gây rò rỉ.",
  "Giải thích được vì sao phải chia dữ liệu thành tập huấn luyện và tập kiểm tra, và vai trò của stratify.",
  "Nhận ra bẫy độ chính xác khi dữ liệu lệch nhãn."
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
   "ten": "Feature và nhãn",
   "ten_ngan": "Feature và nhãn",
   "phut": 4,
   "muc_tieu": "phân biệt được feature và nhãn trong một bảng dữ liệu.",
   "khoi_dong": "Muốn máy đoán một bạn Đạt hay Chưa đạt, máy được nhìn những cột nào, và cột nào là câu trả lời?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Feature (đặc trưng) và nhãn (label)",
     "html": "<b>Feature</b> là các cột đầu vào mà model được nhìn để dự đoán. <b>Nhãn</b> (còn gọi là cột đích, target) là cột chứa câu trả lời mà model phải học cách đoán.",
     "ky_hieu": "Ký hiệu thường gặp: X là bảng các feature, y là cột nhãn."
    },
    {
     "t": "vi_du",
     "tieu_de": "các cột của bảng học sinh",
     "de": "Bài toán: đoán một bạn Đạt hay Chưa đạt.",
     "cot": [
      "Cột",
      "Ví dụ",
      "Vai trò",
      "Vì sao"
     ],
     "dong": [
      [
       "StudentID",
       "HS001",
       "Bỏ",
       "Mã số — không nói gì về việc học"
      ],
      [
       "HoTen",
       "Hoang Quan",
       "Bỏ",
       "Tên không làm một bạn học giỏi hơn"
      ],
      [
       "Lop, GioiTinh",
       "10A1, NU",
       "Có thể dùng",
       "Phải đổi chữ thành số trước (chặng 2)"
      ],
      [
       "StudyHours, SleepHours",
       "5,8 · 8,8",
       "<b>Feature</b>",
       "Thông tin có trước kỳ thi"
      ],
      [
       "Score",
       "9,7",
       "<b>Bỏ</b>",
       "Kết quả được xếp theo điểm — dùng là “nhìn trộm” đáp án"
      ],
      [
       "Result",
       "Pass",
       "<b>Nhãn</b>",
       "Câu trả lời cần đoán"
      ]
     ],
     "ket_luan": "Chỉ những cột có trước lúc cần dự đoán mới được làm feature.",
     "nhan_manh": [
      4,
      5
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Rò rỉ dữ liệu (data leakage)",
     "html": "Kết quả Đạt được xếp theo điểm (từ 5 điểm trở lên). Nếu đưa cột Score vào làm feature, model “đoán” gần đúng tuyệt đối — nhưng ngoài đời, lúc cần dự đoán thì chưa có điểm. Dùng thông tin mà lúc dự đoán chưa thể có gọi là <b>rò rỉ dữ liệu</b>."
    },
    {
     "t": "anh",
     "cap": "Năm nhóm việc chuẩn bị feature",
     "alt": "Năm nhóm việc chuẩn bị feature",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250701123223591115/processes.webp",
     "du_phong": "img/minh-hoa-nam-nhom-viec-chuan-bi-feature.png",
     "nguon": {
      "ten": "GeeksforGeeks — What is feature engineering",
      "url": "https://www.geeksforgeeks.org/machine-learning/what-is-feature-engineering/"
     },
     "chu_giai": [
      [
       "Feature Creation",
       "Tạo feature mới (chặng 2)"
      ],
      [
       "Feature Transformation",
       "Biến đổi feature, ví dụ đổi chữ thành số (chặng 2)"
      ],
      [
       "Feature Extraction",
       "Rút gọn nhiều cột thành ít cột (đọc thêm)"
      ],
      [
       "Feature Selection",
       "Chọn feature (chặng 3)"
      ],
      [
       "Feature Scaling",
       "Đưa về cùng thang đo (Bài 6)"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đưa cả cột mã số, họ tên vào model.",
      "Dùng cột được tính ra từ nhãn (Score) để đoán nhãn (Result)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Feature là cột đầu vào (X), nhãn là cột cần đoán (y). Chỉ dùng thông tin có sẵn lúc dự đoán."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "What is Feature Engineering?",
       "url": "https://www.geeksforgeeks.org/machine-learning/what-is-feature-engineering/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai08-q1",
     "q": "Bài toán: dự đoán giá một căn nhà. Cột nào là nhãn?",
     "giai": "Nhãn là thứ cần dự đoán: giá bán. Diện tích, số phòng là feature; mã số thì bỏ.",
     "goi_y": "Nhãn là câu trả lời mà model phải đoán ra.",
     "a": [
      "Giá bán của căn nhà",
      "Diện tích căn nhà",
      "Số phòng ngủ",
      "Mã số căn nhà"
     ],
     "h": "18306709fe0330"
    },
    {
     "k": "ma",
     "id": "bai08-q2",
     "q": "Dự đoán một bạn Đạt hay Chưa đạt. Những cột nào nên BỎ, không làm feature? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Mã số không mang thông tin; Score là rò rỉ vì Đạt được xếp theo điểm.",
     "goi_y": "Cột nào không nói gì về việc học? Cột nào lúc dự đoán chưa thể có?",
     "a": [
      "StudentID — mã học sinh",
      "Score — điểm học kỳ",
      "StudyHours — giờ tự học",
      "SleepHours — giờ ngủ"
     ],
     "h": "190724921f578d"
    },
    {
     "k": "ds",
     "id": "bai08-q3",
     "q": "Dùng cột Score để đoán Result là cách làm tốt vì model sẽ đoán rất chính xác.",
     "giai": "Đó là rò rỉ dữ liệu: lúc cần dự đoán thì chưa có điểm.",
     "goi_y": "Lúc thầy cô muốn dự đoán, đã có điểm học kỳ chưa?",
     "h": "5b6520e755747"
    }
   ]
  },
  {
   "ten": "Tạo feature mới và đổi chữ thành số",
   "ten_ngan": "Tạo feature",
   "phut": 4,
   "muc_tieu": "tạo được feature mới từ các cột có sẵn và đổi một cột chữ thành số.",
   "khoi_dong": "Con có cột giờ học và giờ ngủ. Con nghĩ ra thêm được con số nào có thể giúp đoán kết quả?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Tạo feature (feature engineering)",
     "html": "Dùng hiểu biết về bài toán để tạo cột mới từ các cột có sẵn — ví dụ cộng, chia hai cột. Máy không tự nghĩ ra ý nghĩa; con người đặt ra.",
     "ky_hieu": "<code>df[\"TongGio\"] = df[\"StudyHours\"] + df[\"SleepHours\"]</code>"
    },
    {
     "t": "vi_du",
     "tieu_de": "hai feature mới cho 3 bạn đầu bảng",
     "de": null,
     "cot": [
      "Mã",
      "Giờ học",
      "Giờ ngủ",
      "TongGio = học + ngủ",
      "TiLeHocNgu = học : ngủ"
     ],
     "dong": [
      [
       "HS001",
       "5,8",
       "8,8",
       "14,6",
       "0,66"
      ],
      [
       "HS002",
       "5,1",
       "7,9",
       "13,0",
       "0,65"
      ],
      [
       "HS003",
       "4,2",
       "6,2",
       "10,4",
       "0,68"
      ]
     ],
     "ket_luan": "Hai cột mới được tính từ hai cột cũ — không thêm dữ liệu nào ngoài bảng.",
     "nhan_manh": []
    },
    {
     "t": "dinh_nghia",
     "ten": "Đổi chữ thành số (mã hoá)",
     "html": "Model chỉ tính toán trên số. Cột chữ có hai giá trị như Giới tính có thể đổi thành 0 và 1.",
     "ky_hieu": "<code>df[\"Nu\"] = (df[\"GioiTinh\"] == \"NU\").astype(int)</code> — NU thành 1, NAM thành 0"
    },
    {
     "t": "vi_du",
     "tieu_de": "mã hoá cột Giới tính",
     "de": null,
     "cot": [
      "Mã",
      "GioiTinh",
      "Nu"
     ],
     "dong": [
      [
       "HS001",
       "NU",
       "1"
      ],
      [
       "HS002",
       "NU",
       "1"
      ],
      [
       "HS003",
       "NU",
       "1"
      ],
      [
       "HS004",
       "NAM",
       "0"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Đặt số cho chữ phải cẩn thận",
     "html": "Với cột Lớp có 3 giá trị, nếu đặt 10A1 = 1, 10A2 = 2, 10A3 = 3 thì model sẽ hiểu 10A3 “lớn gấp ba” 10A1 — điều vô nghĩa. Cách đúng là tạo mỗi lớp một cột 0/1 (con sẽ gặp lại ở các bài sau)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Tạo feature mới từ cột nhãn — lại là rò rỉ dữ liệu.",
      "Đánh số 1, 2, 3 cho các giá trị chữ không có thứ tự."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Tạo feature: dùng hiểu biết để tính cột mới. Mã hoá: đổi chữ thành số, cột hai giá trị dùng 0/1."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai08-q4",
     "q": "Bạn An học 3 giờ, ngủ 6 giờ. Feature TiLeHocNgu = giờ học : giờ ngủ của An bằng bao nhiêu?",
     "giai": "3 : 6 = 0,5. Số 2 là 6 : 3 (chia ngược); 9 là cộng.",
     "goi_y": "Giờ học đứng trên, giờ ngủ đứng dưới.",
     "a": [
      "0,5",
      "2",
      "9",
      "18"
     ],
     "h": "1f247f39f5af04"
    },
    {
     "k": "dd",
     "id": "bai08-q5",
     "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
     "giai": "(GioiTinh == \"NU\") cho True/False, đổi sang số: True = 1, False = 0.",
     "goi_y": "Điều kiện GioiTinh == \"NU\" đúng thì được số mấy?",
     "mau": "Mã hoá cột GioiTinh thành cột Nu: bạn NU có giá trị {0}, bạn NAM có giá trị {1}.",
     "o": [
      [
       "1",
       "0",
       "2",
       "−1"
      ],
      [
       "0",
       "1",
       "2",
       "−1"
      ]
     ],
     "h": "9c86a07ede132"
    },
    {
     "k": "ds",
     "id": "bai08-q6",
     "q": "Máy có thể tự hiểu cột “giờ học chia giờ ngủ” có ý nghĩa mà không cần con người tạo ra.",
     "giai": "Tạo feature cần hiểu biết về bài toán — do con người đặt ra.",
     "goi_y": "Ai quyết định lấy cột nào chia cột nào?",
     "h": "14a32743a65931"
    }
   ]
  },
  {
   "ten": "Chọn feature",
   "ten_ngan": "Chọn feature",
   "phut": 4,
   "muc_tieu": "chọn được feature liên quan tới nhãn và loại được feature thừa.",
   "khoi_dong": "Có bốn cột số: giờ học, giờ ngủ, tổng giờ, tỉ lệ học/ngủ. Dùng hết hay chỉ chọn vài cột?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Chọn feature (feature selection)",
     "html": "Giữ lại những feature <b>liên quan</b> tới nhãn và <b>không lặp lại</b> thông tin của nhau; bỏ những cột nhiễu. Ít feature tốt thường tốt hơn nhiều feature tệ.",
     "ky_hieu": "Một cách đơn giản: xếp hạng feature theo mức liên quan, giữ những cột đứng đầu."
    },
    {
     "t": "dinh_nghia",
     "ten": "Hệ số tương quan (xem trước Bài 10)",
     "html": "Con số từ −1 đến 1 cho biết hai cột số đi cùng nhau mạnh tới đâu: gần 1 là cùng tăng, gần −1 là một cột tăng thì cột kia giảm, gần 0 là gần như không liên quan.",
     "ky_hieu": "<code>df[[\"StudyHours\", \"SleepHours\"]].corrwith(df[\"Score\"])</code>"
    },
    {
     "t": "anh",
     "cap": "Hệ số tương quan của từng cột với điểm Score",
     "alt": "Hệ số tương quan của từng cột với điểm Score",
     "src": "img/tuong-quan-tung-cot-voi-diem.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc hình tương quan",
     "de": null,
     "cot": [
      "Feature",
      "Tương quan với Score",
      "Quyết định"
     ],
     "dong": [
      [
       "StudyHours",
       "0,82",
       "<b>Giữ</b> — liên quan mạnh"
      ],
      [
       "TongGio",
       "0,81",
       "Cân nhắc bỏ — gần như lặp lại StudyHours (tương quan với StudyHours là 0,83)"
      ],
      [
       "TiLeHocNgu",
       "0,69",
       "Có thể thử"
      ],
      [
       "SleepHours",
       "0,26",
       "Liên quan yếu"
      ]
     ],
     "ket_luan": "Chọn feature là cân nhắc, không phải chỉ lấy số lớn nhất: cột lặp lại thông tin thì thừa.",
     "nhan_manh": [
      0
     ]
    },
    {
     "t": "anh",
     "cap": "Phương pháp lọc: xếp hạng feature rồi giữ những cột đứng đầu",
     "alt": "Phương pháp lọc: xếp hạng feature rồi giữ những cột đứng đầu",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250512165146012474/1.webp",
     "du_phong": "img/minh-hoa-xep-hang-va-chon-ra-feature-tot-nhat.png",
     "nguon": {
      "ten": "GeeksforGeeks — Feature selection techniques in machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/feature-selection-techniques-in-machine-learning/"
     },
     "chu_giai": [
      [
       "Filter Method",
       "Phương pháp lọc"
      ],
      [
       "Rank features by statistical score",
       "Xếp hạng feature theo một chỉ số thống kê"
      ],
      [
       "Select top-ranked features",
       "Chọn các feature đứng đầu"
      ],
      [
       "Feed into model",
       "Đưa vào model"
      ],
      [
       "Selection, Ranking",
       "Chọn, xếp hạng"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Nhắc lại Bài 6",
     "html": "Nếu model đo khoảng cách (như KNN, Bài 13), nhớ đưa các feature đã chọn về cùng thang đo trước khi huấn luyện."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Giữ hai cột gần như giống nhau (TongGio và StudyHours) rồi nghĩ model có thêm thông tin.",
      "Nghĩ tương quan thấp là cột vô dụng tuyệt đối — nó chỉ yếu khi đứng một mình."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Chọn feature liên quan tới nhãn, bỏ cột nhiễu và cột lặp thông tin. Tương quan là một công cụ xếp hạng."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Feature Selection Techniques in Machine Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/feature-selection-techniques-in-machine-learning/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai08-q7",
     "q": "Theo hình, cột nào liên quan tới điểm Score yếu nhất?",
     "giai": "SleepHours có tương quan 0,26 — nhỏ nhất trong bốn cột.",
     "goi_y": "Thanh nào ngắn nhất trong hình?",
     "a": [
      "SleepHours",
      "StudyHours",
      "TongGio",
      "TiLeHocNgu"
     ],
     "h": "84862e56b16a3"
    },
    {
     "k": "mc",
     "id": "bai08-q8",
     "q": "Hệ số tương quan giữa hai cột bằng −0,9. Điều đó nghĩa là gì?",
     "giai": "Gần −1: liên quan mạnh nhưng ngược chiều.",
     "goi_y": "Dấu âm nói về chiều, độ lớn gần 1 nói về mức mạnh.",
     "a": [
      "Một cột tăng thì cột kia thường giảm",
      "Hai cột gần như không liên quan",
      "Hai cột cùng tăng cùng giảm",
      "Hai cột có đơn vị khác nhau"
     ],
     "h": "123b9188ec95d4"
    },
    {
     "k": "ds",
     "id": "bai08-q9",
     "q": "Hai feature gần như lặp lại thông tin của nhau thì nên giữ cả hai để model mạnh hơn.",
     "giai": "Cột lặp thông tin không thêm gì mới, chỉ làm model rối hơn.",
     "goi_y": "Cột thứ hai cho model biết thêm điều gì mới không?",
     "h": "9b9f2d9bfb6c9"
    }
   ]
  },
  {
   "ten": "Chia dữ liệu: tập huấn luyện và tập kiểm tra",
   "ten_ngan": "Chia dữ liệu",
   "phut": 5,
   "muc_tieu": "giải thích được vì sao phải giữ riêng một tập kiểm tra và vai trò của stratify.",
   "khoi_dong": "Nếu thầy cô cho đề kiểm tra y hệt đề đã chữa trên lớp, điểm cao có chứng minh con đã hiểu bài không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Tập huấn luyện và tập kiểm tra",
     "html": "Chia bảng thành hai phần: <b>tập huấn luyện</b> (train) cho model học, <b>tập kiểm tra</b> (test) giấu đi, chỉ dùng để chấm model ở cuối — như đề thi model chưa từng thấy.",
     "ky_hieu": "<code>train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)</code>"
    },
    {
     "t": "vi_du",
     "tieu_de": "chia bảng 90 bạn",
     "de": "test_size = 0,3 nghĩa là 30% cho kiểm tra.",
     "cot": [
      "Phần",
      "Số bạn",
      "Trong đó Chưa đạt"
     ],
     "dong": [
      [
       "Tập huấn luyện (70%)",
       "63",
       "8"
      ],
      [
       "Tập kiểm tra (30%)",
       "27",
       "3"
      ],
      [
       "Cả bảng",
       "90",
       "11"
      ]
     ],
     "ket_luan": "0,3 × 90 = 27 bạn kiểm tra; 63 bạn còn lại để học.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Bộ dữ liệu lớn thường chia ba phần; bài này chia hai phần cho gọn",
     "alt": "Bộ dữ liệu lớn thường chia ba phần; bài này chia hai phần cho gọn",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260903104045073711/frame_3386.webp",
     "du_phong": "img/minh-hoa-chia-du-lieu-thanh-train-validation-test.png",
     "nguon": {
      "ten": "GeeksforGeeks — Splitting data for machine learning models",
      "url": "https://www.geeksforgeeks.org/machine-learning/splitting-data-for-machine-learning-models/"
     },
     "chu_giai": [
      [
       "Original Dataset",
       "Bộ dữ liệu ban đầu"
      ],
      [
       "Training Set (70–80%)",
       "Tập huấn luyện"
      ],
      [
       "Validation / Dev Set",
       "Tập kiểm định — dùng để chỉnh model (Bài 24)"
      ],
      [
       "Test Set",
       "Tập kiểm tra — chấm cuối cùng"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Stratify — chia giữ đúng tỉ lệ nhãn",
     "html": "Khi nhãn lệch (ít bạn Chưa đạt), chia ngẫu nhiên có thể đưa quá nhiều hoặc quá ít bạn Chưa đạt vào tập kiểm tra. <code>stratify=y</code> giữ tỉ lệ Đạt / Chưa đạt ở hai tập giống như cả bảng.",
     "ky_hieu": null
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "chia 10 lần, có và không có stratify",
     "huong_dan": "Mỗi lần chia với một random_state khác. Bấm “Bước tiếp” để xem số bạn Chưa đạt rơi vào tập kiểm tra.",
     "nhan_chon": "Cách chia",
     "cot": [
      "Lần chia",
      "Số bạn Chưa đạt trong tập kiểm tra"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Không stratify",
       "dong": [
        [
         "—",
         "(cả bảng có 11 bạn Chưa đạt)"
        ],
        [
         "0",
         "4"
        ],
        [
         "1",
         "8"
        ],
        [
         "2",
         "2"
        ],
        [
         "3",
         "1"
        ],
        [
         "4",
         "4"
        ],
        [
         "5",
         "3"
        ],
        [
         "6",
         "5"
        ],
        [
         "7",
         "4"
        ],
        [
         "8",
         "4"
        ],
        [
         "9",
         "5"
        ]
       ]
      },
      {
       "nhan": "Có stratify",
       "dong": [
        [
         "—",
         "(cả bảng có 11 bạn Chưa đạt)"
        ],
        [
         "0",
         "3"
        ],
        [
         "1",
         "3"
        ],
        [
         "2",
         "3"
        ],
        [
         "3",
         "3"
        ],
        [
         "4",
         "3"
        ],
        [
         "5",
         "3"
        ],
        [
         "6",
         "3"
        ],
        [
         "7",
         "3"
        ],
        [
         "8",
         "3"
        ],
        [
         "9",
         "3"
        ]
       ]
      }
     ]
    },
    {
     "t": "anh",
     "cap": "Không stratify: số bạn Chưa đạt trong tập kiểm tra nhảy từ 1 đến 8",
     "alt": "Không stratify: số bạn Chưa đạt trong tập kiểm tra nhảy từ 1 đến 8",
     "src": "img/so-ban-chua-dat-trong-tap-test.png"
    },
    {
     "t": "video",
     "yt": "fwY9Qv96DJY",
     "ten": "codebasics — Training and Testing Data",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — cách dùng train_test_split",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chấm model trên chính tập nó đã học — điểm cao nhưng không chứng minh gì.",
      "Nhìn vào tập kiểm tra để chỉnh model — tập kiểm tra không còn “giấu” nữa.",
      "Quên stratify khi nhãn lệch."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Train để học, test để chấm. Nhãn lệch thì chia với stratify=y."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Splitting Data for Machine Learning Models",
       "url": "https://www.geeksforgeeks.org/machine-learning/splitting-data-for-machine-learning-models/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai08-q10",
     "q": "Bảng có 200 dòng, chia với test_size=0.25. Tập kiểm tra có bao nhiêu dòng?",
     "giai": "0,25 × 200 = 50; tập huấn luyện 150.",
     "goi_y": "test_size là phần dành cho tập nào?",
     "a": [
      "50",
      "25",
      "150",
      "75"
     ],
     "h": "10f767d2825b9d"
    },
    {
     "k": "mc",
     "id": "bai08-q11",
     "q": "Vì sao không chấm model trên chính tập huấn luyện?",
     "giai": "Giống làm lại đề đã chữa: điểm cao không chứng minh hiểu bài.",
     "goi_y": "Nhớ ví dụ đề kiểm tra y hệt đề đã chữa.",
     "a": [
      "Model đã thấy đáp án nên điểm không đáng tin",
      "Vì tập huấn luyện luôn chứa rất nhiều lỗi",
      "Vì Pandas không cho phép làm như thế",
      "Vì tập huấn luyện có quá ít dòng dữ liệu"
     ],
     "h": "92efc77025f7a"
    },
    {
     "k": "sx",
     "id": "bai08-q12",
     "q": "Sắp xếp các bước chuẩn bị trước khi huấn luyện theo đúng thứ tự.",
     "giai": "Làm sạch → feature → chia → huấn luyện.",
     "goi_y": "Model học trên tập nào? Tập đó có từ bước nào?",
     "a": [
      "Làm sạch dữ liệu",
      "Tạo và chọn feature",
      "Chia tập huấn luyện và kiểm tra",
      "Huấn luyện model trên tập huấn luyện"
     ],
     "h": "1a3b962a202b8f"
    }
   ]
  },
  {
   "ten": "Dữ liệu lệch nhãn và bẫy độ chính xác",
   "ten_ngan": "Lệch nhãn",
   "phut": 5,
   "muc_tieu": "nhận ra bẫy độ chính xác khi dữ liệu lệch nhãn và biết hai cách cân bằng.",
   "khoi_dong": "Một model đoán mọi bạn đều Đạt, không học gì cả. Nó đúng bao nhiêu phần trăm trên bảng này?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Dữ liệu lệch nhãn (imbalanced data)",
     "html": "Một nhãn có số dòng nhiều hơn hẳn nhãn kia. Bảng này có 79 Đạt và 11 Chưa đạt — gấp khoảng 7 lần.",
     "ky_hieu": "Độ chính xác (accuracy) = <span class=\"frac\"><span>số lần đoán đúng</span><span>tổng số lần đoán</span></span>"
    },
    {
     "t": "anh",
     "cap": "Số bạn Đạt và Chưa đạt trong bảng 90 bạn",
     "alt": "Số bạn Đạt và Chưa đạt trong bảng 90 bạn",
     "src": "img/dat-nhieu-gap-bay-lan-chua-dat.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "model lười trên tập kiểm tra 27 bạn",
     "de": "Model lười: đoán mọi bạn Đạt.",
     "cot": [
      "",
      "Thật: Đạt",
      "Thật: Chưa đạt"
     ],
     "dong": [
      [
       "Model đoán Đạt",
       "24",
       "3"
      ],
      [
       "Model đoán Chưa đạt",
       "0",
       "0"
      ]
     ],
     "ket_luan": "Đúng 24/27 = 88,9% — nhưng bỏ sót <b>cả 3</b> bạn Chưa đạt, đúng những bạn cần giúp nhất.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Bảng nhầm lẫn của model lười trên tập kiểm tra",
     "alt": "Bảng nhầm lẫn của model lười trên tập kiểm tra",
     "src": "img/model-luoi-bo-sot-ban-chua-dat.png"
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Cùng độ chính xác, khác giá trị",
     "html": "Một model đơn giản “đoán Chưa đạt nếu học dưới 0,8 giờ” cũng đúng 88,9% trên tập kiểm tra, nhưng bắt được 2/3 bạn Chưa đạt. Cùng một con số độ chính xác — một model hữu ích, một model vô dụng."
    },
    {
     "t": "dinh_nghia",
     "ten": "Hai cách cân bằng dữ liệu",
     "html": "<b>Undersampling</b>: bớt dòng của nhãn nhiều. <b>Oversampling</b>: nhân thêm dòng của nhãn ít. Với bảng này, undersampling còn 11 Đạt + 11 Chưa đạt = 22 dòng — model lười chỉ còn đúng 50%.",
     "ky_hieu": null
    },
    {
     "t": "anh",
     "cap": "Một bộ dữ liệu lệch: khoảng 900 dòng nhãn 1, 100 dòng nhãn 0",
     "alt": "Một bộ dữ liệu lệch: khoảng 900 dòng nhãn 1, 100 dòng nhãn 0",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251218115519613114/HID2.png",
     "du_phong": "img/minh-hoa-du-lieu-lech-nhan-900-so-voi-100.png",
     "nguon": {
      "ten": "GeeksforGeeks — Handling imbalanced data for classification",
      "url": "https://www.geeksforgeeks.org/machine-learning/handling-imbalanced-data-for-classification/"
     },
     "chu_giai": [
      [
       "Imbalanced Class Distribution",
       "Phân bố nhãn bị lệch"
      ],
      [
       "Class Label",
       "Nhãn (0 hoặc 1)"
      ],
      [
       "Count",
       "Số dòng"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Sau oversampling: 900 – 900; sau undersampling: 100 – 100",
     "alt": "Sau oversampling: 900 – 900; sau undersampling: 100 – 100",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251218114034080341/HID1.png",
     "du_phong": "img/minh-hoa-oversampling-va-undersampling.png",
     "nguon": {
      "ten": "GeeksforGeeks — Handling imbalanced data for classification",
      "url": "https://www.geeksforgeeks.org/machine-learning/handling-imbalanced-data-for-classification/"
     },
     "chu_giai": [
      [
       "Original class distribution",
       "Phân bố nhãn ban đầu"
      ],
      [
       "Oversampled",
       "Sau khi nhân thêm nhãn ít"
      ],
      [
       "Undersampled",
       "Sau khi bớt nhãn nhiều"
      ],
      [
       "Counter({1: 900, 0: 100})",
       "900 dòng nhãn 1, 100 dòng nhãn 0"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Thấy độ chính xác cao là tin ngay, không xem model đoán sai ở nhãn nào.",
      "Undersampling làm mất nhiều dữ liệu — với bảng nhỏ phải cân nhắc."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Nhãn lệch thì độ chính xác cao có thể vô nghĩa. Luôn xem model bắt được bao nhiêu dòng của nhãn ít."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Handling Imbalanced Data for Classification",
       "url": "https://www.geeksforgeeks.org/machine-learning/handling-imbalanced-data-for-classification/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai08-q13",
     "q": "Một lớp có 38 bạn không bị cận và 2 bạn bị cận. Model đoán “không cận” cho mọi bạn đúng bao nhiêu phần trăm?",
     "giai": "38 : 40 = 0,95 — dù model không phát hiện được bạn nào bị cận.",
     "goi_y": "Đếm số lần đoán đúng rồi chia cho 40.",
     "a": [
      "95%",
      "5%",
      "50%",
      "100%"
     ],
     "h": "e38a428fdc88e"
    },
    {
     "k": "ds",
     "id": "bai08-q14",
     "q": "Model có độ chính xác 90% chắc chắn là một model tốt.",
     "giai": "Nếu 90% dữ liệu cùng một nhãn, model lười cũng đạt 90%.",
     "goi_y": "Nhớ model lười trên bảng này.",
     "h": "168eab7a405508"
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
    "id": "bai08-q15",
    "q": "Dự đoán một bệnh nhân có bệnh tiểu đường hay không. Cột nào là nhãn?",
    "giai": "Nhãn là câu trả lời cần đoán; các chỉ số khác là feature, mã hồ sơ thì bỏ.",
    "a": [
     "Có hay không bệnh tiểu đường",
     "Lượng đường trong máu",
     "Tuổi của bệnh nhân",
     "Mã hồ sơ bệnh nhân"
    ],
    "h": "9dcd355c97182"
   },
   {
    "k": "mc",
    "id": "bai08-q16",
    "q": "Bảng có 90 dòng, chia với test_size=0.3. Tập kiểm tra có bao nhiêu dòng?",
    "giai": "0,3 × 90 = 27.",
    "a": [
     "27",
     "63",
     "30",
     "9"
    ],
    "h": "15b2632fb6779c"
   },
   {
    "k": "mc",
    "id": "bai08-q17",
    "q": "Nhìn hình. Không stratify, số bạn Chưa đạt trong tập kiểm tra thay đổi thế nào?",
    "giai": "Từ 1 đến 8 tuỳ lần chia.",
    "img": {
     "src": "img/so-ban-chua-dat-trong-tap-test.png"
    },
    "a": [
     "Nhảy lung tung giữa các lần chia",
     "Lần nào cũng đúng bằng 3 bạn",
     "Lần nào cũng bằng 0 bạn",
     "Lần nào cũng bằng 11 bạn"
    ],
    "h": "16803b2a17e0cc"
   },
   {
    "k": "mc",
    "id": "bai08-q18",
    "q": "Nhìn hình. Model lười bỏ sót bao nhiêu bạn Chưa đạt trong tập kiểm tra?",
    "giai": "Model lười không bao giờ đoán Chưa đạt.",
    "img": {
     "src": "img/model-luoi-bo-sot-ban-chua-dat.png"
    },
    "a": [
     "3 bạn — tất cả",
     "0 bạn",
     "24 bạn",
     "1 bạn"
    ],
    "h": "799b43a0882b"
   },
   {
    "k": "mc",
    "id": "bai08-q19",
    "q": "Bạn Bình học 4 giờ, ngủ 8 giờ. Feature TongGio của Bình là bao nhiêu?",
    "giai": "4 + 8 = 12.",
    "a": [
     "12",
     "0,5",
     "2",
     "32"
    ],
    "h": "182b85fdcc428b"
   },
   {
    "k": "mc",
    "id": "bai08-q20",
    "q": "Một bảng có 95 email thường và 5 email rác. Model đoán “email thường” cho mọi email đúng bao nhiêu phần trăm?",
    "giai": "95 : 100 — nhưng không chặn được email rác nào.",
    "a": [
     "95%",
     "5%",
     "50%",
     "100%"
    ],
    "h": "1fe7c50e3199de"
   },
   {
    "k": "mc",
    "id": "bai08-q21",
    "q": "Vì sao không nên đánh số 10A1 = 1, 10A2 = 2, 10A3 = 3 cho cột Lớp?",
    "giai": "Lớp không có thứ tự; nên tạo mỗi lớp một cột 0/1.",
    "a": [
     "Model sẽ hiểu các lớp có thứ tự lớn nhỏ",
     "Vì Pandas không đổi được chữ thành số",
     "Vì cột Lớp luôn phải bỏ đi",
     "Vì số 3 quá lớn so với các cột khác"
    ],
    "h": "135e64fba175a2"
   },
   {
    "k": "mc",
    "id": "bai08-q22",
    "q": "Bảng có 1000 dòng: 900 nhãn 1, 100 nhãn 0. Undersampling thì còn bao nhiêu dòng?",
    "giai": "Bớt nhãn 1 còn 100: 100 + 100 = 200.",
    "a": [
     "200 dòng",
     "1000 dòng",
     "1800 dòng",
     "100 dòng"
    ],
    "h": "fd378e1528c76"
   },
   {
    "k": "mc",
    "id": "bai08-q23",
    "q": "Nhìn hình. Cột nào liên quan tới điểm mạnh nhất?",
    "giai": "StudyHours có tương quan 0,82 — cao nhất.",
    "img": {
     "src": "img/tuong-quan-tung-cot-voi-diem.png"
    },
    "a": [
     "StudyHours",
     "SleepHours",
     "TiLeHocNgu",
     "TongGio"
    ],
    "h": "18d15d827bee68"
   },
   {
    "k": "ma",
    "id": "bai08-q24",
    "q": "Những việc nào thuộc về chuẩn bị feature? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Xoá trùng là làm sạch (Bài 7); vẽ biểu đồ là EDA (Bài 9).",
    "a": [
     "Tạo cột mới từ các cột có sẵn",
     "Đổi cột chữ thành số",
     "Xoá các dòng bị trùng lặp",
     "Vẽ biểu đồ cho báo cáo"
    ],
    "h": "101dab0b23a4b5"
   },
   {
    "k": "ma",
    "id": "bai08-q25",
    "q": "Những cột nào KHÔNG nên làm feature khi dự đoán Đạt / Chưa đạt? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Mã số vô nghĩa; điểm học kỳ là rò rỉ.",
    "a": [
     "Mã học sinh",
     "Điểm học kỳ",
     "Giờ tự học",
     "Giờ ngủ",
     "Số lần nộp trễ"
    ],
    "h": "14e0ece5fc4944"
   },
   {
    "k": "ma",
    "id": "bai08-q26",
    "q": "Những phát biểu nào đúng về stratify=y? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Stratify chỉ thay đổi cách chia, không đổi kích thước hay xoá dòng.",
    "a": [
     "Giữ tỉ lệ nhãn ở hai tập giống cả bảng",
     "Hữu ích khi nhãn bị lệch",
     "Làm tập kiểm tra lớn hơn tập huấn luyện",
     "Xoá các dòng có nhãn ít"
    ],
    "h": "6d947a91d7d75"
   },
   {
    "k": "ma",
    "id": "bai08-q27",
    "q": "Những cách nào dùng để cân bằng dữ liệu lệch nhãn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hai cách: undersampling và oversampling.",
    "a": [
     "Bớt dòng của nhãn nhiều (undersampling)",
     "Nhân dòng của nhãn ít (oversampling)",
     "Xoá hết dòng của nhãn ít",
     "Đổi tên cột nhãn"
    ],
    "h": "701ec163339ed"
   },
   {
    "k": "ma",
    "id": "bai08-q28",
    "q": "Model đoán mọi bạn Đạt, đúng 88,9% trên tập kiểm tra. Những nhận xét nào đúng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Độ chính xác cao chỉ vì Đạt chiếm đa số.",
    "a": [
     "Model bỏ sót mọi bạn Chưa đạt",
     "Độ chính xác cao do nhãn lệch",
     "Model đã học rất tốt",
     "Model sẽ đúng 100% với bảng khác"
    ],
    "h": "f6bc719bf60a0"
   },
   {
    "k": "sx",
    "id": "bai08-q29",
    "q": "Sắp xếp các bước tạo một feature mới trong Pandas.",
    "giai": "Ý nghĩa → công thức → gán → kiểm tra.",
    "a": [
     "Nghĩ ra ý nghĩa của cột mới",
     "Viết công thức từ các cột có sẵn",
     "Gán vào df[\"TenCotMoi\"]",
     "Kiểm tra vài dòng bằng head()"
    ],
    "h": "a45de4d5a27d3"
   },
   {
    "k": "sx",
    "id": "bai08-q30",
    "q": "Sắp xếp các bước chọn feature bằng phương pháp lọc.",
    "giai": "Tính → xếp hạng → chọn → đưa vào model.",
    "a": [
     "Tính mức liên quan của từng cột với nhãn",
     "Xếp hạng các cột",
     "Giữ các cột đứng đầu, bỏ cột lặp thông tin",
     "Đưa các cột đã chọn vào model"
    ],
    "h": "1689b30f6bd48e"
   },
   {
    "k": "sx",
    "id": "bai08-q31",
    "q": "Sắp xếp quy trình từ dữ liệu thô tới đánh giá model.",
    "giai": "Sạch → feature → chia → học → chấm.",
    "a": [
     "Làm sạch dữ liệu",
     "Chuẩn bị feature",
     "Chia train và test",
     "Huấn luyện trên train",
     "Chấm trên test"
    ],
    "h": "178701f614f420"
   },
   {
    "k": "dd",
    "id": "bai08-q32",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Feature là đầu vào; nhãn là câu trả lời.",
    "mau": "Cột đầu vào gọi là {0}, cột cần dự đoán gọi là {1}.",
    "o": [
     [
      "feature",
      "nhãn",
      "tập kiểm tra",
      "tương quan"
     ],
     [
      "nhãn",
      "feature",
      "tập huấn luyện",
      "stratify"
     ]
    ],
    "h": "45a2c63c1e685"
   },
   {
    "k": "dd",
    "id": "bai08-q33",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "test_size là tỉ lệ (0.2); stratify nhận cột nhãn y.",
    "mau": "train_test_split(X, y, test_size={0}, stratify={1}) dành 20% cho kiểm tra và giữ tỉ lệ nhãn.",
    "o": [
     [
      "0.2",
      "20",
      "0.8",
      "2"
     ],
     [
      "y",
      "X",
      "True",
      "0.2"
     ]
    ],
    "h": "1d5c3d5f31a880"
   },
   {
    "k": "dd",
    "id": "bai08-q34",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Rò rỉ dữ liệu làm model trông giỏi hơn thật.",
    "mau": "Dùng thông tin mà lúc dự đoán {0} gọi là {1}.",
    "o": [
     [
      "chưa thể có",
      "đã có sẵn",
      "bị trùng",
      "bị trống"
     ],
     [
      "rò rỉ dữ liệu",
      "chọn feature",
      "stratify",
      "undersampling"
     ]
    ],
    "h": "165c9383cc8fc9"
   },
   {
    "k": "dd",
    "id": "bai08-q35",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Train để học, test để chấm.",
    "mau": "Tập {0} dùng để model học; tập {1} giấu đi để chấm ở cuối.",
    "o": [
     [
      "huấn luyện",
      "kiểm tra",
      "nhãn",
      "feature"
     ],
     [
      "kiểm tra",
      "huấn luyện",
      "nhãn",
      "feature"
     ]
    ],
    "h": "17fbc440cd3c29"
   },
   {
    "k": "dd",
    "id": "bai08-q36",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "1: cùng tăng; −1: ngược chiều; 0: không liên quan.",
    "mau": "Hệ số tương quan gần {0} nghĩa là hai cột cùng tăng; gần {1} nghĩa là gần như không liên quan.",
    "o": [
     [
      "1",
      "0",
      "−1",
      "10"
     ],
     [
      "0",
      "1",
      "−1",
      "0,5"
     ]
    ],
    "h": "13219cb26cc27d"
   },
   {
    "k": "ds",
    "id": "bai08-q37",
    "q": "Tập kiểm tra được dùng để model học thêm cho tốt hơn.",
    "giai": "Tập kiểm tra chỉ để chấm; model không được học trên đó.",
    "h": "95c2adc585b21"
   },
   {
    "k": "ds",
    "id": "bai08-q38",
    "q": "Cùng một độ chính xác, hai model có thể có giá trị rất khác nhau.",
    "giai": "Model ngưỡng giờ học và model lười cùng 88,9% nhưng một model bắt được bạn Chưa đạt.",
    "h": "14a0e30aa41673"
   },
   {
    "k": "ds",
    "id": "bai08-q39",
    "q": "Mã hoá cột Giới tính thành 0 và 1 là một cách biến đổi feature.",
    "giai": "Đổi chữ thành số là feature transformation.",
    "h": "150eb6adc027b8"
   },
   {
    "k": "ds",
    "id": "bai08-q40",
    "q": "Undersampling làm tăng số dòng của bảng.",
    "giai": "Undersampling bớt dòng của nhãn nhiều nên bảng nhỏ đi.",
    "h": "9038224581081"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
