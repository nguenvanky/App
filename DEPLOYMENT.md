# Hướng dẫn Deploy PWA Installer

## Yêu cầu

1. **HTTPS Server**: PWA chỉ hoạt động trên HTTPS (hoặc localhost)
2. **Service Worker**: Phải được serve với Content-Type đúng
3. **Manifest.json**: Phải được serve với Content-Type: `application/manifest+json`

## Các bước deploy

### 1. Tạo Icons (192x192 và 512x512)

Tạo 2 file icon:
- `icon-192.png`: 192x192 pixels
- `icon-512.png`: 512x512 pixels

Có thể sử dụng tool online: https://realfavicongenerator.net/

### 2. Upload files lên HTTPS server

Upload tất cả files:
- `index.html`
- `manifest.json`
- `service-worker.js`
- `icon-192.png`
- `icon-512.png`
- `favicon.ico` (tùy chọn)

### 3. Cấu hình Server

#### Apache (.htaccess)
```apache
# Service Worker
<FilesMatch "service-worker\.js">
    Header set Content-Type "application/javascript"
</FilesMatch>

# Manifest
<FilesMatch "manifest\.json">
    Header set Content-Type "application/manifest+json"
</FilesMatch>
```

#### Nginx
```nginx
location ~* \.(js)$ {
    add_header Content-Type application/javascript;
}

location ~* manifest\.json$ {
    add_header Content-Type application/manifest+json;
}
```

#### GitHub Pages
- Tạo repository
- Upload files vào root
- Enable GitHub Pages trong Settings
- Files sẽ tự động được serve với Content-Type đúng

#### Netlify
- Kéo thả folder vào Netlify
- Hoặc kết nối GitHub repository
- Netlify tự động detect và serve đúng

#### Vercel
- Upload folder lên Vercel
- Hoặc kết nối GitHub repository
- Vercel tự động detect và serve đúng

### 4. Kiểm tra PWA

1. Mở Chrome DevTools (F12)
2. Vào tab "Application"
3. Kiểm tra:
   - Manifest: Phải hiển thị thông tin PWA
   - Service Workers: Phải thấy service worker đã đăng ký
   - Installable: Phải hiển thị "Add to Home Screen" nếu đủ điều kiện

### 5. Test trên Mobile

1. Mở trang web trên mobile browser (Chrome/Edge)
2. Kiểm tra:
   - Banner cài đặt xuất hiện sau 3 giây
   - Nhấn "Cài đặt" → Dialog cài đặt xuất hiện
   - Sau khi cài đặt, app xuất hiện trên home screen

## Troubleshooting

### PWA không được nhận diện

1. **Kiểm tra HTTPS**: Phải là HTTPS (không phải HTTP)
2. **Kiểm tra manifest.json**: 
   - Phải có `start_url` và `scope`
   - Phải có ít nhất 1 icon 192x192
   - Phải có `display: "standalone"`
3. **Kiểm tra Service Worker**:
   - Phải được serve từ root hoặc cùng scope
   - Phải có Content-Type: `application/javascript`
4. **Kiểm tra Console**: Xem có lỗi gì không

### Install button không hoạt động

1. **Kiểm tra `beforeinstallprompt` event**:
   - Mở Console và xem có log "beforeinstallprompt event fired"
   - Nếu không có, có thể browser chưa sẵn sàng
2. **Kiểm tra điều kiện PWA**:
   - Phải có HTTPS
   - Phải có manifest hợp lệ
   - Phải có service worker
   - Phải có icon 192x192
   - User phải tương tác với trang (click, scroll, etc.)

### Iframe không load ESP32 content

1. **Kiểm tra CORS**: ESP32 có thể block iframe từ domain khác
2. **Kiểm tra X-Frame-Options**: ESP32 có thể set header này
3. **Giải pháp**: Có thể cần proxy hoặc CORS configuration trên ESP32

## Lưu ý

- PWA chỉ hoạt động trên HTTPS (trừ localhost)
- Service Worker phải được serve từ cùng origin
- Manifest.json phải có Content-Type đúng
- Icons phải tồn tại và có kích thước đúng

