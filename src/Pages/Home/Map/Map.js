import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import mapboxgl from 'mapbox-gl';
import './map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoicmFobWFuMzMzNDQxIiwiYSI6ImNrdmprdWE0cTBjNTUyb28wdDJtbHRicWwifQ.CJcJIKK66wPbG9bVwJqQ5A';


const Map = () => {
    useEffect( ()=>{

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.7474886, 23.2531225],
            zoom: 7
            });
            const marker1 = new mapboxgl.Marker()
            .setLngLat([90.7474886, 23.2531225])
            .addTo(map);
    },[])
    return (
        <div className="my-5">
            <h2 className="text-center my-5 text-primary">Our Location on map</h2>
            <Container className="map-container">
                <div id="map" style={{height:'400px'}}></div>
            </Container>
        </div>
    );
};

export default Map;