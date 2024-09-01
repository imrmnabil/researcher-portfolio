import React from "react";
import { ProjectData } from "../constants/homeData";
import Image from "next/image";

interface ProjectProps {
  project: ProjectData;
}

function LatestProjectCard({ project }: ProjectProps) {
  return (
    <section className="w-full h-80 lg:h-96 z-20 relative ">
    <div className="w-full  h-full">
      <div className="relative w-full h-full">
        <Image
          src={project.imagePath}
          alt="alt"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-project-card z-20">
        <div className="p-8 w-full h-full flex flex-col justify-start">
          <h4 className="text-white font-normal text-[18px] mb-2 uppercase">
            {project.name}
          </h4>
          <div className="w-fit h-fit" style={{ backgroundColor: 'rgb(17, 111, 92)' }}>
            <h6 className="text-[10px] font-medium px-[8px] py-[2px] w-max text-white uppercase">
              {project.category}
            </h6>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default LatestProjectCard;
