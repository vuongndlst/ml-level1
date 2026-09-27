window.BAI = {
 "bai": 15,
 "ma": "bai15",
 "nhan": "Bài 15",
 "tieu_de": "Hồi quy tuyến tính",
 "phan": "Module 09 · Regression Models",
 "cau_hoi": "Chiếc điện thoại cũ này nên rao bao nhiêu tiền?",
 "gioi_thieu": [
  "Từ Bài 12 tới giờ, các model của con đều đoán một <b>nhãn</b> (Đạt / Chưa đạt). Hôm nay con dự đoán một <b>con số</b>: giá của một chiếc điện thoại cũ. Đó là bài toán <b>hồi quy</b>.",
  "Năm chặng: hồi quy là gì, tự kẻ đường tốt nhất, đọc hai số a và b, đo model hồi quy tốt tới đâu, và dùng nhiều cột trong scikit-learn. Bảng 120 tin rao là bảng <b>mô phỏng</b>.",
  "Con dùng lại: biểu đồ phân tán và tương quan (Bài 10), gradient descent (Bài 6), chia dữ liệu và mốc model lười (Bài 8, 12)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai15",
 "muc_tieu": [
  "Phân biệt được bài toán hồi quy với bài toán phân loại.",
  "Giải thích được “đường tốt nhất” là đường có tổng bình phương sai số nhỏ nhất.",
  "Đọc được ý nghĩa của hệ số góc a và hệ số chặn b trong bối cảnh.",
  "Đánh giá model hồi quy bằng MAE và R², so với model lười.",
  "Huấn luyện hồi quy nhiều cột bằng scikit-learn và nhận ra cột vô dụng."
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
   "ten": "Dự đoán một con số",
   "ten_ngan": "Hồi quy là gì",
   "phut": 4,
   "muc_tieu": "phân biệt được bài toán hồi quy với bài toán phân loại.",
   "khoi_dong": "Đoán “Đạt hay Chưa đạt” và đoán “giá bao nhiêu triệu” — hai câu hỏi khác nhau ở chỗ nào?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Hồi quy (regression)",
     "html": "Bài toán học có giám sát mà cột cần dự đoán là <b>một con số liên tục</b>: giá tiền, nhiệt độ, chiều cao, số điểm. Phân loại thì dự đoán <b>một nhãn</b> trong vài nhãn cho trước.",
     "ky_hieu": "Hồi quy tuyến tính: dự đoán bằng một đường thẳng <code>y = a·x + b</code>."
    },
    {
     "t": "anh",
     "cap": "Học có giám sát chia hai nhánh",
     "alt": "Học có giám sát chia hai nhánh",
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
       "Phân loại — nhãn cho trước"
      ],
      [
       "Regression (no Labels defined)",
       "Hồi quy — dự đoán con số"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "120 chiếc điện thoại cũ đang rao bán (mô phỏng): máy càng cũ, giá càng thấp",
     "alt": "120 chiếc điện thoại cũ đang rao bán (mô phỏng): máy càng cũ, giá càng thấp",
     "src": "img/gia-theo-tuoi-may.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "bảng dữ liệu",
     "de": null,
     "cot": [
      "Cột",
      "Ý nghĩa",
      "Vai trò"
     ],
     "dong": [
      [
       "TuoiMay",
       "Số tháng đã dùng",
       "feature"
      ],
      [
       "DungLuong",
       "Bộ nhớ (GB)",
       "feature"
      ],
      [
       "PinConLai",
       "Pin còn lại (%)",
       "feature"
      ],
      [
       "SoLanRoi",
       "Số lần làm rơi máy",
       "feature"
      ],
      [
       "Gia",
       "Giá rao bán (triệu đồng)",
       "<b>cột cần dự đoán</b>"
      ]
     ],
     "ket_luan": "Tương quan giữa tuổi máy và giá: r = -0,91 — xu hướng giảm rất rõ.",
     "nhan_manh": []
    },
    {
     "t": "anh",
     "cap": "Bốn ứng dụng của hồi quy tuyến tính",
     "alt": "Bốn ứng dụng của hồi quy tuyến tính",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251212171555881822/real_world_use_cases_of_linear_regression.webp",
     "du_phong": "img/minh-hoa-bon-ung-dung-thuc-te-cua-hoi-quy.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml linear regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/"
     },
     "chu_giai": [
      [
       "Stock Market Prediction",
       "Dự đoán giá cổ phiếu"
      ],
      [
       "Real Estate Price Prediction",
       "Dự đoán giá nhà đất"
      ],
      [
       "Medical Risk Prediction",
       "Dự đoán nguy cơ bệnh"
      ],
      [
       "Sales Forecasting",
       "Dự báo doanh số"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ cột cần dự đoán là số thì luôn là hồi quy — mã số học sinh là số nhưng không phải đại lượng.",
      "Nhầm “hồi quy” với “quay lại” — ở đây hồi quy chỉ việc dự đoán một con số."
     ]
    },
    {
     "t": "video",
     "yt": "7ArmBVF2dCs",
     "ten": "StatQuest — Linear Regression, Clearly Explained!!!",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Hồi quy dự đoán một con số; phân loại dự đoán một nhãn."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Linear Regression in Machine Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai15-q1",
     "q": "Bài toán nào là hồi quy?",
     "giai": "Nhiệt độ là một con số liên tục.",
     "goi_y": "Câu trả lời nào là một con số có thể lẻ tới phần thập phân?",
     "a": [
      "Dự đoán nhiệt độ ngày mai (°C)",
      "Dự đoán thư có phải thư rác",
      "Dự đoán ảnh là chó hay mèo",
      "Dự đoán học sinh Đạt hay Chưa đạt"
     ],
     "h": "1ac0bc7cb6a9c2"
    },
    {
     "k": "ds",
     "id": "bai15-q2",
     "q": "Dự đoán giá một chiếc điện thoại cũ là bài toán phân loại.",
     "giai": "Giá là con số liên tục → hồi quy.",
     "goi_y": "Giá có phải là một trong vài nhãn cho trước không?",
     "h": "105ca662ccc758"
    }
   ]
  },
  {
   "ten": "Tự kẻ đường tốt nhất",
   "ten_ngan": "Đường tốt nhất",
   "phut": 5,
   "muc_tieu": "giải thích được đường tốt nhất là đường có tổng bình phương sai số nhỏ nhất.",
   "khoi_dong": "Ba bạn kẻ ba đường khác nhau qua cùng một đám điểm. Đường nào tốt nhất — và đo bằng gì?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Sai số của một điểm = giá thật − giá đường đoán, đo theo chiều dọc",
     "alt": "Sai số của một điểm = giá thật − giá đường đoán, đo theo chiều dọc",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260112155359063476/observed_value.webp",
     "du_phong": "img/minh-hoa-gia-tri-quan-sat-va-gia-tri-du-doan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml linear regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/"
     },
     "chu_giai": [
      [
       "Observed value",
       "Giá trị thật"
      ],
      [
       "Predicted value",
       "Giá trị đoán"
      ],
      [
       "Random error",
       "Sai số"
      ],
      [
       "Intercept",
       "Hệ số chặn b"
      ],
      [
       "Slope",
       "Hệ số góc a"
      ]
     ]
    },
    {
     "t": "dinh_nghia",
     "ten": "Tổng bình phương sai số",
     "html": "Với mỗi điểm: lấy sai số (thật − đoán), bình phương lên, rồi cộng tất cả lại. <b>Đường tốt nhất là đường có tổng này nhỏ nhất.</b>",
     "ky_hieu": "Bình phương để sai số âm và dương không triệt tiêu nhau, và phạt nặng sai số lớn."
    },
    {
     "t": "demo_ke_duong",
     "id": "kd2",
     "tieu_de": "kẻ đường qua 90 máy của tập huấn luyện",
     "huong_dan": "Kéo a (độ dốc) và b (điểm cắt trục tung). Mỗi vạch đỏ là sai số của một máy. Cố làm tổng bình phương sai số nhỏ nhất, rồi bấm nút để so với đường của máy.",
     "diem": [
      [
       21,
       6.2
      ],
      [
       33,
       2.0
      ],
      [
       37,
       7.6
      ],
      [
       22,
       7.4
      ],
      [
       13,
       8.2
      ],
      [
       4,
       10.9
      ],
      [
       2,
       10.7
      ],
      [
       22,
       5.3
      ],
      [
       47,
       3.2
      ],
      [
       4,
       12.2
      ],
      [
       23,
       8.0
      ],
      [
       4,
       11.0
      ],
      [
       11,
       10.2
      ],
      [
       33,
       4.3
      ],
      [
       10,
       9.6
      ],
      [
       2,
       14.3
      ],
      [
       5,
       16.5
      ],
      [
       30,
       3.1
      ],
      [
       25,
       4.7
      ],
      [
       11,
       8.3
      ],
      [
       40,
       2.4
      ],
      [
       27,
       6.9
      ],
      [
       4,
       11.8
      ],
      [
       23,
       7.1
      ],
      [
       6,
       14.9
      ],
      [
       4,
       9.9
      ],
      [
       6,
       11.7
      ],
      [
       35,
       3.1
      ],
      [
       14,
       13.0
      ],
      [
       30,
       4.1
      ],
      [
       44,
       1.5
      ],
      [
       28,
       11.5
      ],
      [
       40,
       2.6
      ],
      [
       13,
       13.3
      ],
      [
       10,
       11.6
      ],
      [
       3,
       10.8
      ],
      [
       33,
       1.5
      ],
      [
       48,
       1.5
      ],
      [
       46,
       1.5
      ],
      [
       48,
       1.5
      ],
      [
       34,
       3.1
      ],
      [
       35,
       3.3
      ],
      [
       19,
       5.0
      ],
      [
       33,
       3.4
      ],
      [
       23,
       6.2
      ],
      [
       12,
       9.1
      ],
      [
       38,
       1.5
      ],
      [
       27,
       6.3
      ],
      [
       12,
       10.9
      ],
      [
       4,
       11.8
      ],
      [
       18,
       7.8
      ],
      [
       34,
       4.3
      ],
      [
       35,
       4.2
      ],
      [
       13,
       9.7
      ],
      [
       34,
       1.9
      ],
      [
       36,
       2.8
      ],
      [
       41,
       3.5
      ],
      [
       47,
       1.5
      ],
      [
       19,
       8.1
      ],
      [
       42,
       1.5
      ],
      [
       35,
       1.8
      ],
      [
       29,
       2.9
      ],
      [
       7,
       15.7
      ],
      [
       16,
       8.0
      ],
      [
       20,
       4.3
      ],
      [
       20,
       6.1
      ],
      [
       39,
       3.5
      ],
      [
       43,
       2.9
      ],
      [
       47,
       1.5
      ],
      [
       22,
       7.2
      ],
      [
       36,
       3.1
      ],
      [
       8,
       11.6
      ],
      [
       36,
       2.0
      ],
      [
       1,
       13.7
      ],
      [
       24,
       5.4
      ],
      [
       38,
       1.9
      ],
      [
       28,
       3.0
      ],
      [
       41,
       3.1
      ],
      [
       33,
       5.3
      ],
      [
       30,
       3.9
      ],
      [
       6,
       12.7
      ],
      [
       29,
       6.7
      ],
      [
       38,
       2.5
      ],
      [
       1,
       14.4
      ],
      [
       39,
       1.5
      ],
      [
       47,
       1.5
      ],
      [
       27,
       4.3
      ],
      [
       17,
       5.0
      ],
      [
       12,
       8.8
      ],
      [
       7,
       11.6
      ]
     ],
     "mien": {
      "x": [
       0,
       50
      ],
      "y": [
       0,
       18
      ]
     },
     "a": {
      "min": -0.6,
      "max": 0.1,
      "buoc": 0.01,
      "dau": -0.1,
      "so_le": 2
     },
     "b": {
      "min": 0,
      "max": 20,
      "buoc": 0.1,
      "dau": 9,
      "so_le": 1
     },
     "tot": {
      "a": -0.2688,
      "b": 13.0795,
      "sse": 290.4
     },
     "nhan_x": "Tuổi máy (tháng)",
     "nhan_y": "Giá (triệu)",
     "vach_x": [
      0,
      12,
      24,
      36,
      48
     ],
     "vach_y": [
      0,
      5,
      10,
      15
     ],
     "nhan_a": null,
     "nhan_b": null,
     "nhan_tot": null,
     "nhan": null
    },
    {
     "t": "anh",
     "cap": "Ba đường, ba tổng bình phương sai số: 800 · 705 · 290",
     "alt": "Ba đường, ba tổng bình phương sai số: 800 · 705 · 290",
     "src": "img/ba-duong-ke-tay-khac-nhau.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "so ba đường",
     "de": null,
     "cot": [
      "Đường",
      "a",
      "b",
      "Tổng bình phương sai số"
     ],
     "dong": [
      [
       "Đường 1",
       "-0,10",
       "9,00",
       "800"
      ],
      [
       "Đường 2",
       "-0,42",
       "16,50",
       "705"
      ],
      [
       "Đường 3",
       "-0,27",
       "13,08",
       "290"
      ]
     ],
     "ket_luan": "Đường 3 có tổng nhỏ nhất — đó là đường máy tìm ra.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Máy tìm a, b thế nào?",
     "html": "Giống gradient descent ở Bài 6: bắt đầu từ một cặp a, b bất kỳ, mỗi bước dịch một chút về phía tổng bình phương sai số giảm, cho tới đáy. (Riêng hồi quy tuyến tính còn có công thức tính thẳng ra đáy.)"
    },
    {
     "t": "anh",
     "cap": "Đi xuống dốc tới chỗ sai số nhỏ nhất",
     "alt": "Đi xuống dốc tới chỗ sai số nhỏ nhất",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20260529101329191488/derivative_of_cost.webp",
     "du_phong": "img/minh-hoa-duong-cong-sai-so-va-cac-buoc-di-xuong.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml linear regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/"
     },
     "chu_giai": [
      [
       "Cost J(θ)",
       "Sai số"
      ],
      [
       "Weight(θ)",
       "Tham số (a hoặc b)"
      ],
      [
       "Initial Weight",
       "Điểm xuất phát"
      ],
      [
       "Steps",
       "Các bước"
      ],
      [
       "Minimum Cost",
       "Sai số nhỏ nhất"
      ],
      [
       "Derivative of Cost",
       "Độ dốc"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ đường tốt là đường chạm qua nhiều điểm nhất.",
      "Đo sai số theo đường vuông góc thay vì theo chiều dọc."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Đường tốt nhất = tổng bình phương sai số nhỏ nhất."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai15-q3",
     "q": "Theo phần Tự thử, đường của máy có tổng bình phương sai số bằng bao nhiêu?",
     "giai": "Không đường thẳng nào có tổng nhỏ hơn trên 90 máy này.",
     "goi_y": "Bấm nút hiện đường của máy rồi đọc ô bên phải.",
     "a": [
      "290",
      "800",
      "705",
      "0"
     ],
     "h": "11024d62ce26a6"
    },
    {
     "k": "mc",
     "id": "bai15-q4",
     "q": "Vì sao phải bình phương sai số trước khi cộng?",
     "giai": "Cộng thẳng thì +3 và −3 thành 0 — trông như không sai.",
     "goi_y": "Một máy đoán thừa 3 triệu, một máy đoán thiếu 3 triệu. Cộng thẳng được bao nhiêu?",
     "a": [
      "Để sai số âm, dương không triệt tiêu",
      "Để con số nhỏ lại cho dễ tính",
      "Vì máy tính chỉ cộng được số dương",
      "Để đường thẳng dốc hơn"
     ],
     "h": "13440d67213413"
    }
   ]
  },
  {
   "ten": "Đọc a và b",
   "ten_ngan": "a và b",
   "phut": 4,
   "muc_tieu": "đọc được ý nghĩa của hệ số góc a, hệ số chặn b và biết giới hạn của đường thẳng.",
   "khoi_dong": "Máy trả về a = -0,27, b = 13,08. Hai con số này nói gì về điện thoại cũ?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Giá = -0,27 × TuoiMay + 13,08",
     "alt": "Giá = -0,27 × TuoiMay + 13,08",
     "src": "img/duong-tot-nhat-va-hai-so-a-b.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đọc thành lời",
     "de": null,
     "cot": [
      "Số",
      "Ý nghĩa"
     ],
     "dong": [
      [
       "a = -0,27",
       "Mỗi tháng tuổi máy, giá giảm khoảng 269 nghìn đồng"
      ],
      [
       "b = 13,08",
       "Giá đường thẳng đoán cho máy 0 tháng tuổi"
      ],
      [
       "Máy 24 tháng",
       "-0,27 × 24 + 13,08 ≈ <b>6,63 triệu</b>"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Đường thẳng chỉ đáng tin trong vùng dữ liệu đã học",
     "html": "Dữ liệu có máy từ 1 tới 48 tháng. Máy 80 tháng: đường đoán -8,42 triệu — giá âm, vô lý. Ra ngoài vùng đã học, model không biết gì."
    },
    {
     "t": "anh",
     "cap": "Không phải dữ liệu nào cũng đi theo đường thẳng",
     "alt": "Không phải dữ liệu nào cũng đi theo đường thẳng",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251212171555560592/linear.webp",
     "du_phong": "img/minh-hoa-du-lieu-tuyen-tinh-va-phi-tuyen.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml linear regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/"
     },
     "chu_giai": [
      [
       "Linear",
       "Tuyến tính — theo đường thẳng"
      ],
      [
       "Non-Linear",
       "Phi tuyến — không theo đường thẳng"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đọc a âm thành “model sai” — a âm chỉ là giá giảm khi tuổi tăng.",
      "Dùng đường thẳng dự đoán xa ngoài vùng dữ liệu."
     ]
    },
    {
     "t": "tom_tat",
     "html": "a: mỗi đơn vị x tăng thì y đổi bao nhiêu. b: y khi x = 0. Chỉ tin đường trong vùng dữ liệu đã học."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai15-q5",
     "q": "Với a = -0,27, máy già thêm 10 tháng thì giá đoán thay đổi thế nào?",
     "giai": "10 × -0,27 = -2,69.",
     "goi_y": "a là mức thay đổi cho MỖI tháng. 10 tháng thì nhân lên.",
     "a": [
      "Giảm khoảng 2,69 triệu",
      "Tăng khoảng 2,69 triệu",
      "Giảm khoảng 0,27 triệu",
      "Không đổi"
     ],
     "h": "121b766584288f"
    },
    {
     "k": "ds",
     "id": "bai15-q6",
     "q": "Đường thẳng của bài dự đoán tốt cho cả máy đã dùng 80 tháng.",
     "giai": "Ngoài vùng 1 – 48 tháng; đường còn cho giá âm.",
     "goi_y": "Máy cũ nhất trong dữ liệu bao nhiêu tháng?",
     "h": "1dcb292580f7b2"
    }
   ]
  },
  {
   "ten": "Model hồi quy tốt tới đâu?",
   "ten_ngan": "MAE và R²",
   "phut": 4,
   "muc_tieu": "đánh giá model hồi quy bằng MAE và R², so với model lười.",
   "khoi_dong": "Model hồi quy không “đúng” hay “sai” như phân loại. Vậy đo nó bằng gì?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "MAE — sai trung bình",
     "html": "Trung bình của |thật − đoán| trên tập kiểm tra. Cùng đơn vị với cột cần dự đoán (ở đây: triệu đồng). <b>Càng nhỏ càng tốt.</b>",
     "ky_hieu": null
    },
    {
     "t": "dinh_nghia",
     "ten": "R² — hơn model lười bao nhiêu",
     "html": "Model lười luôn đoán giá trung bình → R² = 0. Đoán đúng tuyệt đối → R² = 1. <b>Càng gần 1 càng tốt.</b>",
     "ky_hieu": "R² âm: còn tệ hơn đoán trung bình."
    },
    {
     "t": "anh",
     "cap": "Ba model trên cùng 30 máy của tập kiểm tra",
     "alt": "Ba model trên cùng 30 máy của tập kiểm tra",
     "src": "img/moc-luoi-va-hai-model.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "ba model",
     "de": null,
     "cot": [
      "Model",
      "MAE (triệu)",
      "R²"
     ],
     "dong": [
      [
       "Lười — đoán giá trung bình",
       "3,99",
       "≈ 0"
      ],
      [
       "1 cột — tuổi máy",
       "1,34",
       "0,84"
      ],
      [
       "3 cột — tuổi, dung lượng, pin",
       "<b>0,75</b>",
       "<b>0,95</b>"
      ]
     ],
     "ket_luan": "Thêm hai cột có ích, sai trung bình giảm từ 1,34 xuống 0,75 triệu.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "anh",
     "cap": "Giá thật và giá model 3 cột đoán — điểm càng sát đường chéo càng tốt",
     "alt": "Giá thật và giá model 3 cột đoán — điểm càng sát đường chéo càng tốt",
     "src": "img/gia-that-va-gia-du-doan.png"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đo model hồi quy bằng độ chính xác (%) như phân loại.",
      "Báo R² trên tập huấn luyện thay vì tập kiểm tra."
     ]
    },
    {
     "t": "tom_tat",
     "html": "MAE: sai trung bình, cùng đơn vị. R²: 0 là ngang model lười, 1 là hoàn hảo. Luôn đo trên tập kiểm tra."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai15-q7",
     "q": "Model đoán giá có MAE = 0,75 triệu. Nghĩa là gì?",
     "giai": "MAE là sai trung bình, cùng đơn vị với giá.",
     "goi_y": "Chữ M trong MAE là Mean — trung bình.",
     "a": [
      "Trung bình mỗi máy đoán lệch 0,75 triệu",
      "Đoán đúng 0,75% số máy",
      "Máy nào cũng lệch đúng 0,75 triệu",
      "Tổng lệch của cả tập là 0,75 triệu"
     ],
     "h": "166b5d21c9ba4b"
    },
    {
     "k": "dd",
     "id": "bai15-q8",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "R² so model với model lười.",
     "goi_y": "R² đo model hơn việc luôn đoán trung bình bao nhiêu.",
     "mau": "Model lười có R² bằng {0}; model càng tốt thì R² càng gần {1}.",
     "o": [
      [
       "0",
       "1",
       "100",
       "−1"
      ],
      [
       "1",
       "0",
       "−1",
       "50"
      ]
     ],
     "h": "1c64ad92bfc0f"
    }
   ]
  },
  {
   "ten": "Nhiều cột và scikit-learn",
   "ten_ngan": "Nhiều cột",
   "phut": 5,
   "muc_tieu": "huấn luyện hồi quy nhiều cột bằng scikit-learn và nhận ra cột vô dụng.",
   "khoi_dong": "Thêm cột thì model có luôn tốt hơn không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Hồi quy một cột và hồi quy nhiều cột",
     "alt": "Hồi quy một cột và hồi quy nhiều cột",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251212171556082327/types_of_linear_regression.webp",
     "du_phong": "img/minh-hoa-hai-dang-hoi-quy-tuyen-tinh.png",
     "nguon": {
      "ten": "GeeksforGeeks — Ml linear regression",
      "url": "https://www.geeksforgeeks.org/machine-learning/ml-linear-regression/"
     },
     "chu_giai": [
      [
       "Types of Linear Regression",
       "Hai dạng hồi quy tuyến tính"
      ],
      [
       "Simple Linear Regression",
       "Hồi quy một cột"
      ],
      [
       "Multiple Linear Regression",
       "Hồi quy nhiều cột"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Bước (quy trình 5 bước)",
      "Lệnh"
     ],
     "dong": [
      [
       "Chia dữ liệu",
       "<code>train_test_split(X, y, test_size=0.25, random_state=42)</code>"
      ],
      [
       "Huấn luyện",
       "<code>model = LinearRegression().fit(X_train, y_train)</code>"
      ],
      [
       "Đọc a, b",
       "<code>model.coef_</code> · <code>model.intercept_</code>"
      ],
      [
       "Dự đoán",
       "<code>du_doan = model.predict(X_test)</code>"
      ],
      [
       "Đánh giá",
       "<code>mean_absolute_error</code> · <code>r2_score</code>"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Thêm cột SoLanRoi (gần như không liên quan tới giá)",
     "alt": "Thêm cột SoLanRoi (gần như không liên quan tới giá)",
     "src": "img/them-cot-vo-dung-r2-van-tang.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "cái bẫy của cột vô dụng",
     "de": null,
     "cot": [
      "Model",
      "R² tập huấn luyện",
      "R² tập kiểm tra"
     ],
     "dong": [
      [
       "3 cột",
       "0,9569",
       "0,9505"
      ],
      [
       "3 cột + SoLanRoi",
       "<b>0,9590 ↑</b>",
       "<b>0,9482 ↓</b>"
      ]
     ],
     "ket_luan": "Trên dữ liệu đã học R² luôn tăng khi thêm cột — kể cả cột vô dụng. Chỉ tập kiểm tra mới lộ ra (r của SoLanRoi với giá: -0,05).",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Không cần đưa về cùng thang đo?",
     "html": "Hồi quy tuyến tính không đo khoảng cách như KNN, nên kết quả dự đoán không đổi khi đổi thang đo. (Hệ số a của từng cột thì đổi theo đơn vị.)"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Thêm cột thấy R² train tăng liền kết luận cột đó có ích.",
      "Quên rằng hồi quy tuyến tính chỉ vẽ được đường thẳng (hoặc mặt phẳng)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "LinearRegression().fit → coef_, intercept_ → predict → MAE, R² trên tập kiểm tra. Cột vô dụng lộ ra ở tập kiểm tra."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai15-q9",
     "q": "Lệnh nào cho biết hệ số chặn b của model?",
     "giai": "coef_ là các hệ số góc a; intercept_ là b.",
     "goi_y": "Intercept nghĩa là điểm cắt trục.",
     "a": [
      "model.intercept_",
      "model.coef_",
      "model.predict",
      "model.score_b"
     ],
     "h": "10b9d451234dd"
    },
    {
     "k": "ma",
     "id": "bai15-q10",
     "q": "Thêm SoLanRoi vào model 3 cột. Hai điều nào xảy ra? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Đây là cái bẫy: dữ liệu đã học luôn khen cột mới.",
     "goi_y": "Xem bảng “cái bẫy của cột vô dụng”.",
     "a": [
      "R² trên tập huấn luyện tăng",
      "R² trên tập kiểm tra giảm",
      "R² trên tập kiểm tra tăng mạnh",
      "MAE trên tập kiểm tra về 0"
     ],
     "h": "1658a84417ecdc"
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
    "id": "bai15-q11",
    "q": "Nhìn hình. Nhánh bên phải của sơ đồ dự đoán loại kết quả nào?",
    "giai": "Regression = hồi quy: dự đoán con số.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250902175259468148/difff.webp",
     "du_phong": "img/minh-hoa-hai-nhanh-phan-loai-va-hoi-quy.png",
     "nguon": {
      "ten": "GeeksforGeeks — Supervised machine learning",
      "url": "https://www.geeksforgeeks.org/machine-learning/supervised-machine-learning/"
     }
    },
    "a": [
     "Một con số liên tục",
     "Một nhãn cho trước",
     "Một nhóm tự chia",
     "Một hình ảnh"
    ],
    "h": "b289978ab53ba"
   },
   {
    "k": "mc",
    "id": "bai15-q12",
    "q": "Nhìn hình. Vạch đỏ nối mỗi điểm với đường thẳng là gì?",
    "giai": "Sai số đo theo chiều dọc: thật − đoán.",
    "img": {
     "src": "img/sai-so-doc-tu-diem-toi-duong.png"
    },
    "a": [
     "Sai số của từng chiếc máy",
     "Khoảng cách tới điểm gần nhất",
     "Độ dốc của đường thẳng",
     "Giá trung bình của các máy"
    ],
    "h": "1565237006230a"
   },
   {
    "k": "mc",
    "id": "bai15-q13",
    "q": "Nhìn hình. Đường nào có tổng bình phương sai số nhỏ nhất?",
    "giai": "Đường 3: 290.",
    "img": {
     "src": "img/ba-duong-ke-tay-khac-nhau.png"
    },
    "a": [
     "Đường 3",
     "Đường 1",
     "Đường 2",
     "Ba đường bằng nhau"
    ],
    "h": "1b010c40c71c9a"
   },
   {
    "k": "mc",
    "id": "bai15-q14",
    "q": "Nhìn hình. Model nào có R² gần 0?",
    "giai": "R² = 0 nghĩa là ngang model lười.",
    "img": {
     "src": "img/moc-luoi-va-hai-model.png"
    },
    "a": [
     "Model lười đoán trung bình",
     "Model chỉ dùng 1 cột",
     "Model dùng đủ 3 cột",
     "Không có model nào"
    ],
    "h": "20930cd6683fc"
   },
   {
    "k": "mc",
    "id": "bai15-q15",
    "q": "Nhìn hình. Điểm nằm xa đường chéo nét đứt nhất cho biết gì?",
    "giai": "Lệch 2,53 triệu.",
    "img": {
     "src": "img/gia-that-va-gia-du-doan.png"
    },
    "a": [
     "Máy model đoán lệch nhiều nhất",
     "Máy đắt nhất trong dữ liệu",
     "Máy mới nhất trong dữ liệu",
     "Máy model đoán đúng tuyệt đối"
    ],
    "h": "52bb90ab74662"
   },
   {
    "k": "mc",
    "id": "bai15-q16",
    "q": "Tiền điện = 3 × số kWh + 50 (nghìn đồng). Hệ số góc 3 nghĩa là gì?",
    "giai": "a là mức tăng của y khi x tăng 1.",
    "a": [
     "Mỗi kWh dùng thêm, trả thêm 3 nghìn",
     "Tháng nào cũng trả 3 nghìn",
     "Dùng 3 kWh thì miễn phí",
     "Tiền điện tăng gấp 3 mỗi tháng"
    ],
    "h": "1f5d6ebbe60daa"
   },
   {
    "k": "mc",
    "id": "bai15-q17",
    "q": "Model dự đoán chiều cao trẻ em theo tuổi học từ trẻ 2 – 12 tuổi. Đoán chiều cao người 40 tuổi thì sao?",
    "giai": "Đường thẳng cứ tăng mãi, người lớn thì ngừng cao.",
    "a": [
     "Không đáng tin — ngoài vùng đã học",
     "Rất chính xác vì đã học kỹ",
     "Chính xác hơn trẻ 5 tuổi",
     "Luôn ra đúng 170 cm"
    ],
    "h": "655aa1b696727"
   },
   {
    "k": "mc",
    "id": "bai15-q18",
    "q": "Model A có MAE 2 triệu, model B có MAE 0,8 triệu trên cùng tập kiểm tra. Nhận xét nào đúng?",
    "giai": "MAE càng nhỏ càng tốt.",
    "a": [
     "Model B đoán sát hơn model A",
     "Model A đoán sát hơn model B",
     "Hai model tốt như nhau",
     "Không so sánh được hai model"
    ],
    "h": "14abb93d9fbba1"
   },
   {
    "k": "mc",
    "id": "bai15-q19",
    "q": "Model hồi quy có R² = −0,2 trên tập kiểm tra. Điều đó cho thấy gì?",
    "giai": "R² âm: thua model lười.",
    "a": [
     "Còn tệ hơn luôn đoán trung bình",
     "Tốt hơn model lười một chút",
     "Đoán đúng 20% số dòng",
     "Model hoàn hảo trên tập kiểm tra"
    ],
    "h": "10e5702f792370"
   },
   {
    "k": "ma",
    "id": "bai15-q20",
    "q": "Những bài toán nào là hồi quy? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hồi quy: kết quả là con số liên tục.",
    "a": [
     "Dự đoán giá vé máy bay",
     "Dự đoán lượng mưa ngày mai (mm)",
     "Dự đoán email là thư rác",
     "Dự đoán loài hoa từ ảnh"
    ],
    "h": "ffe679b4f1d85"
   },
   {
    "k": "ma",
    "id": "bai15-q21",
    "q": "Những phát biểu nào đúng về đường tốt nhất? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Tốt nhất theo tổng bình phương sai số.",
    "a": [
     "Có tổng bình phương sai số nhỏ nhất",
     "Sai số đo theo chiều dọc",
     "Phải đi qua nhiều điểm nhất",
     "Luôn đi qua gốc toạ độ"
    ],
    "h": "b2f915b5c364"
   },
   {
    "k": "ma",
    "id": "bai15-q22",
    "q": "Những chỉ số nào dùng để đánh giá model hồi quy? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hồi quy đo độ lệch, không đo đúng/sai.",
    "a": [
     "MAE",
     "R²",
     "Độ chính xác (%)",
     "Số láng giềng K"
    ],
    "h": "1bc31d19ac74b1"
   },
   {
    "k": "ma",
    "id": "bai15-q23",
    "q": "Thêm cột SoLanRoi vô dụng vào model. Hai điều nào đúng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dữ liệu đã học luôn khen cột mới.",
    "a": [
     "R² tập huấn luyện vẫn tăng",
     "Tập kiểm tra mới lộ ra cột vô dụng",
     "R² tập kiểm tra tăng mạnh",
     "Model tự bỏ cột vô dụng"
    ],
    "h": "12ca48c80e58a2"
   },
   {
    "k": "sx",
    "id": "bai15-q24",
    "q": "Sắp xếp các bước tìm đường tốt nhất bằng tay.",
    "giai": "Chọn → tính sai số → bình phương, cộng → chỉnh.",
    "a": [
     "Chọn một cặp a, b",
     "Tính sai số từng điểm",
     "Bình phương rồi cộng lại",
     "Đổi a, b để tổng nhỏ hơn"
    ],
    "h": "17ea1687b2779c"
   },
   {
    "k": "sx",
    "id": "bai15-q25",
    "q": "Sắp xếp các bước dùng LinearRegression trong scikit-learn.",
    "giai": "Chia → fit → predict → chấm.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Fit LinearRegression trên tập huấn luyện",
     "Predict tập kiểm tra",
     "Tính MAE và R²"
    ],
    "h": "4308f168854ad"
   },
   {
    "k": "dd",
    "id": "bai15-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "a: độ dốc; b: điểm cắt trục tung.",
    "mau": "Trong y = a·x + b, số đứng trước x là {0}; số cộng thêm ở cuối là {1}.",
    "o": [
     [
      "hệ số góc",
      "hệ số chặn",
      "sai số",
      "feature"
     ],
     [
      "hệ số chặn",
      "hệ số góc",
      "sai số",
      "nhãn"
     ]
    ],
    "h": "10f5742eaad835"
   },
   {
    "k": "dd",
    "id": "bai15-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "a = -0,27; -0,27 × 24 + 13,08.",
    "mau": "Mỗi tháng tuổi máy, giá giảm khoảng {0} nghìn; máy 24 tháng đoán khoảng {1} triệu.",
    "o": [
     [
      "269",
      "1308",
      "27",
      "1 000"
     ],
     [
      "6,63",
      "13,08",
      "-8,42",
      "6,50"
     ]
    ],
    "h": "1889de2d4c3499"
   },
   {
    "k": "dd",
    "id": "bai15-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "MAE là sai số; R² tối đa bằng 1.",
    "mau": "MAE càng {0} càng tốt; R² càng {1} càng tốt.",
    "o": [
     [
      "nhỏ",
      "lớn",
      "âm",
      "gần 100"
     ],
     [
      "gần 1",
      "gần 0",
      "âm",
      "nhỏ"
     ]
    ],
    "h": "b604e8abbc010"
   },
   {
    "k": "dd",
    "id": "bai15-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "coef_ = a; intercept_ = b.",
    "mau": "Lệnh {0} trả về các hệ số góc; lệnh {1} trả về hệ số chặn.",
    "o": [
     [
      "coef_",
      "intercept_",
      "predict",
      "fit"
     ],
     [
      "intercept_",
      "coef_",
      "predict",
      "score"
     ]
    ],
    "h": "1c1eb784237db4"
   },
   {
    "k": "ds",
    "id": "bai15-q30",
    "q": "Hồi quy tuyến tính cần đưa các cột về cùng thang đo như KNN thì dự đoán mới đúng.",
    "giai": "Dự đoán không đổi khi đổi thang đo; chỉ hệ số a đổi theo đơn vị.",
    "h": "3cab0543a3e4b"
   },
   {
    "k": "ds",
    "id": "bai15-q31",
    "q": "R² bằng 0 nghĩa là model chỉ ngang với luôn đoán giá trung bình.",
    "giai": "Đó chính là định nghĩa qua model lười.",
    "h": "11e578c033b20b"
   },
   {
    "k": "ds",
    "id": "bai15-q32",
    "q": "Dữ liệu điện thoại cũ trong bài là dữ liệu mô phỏng.",
    "giai": "Sinh bằng máy tính cho bài học (seed 9).",
    "h": "10e7fe349879ec"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
