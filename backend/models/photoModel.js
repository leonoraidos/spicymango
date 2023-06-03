import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  albumId: {
    type: String,
  },
  id: {
    type: String,
  },
  type: {
    type: String,
  },
  url: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  }
});

const PHOTO = mongoose.model('Photo', photoSchema);

export { PHOTO };