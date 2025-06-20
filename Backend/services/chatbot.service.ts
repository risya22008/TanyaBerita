import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';

interface GroqChatResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const askChatbot = async (question: string, context?: string): Promise<string> => {
  try {
    const prompt = context
      ? `Berikut adalah isi berita:\n"${context}"\n\nPertanyaan: ${question}\nJawaban:`
      : `Pertanyaan: ${question}\nJawaban:`;

    const response = await axios.post<GroqChatResponse>(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'system',
            content: 'Kamu adalah asisten AI yang membantu menjawab pertanyaan berdasarkan isi berita.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error from Groq API:', error);
    return 'Maaf, terjadi kesalahan saat menghubungi AI.';
  }
};
