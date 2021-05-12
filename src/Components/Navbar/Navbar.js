import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import { Slide } from "@material-ui/core";

function Navbar(props) {
    function handleClick(event) {
        props.openPopUp();
    }
    return (
        <AppBar position="fixed">
            <ToolBar>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Typography variant="h5" color="inherit">
                        Tier Listify
                    </Typography>
                    <div style={{ display: "flex" }}>
                        <Slide in={!props.visible} direction="left">
                            <Fab
                                variant="extended"
                                color="secondary"
                                aria-label="add"
                                size="medium"
                                onClick={handleClick}
                            >
                                <NavigationIcon />
                                Add a tile
                            </Fab>
                        </Slide>
                    </div>
                </div>
            </ToolBar>
        </AppBar>
    );
}
export default Navbar;
