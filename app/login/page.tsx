"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Credentials - In production, this would be handled by backend API
  const credentials = {
    user: { id: "kelompok6", password: "user123" },
    admin: { id: "admin", password: "admin123" },
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (userId === credentials.user.id && password === credentials.user.password) {
      localStorage.setItem("userRole", "user")
      localStorage.setItem("userId", userId)
      router.push("/dashboard")
    } else if (userId === credentials.admin.id && password === credentials.admin.password) {
      localStorage.setItem("userRole", "admin")
      localStorage.setItem("userId", userId)
      router.push("/admin")
    } else {
      setError("ID atau password salah. Silakan coba lagi.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-3xl font-bold text-primary-foreground">S</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">SIAMIK</h1>
          <p className="text-muted-foreground">Sistem Informasi Akademik</p>
          <p className="text-sm text-muted-foreground">UPN Veteran Jawa Timur</p>
        </div>

        <Card className="border-border/50 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Masuk</CardTitle>
            <CardDescription>Masukkan ID dan password Anda untuk melanjutkan</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userId">ID Pengguna</Label>
                <Input
                  id="userId"
                  type="text"
                  placeholder="Masukkan ID Anda"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="transition-all hover:border-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password Anda"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10 transition-all hover:border-primary/50 focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full group hover:shadow-lg hover:shadow-primary/20 transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Memproses...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Masuk
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Demo Credentials:
                <br />
                <span className="font-mono">User: 24082010149 / user123</span>
                <br />
                <span className="font-mono">Admin: admin / admin123</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
