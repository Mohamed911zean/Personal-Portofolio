import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_03zq2xg",
      "template_sysjijd",
      form.current,
      "E83N7pfA8mynzlhWf"
    ).then(
      () => {
        alert("Message sent successfully ✅");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-base-200">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-extrabold text-center mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
