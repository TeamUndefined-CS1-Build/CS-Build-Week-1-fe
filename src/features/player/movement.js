import store from "../../config/store"
import { SPRITE_X, SPRITE_Y } from '../../config/constants'

export default function handleMovement(player) {

    const getNewPosition = direction => {
        const oldPos = store.getState().player.position
        switch (direction) {
            case 'WEST':
                return [oldPos[0] - SPRITE_X, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + SPRITE_X, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_Y]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_Y]
        }


    }

    const move = (direction) => {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    const handleKeyDown = e => {
        e.preventDefault()

        switch (e.keyCode) {
            case 37:
                return move('WEST')

            case 38:
                return move('NORTH')

            case 39:
                return move('EAST')

            case 40:
                return move('SOUTH')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}

