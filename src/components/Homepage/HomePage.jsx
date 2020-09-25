import React from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ShoeBrand from "./ShoeBrand/ShoeBrand";
import ButtonCarroussel from "./ButtonCarroussel/ButtonCarroussel";
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"
import database from "./../../models/database.json"

function HomePage() {
    const data = database;
    return (
        <div>
            {data.shoe.map((d) => <div key={d.id}>
                {console.log(data.shoe.length)
                }            <ShoePicture />
                    <ShoeName>{d.name}</ShoeName>
                    <ShoeBrand>{d.brand}</ShoeBrand>
                    <ButtonCarroussel/>
                    <BackgroundShoeBlured/>
                    <ButtonProduct id={"product"+d.id}>View Product</ButtonProduct>
                </div>
            )}
        </div>
    )
}

export default HomePage