import { ALBUM } from "../models/albumModel.js";
import { PHOTO } from "../models/photoModel.js";

export const getAlbumById = async (req, res) => {
  try {
    const id = req.params.id;
    const album = await ALBUM.findOne({ id: id });
    const photos = await PHOTO.find({ albumId: id });
    res.status(200).json({ album, photos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fetching data was unsuccesful" });
  }
};