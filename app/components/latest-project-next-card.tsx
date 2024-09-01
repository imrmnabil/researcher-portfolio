import React from "react";
import { ProjectData } from "../constants/homeData";
import Image from "next/image";

interface ProjectProps {
  project: ProjectData;
}

function LatestProjectNextCard({ project }: ProjectProps) {
  return (
      <div className="w-full relative h-32">
        <div className="relative -z-20 w-full h-full">
          <Image
            src={project.imagePath}
            alt="alt"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute h-full w-full top-0 left-0 bg-project-card-next z-20">
          <div className="p-8 w-full h-full flex flex-col justify-center">
            <h4 className="text-white font-normal text-[14px] mb-2 uppercase">
              Next
            </h4>
            <h4 className="text-white font-normal text-[16px] mb-2 uppercase">
              {project.name}
            </h4>
          </div>
        </div>
      </div>
    
  );
}

export default LatestProjectNextCard;
