import Mobile from "../models/mobile.model.js";
import { ObjectId } from "mongodb";
export const test = async (req, res, next) => {
  res.send({ message: "you are here and it is working" });
};

export const getMobile = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    // const posts = await Mobile.find(...{ brand_name: req.query.brand_name })
    //   .skip(startIndex)
    //   .limit(limit);
    console.log();
    const posts = await Mobile.find().skip(startIndex).limit(limit);
    const totalPosts = await Mobile.countDocuments();

    res.status(200).json([
      {
        posts,
        totalPosts,
      },
    ]);
  } catch (error) {
    next(error);
  }
};
export const getOneMobile = async (req, res, next) => {
  console.log(req.body.id);
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    // const posts = await Mobile.find(...{ brand_name: req.query.brand_name })
    //   .skip(startIndex)
    //   .limit(limit);

    const posts = await Mobile.find({ _id: req.body.id })
      .skip(startIndex)
      .limit(limit);
    const totalPosts = await Mobile.countDocuments();

    res.status(200).json([
      {
        posts,
        totalPosts,
      },
    ]);
  } catch (error) {
    next(error);
  }
};
