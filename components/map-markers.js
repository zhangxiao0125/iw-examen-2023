import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapMarkers = ({ google, aparcamientosCoordenadas }) => {
  const containerStyle = {
    position: "relative",
    width: "90vw",
    height: "90vh",
  };

  const malagaCentroCenter = {
    lat: 36.71669291942506,
    lng: -4.426547219178289,
  };
  return (
    <div className="relative flex flex-col w-full h-full">
      <Map
        google={google}
        zoom={15}
        initialCenter={malagaCentroCenter}
        containerStyle={containerStyle}
      >
        {aparcamientosCoordenadas.map((coordenada) => (
          <Marker position={coordenada} />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLEMAPS_KEY,
  language: "ES",
})(MapMarkers);
