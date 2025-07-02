import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "WatchIn ",
      description: "WatchIn memanfaatkan teknologi deteksi mata untuk merekam momen kantuk karyawan secara real-time. Team Project",
      image: "👁️",
      technologies: ["Tailwind", "Express.js", "Node.js", "CloudSQL"],
      liveUrl: "https://watchin-employee-activity-tracking.vercel.app/",
      githubUrl: "https://github.com/WatchIn-Employee-Activity-Tracking",
      featured: true
    }
  ]

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyek
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan, menampilkan kemampuan dalam berbagai teknologi dan domain
          </p>
        </div>

        {/* All Projects Grid */}
        <div className="flex justify-center">
          <div className="grid gap-6 w-fit">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="p-6">
                  <div className="text-3xl mb-3 hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.liveUrl} className="text-primary-600 hover:text-primary-700 hover:scale-105 transition-all duration-300 text-sm font-medium">
                      Demo
                    </a>
                    <span className="text-gray-300">•</span>
                    <a href={project.githubUrl} className="text-primary-600 hover:text-primary-700 hover:scale-105 transition-all duration-300 text-sm font-medium">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects