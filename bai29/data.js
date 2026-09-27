window.BAI = {
 "bai": 29,
 "ma": "bai29",
 "nhan": "Bài 29",
 "tieu_de": "Mạng nơ-ron: từ scikit-learn đến PyTorch và TensorFlow",
 "phan": "Module 14 · Deep Learning and Deployment",
 "cau_hoi": "Mạng nơ-ron là gì — và vì sao cả thế giới AI dùng nó?",
 "gioi_thieu": [
  "Các model đã học (KNN, hồi quy, cây, SVM…) làm rất tốt với <b>bảng số nhỏ</b>. Nhưng ảnh, giọng nói, văn bản — thứ mà chatbot hay app nhận diện khuôn mặt xử lý — cần một loại model khác: <b>mạng nơ-ron</b> (Deep Learning).",
  "Năm chặng: một nơ-ron, mạng nhiều lớp, máy huấn luyện mạng thế nào, cùng một mạng viết bằng ba thư viện (scikit-learn, PyTorch, TensorFlow), và khi nào thật sự cần Deep Learning. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại: hồi quy logistic và sigmoid (Bài 16), gradient descent (Bài 6), học vẹt và tập kiểm tra (Bài 12), nhận diện chữ số (Bài 2)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai29",
 "muc_tieu": [
  "Mô tả được một nơ-ron: nhân trọng số, cộng hệ số chặn, qua hàm kích hoạt.",
  "Nhận ra cấu trúc lớp vào – lớp ẩn – lớp ra và đếm được số tham số của một mạng nhỏ.",
  "Giải thích được huấn luyện là gradient descent lặp qua nhiều epoch, theo dõi bằng loss.",
  "Đọc được cùng một mạng viết bằng scikit-learn, PyTorch và TensorFlow / Keras.",
  "Biết khi nào nên dùng mạng nơ-ron và khi nào model cổ điển là đủ."
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
   "ten": "Một nơ-ron nhân tạo",
   "ten_ngan": "Một nơ-ron",
   "phut": 4,
   "muc_tieu": "mô tả được một nơ-ron: nhân trọng số, cộng hệ số chặn, qua hàm kích hoạt.",
   "khoi_dong": "Ở Bài 16, hồi quy logistic tính z = a·x + b rồi đưa qua sigmoid. Nếu có hai cột đầu vào thì sao?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Nơ-ron nhân tạo",
     "html": "Nhận vài con số đầu vào, <b>nhân</b> mỗi số với một <b>trọng số</b> (w), <b>cộng</b> lại cùng <b>hệ số chặn</b> (b), rồi đưa tổng z qua một <b>hàm kích hoạt</b> để cho ra kết quả.",
     "ky_hieu": "z = w<sub>1</sub>·x<sub>1</sub> + w<sub>2</sub>·x<sub>2</sub> + b &nbsp;→&nbsp; đầu ra = sigmoid(z)"
    },
    {
     "t": "anh",
     "cap": "Một nơ-ron với trọng số máy đã học trên bảng khối 10",
     "alt": "Một nơ-ron với trọng số máy đã học trên bảng khối 10",
     "src": "img/mot-no-ron.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "tính tay cho một bạn",
     "de": "Bạn học 4 giờ, dùng mạng 120 phút. Đưa về 0 – 1: x<sub>1</sub> = 0,54, x<sub>2</sub> = 0,24.",
     "cot": [
      "Bước",
      "Tính",
      "Kết quả"
     ],
     "dong": [
      [
       "1",
       "w<sub>1</sub>·x<sub>1</sub> + w<sub>2</sub>·x<sub>2</sub> + b = 5,08 × 0,54 + (-1,89) × 0,24 + (-1,64)",
       "z ≈ <b>0,63</b>"
      ],
      [
       "2",
       "sigmoid(z) — đưa z về khoảng 0 – 1",
       "<b>65,3%</b>"
      ]
     ],
     "ket_luan": "Một nơ-ron với hàm sigmoid chính là hồi quy logistic của Bài 16. Mạng nơ-ron ghép rất nhiều nơ-ron như vậy lại.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "no_ron",
     "tieu_de": "tự chỉnh một nơ-ron",
     "huong_dan": "Kéo ba thanh trượt. Nơ-ron đoán Đạt khi z &gt; 0 — tức là phía bên kia đường thẳng đậm. Chấm viền đỏ là bạn bị đoán sai. <b>Thử thách:</b> đạt trên 85% đoán đúng, rồi bấm “Dùng trọng số máy tìm được”.",
     "x": [
      0.9380000233650208,
      0.014999999664723873,
      0.2619999945163727,
      0.16899999976158142,
      0.20000000298023224,
      0.014999999664723873,
      0.0,
      0.9229999780654907,
      0.800000011920929,
      0.5540000200271606,
      0.2919999957084656,
      0.9539999961853027,
      0.6460000276565552,
      0.6620000004768372,
      0.2919999957084656,
      0.6919999718666077,
      0.47699999809265137,
      0.2460000067949295,
      0.1379999965429306,
      0.4309999942779541,
      0.20000000298023224,
      0.47699999809265137,
      0.5540000200271606,
      0.15399999916553497,
      0.7540000081062317,
      0.8769999742507935,
      0.30799999833106995,
      0.2770000100135803,
      0.7379999756813049,
      0.4000000059604645,
      0.33799999952316284,
      0.014999999664723873,
      0.2919999957084656,
      0.2150000035762787,
      0.8460000157356262,
      0.03099999949336052,
      0.8309999704360962,
      0.20000000298023224,
      0.3540000021457672,
      0.44600000977516174,
      0.23100000619888306,
      0.7379999756813049,
      0.4309999942779541,
      0.8920000195503235,
      0.968999981880188,
      0.5849999785423279,
      0.1850000023841858,
      0.4309999942779541,
      0.9539999961853027,
      0.3540000021457672,
      0.03099999949336052,
      0.09200000017881393,
      0.15399999916553497,
      0.9229999780654907,
      0.7540000081062317,
      0.7229999899864197,
      1.0,
      0.800000011920929,
      0.6309999823570251,
      0.2619999945163727,
      0.968999981880188,
      0.7850000262260437,
      0.9539999961853027,
      0.6150000095367432,
      0.7540000081062317,
      0.12300000339746475,
      0.41499999165534973,
      0.3230000138282776,
      0.9229999780654907,
      0.30799999833106995,
      0.04600000008940697,
      0.968999981880188,
      0.23100000619888306,
      0.7540000081062317,
      0.23100000619888306,
      0.9380000233650208,
      0.8309999704360962,
      0.2770000100135803,
      0.12300000339746475,
      0.2919999957084656,
      0.6769999861717224,
      0.014999999664723873,
      0.20000000298023224,
      0.1850000023841858,
      0.4309999942779541,
      0.9229999780654907,
      0.6000000238418579,
      0.1850000023841858,
      0.492000013589859,
      0.4620000123977661,
      0.09200000017881393,
      0.36899998784065247,
      0.1080000028014183,
      0.4000000059604645,
      0.44600000977516174,
      0.30799999833106995,
      0.3230000138282776,
      0.492000013589859,
      0.8920000195503235,
      0.6460000276565552,
      0.4000000059604645,
      0.5690000057220459,
      0.1379999965429306,
      0.3540000021457672,
      0.8920000195503235,
      0.04600000008940697,
      0.014999999664723873,
      0.7850000262260437,
      0.16899999976158142,
      0.20000000298023224,
      0.7540000081062317,
      0.23100000619888306,
      0.1379999965429306,
      0.6150000095367432,
      0.1080000028014183,
      0.6919999718666077,
      0.23100000619888306,
      0.8920000195503235,
      0.9539999961853027,
      0.47699999809265137,
      0.8149999976158142,
      0.12300000339746475,
      0.6460000276565552,
      0.7689999938011169,
      0.968999981880188,
      0.6919999718666077,
      0.9079999923706055,
      0.8920000195503235,
      0.8460000157356262,
      0.8920000195503235,
      0.03099999949336052,
      0.4309999942779541,
      0.8460000157356262,
      0.23100000619888306,
      0.8619999885559082,
      0.7689999938011169,
      0.5379999876022339,
      0.30799999833106995,
      0.41499999165534973,
      0.5080000162124634,
      0.20000000298023224,
      0.7080000042915344,
      0.2150000035762787,
      0.5230000019073486,
      0.2770000100135803,
      0.4620000123977661,
      0.8920000195503235,
      0.7689999938011169,
      0.0,
      0.6000000238418579,
      0.1080000028014183,
      0.8619999885559082,
      0.36899998784065247,
      0.5379999876022339,
      0.7080000042915344,
      0.5540000200271606,
      0.2919999957084656,
      0.41499999165534973,
      0.4309999942779541,
      0.7540000081062317,
      0.6000000238418579,
      0.800000011920929,
      0.5230000019073486,
      0.9850000143051147,
      0.9380000233650208,
      0.9539999961853027,
      0.09200000017881393,
      0.30799999833106995
     ],
     "y": [
      0.11500000208616257,
      0.6370000243186951,
      0.32600000500679016,
      0.43700000643730164,
      0.20000000298023224,
      0.6439999938011169,
      0.39500001072883606,
      0.35199999809265137,
      0.06199999898672104,
      0.16099999845027924,
      0.3310000002384186,
      0.18400000035762787,
      0.9980000257492065,
      0.9890000224113464,
      0.4000000059604645,
      0.19099999964237213,
      0.39100000262260437,
      0.3840000033378601,
      0.35600000619888306,
      0.18199999630451202,
      0.5559999942779541,
      0.34299999475479126,
      0.23000000417232513,
      0.3840000033378601,
      0.3540000021457672,
      0.19300000369548798,
      1.0,
      0.46000000834465027,
      0.31299999356269836,
      0.210999995470047,
      0.25999999046325684,
      0.2549999952316284,
      0.25699999928474426,
      0.5680000185966492,
      0.1679999977350235,
      0.2619999945163727,
      0.23399999737739563,
      0.25099998712539673,
      0.5149999856948853,
      0.19499999284744263,
      0.47600001096725464,
      0.1720000058412552,
      0.39100000262260437,
      0.2409999966621399,
      0.0,
      0.1770000010728836,
      0.28299999237060547,
      0.2759999930858612,
      0.0,
      0.20900000631809235,
      0.32899999618530273,
      0.13300000131130219,
      0.22100000083446503,
      0.07800000160932541,
      0.20000000298023224,
      0.2529999911785126,
      0.10300000011920929,
      0.3659999966621399,
      0.17499999701976776,
      0.3310000002384186,
      0.19499999284744263,
      0.014000000432133675,
      0.04399999976158142,
      0.42800000309944153,
      0.16099999845027924,
      0.3840000033378601,
      0.574999988079071,
      0.49000000953674316,
      0.2280000001192093,
      0.5009999871253967,
      0.42800000309944153,
      0.20000000298023224,
      0.23199999332427979,
      0.6019999980926514,
      0.42100000381469727,
      0.1679999977350235,
      0.16599999368190765,
      0.1289999932050705,
      0.22100000083446503,
      0.16300000250339508,
      0.28999999165534973,
      0.6110000014305115,
      0.7820000052452087,
      0.30300000309944153,
      0.39100000262260437,
      0.0,
      0.21400000154972076,
      0.25699999928474426,
      0.5590000152587891,
      0.30300000309944153,
      0.31700000166893005,
      0.5820000171661377,
      0.5400000214576721,
      0.503000020980835,
      0.2070000022649765,
      0.6919999718666077,
      0.16300000250339508,
      0.25999999046325684,
      0.49000000953674316,
      0.7129999995231628,
      0.27799999713897705,
      0.1679999977350235,
      0.7260000109672546,
      0.3790000081062317,
      0.03400000184774399,
      0.5059999823570251,
      0.6110000014305115,
      0.4339999854564667,
      0.6510000228881836,
      0.4300000071525574,
      0.25099998712539673,
      0.2800000011920929,
      0.32199999690055847,
      0.19499999284744263,
      0.23199999332427979,
      0.05999999865889549,
      0.3240000009536743,
      0.09000000357627869,
      0.12600000202655792,
      0.42500001192092896,
      0.1679999977350235,
      0.2070000022649765,
      0.6779999732971191,
      1.0,
      0.1679999977350235,
      0.20000000298023224,
      0.11299999803304672,
      0.2709999978542328,
      0.29899999499320984,
      0.3889999985694885,
      0.1770000010728836,
      0.2709999978542328,
      0.5490000247955322,
      0.2619999945163727,
      0.30799999833106995,
      0.2919999957084656,
      0.15399999916553497,
      0.6140000224113464,
      0.296999990940094,
      0.2070000022649765,
      0.4440000057220459,
      0.23899999260902405,
      0.30300000309944153,
      0.22100000083446503,
      0.2280000001192093,
      0.18400000035762787,
      0.04399999976158142,
      0.20000000298023224,
      0.5659999847412109,
      0.12399999797344208,
      0.4779999852180481,
      0.2639999985694885,
      0.2549999952316284,
      0.2759999930858612,
      0.20000000298023224,
      0.296999990940094,
      0.5379999876022339,
      0.24799999594688416,
      0.12600000202655792,
      0.14300000667572021,
      0.15600000321865082,
      0.05700000002980232,
      0.2280000001192093,
      0.0,
      0.31299999356269836,
      0.11999999731779099,
      0.6019999980926514,
      0.3199999928474426
     ],
     "nhan": [
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      1,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1
     ],
     "w0": [
      1,
      1,
      -1
     ],
     "w_may": [
      5.08,
      -1.89,
      -1.64
     ],
     "vd": {
      "ten": "Bạn học 4 giờ, mạng 120 phút",
      "x1": 0.54,
      "x2": 0.24
     },
     "nhan_x": "Giờ tự học (đã đưa về 0 – 1)",
     "nhan_y": "Phút mạng XH (đã đưa về 0 – 1)",
     "ghi": "168 bạn tập huấn luyện (mô phỏng) — xanh: Đạt, cam: Chưa đạt. Trọng số máy tìm được do LogisticRegression học trên đúng dữ liệu này."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ trọng số do con người đặt tay — máy tự học trọng số từ dữ liệu.",
      "Nghĩ nơ-ron nhân tạo giống hệt tế bào não — nó chỉ mượn ý tưởng, thực chất là phép nhân và cộng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Một nơ-ron: nhân trọng số, cộng b, qua hàm kích hoạt. Một nơ-ron sigmoid chính là hồi quy logistic."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Google Machine Learning Crash Course — Neural networks: nodes and hidden layers",
       "url": "https://developers.google.com/machine-learning/crash-course/neural-networks/nodes-hidden-layers",
       "ghi_chu": "tiếng Anh, có hình tương tác"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai29-q1",
     "q": "Một nơ-ron có w<sub>1</sub> = 2, w<sub>2</sub> = −1, b = 0,5. Đầu vào x<sub>1</sub> = 1, x<sub>2</sub> = 3. Tổng z bằng bao nhiêu?",
     "giai": "2 × 1 + (−1) × 3 + 0,5 = 2 − 3 + 0,5 = −0,5.",
     "goi_y": "Nhân từng cặp w với x, cộng lại, rồi cộng thêm b.",
     "a": [
      "−0,5",
      "5,5",
      "1,5",
      "−2,5"
     ],
     "h": "15e85a23c4aa3e"
    },
    {
     "k": "ds",
     "id": "bai29-q2",
     "q": "Một nơ-ron dùng hàm sigmoid làm việc giống hồi quy logistic của Bài 16.",
     "giai": "Cùng công thức: tổng có trọng số rồi qua sigmoid, ra xác suất.",
     "goi_y": "Nhớ lại Bài 16: z = a·x + b rồi làm gì?",
     "h": "b643e37801c0e"
    }
   ]
  },
  {
   "ten": "Mạng nhiều lớp",
   "ten_ngan": "Nhiều lớp",
   "phut": 5,
   "muc_tieu": "nhận ra lớp vào – lớp ẩn – lớp ra và đếm được số tham số của một mạng nhỏ.",
   "khoi_dong": "Một đường thẳng không tách được hai nhóm hình trăng khuyết. Ghép nhiều nơ-ron lại thì sao?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Mạng nơ-ron nhiều lớp",
     "html": "Các nơ-ron xếp thành <b>lớp</b>: lớp vào nhận dữ liệu, một hay nhiều <b>lớp ẩn</b> biến đổi dữ liệu, lớp ra cho kết quả. Mỗi nơ-ron nhận đầu ra của lớp trước. Nhiều lớp ẩn gọi là <b>Deep Learning</b> (học sâu).",
     "ky_hieu": "Lớp ẩn thường dùng hàm kích hoạt <b>ReLU</b>: giữ số dương, đổi số âm thành 0."
    },
    {
     "t": "anh",
     "cap": "Mạng 2 – 8 – 1 của bài: 33 tham số (trọng số và hệ số chặn)",
     "alt": "Mạng 2 – 8 – 1 của bài: 33 tham số (trọng số và hệ số chặn)",
     "src": "img/mang-nhieu-lop.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "đếm tham số của mạng 2 – 8 – 1",
     "de": null,
     "cot": [
      "Chỗ nối",
      "Trọng số",
      "Hệ số chặn"
     ],
     "dong": [
      [
       "Lớp vào (2) → lớp ẩn (8)",
       "2 × 8 = 16",
       "8"
      ],
      [
       "Lớp ẩn (8) → lớp ra (1)",
       "8 × 1 = 8",
       "1"
      ],
      [
       "Cộng",
       "24",
       "9"
      ]
     ],
     "ket_luan": "Tổng <b>33</b> tham số máy phải học. Mạng nhận diện ảnh thật có hàng triệu tới hàng tỉ tham số.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "anh",
     "cap": "Logistic 90,8% · 4 nơ-ron ẩn 90,8% · 32 nơ-ron ẩn 95,0% (số liệu minh hoạ)",
     "alt": "Logistic 90,8% · 4 nơ-ron ẩn 90,8% · 32 nơ-ron ẩn 95,0% (số liệu minh hoạ)",
     "src": "img/ranh-gioi-theo-so-no-ron.png"
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Vì sao lớp ẩn giúp ích?",
     "html": "Mỗi nơ-ron ẩn (ReLU) tạo một “đường gấp” nhỏ. Ghép đủ nhiều đường gấp, mạng vẽ được <b>ranh giới cong</b> — điều hồi quy logistic không làm được. Hình trên: 4 nơ-ron chưa đủ (90,8%, bằng logistic), 32 nơ-ron thì được 95,0%. Nhưng nhiều nơ-ron quá mà ít dữ liệu thì dễ <b>học vẹt</b> (Bài 12)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ càng nhiều lớp, nhiều nơ-ron càng tốt — thêm nơ-ron cần thêm dữ liệu và dễ học vẹt.",
      "Quên đếm hệ số chặn khi đếm tham số."
     ]
    },
    {
     "t": "video",
     "yt": "aircAruvnKk",
     "ten": "3Blue1Brown — But what is a neural network?",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc — 10 phút đầu",
     "bat_dau": null,
     "ket_thuc": 600
    },
    {
     "t": "tom_tat",
     "html": "Lớp vào → lớp ẩn → lớp ra. Lớp ẩn (ReLU) cho ranh giới cong; số tham số = trọng số + hệ số chặn."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai29-q3",
     "q": "Mạng 3 – 4 – 1 (3 đầu vào, 4 nơ-ron ẩn, 1 đầu ra) có bao nhiêu tham số?",
     "giai": "Trọng số: 3 × 4 + 4 × 1 = 16. Hệ số chặn: 4 + 1 = 5. Tổng 21.",
     "goi_y": "Đếm trọng số của từng chỗ nối, rồi cộng thêm một hệ số chặn cho mỗi nơ-ron ẩn và nơ-ron ra.",
     "a": [
      "21",
      "16",
      "12",
      "8"
     ],
     "h": "1830e83a579f82"
    },
    {
     "k": "dd",
     "id": "bai29-q4",
     "q": "Chọn từ đúng cho mỗi chỗ trống.",
     "giai": "Lớp ẩn biến đổi dữ liệu; ReLU giữ số dương, đổi số âm thành 0.",
     "goi_y": "Nhìn lại hình mạng 2 – 8 – 1 và dòng ghi dưới định nghĩa.",
     "mau": "Lớp nằm giữa lớp vào và lớp ra gọi là {0}; hàm kích hoạt hay dùng ở đó là {1}.",
     "o": [
      [
       "lớp ẩn",
       "lớp phụ",
       "lớp kiểm tra",
       "lớp nhãn"
      ],
      [
       "ReLU",
       "MSE",
       "MAE",
       "Gini"
      ]
     ],
     "h": "4b56cdaa8fb9b"
    }
   ]
  },
  {
   "ten": "Máy huấn luyện mạng thế nào?",
   "ten_ngan": "Huấn luyện",
   "phut": 5,
   "muc_tieu": "giải thích được huấn luyện là gradient descent lặp qua nhiều epoch, theo dõi bằng loss.",
   "khoi_dong": "33 tham số — máy tìm giá trị tốt cho từng cái bằng cách nào?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Một vòng huấn luyện",
     "html": "(1) <b>Lan truyền xuôi</b>: mạng đoán cho các bạn trong tập huấn luyện. (2) Tính <b>loss</b> — con số đo mạng sai bao nhiêu. (3) <b>Lan truyền ngược</b> (backpropagation): tính độ dốc của loss theo từng tham số. (4) Mỗi tham số bước một bước nhỏ <b>ngược chiều dốc</b> — đúng gradient descent của Bài 6.",
     "ky_hieu": "Máy xem hết tập huấn luyện một lần gọi là một <b>epoch</b>. Mạng thường học hàng trăm epoch."
    },
    {
     "t": "bang",
     "cot": [
      "Bước",
      "Dòng PyTorch"
     ],
     "dong": [
      [
       "Xoá độ dốc cũ",
       "<code>toi_uu.zero_grad()</code>"
      ],
      [
       "Đoán và tính loss",
       "<code>loss = ham_loss(mang(X), y)</code>"
      ],
      [
       "Lan truyền ngược",
       "<code>loss.backward()</code>"
      ],
      [
       "Bước xuống dốc",
       "<code>toi_uu.step()</code>"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Loss trên tập huấn luyện và tập kiểm tra qua 300 epoch",
     "alt": "Loss trên tập huấn luyện và tập kiểm tra qua 300 epoch",
     "src": "img/duong-loss-khi-huan-luyen.png"
    },
    {
     "t": "tra_bang",
     "tieu_de": "loss sau từng epoch",
     "huong_dan": "Kéo thanh trượt qua các epoch. Loss giảm nhanh lúc đầu rồi chậm dần. Hai đường có tách xa nhau không?",
     "nhan_truot": "Epoch",
     "khoa": [
      "1",
      "6",
      "11",
      "21",
      "41",
      "81",
      "151",
      "300"
     ],
     "so": [
      0.713,
      0.698,
      0.685,
      0.648,
      0.519,
      0.292,
      0.205,
      0.195
     ],
     "so2": [
      0.712,
      0.698,
      0.686,
      0.649,
      0.526,
      0.302,
      0.195,
      0.173
     ],
     "ten_so": "Loss train",
     "ten_so2": "Loss test",
     "ten_chenh": "train − test:",
     "so_le": 3,
     "kieu": "duong",
     "ymin": 0,
     "ymax": 0.8,
     "truc_x": "Epoch",
     "truc_y": "Loss",
     "ghi": [
      "Epoch 1: loss train 0,713, loss test 0,712.",
      "Epoch 6: loss train 0,698, loss test 0,698.",
      "Epoch 11: loss train 0,685, loss test 0,686.",
      "Epoch 21: loss train 0,648, loss test 0,649.",
      "Epoch 41: loss train 0,519, loss test 0,526.",
      "Epoch 81: loss train 0,292, loss test 0,302.",
      "Epoch 151: loss train 0,205, loss test 0,195.",
      "Epoch 300: loss train 0,195, loss test 0,173."
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Loss và độ chính xác khác nhau",
     "html": "Loss đo mạng <b>tự tin sai</b> tới đâu, dùng để huấn luyện. Độ chính xác đếm số lần đoán đúng, dùng để báo cáo. Sau 300 epoch, mạng này đoán đúng 93,1% trên 72 bạn kiểm tra."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ một epoch là một bạn — một epoch là xem HẾT tập huấn luyện một lần.",
      "Chỉ nhìn loss trên tập huấn luyện: loss train giảm mãi chưa chắc mạng đoán tốt bạn mới."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Huấn luyện = đoán → tính loss → lan truyền ngược → bước xuống dốc, lặp nhiều epoch."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "PyTorch — Learn the Basics: Optimizing model parameters",
       "url": "https://docs.pytorch.org/tutorials/beginner/basics/optimization_tutorial.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "Google Machine Learning Crash Course — Neural networks: training using backpropagation",
       "url": "https://developers.google.com/machine-learning/crash-course/neural-networks/backpropagation",
       "ghi_chu": "tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai29-q5",
     "q": "Sắp xếp một vòng huấn luyện mạng nơ-ron theo đúng thứ tự.",
     "giai": "Đoán → loss → lan truyền ngược → cập nhật.",
     "goi_y": "Phải có loss thì mới tính được độ dốc của loss.",
     "a": [
      "Mạng đoán cho dữ liệu huấn luyện",
      "Tính loss",
      "Lan truyền ngược để tính độ dốc",
      "Cập nhật tham số ngược chiều dốc"
     ],
     "h": "53975e22bbb99"
    },
    {
     "k": "mc",
     "id": "bai29-q6",
     "q": "Tập huấn luyện có 168 bạn. Huấn luyện 300 epoch nghĩa là gì?",
     "giai": "Một epoch là một lần xem hết tập huấn luyện.",
     "goi_y": "Đọc lại dòng ghi dưới định nghĩa về epoch.",
     "a": [
      "Máy xem hết 168 bạn, lặp lại 300 lần",
      "Máy chỉ học 300 bạn đầu tiên",
      "Máy chia bảng thành 300 phần",
      "Mạng có đúng 300 nơ-ron ẩn"
     ],
     "h": "13978c31b7ec"
    }
   ]
  },
  {
   "ten": "Một mạng, ba thư viện",
   "ten_ngan": "Ba thư viện",
   "phut": 4,
   "muc_tieu": "đọc được cùng một mạng viết bằng scikit-learn, PyTorch và TensorFlow / Keras.",
   "khoi_dong": "Bài 4 con đã nghe tên PyTorch và TensorFlow. Chúng khác scikit-learn ở đâu?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Thư viện",
      "Ai phát triển",
      "Viết mạng 2 – 8 – 1",
      "Hợp với"
     ],
     "dong": [
      [
       "scikit-learn",
       "Cộng đồng mã nguồn mở",
       "<code>MLPClassifier(hidden_layer_sizes=(8,))</code>",
       "Mạng nhỏ trên bảng số; học nhanh cú pháp"
      ],
      [
       "PyTorch",
       "Meta tạo ra; nay thuộc PyTorch Foundation",
       "<code>nn.Sequential(nn.Linear(2, 8), nn.ReLU(), nn.Linear(8, 1))</code>",
       "Nghiên cứu, mạng lớn; tự viết vòng huấn luyện"
      ],
      [
       "TensorFlow + Keras",
       "Google",
       "<code>keras.Sequential([Dense(8, activation=\"relu\"), Dense(1, activation=\"sigmoid\")])</code>",
       "Sản phẩm, điện thoại, web"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Cùng mạng 2 – 8 – 1 trên 72 bạn kiểm tra",
     "alt": "Cùng mạng 2 – 8 – 1 trên 72 bạn kiểm tra",
     "src": "img/ba-thu-vien-cung-mot-model.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "kết quả chạy thật",
     "de": null,
     "cot": [
      "Model",
      "Đúng trên tập kiểm tra"
     ],
     "dong": [
      [
       "Luôn đoán nhãn nhiều nhất (mốc)",
       "54,2%"
      ],
      [
       "Logistic — Bài 16",
       "91,7%"
      ],
      [
       "Mạng nơ-ron — scikit-learn",
       "93,1%"
      ],
      [
       "Mạng nơ-ron — PyTorch",
       "93,1%"
      ],
      [
       "Mạng nơ-ron — TensorFlow",
       "93,1%"
      ]
     ],
     "ket_luan": "Ba thư viện cho kết quả gần như nhau — khác nhau ở cách viết, không ở ý tưởng. Và trên bảng 2 cột này, mạng nơ-ron không hơn logistic bao nhiêu.",
     "nhan_manh": [
      2,
      3,
      4
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Colab có sẵn cả ba",
     "html": "Trên Google Colab, <code>import sklearn</code>, <code>import torch</code>, <code>import tensorflow</code> đều chạy được ngay, không cần cài. Phiên bản bài dùng khi chạy thử: PyTorch 2.14.0, TensorFlow 2.21.0, Keras 3.15.1 — kết quả trên máy khác có thể lệch rất ít."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ PyTorch hay TensorFlow cho kết quả “thông minh hơn” scikit-learn với cùng một mạng.",
      "Quên đưa dữ liệu về 0 – 1 trước khi cho mạng nơ-ron học — mạng cũng nhạy với thang đo như KNN."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Cùng một ý tưởng, ba cách viết: scikit-learn gọn nhất, PyTorch linh hoạt, TensorFlow / Keras mạnh cho sản phẩm."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "scikit-learn — Neural network models (MLPClassifier)",
       "url": "https://scikit-learn.org/stable/modules/neural_networks_supervised.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "PyTorch — Learn the Basics",
       "url": "https://docs.pytorch.org/tutorials/beginner/basics/intro.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "TensorFlow — Keras: The Sequential model",
       "url": "https://www.tensorflow.org/guide/keras/sequential_model",
       "ghi_chu": "tài liệu chính thức"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai29-q7",
     "q": "Thư viện nào do Google phát triển?",
     "giai": "TensorFlow do Google phát triển; PyTorch do Meta tạo ra, nay thuộc PyTorch Foundation.",
     "goi_y": "Xem cột “Ai phát triển” trong bảng.",
     "a": [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "pandas"
     ],
     "h": "10916fdc173c1d"
    },
    {
     "k": "ds",
     "id": "bai29-q8",
     "q": "Cùng một mạng 2 – 8 – 1, viết bằng PyTorch luôn đúng hơn hẳn viết bằng scikit-learn.",
     "giai": "Kết quả chạy thật gần như bằng nhau: 93,1% và 93,1%.",
     "goi_y": "Đọc lại bảng kết quả chạy thật.",
     "h": "9da4a9912106b"
    }
   ]
  },
  {
   "ten": "Khi nào cần Deep Learning?",
   "ten_ngan": "Khi nào dùng",
   "phut": 4,
   "muc_tieu": "biết khi nào nên dùng mạng nơ-ron và khi nào model cổ điển là đủ.",
   "khoi_dong": "Bài 2 con đã thấy máy nhận ra chữ số viết tay. Model nào làm việc đó?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Mạng nơ-ron 64 nơ-ron ẩn trên ảnh chữ số 8 × 8: đúng 97,3% trên 450 ảnh kiểm tra",
     "alt": "Mạng nơ-ron 64 nơ-ron ẩn trên ảnh chữ số 8 × 8: đúng 97,3% trên 450 ảnh kiểm tra",
     "src": "img/chu-so-viet-tay.png"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Ảnh 8 × 8 còn quá nhỏ",
     "html": "Mỗi ảnh ở đây chỉ có 64 điểm ảnh — logistic cũng đúng tới 96,9%, gần bằng mạng nơ-ron (97,3%). Ảnh chụp thật có hàng trăm nghìn điểm ảnh; khi đó các model cổ điển tụt hẳn, còn mạng nơ-ron (loại <b>tích chập</b>, học ở Level 2) mới làm tốt. Lợi thế của Deep Learning lộ rõ khi dữ liệu lớn và phức tạp."
    },
    {
     "t": "bang",
     "cot": [
      "Dữ liệu",
      "Nên thử trước",
      "Vì sao"
     ],
     "dong": [
      [
       "Bảng vài trăm dòng, vài cột",
       "Logistic, cây, rừng",
       "Nhanh, dễ giải thích, ít dữ liệu vẫn tốt"
      ],
      [
       "Ảnh, âm thanh, văn bản",
       "Mạng nơ-ron",
       "Tự tìm đặc trưng từ hàng nghìn điểm ảnh, âm, chữ"
      ],
      [
       "Dữ liệu rất lớn",
       "Mạng nơ-ron",
       "Càng nhiều dữ liệu, mạng càng mạnh"
      ],
      [
       "Cần giải thích từng quyết định",
       "Cây nông, logistic",
       "Mạng nơ-ron khó đọc lý do"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Deep Learning ở quanh con",
     "html": "Chatbot, dịch máy, nhận diện khuôn mặt, gợi ý video, xe tự lái đều dùng mạng nơ-ron rất lớn, học trên dữ liệu khổng lồ bằng GPU. Cái giá: cần nhiều dữ liệu, nhiều điện năng, và khó giải thích — vẫn phải kiểm tra như mọi model khác."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Dùng mạng nơ-ron cho mọi bài toán chỉ vì nghe hiện đại.",
      "Nghĩ mạng nơ-ron không bao giờ sai hay không thể học vẹt."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Deep Learning mạnh với ảnh, âm thanh, văn bản và dữ liệu lớn; với bảng nhỏ, model cổ điển thường đủ."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "Google Machine Learning Crash Course — Neural networks",
       "url": "https://developers.google.com/machine-learning/crash-course/neural-networks",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Experience AI (Raspberry Pi Foundation + Google DeepMind)",
       "url": "https://experience-ai.org/",
       "ghi_chu": "bài học AI cho học sinh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai29-q9",
     "q": "Nhóm muốn phân loại 50 000 ảnh lá cây khoẻ / bệnh. Model nào hợp nhất để thử?",
     "giai": "Ảnh nhiều điểm ảnh, dữ liệu lớn — việc mạng nơ-ron làm tốt nhất.",
     "goi_y": "Xem dòng “Ảnh, âm thanh, văn bản” trong bảng.",
     "a": [
      "Mạng nơ-ron",
      "Cây quyết định sâu 2",
      "Luôn đoán lá khoẻ",
      "Hồi quy tuyến tính"
     ],
     "h": "16a74e4f0a5966"
    },
    {
     "k": "ma",
     "id": "bai29-q10",
     "q": "Hai điều nào là cái giá của mạng nơ-ron lớn? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Mạng lớn cần nhiều dữ liệu, máy mạnh, và khó đọc lý do.",
     "goi_y": "Đọc khung “Deep Learning ở quanh con”.",
     "a": [
      "Cần rất nhiều dữ liệu",
      "Khó giải thích lý do",
      "Không học được ảnh",
      "Không cần máy tính"
     ],
     "h": "9222ccb809656"
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
    "id": "bai29-q11",
    "q": "Một nơ-ron làm những phép tính nào?",
    "giai": "z = w·x + b rồi qua hàm kích hoạt.",
    "a": [
     "Nhân trọng số, cộng b, qua kích hoạt",
     "Chỉ cộng các đầu vào lại",
     "Chỉ đếm số dòng dữ liệu",
     "Sắp xếp các đầu vào tăng dần"
    ],
    "h": "d1056bb2cc6b9"
   },
   {
    "k": "mc",
    "id": "bai29-q12",
    "q": "Nơ-ron có w<sub>1</sub> = 1, w<sub>2</sub> = 2, b = −4; x<sub>1</sub> = 2, x<sub>2</sub> = 1. z bằng bao nhiêu?",
    "giai": "1 × 2 + 2 × 1 − 4 = 0.",
    "a": [
     "0",
     "4",
     "−4",
     "8"
    ],
    "h": "c7159a8b67977"
   },
   {
    "k": "mc",
    "id": "bai29-q13",
    "q": "Hàm ReLU biến số −3 thành bao nhiêu?",
    "giai": "ReLU giữ số dương, đổi số âm thành 0.",
    "a": [
     "0",
     "−3",
     "3",
     "1"
    ],
    "h": "12e938eec4e634"
   },
   {
    "k": "mc",
    "id": "bai29-q14",
    "q": "Mạng 2 – 8 – 1 của bài có bao nhiêu tham số?",
    "giai": "2 × 8 + 8 + 8 × 1 + 1 = 33.",
    "a": [
     "33",
     "16",
     "24",
     "11"
    ],
    "h": "15f3390396f035"
   },
   {
    "k": "mc",
    "id": "bai29-q15",
    "q": "“Epoch” nghĩa là gì?",
    "giai": "Huấn luyện thường gồm nhiều epoch.",
    "a": [
     "Một lần xem hết tập huấn luyện",
     "Một nơ-ron của lớp ẩn",
     "Một dòng của tập kiểm tra",
     "Một lần đổi thư viện"
    ],
    "h": "a58d97e07d54"
   },
   {
    "k": "mc",
    "id": "bai29-q16",
    "q": "Lệnh nào trong PyTorch thực hiện lan truyền ngược?",
    "giai": "backward tính độ dốc cho mọi tham số.",
    "a": [
     "loss.backward()",
     "toi_uu.zero_grad()",
     "mang.eval()",
     "print(loss)"
    ],
    "h": "3838d78445bad"
   },
   {
    "k": "mc",
    "id": "bai29-q17",
    "q": "Nhìn hình ba ranh giới. Vì sao mạng 32 nơ-ron ẩn tách hai nhóm trăng khuyết tốt hơn logistic?",
    "giai": "Logistic chỉ kẻ được đường thẳng.",
    "img": {
     "src": "img/ranh-gioi-theo-so-no-ron.png"
    },
    "a": [
     "Lớp ẩn cho ranh giới cong",
     "Mạng dùng nhiều màu hơn",
     "Logistic không có dữ liệu",
     "Mạng được xem tập kiểm tra"
    ],
    "h": "11178a5291df5a"
   },
   {
    "k": "mc",
    "id": "bai29-q18",
    "q": "Nhìn hình đường loss. Điều gì xảy ra khi số epoch tăng?",
    "giai": "Học nhanh lúc đầu, chậm dần khi gần đáy.",
    "img": {
     "src": "img/duong-loss-khi-huan-luyen.png"
    },
    "a": [
     "Loss giảm dần rồi chậm lại",
     "Loss tăng đều liên tục",
     "Loss luôn bằng 0",
     "Loss nhảy ngẫu nhiên"
    ],
    "h": "5f391d8e96a7f"
   },
   {
    "k": "mc",
    "id": "bai29-q19",
    "q": "Trên bảng khối 10 hai cột, mạng nơ-ron so với logistic thế nào?",
    "giai": "93,1% so với 91,7%.",
    "a": [
     "Gần như bằng nhau",
     "Hơn hẳn 30 điểm",
     "Kém hẳn 30 điểm",
     "Không so được với nhau"
    ],
    "h": "12730a45d13bce"
   },
   {
    "k": "mc",
    "id": "bai29-q20",
    "q": "Thư viện nào gọn nhất để thử một mạng nhỏ trên bảng số?",
    "giai": "MLPClassifier chỉ một dòng.",
    "a": [
     "scikit-learn",
     "pandas",
     "matplotlib",
     "Gradio"
    ],
    "h": "137284dfe9a42c"
   },
   {
    "k": "ma",
    "id": "bai29-q21",
    "q": "Hai thư viện nào chuyên dùng cho mạng nơ-ron lớn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "PyTorch và TensorFlow / Keras.",
    "a": [
     "PyTorch",
     "TensorFlow",
     "pandas",
     "matplotlib"
    ],
    "h": "1f3fb5e1fc737"
   },
   {
    "k": "ma",
    "id": "bai29-q22",
    "q": "Hai bước nào nằm trong một vòng huấn luyện? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đoán → loss → lan truyền ngược → cập nhật.",
    "a": [
     "Tính loss",
     "Lan truyền ngược",
     "Vẽ biểu đồ hộp",
     "Xoá tập kiểm tra"
    ],
    "h": "10e894960ebff4"
   },
   {
    "k": "ma",
    "id": "bai29-q23",
    "q": "Hai loại dữ liệu nào mạng nơ-ron đặc biệt mạnh? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dữ liệu nhiều điểm, nhiều chi tiết.",
    "a": [
     "Ảnh",
     "Âm thanh",
     "Bảng 50 dòng",
     "Bảng 2 cột nhỏ"
    ],
    "h": "feca2efb87142"
   },
   {
    "k": "ma",
    "id": "bai29-q24",
    "q": "Hai điều nào đúng về trọng số? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Trọng số là tham số được học.",
    "a": [
     "Máy tự học từ dữ liệu",
     "Mỗi đường nối có một trọng số",
     "Con người đặt tay từng cái",
     "Luôn bằng 1"
    ],
    "h": "1ac2f8d89c1726"
   },
   {
    "k": "sx",
    "id": "bai29-q25",
    "q": "Sắp xếp các lớp của một mạng theo chiều dữ liệu đi qua.",
    "giai": "Vào → ẩn → ra.",
    "a": [
     "Lớp vào",
     "Lớp ẩn",
     "Lớp ra"
    ],
    "h": "667a833d898fa"
   },
   {
    "k": "sx",
    "id": "bai29-q26",
    "q": "Sắp xếp các bước một nơ-ron tính đầu ra.",
    "giai": "Nhân → cộng → kích hoạt.",
    "a": [
     "Nhân đầu vào với trọng số",
     "Cộng lại và cộng b",
     "Đưa tổng qua hàm kích hoạt"
    ],
    "h": "1537746accacb9"
   },
   {
    "k": "sx",
    "id": "bai29-q27",
    "q": "Sắp xếp các dòng của một vòng huấn luyện PyTorch.",
    "giai": "Xoá độ dốc cũ → tính loss → lan truyền ngược → bước.",
    "a": [
     "toi_uu.zero_grad()",
     "loss = ham_loss(mang(X), y)",
     "loss.backward()",
     "toi_uu.step()"
    ],
    "h": "1c9fa8b8867247"
   },
   {
    "k": "dd",
    "id": "bai29-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Học sâu; epoch.",
    "mau": "Nhiều lớp ẩn gọi là {0}; mỗi lần xem hết tập huấn luyện gọi là {1}.",
    "o": [
     [
      "Deep Learning",
      "Naïve Bayes",
      "K-Means",
      "kiểm định chéo"
     ],
     [
      "một epoch",
      "một nơ-ron",
      "một lớp",
      "một nhãn"
     ]
    ],
    "h": "a3218d7bb323f"
   },
   {
    "k": "dd",
    "id": "bai29-q29",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Sigmoid; ReLU.",
    "mau": "Hàm {0} đưa z về khoảng 0 – 1; hàm {1} đổi số âm thành 0.",
    "o": [
     [
      "sigmoid",
      "ReLU",
      "MSE",
      "Gini"
     ],
     [
      "ReLU",
      "sigmoid",
      "MAE",
      "mean"
     ]
    ],
    "h": "1fb3689beef40"
   },
   {
    "k": "dd",
    "id": "bai29-q30",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "PyTorch nay thuộc PyTorch Foundation.",
    "mau": "PyTorch do {0} tạo ra; TensorFlow do {1} phát triển.",
    "o": [
     [
      "Meta",
      "Google",
      "Microsoft",
      "Apple"
     ],
     [
      "Google",
      "Meta",
      "Microsoft",
      "Samsung"
     ]
    ],
    "h": "4f6b22a90b490"
   },
   {
    "k": "dd",
    "id": "bai29-q31",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Bài 6; Bài 12.",
    "mau": "Huấn luyện mạng là {0} lặp lại; loss trên tập {1} cho biết mạng có đoán tốt bạn mới không.",
    "o": [
     [
      "gradient descent",
      "K-Means",
      "chia nhóm",
      "vẽ biểu đồ"
     ],
     [
      "kiểm tra",
      "huấn luyện",
      "ẩn",
      "vào"
     ]
    ],
    "h": "180e5ff395f640"
   },
   {
    "k": "ds",
    "id": "bai29-q32",
    "q": "Mạng nơ-ron càng nhiều nơ-ron thì càng không thể học vẹt.",
    "giai": "Nhiều tham số càng dễ học vẹt nếu thiếu dữ liệu.",
    "h": "11c17c86f1b635"
   },
   {
    "k": "ds",
    "id": "bai29-q33",
    "q": "Trên Google Colab có thể import PyTorch và TensorFlow mà không cần cài thêm.",
    "giai": "Colab cài sẵn.",
    "h": "1dc6fdb5c3b3dc"
   },
   {
    "k": "ds",
    "id": "bai29-q34",
    "q": "Mạng nơ-ron luôn dễ giải thích hơn cây quyết định nông.",
    "giai": "Cây nông đọc được luật; mạng nơ-ron khó đọc lý do.",
    "h": "e0bec69928956"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
