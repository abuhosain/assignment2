import { z } from 'zod';

const customProductIdSchema = z.string().regex(/^[a-fA-F0-9]{24}$/, { message: 'Invalid product ID (must be a 24-character alphanumeric string)' });
const orderSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email format' }), // Ensure valid email format
  productId: customProductIdSchema,
  price: z.number().positive({ message: 'Price must be a positive number' }), // Enforce positive price
  quantity: z.number().positive({ message: 'Quantity must be a positive number' }), // Enforce positive quantity
});

export default orderSchema;