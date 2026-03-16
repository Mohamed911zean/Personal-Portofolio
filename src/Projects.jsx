import React, { useState, useEffect } from 'react'

const categoryMap = {
  1: "Tools",
  2: "E-Commerce",
  3: "E-Commerce",
  4: "Landing",
  5: "Landing",
  6: "Landing",
  7: "E-Commerce",
  8: "E-Commerce"
}

const categories = ["All", "E-Commerce", "Tools", "Landing"]

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("data.json")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load projects")
        return r.json()
      })
      .then((d) => { setProjects(d.projects); setLoading(false) })
      .catch((e) => { setError(e.message); setLoading(false) })
  }, [])

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => categoryMap[p.id] === filter)

  return (
    <section id="Projects" className="py-20 md:py-28 bg-base-200/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">My Projects</h2>
          <p className="text-base md:text-lg text-base-content/70 max-w-2xl mx-auto">
            A selection of things I've built:
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`btn btn-sm rounded-full ${filter === cat ? "btn-primary" : "btn-ghost border border-base-300"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error max-w-md mx-auto">
            <span>⚠️ {error} — please try refreshing.</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div key={project.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden flex flex-col">

              {/* Image area */}
              <div className="flex items-center justify-center bg-base-200 p-8 h-44">
                <img src={project.image} alt={project.title}
                  loading="lazy" className="h-full object-contain" />
              </div>

              <div className="card-body flex-1 flex flex-col gap-3">
                <span className="badge badge-primary badge-outline text-xs self-start">
                  {categoryMap[project.id] || "Project"}
                </span>
                <h3 className="card-title text-lg font-bold">{project.title}</h3>
                <p className="text-base-content/65 text-sm leading-relaxed flex-1">{project.desc}</p>

                <div className="card-actions justify-end mt-2 gap-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary btn-sm rounded-full">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects