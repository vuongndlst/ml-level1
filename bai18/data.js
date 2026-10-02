window.BAI = {
 "bai": 18,
 "ma": "bai18",
 "nhan": "Bài 18",
 "tieu_de": "Cây quyết định",
 "phan": "Module 10 · Trees and Forests",
 "cau_hoi": "Model có nói cho ta biết vì sao nó quyết định như vậy không?",
 "gioi_thieu": [
  "KNN, hồi quy tuyến tính, hồi quy logistic đều khó trả lời câu hỏi <b>“vì sao?”</b>. Hôm nay con gặp model đọc được luật ra thành câu tiếng Việt: <b>cây quyết định</b>.",
  "Năm chặng: cây quyết định là gì, chọn câu hỏi tốt nhất, đọc cây của lớp mình, độ sâu và học vẹt, và dùng cây trong scikit-learn. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại: quy trình 5 bước và mốc model lười (Bài 12), học vẹt (Bài 12, 13), ma trận nhầm lẫn (Bài 16)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai18",
 "muc_tieu": [
  "Mô tả được cấu trúc cây quyết định: nút gốc, nút, nhánh, lá.",
  "Giải thích được cây chọn câu hỏi làm các nhóm gọn nhất.",
  "Đọc được luật NẾU… THÌ… từ một cây và tự đi theo cây để dự đoán.",
  "Giải thích được cây quá sâu thì học vẹt.",
  "Huấn luyện cây bằng scikit-learn với độ sâu giới hạn."
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
   "ten": "Cây quyết định là gì?",
   "ten_ngan": "Cây là gì",
   "phut": 4,
   "muc_tieu": "mô tả được cấu trúc cây quyết định: nút gốc, nút, nhánh, lá.",
   "khoi_dong": "Trò 20 câu hỏi: đoán một con vật chỉ bằng câu hỏi Có / Không. Con hỏi câu nào trước?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Cây quyết định (decision tree)",
     "html": "Model hỏi một chuỗi câu hỏi Có / Không về các cột, mỗi câu trả lời dẫn sang một nhánh, tới <b>lá</b> thì ra dự đoán.",
     "ky_hieu": "Nút gốc: câu hỏi đầu tiên · nút: câu hỏi giữa chừng · lá: kết luận."
    },
    {
     "t": "anh",
     "cap": "Cấu trúc một cây",
     "alt": "Cấu trúc một cây",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216110915386263/decision_tree.webp",
     "du_phong": "img/minh-hoa-cau-truc-mot-cay-quyet-dinh.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     },
     "chu_giai": [
      [
       "Root Node",
       "Nút gốc"
      ],
      [
       "Decision Node",
       "Nút quyết định (câu hỏi)"
      ],
      [
       "Leaf Node",
       "Lá (kết luận)"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Một cây đoán khách có mua hàng",
     "alt": "Một cây đoán khách có mua hàng",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250408153824016146/predicting_whether_a_customer_will_buy_a_product.webp",
     "du_phong": "img/minh-hoa-cay-quyet-dinh-du-doan-khach-co-mua-hang.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     },
     "chu_giai": [
      [
       "Income > 50.000?",
       "Thu nhập trên 50 000?"
      ],
      [
       "Age > 30?",
       "Trên 30 tuổi?"
      ],
      [
       "Previous Purchase > 0",
       "Đã từng mua?"
      ],
      [
       "Purchase / No Purchase",
       "Mua / Không mua"
      ],
      [
       "Internal Node",
       "Nút giữa"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Cây quyết định dùng ở đâu",
     "alt": "Cây quyết định dùng ở đâu",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20251216110915568549/applications_of_decision_trees.webp",
     "du_phong": "img/minh-hoa-bon-linh-vuc-dung-cay-quyet-dinh.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     },
     "chu_giai": [
      [
       "Finance",
       "Tài chính — duyệt khoản vay"
      ],
      [
       "Medicine",
       "Y tế — chẩn đoán"
      ],
      [
       "Machine Learning",
       "Nền tảng của Random Forest (Bài 20)"
      ],
      [
       "Education",
       "Giáo dục — dự đoán điểm"
      ]
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ cây vẽ ngược là sai — cây quyết định luôn vẽ gốc ở trên, lá ở dưới.",
      "Nhầm lá với nút: lá không hỏi gì nữa, chỉ đưa kết luận."
     ]
    },
    {
     "t": "video",
     "yt": "_L39rN6gz7Y",
     "ten": "StatQuest — Decision and Classification Trees, Clearly Explained",
     "ghi_chu": "tiếng Anh, có phụ đề; không bắt buộc",
     "bat_dau": null,
     "ket_thuc": null
    },
    {
     "t": "tom_tat",
     "html": "Cây quyết định: chuỗi câu hỏi Có / Không, gốc ở trên, lá cho kết luận."
    },
    {
     "t": "doc_them",
     "link": [
      {
       "ten": "scikit-learn — Decision Trees",
       "url": "https://scikit-learn.org/stable/modules/tree.html",
       "ghi_chu": "tài liệu chính thức"
      },
      {
       "ten": "Google — Decision Forests: Decision trees",
       "url": "https://developers.google.com/machine-learning/decision-forests/decision-trees",
       "ghi_chu": "tiếng Anh"
      },
      {
       "ten": "Decision Tree in Machine Learning",
       "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/",
       "ghi_chu": "GeeksforGeeks, tiếng Anh"
      }
     ]
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai18-q1",
     "q": "Trong cây quyết định, phần nào đưa ra kết luận cuối cùng?",
     "giai": "Lá không hỏi nữa, chỉ kết luận.",
     "goi_y": "Phần nào nằm cuối cùng, không có nhánh con?",
     "a": [
      "Lá",
      "Nút gốc",
      "Nhánh",
      "Nút quyết định"
     ],
     "h": "1c03bbf4260bb9"
    },
    {
     "k": "sx",
     "id": "bai18-q2",
     "q": "Sắp xếp đường đi của một mẫu qua cây.",
     "giai": "Gốc → nhánh → nút → lá.",
     "goi_y": "Mẫu mới bắt đầu từ đâu của cây?",
     "a": [
      "Trả lời câu hỏi ở nút gốc",
      "Đi theo nhánh ứng với câu trả lời",
      "Trả lời câu hỏi ở nút tiếp theo",
      "Tới lá và nhận kết luận"
     ],
     "h": "1b8f2d1d0e6ed0"
    }
   ]
  },
  {
   "ten": "Chọn câu hỏi tốt nhất",
   "ten_ngan": "Câu hỏi tốt",
   "phut": 5,
   "muc_tieu": "giải thích được cây chọn câu hỏi làm các nhóm gọn nhất.",
   "khoi_dong": "Học trên 1.5 giờ? Học trên 3.45 giờ? Mạng trên 250 phút? Câu nào chia lớp gọn nhất?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Ba câu hỏi, ba mức lẫn lộn còn lại",
     "alt": "Ba câu hỏi, ba mức lẫn lộn còn lại",
     "src": "img/cau-hoi-nao-chia-gon-nhat.png"
    },
    {
     "t": "dinh_nghia",
     "ten": "Độ lẫn lộn (chỉ số Gini)",
     "html": "Đo một nhóm còn trộn hai nhãn tới đâu: <b>0</b> = cả nhóm cùng một nhãn (thuần); <b>0.5</b> = nửa này nửa kia (lẫn nhất, với hai nhãn).",
     "ky_hieu": "Cây thử mọi câu hỏi có thể và chọn câu làm độ lẫn lộn còn lại <b>nhỏ nhất</b>."
    },
    {
     "t": "vi_du",
     "tieu_de": "ba câu hỏi trên tập huấn luyện",
     "de": null,
     "cot": [
      "Câu hỏi",
      "Độ lẫn lộn còn lại"
     ],
     "dong": [
      [
       "Học trên 1.5 giờ?",
       "0.392"
      ],
      [
       "Học trên 3.45 giờ?",
       "<b>0.161</b>"
      ],
      [
       "Dùng mạng trên 250 phút?",
       "0.462"
      ]
     ],
     "ket_luan": "Trước khi chia: 0.497. Câu “học trên 3.45 giờ” giảm mạnh nhất nên thành câu hỏi đầu tiên.",
     "nhan_manh": [
      1
     ]
    },
    {
     "t": "chia_nhanh",
     "tieu_de": "tự đặt câu hỏi đầu tiên cho cây",
     "huong_dan": "Chọn cột, kéo ngưỡng. Hai thanh cho biết mỗi nhánh còn bao nhiêu bạn Đạt (xanh) và Chưa đạt (cam). <b>Thử thách:</b> tìm câu hỏi làm Gini còn lại nhỏ nhất — đó là câu máy chọn.",
     "bang": {
      "Giờ tự học": [
       {
        "t": 0.5,
        "gini": 0.4905,
        "trai": [
         0,
         2
        ],
        "phai": [
         90,
         76
        ]
       },
       {
        "t": 0.6,
        "gini": 0.4725,
        "trai": [
         0,
         7
        ],
        "phai": [
         90,
         71
        ]
       },
       {
        "t": 0.7,
        "gini": 0.4611,
        "trai": [
         0,
         10
        ],
        "phai": [
         90,
         68
        ]
       },
       {
        "t": 0.8,
        "gini": 0.4533,
        "trai": [
         0,
         12
        ],
        "phai": [
         90,
         66
        ]
       },
       {
        "t": 0.9,
        "gini": 0.4533,
        "trai": [
         0,
         12
        ],
        "phai": [
         90,
         66
        ]
       },
       {
        "t": 1.0,
        "gini": 0.4533,
        "trai": [
         0,
         12
        ],
        "phai": [
         90,
         66
        ]
       },
       {
        "t": 1.1,
        "gini": 0.4412,
        "trai": [
         0,
         15
        ],
        "phai": [
         90,
         63
        ]
       },
       {
        "t": 1.2,
        "gini": 0.4286,
        "trai": [
         0,
         18
        ],
        "phai": [
         90,
         60
        ]
       },
       {
        "t": 1.3,
        "gini": 0.4155,
        "trai": [
         0,
         21
        ],
        "phai": [
         90,
         57
        ]
       },
       {
        "t": 1.4,
        "gini": 0.4018,
        "trai": [
         0,
         24
        ],
        "phai": [
         90,
         54
        ]
       },
       {
        "t": 1.5,
        "gini": 0.3924,
        "trai": [
         0,
         26
        ],
        "phai": [
         90,
         52
        ]
       },
       {
        "t": 1.6,
        "gini": 0.3827,
        "trai": [
         0,
         28
        ],
        "phai": [
         90,
         50
        ]
       },
       {
        "t": 1.7,
        "gini": 0.3676,
        "trai": [
         0,
         31
        ],
        "phai": [
         90,
         47
        ]
       },
       {
        "t": 1.8,
        "gini": 0.3353,
        "trai": [
         0,
         37
        ],
        "phai": [
         90,
         41
        ]
       },
       {
        "t": 1.9,
        "gini": 0.3239,
        "trai": [
         0,
         39
        ],
        "phai": [
         90,
         39
        ]
       },
       {
        "t": 2.0,
        "gini": 0.2875,
        "trai": [
         0,
         45
        ],
        "phai": [
         90,
         33
        ]
       },
       {
        "t": 2.1,
        "gini": 0.281,
        "trai": [
         0,
         46
        ],
        "phai": [
         90,
         32
        ]
       },
       {
        "t": 2.2,
        "gini": 0.2679,
        "trai": [
         0,
         48
        ],
        "phai": [
         90,
         30
        ]
       },
       {
        "t": 2.3,
        "gini": 0.2473,
        "trai": [
         0,
         51
        ],
        "phai": [
         90,
         27
        ]
       },
       {
        "t": 2.4,
        "gini": 0.2474,
        "trai": [
         2,
         54
        ],
        "phai": [
         88,
         24
        ]
       },
       {
        "t": 2.5,
        "gini": 0.2275,
        "trai": [
         3,
         58
        ],
        "phai": [
         87,
         20
        ]
       },
       {
        "t": 2.6,
        "gini": 0.2116,
        "trai": [
         3,
         60
        ],
        "phai": [
         87,
         18
        ]
       },
       {
        "t": 2.7,
        "gini": 0.2218,
        "trai": [
         4,
         60
        ],
        "phai": [
         86,
         18
        ]
       },
       {
        "t": 2.8,
        "gini": 0.2154,
        "trai": [
         5,
         62
        ],
        "phai": [
         85,
         16
        ]
       },
       {
        "t": 2.9,
        "gini": 0.1983,
        "trai": [
         5,
         64
        ],
        "phai": [
         85,
         14
        ]
       },
       {
        "t": 3.0,
        "gini": 0.1983,
        "trai": [
         5,
         64
        ],
        "phai": [
         85,
         14
        ]
       },
       {
        "t": 3.1,
        "gini": 0.1713,
        "trai": [
         5,
         67
        ],
        "phai": [
         85,
         11
        ]
       },
       {
        "t": 3.2,
        "gini": 0.1625,
        "trai": [
         6,
         69
        ],
        "phai": [
         84,
         9
        ]
       },
       {
        "t": 3.3,
        "gini": 0.1617,
        "trai": [
         9,
         72
        ],
        "phai": [
         81,
         6
        ]
       },
       {
        "t": 3.4,
        "gini": 0.1607,
        "trai": [
         10,
         73
        ],
        "phai": [
         80,
         5
        ]
       },
       {
        "t": 3.5,
        "gini": 0.1786,
        "trai": [
         12,
         73
        ],
        "phai": [
         78,
         5
        ]
       },
       {
        "t": 3.6,
        "gini": 0.1854,
        "trai": [
         14,
         74
        ],
        "phai": [
         76,
         4
        ]
       },
       {
        "t": 3.7,
        "gini": 0.2018,
        "trai": [
         16,
         74
        ],
        "phai": [
         74,
         4
        ]
       },
       {
        "t": 3.8,
        "gini": 0.2097,
        "trai": [
         17,
         74
        ],
        "phai": [
         73,
         4
        ]
       },
       {
        "t": 3.9,
        "gini": 0.2251,
        "trai": [
         19,
         74
        ],
        "phai": [
         71,
         4
        ]
       },
       {
        "t": 4.0,
        "gini": 0.2397,
        "trai": [
         21,
         74
        ],
        "phai": [
         69,
         4
        ]
       },
       {
        "t": 4.1,
        "gini": 0.2606,
        "trai": [
         24,
         74
        ],
        "phai": [
         66,
         4
        ]
       },
       {
        "t": 4.2,
        "gini": 0.2673,
        "trai": [
         25,
         74
        ],
        "phai": [
         65,
         4
        ]
       },
       {
        "t": 4.3,
        "gini": 0.2739,
        "trai": [
         26,
         74
        ],
        "phai": [
         64,
         4
        ]
       },
       {
        "t": 4.4,
        "gini": 0.2927,
        "trai": [
         29,
         74
        ],
        "phai": [
         61,
         4
        ]
       },
       {
        "t": 4.5,
        "gini": 0.3047,
        "trai": [
         31,
         74
        ],
        "phai": [
         59,
         4
        ]
       },
       {
        "t": 4.6,
        "gini": 0.2951,
        "trai": [
         31,
         75
        ],
        "phai": [
         59,
         3
        ]
       },
       {
        "t": 4.7,
        "gini": 0.2808,
        "trai": [
         32,
         77
        ],
        "phai": [
         58,
         1
        ]
       },
       {
        "t": 4.8,
        "gini": 0.2701,
        "trai": [
         32,
         78
        ],
        "phai": [
         58,
         0
        ]
       },
       {
        "t": 4.9,
        "gini": 0.2761,
        "trai": [
         33,
         78
        ],
        "phai": [
         57,
         0
        ]
       },
       {
        "t": 5.0,
        "gini": 0.2932,
        "trai": [
         36,
         78
        ],
        "phai": [
         54,
         0
        ]
       },
       {
        "t": 5.1,
        "gini": 0.3042,
        "trai": [
         38,
         78
        ],
        "phai": [
         52,
         0
        ]
       },
       {
        "t": 5.2,
        "gini": 0.3095,
        "trai": [
         39,
         78
        ],
        "phai": [
         51,
         0
        ]
       },
       {
        "t": 5.3,
        "gini": 0.3199,
        "trai": [
         41,
         78
        ],
        "phai": [
         49,
         0
        ]
       },
       {
        "t": 5.4,
        "gini": 0.3491,
        "trai": [
         47,
         78
        ],
        "phai": [
         43,
         0
        ]
       },
       {
        "t": 5.5,
        "gini": 0.3627,
        "trai": [
         50,
         78
        ],
        "phai": [
         40,
         0
        ]
       },
       {
        "t": 5.6,
        "gini": 0.3714,
        "trai": [
         52,
         78
        ],
        "phai": [
         38,
         0
        ]
       },
       {
        "t": 5.7,
        "gini": 0.384,
        "trai": [
         55,
         78
        ],
        "phai": [
         35,
         0
        ]
       },
       {
        "t": 5.8,
        "gini": 0.3881,
        "trai": [
         56,
         78
        ],
        "phai": [
         34,
         0
        ]
       },
       {
        "t": 5.9,
        "gini": 0.396,
        "trai": [
         58,
         78
        ],
        "phai": [
         32,
         0
        ]
       },
       {
        "t": 6.0,
        "gini": 0.4075,
        "trai": [
         61,
         78
        ],
        "phai": [
         29,
         0
        ]
       },
       {
        "t": 6.1,
        "gini": 0.4149,
        "trai": [
         63,
         78
        ],
        "phai": [
         27,
         0
        ]
       },
       {
        "t": 6.2,
        "gini": 0.4185,
        "trai": [
         64,
         78
        ],
        "phai": [
         26,
         0
        ]
       },
       {
        "t": 6.3,
        "gini": 0.4425,
        "trai": [
         71,
         78
        ],
        "phai": [
         19,
         0
        ]
       },
       {
        "t": 6.4,
        "gini": 0.4457,
        "trai": [
         72,
         78
        ],
        "phai": [
         18,
         0
        ]
       },
       {
        "t": 6.5,
        "gini": 0.4583,
        "trai": [
         76,
         78
        ],
        "phai": [
         14,
         0
        ]
       },
       {
        "t": 6.6,
        "gini": 0.4672,
        "trai": [
         79,
         78
        ],
        "phai": [
         11,
         0
        ]
       },
       {
        "t": 6.7,
        "gini": 0.4815,
        "trai": [
         84,
         78
        ],
        "phai": [
         6,
         0
        ]
       },
       {
        "t": 6.8,
        "gini": 0.4923,
        "trai": [
         88,
         78
        ],
        "phai": [
         2,
         0
        ]
       },
       {
        "t": 6.9,
        "gini": 0.4949,
        "trai": [
         89,
         78
        ],
        "phai": [
         1,
         0
        ]
       },
       {
        "t": 7.0,
        "gini": 0.4974,
        "trai": [
         90,
         78
        ],
        "phai": [
         0,
         0
        ]
       }
      ],
      "Phút mạng XH": [
       {
        "t": 20.0,
        "gini": 0.4869,
        "trai": [
         4,
         0
        ],
        "phai": [
         86,
         78
        ]
       },
       {
        "t": 30.0,
        "gini": 0.4815,
        "trai": [
         6,
         0
        ],
        "phai": [
         84,
         78
        ]
       },
       {
        "t": 40.0,
        "gini": 0.473,
        "trai": [
         9,
         0
        ],
        "phai": [
         81,
         78
        ]
       },
       {
        "t": 50.0,
        "gini": 0.4643,
        "trai": [
         12,
         0
        ],
        "phai": [
         78,
         78
        ]
       },
       {
        "t": 60.0,
        "gini": 0.4583,
        "trai": [
         14,
         0
        ],
        "phai": [
         76,
         78
        ]
       },
       {
        "t": 70.0,
        "gini": 0.4511,
        "trai": [
         19,
         1
        ],
        "phai": [
         71,
         77
        ]
       },
       {
        "t": 80.0,
        "gini": 0.4621,
        "trai": [
         20,
         3
        ],
        "phai": [
         70,
         75
        ]
       },
       {
        "t": 90.0,
        "gini": 0.4294,
        "trai": [
         32,
         4
        ],
        "phai": [
         58,
         74
        ]
       },
       {
        "t": 100.0,
        "gini": 0.4303,
        "trai": [
         39,
         8
        ],
        "phai": [
         51,
         70
        ]
       },
       {
        "t": 110.0,
        "gini": 0.4139,
        "trai": [
         48,
         11
        ],
        "phai": [
         42,
         67
        ]
       },
       {
        "t": 120.0,
        "gini": 0.4139,
        "trai": [
         55,
         16
        ],
        "phai": [
         35,
         62
        ]
       },
       {
        "t": 130.0,
        "gini": 0.4155,
        "trai": [
         62,
         22
        ],
        "phai": [
         28,
         56
        ]
       },
       {
        "t": 140.0,
        "gini": 0.4221,
        "trai": [
         65,
         26
        ],
        "phai": [
         25,
         52
        ]
       },
       {
        "t": 150.0,
        "gini": 0.4081,
        "trai": [
         71,
         29
        ],
        "phai": [
         19,
         49
        ]
       },
       {
        "t": 160.0,
        "gini": 0.4262,
        "trai": [
         74,
         36
        ],
        "phai": [
         16,
         42
        ]
       },
       {
        "t": 170.0,
        "gini": 0.415,
        "trai": [
         77,
         37
        ],
        "phai": [
         13,
         41
        ]
       },
       {
        "t": 180.0,
        "gini": 0.4141,
        "trai": [
         78,
         38
        ],
        "phai": [
         12,
         40
        ]
       },
       {
        "t": 190.0,
        "gini": 0.4133,
        "trai": [
         82,
         43
        ],
        "phai": [
         8,
         35
        ]
       },
       {
        "t": 200.0,
        "gini": 0.4225,
        "trai": [
         82,
         45
        ],
        "phai": [
         8,
         33
        ]
       },
       {
        "t": 210.0,
        "gini": 0.4276,
        "trai": [
         84,
         49
        ],
        "phai": [
         6,
         29
        ]
       },
       {
        "t": 220.0,
        "gini": 0.432,
        "trai": [
         84,
         50
        ],
        "phai": [
         6,
         28
        ]
       },
       {
        "t": 230.0,
        "gini": 0.4382,
        "trai": [
         85,
         53
        ],
        "phai": [
         5,
         25
        ]
       },
       {
        "t": 240.0,
        "gini": 0.4543,
        "trai": [
         85,
         57
        ],
        "phai": [
         5,
         21
        ]
       },
       {
        "t": 250.0,
        "gini": 0.4617,
        "trai": [
         85,
         59
        ],
        "phai": [
         5,
         19
        ]
       },
       {
        "t": 260.0,
        "gini": 0.4534,
        "trai": [
         87,
         60
        ],
        "phai": [
         3,
         18
        ]
       },
       {
        "t": 270.0,
        "gini": 0.4684,
        "trai": [
         87,
         64
        ],
        "phai": [
         3,
         14
        ]
       },
       {
        "t": 280.0,
        "gini": 0.4657,
        "trai": [
         88,
         65
        ],
        "phai": [
         2,
         13
        ]
       },
       {
        "t": 290.0,
        "gini": 0.4765,
        "trai": [
         88,
         68
        ],
        "phai": [
         2,
         10
        ]
       },
       {
        "t": 300.0,
        "gini": 0.4863,
        "trai": [
         88,
         71
        ],
        "phai": [
         2,
         7
        ]
       },
       {
        "t": 310.0,
        "gini": 0.4806,
        "trai": [
         89,
         71
        ],
        "phai": [
         1,
         7
        ]
       },
       {
        "t": 320.0,
        "gini": 0.484,
        "trai": [
         89,
         72
        ],
        "phai": [
         1,
         6
        ]
       },
       {
        "t": 330.0,
        "gini": 0.4874,
        "trai": [
         89,
         73
        ],
        "phai": [
         1,
         5
        ]
       },
       {
        "t": 340.0,
        "gini": 0.4905,
        "trai": [
         89,
         74
        ],
        "phai": [
         1,
         4
        ]
       },
       {
        "t": 350.0,
        "gini": 0.4905,
        "trai": [
         89,
         74
        ],
        "phai": [
         1,
         4
        ]
       },
       {
        "t": 360.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 370.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 380.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 390.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 400.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 410.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 420.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 430.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       },
       {
        "t": 440.0,
        "gini": 0.4935,
        "trai": [
         89,
         75
        ],
        "phai": [
         1,
         3
        ]
       }
      ]
     },
     "so_le": {
      "Giờ tự học": 1,
      "Phút mạng XH": 0
     },
     "gini_goc": 0.497,
     "ten": [
      "Đạt",
      "Chưa đạt"
     ],
     "ghi": "Tính trên 168 bạn của tập huấn luyện (dữ liệu mô phỏng). Gini còn lại là trung bình Gini hai nhánh, tính theo số bạn mỗi nhánh."
    },
    {
     "t": "anh",
     "cap": "Chia theo cột Y: hai nhánh đều thuần — câu hỏi hoàn hảo",
     "alt": "Chia theo cột Y: hai nhánh đều thuần — câu hỏi hoàn hảo",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250804112900346223/444.webp",
     "du_phong": "img/minh-hoa-chia-theo-cot-y-cho-hai-nhanh-thuan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     },
     "chu_giai": [
      [
       "Split an attribute Y",
       "Chia theo cột Y"
      ],
      [
       "GAIN = 1",
       "Lợi thông tin tối đa"
      ],
      [
       "E child = 0",
       "Nhánh con thuần, không còn lẫn"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Chia theo cột Z: hai nhánh vẫn lẫn — câu hỏi vô ích",
     "alt": "Chia theo cột Z: hai nhánh vẫn lẫn — câu hỏi vô ích",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250804113010619739/555.webp",
     "du_phong": "img/minh-hoa-chia-theo-cot-z-khong-loi-gi.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     },
     "chu_giai": [
      [
       "Split on feature Z",
       "Chia theo cột Z"
      ],
      [
       "GAIN = 0",
       "Không lợi gì"
      ]
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Không cần nhớ công thức",
     "html": "GfG dùng entropy và “lợi thông tin” (information gain) — cùng ý với Gini: đo độ lẫn lộn, chọn câu làm nó giảm nhiều nhất."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ cây chọn câu hỏi ngẫu nhiên.",
      "Nghĩ Gini càng lớn càng tốt — ngược lại, càng nhỏ càng gọn."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Mỗi nút, cây chọn câu hỏi làm độ lẫn lộn còn lại nhỏ nhất."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai18-q3",
     "q": "Theo bảng, câu hỏi nào được cây chọn làm câu hỏi đầu tiên?",
     "giai": "Độ lẫn lộn còn lại nhỏ nhất: 0.161.",
     "goi_y": "Tìm dòng có độ lẫn lộn còn lại nhỏ nhất.",
     "a": [
      "Học trên 3.45 giờ?",
      "Học trên 1.5 giờ?",
      "Dùng mạng trên 250 phút?",
      "Ngủ trên 7 giờ?"
     ],
     "h": "5ff438f1e602"
    },
    {
     "k": "dd",
     "id": "bai18-q4",
     "q": "Chọn số đúng cho mỗi chỗ trống.",
     "giai": "Gini đo độ lẫn lộn.",
     "goi_y": "Nhóm toàn Đạt thì còn lẫn lộn không?",
     "mau": "Với hai nhãn, nhóm thuần có Gini = {0}; nhóm nửa này nửa kia có Gini = {1}.",
     "o": [
      [
       "0",
       "0.5",
       "1",
       "100"
      ],
      [
       "0.5",
       "0",
       "1",
       "2"
      ]
     ],
     "h": "d7016ee74d94f"
    }
   ]
  },
  {
   "ten": "Đọc cây của lớp mình",
   "ten_ngan": "Đọc cây",
   "phut": 5,
   "muc_tieu": "đọc được luật NẾU… THÌ… từ một cây và tự đi theo cây để dự đoán.",
   "khoi_dong": "Cây chỉ hỏi hai tầng. Nó nói gì về cách học và dùng mạng?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Cây sâu 1: chỉ một câu hỏi, đúng 91.7% trên tập kiểm tra",
     "alt": "Cây sâu 1: chỉ một câu hỏi, đúng 91.7% trên tập kiểm tra",
     "src": "img/cay-sau-1-chia-doi-lop.png"
    },
    {
     "t": "anh",
     "cap": "Cây sâu 2 của lớp: mỗi ô ghi câu hỏi, số bạn và nhãn",
     "alt": "Cây sâu 2 của lớp: mỗi ô ghi câu hỏi, số bạn và nhãn",
     "src": "img/cay-sau-2-cua-lop.png"
    },
    {
     "t": "anh",
     "cap": "Ba luật đọc được từ cây sâu 2",
     "alt": "Ba luật đọc được từ cây sâu 2",
     "src": "img/luat-doc-thanh-cau-tieng-viet.png"
    },
    {
     "t": "demo_tung_buoc",
     "tieu_de": "đi theo cây với ba bạn mới",
     "huong_dan": "Chọn một bạn, bấm “Bước tiếp” để đi từng câu hỏi của cây sâu 2.",
     "nhan_chon": "Bạn mới",
     "cot": [
      "Bước",
      "Câu hỏi",
      "Trả lời",
      "Kết luận"
     ],
     "mac_dinh": 0,
     "lua_chon": [
      {
       "nhan": "Bạn Hà (2.8 giờ, 90 phút)",
       "dong": [
        [
         "1",
         "Giờ tự học ≤ 3.45?",
         "2.8 → Có — rẽ trái",
         "—"
        ],
        [
         "2",
         "Giờ tự học ≤ 2.35?",
         "2.8 → Không — rẽ phải",
         "—"
        ],
        [
         "3",
         "Tới lá",
         "",
         "<b>CHƯA ĐẠT</b>"
        ]
       ]
      },
      {
       "nhan": "Bạn Minh (4.5 giờ, 120 phút)",
       "dong": [
        [
         "1",
         "Giờ tự học ≤ 3.45?",
         "4.5 → Không — rẽ phải",
         "—"
        ],
        [
         "2",
         "Phút mạng ≤ 317.5?",
         "120 → Có — rẽ trái",
         "—"
        ],
        [
         "3",
         "Tới lá",
         "",
         "<b>ĐẠT</b>"
        ]
       ]
      },
      {
       "nhan": "Bạn Khoa (5.2 giờ, 380 phút)",
       "dong": [
        [
         "1",
         "Giờ tự học ≤ 3.45?",
         "5.2 → Không — rẽ phải",
         "—"
        ],
        [
         "2",
         "Phút mạng ≤ 317.5?",
         "380 → Không — rẽ phải",
         "—"
        ],
        [
         "3",
         "Tới lá",
         "",
         "<b>CHƯA ĐẠT</b>"
        ]
       ]
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "ml",
     "tieu_de": "Luật thứ ba",
     "html": "NẾU học > 3.45 giờ VÀ mạng > 317.5 phút THÌ Chưa đạt — học nhiều mà lướt mạng quá nhiều vẫn có nguy cơ. KNN hay logistic không nói ra được câu như vậy."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đọc ngược nhánh: nhánh trái là câu trả lời “Có” (≤), nhánh phải là “Không”.",
      "Nghĩ luật của cây là nguyên nhân — nó chỉ tóm tắt dữ liệu (mô phỏng)."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Mỗi đường từ gốc tới lá là một luật NẾU… THÌ… đọc được bằng lời."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai18-q5",
     "q": "Theo phần Tự thử, cây đoán Bạn Khoa thế nào?",
     "giai": "Học nhiều nhưng mạng 380 phút > 317.5.",
     "goi_y": "Chọn bạn đó và bấm tới lá.",
     "a": [
      "Chưa đạt",
      "Đạt",
      "Không đoán được",
      "Cần hỏi thêm giờ ngủ"
     ],
     "h": "9c2704ae365c4"
    },
    {
     "k": "ds",
     "id": "bai18-q6",
     "q": "Cây sâu 2 của lớp đoán mọi bạn học không quá 3.45 giờ là Chưa đạt.",
     "giai": "Cả hai lá bên trái đều Chưa đạt.",
     "goi_y": "Nhìn nhánh trái của nút gốc.",
     "h": "c4c5c00f676b3"
    }
   ]
  },
  {
   "ten": "Độ sâu và học vẹt",
   "ten_ngan": "Độ sâu",
   "phut": 4,
   "muc_tieu": "giải thích được cây quá sâu thì học vẹt.",
   "khoi_dong": "Cây được hỏi bao nhiêu câu cũng được. Hỏi thật nhiều có tốt hơn không?",
   "khoi": [
    {
     "t": "tra_bang",
     "tieu_de": "thử các độ sâu",
     "huong_dan": "Kéo thanh trượt để đổi độ sâu tối đa của cây. So hai đường: đã học (train) và chưa thấy (test).",
     "nhan_truot": "Độ sâu tối đa",
     "khoa": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "8"
     ],
     "so": [
      91.1,
      92.3,
      92.9,
      94.6,
      96.4,
      97.6,
      100.0
     ],
     "so2": [
      91.7,
      91.7,
      91.7,
      91.7,
      87.5,
      88.9,
      87.5
     ],
     "ten_so": "Đã học (train)",
     "ten_so2": "Chưa thấy (test)",
     "ten_chenh": "train − test:",
     "don_vi": "%",
     "kieu": "duong",
     "ymin": 80,
     "ymax": 100,
     "truc_x": "Độ sâu tối đa (max_depth)",
     "truc_y": "Đoán đúng (%)",
     "ghi": [
      "Độ sâu 1: 2 lá.",
      "Độ sâu 2: 4 lá.",
      "Độ sâu 3: 7 lá.",
      "Độ sâu 4: 10 lá.",
      "Độ sâu 5: 12 lá.",
      "Độ sâu 6: 14 lá.",
      "Độ sâu 8: 18 lá."
     ]
    },
    {
     "t": "anh",
     "cap": "Train leo lên 100%, test đứng rồi tụt",
     "alt": "Train leo lên 100%, test đứng rồi tụt",
     "src": "img/do-chinh-xac-theo-do-sau.png"
    },
    {
     "t": "anh",
     "cap": "Cây càng sâu, vùng quyết định càng vụn",
     "alt": "Cây càng sâu, vùng quyết định càng vụn",
     "src": "img/duong-bien-cay-theo-do-sau.png"
    },
    {
     "t": "anh",
     "cap": "Cây không giới hạn: 18 lá — đọc không nổi",
     "alt": "Cây không giới hạn: 18 lá — đọc không nổi",
     "src": "img/cay-khong-gioi-han-qua-ram.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "ba độ sâu",
     "de": null,
     "cot": [
      "Độ sâu",
      "Số lá",
      "Train",
      "Test"
     ],
     "dong": [
      [
       "1",
       "2",
       "91.1%",
       "91.7%"
      ],
      [
       "4",
       "10",
       "94.6%",
       "91.7%"
      ],
      [
       "8",
       "18",
       "100.0%",
       "87.5%"
      ]
     ],
     "ket_luan": "Không giới hạn: đúng 100.0% trên dữ liệu đã học nhưng chỉ 87.5% trên tập kiểm tra — học vẹt.",
     "nhan_manh": [
      2
     ]
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Chọn cây sâu nhất vì đúng 100% trên tập huấn luyện.",
      "Nghĩ cây nông (1 – 2 tầng) là quá đơn giản — ở đây nó tốt ngang cây sâu 4."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Giới hạn độ sâu (max_depth) để cây vừa đọc được vừa không học vẹt."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai18-q7",
     "q": "Cây không giới hạn độ sâu có bao nhiêu lá?",
     "giai": "Mỗi lá gần như chỉ để nhớ vài bạn.",
     "goi_y": "Kéo thanh trượt tới độ sâu lớn nhất.",
     "a": [
      "18",
      "4",
      "10",
      "100"
     ],
     "h": "4867ffa9880c4"
    },
    {
     "k": "ma",
     "id": "bai18-q8",
     "q": "Khi cây sâu thêm từ 4 lên 8 tầng, hai điều nào xảy ra? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Dấu hiệu học vẹt.",
     "goi_y": "So hai ô kết quả khi kéo từ 4 lên 8.",
     "a": [
      "Đúng hơn trên tập huấn luyện",
      "Kém đi trên tập kiểm tra",
      "Đúng hơn trên tập kiểm tra",
      "Ít lá hơn"
     ],
     "h": "18ee43360cb2cc"
    }
   ]
  },
  {
   "ten": "Cây trong scikit-learn",
   "ten_ngan": "scikit-learn",
   "phut": 4,
   "muc_tieu": "huấn luyện cây bằng scikit-learn với độ sâu giới hạn.",
   "khoi_dong": "Vẽ và đọc cây bằng máy mất mấy dòng lệnh?",
   "khoi": [
    {
     "t": "bang",
     "cot": [
      "Bước",
      "Lệnh"
     ],
     "dong": [
      [
       "Huấn luyện",
       "<code>cay = DecisionTreeClassifier(max_depth=2, random_state=42)</code><br><code>cay.fit(X_train, y_train)</code>"
      ],
      [
       "Vẽ cây",
       "<code>plot_tree(cay, feature_names=..., filled=True)</code>"
      ],
      [
       "In luật",
       "<code>print(export_text(cay, feature_names=...))</code>"
      ],
      [
       "Dự đoán, đánh giá",
       "<code>cay.predict(X_test)</code> · <code>accuracy_score</code>"
      ]
     ]
    },
    {
     "t": "anh",
     "cap": "Lớp DecisionTreeClassifier trong scikit-learn",
     "alt": "Lớp DecisionTreeClassifier trong scikit-learn",
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250509140530196329/Decision-Tree-Classifier.png",
     "du_phong": "img/minh-hoa-doi-tuong-decisiontreeclassifier.png",
     "nguon": {
      "ten": "GeeksforGeeks — Building and implementing decision tree classifiers with scikit learn a comprehensive guide",
      "url": "https://www.geeksforgeeks.org/machine-learning/building-and-implementing-decision-tree-classifiers-with-scikit-learn-a-comprehensive-guide/"
     },
     "chu_giai": [
      [
       "DecisionTreeClassifier(random_state=1)",
       "Tạo cây phân loại, cố định cách chọn ngẫu nhiên để chạy lại ra như cũ"
      ]
     ]
    },
    {
     "t": "bang",
     "cot": [
      "Ưu điểm",
      "Hạn chế"
     ],
     "dong": [
      [
       "Đọc được luật bằng lời",
       "Sâu quá thì học vẹt"
      ],
      [
       "Không cần đưa về cùng thang đo",
       "Đổi vài dòng dữ liệu, cây có thể đổi hẳn"
      ],
      [
       "Dùng được cả cột chữ đã mã hoá",
       "Ranh giới luôn là bậc thang vuông góc"
      ]
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "so với các model trước (tập kiểm tra)",
     "de": null,
     "cot": [
      "Model",
      "Độ chính xác"
     ],
     "dong": [
      [
       "Model lười",
       "54.2%"
      ],
      [
       "Cây sâu 2",
       "91.7%"
      ],
      [
       "Logistic 2 cột (Bài 16)",
       "91.7%"
      ],
      [
       "KNN K = 9 (Bài 13)",
       "95.8%"
      ]
     ],
     "ket_luan": "Cây không đúng nhất — nhưng là model duy nhất nói ra được luật.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Đưa cột về 0 – 1 trước khi dùng cây — không cần, cây chỉ so ≤ với một ngưỡng.",
      "Quên đặt max_depth nên cây mọc tới khi học thuộc."
     ]
    },
    {
     "t": "tom_tat",
     "html": "DecisionTreeClassifier(max_depth=...) → fit → plot_tree / export_text → predict."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai18-q9",
     "q": "Tham số nào giới hạn số tầng câu hỏi của cây?",
     "giai": "max_depth = độ sâu tối đa.",
     "goi_y": "depth nghĩa là độ sâu.",
     "a": [
      "max_depth",
      "n_neighbors",
      "test_size",
      "random_state"
     ],
     "h": "10f096bc7dd4a2"
    },
    {
     "k": "ds",
     "id": "bai18-q10",
     "q": "Cây quyết định bắt buộc phải đưa các cột về cùng thang đo.",
     "giai": "Cây chỉ so một cột với một ngưỡng mỗi lần.",
     "goi_y": "Câu hỏi của cây có cộng hai cột với nhau không?",
     "h": "75713a8f9ca63"
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
    "id": "bai18-q11",
    "q": "Nhìn hình. Trong cây đoán khách mua hàng, câu hỏi ở nút gốc là gì?",
    "giai": "Nút gốc ở trên cùng.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250408153824016146/predicting_whether_a_customer_will_buy_a_product.webp",
     "du_phong": "img/minh-hoa-cay-quyet-dinh-du-doan-khach-co-mua-hang.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     }
    },
    "a": [
     "Thu nhập trên 50 000?",
     "Trên 30 tuổi?",
     "Đã từng mua hàng?",
     "Có mua hàng không?"
    ],
    "h": "19df25525a9746"
   },
   {
    "k": "mc",
    "id": "bai18-q12",
    "q": "Nhìn hình. Câu hỏi nào để lại độ lẫn lộn nhiều nhất?",
    "giai": "Độ lẫn lộn 0.462.",
    "img": {
     "src": "img/cau-hoi-nao-chia-gon-nhat.png"
    },
    "a": [
     "Dùng mạng trên 250 phút?",
     "Học trên 3.45 giờ?",
     "Học trên 1.5 giờ?",
     "Ba câu như nhau"
    ],
    "h": "19cb558daf21f3"
   },
   {
    "k": "mc",
    "id": "bai18-q13",
    "q": "Nhìn hình. Ở độ sâu nào đường test bắt đầu tụt?",
    "giai": "Test 91.7% ở sâu 4, 87.5% ở sâu 5.",
    "img": {
     "src": "img/do-chinh-xac-theo-do-sau.png"
    },
    "a": [
     "Từ độ sâu 5",
     "Từ độ sâu 1",
     "Từ độ sâu 2",
     "Không bao giờ tụt"
    ],
    "h": "ff970cc708620"
   },
   {
    "k": "mc",
    "id": "bai18-q14",
    "q": "Nhìn hình. Luật nào dẫn tới kết luận ĐẠT?",
    "giai": "Chỉ một đường dẫn tới ĐẠT.",
    "img": {
     "src": "img/luat-doc-thanh-cau-tieng-viet.png"
    },
    "a": [
     "Học > 3.45 giờ và mạng ≤ 317.5 phút",
     "Học ≤ 3.45 giờ",
     "Học > 3.45 giờ và mạng > 317.5 phút",
     "Mạng ≤ 317.5 phút"
    ],
    "h": "a066c80c95fbd"
   },
   {
    "k": "mc",
    "id": "bai18-q15",
    "q": "Nhìn hình. Vì sao cột Y là câu hỏi tốt?",
    "giai": "Nhánh thuần → không còn lẫn lộn.",
    "img": {
     "src": "https://media.geeksforgeeks.org/wp-content/uploads/20250804112900346223/444.webp",
     "du_phong": "img/minh-hoa-chia-theo-cot-y-cho-hai-nhanh-thuan.png",
     "nguon": {
      "ten": "GeeksforGeeks — Decision tree introduction example",
      "url": "https://www.geeksforgeeks.org/machine-learning/decision-tree-introduction-example/"
     }
    },
    "a": [
     "Hai nhánh đều chỉ còn một nhãn",
     "Cột Y có nhiều giá trị nhất",
     "Cột Y nằm ở bên trái hình",
     "Hai nhánh có số mẫu lệch"
    ],
    "h": "1f2da094b3ae12"
   },
   {
    "k": "mc",
    "id": "bai18-q16",
    "q": "Cây đoán cho vay dùng câu hỏi “thu nhập ≤ 10 triệu?”. Nhánh bên trái thường ứng với câu trả lời nào?",
    "giai": "scikit-learn vẽ nhánh “≤ đúng” sang trái.",
    "a": [
     "Có (≤ 10 triệu)",
     "Không (> 10 triệu)",
     "Không xác định",
     "Cả hai câu trả lời"
    ],
    "h": "1936f60027e2a6"
   },
   {
    "k": "mc",
    "id": "bai18-q17",
    "q": "Một cây có 60 lá cho bộ dữ liệu 70 dòng. Rủi ro lớn nhất là gì?",
    "giai": "Gần mỗi dòng một lá → học vẹt.",
    "a": [
     "Cây gần như học thuộc từng dòng",
     "Cây quá đơn giản, chưa khớp",
     "Cây không dự đoán được",
     "Cây cần đưa về 0 – 1"
    ],
    "h": "18d2eb0e4ffa4f"
   },
   {
    "k": "mc",
    "id": "bai18-q18",
    "q": "Vì sao cây quyết định không cần MinMaxScaler?",
    "giai": "Không đo khoảng cách giữa các cột.",
    "a": [
     "Mỗi câu hỏi chỉ so một cột với ngưỡng",
     "Vì cây tự đổi mọi cột về 0 – 1",
     "Vì cây chỉ dùng cột chữ",
     "Vì cây không cần dữ liệu huấn luyện"
    ],
    "h": "b0a39904e9ebc"
   },
   {
    "k": "mc",
    "id": "bai18-q19",
    "q": "Cây sâu 2 của lớp đúng bao nhiêu trên tập kiểm tra?",
    "giai": "Bằng logistic hai cột.",
    "a": [
     "91.7%",
     "54.2%",
     "87.5%",
     "100%"
    ],
    "h": "3920c684701ce"
   },
   {
    "k": "ma",
    "id": "bai18-q20",
    "q": "Những phần nào có trong một cây quyết định? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gốc, nút, nhánh, lá.",
    "a": [
     "Nút gốc",
     "Lá",
     "Tâm cụm",
     "Hệ số chặn"
    ],
    "h": "85a460452194b"
   },
   {
    "k": "ma",
    "id": "bai18-q21",
    "q": "Dấu hiệu nào cho thấy cây đang học vẹt? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Sâu, nhiều lá, train hoàn hảo.",
    "a": [
     "Đúng 100% trên tập huấn luyện",
     "Có rất nhiều lá",
     "Test cao hơn train",
     "Chỉ có một câu hỏi"
    ],
    "h": "28e0b4a68d13"
   },
   {
    "k": "ma",
    "id": "bai18-q22",
    "q": "Những ưu điểm nào đúng với cây quyết định? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dễ giải thích, dễ dùng.",
    "a": [
     "Đọc được luật bằng lời",
     "Không cần cùng thang đo",
     "Không bao giờ học vẹt",
     "Luôn đúng nhất trong mọi model"
    ],
    "h": "19d21d49831a33"
   },
   {
    "k": "ma",
    "id": "bai18-q23",
    "q": "Cây chọn câu hỏi ở mỗi nút theo tiêu chí nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gini / entropy.",
    "a": [
     "Làm độ lẫn lộn còn lại nhỏ nhất",
     "Tách hai nhãn gọn nhất",
     "Chọn cột có tên ngắn nhất",
     "Chọn ngẫu nhiên một cột"
    ],
    "h": "16c030b3818315"
   },
   {
    "k": "sx",
    "id": "bai18-q24",
    "q": "Sắp xếp các bước dùng cây trong scikit-learn.",
    "giai": "Chia → tạo → fit → đọc → đo.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Tạo DecisionTreeClassifier với max_depth",
     "Fit trên tập huấn luyện",
     "Vẽ cây, đọc luật",
     "Đo trên tập kiểm tra"
    ],
    "h": "5bb53510286c3"
   },
   {
    "k": "sx",
    "id": "bai18-q25",
    "q": "Sắp xếp các bước cây chọn câu hỏi ở một nút.",
    "giai": "Thử hết → đo → chọn → chia.",
    "a": [
     "Liệt kê các câu hỏi có thể",
     "Tính độ lẫn lộn sau mỗi câu",
     "Chọn câu có độ lẫn lộn nhỏ nhất",
     "Chia nhóm theo câu đó"
    ],
    "h": "f3b8fbb032abe"
   },
   {
    "k": "dd",
    "id": "bai18-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Gốc trên, lá dưới.",
    "mau": "Câu hỏi đầu tiên nằm ở {0}; kết luận nằm ở {1}.",
    "o": [
     [
      "nút gốc",
      "lá",
      "nhánh",
      "tâm cụm"
     ],
     [
      "lá",
      "nút gốc",
      "nhánh",
      "ngưỡng"
     ]
    ],
    "h": "10e25062c83ba0"
   },
   {
    "k": "dd",
    "id": "bai18-q27",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Học vẹt: nhiều lá, test thấp.",
    "mau": "Cây không giới hạn có {0} lá và đúng {1} trên tập kiểm tra.",
    "o": [
     [
      "18",
      "4",
      "2",
      "100"
     ],
     [
      "87.5%",
      "100.0%",
      "91.7%",
      "54.2%"
     ]
    ],
    "h": "1d91f961e7c125"
   },
   {
    "k": "dd",
    "id": "bai18-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "plot = vẽ; text = chữ.",
    "mau": "Lệnh {0} vẽ cây; lệnh {1} in luật ra chữ.",
    "o": [
     [
      "plot_tree",
      "export_text",
      "fit",
      "predict"
     ],
     [
      "export_text",
      "plot_tree",
      "fit",
      "score"
     ]
    ],
    "h": "1daf19901ea34d"
   },
   {
    "k": "dd",
    "id": "bai18-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc từ cây sâu 2.",
    "mau": "Câu hỏi đầu tiên của cây là học ≤ {0} giờ; câu hỏi tầng hai bên phải là mạng ≤ {1} phút.",
    "o": [
     [
      "3.45",
      "1.50",
      "5.00",
      "2.35"
     ],
     [
      "317.5",
      "250.0",
      "150.0",
      "450.0"
     ]
    ],
    "h": "d8110945d3808"
   },
   {
    "k": "ds",
    "id": "bai18-q30",
    "q": "Cây quyết định chỉ dùng được cho bài toán phân loại.",
    "giai": "Còn có cây hồi quy — dự đoán con số theo bậc thang.",
    "h": "100f08e369bd7a"
   },
   {
    "k": "ds",
    "id": "bai18-q31",
    "q": "Mỗi đường từ gốc tới lá là một luật NẾU… THÌ….",
    "giai": "Đọc được bằng lời.",
    "h": "c2970dceaccd9"
   },
   {
    "k": "ds",
    "id": "bai18-q32",
    "q": "Cây càng sâu thì càng đúng trên dữ liệu mới.",
    "giai": "Sâu quá thì học vẹt.",
    "h": "1a97897a8dc6bb"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
