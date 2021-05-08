import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Navbar() {
    return (
        <AppBar position="static">
            <ToolBar>
                <Typography variant="h5" color="inherit">
                    Tier listify
                </Typography>
            </ToolBar>
        </AppBar>
    );
}
export default Navbar;
