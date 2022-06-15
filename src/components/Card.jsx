import React from "react";

export default function Card(props) {
    /* 
    properties: 
    id, title, description, price, coverImg, stats, origin, available 
    */

    function handleOnMouseOver(){
        console.log("Mouse Over")
    }

    return (
        <div className="card">
            {/*the javascript adds conditional rendering to "ALL GONE" badge */}
            {props.available === 0 && <div className="card--badge">All Gone</div>}
            <img
                src={props.coverImg}
                className="card--image"
                onMouseOver={handleOnMouseOver}
            />
            <div className="card--stats">
                <img src="/src/images/star.png" className="card--star" />
                <span>{props.stats.rating} ({props.stats.reviewCount})</span>
                <span className="card--available"> • <span className="bold">Available: </span>{props.available}</span>
            </div>
            <h3>{props.title}</h3>
            <p className="card--origin">Origin: {props.origin}</p>
            {/* <p className="card-description">{props.description}</p> */}
            <p className="card--price">${props.price}</p>
        </div>
    )
}