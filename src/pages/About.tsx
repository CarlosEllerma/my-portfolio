import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { Progress } from "@/components/ui/progress";
import Skills from "@/components/Skills";
import { Car } from "lucide-react";

const About = () => {
  return (
    <div className="grid items-center justify center delay-300">
      <VerticalTimeline lineColor="grey">
        <VerticalTimelineElement
          className="vertical-timeline-element--school"
          contentStyle={{ background: "grey", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid grey" }}
          date="Future"
          iconStyle={{ background: "grey", color: "" }}
          icon={<LiaSchoolSolid />}
        >
          <h1 className="text-3xl font-mono">College Graduation</h1>
          <h4 className="text-2xl font-mono">
            Neuva Ecija University of Science and Technology
          </h4>
          <p className="pt-3 font-mono">
            Graduated with a degree in Bachelor of Science in Information
            Technology.
          </p>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--school"
          contentStyle={{ background: "grey", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid grey" }}
          date="2024 - Present"
          iconStyle={{ background: "grey", border: "grey" }}
          icon={<MdOutlineWorkOutline />}
        >
          <h3 className="text-3xl font-mono">On the Job Training</h3>
          <h4 className="text-2xl font-mono">TechStacks</h4>
          <p className="pt-3 font-mono">
            On the job training to become a full stack developer with the help
            of TechStacks.
          </p>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{ background: "grey", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid grey" }}
          iconStyle={{ background: "grey", color: "" }}
          icon={<LiaSchoolSolid />}
        >
          <h3 className="text-3xl font-mono">Theses Defended</h3>
          <h4 className="text-2xl font-mono">
            Nueva Ecija University of Science and Technology
          </h4>
          <p className="pt-3 font-mono">
            Defended my theses and passed the final defense.
          </p>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          contentStyle={{ background: "grey", color: "" }}
          contentArrowStyle={{ borderRight: "7px solid grey" }}
          iconStyle={{ background: "grey", color: "" }}
          icon={<LiaSchoolSolid />}
        >
          <h3 className="text-3xl font-mono">Senior High School Graduation</h3>
          <h4 className="text-2xl font-mono">PHINMA Araullo University</h4>
          <p className="pt-3 font-mono">
            Graduated with a strand of General Academic Strand(GAS).
          </p>
          <img src="https://via.placeholder.com/150" alt="placeholder" />
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Skills */}
      <div>
        <Skills />
      </div>
    
    </div>
  );
};

export default About;
