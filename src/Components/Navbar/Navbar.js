import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";

function Navbar(props) {
    function handleClick(event) {
        props.openPopUp();
    }
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
                </div>
            </ToolBar>
        </AppBar>
    );
}
export default Navbar;

//<Button
//variant="contained"
//color="secondary"
//size="large"
//startIcon={<SaveSharp />}
//>
//Add Tile
//</Button>
