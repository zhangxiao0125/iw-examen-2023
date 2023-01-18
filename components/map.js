import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const MapItem = ({
	google,
	containerStyle,
	center,
	zoom
}) => {

	return (
		<div className="relative flex flex-col w-full h-full">
			<Map
				google = {google}
				zoom = {zoom}
				initialCenter = {center}
				containerStyle = {containerStyle}
			>
				<Marker position = {center}/>
			</Map>

			
		</div>
	)
}

export default GoogleApiWrapper({
	apiKey: process.env.GOOGLEMAPS_KEY,
	language: 'ES'
})(MapItem)