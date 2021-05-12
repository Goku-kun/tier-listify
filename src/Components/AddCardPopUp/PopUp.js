import React from "react";
import {
    Button,
    TextField,
    Zoom,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
} from "@material-ui/core";

class PopUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            name: "",
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleClose(event) {
        this.props.closePopUp();
    }
    handleAdd(event) {
        if (this.state.name === "" || this.state.type === "") {
            return;
        }
        this.props.addCard({
            id: Math.random() * 100,
            name: this.state.name,
            image: "",
            type: this.state.type,
        });
        this.setState({
            name: "",
            type: "",
        });
    }

    handleType(event) {
        this.setState({
            type: event.target.value,
        });
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
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
                    <FormControl required>
                        <TextField
                            label="Enter Name"
                            focused
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            error={this.state.name === ""}
                        />
                    </FormControl>
                    <div style={{ paddingTop: 10 }}>
                        <InputLabel shrink>Class Type</InputLabel>
                        <FormControl required>
                            <Select
                                variant="outlined"
                                value={this.state.type}
                                onChange={this.handleType}
                                displayEmpty
                                error={!this.state.type}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"S"}>S class</MenuItem>
                                <MenuItem value={"A"}>A class</MenuItem>
                                <MenuItem value={"B"}>B class</MenuItem>
                                <MenuItem value={"C"}>C class</MenuItem>
                                <MenuItem value={"D"}>D class</MenuItem>
                                <MenuItem value={"E"}>E class</MenuItem>
                                <MenuItem value={"F"}>F class</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div style={{ display: "flex" }}>
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
                </div>
            </Zoom>
        );
    }
}
export default PopUp;
