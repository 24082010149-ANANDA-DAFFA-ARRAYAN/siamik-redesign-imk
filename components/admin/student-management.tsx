"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Student {
  id: string
  npm: string
  name: string
  faculty: string
  program: string
  status: string
  email: string
}

export function StudentManagement() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      npm: "24082010149",
      name: "ANANDA DAFFA ARRAYAN",
      faculty: "Ilmu Komputer",
      program: "Sistem Informasi",
      status: "Aktif",
      email: "ananda.daffa@student.upnjatim.ac.id",
    },
    {
      id: "2",
      npm: "24082010150",
      name: "BUDI SANTOSO",
      faculty: "Ilmu Komputer",
      program: "Teknik Informatika",
      status: "Aktif",
      email: "budi.santoso@student.upnjatim.ac.id",
    },
    {
      id: "3",
      npm: "24082010151",
      name: "CITRA DEWI",
      faculty: "Ilmu Komputer",
      program: "Sistem Informasi",
      status: "Cuti",
      email: "citra.dewi@student.upnjatim.ac.id",
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newStudent, setNewStudent] = useState({
    npm: "",
    name: "",
    faculty: "",
    program: "",
    email: "",
  })

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.npm.includes(searchQuery) ||
      student.program.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddStudent = () => {
    const student: Student = {
      id: String(students.length + 1),
      ...newStudent,
      status: "Aktif",
    }
    setStudents([...students, student])
    setNewStudent({ npm: "", name: "", faculty: "", program: "", email: "" })
    setIsAddDialogOpen(false)
  }

  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter((s) => s.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card className="border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Data Mahasiswa</CardTitle>
              <CardDescription>Kelola data dan informasi mahasiswa</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all group">
                  <Plus className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Tambah Mahasiswa
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Tambah Mahasiswa Baru</DialogTitle>
                  <DialogDescription>Masukkan data mahasiswa baru</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="npm">NPM</Label>
                    <Input
                      id="npm"
                      placeholder="Contoh: 24082010149"
                      value={newStudent.npm}
                      onChange={(e) => setNewStudent({ ...newStudent, npm: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="Nama mahasiswa"
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value.toUpperCase() })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty">Fakultas</Label>
                    <Select
                      value={newStudent.faculty}
                      onValueChange={(value) => setNewStudent({ ...newStudent, faculty: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih fakultas" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ilmu Komputer">Ilmu Komputer</SelectItem>
                        <SelectItem value="Teknik">Teknik</SelectItem>
                        <SelectItem value="Ekonomi">Ekonomi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Program Studi</Label>
                    <Select
                      value={newStudent.program}
                      onValueChange={(value) => setNewStudent({ ...newStudent, program: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih program studi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sistem Informasi">Sistem Informasi</SelectItem>
                        <SelectItem value="Teknik Informatika">Teknik Informatika</SelectItem>
                        <SelectItem value="Ilmu Komputer">Ilmu Komputer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@student.upnjatim.ac.id"
                      value={newStudent.email}
                      onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Batal
                  </Button>
                  <Button onClick={handleAddStudent}>Simpan</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Cari mahasiswa berdasarkan nama, NPM, atau program studi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>NPM</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>Fakultas</TableHead>
                  <TableHead>Program Studi</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-mono">{student.npm}</TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.faculty}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          student.status === "Aktif"
                            ? "bg-emerald-500/10 text-emerald-500"
                            : "bg-orange-500/10 text-orange-500"
                        }`}
                      >
                        {student.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary transition-all group"
                        >
                          <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </Button>
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
                          onClick={() => handleDeleteStudent(student.id)}
                        >
                          <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              Menampilkan {filteredStudents.length} dari {students.length} mahasiswa
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
