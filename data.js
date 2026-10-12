const ACHIEVEMENTS = [
  {
    id: "a1",
    title: 'Giải nhất cuộc thi "Coder tiềm năng 2026"',
    cert: "img/codertiemnang-2026/giaychungnhan.png",
    reward: "img/codertiemnang-2026/phanthuong.png"
  },
  // thêm giải mới
];

// ══ TRANG THÔNG TIN (trang chính) ══
const INFO = [
  {
    id: "b1",
    content: `
<h2>Giới thiệu</h2>
<p>
<strong>Nguyễn Trường Chinh</strong>, sinh viên năm 3 ngành Công nghệ thông tin trường Đại học Công nghệ Sài Gòn (STU)
</p>

<h2>Thành tích</h2>
<div id="achievementList"></div>

<h2>Lĩnh vực quan tâm</h2>
<ul>
  <li><strong>Blockchain: </strong>cơ chế đồng thuận, mạng ngang hàng (P2P) và smart contract</li>
  <li><strong>Mật mã học: </strong>các thuật toán mã hóa hiện đại tiêu chuẩn của NIST</li>
  <li><strong>Giao diện dòng lệnh: </strong>xây dựng giao diện dòng lệnh (CLI/TUI) bằng C++</li>
  <li><strong>AI agent: </strong>đang học và tìm hiểu cách xây dựng giao diện, hệ thống cho 1 AI code</li>
</ul>

<h2>Mục tiêu tương lai</h2>
<ul>
  <li><strong>Backend Web3/Blockchain Engineer</strong></li>
  <li><strong>Security Engineer</strong></li>
</ul>

<h2>Kỹ năng</h2>
<ul>
  <li><strong>Ngôn ngữ: </strong>C++, Python, C#, Batchscript (cơ bản)</li>
  <li><strong>Web: </strong>HTML, CSS, JavaScript (cơ bản)</li> 
  <li><strong>Framework: </strong>ExpressJS, ASP.NET, Winforms (cơ bản)</li>
  <li><strong>Khác: </strong>Viết README.md, tài liệu mô tả, hướng dẫn</li>
</ul>

<h2>Công cụ mình dùng</h2>
<ul>
  <li><strong>Công cụ: </strong>Git, Github, Postman, Fork, Lazygit, Rg, FZF</li>
  <li><strong>Hệ điều hành chính: </strong>Windows 11 (25H2)</li>
  <li><strong>Hệ điều hành máy ảo: </strong>Ubuntu 24 (Gnome), Arch install(KDE plasma)</li>
  <li><strong>IDE: </strong>Visual Studio 2022</li>
  <li><strong>Text editor: </strong>Sublime Text (chính), Visual Studio Code (phụ)</li>
  <li><strong>Terminal: </strong>Windows Terminal - Shell: Powershell</li>
  <li><strong>Khác: </strong>SSH, MobaXterm (điều khiển linux server)</li>
</ul>

<h2>Các dự án</h2>
<ul>
  <li><strong>Telegram bots:</strong> Phát triển các bot telegram, thu thập dữ liệu qua API, bot games, bot tools, ...</li>
  <li><strong>Thư viện (Python):</strong> xây dựng, hướng dẫn phát hành thư viện C-healthy (tính chỉ số cơ thể) lên PyPI</li>
  <li><strong>Minigames  (C++):</strong> mini game cá cược CLI với giao diện custom TUI (không cần dùng chuột)</li>
  <li><strong>Blockchain (C++):</strong> mô phỏng blockchain nhỏ về cơ chế vận hành của validator trên mạng P2P với mini smart contract</li>
  <li><strong>Thuật toán mã hóa (C#):</strong> xây dựng chương trình CLI về các thuật toán Caesar, AES, RSA, Playfair, ...</li>
  <li><strong>Quản lý sinh viên (C#):</strong> mô phỏng chương trình CLI có chức năng đăng nhập cho giảng viên, lưu trữ dữ liệu trên SQL Server</li>
</ul>
    `
  }
];