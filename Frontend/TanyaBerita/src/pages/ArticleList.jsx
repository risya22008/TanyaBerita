import React, { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import Header from '../components/Header'

const dummyArticles = Array.from({ length: 6 }, (_, i) => ({
  title: `Judul Berita ${i + 1}`,
  excerpt: 'Ini adalah cuplikan dari isi berita yang akan ditampilkan pada tampilan awal.',
  imageUrl: `https://source.unsplash.com/random/400x300?sig=${i}`, // Gambar acak dari Unsplash
}))

const ArticleList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    // Simulasi fetch data dari backend
    setArticles(dummyArticles)
  }, [])

  return (
    <>
      <Header />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((item, index) => (
          <ArticleCard
            key={index}
            title={item.title}
            excerpt={item.excerpt}
            imageUrl={item.imageUrl}
          />
        ))}
      </main>
    </>
  )
}

export default ArticleList
