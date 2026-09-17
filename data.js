// ══ BLOG POSTS ══
const BLOGS = [
  {
    id: "b1",
    tag: "Saigon Technology University",
    title: "My Profile",
    excerpt: "Những kỹ năng và kinh nghiệm của mình sau khi học code và những công nghệ cần thiết",
    date: "30 tháng 4 năm 2006",
    content: `
<h2>Profile</h2>
<p>Mình là Trường Chinh, sinh viên trường đại học Công Nghệ Sài Gòn (STU).
Hiện tại mình là sinh viên năm 3 ngành công nghệ thông tin và cũng là Top 1 giải học thuật "Coder tiềm năng 2026".</p>

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
<p>Trở thành kỹ sư blockchain trong tương lai.</p>
    `
  }
];

// ══ PROJECTS ══
const PROJECTS = [
  {
    id: "p1",
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
  {
    id: "p2",
    emoji: "⛓️",
    type: "cpp",
    typeLabel: "C++",
    name: "Mining Block C++",
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
      { label: "PyPI", url: "https://pypi.org", icon: "fab fa-python" },
      { label: "GitHub", url: "https://github.com/trgchinhh", icon: "fab fa-github" }
    ]
  },
  {
    id: "p4",
    emoji: "🌌",
    type: "web",
    typeLabel: "Web",
    name: "Interstella Open Source",
    desc: "Trang landing page giới thiệu các dự án mã nguồn mở của nhóm — thiết kế theo vibe không gian, tối giản.",
    tags: ["HTML", "CSS", "JavaScript", "Open Source"],
    longDesc: "Website showcase cho nhóm dự án mã nguồn mở Interstella. Được thiết kế với phong cách vũ trụ, tối giản, tập trung vào việc giới thiệu các project của nhóm một cách rõ ràng.",
    features: [
      "Landing page giới thiệu toàn bộ dự án nhóm",
      "Thiết kế theo chủ đề không gian vũ trụ",
      "Tối giản, tải nhanh — thuần HTML/CSS/JS",
      "Responsive trên mobile và desktop"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh", icon: "fab fa-github" }
    ]
  },
  {
    id: "p5",
    emoji: "📊",
    type: "bot",
    typeLabel: "Bot Telegram",
    name: "Bot TradingView Signals",
    desc: "Bot nhận webhook từ TradingView alert, phân tích tín hiệu và gửi thông báo vào Telegram group tự động.",
    tags: ["Python", "TradingView", "Webhook", "Telegram"],
    longDesc: "Bot tích hợp TradingView với Telegram qua webhook. Khi TradingView kích hoạt alert (dựa trên indicator), bot nhận tín hiệu, phân tích và format thành tin nhắn đẹp rồi gửi vào group/channel.",
    features: [
      "Nhận webhook từ TradingView Pine Script alert",
      "Parse và format tín hiệu mua/bán",
      "Gửi thông báo vào Telegram group hoặc channel",
      "Hỗ trợ nhiều loại tín hiệu (RSI, MACD, BB...)",
      "Log lịch sử tín hiệu"
    ],
    links: [
      { label: "Download", url: "https://github.com/trgchinhh/Share_Bot_Telegram/blob/main/share_bot_tradingview.py", icon: "fa-solid fa-download" }
    ]
  },
  {
    id: "p6",
    emoji: "💳",
    type: "bot",
    typeLabel: "Bot Telegram",
    name: "Bot QR Ngân Hàng",
    desc: "Tạo QR chuyển khoản chuẩn VietQR ngay trong Telegram — nhập STK, ngân hàng, số tiền, nhận QR tức thì.",
    tags: ["Python", "VietQR", "QR Code", "Telegram"],
    longDesc: "Bot tích hợp API VietQR để tạo mã QR chuyển khoản ngân hàng ngay trong Telegram. Người dùng nhập thông tin, bot trả về ảnh QR có thể scan bằng app ngân hàng bất kỳ.",
    features: [
      "Hỗ trợ 40+ ngân hàng Việt Nam",
      "Tạo QR chuẩn Napas/VietQR",
      "Điền sẵn số tiền và nội dung chuyển khoản",
      "Trả về ảnh QR độ phân giải cao"
    ],
    links: [
      { label: "Download", url: "https://github.com/trgchinhh/Share_Bot_Telegram/blob/main/share_bot_make_qrbank.py", icon: "fa-solid fa-download" }
    ]
  }
];
