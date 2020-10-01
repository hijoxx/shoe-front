import React, {} from 'react'

function ButtonProduct({children}) {

    const style = {
        "&:before": {
            zIndex: "-1",
            top: "-1.5em; right: -1.5em; bottom: -1.5em; left: -1.5em",
            border: "inherit",
            borderColor: "transparent",
            background: "inherit",
            backgroundClip: "borderBox",
            content: '',
            filter: "url(/#noise)",
        },

        buttonProduct: {
            backgroundColor: "#fefefe",
            borderStyle: "none",
            height: "80px",
            width: "250px",
            boxShadow: "10px 10px 132px 0px rgba(0,0,0,0.28)"
        },
        textProduct: {
            color: "black",
            fontSize: "1.3rem",
            filter: "url(/#noNoise)"
        }
    }

    return <div>
        <svg viewBox="0 0 0 0">
            <filter id='noise' x='0%' y='0%' width='100%' height='100%'>
                <feTurbulence baseFrequency="2 0.04" result="NOISE" numOctaves="2"/>
                <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" xChannelSelector="R" yChannelSelector="R"/>
            </filter>
        </svg>

        <button style={style.buttonProduct}>
            <p style={style.textProduct}> {children}</p>
        </button>
    </div>
}

export default ButtonProduct
