# Hướng dẫn tạo Icons cho PWA

## Cách 1: Sử dụng Tool HTML (Khuyến nghị)

1. Mở file `generate-icons-simple.html` trong browser
2. Nhấn "🎨 Tạo Icon"
3. Nhấn "⬇️ Tải 192x192" và "⬇️ Tải 512x512"
4. Lưu 2 file vào thư mục `pwa_installer/`

## Cách 2: Sử dụng công cụ online

### Option A: RealFaviconGenerator
1. Truy cập: https://realfavicongenerator.net/
2. Upload một icon gốc (bất kỳ kích thước)
3. Tải về các icon đã được generate

### Option B: PWA Asset Generator
1. Truy cập: https://github.com/onderceylan/pwa-asset-generator
2. Hoặc sử dụng online: https://www.pwabuilder.com/imageGenerator

### Option C: Canva / Figma
1. Tạo design 512x512 pixels
2. Export thành PNG
3. Resize thành 192x192 và 512x512

## Cách 3: Sử dụng ImageMagick (Command line)

Nếu bạn có một icon gốc:

```bash
# Resize thành 192x192
convert icon-original.png -resize 192x192 icon-192.png

# Resize thành 512x512
convert icon-original.png -resize 512x512 icon-512.png
```

## Yêu cầu Icons

- **Format**: PNG
- **Kích thước**: 
  - `icon-192.png`: Chính xác 192x192 pixels
  - `icon-512.png`: Chính xác 512x512 pixels
- **Nội dung**: Nên có background và icon rõ ràng
- **Purpose**: `any maskable` (icon có thể được mask bởi Android)

## Lưu ý

- Icons phải tồn tại để PWA hoạt động đúng
- Nếu không có icon, PWA có thể không được nhận diện
- Icon nên có màu sắc rõ ràng và dễ nhận biết

