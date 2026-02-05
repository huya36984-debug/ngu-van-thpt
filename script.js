const OPTION_CONFIG = {
  author: { label: "👤 Giới thiệu tác giả" },
  work:   { label: "📘 Giới thiệu tác phẩm" },
  video:  { label: "🎥 Video bài học" },
  practice:{ label: "📝 Câu hỏi ôn tập" }
};

/* ===== DATA MẪU (có thể mở rộng lớp 10–11–12) ===== */
const data = {

  10: {
    "Bài 1: Thần thoại và sử thi": [
      "Thần Trụ Trời",
      "Đăm Săn chiến thắng Mtao Mxây",
      "Hê-ra-clét đi tìm táo vàng"
    ],
    "Bài 2: Truyện ngắn": [
      "Chữ người tử tù",
      "Hai đứa trẻ",
      "Vợ nhặt"
    ],
    "Bài 3: Thơ trữ tình": [
      "Tỏ lòng",
      "Thu hứng",
      "Nhàn"
    ],
    "Bài 4: Văn bản nghị luận": [
      "Chiếu dời đô",
      "Hịch tướng sĩ",
      "Bình Ngô đại cáo"
    ],
    "Bài 5: Văn bản thông tin": [
      "Động Phong Nha",
      "Ca Huế trên sông Hương",
      "Ai đã đặt tên cho dòng sông"
    ],
    "Bài 6: Truyện thơ dân gian": [
      "Truyện Kiều (trích)",
      "Lục Vân Tiên cứu Kiều Nguyệt Nga",
      "Thạch Sanh"
    ],
    "Bài 7: Hài kịch": [
      "Ông Giuốc-đanh mặc lễ phục",
      "Trưởng giả học làm sang",
      "Quan thanh tra"
    ],
    "Bài 8: Văn bản thuyết minh": [
      "Một thứ quà của lúa non: Cốm",
      "Trang phục truyền thống của người Việt",
      "Nghệ thuật bài chòi"
    ],
    "Bài 9: Tổng kết văn học": [
      "Khái quát văn học dân gian Việt Nam",
      "Khái quát văn học trung đại Việt Nam",
      "Khái quát văn học hiện đại Việt Nam"
    ]
  },

  11: {
    "Bài 1: Truyện ngắn và tiểu thuyết": [
      "Chí Phèo",
      "Vợ chồng A Phủ",
      "Chiếc thuyền ngoài xa"
    ],
    "Bài 2: Thơ": [
      "Vội vàng",
      "Tràng giang",
      "Đây thôn Vĩ Dạ"
    ],
    "Bài 3: Văn bản nghị luận": [
      "Tinh thần yêu nước của nhân dân ta",
      "Đức tính giản dị của Bác Hồ",
      "Ý nghĩa văn chương"
    ],
    "Bài 4: Văn bản kí": [
      "Người lái đò sông Đà",
      "Ai đã đặt tên cho dòng sông",
      "Sông Đà"
    ],
    "Bài 5: Kịch": [
      "Hồn Trương Ba, da hàng thịt",
      "Vĩnh biệt Cửu Trùng Đài",
      "Quan thanh tra"
    ],
    "Bài 6: Văn bản thông tin": [
      "Thông tin về ngày Trái Đất",
      "Bảo vệ môi trường biển",
      "Biến đổi khí hậu"
    ],
    "Bài 7: Văn học nước ngoài": [
      "Số phận con người",
      "Ông già và biển cả",
      "Ruồi trâu"
    ],
    "Bài 8: Văn học và đời sống": [
      "Tuyên ngôn độc lập",
      "Nhật kí trong tù",
      "Những đứa con trong gia đình"
    ],
    "Bài 9: Tổng kết văn học": [
      "Giá trị nội dung văn học",
      "Giá trị nghệ thuật văn học",
      "Văn học và con người"
    ]
  },

  12: {
    "Bài 1: Khả năng lớn lao của tiểu thuyết": [
      "Xuân Tóc Đỏ cứu quốc",
      "Nỗi buồn chiến tranh"
    ],
    "Bài 2: Những thế giới thơ": [
      "Cảm hoài",
      "Tây Tiến",
      "Đàn ghi ta của Lor-ca"
    ],
    "Bài 3: Lập luận trong văn bản nghị luận": [
      "Nhìn về vốn văn hóa dân tộc",
      "Năng lực sáng tạo",
      "Mấy ý nghĩ về thơ"
    ],
    "Bài 4: Yếu tố kì ảo trong truyện kể": [
      "Hải khẩu linh từ",
      "Muối của rừng"
    ],
    "Bài 5: Tiếng cười của hài kịch": [
      "Nhân vật quan trọng",
      "Giấu của"
    ],
    "Bài 6: Hồ Chí Minh": [
      "Tác gia Hồ Chí Minh",
      "Tuyên ngôn Độc lập",
      "Mộ; Nguyên tiêu",
      "Những trò lố hay là Va-ren và Phan Bội Châu"
    ],
    "Bài 7: Sự thật trong tác phẩm kí": [
      "Nghệ thuật băm thịt gà",
      "Bước vào đời"
    ],
    "Bài 8: Dữ liệu trong văn bản thông tin": [
      "Pa-ra-na",
      "Giáo dục khai phóng ở Việt Nam",
      "Đời muối"
    ],
    "Bài 9: Văn học và cuộc đời": [
      "Vội vàng",
      "Trở về"
    ]
  }
};

/* ===== STORAGE ===== */
const savedLinks = JSON.parse(localStorage.getItem("links") || "{}");
const app = document.getElementById("app");

/* ===== TOGGLE – mở 1 mục thì đóng mục khác ===== */
function toggle(target) {
  const siblings = target.parentElement.querySelectorAll(".children");
  siblings.forEach(el => {
    if (el !== target) el.classList.remove("active");
  });
  target.classList.toggle("active");
}

/* ===== SAVE LINK ===== */
function save(key, opt, value) {
  if (!savedLinks[key]) savedLinks[key] = {};
  savedLinks[key][opt] = value;
  localStorage.setItem("links", JSON.stringify(savedLinks));
}

/* ===== RENDER ===== */
function render() {
  app.innerHTML = "";

  for (const grade in DATA) {
    const gradeBox = document.createElement("div");
    gradeBox.className = "card";
    gradeBox.innerHTML = `<h2>📖 Lớp ${grade}</h2>`;

    for (const lesson in DATA[grade]) {
      const lessonDiv = document.createElement("div");
      lessonDiv.className = "lesson";
      lessonDiv.textContent = lesson;

      const lessonChildren = document.createElement("div");
      lessonChildren.className = "children";
      lessonDiv.onclick = () => toggle(lessonChildren);

      const texts = DATA[grade][lesson].texts;

      for (const textName in texts) {
        const textDiv = document.createElement("div");
        textDiv.className = "text";
        textDiv.textContent = textName;

        const textChildren = document.createElement("div");
        textChildren.className = "children";
        textDiv.onclick = () => toggle(textChildren);

        const key = `${grade}-${lesson}-${textName}`;
        savedLinks[key] = savedLinks[key] || {};

        texts[textName].forEach(opt => {
          const row = document.createElement("div");
          row.className = "option";

          if (MODE === "teacher") {
            row.innerHTML = `
              <input type="checkbox" checked>
              <span>${OPTION_CONFIG[opt].label}</span>
              <input type="text" placeholder="Nhập link..."
                value="${savedLinks[key][opt] || ""}"
                onchange="save('${key}','${opt}',this.value)">
            `;
          } else {
            const link = savedLinks[key][opt] || "#";
            row.innerHTML = `<a href="${link}" target="_blank">${OPTION_CONFIG[opt].label}</a>`;
          }

          textChildren.appendChild(row);
        });

        lessonChildren.appendChild(textDiv);
        lessonChildren.appendChild(textChildren);
      }

      gradeBox.appendChild(lessonDiv);
      gradeBox.appendChild(lessonChildren);
    }

    app.appendChild(gradeBox);
  }
}

render();
