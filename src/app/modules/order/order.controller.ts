import { Request, Response } from 'express'
import { OrderService } from './order.service'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body.order
    const result = await OrderService.createOrderIntoDb(orderData)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Order faild to created',
      error: error,
    })
  }
}

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email
    if (email) {
        const orders = await OrderService.getOrderWithEmailFromDb(email);
        res.status(200).json({
            success: true,
            message: '"Orders fetched successfully for user email!',
            data: orders,
          })
    } else{
        const result = await OrderService.getAllOrderFromDb()
        res.status(200).json({
          success: true,
          message: 'Orders fetched successfully!',
          data: result,
        })
    }

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Order not found',
      error: error,
    })
  }
}

export const OrderController = {
  createOrder,
  getAllOrder,
}
