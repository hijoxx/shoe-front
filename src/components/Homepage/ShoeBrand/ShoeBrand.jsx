import React, {} from 'react'

const styles = {
    container: {
     marginTop :"1000%",
    },
    image: {
        height: 700,

    }
}





function ShoeBrand({children}) {
    return <div>
        <h1 className={styles.container}>{children}</h1>
    </div>
}
export default ShoeBrand
