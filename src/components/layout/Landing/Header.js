import React from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import hiverLogo from "../../../asset/images/hiver-logo.png";
import { Button } from "@material-ui/core";

const Header = () => {
  return (
    <div class="d-flex justify-content-around">
      <div className="div-main">
        <img style={{ width: "130px", height: "84px" }} src={hiverLogo} />
      </div>
      <div className="div-right">
        <div className="div-encounter">
          <FavoriteBorderOutlinedIcon
            style={{ color: "#fff" }}
            fontSize={"large"}
          />
          <p
            style={{
              margin: "2px",
              color: "white",
            }}
          >
            Encounter
          </p>
        </div>
        <div className="div-nearby">
          <LocationOnOutlinedIcon
            style={{ color: "#fff" }}
            fontSize={"large"}
          />
          <p
            style={{
              margin: "2px",
              color: "white",
            }}
          >
            People nearby
          </p>
        </div>
        <Button variant="outlined" size="small" className="button-signin">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
