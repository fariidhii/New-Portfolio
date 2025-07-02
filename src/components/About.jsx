import { useState, useEffect, useRef } from 'react'

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 pt-5">
            Tentang Saya
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Siapa Saya?
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Saya adalah seorang developer yang memiliki passion dalam pengembangan website. 
                Dengan pengalaman dalam berbagai teknologi modern, saya selalu berusaha untuk menciptakan solusi 
                yang inovatif dan user-friendly.
              </p>
              <p>
                Saya percaya bahwa teknologi yang baik adalah teknologi yang dapat membantu orang lain dan 
                membuat hidup mereka lebih mudah. Oleh karena itu, saya selalu fokus pada user experience 
                dan accessibility dalam setiap proyek yang saya kerjakan.
              </p>
              <p>
                Saat ini saya aktif belajar dan mengembangkan aplikasi web menggunakan React, Node.js, dan berbagai 
                teknologi modern lainnya. Saya juga senang belajar teknologi baru dan berbagi pengetahuan 
                dengan komunitas developer.
              </p>
            </div>
          </div>

          {/* Skills Preview dengan animasi */}
          <div className={`bg-gray-50 p-8 rounded-2xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h4 className="text-xl font-semibold text-gray-900 mb-6">
              Keahlian Utama
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Frontend Development</span>
                  <span className="text-primary-600 font-medium">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-2000 ease-out"
                    style={{ 
                      width: isVisible ? '70%' : '0%',
                      transitionDelay: '500ms'
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Backend Development</span>
                  <span className="text-primary-600 font-medium">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-2000 ease-out"
                    style={{ 
                      width: isVisible ? '25%' : '0%',
                      transitionDelay: '700ms'
                    }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">UI/UX Design</span>
                  <span className="text-primary-600 font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-2000 ease-out"
                    style={{ 
                      width: isVisible ? '60%' : '0%',
                      transitionDelay: '900ms'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 