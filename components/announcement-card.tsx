"use client"

import { Megaphone } from "lucide-react"

interface AnnouncementCardProps {
  title: string
  date: string
  description: string
}

export function AnnouncementCard({ title, date, description }: AnnouncementCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:bg-card/80 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 group-hover:scale-110 transition-all">
          <Megaphone className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors text-balance">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{date}</p>
          <p className="text-muted-foreground line-clamp-3 text-pretty">{description}</p>
          <button className="mt-4 text-primary font-medium text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Baca selengkapnya
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
