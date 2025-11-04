"use client"

import { Button } from "../ui/button"
import { GraduationCap, Menu, ChevronDown, X, SearchIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu"
import SearchModal from "../Modals/SearchModal"
import useModalStore from "@/ContextMangementStore/useModal"
import { useAppContext } from "@/AppContext/AppContextProvider"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

const  {OpenSearchModal,handleOpenSearchModal}=useAppContext()

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Test2Uni</h1>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Practice Tests
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep?test=ielts" className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    IELTS Practice
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep?test=pte" className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    PTE Practice
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep?test=toefl" className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    TOEFL Practice
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep?test=gre" className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    GRE Practice
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep?test=gmat" className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    GMAT Practice
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep?test=sat" className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    SAT Practice
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/exam-prep" className="font-medium">
                    View All Tests →
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
           
            <Link
              href="/universities"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Universities
            </Link>
           
           <Link href={"/login"}>
            <Button variant="default" size="sm">
              Sign In
            </Button>
           </Link>
           
             <Button onClick={handleOpenSearchModal} variant="outline">
              <SearchIcon/>
            </Button>
          </nav>  

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} className="h-5 w-5" /> : <Menu size={32} className="h-5 w-5" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-4 pt-4">
              {/* Practice Tests Section */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-foreground px-2">Practice Tests</h3>
                <div className="space-y-1 pl-4">
                  <Link
                    href="/exam-prep?test=ielts"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    IELTS Practice
                  </Link>
                  <Link
                    href="/exam-prep?test=pte"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    PTE Practice
                  </Link>
                  <Link
                    href="/exam-prep?test=toefl"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    TOEFL Practice
                  </Link>
                  <Link
                    href="/exam-prep?test=gre"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    GRE Practice
                  </Link>
                  <Link
                    href="/exam-prep?test=gmat"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    GMAT Practice
                  </Link>
                  <Link
                    href="/exam-prep?test=sat"
                    className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    SAT Practice
                  </Link>
                  <Link
                    href="/exam-prep"
                    className="flex items-center gap-2 py-2 px-2 text-sm font-medium text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Tests →
                  </Link>
                </div>
              </div>

              {/* Other Navigation Items */}
              <div className="border-t border-border pt-4 space-y-2">
                <a
                  href="#features"
                  className="block py-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <Link
                  href="/universities"
                  className="block py-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Universities
                </Link>
                <a
                  href="#testimonials"
                  className="block py-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Success Stories
                </a>
                
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Sign In
                  </Button>
                </div>
              </div>
            </nav>
            
          </div>
        )}

        
      </div>
    </header>
  )
}

export default Header
