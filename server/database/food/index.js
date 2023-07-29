import mongoose from "mongoose";

// Default price constant
const DEFAULT_PRICE = 150;

const FoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    descript: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
      type: mongoose.Types.ObjectId,
      ref: "images",
    },
    price: { type: Number, default: DEFAULT_PRICE, required: true },
    addOns: [
      {
        type: mongoose.Types.ObjectId,
        ref: "foods",
      },
    ],
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FoodModel = mongoose.model("foods", FoodSchema);
