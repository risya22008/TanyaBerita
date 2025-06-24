import { useNavigate } from 'react-router-dom'

const ArticleCard = ({ uri, title, excerpt, imageUrl }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/article/${encodeURIComponent(uri)}`)}
      className="cursor-pointer border rounded-xl shadow hover:shadow-md transition-all overflow-hidden"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    </div>
  )
}

export default ArticleCard
