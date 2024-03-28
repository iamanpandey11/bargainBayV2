import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  img_link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  display: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  no_of_ratings: {
    type: Number,
    required: true,
  },
  no_of_reviews: {
    type: Number,
    required: true,
  },
});

const Laptop = mongoose.model("Laptop", laptopSchema);

export default Laptop;
