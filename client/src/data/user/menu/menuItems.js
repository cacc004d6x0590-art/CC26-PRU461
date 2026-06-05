import { Award, FileText, LayoutDashboard, Settings } from "lucide-react";

export const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    desc: "Selamat datang kembali, User",
    path: "/user/dashboard",
    active: true,
  },
  {
    icon: FileText,
    label: "Tes Minat & Kemampuan",
    desc: "Lengkapi semua pertanyaan dengan jujur",
    path: "/user/test",
    active: false,
  },
  {
    icon: Award,
    label: "Hasil Rekomendasi",
    desc: "Berdasarkan analisis AI terhadap minat & kemampuanmu",
    path: "/user/result",
    active: false,
  },
  {
    icon: Settings,
    label: "Pengaturan",
    desc: "",
    path: "/user/setting",
    active: false,
  },
];
