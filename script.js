/**
 * KINH MAI THUYẾT GALLERY - Vanilla JavaScript
 * Minimalist Zen & Vietnamese Traditional Art Experience
 * Ready for GitHub Pages & Static Deployment
 */

// --- Data: Curated Artworks Collection ---
const artworksData = [
  {
    id: "vo-thuong",
    category: "son-mai",
    year: "2024",
    dimensions: "120 × 90 cm",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Vô Thường",
      en: "Impermanence"
    },
    medium: {
      vi: "Sơn mài truyền thống, vàng quỳ Kiêu Kỵ trên vóc",
      en: "Traditional lacquer, Kiêu Kỵ gold leaf on wooden board"
    },
    story: {
      vi: "Tác phẩm khắc họa sự luân chuyển của vạn vật qua từng lớp son then mài bóng. Những bụi vàng quỳ lắng đọng như hạt cát sông Hằng, nhắc nhở ta trân quý phút giây hiện tại.",
      en: "Capturing the cyclical nature of existence through polished layers of natural resin. Settled specks of gold leaf evoke the sands of the Ganges, reminding us of the preciousness of the present moment."
    }
  },
  {
    id: "sen-tinh-do",
    category: "tranh-lua",
    year: "2023",
    dimensions: "80 × 140 cm",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Sen Tịnh Độ",
      en: "Pure Land Lotus"
    },
    medium: {
      vi: "Mực nho & khoáng chất tự nhiên trên lụa tơ tằm Hà Đông",
      en: "Chinese ink & natural minerals on handwoven Hà Đông raw silk"
    },
    story: {
      vi: "Hoa sen vươn lên từ bùn lầy nhưng không vướng bụi trần. Những nét vuốt lụa thanh mảnh như hơi thở thiền định giữa buổi sớm mai thơm ngát sương lành.",
      en: "The lotus blooms pure from the mud, untainted by worldly dust. Gentle washes across the raw silk weave mirror a quiet meditation in the fragrant morning mist."
    }
  },
  {
    id: "trang-day-nuoc",
    category: "son-mai",
    year: "2024",
    dimensions: "100 × 100 cm",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Trăng Đáy Nước",
      en: "Moon in Still Water"
    },
    medium: {
      vi: "Sơn ta tự nhiên, vỏ trứng cẩn nổi & bạc thếp",
      en: "Natural resin, eggshell inlay & pure silver leaf"
    },
    story: {
      vi: "Hình bóng vầng trăng in trên mặt nước phẳng lặng. Khi tâm không xao động, vạn vật phản chiếu chân thực bản tính nguyên sơ.",
      en: "The reflection of the luminous moon upon undisturbed waters. When the mind rests in complete stillness, all things reflect their primordial truth."
    }
  },
  {
    id: "khoi-huong-tram",
    category: "muc-nho-do",
    year: "2024",
    dimensions: "65 × 95 cm",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Khói Hương Trầm",
      en: "Agarwood Whisper"
    },
    medium: {
      vi: "Mực nho mài thủ công trên giấy Dó cổ làng Bưởi",
      en: "Hand-ground ink wash on vintage handmade Dó paper"
    },
    story: {
      vi: "Một nén hương trầm thắp lên, làn khói mỏng uốn lượn rồi tan vào hư không. Bức họa lưu lại cái vô hình trong cái hữu hình.",
      en: "A stick of incense is lit; slender smoke spirals upward before dissolving into emptiness. This piece captures the invisible residing within the visible."
    }
  },
  {
    id: "hoi-sinh-mien-dat-co",
    category: "son-mai",
    year: "2023",
    dimensions: "150 × 80 cm",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Hồi Sinh Miền Đất Cổ",
      en: "Echoes of Ancient Earth"
    },
    medium: {
      vi: "Sơn mài đa tầng khắc chạm, son chu sa & đất phù sa",
      en: "Carved multi-layered lacquer, cinnabar red & alluvial clay"
    },
    story: {
      vi: "Lấy cảm hứng từ những mái đình Bắc Bộ rêu phong và màu ngói nung cổ truyền. Sự kiên nhẫn mài qua hàng chục lớp sơn hé lộ vẻ đẹp ẩn giấu của thời gian.",
      en: "Inspired by moss-veiled village communal roofs and time-weathered terracotta tiles. Decades of lacquer layering polished away to reveal time's hidden poetry."
    }
  },
  {
    id: "thien-toa-duoi-tung",
    category: "muc-nho-do",
    year: "2024",
    dimensions: "70 × 110 cm",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Thiền Tọa Dưới Tùng",
      en: "Meditation Beneath the Pines"
    },
    medium: {
      vi: "Thủy mặc & bột màu khoáng tự nhiên trên giấy Dó",
      en: "Ink wash & natural earth pigments on Dó bark paper"
    },
    story: {
      vi: "Dưới bóng thông cổ thụ ngàn năm, hành giả ngồi yên nghe tiếng thông reo. Mọi bon chen bụi trần dừng lại nơi mép cọ.",
      en: "Beneath an ancient pine tree, the seeker sits motionless listening to the pine wind. All worldly clamor ceases right at the tip of the brush."
    }
  },
  {
    id: "gio-qua-vuon-cuc",
    category: "tranh-lua",
    year: "2023",
    dimensions: "90 × 120 cm",
    image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Gió Qua Vườn Cúc",
      en: "Wind Through Chrysanthemums"
    },
    medium: {
      vi: "Lụa dệt tay nhuộm thảo mộc tự nhiên & mực thảo mộc",
      en: "Handloom silk dyed with botanical extracts & herbal inks"
    },
    story: {
      vi: "Sắc vàng hoa cúc mùa thu tượng trưng cho lòng thanh cao và sự nhẫn nại. Lụa nhuộm củ nâu và lá chàm đem lại độ trầm sâu của ký ức.",
      en: "Golden autumn chrysanthemums symbolize nobility and patience. Silk dyed with yam root and indigo brings forth the deep, tranquil resonance of memory."
    }
  },
  {
    id: "chuong-chieu-chua-co",
    category: "son-mai",
    year: "2024",
    dimensions: "110 × 110 cm",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Chuông Chiều Chùa Cổ",
      en: "Evening Temple Bell"
    },
    medium: {
      vi: "Sơn then đen bóng, thếp vàng quỳ & vỏ ốc cẩn chìm",
      en: "Deep black lacquer, gold leaf & mother-of-pearl inlay"
    },
    story: {
      vi: "Tiếng chuông đại hồng chung ngân vang qua làn sương lam chiều tà, lay động tâm thức người lữ khách tìm đường trở về với chính mình.",
      en: "The resonant stroke of the great temple bell echoes through the evening haze, awakening the weary traveler to return home to their true self."
    }
  },
  {
    id: "vo-tuong",
    category: "muc-nho-do",
    year: "2025",
    dimensions: "85 × 135 cm",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Vô Tướng",
      en: "Formlessness"
    },
    medium: {
      vi: "Thủy mặc tối giản & nước nguồn trên giấy Dó đại",
      en: "Minimalist sumi ink & spring water on large Dó paper"
    },
    story: {
      vi: "Không hình dạng cố định, tựa như mây trời tụ rồi tan. Tác phẩm tôn vinh khoảng trắng không gian như một sự hiện diện đầy đặn của tâm linh.",
      en: "Without rigid form, like passing clouds gathering and dispersing. The artwork celebrates expansive negative space as the fullest presence of spirit."
    }
  },
  {
    id: "anh-sang-chan-nhu",
    category: "son-mai",
    year: "2025",
    dimensions: "130 × 90 cm",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
    title: {
      vi: "Ánh Sáng Chân Như",
      en: "Radiance of Tathata"
    },
    medium: {
      vi: "Vàng quỳ, vỏ điệp tán mịn & sơn then đa lớp",
      en: "Gold leaf, powdered seashell & layered black lacquer"
    },
    story: {
      vi: "Tia sáng bản nhiên trong trẻo bên trong mỗi con người. Vỏ điệp lấp lánh ẩn hiện dưới ánh nắng nhắc nhớ về viên ngọc sáng trong chéo áo.",
      en: "The innate luminous awareness inherent within all beings. Crushed pearl shell gleaming beneath natural light recalls the hidden jewel within one’s garment."
    }
  }
];

// --- Translations Dictionary (Bilingual: VI / EN) ---
const translations = {
  vi: {
    brand_sub: "Phòng tranh nghệ thuật cá nhân",
    nav_home: "Trang chủ",
    nav_works: "Tác phẩm",
    nav_about: "Về nghệ sĩ",
    nav_philosophy: "Triết lý",
    nav_contact: "Liên hệ",
    nav_gh_guide: "GitHub Pages",

    hero_badge: "Nghệ thuật Dân gian & Thiền đạo",
    hero_quote: "Tâm như mặt hồ phẳng lặng, nét cọ theo gió mà hoá hình. Vạn vật vốn vô thường, chỉ có cái tĩnh tại của khoảnh khắc là chân như.",
    hero_desc: "Kinh Mai Thuyết là không gian hội họa tĩnh lặng, nơi những chất liệu nghìn năm như sơn ta, giấy dó, lụa tơ tằm và vàng quỳ hòa quyện cùng mỹ cảm tối giản đương đại.",
    btn_explore: "Thưởng lãm tác phẩm",
    btn_about_artist: "Tìm hiểu nghệ sĩ",
    featured_badge: "Tác phẩm tiêu biểu",

    gallery_eyebrow: "Bộ sưu tập tuyển chọn",
    gallery_title: "Tác Phẩm & Trầm Tích Thời Gian",
    gallery_subtitle: "Mỗi bức họa là một thiền án, một cuộc đối thoại thầm lặng giữa bàn tay nghệ nhân và hồn cốt văn hóa dân gian Việt Nam.",

    filter_all: "Tất cả tác phẩm",
    filter_sonmai: "Sơn mài truyền thống",
    filter_lua: "Tranh lụa tơ tằm",
    filter_mucnho: "Thủy mặc & Giấy Dó",

    card_view: "Xem chi tiết",
    card_year_prefix: "Năm",

    philosophy_quote: "“Vẽ không phải để thêm vào thế gian một hình bóng, mà là gạn bớt những xao động để nhận ra cái chân thật ban sơ.”",
    philosophy_author: "— Họa sĩ Kinh Mai Thuyết",

    about_eyebrow: "Hành trình hội họa",
    about_title: "Về Họa Sĩ Kinh Mai Thuyết",
    about_text_1: "Sinh ra và lớn lên bên dòng sông Đuống giàu truyền thống văn hóa Kinh Bắc, Kinh Mai Thuyết gắn bó sâu sắc với mỹ thuật dân gian Việt Nam từ thời niên thiếu. Ông dành trọn đời mình để nghiên cứu những kỹ thuật thủ công truyền thống: từ cách ủ sơn ta Phú Thọ trong thúng kín, cách làm phẳng mặt tranh bằng đá mài bùn, đến kỹ nghệ dệt lụa tơ tằm nguyên bản.",
    about_text_2: "Dưới lăng kính triết lý Phật giáo Nguyên thủy và Thiền phái Trúc Lâm Yên Tử, tranh của Kinh Mai Thuyết loại bỏ tối đa những chi tiết thừa thãi. Ông để cho khoảng trống tự cất lên tiếng nói, để người xem tìm thấy sự an lạc và tịnh tâm giữa nhịp sống hiện đại vội vã.",
    
    exhibitions_title: "Triển lãm & Dấu ấn tiêu biểu",
    exh_1: "Triển lãm cá nhân “Sắc & Không” — Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
    exh_2: "Triển lãm “Hồn Lụa & Trầm Tích” — Trung tâm Nghệ thuật Le Ba Dang, Huế",
    exh_3: "Triển lãm nhóm “Vietnamese Zen Painting” — Ginza Gallery, Tokyo, Nhật Bản",
    exh_4: "Bộ sưu tập thường trực — Lotus Art Foundation, Paris, Pháp",

    contact_eyebrow: "Kết nối & Thưởng ngoạn",
    contact_title: "Thưởng Trà & Đàm Đạo Hội Họa",
    contact_subtitle: "Kính mời quý khách ghé thăm xưởng vẽ để tận mắt cảm nhận hương sơn ta, ngắm nhìn ánh vàng quỳ và cùng đàm đạo về nghệ thuật.",
    
    info_studio_title: "Không gian xưởng vẽ (Studio)",
    info_studio_desc: "Xóm Gốm ven sông Hồng, Bát Tràng, Gia Lâm, Hà Nội & Xưởng tịnh thất tại Phố cổ Hội An",
    info_time_title: "Thời gian đón khách",
    info_time_desc: "Vui lòng đặt lịch hẹn trước để chúng tôi đón tiếp và chuẩn bị trà thơm chu đáo (Thứ Ba – Chủ Nhật).",
    info_inquiry_title: "Sưu tập & Giám định tác phẩm",
    info_inquiry_desc: "Email: gallery@kinhmaithuyet.art | Điện thoại: (+84) 0912 345 678",

    form_title: "Gửi Lời Nhắn Đến Họa Sĩ",
    form_name_label: "Họ và tên của bạn",
    form_name_ph: "Nguyễn Văn An",
    form_email_label: "Địa chỉ Email",
    form_email_ph: "an.nguyen@example.com",
    form_art_label: "Tác phẩm quan tâm (Nếu có)",
    form_art_ph: "Ví dụ: Sen Tịnh Độ, Vô Thường...",
    form_msg_label: "Nội dung lời nhắn / Yêu cầu sưu tập",
    form_msg_ph: "Chia sẻ cảm nhận của bạn về tác phẩm hoặc thời gian muốn ghé thăm xưởng...",
    btn_submit_msg: "Gửi lời nhắn",
    form_success_msg: "Cảm ơn bạn đã gửi gắm tâm tình. Họa sĩ Kinh Mai Thuyết sẽ hồi đáp qua thư điện tử trong thời gian sớm nhất!",

    lb_inquire_btn: "Hỏi mua / Sưu tập bức này",
    lb_close_btn: "Đóng",
    lb_category_lbl: "Thể loại",
    lb_medium_lbl: "Chất liệu",
    lb_size_lbl: "Kích thước",
    lb_year_lbl: "Năm sáng tác",
    lb_story_lbl: "Triết lý & Lời bình tác phẩm",

    gh_title: "Triển khai lên GitHub Pages (Miễn phí)",
    gh_desc: "Trang web này được xây dựng hoàn toàn bằng HTML5, CSS3 và Vanilla JavaScript tĩnh, sẵn sàng hoạt động ngay trên GitHub Pages mà không cần cấu hình build phức tạp.",
    gh_step_1: "1. Tạo một repository mới trên GitHub (ví dụ: kinhmaithuyet-gallery).",
    gh_step_2: "2. Tải 3 file: index.html, style.css, script.js và tải lên root repository.",
    gh_step_3: "3. Vào Settings -> Pages -> Chọn nhánh 'main' và thư mục '/root' -> Nhấn Save. Trang web sẽ trực tuyến trong 60 giây!",
    gh_btn_close: "Đã hiểu",

    footer_seal_text: "Thuyết",
    footer_quote: "“Giữ trọn lòng thanh tịnh, nét cọ tự nhiên thành.”",
    footer_rights: "Bản quyền tác phẩm thuộc về Họa sĩ Kinh Mai Thuyết. Bảo lưu mọi quyền."
  },

  en: {
    brand_sub: "Personal Art Gallery",
    nav_home: "Home",
    nav_works: "Artworks",
    nav_about: "About",
    nav_philosophy: "Philosophy",
    nav_contact: "Contact",
    nav_gh_guide: "GitHub Pages",

    hero_badge: "Folk Traditions & Zen Contemplation",
    hero_quote: "A mind serene as still water; the brush follows the breath to give shape to form. All phenomena are impermanent, yet in the quietude of this moment lies the essence of truth.",
    hero_desc: "Kinh Mai Thuyết Gallery is a tranquil sanctuary where ancient Vietnamese media—natural lacquer, handcrafted Dó paper, raw silk, and gold leaf—converge with modern minimalist aesthetics.",
    btn_explore: "Explore Collection",
    btn_about_artist: "About the Artist",
    featured_badge: "Featured Spotlight",

    gallery_eyebrow: "Selected Works",
    gallery_title: "Artworks & Sediment of Time",
    gallery_subtitle: "Each painting serves as a visual koan, a silent dialogue between the artisan's patient hands and the timeless soul of Vietnamese folk heritage.",

    filter_all: "All Works",
    filter_sonmai: "Traditional Lacquer",
    filter_lua: "Raw Silk",
    filter_mucnho: "Ink Wash on Dó Paper",

    card_view: "View Artwork",
    card_year_prefix: "Year",

    philosophy_quote: "“Painting is not about adding another illusion to the world, but about shedding distractions until primordial truth reveals itself.”",
    philosophy_author: "— Artist Kinh Mai Thuyết",

    about_eyebrow: "Artistic Journey",
    about_title: "About Master Kinh Mai Thuyết",
    about_text_1: "Born along the historic Đuống River in the cultural cradle of Kinh Bắc, Kinh Mai Thuyết was immersed in Vietnamese folk craftsmanship from childhood. He has dedicated his life to mastering heritage techniques: cultivating Phú Thọ natural sap in dark wicker baskets, hand-polishing lacquer surfaces with river mudstone, and dyeing unrefined silk with botanical extracts.",
    about_text_2: "Rooted in Theravada philosophy and the Trúc Lâm Zen tradition, his work deliberately avoids superfluous ornamentation. He allows expansive negative space to speak, offering viewers a place of stillness, contemplation, and inner peace amidst the noise of modern life.",

    exhibitions_title: "Notable Exhibitions & Honors",
    exh_1: "Solo Exhibition “Form & Emptiness” — Vietnam National Museum of Fine Arts, Hanoi",
    exh_2: "Exhibition “Soul of Silk & Earth” — Le Ba Dang Art Centre, Hue Imperial City",
    exh_3: "Group Exhibition “Vietnamese Zen Painting” — Ginza Gallery, Tokyo, Japan",
    exh_4: "Permanent Collection — Lotus Art Foundation, Paris, France",

    contact_eyebrow: "Inquiries & Visits",
    contact_title: "Tea & Art Contemplation",
    contact_subtitle: "You are warmly invited to visit the studio to breathe the aroma of natural lacquer, observe the gentle glow of gold leaf, and converse about art.",

    info_studio_title: "Studio Sanctuary",
    info_studio_desc: "Riverside Pottery Hamlet, Bát Tràng, Hanoi & Quiet Retreat Studio in Ancient Town Hoi An",
    info_time_title: "Visiting Hours",
    info_time_desc: "By appointment only so we may welcome you with freshly brewed lotus tea (Tuesday – Sunday).",
    info_inquiry_title: "Art Acquisitions & Inquiries",
    info_inquiry_desc: "Email: gallery@kinhmaithuyet.art | Tel: (+84) 0912 345 678",

    form_title: "Send a Message to the Artist",
    form_name_label: "Your Name",
    form_name_ph: "Jane Doe",
    form_email_label: "Email Address",
    form_email_ph: "jane.doe@example.com",
    form_art_label: "Artwork of Interest (Optional)",
    form_art_ph: "e.g., Pure Land Lotus, Impermanence...",
    form_msg_label: "Message / Acquisition Inquiry",
    form_msg_ph: "Share your thoughts on the artworks or request an appointment...",
    btn_submit_msg: "Send Message",
    form_success_msg: "Thank you for your sincere message. Master Kinh Mai Thuyết will respond via email shortly!",

    lb_inquire_btn: "Inquire about this artwork",
    lb_close_btn: "Close",
    lb_category_lbl: "Category",
    lb_medium_lbl: "Medium",
    lb_size_lbl: "Dimensions",
    lb_year_lbl: "Year",
    lb_story_lbl: "Contemplation & Philosophy",

    gh_title: "Deploy to GitHub Pages (100% Free)",
    gh_desc: "This website is built with clean static HTML5, CSS3, and Vanilla JavaScript. It is 100% ready to run on GitHub Pages with no build setup required.",
    gh_step_1: "1. Create a new repository on GitHub (e.g. kinhmaithuyet-gallery).",
    gh_step_2: "2. Download/copy 3 files: index.html, style.css, script.js and upload them to the repository root.",
    gh_step_3: "3. In GitHub Settings -> Pages -> Select 'main' branch & '/root' folder -> Save. It goes live in 60 seconds!",
    gh_btn_close: "Got it",

    footer_seal_text: "Thuyết",
    footer_quote: "“Preserve a serene mind, and the brush finds its own truth.”",
    footer_rights: "All artworks and images copyright © Kinh Mai Thuyết. All rights reserved."
  }
};

// --- Application State ---
let currentLang = localStorage.getItem("kmt_gallery_lang") || "vi";
let activeFilter = "all";
let currentArtworkIndex = 0;
let filteredArtworks = [...artworksData];

// --- Initialization on DOM Ready ---
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderGallery();
  initEventListeners();
  initScrollEffects();
});

// --- Language Management ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("kmt_gallery_lang", lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update UI buttons state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Translate all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate input placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(input => {
    const key = input.getAttribute("data-i18n-ph");
    if (translations[lang] && translations[lang][key]) {
      input.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Re-render gallery cards to update localized text
  renderGallery();

  // If lightbox is open, refresh its content in the new language
  const modal = document.getElementById("lightboxModal");
  if (modal && modal.classList.contains("active")) {
    updateLightboxContent();
  }
}

function initLanguage() {
  setLanguage(currentLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });
}

// --- Gallery Rendering ---
function renderGallery() {
  const gridContainer = document.getElementById("galleryGrid");
  if (!gridContainer) return;

  // Filter artworks
  if (activeFilter === "all") {
    filteredArtworks = [...artworksData];
  } else {
    filteredArtworks = artworksData.filter(item => item.category === activeFilter);
  }

  // Clear container
  gridContainer.innerHTML = "";

  // Render cards
  filteredArtworks.forEach((art, index) => {
    const card = document.createElement("article");
    card.className = "art-card";
    card.id = `art-card-${art.id}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${art.title[currentLang]} (${art.year})`);

    const viewBtnText = translations[currentLang]?.card_view || "Xem chi tiết";

    card.innerHTML = `
      <div class="art-image-wrapper">
        <img 
          src="${art.image}" 
          alt="${art.title[currentLang]}" 
          class="art-image" 
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85'"
        />
        <div class="art-card-overlay">
          <span class="overlay-view-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            ${viewBtnText}
          </span>
        </div>
      </div>
      <div class="art-info">
        <div class="art-title-row">
          <h3 class="art-title">${art.title[currentLang]}</h3>
          <span class="art-year">${art.year}</span>
        </div>
        <p class="art-medium">${art.medium[currentLang]}</p>
        <span class="art-dimensions">${art.dimensions}</span>
      </div>
    `;

    // Click handler to open lightbox
    card.addEventListener("click", () => {
      openLightbox(index);
    });

    // Keyboard accessibility
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    gridContainer.appendChild(card);
  });
}

// --- Lightbox Modal Logic ---
function openLightbox(index) {
  currentArtworkIndex = index;
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  updateLightboxContent();

  modal.style.display = "flex";
  // Trigger transition
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);

  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const art = filteredArtworks[currentArtworkIndex];
  if (!art) return;

  const imgEl = document.getElementById("lightboxImage");
  const titleEl = document.getElementById("lightboxTitle");
  const mediumEl = document.getElementById("lightboxMedium");
  const dimensionsEl = document.getElementById("lightboxDimensions");
  const yearEl = document.getElementById("lightboxYear");
  const storyEl = document.getElementById("lightboxStory");
  const inquireBtn = document.getElementById("lightboxInquireBtn");

  if (imgEl) {
    imgEl.src = art.image;
    imgEl.alt = art.title[currentLang];
  }
  if (titleEl) titleEl.textContent = art.title[currentLang];
  if (mediumEl) mediumEl.textContent = art.medium[currentLang];
  if (dimensionsEl) dimensionsEl.textContent = art.dimensions;
  if (yearEl) yearEl.textContent = art.year;
  if (storyEl) storyEl.textContent = art.story[currentLang];

  if (inquireBtn) {
    inquireBtn.textContent = translations[currentLang]?.lb_inquire_btn || "Hỏi mua / Sưu tập bức này";
    inquireBtn.onclick = () => {
      closeLightbox();
      const artInput = document.getElementById("contactArtwork");
      const contactSec = document.getElementById("contact");
      if (artInput) {
        artInput.value = `${art.title[currentLang]} (${art.year})`;
      }
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    };
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }, 300);
}

function showNextArtwork() {
  currentArtworkIndex = (currentArtworkIndex + 1) % filteredArtworks.length;
  updateLightboxContent();
}

function showPrevArtwork() {
  currentArtworkIndex = (currentArtworkIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
  updateLightboxContent();
}

// --- Event Listeners Setup ---
function initEventListeners() {
  // 1. Filter buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter || "all";
      renderGallery();
    });
  });

  // 2. Lightbox controls
  const closeBtn = document.getElementById("lightboxClose");
  const nextBtn = document.getElementById("lightboxNext");
  const prevBtn = document.getElementById("lightboxPrev");
  const modal = document.getElementById("lightboxModal");

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNextArtwork);
  if (prevBtn) prevBtn.addEventListener("click", showPrevArtwork);

  // Close when clicking modal backdrop
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for Lightbox
  window.addEventListener("keydown", (e) => {
    if (modal && modal.classList.contains("active")) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextArtwork();
      if (e.key === "ArrowLeft") showPrevArtwork();
    }
  });

  // 3. Mobile Navigation Toggle
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile nav when clicking any nav link
    mobileNav.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 4. Contact Form Handling
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === "vi" ? "Đang gửi..." : "Sending...";
      }

      setTimeout(() => {
        if (formStatus) {
          formStatus.className = "form-status success";
          formStatus.textContent = translations[currentLang]?.form_success_msg || "Cảm ơn bạn đã gửi lời nhắn!";
          formStatus.style.display = "block";
        }
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = translations[currentLang]?.btn_submit_msg || "Gửi lời nhắn";
        }

        // Hide success message after 7 seconds
        setTimeout(() => {
          if (formStatus) formStatus.style.display = "none";
        }, 7000);
      }, 700);
    });
  }

  // 5. GitHub Pages Helper Modal
  const openGhModalBtn = document.getElementById("openGhGuideBtn");
  const closeGhModalBtn = document.getElementById("closeGhGuideBtn");
  const ghModal = document.getElementById("ghGuideModal");

  if (openGhModalBtn && ghModal) {
    openGhModalBtn.addEventListener("click", () => {
      ghModal.classList.add("active");
    });
  }

  if (closeGhModalBtn && ghModal) {
    closeGhModalBtn.addEventListener("click", () => {
      ghModal.classList.remove("active");
    });
  }

  if (ghModal) {
    ghModal.addEventListener("click", (e) => {
      if (e.target === ghModal) {
        ghModal.classList.remove("active");
      }
    });
  }

  // 6. Scroll to Top
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// --- Scroll Effects & Sticky States ---
function initScrollEffects() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const header = document.querySelector(".site-header");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-desktop .nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Back to top visibility
    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }

    // Active link highlighting
    let currentSec = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSec = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (currentSec && link.getAttribute("href") === `#${currentSec}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}
