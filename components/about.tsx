"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Sparkles } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="space-y-8">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground leading-relaxed mb-4" variants={itemVariants}>
            I'm a passionate full-stack developer with a strong foundation in computer science and practical industry
            experience. My journey in tech began with competitive programming and has evolved into building real-world
            applications that solve meaningful problems.
          </motion.p>
          <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
            Currently pursuing my MCA while working as a Full Stack Developer Intern at Media Urbana, where I contribute
            to dynamic module development within agile teams. I'm particularly interested in IoT applications, data
            automation, and building scalable solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <motion.h3
              className="font-semibold mb-4 flex items-center gap-2 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <CheckCircle2 className="w-5 h-5" />
              Achievements
            </motion.h3>
            <motion.ul className="space-y-3 text-muted-foreground">
              {[
                "2nd Place in 'The Nexus Challenge' at Tantraudgama 2k25",
                "AquaBuddy project shortlisted for SPPU Avishkar 2025 Finals",
                "Qualified for Smart India Hackathon 2025",
                "Active member of Codecooks Club",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-2"
                >
                  <span className="text-primary flex-shrink-0 mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <motion.h3
              className="font-semibold mb-4 flex items-center gap-2 text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-5 h-5" />
              Current Focus
            </motion.h3>
            <motion.ul className="space-y-3 text-muted-foreground">
              {[
                "Building IoT solutions and embedded systems",
                "Full-stack web development with modern frameworks",
                "Data automation and analytics projects",
                "Learning and implementing best practices in SDLC",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-2"
                >
                  <span className="text-primary flex-shrink-0 mt-1">→</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
