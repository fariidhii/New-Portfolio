import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "faarid.hidayat@gmail.com",
      link: "mailto:faarid.hidayat@gmail.com"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+62 851-5932-3310",
      link: "https://wa.me/6285159323310"
    },
    {
      icon: "📍",
      title: "Lokasi",
      value: "Medan, Indonesia",
      link: "https://maps.app.goo.gl/n3uHrwPPz74HnZJZ7"
    }
  ]

  return (
    <section ref={sectionRef} id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Saya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information dengan animasi */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                      <span className="text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links dengan animasi */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ikuti Saya
              </h4>
              <div className="flex space-x-4">
                <a href="https://x.com/pariiddhii" className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <svg fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/faridhiidayat/" className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <svg fill="currentColor" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                  </svg>
                </a>
                <a href="https://github.com/fariidhii" className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <svg fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/faridhiidayat/" className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-200 hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <svg fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path  d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 