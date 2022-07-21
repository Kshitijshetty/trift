import express from 'express'
import { getProducts,getProductByID } from '../controllers/productController.js'
const router = express.Router()
// @des     Fetch all data 
// @route   GET /api/products
// @access  Public
router.route('/').get(getProducts)
router.route('/:id').get(getProductByID)



export default router