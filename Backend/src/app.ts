import express from 'express';
import dotenv from 'dotenv';
import categoryRoutes from '../routes/category.routes';
import articleRoutes from '../routes/article.routes';
import chatbotRoutes from '../routes/chatbot.routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', categoryRoutes);
app.use('/api', articleRoutes);
app.use('/api', chatbotRoutes);

app.get('/', (_req, res) => {
  res.send('TanyaBerita API is running!');
});

export default app;
