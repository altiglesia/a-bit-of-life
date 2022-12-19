function Sprite({ image, movementDimensions, top, left }) {

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
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x}px -${y}px`,
        }}
    />
}

export default Sprite;