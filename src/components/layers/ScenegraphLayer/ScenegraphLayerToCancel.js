import React from 'react';
import {ScenegraphLayer} from "deck.gl";
import {GLTFLoader} from '@loaders.gl/gltf';


const data = [{name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638]}]
const url = 'https://files.kaiten.ru/b49de011-4884-4a23-873b-d941e3f659ab.glb?name=futuristic_building.glb'

const ScenegraphLayerToCancel = (signal) => {

    return [
       new ScenegraphLayer({
           data: data,
           scenegraph: url,
           pickable: true,
           getPosition: d => d.coordinates,
           getOrientation: d => [0, -45, 90],
           loadOptions: {
               fetch: {
                   signal: signal
               }
           },
           loaders: [GLTFLoader],
           _lighting: 'pbr',
           sizeScale: 5
       })
    ]
};

export default ScenegraphLayerToCancel;