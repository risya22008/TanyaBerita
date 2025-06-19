import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";

const categories = [
  { label: "Berita Umum", color: "bg-gray-100", textColor: "text-yellow-700" },
  { label: "Nasional", color: "bg-yellow-400" },
  { label: "Internasional", color: "bg-gray-400", textColor: "text-white" },
  { label: "Politik", color: "bg-gray-100", textColor: "text-yellow-700" },
  { label: "Teknologi", color: "bg-yellow-400" },
  { label: "Hiburan", color: "bg-gray-400", textColor: "text-white" },
  { label: "Olahraga", color: "bg-gray-100", textColor: "text-yellow-700" },
  { label: "Kesehatan", color: "bg-yellow-400" },
  { label: "Pendidikan", color: "bg-gray-400", textColor: "text-white" },
  { label: "Lifestyle (Gaya Hidup)", color: "bg-gray-100", textColor: "text-yellow-700" },
  { label: "Otomotif", color: "bg-yellow-400" },
  { label: "Hukum & Kriminal", color: "bg-gray-400", textColor: "text-white" },
  { label: "Lingkungan", color: "bg-gray-100", textColor: "text-yellow-700" },
  { label: "Humaniora", color: "bg-yellow-400" },
  { label: "Inspiratif", color: "bg-gray-400", textColor: "text-white" },
];

export default function Home() {
  return (
    <div className="font-sans">
      <Header />

      <section className="text-center my-12 px-4">
        <h1 className="text-4xl font-bold">Selamat datang di TanyaBerita!</h1>
        <p className="mt-4 text-gray-600">
          Temukan informasi terkini, ringkasan cerdas, dan jawaban atas rasa ingin tahu.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-800 transition">
          Baca Berita Sekarang
        </button>
      </section>

      <section className="text-center mb-4">
        <h2 className="text-3xl font-bold border-y-2 inline-block px-6">Category</h2>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-20">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} label={cat.label} color={cat.color} textColor={cat.textColor} />
        ))}
      </section>
    </div>
  );
}
