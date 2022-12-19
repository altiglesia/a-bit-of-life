import ByteCharacter from "./ByteCharacter"

import { PLAYER_DIMENSIONS } from "../../config/constants";

function Player({ frame, direction, position }) {
    const top = position.top;
    const left = 192;

    return (
        <>
            <ByteCharacter
                sprite={`../../assets/byte_sprite_sheet.png`}
                playerDimensions={PLAYER_DIMENSIONS}
                frame={frame}
                direction={direction}
                top={top}
                left={left}
            />
        </>
    )
}

export default Player;