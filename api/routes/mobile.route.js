import express from "express";
import {
  test,
  getMobile,
  getOneMobile,
} from "../controllers/mobile.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/get", getMobile);
router.post("/getOne", getOneMobile);

export default router;
