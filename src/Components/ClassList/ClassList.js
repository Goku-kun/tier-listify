import React from "react";
import "./ClassList.css";
import CardComponent from "../Card/Card";

class ClassList extends React.Component {
    render() {
        return (
            <div className="card-list" style={{ display: "flex", height: "13em" }}>
                <div className="header-card">
                    <h2>{this.props.listStyle} class</h2>
                </div>
                <div className="main-list">
                    {this.props.cards.map((card) => {
                        return (
                            <CardComponent
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                image={card.image}
                                removeCard={this.props.removeCard}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ClassList;
