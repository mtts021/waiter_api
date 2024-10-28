import type { Request, Response } from 'express'
import { Product } from '../../models/Product.js'

export async function createProduct(req: Request, res: Response) {
  const imagePath = req.file?.filename
  const { name, description, price, ingredients, category } = req.body

  try {
    const product = await Product.create({
      name,
      description,
      price,
      imagePath,
      ingredients: JSON.parse(ingredients),
      category,
    })
    res.status(201).json(product)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
