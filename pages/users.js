import { getSession, useSession } from "next-auth/react"
import { Button, Card, TextInput, Dropdown } from 'flowbite-react'
import { useState } from "react"
import { useRouter } from "next/router"
import { AdvancedImage } from "@cloudinary/react"
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import Link from 'next/link'
import NavbarItem from '../components/navbar'

const Users = ({users, loggedUser}) => {
	const { data: session } = useSession()
	const router = useRouter()

	const [usernameValue, setUsername] = useState(users.username)
	const [age1Value, setAge1] = useState(users.age1)
	const [age2Value, setAge2] = useState(users.age2)

	const handleSubmit = async event => {
		event.preventDefault()
		if((event.target.age1.value !== "") && (event.target.age2.value !== "")) {
			router.push(`/users?age1=${event.target.age1.value}&age2=${event.target.age2.value}`)
		} else if(event.target.username.value !== "") {
			router.push(`/users?username=${event.target.username.value}`)
		} else {
			router.push(`/users`)
		}
	}

	async function newLoggedUser() {
		if((loggedUser != null) && !loggedUser.length) {
			await fetch(`http://${process.env.URL}/api/users`, {
					body: JSON.stringify({
						name: (session.user).name,
						surname: "",
						email: (session.user).email,
						username: (session.user).email,
						age: 0,
						public_id: ""
					}),
					headers: {
						'Content-Type': 'application/json'
					},
					method: 'POST'
				})	
				router.push(`/users`)
		}
	}
	

	return (
		<>
			<NavbarItem />	
			<div className="flex flex-col pt-10 items-center">

				<Card>
					<div className="flex items-center justify-center">
						<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Usuarios</h5>
					</div>

					<ul className="divide-y divide-gray-200 dark:divide-gray-700">
						{users && users.length > 0 ? (
							users.map((user) => {
								const cld = new Cloudinary({
									cloud: {
										cloudName: process.env.CLOUDINARY_URL
									}
								});
								const myImage = cld.image(user.public_id)
								myImage.resize(thumbnail().width(70).height(70).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(10));

								if(session) {
									newLoggedUser()
								}

								return (
									<li className="py-3 sm:py-4">
										<div className="flex items-center space-x-4">
											<AdvancedImage cldImg={myImage} />
											<div className="min-w-0 flex-1">
												<p className="text-lg font-semibold text-gray-900">{user.username} </p>
												<p className="text-base font-light text-gray-700 ">{user.name + " " + user.surname + " (" + user.age + " años)"} </p>
											</div>
											<Link href={`user/?id=${user._id}`} passHref><Button className="bg-blue-600 hover:bg-blue-800">Ver perfil</Button></Link>
										</div>
									</li>
								)
							}))
							:
							(
								<div className="flex flex-col w-full h-full items-center justify-center">
									<span>No se han encontrado resultados en esta lista.</span>
								</div>
							)
						}
					</ul>
				</Card>
			</div>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const session = await getSession(ctx)
	let loggedUser = null

	if(session) {
		loggedUser = await fetch(`http://${process.env.URL}/api/users/email/${(session.user).email}`).then(response => response.json())
	}

	if(((ctx.query).age1 !== undefined) && ((ctx.query).age2 !== undefined)) {
		const {age1} = ctx.query
		const {age2} = ctx.query 

		const users = await fetch(`http://${process.env.URL}/api/users/ages/${age1}/${age2}`)
		.then(response => response.json())

		return {
			props:{
				users,
				loggedUser
			}
		}
	}

	if((ctx.query).username !== undefined) {
		const {username} = ctx.query 

		const users = await fetch(`http://${process.env.URL}/api/users/username/${username}`)
		.then(response => response.json())

		return {
			props:{
				users,
				loggedUser
			}
		}
	}

	const users = await fetch(`http://${process.env.URL}/api/users`)
		.then(response => response.json())
	
		return {
			props:{
				users,
				loggedUser
			}
		}
}

export default Users
