import { Request, Response } from 'express'
import { OrderService } from './order.service'
import orderSchema from './order.zod.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body.order
    const zodOrderData =  orderSchema.parse(orderData)
    const result = await OrderService.createOrderIntoDb(zodOrderData)
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
    const email = req.query.email as string;
    
    if (email) {
      const orders = await OrderService.getOrderWithEmailFromDb(email);
      if (orders.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: orders,
      });
    } else {
      const result = await OrderService.getAllOrderFromDb();
      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Order not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'order not found',
      error: error.message,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrder,
}
