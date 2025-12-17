"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Printer, Download, Calendar, GraduationCap } from "lucide-react"

export default function KRSPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    if (userRole !== "user") {
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const courses = [
    {
      no: 1,
      code: "SI231110",
      name: "DESAIN MANAJEMEN JARINGAN",
      sks: 3,
      class: "D082",
      room: "Gd. FIK II - 204",
      date: "8/20/2025 12:59:29 PM",
    },
    {
      no: 2,
      code: "SI231114",
      name: "PEMROGRAMAN DESKTOP",
      sks: 3,
      class: "D082",
      room: "GD FIK / 204",
      date: "8/18/2025 1:18:19 AM",
    },
    {
      no: 3,
      code: "SI231115",
      name: "ADMINISTRASI BASIS DATA",
      sks: 3,
      class: "D082",
      room: "GD FIK / 204",
      date: "8/18/2025 12:09:13 AM",
    },
    {
      no: 4,
      code: "SI231119",
      name: "INTERAKSI MANUSIA KOMPUTER",
      sks: 3,
      class: "D082",
      room: "Gd. FIK II - 107",
      date: "8/18/2025 12:59:30 AM",
    },
    {
      no: 5,
      code: "SI231130",
      name: "TATA KELOLA TEKNOLOGI INFORMASI",
      sks: 3,
      class: "D082",
      room: "Gd. FIK II - 304",
      date: "8/18/2025 1:18:37 AM",
    },
    {
      no: 6,
      code: "SI231137",
      name: "METODOLOGI PENELITIAN",
      sks: 2,
      class: "D082",
      room: "TWIN TOWER B / R.9.5",
      date: "8/18/2025 1:16:51 AM",
    },
    {
      no: 7,
      code: "SI231139",
      name: "ANALISIS DESAIN SISTEM INFORMASI",
      sks: 3,
      class: "D082",
      room: "TWIN TOWER B / R.9.5",
      date: "8/18/2025 12:40:57 AM",
    },
    {
      no: 8,
      code: "UV21011",
      name: "BELA NEGARA",
      sks: 3,
      class: "G189",
      room: "GKB R.V-3",
      date: "8/18/2025 1:51:24 AM",
    },
  ]

  const totalSKS = courses.reduce((sum, course) => sum + course.sks, 0)

  const handlePrint = () => {
    window.print()
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40 print:hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Kembali</span>
            </button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold text-primary">Kartu Rencana Studi</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              <Printer className="w-4 h-4" />
              Cetak
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-card/80 transition-all hover:shadow-md">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* University Header */}
        <div className="bg-card border border-border rounded-xl p-8 mb-6 shadow-lg">
          <div className="text-center space-y-2">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi
            </h2>
            <h3 className="text-lg font-bold text-foreground">Universitas Pembangunan Nasional "Veteran"</h3>
            <h4 className="text-base font-semibold text-primary">J A W A T I M U R</h4>
            <div className="w-64 h-px bg-border mx-auto mt-4" />
          </div>

          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-primary mb-2">KARTU RENCANA STUDI</h1>
          </div>
        </div>

        {/* Student Info */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">NPM</p>
                  <p className="font-semibold text-lg">24082010149</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Nama Mahasiswa</p>
                <p className="font-semibold text-lg">ANANDA DAFFA ARRAYAN</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Semester</p>
                  <p className="font-semibold">Semester Ganjil TA.2025/2026</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total SKS</p>
                <p className="font-semibold text-2xl text-primary">{totalSKS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10 border-b border-border">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">No</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">Kode</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">Nama Kuliah</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">SKS</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">Kelas</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">Ruang</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={course.no}
                    className={`border-b border-border hover:bg-primary/5 transition-colors ${
                      index % 2 === 0 ? "bg-background" : "bg-card/50"
                    }`}
                  >
                    <td className="px-4 py-4 text-sm">{course.no}</td>
                    <td className="px-4 py-4 text-sm font-medium">{course.code}</td>
                    <td className="px-4 py-4 text-sm font-medium">{course.name}</td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                        {course.sks}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">{course.class}</td>
                    <td className="px-4 py-4 text-sm">{course.room}</td>
                    <td className="px-4 py-4 text-sm text-muted-foreground">{course.date}</td>
                  </tr>
                ))}
                <tr className="bg-primary/10 font-semibold">
                  <td colSpan={3} className="px-4 py-4 text-sm text-right">
                    Total SKS:
                  </td>
                  <td className="px-4 py-4 text-sm text-center">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {totalSKS}
                    </span>
                  </td>
                  <td colSpan={3}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">Surabaya, 8/20/2025 12:59:29 PM</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold mb-16">Dosen Wali</p>
              <p className="text-sm font-medium">(Eristya Maya Safitri, S.Kom,M.Kom.)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
