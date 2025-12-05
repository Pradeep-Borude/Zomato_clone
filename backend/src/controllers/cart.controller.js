// src/controllers/cart.controller.js
const cartModel = require("../models/cart.model");

async function addToCart(req, res) {
    try {
        const { foodId } = req.params;
        const userId = req.user._id;

        if (!foodId) {
           return res.status(404).json({
        success: false,
        message: "Item not found"
      });
        }

        let cartItem = await cartModel.cartModel.findOne({
            user: userId,
            foodItem: foodId,
        });

        if (cartItem) {
          return res.status(200).json({
            success:false,
            message:"item already added to cart"
          })
        } else {
            cartItem = await cartModel.cartModel.create({
                user: userId,
                foodItem: foodId,
                quantity: 1,
            });
        }

        res.status(201).json({
            message: "Item added to cart successfully",
            cart: cartItem,
        });
    } catch (err) {
        console.error("addToCart error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function removeFromCart(req, res) {
  try {
    const { foodId } = req.params;
    const userId = req.user._id;
    
    
    
    const cartItem = await cartModel.cartModel.findOne({
      user: userId,
      foodItem: foodId
    });
    
    
    if (!cartItem) {
      return res.status(404).json({ 
        message: "Item not found in your cart",
      });
    }
    
    await cartModel.cartModel.findByIdAndDelete(cartItem._id);
    res.json({ message: "Item removed from cart successfully" });
  } catch (err) {
    console.error("removeFromCart error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}




async function getCartItemByUSer(req, res) {
    try {
         const userId = req.user._id;

        const items = await cartModel.cartModel.find({ user: userId }).populate("foodItem");

        return res.status(200).json({
            message: 'Food items fetched successfully',
            cartItem: items,
        });
    } catch (err) {
        console.error('getItemByPartner error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


async function placeOrder(req, res) {
    try {
        const { foodId } = req.params;
        const userId = req.user._id;

        if (!foodId) {
           return res.status(404).json({
        success: false,
        message: "Item not found"
      });
        }

        let cartItem = await cartModel.orderModel.findOne({
            user: userId,
            foodItem: foodId,
        });

        if (cartItem) {
          return res.status(200).json({
            success:false,
            message:"item already added to cart"
          })
        } else {
            cartItem = await cartModel.orderModel.create({
                user: userId,
                foodItem: foodId,
                quantity: 1,
            });
        }

        res.status(201).json({
            message: "order placed",
            cart: cartItem,
        });
    } catch (err) {
        console.error("placing order error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = {
    addToCart,
    getCartItemByUSer,
    removeFromCart,
    placeOrder

};
