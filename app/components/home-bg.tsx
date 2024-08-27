import Image from "next/image";
import heroImg from "@/public/res/image/heroo.png";


function HomeBG() {
  return (
    <div className="w-full h-lvh bg-[#dcece9]">
      <div className="flex w-full h-full ">
        <div className=" basis-0 lg:basis-[37%] "></div>
        <div className="h-full basis-[100%] lg:basis-[63%] overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              style={{ objectPosition: "top", objectFit: "cover" }}
              src={heroImg}
              alt="alt"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBG