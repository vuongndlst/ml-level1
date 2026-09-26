window.BAI = {
 "bai": 17,
 "ma": "bai17",
 "nhan": "Bài 17",
 "tieu_de": "Cây quyết định",
 "phan": "Phần B · Học có giám sát",
 "cau_hoi": "Model có nói cho ta biết vì sao nó quyết định như vậy không?",
 "gioi_thieu": [
  "KNN, hồi quy tuyến tính, hồi quy logistic đều khó trả lời câu hỏi <b>“vì sao?”</b>. Hôm nay con gặp model đọc được luật ra thành câu tiếng Việt: <b>cây quyết định</b>.",
  "Năm chặng: cây quyết định là gì, chọn câu hỏi tốt nhất, đọc cây của lớp mình, độ sâu và học vẹt, và dùng cây trong scikit-learn. Bảng khối 10 là bảng mô phỏng.",
  "Con dùng lại: quy trình 5 bước và mốc model lười (Bài 11), học vẹt (Bài 11, 12), ma trận nhầm lẫn (Bài 15)."
 ],
 "thoi_gian": "≈ 22 phút",
 "muoi": "LSTS-ML1-WEB|bai17",
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
       "Income > 50,000?",
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
       "Nền tảng của Random Forest (Bài 21)"
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
     "id": "bai17-q1",
     "q": "Trong cây quyết định, phần nào đưa ra kết luận cuối cùng?",
     "giai": "Lá không hỏi nữa, chỉ kết luận.",
     "goi_y": "Phần nào nằm cuối cùng, không có nhánh con?",
     "a": [
      "Lá",
      "Nút gốc",
      "Nhánh",
      "Nút quyết định"
     ],
     "h": "1b18bc9d2ca4af"
    },
    {
     "k": "sx",
     "id": "bai17-q2",
     "q": "Sắp xếp đường đi của một mẫu qua cây.",
     "giai": "Gốc → nhánh → nút → lá.",
     "goi_y": "Mẫu mới bắt đầu từ đâu của cây?",
     "a": [
      "Trả lời câu hỏi ở nút gốc",
      "Đi theo nhánh ứng với câu trả lời",
      "Trả lời câu hỏi ở nút tiếp theo",
      "Tới lá và nhận kết luận"
     ],
     "h": "f8ab43b357b58"
    }
   ]
  },
  {
   "ten": "Chọn câu hỏi tốt nhất",
   "ten_ngan": "Câu hỏi tốt",
   "phut": 5,
   "muc_tieu": "giải thích được cây chọn câu hỏi làm các nhóm gọn nhất.",
   "khoi_dong": "Học trên 1,5 giờ? Học trên 3,45 giờ? Mạng trên 250 phút? Câu nào chia lớp gọn nhất?",
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
     "html": "Đo một nhóm còn trộn hai nhãn tới đâu: <b>0</b> = cả nhóm cùng một nhãn (thuần); <b>0,5</b> = nửa này nửa kia (lẫn nhất, với hai nhãn).",
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
       "Học trên 1,5 giờ?",
       "0,392"
      ],
      [
       "Học trên 3,45 giờ?",
       "<b>0,161</b>"
      ],
      [
       "Dùng mạng trên 250 phút?",
       "0,462"
      ]
     ],
     "ket_luan": "Trước khi chia: 0,497. Câu “học trên 3,45 giờ” giảm mạnh nhất nên thành câu hỏi đầu tiên.",
     "nhan_manh": [
      1
     ]
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
     "id": "bai17-q3",
     "q": "Theo bảng, câu hỏi nào được cây chọn làm câu hỏi đầu tiên?",
     "giai": "Độ lẫn lộn còn lại nhỏ nhất: 0,161.",
     "goi_y": "Tìm dòng có độ lẫn lộn còn lại nhỏ nhất.",
     "a": [
      "Học trên 3,45 giờ?",
      "Học trên 1,5 giờ?",
      "Dùng mạng trên 250 phút?",
      "Ngủ trên 7 giờ?"
     ],
     "h": "160470d2dd3c53"
    },
    {
     "k": "dd",
     "id": "bai17-q4",
     "q": "Chọn số đúng cho mỗi chỗ trống.",
     "giai": "Gini đo độ lẫn lộn.",
     "goi_y": "Nhóm toàn Đạt thì còn lẫn lộn không?",
     "mau": "Với hai nhãn, nhóm thuần có Gini = {0}; nhóm nửa này nửa kia có Gini = {1}.",
     "o": [
      [
       "0",
       "0,5",
       "1",
       "100"
      ],
      [
       "0,5",
       "0",
       "1",
       "2"
      ]
     ],
     "h": "1e26fdc6e5e8a3"
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
     "cap": "Cây sâu 1: chỉ một câu hỏi, đúng 91,7% trên tập kiểm tra",
     "alt": "Cây sâu 1: chỉ một câu hỏi, đúng 91,7% trên tập kiểm tra",
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
       "nhan": "Bạn Hà (2,8 giờ, 90 phút)",
       "dong": [
        [
         "1",
         "Giờ tự học ≤ 3,45?",
         "2,8 → Có — rẽ trái",
         "—"
        ],
        [
         "2",
         "Giờ tự học ≤ 2,35?",
         "2,8 → Không — rẽ phải",
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
       "nhan": "Bạn Minh (4,5 giờ, 120 phút)",
       "dong": [
        [
         "1",
         "Giờ tự học ≤ 3,45?",
         "4,5 → Không — rẽ phải",
         "—"
        ],
        [
         "2",
         "Phút mạng ≤ 317,5?",
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
       "nhan": "Bạn Khoa (5,2 giờ, 380 phút)",
       "dong": [
        [
         "1",
         "Giờ tự học ≤ 3,45?",
         "5,2 → Không — rẽ phải",
         "—"
        ],
        [
         "2",
         "Phút mạng ≤ 317,5?",
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
     "html": "NẾU học > 3,45 giờ VÀ mạng > 317,5 phút THÌ Chưa đạt — học nhiều mà lướt mạng quá nhiều vẫn có nguy cơ. KNN hay logistic không nói ra được câu như vậy."
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
     "id": "bai17-q5",
     "q": "Theo phần Tự thử, cây đoán Bạn Khoa thế nào?",
     "giai": "Học nhiều nhưng mạng 380 phút > 317,5.",
     "goi_y": "Chọn bạn đó và bấm tới lá.",
     "a": [
      "Chưa đạt",
      "Đạt",
      "Không đoán được",
      "Cần hỏi thêm giờ ngủ"
     ],
     "h": "d76442560a870"
    },
    {
     "k": "ds",
     "id": "bai17-q6",
     "q": "Cây sâu 2 của lớp đoán mọi bạn học không quá 3,45 giờ là Chưa đạt.",
     "giai": "Cả hai lá bên trái đều Chưa đạt.",
     "goi_y": "Nhìn nhánh trái của nút gốc.",
     "h": "1b5aadfaac06f0"
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
     "t": "demo_truot",
     "tieu_de": "thử các độ sâu",
     "huong_dan": "Kéo thanh trượt để đổi độ sâu tối đa của cây. So độ chính xác trên dữ liệu đã học và trên tập kiểm tra.",
     "dieu_kien": "Cây sâu tối đa <b>{x}</b> tầng",
     "moc": [
      {
       "x": 1,
       "n": "91,1% · 2 lá",
       "p": 91.7
      },
      {
       "x": 2,
       "n": "92,3% · 4 lá",
       "p": 91.7
      },
      {
       "x": 3,
       "n": "92,9% · 7 lá",
       "p": 91.7
      },
      {
       "x": 4,
       "n": "94,6% · 10 lá",
       "p": 91.7
      },
      {
       "x": 5,
       "n": "96,4% · 12 lá",
       "p": 87.5
      },
      {
       "x": 6,
       "n": "97,6% · 14 lá",
       "p": 88.9
      },
      {
       "x": 8,
       "n": "100,0% · 18 lá",
       "p": 87.5
      }
     ],
     "nhan_n": "Trên tập huấn luyện · số lá",
     "nhan_p": "Trên tập kiểm tra",
     "so_le_x": 0,
     "bat_dau": 1
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
       "91,1%",
       "91,7%"
      ],
      [
       "4",
       "10",
       "94,6%",
       "91,7%"
      ],
      [
       "8",
       "18",
       "100,0%",
       "87,5%"
      ]
     ],
     "ket_luan": "Không giới hạn: đúng 100,0% trên dữ liệu đã học nhưng chỉ 87,5% trên tập kiểm tra — học vẹt.",
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
     "id": "bai17-q7",
     "q": "Cây không giới hạn độ sâu có bao nhiêu lá?",
     "giai": "Mỗi lá gần như chỉ để nhớ vài bạn.",
     "goi_y": "Kéo thanh trượt tới độ sâu lớn nhất.",
     "a": [
      "18",
      "4",
      "10",
      "100"
     ],
     "h": "10d3b7d80a0142"
    },
    {
     "k": "ma",
     "id": "bai17-q8",
     "q": "Khi cây sâu thêm từ 4 lên 8 tầng, hai điều nào xảy ra? <b>(Chọn 2 đáp án đúng.)</b>",
     "giai": "Dấu hiệu học vẹt.",
     "goi_y": "So hai ô kết quả khi kéo từ 4 lên 8.",
     "a": [
      "Đúng hơn trên tập huấn luyện",
      "Kém đi trên tập kiểm tra",
      "Đúng hơn trên tập kiểm tra",
      "Ít lá hơn"
     ],
     "h": "b5038bcc2532e"
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
       "54,2%"
      ],
      [
       "Cây sâu 2",
       "91,7%"
      ],
      [
       "Logistic 2 cột (Bài 15)",
       "91,7%"
      ],
      [
       "KNN K = 9 (Bài 12)",
       "95,8%"
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
     "id": "bai17-q9",
     "q": "Tham số nào giới hạn số tầng câu hỏi của cây?",
     "giai": "max_depth = độ sâu tối đa.",
     "goi_y": "depth nghĩa là độ sâu.",
     "a": [
      "max_depth",
      "n_neighbors",
      "test_size",
      "random_state"
     ],
     "h": "64b58e5af6d90"
    },
    {
     "k": "ds",
     "id": "bai17-q10",
     "q": "Cây quyết định bắt buộc phải đưa các cột về cùng thang đo.",
     "giai": "Cây chỉ so một cột với một ngưỡng mỗi lần.",
     "goi_y": "Câu hỏi của cây có cộng hai cột với nhau không?",
     "h": "131dfde73ee38a"
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
    "id": "bai17-q11",
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
    "h": "8c1d03aab9e73"
   },
   {
    "k": "mc",
    "id": "bai17-q12",
    "q": "Nhìn hình. Câu hỏi nào để lại độ lẫn lộn nhiều nhất?",
    "giai": "Độ lẫn lộn 0,462.",
    "img": {
     "src": "img/cau-hoi-nao-chia-gon-nhat.png"
    },
    "a": [
     "Dùng mạng trên 250 phút?",
     "Học trên 3,45 giờ?",
     "Học trên 1,5 giờ?",
     "Ba câu như nhau"
    ],
    "h": "6ac5d85663cf4"
   },
   {
    "k": "mc",
    "id": "bai17-q13",
    "q": "Nhìn hình. Ở độ sâu nào đường test bắt đầu tụt?",
    "giai": "Test 91,7% ở sâu 4, 87,5% ở sâu 5.",
    "img": {
     "src": "img/do-chinh-xac-theo-do-sau.png"
    },
    "a": [
     "Từ độ sâu 5",
     "Từ độ sâu 1",
     "Từ độ sâu 2",
     "Không bao giờ tụt"
    ],
    "h": "50b46771cb39a"
   },
   {
    "k": "mc",
    "id": "bai17-q14",
    "q": "Nhìn hình. Luật nào dẫn tới kết luận ĐẠT?",
    "giai": "Chỉ một đường dẫn tới ĐẠT.",
    "img": {
     "src": "img/luat-doc-thanh-cau-tieng-viet.png"
    },
    "a": [
     "Học > 3,45 giờ và mạng ≤ 317,5 phút",
     "Học ≤ 3,45 giờ",
     "Học > 3,45 giờ và mạng > 317,5 phút",
     "Mạng ≤ 317,5 phút"
    ],
    "h": "179861e906561a"
   },
   {
    "k": "mc",
    "id": "bai17-q15",
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
    "h": "d88297c30627"
   },
   {
    "k": "mc",
    "id": "bai17-q16",
    "q": "Cây đoán cho vay dùng câu hỏi “thu nhập ≤ 10 triệu?”. Nhánh bên trái thường ứng với câu trả lời nào?",
    "giai": "scikit-learn vẽ nhánh “≤ đúng” sang trái.",
    "a": [
     "Có (≤ 10 triệu)",
     "Không (> 10 triệu)",
     "Không xác định",
     "Cả hai câu trả lời"
    ],
    "h": "12ff1a4f9c819d"
   },
   {
    "k": "mc",
    "id": "bai17-q17",
    "q": "Một cây có 60 lá cho bộ dữ liệu 70 dòng. Rủi ro lớn nhất là gì?",
    "giai": "Gần mỗi dòng một lá → học vẹt.",
    "a": [
     "Cây gần như học thuộc từng dòng",
     "Cây quá đơn giản, chưa khớp",
     "Cây không dự đoán được",
     "Cây cần đưa về 0 – 1"
    ],
    "h": "109edb0bcd8ca7"
   },
   {
    "k": "mc",
    "id": "bai17-q18",
    "q": "Vì sao cây quyết định không cần MinMaxScaler?",
    "giai": "Không đo khoảng cách giữa các cột.",
    "a": [
     "Mỗi câu hỏi chỉ so một cột với ngưỡng",
     "Vì cây tự đổi mọi cột về 0 – 1",
     "Vì cây chỉ dùng cột chữ",
     "Vì cây không cần dữ liệu huấn luyện"
    ],
    "h": "130ec06bf822"
   },
   {
    "k": "mc",
    "id": "bai17-q19",
    "q": "Cây sâu 2 của lớp đúng bao nhiêu trên tập kiểm tra?",
    "giai": "Bằng logistic hai cột.",
    "a": [
     "91,7%",
     "54,2%",
     "87,5%",
     "100%"
    ],
    "h": "1403e1a1951503"
   },
   {
    "k": "ma",
    "id": "bai17-q20",
    "q": "Những phần nào có trong một cây quyết định? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gốc, nút, nhánh, lá.",
    "a": [
     "Nút gốc",
     "Lá",
     "Tâm cụm",
     "Hệ số chặn"
    ],
    "h": "13dfee8e42b827"
   },
   {
    "k": "ma",
    "id": "bai17-q21",
    "q": "Dấu hiệu nào cho thấy cây đang học vẹt? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Sâu, nhiều lá, train hoàn hảo.",
    "a": [
     "Đúng 100% trên tập huấn luyện",
     "Có rất nhiều lá",
     "Test cao hơn train",
     "Chỉ có một câu hỏi"
    ],
    "h": "74f773d56dae7"
   },
   {
    "k": "ma",
    "id": "bai17-q22",
    "q": "Những ưu điểm nào đúng với cây quyết định? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Dễ giải thích, dễ dùng.",
    "a": [
     "Đọc được luật bằng lời",
     "Không cần cùng thang đo",
     "Không bao giờ học vẹt",
     "Luôn đúng nhất trong mọi model"
    ],
    "h": "15de6e4b6995bc"
   },
   {
    "k": "ma",
    "id": "bai17-q23",
    "q": "Cây chọn câu hỏi ở mỗi nút theo tiêu chí nào? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gini / entropy.",
    "a": [
     "Làm độ lẫn lộn còn lại nhỏ nhất",
     "Tách hai nhãn gọn nhất",
     "Chọn cột có tên ngắn nhất",
     "Chọn ngẫu nhiên một cột"
    ],
    "h": "13af1c16a56999"
   },
   {
    "k": "sx",
    "id": "bai17-q24",
    "q": "Sắp xếp các bước dùng cây trong scikit-learn.",
    "giai": "Chia → tạo → fit → đọc → đo.",
    "a": [
     "Chia tập huấn luyện và kiểm tra",
     "Tạo DecisionTreeClassifier với max_depth",
     "Fit trên tập huấn luyện",
     "Vẽ cây, đọc luật",
     "Đo trên tập kiểm tra"
    ],
    "h": "113516c8eeed30"
   },
   {
    "k": "sx",
    "id": "bai17-q25",
    "q": "Sắp xếp các bước cây chọn câu hỏi ở một nút.",
    "giai": "Thử hết → đo → chọn → chia.",
    "a": [
     "Liệt kê các câu hỏi có thể",
     "Tính độ lẫn lộn sau mỗi câu",
     "Chọn câu có độ lẫn lộn nhỏ nhất",
     "Chia nhóm theo câu đó"
    ],
    "h": "17de380b7e2d"
   },
   {
    "k": "dd",
    "id": "bai17-q26",
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
    "h": "17201ac4239034"
   },
   {
    "k": "dd",
    "id": "bai17-q27",
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
      "87,5%",
      "100,0%",
      "91,7%",
      "54,2%"
     ]
    ],
    "h": "d5973802d54ee"
   },
   {
    "k": "dd",
    "id": "bai17-q28",
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
    "h": "1d3c436826cb45"
   },
   {
    "k": "dd",
    "id": "bai17-q29",
    "q": "Chọn đáp án đúng cho mỗi chỗ trống.",
    "giai": "Đọc từ cây sâu 2.",
    "mau": "Câu hỏi đầu tiên của cây là học ≤ {0} giờ; câu hỏi tầng hai bên phải là mạng ≤ {1} phút.",
    "o": [
     [
      "3,45",
      "1,50",
      "5,00",
      "2,35"
     ],
     [
      "317,5",
      "250,0",
      "150,0",
      "450,0"
     ]
    ],
    "h": "1ae99bebc3926e"
   },
   {
    "k": "ds",
    "id": "bai17-q30",
    "q": "Cây quyết định chỉ dùng được cho bài toán phân loại.",
    "giai": "Còn có cây hồi quy — dự đoán con số theo bậc thang.",
    "h": "16f3585d5ca221"
   },
   {
    "k": "ds",
    "id": "bai17-q31",
    "q": "Mỗi đường từ gốc tới lá là một luật NẾU… THÌ….",
    "giai": "Đọc được bằng lời.",
    "h": "17ba7c60471435"
   },
   {
    "k": "ds",
    "id": "bai17-q32",
    "q": "Cây càng sâu thì càng đúng trên dữ liệu mới.",
    "giai": "Sâu quá thì học vẹt.",
    "h": "15ab9af1a0d8c1"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Machine Learning Level 1. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
