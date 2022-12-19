import byte_sprite_sheet from "../../assets/byte_sprite_sheet.png"

function ByteSprite({ image, movementDimensions, top, left }) {

    const { y, x, h, w } = movementDimensions;

    //using CSS tricks to animate sprite sheet
    return <div
        style={{
            position: "absolute",
            zIndex: 2,
            top: top - 13,
            left: `${left}px`,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${byte_sprite_sheet})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x}px -${y}px`,
            backgroundColor: "transparent",
        }}
    />
}

export default ByteSprite;