import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
// @des     Fetch all data 
// @route   GET /api/products
// @access  Public
const getProducts=asyncHandler(async(req,res)=>{

    const products= await Product.find({})

    res.json(products)
})
const getProductByID=asyncHandler(async(req,res)=>{

    const product=await Product.findById(req.params.id)

        if(product){
            res.json(product)
        }else{
            res.status(404)
            throw new Error('Product not found')
        }
})

export {getProducts,getProductByID}