"use client"

import { motion } from "framer-motion"
import { GitBranch, Star } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "AquaBuddy - IoT Hydration Tracker",
      period: "Sep 2025 - Present",
      status: "Smart India Hackathon Project",
      description:
        "An innovative IoT device that tracks body hydration by attaching to a standard water bottle using Time-of-Flight sensors and BLE connectivity.",
      highlights: [
        "IoT device design with ToF sensors",
        "Mathematical algorithms for volume calculation",
        "Bluetooth Low Energy integration",
        "Mobile application connectivity",
      ],
      achievements: [
        "Shortlisted for SPPU Avishkar 2025 Finals (November 2025)",
        "Qualified for Smart India Hackathon",
      ],
      tech: ["IoT", "BLE", "Python", "Mobile App"],
    },
    {
      title: "Student Result Analysis & Automation",
      period: "Jun 2025 - Jul 2025",
      status: "Personal Project",
      description:
        "An automation tool that processes and analyzes student result data with intelligent parsing and reporting capabilities.",
      highlights: [
        "Python-based data parsing and analysis",
        "Automated report generation",
        "Performance insights and analytics",
        "80% workload reduction for manual processing",
      ],
      achievements: ["Improved reporting accuracy", "Reduced processing time significantly"],
      tech: ["Python", "SQL", "Data Analysis"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      className="px-6 py-16 max-w-4xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Key Projects
      </motion.h2>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="border border-border rounded-lg p-6 hover:border-primary transition-colors overflow-hidden group"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          >
            <motion.div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <GitBranch className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <motion.h3 className="text-xl font-semibold">{project.title}</motion.h3>
                  <motion.p className="text-sm text-primary font-medium">{project.status}</motion.p>
                </div>
              </div>
              <motion.span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                {project.period}
              </motion.span>
            </motion.div>

            <motion.p className="text-muted-foreground mb-4">{project.description}</motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  Key Highlights
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary flex-shrink-0">▪</span>
                      <span>{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Achievements
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.achievements.map((a, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary flex-shrink-0">⭐</span>
                      <span>{a}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border"
                  whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
