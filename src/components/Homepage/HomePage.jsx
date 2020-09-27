import React, {useState} from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ShoeBrand from "./ShoeBrand/ShoeBrand";
import ButtonCarroussel from "./ButtonCarroussel/ButtonCarroussel";
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"
import database from "./../../models/database.json"



function HomePage({id = 0}) {
    const data = database


    console.log(id)
    return (
        <div>
            {[data.shoe[id]].map((d) => <div key={d.id}>
                <ShoePicture link={d.picture} name={d.name} />
                    <ShoeName>{d.name}</ShoeName>
                    <ShoeBrand>{d.brand}</ShoeBrand>
                    <ButtonCarroussel props={id} size={data.shoe.length} />
                    <BackgroundShoeBlured props={d.id}/>
                    <ButtonProduct props={d.id}>View Product</ButtonProduct>
                </div>
            )}
        </div>
    )
}


export default HomePage