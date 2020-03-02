import React from 'react'
import Player from '../player';
import Map from '../map'

const World = props => {
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '600px',
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
    )
}

export default World