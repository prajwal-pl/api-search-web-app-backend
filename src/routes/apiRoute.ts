import express from "express";
import {
  getScholarData,
  getSearchData,
  getYtData,
} from "../controllers/apiController";

const router = express.Router();

router.get("/youtube", getYtData);
router.get("/google", getSearchData);
router.get("/scholar", getScholarData);

export default router;
