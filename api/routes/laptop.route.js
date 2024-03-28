import express from "express";
import {
  test,
  getLaptop,
  getOneLaptop,
} from "../controllers/laptop.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/get", getLaptop);
router.post("/getOne", getOneLaptop);

export default router;
