export const blogPosts = [
  {
    slug: "pour-over-huong-dan-co-ban",
    category: "Pha chế",
    title: "Pour Over — Nghệ thuật pha cà phê bằng tay",
    description:
      "Pour over không chỉ là cách pha cà phê, đó là một nghi thức. Từng giọt nước nóng chảy qua lớp bột cà phê mang theo hương vị tinh tế mà máy móc khó lòng sao chép được.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    date: "2026-04-10",
    readTime: "5 phút",
    author: "Kohi Team",
    featured: true,
  },
  {
    slug: "cold-brew-24-gio",
    category: "Pha chế",
    title: "Cold Brew 24 giờ — Chậm mà chắc",
    description:
      "Không cần nhiệt độ, chỉ cần thời gian. Cold brew ủ 24 giờ cho ra một ly cà phê mượt mà, ít đắng, và giàu caffeine hơn bạn nghĩ.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    date: "2026-04-18",
    readTime: "4 phút",
    author: "Kohi Team",
    featured: false,
  },
  {
    slug: "arabica-vs-robusta",
    category: "Kiến thức",
    title: "Arabica vs Robusta — Đâu là sự khác biệt?",
    description:
      "Hai giống cà phê phổ biến nhất thế giới, hai tính cách hoàn toàn khác nhau. Hiểu được sự khác biệt sẽ giúp bạn chọn được ly cà phê đúng ý.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    date: "2026-04-25",
    readTime: "6 phút",
    author: "Kohi Team",
    featured: false,
  },
  {
    slug: "ca-phe-viet-nam-lich-su",
    category: "Văn hóa",
    title: "Cà phê Việt Nam — Từ thuộc địa đến bản sắc",
    description:
      "Người Pháp mang cây cà phê vào Việt Nam, nhưng người Việt đã biến nó thành thứ hoàn toàn của riêng mình. Câu chuyện về phin, sữa đặc và văn hóa vỉa hè.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
    date: "2026-05-01",
    readTime: "7 phút",
    author: "Kohi Team",
    featured: false,
  },
  {
    slug: "kissaten-ca-phe-nhat",
    category: "Văn hóa",
    title: "Kissaten — Quán cà phê Nhật Bản và sự tĩnh lặng",
    description:
      "Giữa thành phố ồn ào, kissaten là nơi người Nhật tìm lại chính mình. Không wifi, không laptop — chỉ có âm nhạc jazz, tách cà phê và khoảnh khắc hiện tại.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    date: "2026-05-03",
    readTime: "5 phút",
    author: "Kohi Team",
    featured: false,
  },
  {
    slug: "rang-ca-phe-tai-nha",
    category: "Pha chế",
    title: "Rang cà phê tại nhà — Khó hay dễ?",
    description:
      "Bạn có thể rang cà phê ngay tại bếp nhà mình chỉ với một chiếc chảo. Kết quả không hoàn hảo, nhưng hành trình thì đáng giá hơn bạn tưởng.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    date: "2026-05-04",
    readTime: "5 phút",
    author: "Kohi Team",
    featured: false,
  },
];

export const featuredPost = blogPosts.find((p) => p.featured);
export const latestPosts = blogPosts.filter((p) => !p.featured);
