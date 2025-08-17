"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, BookOpen, GraduationCap, Bookmark, User } from "lucide-react"

const navigationItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    id: "exams",
    label: "Exams",
    icon: BookOpen,
    path: "/exam-prep",
  },
  {
    id: "universities",
    label: "Universities",
    icon: GraduationCap,
    path: "/universities",
  },
  {
    id: "saved",
    label: "Saved",
    icon: Bookmark,
    path: "/saved",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    path: "/profile",
  },
]

export function BottomNavigation() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path

            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => router.push(item.path)}
                className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                  isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
