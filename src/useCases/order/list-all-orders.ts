import type { Request, Response } from 'express'
import { Order } from '../../models/Order.js'

export async function listAllOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find().sort({ createdAt: 1 })
    res.status(200).json(orders)
  } catch (error) {
    res.sendStatus(500)
  }
}
