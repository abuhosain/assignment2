import { z } from "zod";
import { TInventory, TProducct, TVariant } from "./product.interface";

const variantSchema = z.object({
  type: z.string().min(1, "Type is required"),
  value: z.string().min(1, "Value is required"),
});

const inventorySchema = z.object({
  quantity: z.number().min(0, "Quantity must be at least 0"),
  inStock: z.boolean().optional().default(true),
});

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantSchema).optional(),
  inventory: inventorySchema,
});

// Export Zod schemas
export { variantSchema, inventorySchema, productSchema };
