# Xiaozhi Device Control - PWA Installer

Trang web HTTPS để cài đặt PWA và quét QR code từ thiết bị ESP32.

## Tính năng

- 📷 **Quét QR Code**: Sử dụng camera để quét QR code từ ESP32 và lấy thông tin kết nối
- 📲 **Tự động cài đặt PWA**: Tự động tạo và cài đặt Progressive Web App
- 🔗 **Kết nối thiết bị**: Tự động kết nối đến thiết bị ESP32 sau khi quét QR code
- 💾 **Offline Support**: Hoạt động offline sau khi cài đặt

## Cài đặt

### 1. Host trang web trên HTTPS server

Trang web này cần được host trên HTTPS server (ví dụ: GitHub Pages, Netlify, Vercel, hoặc server riêng).

### 2. Upload files

Upload tất cả files trong thư mục `pwa_installer/` lên server:
- `index.html`
- `manifest.json`
- `service-worker.js`
- `favicon.ico` (tùy chọn)
- `icon-192.png` (tùy chọn, 192x192px)
- `icon-512.png` (tùy chọn, 512x512px)

### 3. Cấu hình Service Worker

Đảm bảo `service-worker.js` được serve với Content-Type: `application/javascript`.

### 4. Tạo icons (tùy chọn)

Tạo 2 file icon:
- `icon-192.png`: 192x192 pixels
- `icon-512.png`: 512x512 pixels

## Sử dụng

1. Mở trang web trên HTTPS server
2. Nhấn "Bắt đầu quét" để quét QR code từ ESP32
3. Sau khi quét thành công, thông tin thiết bị sẽ hiển thị
4. Nhấn "Kết nối đến thiết bị" để mở trang điều khiển
5. Nhấn "Cài đặt ứng dụng" để cài đặt PWA

## QR Code Format

QR code từ ESP32 nên có format:
- URL: `http://192.168.1.100:80/otto` hoặc `http://192.168.1.100:80`
- JSON: `{"ip": "192.168.1.100", "port": "80", "protocol": "http"}`

## Browser Support

- ✅ Chrome/Edge (Android, Desktop)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (Android, Desktop)
- ✅ Samsung Internet

## Lưu ý

- Trang web cần HTTPS để PWA hoạt động
- Camera permission cần được cấp để quét QR code
- Service Worker chỉ hoạt động trên HTTPS hoặc localhost

