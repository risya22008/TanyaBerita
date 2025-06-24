import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const NEWS_API_URL = 'https://eventregistry.org/api/v1/article/getArticles';
const ARTICLE_DETAIL_URL = 'https://eventregistry.org/api/v1/article/getArticle';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';



// Tipe artikel yang digunakan secara umum
export type Article = {
  uri: string;
  title: string;
  url: string;
  source: string;
  dateTime: string;
  body: string;
  image: string;
};

// Pemetaan kategori ke kata kunci pencarian
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

// Tipe response dari Event Registry saat ambil daftar artikel
type NewsApiResponse = {
  articles?: {
    results?: {
      uri: string;
      title: string;
      url: string;
      dateTime: string;
      body: string;
      image: string;
      source?: {
        title?: string;
      };
    }[];
  };
};

// Tipe response saat ambil artikel detail
export type ArticleDetailResponse = {
  [key: string]: {
    info: {
      uri: string;
      lang: string;
      isDuplicate: boolean;
      date: string;
      time: string;
      dateTime: string;
      dateTimePub: string;
      dataType: string;
      sim: number;
      url: string;
      title: string;
      body: string;
      source?: {
        uri?: string;
        dataType?: string;
        title?: string;
      };
      authors?: {
        uri?: string;
        name?: string;
        type?: string;
        isAgency?: boolean;
      }[];
      image: string;
      eventUri: string | null;
      sentiment: number;
    };
  };
};


// Fungsi untuk mengambil daftar artikel
export const getArticlesFromNewsApi = async (
  category?: string,
  page: number = 1,
  count: number = 10
): Promise<Article[]> => {
  if (!NEWS_API_KEY) {
    console.error('[ArticleService] Missing NEWS_API_KEY');
    throw new Error('Missing NEWS_API_KEY');
  }

  try {
    const keyword = category ? categoryKeywordMap[category] || category : '';

    const response = await axios.get<NewsApiResponse>(NEWS_API_URL, {
      params: {
        apiKey: NEWS_API_KEY,
        keywords: keyword,
        lang: 'eng',
        page,
        count
      }
    });

    const results = response.data.articles?.results || [];

    return results.map((item): Article => ({
      uri: item.uri,
      title: item.title,
      url: item.url,
      source: item.source?.title || '',
      dateTime: item.dateTime,
      body: item.body,
      image: item.image
    }));
  } catch (error) {
    console.error('[ArticleService] Error fetching articles:', error);
    return [];
  }
};

// Fungsi untuk mengambil artikel berdasarkan URI
export const getArticleByUri = async (uri: string): Promise<Article | null> => {
  if (!NEWS_API_KEY) {
    console.error('[ArticleService] Missing NEWS_API_KEY');
    throw new Error('Missing NEWS_API_KEY');
  }

  try {
    const response = await axios.post<ArticleDetailResponse>(
      ARTICLE_DETAIL_URL,
      {
        action: 'getArticle',
        articleUri: uri,
        resultType: 'info',
        infoArticleBodyLen: -1,
        apiKey: NEWS_API_KEY,
        includeArticleTitle: true,
        includeArticleBasicInfo: true,
        includeArticleBody: true,
        includeArticleImage: true,
        includeSourceTitle: true
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`[ArticleService] Fetched article by URI: ${uri}`);
    //console.log(response);
    const data = response.data;
    const keys = Object.keys(data);
    const articleInfo = data[keys[0]].info;
    // console.log(response.data);
    console.log(articleInfo);
    if (!articleInfo) {
      console.warn(`[ArticleService] No article found for URI: ${uri}`);
      return null;
    }

    return {
      uri: articleInfo.uri,
      title: articleInfo.title,
      url: articleInfo.url,
      source: articleInfo.source?.title || '',
      dateTime: articleInfo.dateTime,
      body: articleInfo.body,
      image: articleInfo.image
    };
  } catch (error) {
    console.error(`[ArticleService] Error fetching article by URI: ${uri}`, error);
    return null;
  }
};
