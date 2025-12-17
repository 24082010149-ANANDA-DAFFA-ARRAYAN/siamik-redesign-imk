"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PresensiPage() {
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

  const attendanceData = [
    {
      no: 1,
      kodeKuliah: "SI231110",
      namaMataKuliah: "DESAIN MANAJEMEN JARINGAN",
      sks: 3,
      kelas: "D082",
      kehadiran: "100.00%",
    },
    {
      no: 2,
      kodeKuliah: "SI231114",
      namaMataKuliah: "PEMROGRAMAN DESKTOP",
      sks: 3,
      kelas: "D082",
      kehadiran: "100.00%",
    },
    {
      no: 3,
      kodeKuliah: "SI231139",
      namaMataKuliah: "ANALISIS DESAIN SISTEM INFORMASI",
      sks: 3,
      kelas: "D082",
      kehadiran: "100.00%",
    },
    {
      no: 4,
      kodeKuliah: "SI231119",
      namaMataKuliah: "INTERAKSI MANUSIA KOMPUTER",
      sks: 3,
      kelas: "D082",
      kehadiran: "93.75%",
    },
    {
      no: 5,
      kodeKuliah: "SI231115",
      namaMataKuliah: "ADMINISTRASI BASIS DATA",
      sks: 3,
      kelas: "D082",
      kehadiran: "93.75%",
    },
    {
      no: 6,
      kodeKuliah: "SI231130",
      namaMataKuliah: "TATA KELOLA TEKNOLOGI INFORMASI",
      sks: 3,
      kelas: "D082",
      kehadiran: "93.75%",
    },
    {
      no: 7,
      kodeKuliah: "SI231137",
      namaMataKuliah: "METODOLOGI PENELITIAN",
      sks: 2,
      kelas: "D082",
      kehadiran: "100.00%",
    },
    {
      no: 8,
      kodeKuliah: "UV21011",
      namaMataKuliah: "BELA NEGARA",
      sks: 3,
      kelas: "G189",
      kehadiran: "100.00%",
    },
  ]

  const getAttendanceColor = (percentage: string) => {
    const value = Number.parseFloat(percentage)
    if (value === 100) return "text-green-500"
    if (value >= 90) return "text-yellow-500"
    return "text-red-500"
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/dashboard")}
            className="gap-2 hover:bg-primary/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Dashboard
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="gap-2 hover:bg-primary/10 transition-colors border-border bg-transparent"
            >
              <Printer className="w-4 h-4" />
              Cetak
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Main Card */}
        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="border-b border-border bg-gradient-to-r from-primary/20 to-primary/5">
            <CardTitle className="text-2xl font-bold text-center text-balance">Presensi Kehadiran Kuliah</CardTitle>
            <p className="text-center text-sm text-muted-foreground mt-2">Semester Ganjil TA.2025/2026</p>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Student Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border border-border">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="font-semibold min-w-[100px]">NPM</span>
                  <span>:</span>
                  <span className="text-primary font-medium">24082010149</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold min-w-[100px]">Nama</span>
                  <span>:</span>
                  <span className="font-medium">ANANDA DAFFA ARRAYAN</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="font-semibold min-w-[100px]">Kelamin</span>
                  <span>:</span>
                  <span>Laki-laki</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold min-w-[100px]">Dosen Wali</span>
                  <span>:</span>
                  <span>Eristya Maya Safitri, S.Kom,M.Kom.</span>
                </div>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10 border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold">No</th>
                    <th className="px-4 py-3 text-left font-semibold">Kode Kuliah</th>
                    <th className="px-4 py-3 text-left font-semibold">Nama Mata Kuliah</th>
                    <th className="px-4 py-3 text-center font-semibold">SKS</th>
                    <th className="px-4 py-3 text-center font-semibold">Kelas</th>
                    <th className="px-4 py-3 text-center font-semibold">Kehadiran</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((item, index) => (
                    <tr
                      key={item.no}
                      className={`border-b border-border hover:bg-primary/5 transition-colors ${
                        index % 2 === 0 ? "bg-muted/20" : ""
                      }`}
                    >
                      <td className="px-4 py-3">{item.no}</td>
                      <td className="px-4 py-3 font-mono text-xs">{item.kodeKuliah}</td>
                      <td className="px-4 py-3">{item.namaMataKuliah}</td>
                      <td className="px-4 py-3 text-center">{item.sks}</td>
                      <td className="px-4 py-3 text-center font-mono text-xs">{item.kelas}</td>
                      <td className={`px-4 py-3 text-center font-bold ${getAttendanceColor(item.kehadiran)}`}>
                        {item.kehadiran}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-sm text-muted-foreground">
                Total Mata Kuliah: <span className="font-bold text-foreground">{attendanceData.length}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Rata-rata Kehadiran:{" "}
                <span className="font-bold text-green-500">
                  {(
                    attendanceData.reduce((sum, item) => sum + Number.parseFloat(item.kehadiran), 0) /
                    attendanceData.length
                  ).toFixed(2)}
                  %
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
