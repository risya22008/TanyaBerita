import { Request, Response } from 'express';
import { getArticlesFromNewsApi, getArticleById } from '../services/article.service';

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const category = req.query.category as string || '';
    const page = parseInt(req.query.page as string) || 1;
    const count = parseInt(req.query.count as string) || 10;

    const articles = await getArticlesFromNewsApi(category, page, count);
    res.status(200).json({ articles });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
};

export const getArticleDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const article = await getArticleById(id);

    if (!article) {
      res.status(404).json({ error: 'Article not found' });
      return;
    }

    res.status(200).json(article);
  } catch (error) {
    console.error('Error fetching article detail:', error);
    res.status(500).json({ error: 'Failed to fetch article detail' });
  }
};
