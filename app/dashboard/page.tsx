"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Home, User, Megaphone, LogOut } from "lucide-react"
import { BannerCarousel } from "@/components/banner-carousel"
import { ServiceCard } from "@/components/service-card"
import { UserProfile } from "@/components/user-profile"
import { AnnouncementCard } from "@/components/announcement-card"

export default function DashboardPage() {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState("beranda")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    if (userRole !== "user") {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("userId")
    router.push("/login")
  }

  const services = [
    {
      icon: "📝",
      title: "Cetak KRS",
      description: "Cetak Kartu Rencana Studi semester aktif",
      color: "from-emerald-500 to-green-600",
      onClick: () => router.push("/krs"),
    },
    {
      icon: "📚",
      title: "Presensi Kuliah",
      description: "Lihat rekap kehadiran perkuliahan",
      color: "from-teal-500 to-cyan-600",
      onClick: () => router.push("/presensi"),
    },
    {
      icon: "🔄",
      title: "Konversi MBKM",
      description: "Konversi nilai Merdeka Belajar Kampus Merdeka",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "📄",
      title: "Bukti Registrasi",
      description: "Download bukti registrasi mahasiswa",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: "🗓️",
      title: "Kartu Rencana Praktikum",
      description: "Jadwal dan rencana praktikum semester ini",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: "📊",
      title: "Transkrip",
      description: "Lihat transkrip nilai akademik",
      color: "from-orange-500 to-red-600",
      onClick: () => router.push("/transkrip"),
    },
    {
      icon: "📋",
      title: "Daftar PKL",
      description: "Pendaftaran Praktik Kerja Lapangan",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: "🎓",
      title: "Daftar Skripsi",
      description: "Pendaftaran dan pengajuan skripsi",
      color: "from-lime-500 to-green-600",
    },
    {
      icon: "💬",
      title: "Daftar Ujian Lesan",
      description: "Jadwal ujian sidang dan lesan",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: "💳",
      title: "Info Bayar UKT",
      description: "Informasi pembayaran dan tagihan UKT",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-56 bg-card border-r border-border flex flex-col z-50">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-primary">SIAMIK</h1>
          <p className="text-xs text-muted-foreground mt-1">UPN Veteran Jawa Timur</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveMenu("beranda")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "beranda" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Beranda
          </button>

          <button
            onClick={() => setActiveMenu("akun")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "akun" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Akun
          </button>

          <button
            onClick={() => setActiveMenu("pengumuman")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "pengumuman" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <Megaphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Pengumuman
          </button>
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-destructive hover:bg-destructive/10 transition-all group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-56 min-h-screen">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          {activeMenu === "beranda" && (
            <div className="space-y-8">
              {/* Banner Carousel */}
              <BannerCarousel />

              {/* Applications & Services Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-balance">Aplikasi dan Layanan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeMenu === "akun" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Informasi Akun</h2>
              <UserProfile />
            </div>
          )}

          {activeMenu === "pengumuman" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Pengumuman</h2>
              <div className="space-y-4">
                <AnnouncementCard
                  title="Keringanan UKT Semester Genap"
                  date="18 Desember 2025"
                  description="KERINGANAN UKT SEMESTER GENAP 2025/2026 Batas Pendaftaran: s.d 23 Desember 2025 Informasi lebih lanjut..."
                />
                <AnnouncementCard
                  title="Jadwal UTS Semester Genap 2025"
                  date="15 Desember 2025"
                  description="Pengumuman jadwal Ujian Tengah Semester (UTS) untuk semester genap tahun akademik 2025/2026..."
                />
                <AnnouncementCard
                  title="Batas Akhir Pengisian KRS"
                  date="10 Desember 2025"
                  description="Batas waktu pengisian Kartu Rencana Studi (KRS) diperpanjang hingga tanggal 20 Desember 2025..."
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
