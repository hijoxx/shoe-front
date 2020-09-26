import React from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ShoeBrand from "./ShoeBrand/ShoeBrand";
import ButtonCarroussel from "./ButtonCarroussel/ButtonCarroussel";
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"
import database from "./../../models/database.json"
import idSlider from "./../../constant/constant"

function HomePage() {
    const data = database


    console.log(idSlider)
    return (
        <div>
            {[data.shoe[idSlider]].map((d) => <div key={d.id}>
                <ShoePicture link={d.picture} name={d.name} />
                    <ShoeName>{d.name}</ShoeName>
                    <ShoeBrand>{d.brand}</ShoeBrand>
                    <ButtonCarroussel props={idSlider} size={data.shoe.length} />
                    <BackgroundShoeBlured props={d.id}/>
                    <ButtonProduct props={d.id}>View Product</ButtonProduct>
                </div>
            )}
        </div>
    )
}

export default HomePage