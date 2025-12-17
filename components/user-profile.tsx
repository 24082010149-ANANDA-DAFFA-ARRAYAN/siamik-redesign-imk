"use client"

import { User, MapPin, Calendar, GraduationCap, BookOpen } from "lucide-react"

export function UserProfile() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
            AD
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1">ANANDA DAFFA ARRAYAN</h3>
            <p className="text-muted-foreground mb-4">Fakultas Ilmu Komputer</p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Status: Aktif
              </span>
              <span className="px-4 py-2 bg-secondary text-muted-foreground rounded-full text-sm font-medium">
                NPM: 24082010149
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Data Diri */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h4 className="text-xl font-bold mb-6">Data Diri</h4>
        <div className="grid gap-4">
          <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
            <User className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Nama Lengkap</p>
              <p className="font-medium">ANANDA DAFFA ARRAYAN</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Alamat</p>
              <p className="font-medium">KARAH IV 28B JAMBANGAN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Akademik */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h4 className="text-xl font-bold mb-6">Data Akademik</h4>
        <div className="grid gap-4">
          <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
            <GraduationCap className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Dosen Wali</p>
              <p className="font-medium">Eristya Maya Safitri, S.Kom,M.Kom.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
            <BookOpen className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Program Studi</p>
              <p className="font-medium">Sistem Informasi</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
            <User className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Dekan Ilmu Komputer</p>
              <p className="font-medium">Prof. Dr. Ir. Novrina Hendrasarie, M.T.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Tanggal Registrasi</p>
              <p className="font-medium">Friday, August 8, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
