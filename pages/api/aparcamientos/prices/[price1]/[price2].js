import connectMongoDB from "../../../../../utils/mongoose";
import Aparcamiento from "../../../../../models/Aparcamiento";

connectMongoDB();

export default async (req, res) => {
  const {
    method,
    query: { price1, price2 },
  } = req;

  switch (method) {
    case "GET":
      try {
        const aparcamiento = await Aparcamiento.find({
          price: { $gte: price1, $lte: price2 },
        });
        if (!aparcamiento)
          return res.status(404).json({ msg: "Housing not found" });
        return res.status(200).json(aparcamiento);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
