# Kinh Mai Thuyết Gallery - Phòng Tranh Nghệ Thuật & Thiền Họa

Trang web tĩnh (Static Gallery Website) tối giản, tĩnh tại, mang đậm hồn cốt nghệ thuật truyền thống Việt Nam và triết lý Phật giáo (Zen).

---

## 📁 Cấu trúc 3 file chính (GitHub Pages Ready)

Trang web hoạt động hoàn toàn bằng HTML5, CSS3 và Vanilla JavaScript thuần (không phụ thuộc vào bất kỳ framework hay backend nào), sẵn sàng chạy ngay khi mở trực tiếp trên trình duyệt hoặc đưa lên GitHub Pages:

1. **`index.html`**: Cấu trúc ngữ nghĩa chuẩn SEO, hỗ trợ đa ngôn ngữ (data-i18n), tích hợp sẵn Google Fonts (*Cormorant Garamond* & *Be Vietnam Pro*), dấu triện đỏ truyền thống, lightbox modal, form liên hệ và bố cục responsive.
2. **`style.css`**: Hệ thống biến màu sắc mộc mạc (ngói đỏ trầm, vàng quỳ, giấy dó, tro hương trầm), lưới CSS Grid nghệ thuật, hiệu ứng chuyển động êm dịu (Zen transitions).
3. **`script.js`**: Danh sách 10 tác phẩm mẫu với đầy đủ thông tin (chất liệu, kích thước, năm sáng tác, triết lý/lời bình), bộ lọc chuyên mục, lightbox phóng to ảnh kèm phím tắt (←, →, Esc), chuyển đổi ngữ hệ song ngữ (Việt - Anh) lưu trữ `localStorage`.

---

## 🚀 Hướng dẫn tải và đưa lên GitHub Pages (Trong 60 giây)

1. **Tạo repository mới trên GitHub**:
   - Đăng nhập GitHub → Nhấn nút **New Repository**.
   - Đặt tên (ví dụ: `kinhmaithuyet-gallery` hoặc `[username].github.io`).
   - Đặt chế độ **Public**.
2. **Tải 3 file lên GitHub**:
   - Tải 3 file: `index.html`, `style.css`, `script.js` vào thư mục gốc của repository.
3. **Kích hoạt GitHub Pages**:
   - Vào tab **Settings** của repository → chọn mục **Pages** ở thanh bên trái.
   - Tại phần **Build and deployment** / **Branch**: Chọn nhánh `main` (hoặc `master`), thư mục `/(root)` → Nhấn **Save**.
   - Sau khoảng 30 - 60 giây, GitHub sẽ cung cấp đường link website trực tuyến miễn phí dạng: `https://[username].github.io/kinhmaithuyet-gallery/`.

---

## 🎨 Hướng dẫn thay tranh thật và chỉnh sửa thông tin

Mở file **`script.js`** và tìm mảng `artworksData` ở đầu file. Mỗi tác phẩm có cấu trúc như sau:

```javascript
{
  id: "ten-tac-pham",
  category: "son-mai", // "son-mai" | "tranh-lua" | "muc-nho-do"
  year: "2024",
  dimensions: "120 × 90 cm",
  image: "https://duong-dan-anh-cua-ban.jpg", // Thay bằng link ảnh hoặc đường dẫn local
  title: {
    vi: "Tên Tiếng Việt",
    en: "English Title"
  },
  medium: {
    vi: "Sơn mài trên vóc, vàng quỳ",
    en: "Lacquer on wood, gold leaf"
  },
  story: {
    vi: "Lời bình hoặc triết lý tác phẩm bằng tiếng Việt...",
    en: "Art contemplation note in English..."
  }
}
```
