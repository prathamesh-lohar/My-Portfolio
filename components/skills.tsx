"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "PHP", "HTML"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Tailwind CSS", "NumPy", "React", "Next.js"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "VS Code", "IoT", "BLE", "Data Structures & Algorithms (DSA)"],
    },
    {
      category: "Core Competencies",
      skills: ["SDLC", "Software Testing", "Web Development", "Deep Learning", "Data Mining", "Big Data Analytics"],
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
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
        Technical Skills
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={categoryVariants}
            className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
          >
            <motion.h3
              className="font-semibold mb-4 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              {cat.category}
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
