import React, { useEffect } from 'react'
import Player from '../player';
import Map from '../map'

import { tiles } from '../../data/maps/1'
import store from '../../config/store'


const World = props => {

    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
    )
}

export default World