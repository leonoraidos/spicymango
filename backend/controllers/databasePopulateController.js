import { USER } from "../models/userModel.js";
import { ALBUM } from "../models/albumModel.js";
import { PHOTO } from "../models/photoModel.js";
import axios from "axios";

export const populateDB = async (_, res) => {
  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    const albums = await axios.get("https://jsonplaceholder.typicode.com/albums");
    const photos = await axios.get("https://jsonplaceholder.typicode.com/photos");

    for (const user of users.data) {

      user.name = user.name.split(" ");

      //check for already existing data
      const existingUser = await USER.findOne({ id: String(user.id) });
      if (existingUser) {
        continue;
      }

      const newUser = new USER({
        id: String(user.id),
        firstName: user.name[0],
        lastName: String(user.name.slice(1).join(" ")),
        email: user.email,
        website: user.website,
      });
      await newUser.save();

      for (const album of albums.data) {

        if (album.userId === user.id) {
          //check for already existing data
          const existingAlbum = await ALBUM.findOne({ id: String(album.id) });
          if (existingAlbum) {
            continue;
          }

          const newAlbum = new ALBUM({
            id: String(album.id),
            userId: String(album.userId),
            title: album.title,
          });
          await newAlbum.save();

          for (const photo of photos.data) {
            if (photo.albumId === album.id) {
              //check for already existing data
              const existingPhoto = await PHOTO.findOne({ id: String(photo.id) });
              if (existingPhoto) {
                continue;
              }

              const newPhoto = new PHOTO({
                id: String(photo.id),
                albumId: String(photo.albumId),
                title: photo.title,
                url: photo.url,
                thumbnailUrl: photo.thumbnailUrl,
                // width: photo.width,
                // height: photo.height,
              });
              await newPhoto.save();
            }
          }
        }
      }
    };
    res.status(200).json({ message: "Populating DB was succesful" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Populating DB was unsuccesful" });
  }

}

export const getAllData = async (_, res) => {
  try {
    const users = await USER.find().lean();
    const albums = await ALBUM.find().lean();
    const photos = await PHOTO.find().lean();

    res.status(200).json({ users, albums, photos });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Fetching data was unsuccesful" });

  }
}

export const getPaginatedData = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const users = await USER.find().skip(skip).limit(limit).lean();
    const albums = await ALBUM.find().skip(skip).lean();
    const photos = await PHOTO.find().skip(skip).lean();

    res.status(200).json({ users, albums, photos });

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "Fetching data was unsuccesful" });

  }

}