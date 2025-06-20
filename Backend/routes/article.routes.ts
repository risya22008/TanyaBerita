import express from 'express';
import { getArticles, getArticleDetail } from '../controllers/article.controller';

const router = express.Router();

router.get('/articles', getArticles);
router.get('/articles/:id', getArticleDetail); 

export default router;
