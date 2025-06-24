import React, { useState } from 'react'
import { FaPaperPlane, FaTimes } from 'react-icons/fa'
import axios from 'axios'

// Fungsi untuk escape tanda kutip ganda dan karakter rawan error lainnya
const sanitizeContext = (text) => {
  if (!text || typeof text !== 'string') return ''
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

const ChatBot = ({ onClose, context }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Halo! Ada yang bisa saya bantu?' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim() === '') return

    const userMsg = { from: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const sanitizedContext = sanitizeContext(context)
        // console.log('Sanitized context:', sanitizedContext)
      const res = await axios.post('/api/chatbot/ask', {
        question: input,
        context: sanitizedContext,
      })

      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: res.data.answer || 'Maaf, tidak ada jawaban',
        },
      ])
    } catch (err) {
      console.error('Chatbot error:', err)
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Terjadi kesalahan. Coba lagi.' },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-yellow-400 text-white px-4 py-3 font-semibold flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/icons/chat.png" alt="Chat Icon" className="w-6 h-6" />
          Tanya Berita
        </div>
        <button onClick={onClose}><FaTimes /></button>
      </div>

      <div className="p-4 h-72 overflow-y-auto flex flex-col gap-3 bg-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-2 text-sm rounded-lg ${
              msg.from === 'user'
                ? 'bg-yellow-400 text-white self-end'
                : 'bg-gray-100 text-gray-800 self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="max-w-[75%] px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-400 self-start">
            Bot sedang mengetik...
          </div>
        )}
      </div>

      <div className="flex border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-4 py-2 text-sm focus:outline-none"
          placeholder="Ketik pertanyaan di sini..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="px-4 text-yellow-500 hover:text-yellow-600"
          disabled={loading}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  )
}

export default ChatBot
