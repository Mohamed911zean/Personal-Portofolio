import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const form = useRef()
  const [status, setStatus] = useState(null) // null | "sending" | "success" | "error"

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      form.current.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-base-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">Contact Me</h2>
          <p className="text-base-content/65 mt-3 text-lg">Have a project in mind? Let's talk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Info panel */}
          <div className="space-y-6">
            <p className="text-base-content/75 leading-relaxed">
              I'm currently open to freelance work and collaborations.
              Feel free to reach out — I'll get back to you as soon as possible.
            </p>
            <div className="space-y-3">
              <a href="https://github.com/Mohamed911zean" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-base-300 bg-base-100 hover:border-primary hover:shadow-md transition-all duration-300">
                <span className="text-2xl">🐙</span>
                <div>
                  <p className="font-semibold text-sm">GitHub</p>
                  <p className="text-xs text-base-content/50">Mohamed911zean</p>
                </div>
              </a>
              <a href="https://www.instagram.com/mu7amed_el3shmawy/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-base-300 bg-base-100 hover:border-primary hover:shadow-md transition-all duration-300">
                <span className="text-2xl">📸</span>
                <div>
                  <p className="font-semibold text-sm">Instagram</p>
                  <p className="text-xs text-base-content/50">mu7amed_el3shmawy</p>
                </div>
              </a>
              <a href="https://www.facebook.com/mohamed.zean.7393" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-base-300 bg-base-100 hover:border-primary hover:shadow-md transition-all duration-300">
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-semibold text-sm">Facebook</p>
                  <p className="text-xs text-base-content/50">Mohamed Zean</p>
                </div>
              </a>
              <a href="https://wa.me/201143524764" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-base-300 bg-base-100 hover:border-green-500 hover:shadow-md transition-all duration-300">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-xs text-base-content/50">+20 114 352 4764</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4" noValidate>
            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Name</span></label>
              <input type="text" name="name" placeholder="Your Name"
                className="input input-bordered w-full focus:input-primary" required minLength={2} />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Email</span></label>
              <input type="email" name="email" placeholder="your@email.com"
                className="input input-bordered w-full focus:input-primary" required />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text font-medium">Message</span></label>
              <textarea name="message" placeholder="Tell me about your project..."
                className="textarea textarea-bordered w-full focus:textarea-primary min-h-32" required minLength={10} />
            </div>

            <button type="submit" disabled={status === "sending"}
              className="btn btn-primary w-full rounded-full">
              {status === "sending"
                ? <><span className="loading loading-spinner loading-sm"></span> Sending...</>
                : "Send Message ✉️"}
            </button>

            {status === "success" && (
              <div role="alert" className="alert alert-success">
                <span>✅ Message sent! I'll get back to you soon.</span>
              </div>
            )}
            {status === "error" && (
              <div role="alert" className="alert alert-error">
                <span>❌ Something went wrong. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}