import React from 'react'

const ArticleCard = ({ title, excerpt, imageUrl }) => {
  return (
    <div className="bg-white rounded-2xl border p-4 shadow-md hover:shadow-lg transition-all">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="font-semibold text-lg mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{excerpt}</p>
    </div>
  )
}

export default ArticleCard
