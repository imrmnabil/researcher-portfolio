import Hero from "./hero";
import HomeBG from "./home-bg";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function HomePage() {
  return (
    <div className="relative w-full">
      <div className=" absolute h-full w-full z-0">
        <HomeBG />
      </div>
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <div className="container h-[calc(100vh-64px)]">
          <Hero />
        </div>
        <div className="container flex flex-col justify-center items-center w-full">
          <div className="w-full h-[64px] lg:flex hidden ">
            <div className="h-full w-full bg-white"></div>
            <div className="h-full aspect-square bg-blue-950 flex justify-center items-center p-4 text-white">
                <ArrowDownIcon/>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full grid grid-cols-2">
                  <div>
                    About
                  </div>
                  <div>
                    <p>I&apos;m a passionate developer driven by a relentless pursuit of digital solutions. With a love for coding and innovation, I thrive on transforming ideas into impactful software. My dedication to crafting cutting-edge technology fuels my ongoing journey in the world of development.</p>
                  </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
