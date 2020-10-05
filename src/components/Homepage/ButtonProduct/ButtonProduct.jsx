import React, {} from 'react'

function ButtonProduct({children}) {

    const style = {
        buttonProduct: {
            backgroundColor: "#fefefe",
            borderStyle: "none",
            height: "80px",
            width: "250px",
            boxShadow: "10px 10px 132px 0px rgba(0,0,0,0.28)",
            filter: "url(/#noise)",
            zIndex:"99",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",


        },
        textProduct: {
            color: "black",
            fontSize: "1.3rem",
            position: "relative",
            top: "-45px",
            left: "10px"
        },
    }


    return <div style={style.filter}>

        <filter style={style.filter} id='noise' x='0%' y='0%' width='100%' height='1px'>
            <feTurbulence baseFrequency="0.03 0" result="NOISE" numOctaves="2"/>
            <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="20" xChannelSelector="R"
                               yChannelSelector="R"/>
        </filter>


        <button style={style.buttonProduct}>
        </button>
        <span style={style.textProduct}> {children}</span>
    </div>
}

export default ButtonProduct
