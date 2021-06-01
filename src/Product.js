import React from "react";
import './Product.css';

function Product(props) {
    console.log(props)
    return(
        <div className={"product"}>
            <h2>{props.fruit}</h2>
            <input className={"btn"} type={"button"} value={'-'} disabled={props.counter === 0} onClick={() => props.updateCounter(props.counter - 1)} />
            <label className={"counter"}>{props.counter}</label>
            <input className={"btn"} type={"button"} value={'+'} onClick={() => props.updateCounter(props.counter + 1)} />
        </div>
    );
}

export default Product;