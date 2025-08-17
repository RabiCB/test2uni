"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
// import {BottomNavigation} from "./bottom-navigation"

interface NavigationContextType {
  showNavigation: boolean
  setShowNavigation: (show: boolean) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider")
  }
  return context
}

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [showNavigation, setShowNavigation] = useState(false)

  return (
    <NavigationContext.Provider value={{ showNavigation, setShowNavigation }}>
      <div className="min-h-screen bg-background">
        {children}
        {/* {showNavigation && <BottomNavigation />} */}
      </div>
    </NavigationContext.Provider>
  )
}
