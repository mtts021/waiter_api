import type { Request, Response } from 'express'
import { Order } from '../../models/Order.js'

export async function createOrder(req: Request, res: Response) {
  const { table, status, products } = req.body
  try {
    const order = await Order.create({
      table,
      status,
      products: products,
    })
    res.status(201).json(order)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
