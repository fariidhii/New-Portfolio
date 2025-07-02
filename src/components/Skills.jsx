import { useState, useEffect, useRef } from 'react'

const Skills = () => {
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

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "⚛️", level: "Basic" },
        { name: "JavaScript", icon: "🟨", level: "Intermediate" },
        { name: "HTML/CSS", icon: "🌐", level: "Advanced" },
        { name: "Tailwind CSS", icon: "🎨", level: "Intermediate" },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: "📝", level: "Intermediate" },
        { name: "VS Code", icon: "💻", level: "Advanced" },
        { name: "Figma", icon: "🎨", level: "Advanced" },
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Basic":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Keahlian Teknis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai teknologi dan tools yang saya kuasai untuk menciptakan solusi digital yang berkualitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                      <span className="font-medium text-gray-800 group-hover:text-primary-600 transition-colors duration-300">{skill.name}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(skill.level)} group-hover:scale-110 transition-transform duration-300`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 