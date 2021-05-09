import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 150,
        height: 270,
    },
    media: {
        paddingTop: "100%",
    },
}));

function CardComponent(props) {
    const classes = useStyles();
    function handleClick(event) {
        props.removeCard(props.id);
    }

    return (
        <Card
            className={`${classes.root}`}
            style={{ margin: 20, border: "2px solid goldenrod" }}
            onClick={handleClick}
            data-id={props.id}
        >
            <CardMedia
                style={{ backgroundRepeat: "no-repeat", backgroundSize: "100%" }}
                className={classes.media}
                image={props.image}
                title={props.name}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="textPrimary"
                    component="p"
                    style={{ margin: 0, padding: 0, wordWrap: "break-word" }}
                >
                    {props.name}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default CardComponent;
