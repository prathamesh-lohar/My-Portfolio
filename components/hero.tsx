"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section className="px-6 py-20 max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">
      <div className="space-y-6">
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Prathamesh Mohan Lohar
          </motion.h2>
          <motion.p className="text-2xl md:text-3xl text-muted-foreground font-light" variants={itemVariants}>
            Full Stack Developer & MCA Candidate
          </motion.p>
        </motion.div>

        <motion.p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" variants={itemVariants}>
          I'm an MCA candidate and Full Stack Developer Intern at Media Urbana, passionate about building innovative
          technical solutions. With expertise in C++, Python, and MySQL, I combine strong problem-solving skills with
          practical experience in IoT and data automation projects.
        </motion.p>

        <motion.div className="flex gap-4 pt-6 flex-wrap" variants={itemVariants}>
          <motion.a
            href="tel:8217867372"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="mailto:Prathameshlohar222@gmail.com"
            className="inline-block px-6 py-3 border border-primary rounded-lg hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </motion.a>
        </motion.div>

        <motion.div className="flex gap-4 pt-4 text-sm text-muted-foreground flex-wrap" variants={itemVariants}>
          <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
            📞 8217867372
          </motion.span>
          <span>•</span>
          <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
            ✉️ Prathameshlohar222@gmail.com
          </motion.span>
        </motion.div>
      </div>
    </motion.section>
  )
}
