# Portfolio cá nhân — Trường Chinh

Web portfolio cá nhân với blog và showcase dự án.

## Cấu trúc file

```
portfolio/
├── index.html       ← Trang chủ chính
├── bot-list.html    ← Danh sách tất cả bot Telegram
├── style.css        ← Toàn bộ CSS (theme sáng/tối, components)
├── data.js          ← Dữ liệu blog posts và dự án
├── app.js           ← Logic: render, theme toggle, modal, routing
├── avatar.jpg       ← ĐẶT ẢNH CỦA BẠN VÀO ĐÂY
└── README.md
```

## Cách dùng

1. **Đặt ảnh đại diện:** đặt file ảnh vào thư mục và đặt tên là `avatar.jpg`
   (hoặc đổi `src="avatar.jpg"` trong `index.html` thành tên file của bạn)

2. **Mở `index.html`** bằng trình duyệt — hoặc dùng Live Server (VS Code)

3. **Thêm blog post:** mở `data.js`, thêm object vào mảng `BLOGS`:
   ```js
   {
     id: "b4",
     tag: "Python",
     title: "Tiêu đề bài viết",
     excerpt: "Tóm tắt ngắn hiện trên trang chủ",
     date: "1 tháng 7, 2025",
     content: `<h2>Tiêu đề</h2><p>Nội dung HTML...</p>`
   }
   ```

4. **Thêm dự án:** thêm object vào mảng `PROJECTS` trong `data.js`

## Theme

- Sáng: nền `#FAF7F4` + cam `#F4622A`
- Tối: nền `#1F1F1F` + cam `#F4622A`
- Theme được lưu vào localStorage, tự nhớ lần sau

## Deploy

Upload toàn bộ thư mục lên GitHub Pages, Netlify, hay Vercel là xong.
