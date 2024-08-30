import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// Fix for default icon issues with Webpack
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

const MapComponent = () => {
  const position = [4.061536, 9.786072];

  return (
    <></>
    // <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%",borderRadius:'10px' }}>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; DEVTE'
    //   />
    //   <Marker position={position}>
    //     <Popup>
    //       A marker at latitude 45.1 and longitude 25.41.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
  );
};

export default MapComponent;
