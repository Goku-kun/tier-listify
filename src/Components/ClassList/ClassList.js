import React from "react";
import CardComponent from "../Card/Card";

class ClassList extends React.Component {
    render() {
        return (
            <div style={{ display: "flex" }}>
                <p style={{ backgroundColor: "var(--medium-turquoise)", fontSize: "2em" }}>
                    S class
                </p>
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
        );
    }
}

export default ClassList;
