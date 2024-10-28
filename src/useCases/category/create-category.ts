import type { Request, Response } from 'express'
import { Category } from '../../models/Category.js'

export async function createCategory(req: Request, res: Response) {
  const { name, icon } = req.body

  const categoryAlreadyExist = await Category.findOne({ name })

  if (categoryAlreadyExist) {
    res.status(422).json({ message: 'category already exist' })
    return
  }
  const category = await Category.create({
    name,
    icon,
  })
  res.status(201).json(category)
}
