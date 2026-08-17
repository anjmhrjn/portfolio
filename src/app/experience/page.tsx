import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Circle } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const experiencePage = () => {
  return (
    // EXPERIENCE PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Work Experience</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            {portfolioConfig.about.yearsOfExperience} years of building backend
            services, data pipelines, and full-stack products in production.
          </p>
        </FramerWrapper>
      </div>
      <div className="w-full h-fit flex flex-col">
        {portfolioConfig.experience.map((exp, index) => (
          <div className="w-full h-fit flex" key={index}>
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35 + index * 0.1}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base"
            >
              {exp.period}
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point"
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                {exp.role}, <br /> {exp.company}
              </div>
              <ul className="mt-2 flex flex-col gap-2">
                {exp.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 font-poppins text-base text-primary max-sm:text-xs"
                  >
                    <Circle className="h-2 w-2 mt-2 shrink-0 fill-current text-[#2f7df4]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default experiencePage;
