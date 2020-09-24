import React, {} from 'react'

function BackgroundShoeBlured({name, children}) {
    return <div>
        <img ref={children} alt={name}/>
    </div>
}
export default BackgroundShoeBlured
