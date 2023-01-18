import { Button, TextInput, Dropdown } from 'flowbite-react'
import NavbarItem from "../components/navbar"
import HousingItem from "../components/housing-item"
import MapItem from "../components/map"

import { useState } from "react"
import { useRouter } from "next/router"

const Housings = ({
	housings
}) => {

	const router = useRouter()
	const [plazasValue, setPlazas] = useState(housings.plazas)
	const [nombreValue, setNombre] = useState(housings.nombre)

	const handleSubmit = async event => {
		event.preventDefault()
		if(event.target.nombre.value !== "") {
			router.push(`/housings?nombre=${event.target.nombre.value}`)
		}  else if(event.target.plazas.value !== "") {
			router.push(`/housings?plazas=${event.target.plazas.value}`)
		} else {
			router.push(`/housings`)
		}
	}

	function filterNone() {
		setPlazas("")
		document.getElementById("plazas").value = ""
		document.getElementById("plazas").style.display = "none"

		setNombre("")
		document.getElementById("nombre").value = ""
		document.getElementById("nombre").style.display = "none"

		document.getElementById("submit").style.display = "none"
		document.getElementById("submit").click();
	}

	function filterPlazas() {
		setPlazas("")
		document.getElementById("plazas").value = ""
		document.getElementById("plazas").style.display = "block"


		setNombre("")
		document.getElementById("nombre").value = ""
		document.getElementById("nombre").style.display = "none"

		document.getElementById("submit").style.display = "block"
		document.getElementById("submit").click();
	}

	function filterNombre() {
		setPlazas("")
		document.getElementById("plazas").value = ""
		document.getElementById("plazas").style.display = "none"

		setNombre("")
		document.getElementById("nombre").value = ""
		document.getElementById("nombre").style.display = "block"

		document.getElementById("submit").style.display = "block"
		document.getElementById("submit").click();
	}

	return (
		<div className="flex flex-col w-full h-full">
			
			<div>
				<NavbarItem />
			</div>

			<div className="flex flex-row items-center justify-between px-4">
				<div>
					<form onSubmit={handleSubmit} color="dark">
						<Dropdown label="Filtro" inline={true}>
							<Dropdown.Item onClick={filterNone}>
								Ninguno
							</Dropdown.Item>
							<Dropdown.Item onClick={filterPlazas}>
								Plazas Libres
							</Dropdown.Item>
							<Dropdown.Item onClick={filterNombre}>
								Nombre
							</Dropdown.Item>
						</Dropdown>

							<TextInput id="plazas" 
								name="plazas" 
								className="pt-4 w-96"
								value={plazasValue}
								placeholder="al menos un 25% de plazas libres"
								onChange={ (event) => setAddress(event.target.value)}
								style={{display: "none"}}
							/>


							<TextInput id="nombre" 
								name="nombre" 
								value={nombreValue}
								className="w-96"
								placeholder="nombre del aparcamiento"
								onChange={ (event) => setOwner(event.target.value)}
								style={{display: "none"}}
							/>

						<div className="">
							<Button id="submit" type="submit" className="mt-4 bg-blue-600 hover:bg-blue-800" style={{display: "none"}}>
								Buscar
							</Button>
						</div>
					</form>
				</div>	

				<div className="my-2">
					<Button href='new-housing' className="bg-blue-600 hover:bg-blue-800">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
						</svg>
					</Button>
				</div>
			</div>
			



			<div className="relative flex flex-row w-full flex-grow-0">
				{/** Alojamientos */}
				<div className="relative overflow-auto w-full h-full">
					<div className="relative grid grid-cols-5 grid-flow-row gap-8 p-4">
						
					{housings && housings.length > 0 ? (
						housings.map((house) => {
							return (
								<HousingItem
									key={house}
									housing={house}
								/>
							)
					}))
					:
					(
						<div className="flex flex-col w-full h-full items-left justify-center">
							<span>No se han encontrado resultados en esta lista.</span>
						</div>
					)
				}

					</div>
				</div>
			</div>

		</div>	
	)
}

export async function getServerSideProps(ctx){
	if((ctx.query).nombre !== undefined) {
		const {nombre} = ctx.query 

		const housings = await fetch(`http://${process.env.URL}/api/housings/nombre/${nombre}`)
		.then(response => response.json())

		return {
			props:{
				housings
			}
		}
	}

	if(((ctx.query).price1 !== undefined) && ((ctx.query).price2 !== undefined)) {
		const {price1} = ctx.query
		const {price2} = ctx.query 

		const housings = await fetch(`http://${process.env.URL}/api/housings/prices/${price1}/${price2}`)
		.then(response => response.json())

		return {
			props:{
				housings
			}
		}
	}

	if((ctx.query).address !== undefined) {
		const {address} = ctx.query 

		const housings = await fetch(`http://${process.env.URL}/api/housings/address/${address}`)
		.then(response => response.json())

		return {
			props:{
				housings
			}
		}
	}

	const housings = await fetch(`http://${process.env.URL}/api/housings`)
		.then(response => response.json())

		return {
			props:{
				housings
			}
		}
} 

export default Housings 


