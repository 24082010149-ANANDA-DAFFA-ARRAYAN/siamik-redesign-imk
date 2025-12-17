"use client"

import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  color: string
  onClick?: () => void
}

export function ServiceCard({ icon, title, description, color, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-card hover:bg-card/80 border border-border rounded-xl p-6 text-left overflow-hidden hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all"
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}
      />

      <div className="relative flex items-start gap-4">
        <div className="text-4xl group-hover:scale-110 transition-transform">{icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity`}
      />
    </button>
  )
}
