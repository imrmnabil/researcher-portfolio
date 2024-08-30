import React from "react";
import { AcademicRecord } from "../constants/homeData";

interface AcademicComponentProps {
  academicRecord: AcademicRecord;
}

function ExperienceCard({academicRecord} : AcademicComponentProps) {
  return (
    <div
      className="lg:p-8"
      style={{ width: "100%", display: "inline-block" }}
    >
      <div className="activate_current">
        <h2 className="font-normal text-[16px] lg:text-[17px] mb-2 leading-none	">
          {academicRecord.startYear} - {academicRecord.endYear}
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4 gap-[5px] lg:gap-0">
          <h3 className="font-normal text-[16px] uppercase text-pulse-color-brighter2 inline-block truncate w-full md:w-auto">
            {academicRecord.subjectOrPosition}
          </h3>
          <span className="hidden lg:inline-block text-[10px] bg-pulse-color-darker1 font-medium px-[8px] py-[2px] ml-0 lg:ml-2 text-white">
            {academicRecord.type}
          </span>
        </div>
        <h5 className="text-xs ">{academicRecord.university}</h5>
      </div>
    </div>
  );
}

export default ExperienceCard;
