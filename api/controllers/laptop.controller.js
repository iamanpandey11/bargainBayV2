import Laptop from "../models/laptop.model.js";
export const test = async (req, res, next) => {
  res.send({ message: "you are here and it is working" });
};
export const getOneLaptop = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    // const posts = await Mobile.find(...{ brand_name: req.query.brand_name })
    //   .skip(startIndex)
    //   .limit(limit);
    const laptop = await Laptop.find({ _id: req.body.id })
      .skip(startIndex)
      .limit(limit);
    const totalLaptop = await Laptop.countDocuments();

    res.status(200).json([
      {
        laptop,
        totalLaptop,
      },
    ]);
  } catch (error) {
    next(error);
  }
};
export const getLaptop = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;
    // const posts = await Mobile.find(...{ brand_name: req.query.brand_name })
    //   .skip(startIndex)
    //   .limit(limit);
    const laptop = await Laptop.find().skip(startIndex).limit(limit);
    const totalLaptop = await Laptop.countDocuments();

    res.status(200).json([
      {
        laptop,
        totalLaptop,
      },
    ]);
  } catch (error) {
    next(error);
  }
};
