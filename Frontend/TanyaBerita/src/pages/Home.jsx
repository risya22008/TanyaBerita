import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'

function Home() {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data kategori')
        return res.json()
      })
      .then((data) => {
        console.log('Data kategori dari backend:', data)
        let arr = data
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          if (Array.isArray(data.categories)) {
            arr = data.categories
          } else {
            setError('Format data kategori tidak valid (tidak ditemukan array)')
            setLoading(false)
            return
          }
        }
        if (!Array.isArray(arr)) {
          setError('Format data kategori tidak valid (bukan array)')
          setLoading(false)
          return
        }
        // Map label ke icon dan colorScheme di frontend
        const categoryMeta = {
          "Berita Umum": { icon: "/icons/berita.png", colorScheme: "light" },
          "Nasional": { icon: "/icons/nasional.png", colorScheme: "yellow" },
          "Internasional": { icon: "/icons/internasional.png", colorScheme: "dark" },
          "Politik": { icon: "/icons/politik.png", colorScheme: "light" },
          "Teknologi": { icon: "/icons/teknologi.png", colorScheme: "yellow" },
          "Hiburan": { icon: "/icons/hiburan.png", colorScheme: "dark" },
          "Olahraga": { icon: "/icons/olahraga.png", colorScheme: "light" },
          "Kesehatan": { icon: "/icons/kesehatan.png", colorScheme: "yellow" },
          "Pendidikan": { icon: "/icons/pendidikan.png", colorScheme: "dark" },
          "Lifestyle (Gaya Hidup)": { icon: "/icons/lifestyle.png", colorScheme: "light" },
          "Otomotif": { icon: "/icons/otomotif.png", colorScheme: "yellow" },
          "Hukum & Kriminal": { icon: "/icons/hukum.png", colorScheme: "dark" },
          "Lingkungan": { icon: "/icons/lingkungan.png", colorScheme: "light" },
          "Humaniora": { icon: "/icons/humaniora.png", colorScheme: "yellow" },
          "Inspiratif": { icon: "/icons/inspiratif.png", colorScheme: "dark" },
        }
        const normalized = arr.map((label) => ({
          label,
          icon: categoryMeta[label]?.icon || "/icons/berita.png",
          colorScheme: categoryMeta[label]?.colorScheme || "light",
        }))
        setCategories(normalized)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

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
          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.label || cat.id}
                  label={cat.label}
                  icon={cat.icon}
                  colorScheme={cat.colorScheme}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default Home
