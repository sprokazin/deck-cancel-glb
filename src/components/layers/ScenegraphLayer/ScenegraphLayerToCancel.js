import React from 'react';
import {ScenegraphLayer} from "deck.gl";
import {GLTFLoader} from '@loaders.gl/gltf';

const data = [{name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638]}]
const url = 'https://minio.cgis.io/cubagis-gallery/1bfbd0bd-4133-6917-6ab5-0fc4ee8fcb58--pavilon_%4034_2.glb'

const ScenegraphLayerToCancel = (signal) => {

    return [
       new ScenegraphLayer({
           data: data,
           scenegraph: url,
           pickable: true,
           getPosition: d => d.coordinates,
           getOrientation: d => [0, 0, 90],
           loadOptions: {
               fetch: {
                   signal: signal
               }
           },
           loaders: [GLTFLoader],
           _lighting: 'pbr'
       })
    ]
};

export default ScenegraphLayerToCancel;