import React, {} from 'react'

const styles = {
    text: {
        fontWeight: "bold",
        color : "transparent",
        WebkitTextStroke : "1px #D6D4D3",
        fontSize: "15rem",
        textAlign :"left"
    }
}

function ShoeBrand({children}) {
    return <div>
        <h1 style={styles.text}>{children}</h1>
    </div>
}
export default ShoeBrand
