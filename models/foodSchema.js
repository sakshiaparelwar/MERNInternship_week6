const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  FoodItemName: { type: String },
  FoodCategory: { type: String },
  Description: { type: String },
  NutritionalInformation: [
    {
      Calories: { type: Number },
      Macronutrients: { type: String },
      Micronutrients: { type: String },
      Fiber: { type: Number },
      Sodium: { type: Number },
      Cholesterol: { type: Number },
    },
  ],
  ServingSizeingram: { type: Number },
  Allergens: { type: String },
  Ingredients: { type: String },
  PreparationMethods: { type: String },
  Certifications: { type: String },
  CountryofOrigin: { type: String },
  Manufacturer: { type: String },
});

module.exports = new mongoose.model("Foodrecord", foodSchema);
