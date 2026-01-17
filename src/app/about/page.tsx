import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Briefcase, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const page = () => {
  const items = portfolioConfig.about.whatIDo;

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          {portfolioConfig.title} And Web <br /> Developer, Based In{" "}
          {portfolioConfig.about.personalInfo.basedIn}.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
            {portfolioConfig.about.bio}
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Briefcase className="h-8 w-8" /> What I Do
        </h1>
        <div className="w-full h-fit py-8 flex flex-row justify-between gap-7 max-lg:flex-col">
          <div className="w-full grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {items.map((val, indx) => (
              <div
                key={indx}
                className="rounded-2xl border border-border bg-background p-5 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <Circle className="h-3 w-3 text-primary" />
                  <h3 className="text-lg font-semibold text-primary">
                    {val.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
