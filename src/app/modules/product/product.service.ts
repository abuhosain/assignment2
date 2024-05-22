import { TProducct } from './product.interface'
import { Product } from './product.model'

const createProductIntoDb = async (productData: TProducct) => {
  const result = await Product.create(productData)
  return result
}

const getAllProductfromDb = async () => {
  const result = await Product.find()
  return result
}

const getSingleProductFromDb = async (id: string) => {
  const result = await Product.findById(id)
  return result
}

const updateProductInDb = async (
  id: string,
  updateData: Partial<TProducct>
) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
    new: true, // Return the updated document
    runValidators: true, // Validate the update against the schema
  })
  return updatedProduct
}


const deleteProductFromDb = async (id : string) => {
    const result = await Product.deleteOne({id})
    return result
}

const getProductWithSearchFromDb = async ( searchTerm : unknown) => {
  const products = await Product.find({
    name: { $regex: searchTerm, $options: 'i' } // Case-insensitive search
  });
  return products;
}

export const ProductService = {
  createProductIntoDb,
  getAllProductfromDb,
  getSingleProductFromDb,
  updateProductInDb,
  deleteProductFromDb,
  getProductWithSearchFromDb
}
