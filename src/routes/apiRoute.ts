import express from "express";
import { getSearchData, getYtData } from "../controllers/apiController";

const router = express.Router();

router.get("/yt", getYtData);
router.get("/search", getSearchData);

export default router;
