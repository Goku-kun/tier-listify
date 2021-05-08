import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleleIcon from "@material-ui/icons/DeleteRounded";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 170,
        maxHeight: 300,
    },
    media: {
        paddingTop: "100%",
    },
}));

function CardComponent(props) {
    const classes = useStyles();

    return (
        <Card className={`${classes.root}`} style={{ margin: 20, border: "2px solid goldenrod" }}>
            <CardMedia className={classes.media} image={props.image} title="Rengoku Kyojuro" />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is a template display design.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <DeleleIcon style={{ color: "red" }} />
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default CardComponent;
