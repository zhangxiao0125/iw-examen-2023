import { Button, Carousel } from "flowbite-react"
import Link from "next/link"
import NavbarItem from "../components/navbar"

const Home = (props) => {
	return (
		<div className="flex flex-col w-full h-screen">
			<div>
				<NavbarItem />
			</div>
			<div className="relative flex flex-row w-full h-full">
				<div className="flex flex-col w-full place-content-center">
					<div className="flex flex-col pl-24 space-y-2">
						<p className="text-5xl font-semibold text-gray-900 ">Bienvenido ParkingNet</p>
						<p className="text-3xl font-light text-gray-900">Busca un aparcamiento público cerca a tí</p>
						<div className="pt-2">
							<Link href='/housings'><Button className="bg-blue-600 hover:bg-blue-800">Buscamos</Button></Link>
						</div>
					</div>
				</div>

				<div className= "relative flex flex-col w-full h-full px-24 py-10">
					<Carousel className="h-full">
						<img src="https://www.rochester.edu/parking/wp-content/uploads/2022/06/Laser-Lab-06.22-scaled.jpg" alt="Imagen carousel 1"/>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrToBt1_AlcOqFFzzKlGojVnPOwdsFQg7Dsg&usqp=CAU" alt="Imagen carousel 2"/>
						<img src="https://media.istockphoto.com/id/494465392/es/foto/vac%C3%ADo-estacionamiento-de-autom%C3%B3viles.jpg?s=612x612&w=0&k=20&c=-gKikrFRNCzx6NdqPSm_m629xQ_I8Q4o3xDiOqEp_9w=" alt="Imagen carousel 3"/>	
					</Carousel>
				</div>
			</div>
		</div>
  )
}

export default Home
