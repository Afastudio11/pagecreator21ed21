import { Calendar, Clock, MapPin, CheckCircle2, TrendingUp, Users, ShieldCheck, Video } from "lucide-react";

import speaker1 from "@assets/2_1765434496028.png"; // Leonardus (White jacket)
import speaker2 from "@assets/4_1765434496027.png"; // Yosef (Green jacket)
import speaker3 from "@assets/3_1765434496028.png"; // Muhammad (Black suit)

export const EVENT_DETAILS = {
  title: "F&B TikTok & Affiliate Strategy",
  subtitle: "Ingin jualan F&B tembus jutaan lewat konten TikTok & Affiliate?",
  date: "Sabtu, 31 Januari 2025",
  time: "10:00 - 13:00 WIB",
  location: "SAE Indonesia",
  address: "Jl. Pejaten Raya No.31, Pasar Minggu, Kota Jakarta Selatan",
  contact: "+62 853-5210-0082",
  price: {
    original: "500.000",
    promo: "199.000",
    special: "179.000", // Daftar bareng 5 orang
  },
  benefits: [
    "Free Lunch",
    "Free Goodie Bag Eksklusif",
    "Voucher Diskon Jasa Fine Creative Senilai Jutaan Rupiah",
    "Booklet Premium (20 peserta tercepat)"
  ],
  targetAudience: [
    "Pemilik bisnis F&B",
    "Content Creator",
    "Affiliate Marketer",
    "Tim Marketing Brand F&B"
  ]
};

export const LEARNING_POINTS = [
  {
    icon: Video,
    title: "Konten F&B yang Viral & Menjual",
    description: "Framework konten organik yang terbukti ningkatin reach & transaksi."
  },
  {
    icon: TrendingUp,
    title: "Mindset & Ekosistem TikTok & Shopee",
    description: "Cara kerja algoritma dan cara optimasinya sebagai mesin penjualan digital."
  },
  {
    icon: Users,
    title: "Program Affiliate sebagai Mesin Transaksi",
    description: "Cara rekrut, kelola, dan evaluasi affiliator/kreator."
  },
  {
    icon: ShieldCheck,
    title: "Legalitas Brand",
    description: "Apa yang wajib ada sebelum ekspansi online/offline sebagai pondasi scale up."
  },
  {
    icon: TrendingUp,
    title: "Strategi Growth",
    description: "Sistem marketing yang repeatable dari awareness ke omzet, bukan coba-coba."
  }
];

export const SPEAKERS = [
  {
    id: 1,
    name: "Leonardus W. Lingga",
    role: "CEO Fine Creative",
    bio: "Pakar marketing lulusan Macquarie University yang berpengalaman lebih dari 7 tahun. Berpengalaman menangani 600+ brand di Indonesia.",
    image: speaker1,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 2,
    name: "Yosef Abas",
    role: "Official Partner TikTok & Shopee",
    bio: "Marketing affiliate mentor untuk puluhan brand yang berhasil menjual produk hingga 1 M lewat 2 jam live di TikTok.",
    image: speaker2,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    name: "Muhammad Philosophi",
    role: "CEO Documenta",
    bio: "Legal & business expert lebih dari 10 tahun, dipercaya oleh Torch, Jaya Beton, Wartsila.",
    image: speaker3,
    color: "from-blue-500 to-cyan-500"
  }
];

export const PAIN_POINTS = [
  "Konten TikTok sering posting, tapi penjualan stuck.",
  "Banyak orang liat, tapi checkout tetap sepi.",
  "Udah coba affiliate, tapi hasilnya gak kerasa.",
  "Bingung cara pilih dan kelola influencer/KOL yang bener.",
  "Produk sudah siap scale, tapi legalitas belum aman."
];

export const BONUSES = [
  { icon: "gift", title: "Free Goodie Bag Eksklusif" },
  { icon: "utensils", title: "Free Lunch" },
  { icon: "ticket", title: "Voucher Diskon Jasa Fine Creative Senilai Jutaan Rupiah" },
  { icon: "book", title: "Booklet Premium \"Unique Marketing Signature\" (senilai 149K)", note: "Khusus untuk 20 peserta tercepat" }
];

export const PRIZES = [
  {
    rank: 1,
    medal: "gold",
    items: [
      "Diskon Pendaftaran Merek Rp400.000",
      "Voucher layanan legal Rp1.000.000",
      "Free konsultasi"
    ]
  },
  {
    rank: 2,
    medal: "silver",
    items: [
      "Diskon Pendaftaran Merek Rp400.000",
      "Voucher Rp700.000",
      "Free konsultasi"
    ]
  },
  {
    rank: 3,
    medal: "bronze",
    items: [
      "Diskon Pendaftaran Merek Rp400.000",
      "Voucher Rp500.000",
      "Free konsultasi"
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Setelah ikut event, konten kami langsung naik view & affiliate jadi aktif. Omzet naik signifikan!",
    author: "Owner Brand F&B"
  },
  {
    quote: "Penjelasannya simple tapi praktikal, langsung bisa dipraktikkan untuk brand kami.",
    author: "Team Marketing F&B"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Apakah event ini cocok untuk pemula?",
    answer: "Cocok. Materi dijelaskan dari dasar hingga strategi praktis yang bisa langsung diterapkan, bahkan jika baru mulai."
  },
  {
    question: "Apakah saya akan mendapatkan rekaman acara?",
    answer: "Tidak. Tidak ada rekaman, jadi pastikan hadir agar mendapat seluruh materi dan sesi tanya jawab."
  },
  {
    question: "Apa saja yang saya dapat setelah membeli tiket?",
    answer: "Free lunch, goodie bag, booklet (20 peserta tercepat), voucher jutaan rupiah, akses workshop penuh, dan kesempatan menang hadiah untuk 3 peserta terbaik."
  },
  {
    question: "Apakah event ini hanya untuk bisnis F&B?",
    answer: "Fokus utamanya F&B, tapi content creator, affiliate, dan pemilik brand non-F&B juga bisa ikut jika ingin belajar strategi konten dan affiliate."
  },
  {
    question: "Apakah saya mendapat sertifikat?",
    answer: "Tidak. Acara ini tidak menyediakan sertifikat, karena fokus utamanya adalah praktik dan strategi yang langsung bisa diterapkan."
  }
];
