import store from "../../config/store"
import { TILE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants'

export default function handleMovement(player) {

    const getNewPosition = (oldPos, direction) => {

        switch (direction) {
            case 'WEST':
                return [oldPos[0] - TILE_SIZE, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + TILE_SIZE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - TILE_SIZE]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + TILE_SIZE]
        }


    }

    const observeBoundries = (oldPos, newPos) => {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - TILE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - TILE_SIZE)
    }

    const observeObjects = (oldPos, newPos) => {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / TILE_SIZE
        const x = newPos[0] / TILE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    const move = (newPos) => {

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos
            }
        })
    }

    const tryMove = (direction) => {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if (observeBoundries(oldPos, newPos) && observeObjects(oldPos, newPos)) {
            move(newPos)
        }
    }


    const handleKeyDown = e => {
        e.preventDefault()

        switch (e.keyCode) {
            case 37:
                return tryMove('WEST')

            case 38:
                return tryMove('NORTH')

            case 39:
                return tryMove('EAST')

            case 40:
                return tryMove('SOUTH')

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}

