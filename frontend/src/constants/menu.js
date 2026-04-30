export const MENU_ITEMS = [
  {
    icon: "☕",
    title: "Rang thủ công",
    desc: "Chúng tôi thực hiện rang thủ công với sự kiểm soát chặt chẽ về nhiệt độ và thời gian, nhằm làm nổi bật đặc tính riêng của từng loại hạt và đảm bảo hương vị cân bằng, ổn định trong từng mẻ.",
  },
  {
    icon: "📦",
    title: "Đặt trước, nhận ngay",
    desc: "Hệ thống đặt hàng trực tuyến cho phép khách hàng chủ động lựa chọn và nhận đồ uống ngay khi đến quán, tối ưu thời gian và đảm bảo quy trình phục vụ nhanh chóng, liền mạch.",
  },
  {
    icon: "🌿",
    title: "Nguyên liệu tự nhiên",
    desc: "Nguyên liệu được tuyển chọn kỹ lưỡng từ nguồn gốc đáng tin cậy, không sử dụng chất bảo quản, nhằm giữ trọn hương vị tự nhiên và mang đến trải nghiệm cà phê thuần khiết.",
  },
];

export const MENU_PRODUCTS = [
  {
    _id: "1",
    name: "Cà Phê Đen",
    description: "Hương vị thuần túy, đậm đà và tinh tế",
    price: 35000,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  },
  {
    _id: "2",
    name: "Cà Phê Trứng",
    description: "Đặc sản Hà Nội — kem trứng mịn béo trên nền cà phê đậm",
    price: 55000,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  },
  {
    _id: "3",
    name: "Matcha Latte",
    description: "Bột matcha Nhật Bản hảo hạng, kết hợp sữa tươi béo ngậy",
    price: 55000,
    category: "tea",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80",
  },
  {
    _id: "4",
    name: "Croissant Bơ",
    description: "Vỏ giòn tan, ruột mềm thơm bơ Pháp nhập khẩu",
    price: 35000,
    category: "pastry",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
  },
];

export const ORIGIN_LIST = [
  {
    id: 1,
    region: "Buôn Ma Thuột",
    province: "Đắk Lắk",
    altitude: "500 - 800m",
    desc: "Thủ phủ cà phê Việt Nam. Đất đỏ bazan màu mỡ tạo nên hạt Robusta đậm đà, body dày với hương vị đặc trưng khó quên.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80",
  },
  {
    id: 2,
    region: "Đà Lạt",
    province: "Lâm Đồng",
    altitude: "1.500m",
    desc: "Khí hậu ôn đới mát lạnh nuôi dưỡng hạt Arabica tinh tế. Hương hoa quả nhẹ nhàng, vị chua thanh dịu, body mượt.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
  },
  {
    id: 3,
    region: "Sơn La",
    province: "Tây Bắc",
    altitude: "800 – 1.200m",
    desc: "Vùng trồng mới nổi với Arabica chất lượng cao. Biên độ nhiệt lớn giữa ngày và đêm tạo độ phức hợp hương vị độc đáo.",
    image:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800&q=80",
  },
];

export const BEAN_LIST = [
  {
    id: 1,
    name: "Arabica",
    latin: "Coffea arabica",
    ratio: "30%",
    flavor: ["Hoa quả", "Chua thanh", "Ngọt dịu"],
    desc: "Hạt cà phê thuộc dòng Arabica cao cấp, được trồng ở độ cao trên 1.000m với điều kiện khí hậu mát mẻ giúp quá trình chín diễn ra chậm và ổn định. Nhờ đó, hạt phát triển hương thơm tinh tế, độ chua thanh và hàm lượng caffeine thấp. KOHI sử dụng Arabica Đà Lạt cho các phương pháp pha như cold brew và pour-over nhằm tôn lên sự trong trẻo và cân bằng của hương vị.",
    image: "https://images.pexels.com/photos/7657848/pexels-photo-7657848.jpeg",
    color: "bg-coffee-200",
  },
  {
    id: 2,
    name: "Robusta",
    latin: "Coffea canephora",
    ratio: "70%",
    flavor: ["Đắng đậm", "Chocola", "Đất rừng"],
    desc: "Là giống cà phê chủ lực tại Việt Nam, Robusta nổi bật với hương vị mạnh mẽ, body dày và lớp crema bền vững. Được trồng chủ yếu tại Buôn Ma Thuột, loại hạt này mang đặc trưng đậm đà và hậu vị rõ rệt. KOHI lựa chọn Robusta rang ở mức medium-dark để phù hợp với phương pháp pha phin truyền thống và espresso, mang lại trải nghiệm đậm sâu và tròn vị.",
    image:
      "https://images.pexels.com/photos/34906750/pexels-photo-34906750.jpeg",
    color: "bg-coffee-800",
  },
];
