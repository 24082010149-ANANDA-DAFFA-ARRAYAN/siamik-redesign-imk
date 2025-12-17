"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Printer, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TranskripPage() {
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
    { no: 1, kode: "UV21010", nama: "Bahasa Inggris", sks: 3, nilai: "A", semester: "01", kredit: 4, nxk: 12 },
    { no: 2, kode: "UV21007", nama: "Pancasila", sks: 2, nilai: "A", semester: "01", kredit: 4, nxk: 8 },
    {
      no: 3,
      kode: "SI231118",
      nama: "MATEMATIKA KOMPUTASI",
      sks: 3,
      nilai: "A-",
      semester: "01",
      kredit: 3.75,
      nxk: 11.25,
    },
    { no: 4, kode: "SI231104", nama: "BAHASA PEMROGRAMAN 1", sks: 3, nilai: "A", semester: "01", kredit: 4, nxk: 12 },
    { no: 5, kode: "SI231103", nama: "LOGIKA & ALGORITMA", sks: 3, nilai: "A", semester: "01", kredit: 4, nxk: 12 },
    {
      no: 6,
      kode: "SI231102",
      nama: "PENGANTAR SISTEM INFORMASI",
      sks: 3,
      nilai: "B+",
      semester: "01",
      kredit: 3.5,
      nxk: 10.5,
    },
    {
      no: 7,
      kode: "SI231105",
      nama: "PENGETAHUAN BISNIS",
      sks: 3,
      nilai: "A-",
      semester: "01",
      kredit: 3.75,
      nxk: 11.25,
    },
    { no: 8, kode: "UV21001", nama: "Agama Islam", sks: 2, nilai: "A", semester: "02", kredit: 4, nxk: 8 },
    { no: 9, kode: "UV21008", nama: "Kewarganegaraan", sks: 2, nilai: "B+", semester: "02", kredit: 3.5, nxk: 7 },
    {
      no: 10,
      kode: "SI231109",
      nama: "MANAJEMEN SISTEM OPERASI",
      sks: 3,
      nilai: "C+",
      semester: "02",
      kredit: 2.5,
      nxk: 7.5,
    },
    {
      no: 11,
      kode: "SI231108",
      nama: "ANALISIS PROSES BISNIS",
      sks: 3,
      nilai: "A",
      semester: "02",
      kredit: 4,
      nxk: 12,
    },
    {
      no: 12,
      kode: "SI231112",
      nama: "SISTEM INFORMASI MANAJEMEN",
      sks: 3,
      nilai: "A",
      semester: "02",
      kredit: 4,
      nxk: 12,
    },
    {
      no: 13,
      kode: "SI231106",
      nama: "BAHASA PEMROGRAMAN 2",
      sks: 3,
      nilai: "B+",
      semester: "02",
      kredit: 3.5,
      nxk: 10.5,
    },
    { no: 14, kode: "SI231107", nama: "BASIS DATA", sks: 3, nilai: "B", semester: "02", kredit: 3, nxk: 9 },
  ]

  const totalSKS = 39
  const totalNxK = 143
  const ipk = 3.667

  const getGradeColor = (nilai: string) => {
    if (nilai === "A") return "text-emerald-400 bg-emerald-500/10"
    if (nilai === "A-") return "text-green-400 bg-green-500/10"
    if (nilai === "B+") return "text-teal-400 bg-teal-500/10"
    if (nilai === "B") return "text-blue-400 bg-blue-500/10"
    if (nilai === "C+") return "text-yellow-400 bg-yellow-500/10"
    return "text-muted-foreground bg-muted/10"
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push("/dashboard")}
                className="hover:bg-primary/10 hover:text-primary transition-all group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-balance">Transkrip Nilai</h1>
                  <p className="text-sm text-muted-foreground">Rekap nilai akademik</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="gap-2 hover:bg-primary/10 hover:text-primary transition-all bg-transparent"
              >
                <Printer className="w-4 h-4" />
                Cetak
              </Button>
              <Button className="gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 transition-all">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-6">
          {/* Student Info Card */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground font-medium min-w-[80px]">NPM</span>
                  <span className="font-semibold">24082010149</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground font-medium min-w-[80px]">Nama</span>
                  <span className="font-semibold">ANANDA DAFFA ARRAYAN</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground font-medium min-w-[100px]">Kelamin</span>
                  <span className="font-semibold">Laki-laki</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground font-medium min-w-[100px]">Dosen Wali</span>
                  <span className="font-semibold">Eristya Maya Safitri, S.Kom,M.Kom.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-muted-foreground text-sm mb-2">Indeks Prestasi Kumulatif</div>
              <div className="text-3xl font-bold text-emerald-400">{ipk.toFixed(3)}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border border-blue-500/20 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-muted-foreground text-sm mb-2">SKS Kumulatif</div>
              <div className="text-3xl font-bold text-blue-400">{totalSKS}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-muted-foreground text-sm mb-2">Total Nilai x SKS</div>
              <div className="text-3xl font-bold text-purple-400">{totalNxK}</div>
            </div>
          </div>

          {/* Transcript Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary/20 to-primary/10 border-b border-border">
                    <th className="px-4 py-4 text-left text-sm font-semibold">No</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Kode</th>
                    <th className="px-4 py-4 text-left text-sm font-semibold">Mata Kuliah</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">SKS</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">Nilai</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">Semester</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">Kredit</th>
                    <th className="px-4 py-4 text-center text-sm font-semibold">nxk</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr
                      key={index}
                      className={`border-b border-border hover:bg-primary/5 transition-colors ${
                        index % 2 === 0 ? "bg-muted/5" : ""
                      }`}
                    >
                      <td className="px-4 py-3 text-sm">{course.no}</td>
                      <td className="px-4 py-3 text-sm font-medium text-primary">{course.kode}</td>
                      <td className="px-4 py-3 text-sm font-medium">{course.nama}</td>
                      <td className="px-4 py-3 text-sm text-center">{course.sks}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(
                            course.nilai,
                          )}`}
                        >
                          {course.nilai}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-center">{course.semester}</td>
                      <td className="px-4 py-3 text-sm text-center font-medium">{course.kredit}</td>
                      <td className="px-4 py-3 text-sm text-center font-medium">{course.nxk}</td>
                    </tr>
                  ))}
                  <tr className="bg-gradient-to-r from-primary/20 to-primary/10 font-bold">
                    <td colSpan={3} className="px-4 py-4 text-sm">
                      TOTAL
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-primary">{totalSKS}</td>
                    <td colSpan={2} className="px-4 py-4"></td>
                    <td className="px-4 py-4 text-sm text-center"></td>
                    <td className="px-4 py-4 text-sm text-center text-primary">{totalNxK}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Transkrip ini dicetak dari SIAMIK UPN Veteran Jawa Timur</p>
            <p className="mt-1">Surabaya, 20 Desember 2025</p>
          </div>
        </div>
      </main>
    </div>
  )
}
