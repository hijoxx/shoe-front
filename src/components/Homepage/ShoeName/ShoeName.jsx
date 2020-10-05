import React, {} from 'react'
import NameFormat from "../../../helpers/NameFormat/NameFormat";

function ShoeName({children}) {
    const styles = {
        text: {
            fontWeight: "bold",
            fontSize: "14rem",
            whiteSpace: "pre-wrap",
            backgroundImage: "url(https://images-ext-2.discordapp.net/external/nEXURHC4aQ20L4dfuQAgaLl1cXaw2TuL-JG-zwEre8g/https/i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2017/10/se-reconcilier-avec-le-sport.jpg?width=1016&height=677)",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "right",
            lineHeight :"0.9em",
            filter: "grayscale(30%)",
            opacity : "0.80",
            blur :"18rem",
            display:"inline-block"
        }
    }

    return <>
        <h1 style={styles.text}>{NameFormat(children)}</h1>
    </>

}

export default ShoeName
