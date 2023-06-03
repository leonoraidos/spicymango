import { Router } from "express";
import { populateDB, getAllData, getPaginatedData } from "../controllers/databasePopulateController.js";

const router = Router();

router.get("/populate", populateDB);

router.get("/data/all", getAllData);

router.get("/data/paginated", getPaginatedData);

export default router;