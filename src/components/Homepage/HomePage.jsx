import React from "react";
import ShoePicture from "./ShoePicture/ShoePicture";
import ShoeName from "./ShoeName/ShoeName"
import ShoeBrand from "./ShoeBrand/ShoeBrand";
import ButtonCarroussel from "./ButtonCarroussel/ButtonCarroussel";
import ButtonProduct from "./ButtonProduct/ButtonProduct";
import BackgroundShoeBlured from "./BackgroundShoeBlured/BackgroundShoeBlured"

function HomePage() {
    return (
        <div>
            <ShoePicture/>
            <ShoeName>Mayfly  Woven</ShoeName>
            <ShoeBrand>Nike</ShoeBrand>
            <ButtonCarroussel/>
            <BackgroundShoeBlured/>
            <ButtonProduct>View Product</ButtonProduct>
        </div>
    )
}

export default HomePage