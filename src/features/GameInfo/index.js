import React from 'react';
import { useSelector } from 'react-redux';

const GameInfo = props => {
    const currentRoom = useSelector(state => state.player.currentRoom)

    console.log(currentRoom)
    return (
        <div>
            <h1>You're in {currentRoom.name}!</h1>
            </div>
    )
}

export default GameInfo;