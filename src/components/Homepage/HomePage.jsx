import React, {useState} from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"
import database from "./../../models/database.json"
import { ArrowRight } from 'react-bootstrap-icons';


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
            height: "120px",
            width: "120px",
            borderRadius: "50%",
            border: " 3px outset black",
            backgroundColor: "transparent",
            clipPath: "polygon(100% 0, 100% 5%, 40% 100%, 0 100%, 0 0)"
        },
        body :  {
            backgroundColor: "#fefefe"
        }
    }

    return (
        <div style={styles.body}>
            {[data].map((d) =>
                <div key={id.mainPictureId}>
                    <ShoePicture link={d.shoe[id.mainPictureId].picture}
                               name={d.shoe[id.mainPictureId].name}
                    props={d.shoe[id.mainPictureId].brand}/>

                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-5 offset-1">
                                    <ShoeName>{d.shoe[id.mainPictureId].name}</ShoeName>
                                </div>
                                <div className="col-1 offset-4">
                                    <button style={styles.button} onClick={increment}><ArrowRight size={30} /></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1"><BackgroundShoeBlured
                                    link={d.shoe[id.blurredPicturedId].picture}
                                    name={d.shoe[id.blurredPicturedId].name}/></div>
                            </div>

                            <div className="row">
                                <div className="col-12 ">
                                    <ButtonProduct>View Product</ButtonProduct>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage