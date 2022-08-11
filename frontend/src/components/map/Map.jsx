import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function Map({ coordinates, position }) {
  function SetViewOnClick() {
    const map = useMap();
    map.setView(coordinates, map.getZoom());
  }

  return (
    <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

          {position.map((pos) => {
        return (
          <Marker position={[pos.lat, pos.long]}>
            <Popup>
                    <h1>{pos.name}</h1> <br /> 
                    <h3>{pos.address}</h3>
            </Popup>
          </Marker>
        );
      })}

      <SetViewOnClick />
    </MapContainer>
  );
}
