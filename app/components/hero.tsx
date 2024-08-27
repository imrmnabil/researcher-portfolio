import Image from "next/image";
import heroImg from "@/public/res/image/heroo.png";
function Hero() {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center items-end lg:items-center z-10 relative h-full w-full">
        <div className="mx-10 my-5 xl:mx-0 w-full">
          <div className="flex flex-col gap-3 lg:gap-5 bg-clip-text text-transparent bg-gradient-to-r from-[#127A66] to-[#1F3350] w-fit">
            <h3 className="md:tracking-[.7rem] tracking-[.1rem] text-[11px] md:text-sm">
              PHD STUDENT / DEVELOPER
            </h3>
            <h1 className="lg:text-[100px] md:text-6xl text-3xl">Christopher doe</h1>
            <div className="lg:text-[34px] md:text-3xl">
              I am a developer and passionate <br /> about digital solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
