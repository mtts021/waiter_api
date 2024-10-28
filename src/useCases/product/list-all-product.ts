import type { Request, Response } from 'express'
import { Category } from '../../models/Category.js'
import { Product } from '../../models/Product.js'

export async function listAllProducts(req: Request, res: Response) {
  const products = await Product.find()
  res.status(201).json(products)
}
