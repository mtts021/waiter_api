import type { Request, Response } from 'express'
import { Order } from '../../models/Order.js'

export async function changeOderStatus(req: Request, res: Response) {
  const { orderId } = req.params
  const { status } = req.body
  if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
    res.status(400).json({
      error: 'INVALID_INPUT',
      message: 'values possibles: "WAITING",  "IN_PRODUCTION" and "DONE"',
    })
    return
  }
  try {
    await Order.findByIdAndUpdate(orderId, { status })
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
