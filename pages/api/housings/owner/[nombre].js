import connectMongoDB from "../../../../utils/mongoose"
import User from "../../../../models/User"
import Housing from "../../../../models/Housing"

connectMongoDB()

export default async (req, res) => {
	const {
		method,
		query: {nombre},
	} = req;

	switch(method){		
		case 'GET':
			try{
                const user = await User.find({username: new RegExp(nombre, 'i')})
				if(!user) return res.status(404).json({msg: "parking not found"})
				var firstUser = ((user[0]["_id"]).valueOf())

				const housing = await Housing.find({nombre: firstUser})
				if(!housing) return res.status(404).json({msg: "Housing not found"})
				return res.status(200).json(housing)

			}catch(error){
				return res.status(400).json({msg: error.message})
			}

		default:
			return res.status(400).json({msg: "This method is not supported"})
	}
}

