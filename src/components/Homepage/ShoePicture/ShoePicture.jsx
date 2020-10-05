import React, {} from 'react'

function ShoePicture({link, name}) {
    const styles = {
        image: {
            height: 700,
            zoom :"1.2",
            width: "auto",
            transform: `rotate(` + -30 + `deg)`,
            position: "absolute",
            top:"-15%",
            left: "30%",
            zIndex : "2",
        }
    }

    return (
        <>
            <img style={styles.image} className="img-fluid" src={link} alt={name}/>
        </>
    )
}

export default ShoePicture
