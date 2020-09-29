import React, {} from 'react'

function ButtonProduct({children}) {



    const style = {
        buttonProduct : {
            backgroundColor: "white",
            color : "black",
            borderStyle : "none",
            height : "80px",
            width : "250px",
            fontSize : "1.3rem",
            filter : "url(/#noise)"

        },
        textProduct :{
        filter : "url()"
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
