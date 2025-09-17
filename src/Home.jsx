import React from 'react'
import Projects from './Projects.jsx'
import ContactUs from './ContactUs.jsx'
import { Instagram, Facebook, Github } from 'lucide-react';

const Home = () => {
  return (
    <>
{/* section: HeroSection */}
    
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-24 mb-16 md:mb-24" id='Hero'>
        
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-30">
        {/* Left: Description */}
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-widest text-base-content/60">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Mohamed <span className="text-primary">— Frontend Developer</span>
            </h1>
          </div>

          <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
            I craft fast, accessible, and responsive web interfaces using modern technologies like
            React, Tailwind CSS, and Vite. I love turning ideas into polished user experiences with
            clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="flex gap-5 mt-6">
            <a
              href="https://www.instagram.com/mu7amed_el3shmawy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-base-300 shadow-md hover:bg-pink-500 hover:text-white transition transform hover:scale-110 duration-300"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/mohamed.zean.7393"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-base-300 shadow-md hover:bg-blue-600 hover:text-white transition transform hover:scale-110 duration-300"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://github.com/Mohamed911zean"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-base-300 shadow-md hover:bg-gray-900 hover:text-white transition transform hover:scale-110 duration-300"
            >
              <Github size={22} />
            </a>
          </div>

          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-base-content/70">
            <li className="badge badge-neutral">React</li>
            <li className="badge badge-neutral">Tailwind CSS</li>
            <li className="badge badge-neutral">Vite</li>
            <li className="badge badge-neutral">UI/UX</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="order-first md:order-none">
          <div className="relative mx-auto max-w-sm md:max-w-md">
            <img
              src="undraw_chill-guy-avatar_tqsm.svg"
              alt="Mohamed — Frontend Developer"
              className="w-full rounded-box shadow-lg bg-base-100 p-4"
            />
          </div>
        </div>
      </div>
    </section>

    {/* section: About Me */}

<section id='About'>
  <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-30">
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          About Me
        </h2>
        <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
          I'm Mohamed, an <span className="font-semibold">aspiring frontend developer</span> passionate about 
          building clean, responsive, and user-friendly web applications. 
          I enjoy turning ideas into real projects while continuously improving my skills.
        </p>
        <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
          My current focus is on <span className="font-semibold">React, Tailwind CSS, and Vite</span>, 
          and I'm always eager to learn new technologies and best practices. 
          Every project I work on helps me grow step by step into becoming a stronger developer.
        </p>                    
      </div>

      <div className="order-first md:order-none">
        <div className="relative mx-auto max-w-sm md:max-w-md">
          <img
            src="undraw_developer-avatar_f6ac.svg"
            alt="Mohamed — Frontend Developer"
            className="w-full rounded-box shadow-lg bg-base-100 p-4"
          />
        </div>
      </div>
    </div>
  </div>
</section>


    {/* section: Skills */}

 <section id="Skills" className="py-20 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-8">
    
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
      My Skills
    </h2>
    <p className="text-base md:text-lg text-base-content/80 leading-relaxed max-w-2xl mx-auto">
      Here are some of the technologies and tools I work with:
    </p>

    {/* Skills Grid */}
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
      {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Git", "GitHub"].map((skill) => (
        <li
          key={skill}
          className="px-4 py-3 rounded-xl border border-base-300 shadow-sm 
          bg-base-100 hover:bg-primary hover:text-white transition-all duration-300
          font-medium text-sm md:text-base"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
</section>


    <Projects/>

    <ContactUs/>
    </>
  )
}

export default Home