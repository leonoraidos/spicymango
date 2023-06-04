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

export const createAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const albums = await ALBUM.find();
    const newId = Number(albums[albums.length - 1 ].id) + 1;
    console.log(newId);
    const albumName = req.body.albumName;
    const newAlbum = new ALBUM({
      id: String(newId),
      userId: String(id),
      title: albumName,
    });
    await newAlbum.save();
    res.status(200).json({ message: "Creating data was succesful" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Creating data was unsuccesful" });
  }
};

export const updateAlbum = async (req, res) => {
  try {
    console.log('we are here')
    const id = req.params.id;
    const newName = req.body.albumName;
    await ALBUM.findOneAndUpdate({ id: id }, { title: newName });
    res.status(200).json({ message: "Updating data was succesful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Updating data was unsuccesful" });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    await ALBUM.findOneAndDelete({ id: id });
    await PHOTO.deleteMany({ albumId: id });
    res.status(200).json({ message: "Deleting data was succesful" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Deleting data was unsuccesful" });
  }
};

