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
      image: (<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="40" height="40" viewBox="0 0 134.000000 109.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g transform="translate(0.000000,109.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M85 1062 c-73 -35 -96 -118 -54 -197 83 -155 477 -814 498 -832 85
       -73 221 -10 221 102 0 22 -27 138 -60 258 -33 119 -60 223 -60 231 0 8 7 16
       15 20 16 6 41 -25 107 -132 43 -72 75 -95 131 -95 55 0 103 25 123 65 15 28
       16 54 10 184 -5 115 -3 153 6 156 7 3 32 0 55 -6 37 -8 50 -6 86 11 37 18 50
       35 104 132 35 61 63 113 63 116 0 3 -62 5 -139 5 -125 0 -141 -2 -165 -21 -51
       -40 -58 -68 -50 -198 7 -122 0 -147 -31 -121 -8 7 -54 77 -102 157 -95 156
       -123 183 -189 183 -44 0 -96 -27 -117 -62 -32 -50 -29 -77 33 -301 33 -120 60
       -226 60 -237 0 -24 -17 -35 -34 -20 -8 6 -88 137 -178 291 -99 172 -174 288
       -191 301 -40 29 -94 32 -142 10z m1099 -106 c-39 -59 -67 -73 -101 -50 -41 26
       -22 84 32 97 11 2 39 5 63 6 l42 1 -36 -54z"/>
       <path d="M1080 964 c0 -16 23 -44 35 -44 18 0 18 5 5 31 -10 17 -40 27 -40 13z"/>
       </g>
       </svg>),
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
                  <div className="text-3xl mb-3 transition-transform duration-300">{project.image}</div>
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