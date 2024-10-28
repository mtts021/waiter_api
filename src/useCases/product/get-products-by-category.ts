import type { Request, Response } from 'express'
import { Product } from '../../models/Product.js'

export async function getProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params
  try {
    const products = await Product.find().where('category', categoryId)
    res.status(200).json(products)
  } catch (error) {
    res.sendStatus(500)
  }
}
