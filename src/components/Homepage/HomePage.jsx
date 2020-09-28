import React, {useState} from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ShoeBrand from "./ShoeBrand/ShoeBrand";
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"
import database from "./../../models/database.json"


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

    return (
        <div>
            {[data].map((d) =>
                <div key={id.mainPictureId}>
                    <ShoePicture link={d.shoe[id.mainPictureId].picture}
                               name={d.shoe[id.mainPictureId].name}
                    props={d.shoe[id.mainPictureId].brand}/>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4 offset-1">
                                    <ShoeName>{d.shoe[id.mainPictureId].name}</ShoeName>
                                </div>
                                <div className="col-1 offset-4">
                                    <button onClick={increment}>Blabalbqf</button>
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