"use client"

import { motion } from "framer-motion"
import { BookOpen, Award } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Post-Grad (MCA)",
      institution: "PES Modern College of Engineering",
      university: "SPPU, Pune",
      year: "2026",
      score: "8.07 CPI",
    },
    {
      degree: "Grad (B.COM)",
      institution: "DRK College of Commerce",
      university: "Shivaji University",
      year: "2023",
      score: "8.33 CGPA",
    },
    {
      degree: "Intermediate",
      institution: "KLE's GI Bagawadi College",
      university: "Dept of Pre-University Education",
      year: "2020",
      score: "84.33%",
    },
    {
      degree: "Matriculation",
      institution: "Modern English School, Nipani",
      university: "KSEEB",
      year: "2018",
      score: "75.84%",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
        Education
      </motion.h2>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="border-l-2 border-primary pl-6 pb-6 relative group"
            variants={itemVariants}
            whileHover={{ paddingLeft: 32 }}
          >
            {/* Animated timeline dot */}
            <motion.div
              className="absolute -left-3 top-1 w-4 h-4 bg-primary rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <motion.div
              className="flex items-start justify-between mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  initial={{ rotate: -45 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {idx === 0 ? (
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  )}
                </motion.div>
                <div>
                  <motion.h3 className="font-semibold text-lg">{edu.degree}</motion.h3>
                  <motion.p className="text-primary text-sm font-medium">{edu.institution}</motion.p>
                </div>
              </div>
              <motion.span className="text-sm text-muted-foreground">{edu.year}</motion.span>
            </motion.div>
            <motion.p
              className="text-sm text-muted-foreground mb-1 ml-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              {edu.university}
            </motion.p>
            <motion.p
              className="text-sm font-semibold text-primary ml-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {edu.score}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
