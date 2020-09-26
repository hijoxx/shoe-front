import React from 'react'
// import database from './../../../models/database.json'

function BackgroundShoeBlured({props}) {
    // const data = database

    // const blurredPict = data.shoe[props + 1].picture
    const blurredPict = "yo"
// console.log({props})

    return <div>
        <img src={blurredPict} alt ={props}/>
    </div>
}

export default BackgroundShoeBlured
