// ══ BLOG POSTS ══
const BLOGS = [
  {
    id: "b1",
    tag: "Saigon Technology University",
    title: "My Profile",
    excerpt: "Những kỹ năng và kinh nghiệm của mình sau khi học code và những công nghệ cần thiết",
    date: "30 tháng 4 năm 2006",
    content: `
<h2>Giới thiệu</h2>
<p>Mình là Trường Chinh, sinh viên năm 3 trường Đại học Công nghệ Sài Gòn (STU).
Hiện tại mình là Top 1 giải học thuật "Coder tiềm năng 2026". Mình thích thiết kế và xây dựng phần mềm mã nguồn mở, 
đặc biệt quan tâm đến công nghệ blockchain, thuật toán mật mã và các tiêu chuẩn an ninh mạng như NIST. 
Bên cạnh đó mình còn thích làm việc với các ứng dụng cấp thấp, dựa trên giao diện dòng lệnh và lập trình hệ thống.</p>

<h2>Kỹ năng</h2>
<ul>
  <li><strong>Ngôn ngữ lập trình: </strong>C++ / Python / C# cơ bản</li>
  <li><strong>Công nghệ: </strong>Git / GitHub</li>
  <li><strong>Web: </strong>HTML / CSS / JavaScript cơ bản</li>
  <li><strong>Linux: </strong>Ubuntu</li>    
  <li><strong>Khác: </strong>Lua / BatchScript cơ bản</li>
</ul>

<h2>Kinh nghiệm</h2>
<ul>
  <li>Tạo module và build library bằng Python</li>
  <li>Tạo bot Telegram lấy thông tin bằng API hoặc bot game</li>
  <li>Mô phỏng Sicbo game CLI (custom TUI) bằng C++</li>
  <li>Mô phỏng blockchain và cách validators (P2P) vận hành</li>
  <li>Viết mô phỏng CLI cho các thuật toán thực tế</li>
</ul>

<h2>Mục tiêu</h2>
<p>Trở thành kỹ sư Web3/Blockchain trong tương lai.</p>
    `
  }
];

// ══ PROJECTS ══
const PROJECTS = [
  {
    id: "p1",
    emoji: "🏥",
    type: "lib",
    typeLabel: "Thư viện",
    name: "C-Healthy",
    desc: "Thư viện mã nguồn mở tính toán chỉ số sức khỏe — BMI, TDEE, IBW. Có bản Python (PyPI) và C++.",
    tags: ["Python", "C++", "PyPI", "Open Source", "Health"],
    longDesc: "C-Healthy là thư viện mã nguồn mở cung cấp các hàm tính toán chỉ số sức khỏe phổ biến. Được viết song song bằng Python và C++ để phục vụ nhiều nhu cầu. Thư viện Python đã được publish lên PyPI.",
    features: [
      "Tính BMI (Body Mass Index) với phân loại WHO",
      "Tính TDEE (Total Daily Energy Expenditure)",
      "Tính IBW (Ideal Body Weight) theo nhiều công thức",
      "API đơn giản, dễ tích hợp",
      "Có đủ bản Python và C++",
      "Đã publish lên PyPI — pip install được"
    ],
    links: [
      { label: "PyPI", url: "https://pypi.org/project/C-healthy/0.3.0/", icon: "fab fa-python" },
      { label: "GitHub", url: "https://github.com/trgchinhh", icon: "fab fa-github" }
    ]
  },
  {
    id: "p2",
    emoji: "⛓️",
    type: "cpp",
    typeLabel: "C++",
    name: "Block Miner C++",
    desc: "Blockchain demo viết thuần C++ — Proof-of-Work, ký số RSA, kết nối P2P qua TCP socket và smart contract thử nghiệm.",
    tags: ["C++", "OpenSSL", "TCP Socket", "PoW", "RSA"],
    longDesc: "Project blockchain demo từ đầu bằng C++, không dùng framework. Implement đầy đủ các khái niệm cốt lõi: SHA-256 mining, RSA signing cho transaction, P2P network qua socket, và thử nghiệm smart contract đơn giản.",
    features: [
      "Proof-of-Work mining với difficulty điều chỉnh được",
      "Ký số RSA cho mỗi transaction qua OpenSSL",
      "P2P node kết nối qua TCP socket thuần",
      "Broadcast block mới đến toàn bộ mạng",
      "Smart contract đơn giản (experimental)",
      "Validation chain toàn vẹn"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/chinhcoder", icon: "fab fa-github" }
    ]
  },
  {
    id: "p3",
    emoji: "🎲",
    type: "game",
    typeLabel: "Casino Game C++",
    name: "Casino Game C++",
    desc: "Tổng hợp 25 minigame cá cược thuần C++ chơi trên môi trường dòng lệnh",
    tags: ["C++", "Mingw64", "Open Source"],
    longDesc: "Casino Game C++ là một dự án game cá cược tập hợp gồm nhiều minigame bên trong, vận hành hoàn toàn trên môi trường dòng lệnh (custom TUI), được phát triển bằng ngôn ngữ C++ (C++14+). dự án mang đến trải nghiệm đồ họa ASCII trực quan, hệ thống âm thanh sống động, cơ chế bảo mật mã hóa nâng cao và tích hợp mô hình AI dự đoán kết quả ngay trong Terminal.",
    features: [
      "Bot phân tích tín hiệu TradingView qua webhook",
      "Bot mô phỏng blockchain với PoW cơ bản",
      "Bot dịch thuật (bản thường và bản pro)",
      "Bot tạo QR ngân hàng chuẩn VietQR",
      "Bot lấy thông tin thời tiết theo thành phố",
      "Bot hash dữ liệu (MD5, SHA256...)",
      "Bot tính chỉ số BMI và sức khỏe",
      "Bot mô phỏng hoạt động ngân hàng đơn giản"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/Share_Bot_Telegram", icon: "fab fa-github" },
      { label: "Xem demo", url: "bot-list.html", icon: "fa-solid fa-list" }
    ]
  },
  {
    id: "p4",
    emoji: "🔗",
    type: "bot",
    typeLabel: "Bot Telegram",
    name: "Share Bot Telegram",
    desc: "Bộ sưu tập 15+ bot Telegram mã nguồn mở — từ dịch thuật, thời tiết, hash dữ liệu đến mô phỏng blockchain và QR ngân hàng.",
    tags: ["Python", "Telegram API", "Open Source"],
    longDesc: "Tập hợp các bot Telegram được viết bằng Python, sử dụng thư viện python-telegram-bot. Mỗi bot giải quyết một bài toán thực tế cụ thể. Một số API phụ thuộc có thể đã ngừng hoạt động — code vẫn có giá trị tham khảo.",
    features: [
      "Bot phân tích tín hiệu TradingView qua webhook",
      "Bot mô phỏng blockchain với PoW cơ bản",
      "Bot dịch thuật (bản thường và bản pro)",
      "Bot tạo QR ngân hàng chuẩn VietQR",
      "Bot lấy thông tin thời tiết theo thành phố",
      "Bot hash dữ liệu (MD5, SHA256...)",
      "Bot tính chỉ số BMI và sức khỏe",
      "Bot mô phỏng hoạt động ngân hàng đơn giản"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/Share_Bot_Telegram", icon: "fab fa-github" },
      { label: "Xem demo", url: "bot-list.html", icon: "fa-solid fa-list" }
    ]
  },
];
