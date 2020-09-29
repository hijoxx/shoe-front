import React from "react";

function Cartnotification({props = 0}){

    const styles= {
        notificiationBox :{
            height: "2rem",
            width: "2rem",
            backgroundColor : "#27b67a",
            color : "white",
            borderRadius : "50%",

        },
        notificationText :{
            display :"block",
            margin :"auto",
            verticalAlign: "middle",
            fontSize :"16px",
            height: "100%"
        }
    }

    return(
       <div style={styles.notificiationBox}>
           <p className="align-middle" style={styles.notificationText}>{props}</p>
    </div>
    )
}
export default Cartnotification
