import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { SaveSharp } from "@material-ui/icons";

function Navbar() {
    return (
        <AppBar position="static">
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
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<SaveSharp />}
                    >
                        Add Tile
                    </Button>
                </div>
            </ToolBar>
        </AppBar>
    );
}
export default Navbar;
