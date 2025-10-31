"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h1 className="text-xl font-bold" whileHover={{ color: "var(--color-primary)" }}>
            Prathamesh Mohan Lohar
          </motion.h1>
          <motion.p className="text-sm text-muted-foreground">Full Stack Developer · IoT Enthusiast</motion.p>
        </motion.div>

        <div className="flex items-center gap-6">
          {/* Mobile Navigation */}
          <motion.div
            className="flex gap-2 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-xs px-3 py-1 rounded transition-all ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>

          <ThemeToggle />

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:Prathameshlohar222@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
