import React from "react";

// Vendor components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Localization = (props) => {
    const position = [51.505, -0.09]
    const mapSettings = {
        center: [51.505, -0.09],
        zoom: 13,
        scrollWheelZoom: false
    }

    if(typeof window !== 'undefined') {
        return(
            <section className="contact__localization">
                <MapContainer {...mapSettings}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </section>
        )
    }
    return null
}
export default Localization