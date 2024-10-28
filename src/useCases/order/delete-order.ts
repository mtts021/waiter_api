import type { Request, Response } from 'express'
import { Order } from '../../models/Order.js'

export async function deleteOrder(req: Request, res: Response) {
  const { orderId } = req.params
  try {
    await Order.findByIdAndDelete(orderId)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
