import express from "express";
import { getSearchData, getYtData } from "../controllers/apiController";

const router = express.Router();

router.get("/youtube", getYtData);
router.get("/google", getSearchData);

export default router;
