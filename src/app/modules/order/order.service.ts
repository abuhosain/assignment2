import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDb = async (orderdata : TOrder) => {
    const result = await Order.create(orderdata);
    return result
}

export const OrderService = {
    createOrderIntoDb
}