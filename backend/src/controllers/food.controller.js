const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');

async function createFood(req, res) {
  const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())
  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    image: fileUploadResult.url,
     imageFileId: fileUploadResult.fileId, // file id to access it later
    foodPartner: req.foodPartner._id,
    price: req.body.price
  })
  res.status(201).json({
    message: "food created successfully",
    food: foodItem
  })
}


async function updateFood(req, res) {
  const { foodId } = req.params;
  const food = await foodModel.findById(foodId);
  if (!food) {
    return res.status(404).json({ message: "Food item not found" });
  }
  if (String(food.foodPartner) !== String(req.foodPartner._id)) {
    return res.status(403).json({ message: "Not allowed to update this item" });
  }
  if (req.file) {
    // Delete old image
    await storageService.deleteFile(food.imageFileId);
    // Upload new image
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    food.image = fileUploadResult.url;
    food.imageFileId = fileUploadResult.fileId;
  }
  food.name = req.body.name || food.name;
  food.description = req.body.description || food.description;
  food.price = req.body.price || food.price;
  await food.save();
  res.status(200).json({
    message: "Food item updated successfully",
    food,
  });
}

async function deleteFood(req, res) {

  try {
 const { foodId } = req.params;
 const food = await foodModel.findById(foodId);

 if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }

    if (String(food.foodPartner) !== String(req.foodPartner._id)) {
      return res.status(403).json({ message: "Not allowed to delete this item" });
    }

    await storageService.deleteFile(food.imageFileId);

     await foodModel.findByIdAndDelete(foodId);

  }catch (err) {
    console.error("deleteFood error:", err);
    return res.status(500).json({
      message: 'Internal server error'
    });
 
  }


  res.status(200).json({
    message: "food item deleted successfully"
  })
}

async function getItemByPartner(req, res) {
  try {
    const { partnerId } = req.params;

    const items = await foodModel.find({ foodPartner: partnerId });

    return res.status(200).json({
      message: 'Food items fetched successfully',
      foodItems: items,
    });
  } catch (err) {
    console.error('getItemByPartner error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}


async function getFoodItems(req, res) {
  const foodItems = await foodModel.find({})
  res.status(200).json({
    message: "food items fetched successfully",
    foodItems
  })
}


module.exports = {
  createFood,
  deleteFood,
  getFoodItems,
  getItemByPartner,
  updateFood

}