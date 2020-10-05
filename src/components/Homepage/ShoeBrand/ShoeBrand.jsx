import React, {} from 'react'

const styles = {
    text: {
        fontWeight: "bold",
        color : "transparent",
        WebkitTextStroke : "0.5px #D6D4D3",
        fontSize: "13rem",
        textAlign :"left",
    }
}

function ShoeBrand({children}) {
    return <>
        <h1 style={styles.text}>{children}</h1>
    </>
}
export default ShoeBrand
