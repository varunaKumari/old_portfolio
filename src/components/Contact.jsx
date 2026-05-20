import React, { useRef } from 'react'
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
  Globe
} from 'lucide-react'

const Contact = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

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
        },
        (error) => {
          console.error(error)
          toast.error('Failed to send message')
        }
      )
  }

  const inputFocus =
    'focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300'

  return (
    <>
      <Toaster position="top-right" />

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-24 bg-dark-200"
      >
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Get In <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Have a project in mind or want to collaborate? Let’s talk!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* LEFT – FORM */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className={`w-full bg-dark-300 border border-white/10 rounded-lg px-4 py-3 ${inputFocus}`}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className={`w-full bg-dark-300 border border-white/10 rounded-lg px-4 py-3 ${inputFocus}`}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  required
                  className={`w-full bg-dark-300 border border-white/10 rounded-lg px-4 py-3 resize-none ${inputFocus}`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-600 rounded-xl font-semibold
                           hover:bg-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* RIGHT – INFO */}
            <div className="space-y-10">

              <InfoItem
                icon={<MapPin size={22} />}
                title="Location"
                text="Raichur, Karnataka"
              />

              <InfoItem
                icon={<Mail size={22} />}
                title="Email"
                text="varunakumari2102@gmail.com"
              />

              <InfoItem
                icon={<Phone size={22} />}
                title="Phone"
                text="+91 7903498540"
              />

              {/* Socials */}
              <div>
                <h4 className="font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <SocialIcon
                    icon={<Github />}
                    link="https://github.com/varunaKumari"
                  />
                  <SocialIcon
                    icon={<Linkedin />}
                    link="https://www.linkedin.com/in/varunakumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  />
                  <SocialIcon
                    icon={<Twitter />}
                    link="#"
                  />
                  <SocialIcon
                    icon={<Globe />}
                    link="#"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.section>
    </>
  )
}

const InfoItem = ({ icon, title, text }) => (
  <div className="flex gap-4 items-start">
    <div className="text-purple-500">{icon}</div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-gray-400">{text}</p>
    </div>
  </div>
)

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center
               hover:bg-purple-500/20 transition"
  >
    {icon}
  </a>
)

export default Contact
