import React, {useState, useEffect} from 'react';
import DeckGL from 'deck.gl';
import {MapView} from '@deck.gl/core';
import OSMLayer from './layers/tile2d/OSMLayer.js';
import ScenegraphLayerToCancel from "./layers/ScenegraphLayer/ScenegraphLayerToCancel.js";

const Map = () => {

    const abortController = new AbortController()
    const {signal} = abortController

    const deckGLProps = {
        initialViewState: {
            latitude: 37.684638,
            longitude: -122.466233,
            bearing: 0,
            zoom: 16,
            maxPitch: 85,
            minPitch: 0,
        },
        views: [
            new MapView({
                repeat: false,
                nearZMultiplier: 0.01,
            }),
        ],
        layers: [
            OSMLayer(),
            ScenegraphLayerToCancel(signal)
        ],
        controller: {
            doubleClickZoom: false,
            touchRotate: true,
            scrollZoom: {
                speed: 0.005,
            },
        },
    };


    return (
        <div
            onContextMenu={(e) => e.preventDefault()}
            onMouseDown={(e) => e.preventDefault()}
        >
            <DeckGL {...deckGLProps}></DeckGL>
            <button onClick={() => abortController.abort()} className='abort-container'>Abort</button>
        </div>

    );
}

export default Map;
