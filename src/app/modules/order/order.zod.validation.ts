import { z } from 'zod';

const customProductIdSchema = z.string().min(10, { message: 'Invalid product ID (must be at least 10 characters)' }).max(44, { message: 'Invalid product ID (must be at most 44 characters)' });
const orderSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email format' }), // Ensure valid email format
  productId: customProductIdSchema,
  price: z.number().positive({ message: 'Price must be a positive number' }), // Enforce positive price
  quantity: z.number().positive({ message: 'Quantity must be a positive number' }), // Enforce positive quantity
});

export default orderSchema;