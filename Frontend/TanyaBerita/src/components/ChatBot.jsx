import React, { useState } from 'react'
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa'

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Halo! Ada yang bisa saya bantu?' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-yellow-400 text-white px-4 py-3 font-semibold flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaRobot className="text-lg" />
          Tanya Berita
        </div>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Chat Messages */}
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
      </div>

      {/* Input */}
      <div className="flex border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-4 py-2 text-sm focus:outline-none"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 text-yellow-500 hover:text-yellow-600"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  )
}

export default ChatBot
