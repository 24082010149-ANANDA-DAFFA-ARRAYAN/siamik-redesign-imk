"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Calendar } from "lucide-react"

interface Announcement {
  id: string
  title: string
  description: string
  date: string
  priority: "high" | "medium" | "low"
}

export function AnnouncementManagement() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "1",
      title: "Keringanan UKT Semester Genap",
      description:
        "KERINGANAN UKT SEMESTER GENAP 2025/2026 Batas Pendaftaran: s.d 23 Desember 2025 Informasi lebih lanjut...",
      date: "18 Desember 2025",
      priority: "high",
    },
    {
      id: "2",
      title: "Jadwal UTS Semester Genap 2025",
      description: "Pengumuman jadwal Ujian Tengah Semester (UTS) untuk semester genap tahun akademik 2025/2026...",
      date: "15 Desember 2025",
      priority: "medium",
    },
    {
      id: "3",
      title: "Batas Akhir Pengisian KRS",
      description: "Batas waktu pengisian Kartu Rencana Studi (KRS) diperpanjang hingga tanggal 20 Desember 2025...",
      date: "10 Desember 2025",
      priority: "medium",
    },
  ])

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
    priority: "medium" as "high" | "medium" | "low",
  })

  const handleAddAnnouncement = () => {
    const announcement: Announcement = {
      id: String(announcements.length + 1),
      ...newAnnouncement,
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
    }
    setAnnouncements([announcement, ...announcements])
    setNewAnnouncement({ title: "", description: "", priority: "medium" })
    setIsAddDialogOpen(false)
  }

  const handleDeleteAnnouncement = (id: string) => {
    setAnnouncements(announcements.filter((a) => a.id !== id))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      case "medium":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "low":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Manajemen Pengumuman</CardTitle>
              <CardDescription>Buat dan kelola pengumuman untuk mahasiswa</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all group">
                  <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Buat Pengumuman
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Buat Pengumuman Baru</DialogTitle>
                  <DialogDescription>Buat pengumuman yang akan ditampilkan ke semua mahasiswa</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Judul Pengumuman</Label>
                    <Input
                      id="title"
                      placeholder="Contoh: Jadwal UTS Semester Genap"
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                      id="description"
                      placeholder="Tulis detail pengumuman di sini..."
                      rows={6}
                      value={newAnnouncement.description}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, description: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Prioritas</Label>
                    <div className="flex gap-3">
                      {[
                        { value: "high", label: "Tinggi", color: "bg-red-500" },
                        { value: "medium", label: "Sedang", color: "bg-yellow-500" },
                        { value: "low", label: "Rendah", color: "bg-blue-500" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            setNewAnnouncement({
                              ...newAnnouncement,
                              priority: option.value as "high" | "medium" | "low",
                            })
                          }
                          className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all ${
                            newAnnouncement.priority === option.value
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${option.color}`} />
                            <span className="font-medium">{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Batal
                  </Button>
                  <Button onClick={handleAddAnnouncement}>Publikasikan</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{announcement.title}</h3>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getPriorityColor(
                            announcement.priority,
                          )}`}
                        >
                          {announcement.priority === "high" && "Prioritas Tinggi"}
                          {announcement.priority === "medium" && "Prioritas Sedang"}
                          {announcement.priority === "low" && "Prioritas Rendah"}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{announcement.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{announcement.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-blue-500/10 hover:text-blue-500 transition-all group"
                      >
                        <Edit className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive transition-all group"
                        onClick={() => handleDeleteAnnouncement(announcement.id)}
                      >
                        <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
