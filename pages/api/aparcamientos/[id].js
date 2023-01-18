import connectMongoDB from "../../../utils/mongoose";
import Aparcamiento from "../../../models/Aparcamiento";

connectMongoDB();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const aparcamiento = await Aparcamiento.findById(id);
        if (!aparcamiento)
          return res.status(404).json({ msg: "Aparcamiento not found" });
        return res.status(200).json(aparcamiento);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    case "PUT":
      try {
        const aparcamiento = await Aparcamiento.findByIdAndUpdate(id, body, {
          new: true,
        });
        if (!aparcamiento)
          return res.status(404).json({ msg: "Aparcamiento not found" });
        return res.status(200).json(aparcamiento);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    case "DELETE":
      try {
        const deletedAparcamiento = await Aparcamiento.findByIdAndDelete(id);
        if (!deletedAparcamiento)
          return res.status(404).json({ msg: "Aparcamiento not found" });
        return res.status(200).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
