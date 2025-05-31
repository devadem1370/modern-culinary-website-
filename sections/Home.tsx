import { HeroCard } from "@/components";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className=" w-full flex mt-[90px]">
      <section className="ledt  w-[85%]  ">
        <span className="px-5 py-[3px] !w-20px items-center justify-center outline-1 outline-offset-[-1px] outline-white/40 rounded-2xl ">
          Culinary
        </span>
        <h1 className="text-white text-[80px] mt-[55px]">
          Elevate Your Culinary Experience
        </h1>

        <section className="flex  gap-12">
          <div>
            <Image src="/icons/arrow.svg" alt="arrow" width={60} height={30} className="mt-3"/>
          </div>
          <div>
            <p className="text-base text-white/60 font-opensans font-normal leading-[30px] max-w-[365px]">
              Unleash your inner chef and dive into a world of exceptional
              flavors. Discover the perfect blend of modern culinary techniques.
            </p>
            <div className="flex items-center mt-14 gap-[44px] ">
              <button className="outline-1 outline-white/40 rounded-[7px] text-base text-white font-opensans px-5 py-[7px]">
                Get Started
              </button>
              <button className="flex items-center gap-2 text-white font-opensans text-base font-medium">
                <Image
                  src="/icons/motion_play.png"
                  alt="play_btn"
                  width={36}
                  height={36}
                />
                Watch a video
              </button>
            </div>
          </div>
        </section>

        <div className="bg-white/10 mt-[70px] rounded-[23px] border border-white/20 backdrop-blur-[20.50px] max-w-[459px] py-5 px-6 flex gap-[43px]">
            <div className="img w-[139px] h-[158px] bg-red-200 rounded-2xl"></div>
            <div>
                <p className="text-white text-2xl font-semibold leading-[30px]">Food Photography Services</p>
                <div className="flex items-center justify-between mt-[55px] text-sm text-white/60 font-opensans font-normal leading-[25px]">
                    Learn More
                    <Image src="/icons/arrow_circle.png" alt="arrow" width={24} height={24} className=" mr-3"/>
                </div>
            </div>
        </div>
      </section>
      <section className="right bg-green-700 w-1/2">
      <div className="">
        <HeroCard img="/icons/cube.svg" 
        title="Meal Planning Assistance"
        />
      </div>
      <div className="">
        <HeroCard img="/icons/fork.svg" 
        title="Ingredient Delivery"
        />
        
        
      </div>
      </section>
    </main>
  );
};

export default Home;
