// routes/article.route.ts
import express from 'express'
import { getArticles, getArticleDetail } from '../controllers/article.controller'

const router = express.Router()

router.get('/articles', getArticles)
router.post('/articles/detail', getArticleDetail)

export default router
