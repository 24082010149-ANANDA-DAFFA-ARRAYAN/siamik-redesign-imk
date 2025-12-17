"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Megaphone,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  UserCheck,
  BookOpen,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StudentManagement } from "@/components/admin/student-management"
import { AnnouncementManagement } from "@/components/admin/announcement-management"

export default function AdminPage() {
  const router = useRouter()
  const [activeMenu, setActiveMenu] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    if (userRole !== "admin") {
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

  const stats = [
    {
      title: "Total Mahasiswa",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      title: "Mahasiswa Aktif",
      value: "2,654",
      change: "+8.2%",
      icon: UserCheck,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Total Program Studi",
      value: "15",
      change: "+2",
      icon: BookOpen,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      title: "Semester Aktif",
      value: "Genap 2025/2026",
      change: "Aktif",
      icon: Calendar,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Admin Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col z-50">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Admin SIAMIK</h1>
              <p className="text-xs text-muted-foreground">Control Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => setActiveMenu("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "dashboard" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Dashboard
          </button>

          <button
            onClick={() => setActiveMenu("mahasiswa")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "mahasiswa" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Data Mahasiswa
          </button>

          <button
            onClick={() => setActiveMenu("akademik")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "akademik" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <GraduationCap className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Akademik
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

          <button
            onClick={() => setActiveMenu("laporan")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "laporan" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Laporan
          </button>

          <button
            onClick={() => setActiveMenu("pengaturan")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all group hover:bg-primary/10 ${
              activeMenu === "pengaturan" ? "bg-primary/20 text-primary" : "text-muted-foreground"
            }`}
          >
            <Settings className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Pengaturan
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
      <main className="ml-64 min-h-screen">
        <div className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {activeMenu === "dashboard" && "Dashboard Admin"}
                  {activeMenu === "mahasiswa" && "Manajemen Data Mahasiswa"}
                  {activeMenu === "akademik" && "Manajemen Akademik"}
                  {activeMenu === "pengumuman" && "Manajemen Pengumuman"}
                  {activeMenu === "laporan" && "Laporan & Statistik"}
                  {activeMenu === "pengaturan" && "Pengaturan Sistem"}
                </h1>
                <p className="text-sm text-muted-foreground mt-1">Selamat datang di panel administrasi SIAMIK</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right mr-2">
                  <p className="text-sm font-medium">Administrator</p>
                  <p className="text-xs text-muted-foreground">admin</p>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          {activeMenu === "dashboard" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                          <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-primary">
                          <TrendingUp className="w-4 h-4" />
                          {stat.change}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Aksi Cepat</CardTitle>
                  <CardDescription>Fitur yang sering digunakan administrator</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Button
                      variant="outline"
                      className="h-auto py-6 justify-start hover:bg-primary/10 hover:border-primary/50 transition-all group bg-transparent"
                      onClick={() => setActiveMenu("mahasiswa")}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-emerald-500/10">
                          <Users className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Tambah Mahasiswa</p>
                          <p className="text-xs text-muted-foreground">Daftarkan mahasiswa baru</p>
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 justify-start hover:bg-primary/10 hover:border-primary/50 transition-all group bg-transparent"
                      onClick={() => setActiveMenu("pengumuman")}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-blue-500/10">
                          <Megaphone className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Buat Pengumuman</p>
                          <p className="text-xs text-muted-foreground">Publikasikan pengumuman</p>
                        </div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="h-auto py-6 justify-start hover:bg-primary/10 hover:border-primary/50 transition-all group bg-transparent"
                      onClick={() => setActiveMenu("laporan")}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-violet-500/10">
                          <FileText className="w-6 h-6 text-violet-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium">Lihat Laporan</p>
                          <p className="text-xs text-muted-foreground">Statistik dan analitik</p>
                        </div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Aktivitas Terbaru</CardTitle>
                  <CardDescription>Log aktivitas sistem dalam 24 jam terakhir</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "Mahasiswa baru terdaftar",
                        detail: "ANANDA DAFFA ARRAYAN - 24082010149",
                        time: "2 jam yang lalu",
                        color: "text-emerald-500",
                      },
                      {
                        action: "Pengumuman dipublikasikan",
                        detail: "Keringanan UKT Semester Genap",
                        time: "5 jam yang lalu",
                        color: "text-blue-500",
                      },
                      {
                        action: "KRS disetujui",
                        detail: "125 mahasiswa telah disetujui",
                        time: "8 jam yang lalu",
                        color: "text-violet-500",
                      },
                      {
                        action: "Backup database selesai",
                        detail: "Backup otomatis berhasil",
                        time: "12 jam yang lalu",
                        color: "text-orange-500",
                      },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-card/50 transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 ${activity.color.replace("text-", "bg-")}`} />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.detail}</p>
                        </div>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeMenu === "mahasiswa" && <StudentManagement />}

          {activeMenu === "akademik" && (
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Manajemen Akademik</CardTitle>
                <CardDescription>Kelola data akademik, kurikulum, dan jadwal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fitur manajemen akademik akan ditambahkan di sini.</p>
              </CardContent>
            </Card>
          )}

          {activeMenu === "pengumuman" && <AnnouncementManagement />}

          {activeMenu === "laporan" && (
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Laporan & Statistik</CardTitle>
                <CardDescription>Lihat laporan dan analitik sistem</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fitur laporan dan statistik akan ditambahkan di sini.</p>
              </CardContent>
            </Card>
          )}

          {activeMenu === "pengaturan" && (
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Pengaturan Sistem</CardTitle>
                <CardDescription>Konfigurasi dan pengaturan aplikasi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Fitur pengaturan sistem akan ditambahkan di sini.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
