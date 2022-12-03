import React from "react";

function Cards(props)
{
    return (
        <div class="cardBox" style={{backgroundColor : "hsl(15, 100%, 70%)"}}>
            <img className="IconImg" src={props.image} />
            <div class="cardData">
                <h6>{props.title}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...</h6>
                <h2>{props.hours}hrs</h2>
                <p>Last {props.category} - {props.hours}hrs</p>
            </div>
        </div>
        
    )
}

export default Cards;
