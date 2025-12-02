const express = require('express');
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
const multer = require('multer');


const upload = multer({
    storage:multer.memoryStorage(),
 
})


// POST /api/food/ *[protected]
router.post('/',authMiddleware.authFoodPartnerMiddleware,
    upload.single("file"),
    foodController.createFood)
// GET /api/food/:foodId *[protected]
router.delete('/:foodId',authMiddleware.authFoodPartnerMiddleware,
    foodController.deleteFood)
// PUT /api/food/:foodId *[protected]
router.put(
  '/:foodId',
 authMiddleware.authFoodPartnerMiddleware,
  upload.single('file'),
  foodController.updateFood
);

// GET /api/food/ *[public]
router.get('/',
    foodController.getFoodItems)

   // GET /api/food/:partnerId *[protected] 
router.get('/:partnerId',
    authMiddleware.authFoodPartnerMiddleware,
    foodController.getItemByPartner)

module.exports= router;