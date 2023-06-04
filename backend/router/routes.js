import { Router } from "express";
import { populateDB, getAllData, getPaginatedData } from "../controllers/databasePopulateController.js";
import { getAlbumById, createAlbum, updateAlbum, deleteAlbum} from "../controllers/albumController.js";

const router = Router();

router.get("/populate", populateDB);

router.get("/data/all", getAllData);

router.get("/data/paginated", getPaginatedData);

router.get("/album/:id", getAlbumById);

router.post("/createalbum/:id", createAlbum);

router.patch("/updatealbum/:id", updateAlbum);

router.delete("/deletealbum/:id", deleteAlbum);


export default router;