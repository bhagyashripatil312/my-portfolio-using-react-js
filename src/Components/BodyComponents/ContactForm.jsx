import "../../App.css";
import { useState } from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/contact_me.webp";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import { RenderSectionHeading } from "../common/commonComponent";



function ContactForm() {
    const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("Thank You For Contacting....");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className={classes.section} id='Contact'>
         <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container spacing={1}>
            <Grid item sm={5}>
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
                smallText: " Contact Me",
                heading: "Seems To be Interesting",
                description:
                  "Got my Portfolio seen , then feel free to contact me for your future projects",
              })}
              <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}

export default ContactForm;