import React from 'react'
import NavBar from '../NavBar'
import { ThemeProvider } from "@/components/theme-provider"


interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children} : LayoutProps) => {
  return (
    <div className="">
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <NavBar />
      {children}
        </ThemeProvider>
    </div>
  )
}

export default Layout
