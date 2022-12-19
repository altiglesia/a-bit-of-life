import './viewport.css'
import { VIEWPORT_SIZE } from '../../config/constants';
// import { useDispatch } from 'react-redux';

import useWalk from '../../hooks/useWalk';
import useKeyboard from '../../hooks/useKeyboard';

import Player from "../player/Player";
import InGameMap from "../InGameMap/InGameMap";


function Viewport() {
    // const dispatch = useDispatch();

    const { direction, animationFrame, position, walk } = useWalk();

    useKeyboard((e) => {
            e.preventDefault()

            switch (e.keyCode) {
                case 40:
                case 83:
                    return walk('down')
                    break;
                case 37:
                case 65:
                    return walk('left')
                    break;
                case 39:
                case 68:
                    return walk('right')
                case 38:
                case 87:
                    return walk('up')
                    break;
                case 13:
                case 32:
                    console.log(position)
                default: ;
            }
    })

    return (
        <div id="viewportContainer" style={{ width: VIEWPORT_SIZE, height: VIEWPORT_SIZE }}>

            <Player
                frame={animationFrame}
                direction={direction}
                position={position}
            />

            <InGameMap
                x={position.left}
            />

            <div
                id="viewportBG"
                style={{
                    width: VIEWPORT_SIZE,
                    height: VIEWPORT_SIZE,
                    zIndex: -1,
                    backgroundColor: "#1e1e2e"
                }}
            />
        </div>
    )
}

export default Viewport;