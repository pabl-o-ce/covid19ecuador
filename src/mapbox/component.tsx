import React, { useState } from 'react';
// import DeckGL from '@deck.gl/react';
// import {LineLayer} from '@deck.gl/layers';
import ReactMapGL from 'react-map-gl';

import './style.scss';

function Mapbox() {
    // const TOKEN = 'pk.eyJ1IjoicGFibGluZXMiLCJhIjoiY2s4YmhudDl1MDh3YjNlb3dmbDNqOWZvNSJ9.DaOPna0o3vHPTwHVzgaQOg';
    // const [viewport, setViewport] = useState({
    //     latitude: -1.6700000000000002,
    //     longitude: -83.5975,
    //     zoom: 4.85,
    //     pitch: 0,
    //     bearing: 0
    // });

    return (
        <section className="mapbox">
            {/* <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/pablines/ck9bsdl5y0dk61jm7iyp8zlib"
                mapboxApiAccessToken={TOKEN}
                onViewportChange={newViewport => setViewport(newViewport)}
            /> */}
            {/* <DeckGL
                initialViewState={...viewport}
                width="100%"
                height="100%"
            >
                <StaticMap 
                    mapStyle="mapbox://styles/pablines/ck9bsdl5y0dk61jm7iyp8zlib"
                    mapboxApiAccessToken={TOKEN}
                />
            </DeckGL> */}
        </section>
    );
}

export default Mapbox;
