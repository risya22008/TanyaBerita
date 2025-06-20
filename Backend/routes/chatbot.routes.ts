import express from 'express';
import { handleChatbotAsk } from '../controllers/chatbot.controller';

const router = express.Router();

router.post('/chatbot/ask', handleChatbotAsk);

export default router;
