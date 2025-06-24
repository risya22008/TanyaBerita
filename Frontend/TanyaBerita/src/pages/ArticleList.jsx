import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import Header from '../components/Header'

const ArticleList = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = params.get('category') || ''
    fetch(`/api/articles${category ? `?category=${encodeURIComponent(category)}` : ''}`)
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data artikel')
        return res.json()
      })
      .then((data) => {
        setArticles(data.articles || [])
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [location.search])

  return (
    <>
      <Header />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="col-span-full text-center text-red-500">{error}</div>
        ) : articles.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">Tidak ada artikel.</div>
        ) : (
          articles.map((item) => {
            // Gunakan properti aman
            const uri = item.uri || item.id || item._id
            const title = item.title || 'Tanpa Judul'
            const excerpt =
              item.excerpt ||
              item.body?.slice(0, 100) + '...' ||
              item.content?.slice(0, 100) + '...' ||
              item.description?.slice(0, 100) + '...' ||
              'Tidak ada cuplikan.'
            const imageUrl =
              item.image || item.imageUrl || item.urlToImage || '/icons/berita.png'

            return (
              <ArticleCard
                key={uri}
                uri={uri}
                title={title}
                excerpt={excerpt}
                imageUrl={imageUrl}
              />
            )
          })
        )}
      </main>
    </>
  )
}

export default ArticleList
