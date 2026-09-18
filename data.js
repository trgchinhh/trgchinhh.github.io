const ACHIEVEMENTS = [
  {
    id: "a1",
    title: 'Top 1 giải học thuật "Coder tiềm năng 2026"',
    cert: "img/giaychungnhan.png",
    reward: "img/phanthuong.png"
  },
  // thêm giải mới
];

// ══ BLOG POSTS ══
const INFO = [
  {
    id: "b1",
    tag: "Saigon Technology University",
    title: "PROFILE",
    excerpt: "Những kỹ năng và kinh nghiệm của mình sau khi học code và những công nghệ cần thiết",
    date: "30 tháng 4 năm 2006",
    content: `
<h2>Giới thiệu</h2>
<p>Mình là Trường Chinh, sinh viên năm 3 trường Đại học Công nghệ Sài Gòn (STU)</p>

<h2>Thành tích</h2>
<div id="achievementList"></div>

<h2>Sở thích</h2>
<p>Mình thích thiết kế và xây dựng phần mềm mã nguồn mở, 
đặc biệt quan tâm đến công nghệ blockchain, thuật toán mật mã và các tiêu chuẩn an ninh mạng như NIST. 
Bên cạnh đó mình còn thích làm việc với các ứng dụng cấp thấp, dựa trên giao diện dòng lệnh và lập trình hệ thống
</p>

<h2>Mục tiêu</h2>
<p>Trở thành kỹ sư backend Web3/Blockchain trong tương lai</p>

<h2>Kỹ năng</h2>
<ul>
  <li><strong>Ngôn ngữ lập trình: </strong>C++ / Python / C# / Java cơ bản</li>
  <li><strong>Công nghệ: </strong>Git / Github</li>
  <li><strong>Web: </strong>HTML / CSS / JavaScript cơ bản</li>
  <li><strong>Framework: </strong>Express cơ bản</li>
  <li><strong>Linux: </strong>Ubuntu / WSL</li>    
  <li><strong>Khác: </strong>SSH / BatchScript cơ bản</li>
</ul>

<h2>Kinh nghiệm</h2>
<ul>
  <li>Tạo module và build library bằng Python</li>
  <li>Tạo bot Telegram lấy thông tin bằng API hoặc bot game</li>
  <li>Mô phỏng Sicbo game CLI (custom TUI) bằng C++</li>
  <li>Mô phỏng blockchain và cách validators (P2P) vận hành</li>
  <li>Viết mô phỏng CLI cho các thuật toán thực tế</li>
</ul>
    `
  }
];

// ══ PROJECTS ══
const PROJECTS = [
  {
    id: "p1",
    emoji: "🗂️",
    image: "img/p1.png",
    type: "lib",
    typeLabel: "Thư viện",
    name: "C-Healthy",
    desc: "Thư viện mã nguồn mở tính toán chỉ số sức khỏe, BMI, BMR, TDEE, .... Có bản Python (PyPI) và C++",
    tags: ["Python", "C++", "PyPI", "Open Source", "Health"],
    longDesc: "C-Healthy là thư viện mã nguồn mở cung cấp các hàm tính toán chỉ số sức khỏe phổ biến. Được viết song song bằng Python và C++ để phục vụ nhiều nhu cầu. Thư viện Python đã được publish lên trang chủ PyPI",
    features: [
      "Tính BMI (Body Mass Index) với phân loại WHO",
      "Tính BMR (Basal Metabolic Rate) - Tỷ lệ chuyển hóa cơ bản",
      "Tính TDEE (Total Daily Energy Expenditure)",
      "Tính LBM (Lean Body Mass) - Khối lượng cơ thể không mỡ",
      "Tính FFMI (Fat-Free Mass Index) - Chỉ số khối lượng cơ thể không mỡ",
      "Tính RFM (Relative Fat Mass) - Chỉ số mỡ tương đối",
      "Tính BFP (Body Fat Percentage) - Tỷ lệ phần trăm mỡ cơ thể",
      "Tính IBW (Ideal Body Weight) theo nhiều công thức",
      "Tính WHR (Waist-to-Hip Ratio) - Tỷ lệ vòng eo trên vòng hông",
      "Tính BBW (Body Water Requirement) - Ước tính nhu cầu nước",
      "Tính MA (Metabolic Age) - Tuổi chuyển hóa của cơ thể",
      "Đánh giá VFR (Visceral Fat Rating) - Mức độ mỡ nội tạng",
      "Tính BSA (Body Surface Area) - Diện tích bề mặt cơ thể",
      "Tính VO2MAX (Maximal Oxygen Uptake) - Khả năng hấp thụ oxy tối đa",
      "Tính HSI (Hepatic Steatosis Index) - Sàng lọc nguy cơ gan nhiễm mỡ",
      "Tính MMI (Muscle Mass Index) - Chỉ số khối lượng cơ bắp",
      "Tính BFM (Body Fat Mass) - Khối lượng mỡ cơ thể (kg)",
      "Tính ABSI (A Body Shape Index) - Chỉ số hình dáng cơ thể",
      "Tính AVI (Abdominal Volume Index) - Chỉ số thể tích vùng bụng",
      "Tính BAI (Body Adiposity Index) - Chỉ số mỡ cơ thể theo vòng hông",
      "Tính CI (Conicity Index) - Chỉ số hình nón đánh giá béo bụng",
      "Tính WHtR (Waist-to-Height Ratio) - Tỷ lệ vòng eo trên chiều cao",
      "Tính PI (Ponderal Index) - Chỉ số thể trạng theo chiều cao",
      "Tính FMI (Fat Mass Index) - Chỉ số khối lượng mỡ",
      "Tính FFM (Fat-Free Mass) - Khối lượng cơ thể không mỡ",
      "Tính FMR (Fat Mass Ratio) - Tỷ lệ khối lượng mỡ / không mỡ",
      "Tính TBW (Total Body Water) - Tổng lượng nước trong cơ thể",
      "Tính ECW (Extracellular Water) - Lượng nước ngoài tế bào",
      "Tính ICW (Intracellular Water) - Lượng nước trong tế bào",
      "Tính BCM (Body Cell Mass) - Khối lượng tế bào hoạt động",
      "Tính SMI (Skeletal Muscle Index) - Chỉ số khối cơ xương",
      "Tính ASMI (Appendicular Skeletal Muscle Index) - Chỉ số khối cơ xương tứ chi",
      "Tính MAMC (Mid-Upper Arm Muscle Circumference) - Chu vi cơ cánh tay giữa",
      "Đánh giá MUAC (Mid-Upper Arm Circumference Assessment) qua chu vi cánh tay",
      "Tính BEE (Basal Energy Expenditure) - Tiêu hao năng lượng cơ bản",
      "Tính REE (Resting Energy Expenditure) - Tiêu hao năng lượng khi nghỉ ngơi",
      "Đánh giá PAL (Physical Activity Level) - Hệ số mức độ hoạt động thể chất",
      "Tính MET (Metabolic Equivalent of Task) - Đương lượng chuyển hóa",
      "Tính MHR (Maximum Heart Rate) - Nhịp tim tối đa theo độ tuổi",
      "Tính HRR (Heart Rate Reserve) - Dự trữ nhịp tim",
      "Tính THR (Target Heart Rate) - Nhịp tim mục tiêu khi tập luyện",
      "Tính CalDef (Calorie Deficit) - Mức thâm hụt calo để giảm cân",
      "Tính CalSur (Calorie Surplus) - Mức dư calo để tăng cân",
      "Tính ProtNeed (Protein Requirement) - Nhu cầu Protein hằng ngày",
      "Tính FatNeed (Fat Requirement) - Nhu cầu chất béo hằng ngày",
      "Tính CarbNeed (Carbohydrate Requirement) - Nhu cầu Carbohydrate hằng ngày",
      "Tính WaterNeed (Water Requirement) - Nhu cầu nước uống mỗi ngày",
      "Tính IdealWater (Ideal Water Intake) - Lượng nước lý tưởng theo cân nặng",
      "Tính LBP (Lean Body Percentage) - Tỷ lệ phần trăm khối lượng không mỡ",
      "Tính MP (Muscle Percentage) - Tỷ lệ phần trăm cơ bắp",
      "Tính BME (Bone Mass Estimate) - Ước tính khối lượng xương",
      "Tính BMIP (BMI Prime) - So sánh BMI với mức chuẩn 25",
      "Tính FatMass (Fat Mass) - Khối lượng mỡ cơ thể",
      "Tính LeanMass (Lean Mass) - Khối lượng nạc của cơ thể",
      "Hỗ trợ GenderTest (Gender Validation) - Kiểm tra và chuẩn hóa giới tính đầu vào",
      "Tính ABRI (Advanced Body Roundness Index) - Chỉ số độ tròn cơ thể mở rộng",
      "Tính BRI (Body Roundness Index) - Chỉ số độ tròn cơ thể",
      "Tính VAI (Visceral Adiposity Index) - Chỉ số mỡ nội tạng chuyên sâu",
      "Tính LAP (Lipid Accumulation Product) - Chỉ số tích lũy lipid"
    ],
    links: [
      { label: "PyPI", url: "https://pypi.org/project/C-healthy/0.3.0/", icon: "fab fa-python" },
      { label: "GitHub", url: "https://github.com/Interstella-OS/C_healthy", icon: "fab fa-github" }
    ]
  },
  {
    id: "p2",
    emoji: "⛓️",
    image: "img/p2.png",
    type: "cpp",
    typeLabel: "C++",
    name: "Block Miner C++",
    desc: "Blockchain demo viết thuần C++ POW, ký số RSA, kết nối P2P qua TCP socket và Smart contract thử nghiệm",
    tags: ["C++", "OpenSSL", "TCP Socket", "PoW", "RSA"],
    longDesc: "Project blockchain demo từ đầu bằng C++, Gồm đầy đủ các khái niệm cốt lõi: SHA-256, ký số RSA cho giao dịch, P2P network qua socket, và thử nghiệm smart contract đơn giản",
    features: [
      "POW mining với difficulty điều chỉnh được",
      "Ký số RSA cho mỗi giao dịch bằng OpenSSL",
      "P2P node kết nối qua TCP socket thuần",
      "Broadcast block mới đến toàn bộ mạng",
      "Smart contract đơn giản",
      "Xác thực dữ liệu blockchain toàn vẹn"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Interstella-OS/Blockchain-Miner", icon: "fab fa-github" }
    ]
  },
  {
    id: "p3",
    emoji: "🎲",
    image: "img/p3.png",
    type: "cpp",
    typeLabel: "Casino Game C++",
    name: "Casino Game C++",
    desc: "Tổng hợp 25 minigame cá cược thuần C++ chơi trên môi trường dòng lệnh",
    tags: ["C++", "Game Sicbo", "custom TUI", "Open Source"],
    longDesc: "Casino Game C++ là một dự án game cá cược tập hợp gồm nhiều minigame bên trong, vận hành hoàn toàn trên môi trường dòng lệnh (custom TUI), được phát triển bằng ngôn ngữ C++. dự án mang đến trải nghiệm ASCII trực quan, hệ thống âm thanh sống động, cơ chế bảo mật mã hóa nâng cao và tích hợp AI dự đoán kết quả ngay trong terminal",
    features: [
      "Đăng ký và đăng nhập tài khoản",
      "Điều hướng menu bằng phím mũi tên",
      "Phân quyền tài khoản User và Admin",
      "Quản lý số dư, nạp/trừ tiền người chơi (Admin)",
      "Theo dõi lịch sử giao dịch và lịch sử đấu",
      "Bảng xếp hạng người chơi",
      "Tích hợp AI gợi ý và dự đoán kết quả",
      "Tùy chỉnh giao diện, màu sắc",
      "Bật / tắt hiệu ứng âm thanh",
      "Sảnh Game Bài (Bài cào, So bài, Xì dách)",
      "Sảnh Game Xóc xóc (Bầu cua, Tài xỉu, Úp ngửa, Xóc đĩa)",
      "Sảnh Game May rủi (Chẵn lẻ, Dài ngắn, Đoán màu, Đoán số, Kéo búa bao)",
      "Sảnh Game 2 người (Bài cào, Ném xúc xắc, So bài, Xì dách)",
      "Chế độ Game Flag (Bài cào, Ném xúc xắc, So bài, Xì dách)",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/Casinogame-cpp", icon: "fab fa-github" }    ]
  },
  {
    id: "p4",
    emoji: "🔗",
    image: "img/p4.png",
    type: "bot",
    typeLabel: "Bot Telegram",
    name: "Share Bot Telegram",
    desc: "Chia sẻ các bot telegram tiện ích",
    tags: ["Python", "Telegram API", "Open Source"],
    longDesc: "Tập hợp các bot Telegram được viết bằng Python. Một số API phụ thuộc có thể đã ngừng hoạt động, code vẫn có giá trị tham khảo",
    features: [
      "Bot phân tích tradingview",
      "Bot spam sms (vip)",
      "Bot mô phỏng blockchain",
      "Bot dịch thuật (bản thường)",
      "Bot dịch thuật (bản pro)",
      "Bot lấy thông tin tài khoản telegram",
      "Bot hash thông tin nhập vào",
      "Bot tính chỉ số cơ thể",
      "Bot tạo QR ngân hàng",
      "Bot tạo file âm thanh bản 1",
      "Bot tạo file âm thanh bản 2",
      "Bot mô phỏng hoạt động ngân hàng",
      "Bot đổi đơn vị tiền tệ",
      "Bot lấy thông tin thời tiết",
      "Bot lấy thông tin quốc gia",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/Share_Bot_Telegram", icon: "fab fa-github" },
      { label: "Xem demo", url: "bot-list.html", icon: "fa-solid fa-list" }
    ]
  },
  {
    id: "p5",
    emoji: "🛗",
    image: "img/p5.png",
    type: "cpp",
    typeLabel: "Elevator C++",
    name: "Elevator C++",
    desc: "Demo thang máy hoạt động",
    tags: ["C++", "Scan Algorithm", "ASCII", "Open Source"],
    longDesc: "Demo nhỏ về cách hoạt động của thang máy bằng thuật toán Scan và mô phỏng thang máy bằng ký tự ASCII",
    features: [
      "Mô phỏng điều khiển thang máy (10 tầng)",
      "Áp dụng thuật toán định tuyến SCAN",
      "Giữ nguyên hướng di chuyển và đổi chiều thông minh",
      "Quản lý tải trọng tối đa 10 người",
      "Tự động tìm mục tiêu gần nhất theo hướng đi",
      "Trạng thái nghỉ thông minh",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/Elevator-cpp", icon: "fab fa-github" },
    ]
  },
  {
    id: "p6",
    emoji: "🗂️",
    image: "img/p6.png",
    type: "lib",
    typeLabel: "Clibrary C++",
    name: "Clibrary C++",
    desc: "Thư viện tự build dựa trên thư viện gốc C++",
    tags: ["C++", "Library", "Open Source"],
    longDesc: "Tập hợp các thư viện tự build dựa trên các thư viện gốc trong C++ hỗ trợ cú pháp viết ngắn gọn và đơn giản",
    features: [
      "C-healthy-cpp: Thư viện tính toán các chỉ số sức khỏe",
      "hashlib-cpp: Thư viện mã hóa và băm dữ liệu dựa trên OpenSSL",
      "datetime-cpp: Thư viện lấy ngày giờ hệ thống dựa trên std::chrono",
      "list-cpp: Thư viện danh sách tự phát triển theo phong cách List của Python",
      "random-cpp: Thư viện sinh số ngẫu nhiên ngắn gọn dựa trên C++ <random>",
      "minilog-cpp: Thư viện ghi log đơn giản, hỗ trợ màu Terminal và xuất file log",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/Clibrary-hpp", icon: "fab fa-github" },
    ]
  },
  {
    id: "p7",
    emoji: "🔒",
    image: "img/p7.png",
    type: "web",
    typeLabel: "MFA-Web",
    name: "Multi factor authenticator website",
    desc: "Xác thực đa yếu tố",
    tags: ["Web", "Express JS", "Bot telegram", "Open Source"],
    longDesc: "Dự án nhỏ mô phỏng website xác thực đa yếu tố bằng Express JS và trả OTP về bot telegram",
    features: [
      "Đăng nhập tài khoản bằng username và password",
      "Sinh mã OTP ngẫu nhiên gồm 4 chữ số",
      "Gửi mã xác thực OTP tự động qua bot telegram",
      "Thông báo kết quả xác minh (Thành công / thất bại)"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/trgchinhh/MFA-Web", icon: "fab fa-github" },
    ]
  },
];
