import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const NEWS_API_URL = 'https://eventregistry.org/api/v1/article/getArticles';
const ARTICLE_DETAIL_URL = 'https://eventregistry.org/api/v1/article/getArticle';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

const categoryKeywordMap: Record<string, string> = {
  "Berita Umum": "general",
  "Nasional": "Indonesia",
  "Internasional": "world",
  "Politik": "politics",
  "Teknologi": "technology",
  "Hiburan": "entertainment",
  "Olahraga": "sports",
  "Kesehatan": "health",
  "Pendidikan": "education",
  "Lifestyle (Gaya Hidup)": "lifestyle",
  "Otomotif": "automotive",
  "Hukum & Kriminal": "law",
  "Lingkungan": "environment",
  "Humaniora": "humanities",
  "Inspiratif": "inspiration"
};

export const getArticlesFromNewsApi = async (
  category?: string,
  page: number = 1,
  count: number = 10
): Promise<any[]> => {
  try {
    const keyword = category ? categoryKeywordMap[category] || category : '';

    const response = await axios.get(NEWS_API_URL, {
      params: {
        apiKey: NEWS_API_KEY,
        keywords: keyword,
        lang: 'eng',
        page,
        count
      }
    });

    const data = response.data as any;
    const articles = data.articles?.results || [];

    return articles.map((article: any) => ({
      id: article.uri,
      title: article.title,
      url: article.url,
      source: article.source?.title || '',
      dateTime: article.dateTime,
      body: article.body,
      image: article.image
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

export const getArticleById = async (id: string): Promise<any | null> => {
  try {
    const response = await axios.get(ARTICLE_DETAIL_URL, {
      params: {
        apiKey: NEWS_API_KEY,
        articleUri: id
      }
    });

    const article = (response.data as any).article;

    if (!article) return null;

    return {
      id: article.uri,
      title: article.title,
      url: article.url,
      source: article.source?.title || '',
      dateTime: article.dateTime,
      body: article.body,
      image: article.image
    };
  } catch (error) {
    console.error('Error fetching article by ID:', error);
    return null;
  }
};
