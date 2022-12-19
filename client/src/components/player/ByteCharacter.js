import Sprite from "./ByteSprite";

function Character({ sprite, playerDimensions, top, left, frame = 0, direction = 0 }) {

    const { h, w } = playerDimensions;
    
    return (
        <ByteSprite
            image={sprite}
            top={top}
            left={left}
            movementDimensions={{
                x: frame * w,
                y: direction * h,
                w,
                h,
            }}
        />
    )
}

export default Character;