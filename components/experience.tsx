"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Media Urbana",
      period: "Aug 2025 - Present",
      description: [
        "Contributed to the design, development, and support of dynamic modules within a collaborative, agile team environment.",
        "Played a key role in code validation and quality assurance by actively participating in code reviews and incorporating technical feedback.",
        "Translated functional requirements into system specifications for new features, ensuring alignment with project goals.",
      ],
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
        Industry Experience
      </motion.h2>

      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="border-l-2 border-primary pl-6 pb-8 relative"
            variants={itemVariants}
            whileHover={{ paddingLeft: 32 }}
          >
            {/* Animated dot on the timeline */}
            <motion.div
              className="absolute -left-3 top-1 w-4 h-4 bg-primary rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <motion.div
              className="flex items-start justify-between mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <motion.h3 className="text-xl font-semibold">{exp.title}</motion.h3>
                  <motion.p className="text-primary font-medium">{exp.company}</motion.p>
                </div>
              </div>
              <motion.span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</motion.span>
            </motion.div>

            <motion.ul className="space-y-3 text-muted-foreground ml-8">
              {exp.description.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.span className="text-primary mt-1.5 flex-shrink-0" whileHover={{ scale: 1.2 }}>
                    •
                  </motion.span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
