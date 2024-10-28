import type { Request, Response } from 'express'
import { Category } from '../../models/Category.js'

export async function listAllCategories(req: Request, res: Response) {
  const categories = await Category.find()

  res.status(200).json(categories)
}
