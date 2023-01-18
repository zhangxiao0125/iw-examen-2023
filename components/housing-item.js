import { Card, Carousel } from "flowbite-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AdvancedImage } from "@cloudinary/react"
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const ParkingItem = ({
	parking
}) =>{

	const router = useRouter()

	const deleteHousing = async() => {
		await fetch(
			`http://${process.env.URL}/api/housings/${parking.poiID}`,{
				method: 'DELETE'
			})
			.then(router.push('/housings'))
	}
	const cld = new Cloudinary({
		cloud: {
			cloudName: process.env.CLOUDINARY_URL
		}
	});
	/* const myImage = cld.image(parking.poiID)
	myImage.resize(thumbnail().width(400).height(250)).roundCorners(byRadius(10)); */
	return (

		<Link href={`/parking?id=${parking.poiID}`}>
			<Card className="w-full h-full flex-col flex cursor-pointer">
				{/* <AdvancedImage cldImg={myImage} /> */}
				<div className="flex-col flex justify-start">
				<p className="w-full truncate text-xl font-bold text-gray-900">{parking.nombre}</p>
				<p className="w-full truncate text-lg font-normal text-gray-700">{parking.direccion}</p>
					<div className="w-full flex flex-row">
						<p className="text-sm font-bold text-gray-900">{parking.capacidad }/{parking.libres} </p>
						
					</div>
				</div>

			</Card>
		</Link>
	)
}

export default ParkingItem