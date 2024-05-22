import { TInventory } from "../product/product.interface";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// creat order
const createOrderIntoDb = async (orderdata : TOrder) => {
    const existing = await Product.isProductExist(orderdata.productId)

    if(!existing){
        throw new Error("product is not exists!")
    }
    // handlers
    inventoryHandlers(existing.inventory, orderdata);

    const result = await Order.create(orderdata);
    return result
}

// inventory handlers
const inventoryHandlers = async (data : TInventory, orderdata : TOrder) => {
    const quantity = data.quantity - orderdata.quantity;
    if(quantity === 0){
        await Product.updateOne({ $set: {"inventory.inStock": false}})
    } else if(quantity < 0){
        throw new Error("stock out")
    }else{
        await Product.updateOne({ $set : { "inventory.quantity" : quantity}})
    }
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