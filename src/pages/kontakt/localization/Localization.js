import React from "react";

// Vendor components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Localization = (props) => {
    const mapSettings = {
        center: [49.61411, 20.70370],   // localization co-ordinates
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
                    <Marker position={mapSettings.center}>
                        <Popup>
                            Usługi stolarskie Zagórowski
                        </Popup>
                    </Marker>
                </MapContainer>
            </section>
        )
    }
    return null
}
export default Localization