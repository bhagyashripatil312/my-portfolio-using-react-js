import React, { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";
import pdf from "../../images/Bhagyashri1.pdf";
import Typical from "react-typical";
export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

 
  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
    // { label: "Experience", Id: "Experience" },
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
         <span className="about">
              {" "}
              <Typography>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    " I'm a Enthusiastic Dev 😎",
                    8000,
                    "I'm a Full stack Developer 💻",
                    8000,
                    "I'm a React js/React Typescript 🌐",
                    8000,
                    "I'm a React Native 🌐",
                    8000,
                  ]}
                />{" "}
              </h1>{" "}
              </Typography>
              <div className="prompt">
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
            </span>{" "}
           
        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
          I Create Website And Application,
          <br />
          Based On Your Needs...
        </Typography>
      <div style={{display:'flex'}}>
        {Decorator({
          label: "About Me",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}

<a href={pdf} className={classes.navLink} download="Bhagyashri Patil" target='_blank'>
   <Button className={classes.ResumeBtn}>Download Resume</Button>
</a>
        </div>
      </Box>
    </Box>
  );
}
