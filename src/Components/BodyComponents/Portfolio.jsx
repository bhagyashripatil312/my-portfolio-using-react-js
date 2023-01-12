import { Box,Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/commonComponent";
import { useStyles } from "./BodyStyles";

import bunge from "../../images/bunge.jfif";
import Food from "../../images/Food.jfif";
import books from "../../images/books.jfif";
import image4 from "../../images/5-6.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: bunge, title: "Bunge-IT Consulting Services ", link: "",desc:"In this Application , Technology which is used is React Js along with typescript. Integrated Grids and Tables with ag-grid and material table."},
    { url: Food, title: "Food Delivery Application ", link: "",desc:"An online food delivery application using React.js, ES6, bootstrap5. The Objective of this project is to hands on practice of reactjs liabrary .using this app we can search Meals Images using meal-db api."},
    { url: books, title: "Books Store", link: "",desc:"This is a simple bookstore app developed with React Native and integrated with Rave React Native SDK for payment collection." },
    { url: image4, title: "# Portfolio ", link: "" },
     ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          style={{
            displa: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg1}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Typography className={classes.overlayTitle1}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
