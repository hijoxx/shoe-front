import React from 'react'

function BackgroundShoeBlured({link,name}) {
    const styles = {
        image: {
            height: 700,
            transform: `rotate(` + -25 + `deg)`,
            overflow : "hidden",
        }
    }
    return (
        <div>
            <svg viewBox="0 -250 500 700" transform="scale(2)">
                <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
                    <feTurbulence baseFrequency="0.04 0" result="NOISE" numOctaves="2"/>
                    <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" xChannelSelector="R" yChannelSelector="R"/>
                </filter>
                <image  style={styles.image}  className="img-fluid" href={link}  x="0" y="0" width="100%" height="100%" filter="url(#noise)"/>
            </svg>
    </div>
    )
}

export default BackgroundShoeBlured
