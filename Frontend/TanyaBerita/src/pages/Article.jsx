import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import ChatBot from '../components/ChatBot';

const Article = () => {
    const { id } = useParams(); // ambil URI artikel dari URL
    const [article, setArticle] = useState(null);
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const res = await axios.post('/api/articles/detail', {
                    uri: id
                });
                setArticle(res.data);
            } catch (err) {
                console.error('Gagal memuat artikel:', err);
            }
        };

        if (id) fetchArticle();
    }, [id]);

    if (!article) return <p className="text-center mt-20 text-gray-600">Loading artikel...</p>;

    const context = article.body; // ✅ Diletakkan di luar JSX

    return (
        <div className="bg-white font-sans min-h-screen">
            <Header />

            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Judul Berita */}
                <h1 className="text-4xl md:text-5xl font-bold text-black leading-snug mb-8">
                    {article.title}
                </h1>

                {/* Gambar Berita */}
                <div className="mb-10">
                    <img
                        src={article.image || "https://source.unsplash.com/800x400/?news"}
                        alt="Gambar Berita"
                        className="rounded-xl w-full object-cover"
                    />
                </div>

                {/* Isi Berita */}
                <div className="text-gray-800 text-lg leading-relaxed space-y-4">
                    <p>{article.body}</p>
                </div>
            </main>

            {/* Tombol Tanya Berita */}
            {!showChat && (
                <div className="fixed bottom-6 right-6">
                    <button
                        onClick={() => setShowChat(true)}
                        className="flex items-center gap-2 bg-yellow-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition font-semibold"
                    >
                        <img src="/icons/chat.png" alt="Chat Icon" className="w-8 h-8" />
                        Tanya Berita
                    </button>
                </div>
            )}

            {/* ChatBot ditampilkan jika showChat true */}
            {showChat && <ChatBot onClose={() => setShowChat(false)} context={context} />}
        </div>
    );
};


export default Article;
