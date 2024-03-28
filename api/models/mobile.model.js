import mongoose from "mongoose";
const mobileSchema = new mongoose.Schema({
  brand_name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  avg_rating: {
    type: Number,
  },
  "5G_or_not": {
    type: Boolean,
  },
  processor_brand: {
    type: String,
    required: true,
  },
  num_cores: {
    type: Number,
  },
  processor_speed: {
    type: Number,
  },
  battery_capacity: {
    type: Number,
  },
  fast_charging_available: {
    type: Boolean,
  },
  fast_charging: {
    type: String,
  },
  ram_capacity: {
    type: Number,
  },
  internal_memory: {
    type: Number,
  },
  screen_size: {
    type: Number,
  },
  refresh_rate: {
    type: Number,
  },
  num_rear_cameras: {
    type: Number,
  },
  os: {
    type: String,
  },
  primary_camera_rear: {
    type: Number,
  },
  primary_camera_front: {
    type: Number,
  },
  extended_memory_available: {
    type: Boolean,
  },
  resolution_height: {
    type: Number,
  },
  resolution_width: {
    type: Number,
  },
});

const Mobile = mongoose.model("Mobile", mobileSchema);

export default Mobile;
