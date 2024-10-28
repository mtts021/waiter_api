import { extname, resolve } from 'node:path'
import { Router } from 'express'
import multer from 'multer'
import { createCategory } from './useCases/category/create-category.js'
import { listAllCategories } from './useCases/category/list-all-categories.js'
import { changeOderStatus } from './useCases/order/change-order-status.js'
import { createOrder } from './useCases/order/create-order.js'
import { deleteOrder } from './useCases/order/delete-order.js'
import { listAllOrders } from './useCases/order/list-all-orders.js'
import { createProduct } from './useCases/product/create-product.js'
import { getProductsByCategory } from './useCases/product/get-products-by-category.js'
import { listAllProducts } from './useCases/product/list-all-product.js'

export const router = Router()

const uploads = multer({
  storage: multer.diskStorage({
    destination: resolve(import.meta.dirname, '..', 'uploads'),
    filename(req, file, callback) {
      callback(null, `${Date.now()}${extname(file.originalname)}`)
    },
  }),
})
// List categories
router.get('/categories', listAllCategories)

// Create category
router.post('/categories', createCategory)

// List products
router.get('/products', listAllProducts)

// Create product
router.post('/products', uploads.single('image'), createProduct)

// Get products by category
router.get('/products/:categoryId', getProductsByCategory)

// List orders
router.get('/orders', listAllOrders)
// Create order
router.post('/orders', createOrder)

// Change order status
router.patch('/orders/:orderId', changeOderStatus)

// Delete/Cancel order
router.delete('/orders/:orderId', deleteOrder)
