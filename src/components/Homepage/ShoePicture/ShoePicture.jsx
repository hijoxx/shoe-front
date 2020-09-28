import React, {} from 'react'
import ShoeBrand from "../ShoeBrand/ShoeBrand";

 function ShoePicture({link,name,props}) {

     const styles = {
         container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
         },
         image: {
             height: 500,
              transform: `rotate(`+-25+`deg)`
         }
     }

    return (
        <div>
        <img style={styles.image} className="img-fluid" src={link} alt={name}/>
        <ShoeBrand>{props}</ShoeBrand>


        </div>
    )
}
export default ShoePicture
