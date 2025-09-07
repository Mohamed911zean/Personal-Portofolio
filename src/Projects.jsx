import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Projects = () => {
  
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('/data.json')
    .then((res) => 
        setProjects(res.data.projects))
  } , [])
  
    return (
    <>
    <section id="Projects" className="py-20 md:py-24 bg-base-100">
  <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-8">
    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
      My Projects
    </h2>
    <p className="text-base md:text-lg text-base-content/80 leading-relaxed max-w-2xl mx-auto">
      Here are some of the projects I have worked on:
    </p>
  </div>

  {/* Grid */}
  <div className="max-w-6xl mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {projects.map((project) => (
      <div
        key={project.id}
        className="card bg-base-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 rounded-2xl p-8 flex flex-col items-center text-center space-y-6"
      >
        {/* SVG */}
        <img
          src={project.image}
          alt={project.title}
          className="w-32 h-32"
        />

        {/* Title */}
        <h3 className="text-2xl font-bold">{project.title}</h3>

        {/* Description */}
        <p className="text-base-content/70 text-base leading-relaxed">
          {project.desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href={project.demo}
            target="_blank"
            className="btn btn-primary btn-md"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            className="btn btn-outline btn-md"
          >
            Code
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


    </>
  )
}

export default Projects