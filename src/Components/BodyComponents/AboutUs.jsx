import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About_Me.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import { DiReact,DiJavascript1,DiCss3,DiHtml5} from 'react-icons/di';
import { SiTypescript,SiMaterialui,SiJira,SiBitbucket} from 'react-icons/si';
import { BiGitBranch} from 'react-icons/bi';
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " React JS",
      icon:  <DiReact />,
    },
    {
      title: "Javascript",
      icon: <DiJavascript1 />,
    },
    {
      title: "HTML 5",
      icon: <DiHtml5 />,
    },
    {
      title: "CSS",
      icon: <DiCss3 />,
    },
    {
      title: "Typescript",
      icon: <SiTypescript />,
    },
    {
      title: "Material-ui",
      icon: <SiMaterialui />,
    },
    {
      title: "JIRA",
      icon: <SiJira />,
    },
    {
      title: "Git",
      icon: <BiGitBranch />,
    },
    {
      title: "Bitbucket",
      icon: <SiBitbucket/>,
    },
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5} >
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Bhagyashri Patil",
                description:
                  "A self taught developer who loves to codes something that wiil impact majority of the people in good waay ! Passionate About Web Development, Goal is to achieve a good position by doing satisfying work in web development",
                  
              })}
              <br />
             
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      // Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
