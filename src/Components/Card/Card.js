import React from "react";
import "./Card.css";

function CardComponent(props) {
    function handleClick(event) {
        props.removeCard(props.id);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={props.image} style={{ width: "100%", height: "auto" }} alt={props.name} />
            <a
                href="#0"
                style={{
                    marginTop: "0.2rem",
                    padding: 0,
                    textDecoration: "none",
                    color: "black",
                    overflowY: "auto",
                }}
            >
                {props.name}
            </a>
        </div>
    );
}
export default CardComponent;
