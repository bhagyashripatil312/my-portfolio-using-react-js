import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { useStyles } from "./BodyStyles";

function Experience() {
  const classes = useStyles();
  return (
    <div className={classes.experience}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Zulal Bhilajirao Patil College Dhule.
          </h3>
          <p> Higher Secondary School (HSC)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          R.H. Sapat College of Engineering, Management Studies Research,Nashik
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree, Savitribai Phule Pune University.
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="sept 2010 - nov 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Software Developer Intern - Webtonic Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Mumbai, Maharashtra
          </h4>
          <p>Developing website as per client requirement with the help of HTML, CSS and Bootstrap.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" oct 2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Software Engineer, E-Zest Digital Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Pune,Maharashtra
          </h4>
          <p>
          Worked on Bunge-IT Consulting Services live Project.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
