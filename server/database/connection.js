import mongoose from "mongoose";

// Set the strictQuery option to true or false based on your preference.
// If you want to prepare for Mongoose 7, set it to false.
mongoose.set("strictQuery", false);

export default async () => {
  return mongoose.connect(process.env.MONGO_URL);
};
