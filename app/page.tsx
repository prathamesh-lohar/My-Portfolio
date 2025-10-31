"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-section]")
      let currentSection = "hero"

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 200) {
          currentSection = section.getAttribute("data-section") || "hero"
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true)
    const element = document.querySelector(`section[data-section="${sectionId}"]`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
    setTimeout(() => setIsScrolling(false), 1000)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} setActiveSection={scrollToSection} />

      {/* Sidebar Navigation */}
      <motion.nav
        className="fixed left-0 top-20 h-screen w-48 border-r border-border px-6 py-12 overflow-y-auto hidden lg:block bg-background/50 backdrop-blur-sm"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-8">
          {[
            { id: "hero", label: "HOME" },
            { id: "about", label: "ABOUT" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "projects", label: "PROJECTS" },
            { id: "skills", label: "SKILLS" },
            { id: "education", label: "EDUCATION" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm tracking-widest transition-all block ${
                activeSection === item.id ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.id && (
                <motion.span
                  className="inline-block w-6 h-px bg-primary mr-3"
                  layoutId="activeIndicator"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="w-full lg:ml-48">
        <AnimatePresence mode="wait">
          {/* Hero Section */}
          <section data-section="hero" className="min-h-screen flex items-center" key="hero">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Hero />
            </motion.div>
          </section>

          {/* About Section */}
          <section data-section="about" className="min-h-screen py-20 px-6 max-w-4xl" key="about">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <About />
            </motion.div>
          </section>

          {/* Experience Section */}
          <section data-section="experience" className="min-h-screen py-20 px-6 max-w-4xl" key="experience">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Experience />
            </motion.div>
          </section>

          {/* Projects Section */}
          <section data-section="projects" className="min-h-screen py-20 px-6 max-w-4xl" key="projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Projects />
            </motion.div>
          </section>

          {/* Skills Section */}
          <section data-section="skills" className="min-h-screen py-20 px-6 max-w-4xl" key="skills">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Skills />
            </motion.div>
          </section>

          {/* Education Section */}
          <section data-section="education" className="min-h-screen py-20 px-6 max-w-4xl" key="education">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Education />
            </motion.div>
          </section>
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  )
}
