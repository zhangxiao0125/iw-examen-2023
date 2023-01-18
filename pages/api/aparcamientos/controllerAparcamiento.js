import Aparcamiento from "../../../models/Aparcamiento";

export async function getAparcamientos(req, res) {
  try {
    const all = await Aparcamiento.find();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function postAparcamiento(req, res) {
  try {
    const newEnitty = new Aparcamiento(req.body);
    const saved = await newEnitty.save();
    console.log(saved)
    return res.status(200).json(saved);
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: error.message });
  }
}
