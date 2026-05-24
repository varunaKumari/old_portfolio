import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'react-hot-toast'
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Loader2,
} from 'lucide-react'

/* ── animation helpers ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/* ── sub-components ── */
const InfoItem = ({ icon, title, text }) => (
  <motion.div
    variants={itemVariants}
    className="glass-card glow-border rounded-xl p-4 flex gap-4 items-center transition-transform duration-300 hover:-translate-y-1"
  >
    <div className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-purple shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white text-sm">{title}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  </motion.div>
)

const SocialIcon = ({ icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-400 hover:bg-purple/20 hover:text-purple transition-all duration-300"
  >
    {icon}
  </motion.a>
)

/* ── main component ── */
const Contact = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',     // ✅ EmailJS service ID
        'YOUR_TEMPLATE_ID',    // ✅ EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'      // ✅ EmailJS public key
      )
      .then(
        () => {
          toast.success('Message sent successfully!')
          formRef.current.reset()
          setSending(false)
        },
        (error) => {
          console.error(error)
          toast.error('Failed to send message')
          setSending(false)
        }
      )
  }

  const inputClasses =
    'w-full glass-card border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 hover:border-white/20 focus:border-purple focus:ring-2 focus:ring-purple/20 focus:bg-dark-200/50 transition-all duration-300 outline-none'

  return (
    <>
      <Toaster position="top-right" />

      <section id="contact" className="py-24 bg-dark-200">
        <div className="container mx-auto px-6">

          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-purple to-pink" />
            <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </motion.div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* LEFT – Form */}
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              {/* Name */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-medium text-gray-400 mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-medium text-gray-400 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className={inputClasses}
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-medium text-gray-400 mb-2 block">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project…"
                  className={`${inputClasses} resize-none`}
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={sending ? {} : { scale: 1.02 }}
                  whileTap={sending ? {} : { scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple to-pink rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple/25 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {sending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </motion.button>
              </motion.div>
            </motion.form>

            {/* RIGHT – Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-5 flex flex-col justify-center"
            >
              <InfoItem
                icon={<MapPin size={20} />}
                title="Location"
                text="Raichur, Karnataka"
              />
              <InfoItem
                icon={<Mail size={20} />}
                title="Email"
                text="varunakumari2102@gmail.com"
              />
              <InfoItem
                icon={<Phone size={20} />}
                title="Phone"
                text="+91 7903498540"
              />

              {/* Socials */}
              <motion.div variants={itemVariants} className="pt-4">
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <SocialIcon
                    icon={<Github size={20} />}
                    link="https://github.com/varunaKumari"
                  />
                  <SocialIcon
                    icon={<Linkedin size={20} />}
                    link="https://www.linkedin.com/in/varunakumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  />
                  <SocialIcon
                    icon={<Twitter size={20} />}
                    link="#"
                  />
                  <SocialIcon
                    icon={<Globe size={20} />}
                    link="#"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
