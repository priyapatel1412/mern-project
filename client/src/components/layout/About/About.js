import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import { GitHub, LinkedIn } from "@mui/icons-material";

const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/patelpriyanka2512/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/didtkbpn7/image/upload/v1649214465/avatars/r2ovprpc906k5devumwl.jpg"
              alt="Founder"
            />
            <Typography>Priyanka Patel</Typography>
            {/* <Button onClick={visitLinkedin} color="primary">
              Visit Linkedin
            </Button> */}
            <span>This is a sample wesbite created usind MERN stack.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contacts</Typography>
            <a href="https://github.com/priyanka-arq" target="blank">
              <GitHub className="githubvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/patelpriyanka2512/"
              target="blank"
            >
              <LinkedIn className="linkedinSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
