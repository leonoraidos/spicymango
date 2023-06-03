import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  id: {
    type: String,
  },
  userId: {
    type: String,
  }
});

const ALBUM = mongoose.model('Album', albumSchema);

export { ALBUM };