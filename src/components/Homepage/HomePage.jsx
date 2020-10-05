import React, {useState} from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"
import database from "./../../models/database.json"
import {ArrowRight} from 'react-bootstrap-icons'
import ShoeBrand from "./ShoeBrand/ShoeBrand";

function HomePage() {
    const data = database
    const [count, setCount] = useState(0)

    const id = {
        mainPictureId: count,
        blurredPicturedId: count + 1,
    }
    if (count >= 3) {
        id.blurredPicturedId = 0
    }
    const increment = () => {
        count >= 3 ? setCount(0) : setCount(c => c + 1)
    }

    const styles = {
        button: {
            height: "95px",
            width: "95px",
            borderRadius: "50%",
            border: " 2px outset black",
            backgroundColor: "transparent",
            clipPath: "polygon(100% 0, 100% 5%, 40% 100%, 0 100%, 0 0)",
            marginTop : "21em",
            marginLeft: "-6em",
            zIndex :"99"
        },
        body: {
            backgroundColor: "#fefefe",
            overflow : "hidden"
        },
        name : {
            marginTop : "8em"
        },
        brand : {
            marginTop : "2.5em",
            paddingTop :"24em",
        },
        picture : {
            marginLeft:"20em",
        }
    }

    return (
        <div onClick={increment} className="h-100" style={styles.body}>
            {[data].map((d) =>
                <div className="h-75" key={id.mainPictureId}>
                    <div className="row h-100">
                        <div className="col-12  h-100 ">
                            <div className="row h-100">
                                <div style={styles.name}   className="col-5 offset-1 align-middle">
                                    <ShoeName style={styles.left}>{d.shoe[id.mainPictureId].name}</ShoeName>
                                </div>
                                <ShoePicture style={styles.picture} link={d.shoe[id.mainPictureId].picture}
                                             brand={d.shoe[id.mainPictureId].brand}/>
                                <div style={styles.brand} className="col-3">
                                    <ShoeBrand >{d.shoe[id.mainPictureId].brand}</ShoeBrand>
                                </div>
                                <div className="col-1">
                                    <button style={styles.button} ><ArrowRight size={30}/></button>
                                </div>
                                <div className="col-2"><BackgroundShoeBlured
                                    link={d.shoe[id.blurredPicturedId].picture}
                                    name={d.shoe[id.blurredPicturedId].name}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <ButtonProduct>View Product</ButtonProduct>
                        </div>
                    </div>


                </div>
            )}
        </div>
    )
}


export default HomePage