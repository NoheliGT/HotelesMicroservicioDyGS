import React from 'react'
import { MapContainer , Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = ({ positionDefault = [19.83822808, -90.53679608] }) => {
    return (
        <MapContainer  center={positionDefault} zoom={9} minZoom={2} scrollWheelZoom={false} style={{ height: '100vw', width: '100vw', position: "relative",  padding: "0px 1rem 1rem 1rem"}}>
            <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
            maxZoom={20}
            />
            <Marker position={[4.660779178475431, -74.08494168529754]}>
                <Popup>This is your marker<br />Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    )
}