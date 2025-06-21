import React from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import categories from './categoriesData'
import Header from '../components/Header'

function Home() {
  const navigate = useNavigate()

  const handleReadNowClick = () => {
    navigate('/articles')
  }

  return (
    <div className="bg-white font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Selamat datang di TanyaBerita!
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Temukan informasi terkini, ringkasan cerdas, dan jawaban atas rasa ingin tahu.
            </p>
            <button
              onClick={handleReadNowClick}
              className="mt-8 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition shadow-lg"
            >
              Baca Berita Sekarang
            </button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img src="/Illustration.png" alt="Hero Illustration" className="w-full max-w-lg" />
          </div>
        </section>

        {/* Category Section */}
        <section id="kategori" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold inline-block relative">
              Category
              <span className="block w-full h-1 bg-gray-200 mt-2"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.label}
                label={cat.label}
                icon={cat.icon}
                colorScheme={cat.colorScheme}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
