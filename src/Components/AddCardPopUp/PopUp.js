import React from "react";
import { Button, TextField, Zoom } from "@material-ui/core";

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleClose(event) {
        this.props.closePopUp();
    }
    handleAdd(event) {
        this.props.addCard();
    }
    render() {
        return (
            <Zoom in={this.props.visible}>
                <div
                    style={{
                        border: "1px solid var(--chrome-yellow)",
                        background: "white",
                        height: "300px",
                        width: "400px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexFlow: "column wrap",
                        margin: "0 auto",
                        borderRadius: "20px",
                        visibility: this.props.visible ? "visible" : "hidden",
                        position: "absolute",
                        top: "calc( 50% - 150px )",
                        left: "calc( 50% - 200px )",
                    }}
                >
                    <TextField label="Enter Name" />
                    <Button
                        style={{
                            backgroundColor: "var(--violet-blue)",
                            margin: 20,
                            color: "white",
                        }}
                        onClick={this.handleAdd}
                    >
                        ADD
                    </Button>
                    <Button
                        style={{
                            backgroundColor: "var(--orange-red-crayola)",
                            margin: 20,
                            color: "white",
                        }}
                        onClick={this.handleClose}
                    >
                        Close
                    </Button>
                </div>
            </Zoom>
        );
    }
}
export default PopUp;
