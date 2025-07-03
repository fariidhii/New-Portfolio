import { useState, useEffect } from 'react'
import profile from '../assets/profil.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content dengan Animasi */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Halo, Saya{' '}
              <span className="text-primary-600 animate-pulse">Farid</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up">
              Seorang mahasiswa jurusan Teknik Informatika di Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) TIME. Saya adalah mahasiswa tahun 2022 yang senang menggeluti di bidang teknologi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-bounce-in">
              <a href="#projects" className="btn-primary hover:scale-105 transition-transform duration-300">
                Lihat Proyek Saya
              </a>
              <a href="#contact" className="btn-secondary hover:scale-105 transition-transform duration-300">
                Hubungi Saya
              </a>
            </div>
            
            {/* Social Links dengan hover animation */}
            <div className="flex justify-center lg:justify-start mt-8 space-x-4">
              <a href="https://x.com/pariiddhii" className="text-gray-600 hover:text-primary-600 hover:scale-110 transition-all duration-200">
                <svg className="w-10 h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/faridhiidayat/" className="text-gray-600 hover:text-primary-600 hover:scale-110 transition-all duration-200">
                <svg className="w-10 h-10" fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                </svg>
              </a>
              <a href="https://github.com/fariidhii" className="text-gray-600 hover:text-primary-600 hover:scale-110 transition-all duration-200">
                <svg className="w-10 h-10" fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Image/Illustration dengan Animasi */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500">
                <div >
                  <img
                    src={profile}
                    alt="Foto Profil"
                    className="w-72 h-72 object-cover rounded-full"
                    draggable="false"
                  />
                </div>
              </div>
              {/* Floating elements dengan animasi */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 