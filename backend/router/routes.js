import { Router } from "express";
import { populateDB, getAllData, getPaginatedData } from "../controllers/databasePopulateController.js";
import { getAlbumById } from "../controllers/albumController.js";

const router = Router();

router.get("/populate", populateDB);

router.get("/data/all", getAllData);

router.get("/data/paginated", getPaginatedData);

router.get("/album/:id", getAlbumById);

export default router;