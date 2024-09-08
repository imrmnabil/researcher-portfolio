import { XMarkIcon } from "@heroicons/react/24/solid";
import { Close } from "@icon-park/react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "@icon-park/react/styles/index.css";
import { ProjectData } from "../constants/homeData";

interface ProjectProps {
  project: ProjectData;
}

const ProjectPane = ({ project }: ProjectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
      <div className="w-[1056px] min-w-0 flex">
        <button
          className=" absolute top-0 left-0 p-2 w-9 h-9 md:top-8 md:left-8 md:w-12 md:h-12 bg-primary flex items-center justify-center"
        >
          <Close theme="outline" size="32" fill="#ffffff" strokeWidth={2} />
        </button>
        <div>{project.name}</div>
      </div>
    </div>
  );
};

ProjectPane.displayName = "ProjectPane";

export default ProjectPane;
