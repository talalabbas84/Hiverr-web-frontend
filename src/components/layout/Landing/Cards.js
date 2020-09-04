import React from "react";
import { Card, Button } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./index.css";

const useStyles = makeStyles({
  root: {
    width: "70%",
    marginLeft: "25%",
    marginTop: "260px",
    display: "flex",
    alignSelf: "center",
    borderRadius: "30px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cards = () => {
  const classes = useStyles();

  return (
    <div
      className="card-wrapper"
      // style={{
      //   display: "flex",
      //   alignSelf: "center",
      //   width: "60%",
      //   marginTop: "-150px",
      // }}
    >
      <Card
        // className="root-card"
        id="test-card"
        // className={classes.root}
      >
        <CardContent
          className="card-content1"
          // style={{
          //   display: "flex",
          //   flex: 1,
          //   backgroundColor: "#ffffff",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column",
          //   paddingBottom: 100,
          //   paddingTop: 100,
          // }}
        >
          <Typography variant="h3">12,154</Typography>
          <Typography
            variant="body1"
            style={{ width: 200, textAlign: "center", marginTop: "60px" }}
          >
            People have already joined, jump in !
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="sign-fb-btn"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   backgroundColor: "#7348EF",
            //   textTransform: "none",
            //   marginTop: "20px",
            // }}
          >
            <FacebookIcon style={{ marginRight: 10 }} /> Sign in via Facebook
          </Button>
          <Typography
            variant="caption"
            // className="text-youre"
            id="text-youre"
            // style={{ width: 200, textAlign: "center", marginTop: "20px" }}
          >
            We never post on your behalf
          </Typography>
        </CardContent>
        <CardContent
          className="card-content2"
          // style={{
          //   display: "flex",
          //   flex: 1,
          //   backgroundColor: "#F6F6F6",

          //   alignItems: "center",
          //   justifyContent: "center",
          //   flexDirection: "column",
          //   borderRadius: "30px",
          // }}
        >
          <Typography
            variant="h6"
            style={{ width: 200, textAlign: "center", marginTop: "40px" }}
          >
            Sign up by answering a few questions:
          </Typography>
          <Typography
            variant="body1"
            // className="text-youre"
            id="text-youre"
            // style={{ width: 200, textAlign: "center", marginTop: "20px" }}
          >
            You're
          </Typography>
          <Button
            variant="contained"
            className="btn-malefemale"
            // style={{
            //   textTransform: "none",
            //   width: "80%",
            //   marginTop: "20px",
            //   borderRadius: "7px",
            //   backgroundColor: "#ffffff",
            // }}
          >
            Male
          </Button>
          <Button
            variant="contained"
            className="btn-malefemale"
            // style={{
            //   textTransform: "none",
            //   width: "80%",
            //   marginTop: "20px",
            //   borderRadius: "7px",
            //   backgroundColor: "#ffffff",
            // }}
          >
            Female
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
