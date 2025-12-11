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
    "Doorprize Menarik",
    "Goodie Bag Eksklusif",
    "Free Lunch",
    "Networking Session"
  ]
};

export const LEARNING_POINTS = [
  {
    icon: Video,
    title: "Viral & Selling Content",
    description: "Strategi Membuat Konten yang Gak Cuma Viral, Tapi Juga Menjual."
  },
  {
    icon: TrendingUp,
    title: "Ecosystem Mastery",
    description: "Memahami Ekosistem TikTok & Shopee Sebagai Mesin Penjualan Digital."
  },
  {
    icon: Users,
    title: "Affiliate Optimization",
    description: "Mengoptimalkan Program Affiliate Sebagai Mesin Transaksi."
  },
  {
    icon: ShieldCheck,
    title: "Brand Legality",
    description: "Legalitas Brand Sebagai Pondasi Sebelum Scale Up."
  },
  {
    icon: TrendingUp, // Reusing icon for growth
    title: "Growth Strategy",
    description: "Merangkai Strategi Growth dari Awareness ke Omzet."
  }
];

export const SPEAKERS = [
  {
    id: 1,
    name: "Leonardus W. Lingga",
    role: "CEO of Fine Creative",
    bio: "Pakar marketing lulusan Macquarie University, dipercaya lebih dari 600 brand.",
    image: speaker1,
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 2,
    name: "Yosef Abas",
    role: "CEO of RKP Manajemen",
    bio: "TikTok & Shopee official partner, marketing affiliate mentor.",
    image: speaker2,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    name: "Muhammad Philosophi",
    role: "CEO of Documenta",
    bio: "Legal & business expert, dipercaya oleh Torch, Jaya Beton, Wartsila.",
    image: speaker3,
    color: "from-blue-500 to-cyan-500"
  }
];
