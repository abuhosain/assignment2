import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDb = async (orderdata : TOrder) => {
    const result = await Order.create(orderdata);
    return result
}

const getAllOrderFromDb = async () => {
    const result = await Order.find();
    return result
}

export const getOrderWithEmailFromDb = async (email : unknown) => {
    if (typeof email !== 'string') {
        throw new Error('Invalid email type');
    }

    const orders = await Order.find({ email });
    return orders;
};


export const OrderService = {
    createOrderIntoDb,
    getAllOrderFromDb,
    getOrderWithEmailFromDb
}