// controllers/category.controller.ts
import { Request, Response } from 'express';
import { staticCategories } from '../services/category.service';

export const getCategories = (req: Request, res: Response) => {
  try {
    res.status(200).json({ categories: staticCategories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to get categories' });
  }
};
