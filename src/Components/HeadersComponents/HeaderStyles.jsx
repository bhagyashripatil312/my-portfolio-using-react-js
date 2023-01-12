import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  HeardeWraper: {
    minHeight: "90vh",
    height: "auto",
    backgroundRepeat: "no-repeat",
    height: "300px",
  },
  Headercontaier: {
    backgroundImage: 'url("https://images.pexels.com/photos/14524917/pexels-photo-14524917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      height: "-webkit-fill-available", 
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    padding: "20px",
    paddingLeft:"30%",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
    [theme.breakpoints.down('sm')] : {
      paddingLeft:"61%",
      width: "137%",
    },
    [theme.breakpoints.only('sm')] : {
      paddingLeft:"62%",
      width: "138%"
    },
   
  },
  // media query
  
  ResumeBtn:{
    width:"70%",
    height:"99%",
    backgroundColor:"burlywood",
    color:'black',
    marginLeft:'118%',
    marginTop:'9%',
    borderRadius:'58%',
  },
  navLink:{
    textDecoration:"none",
  },
  headerTitle: {
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  headerDesc: {
    fontSize: "2rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      margin: theme.spacing(2, 0),
    },
  },
  navbar: {
    backgroundColor:"darkgoldenrod",
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Theme.colors.base2,
  },

  //decorator.
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: Theme.colors.primary,
      content: '""',
      borderRadius: "50%",
    },
  },
  decoratorText: {
    lineHeight: "40px",
    position: " absolute",
    left: "20px",
  },

  arrow: {
    lineHeight: " 50px",
    position: " absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },

  //creating the animations
  "@global": {
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "0px",
      },
      "100%": {
        transform: "scale(1,2)",
        paddingTop: "10px",
      },
    },
  },

  //drewer style
  drawer: {
    width: "250px",
    height: "100vh",
  },
  drawerContainer: {
    width: "250px",
    height: "100vh",
    backgroundColor: Theme.colors.primary1,
  },
  listItem: {
    color: Theme.colors.base2,
  },
}));
