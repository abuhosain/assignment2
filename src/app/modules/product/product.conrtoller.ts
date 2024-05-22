import { Request, Response } from 'express'
import { ProductService } from './product.service'
import { productSchema } from './product.zod.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product
    const zodProductData = productSchema.parse(product);
    
    const result = await ProductService.createProductIntoDb(zodProductData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (error : any) {
    res.status(500).json({
        success: false,
        message: error.message || 'product is faild to created',
        error: error,
      })
  }
}

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm
    if (searchTerm) {
            const { searchTerm } = req.query
            const result = await ProductService.getProductWithSearchFromDb(searchTerm)
            res.status(200).json({
              success: true,
              message: 'Products fetched successfully!',
              data: result,
            })
    } else {
      const result = await ProductService.getAllProductfromDb()
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      })
    }
  } catch (error : any) {
    res.status(500).json({
        success: false,
        message: error.message || 'product is faild to fetched',
        error: error,
      })
  }
}

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductService.getSingleProductFromDb(productId)
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error : any) {
    res.status(500).json({
        success: false,
        message: error.message || 'product is not found',
        error: error,
      })
  }
}

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const updateData = req.body
    const result = await ProductService.updateProductInDb(productId, updateData)
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (error : any) {
    res.status(500).json({
        success: false,
        message: error.message || 'product is faild to update',
        error: error,
      })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await ProductService.deleteProductFromDb(studentId)
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    })
  } catch (error : any) {
    res.status(500).json({
        success: false,
        message: error.message || 'product is faild to deleted',
        error: error,
      })
  }
}



export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
 
}
