import { Request, Response } from 'express';
import { askChatbot } from '../services/chatbot.service';

export const handleChatbotAsk = async (
    req: Request, 
    res: Response
): Promise<void> => {
  const { question, context } = req.body;

  if (!question) {
    res.status(400).json({ error: 'Pertanyaan tidak boleh kosong' });
    return;
  }

  try {
    const answer = await askChatbot(question, context);
    res.status(200).json({ answer });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan dalam memproses permintaan AI' });
  }
};