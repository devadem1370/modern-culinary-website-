import React from "react";

const Experience = () => {
  return (
    <main className="mt-[200px] w-full flex ">
      <section className="left bg-green-700 w-[65%]">
        <h1 className="heading-xl">Experience Food Like Never Before</h1>

        <div className="flex gap-7 p-base font-opensans">
            <span className="font-opensans text-white">02</span>
            <p className="font-opensans">Create your own recipes by <br /> mixing and matching ingredients <br /> with real-time suggestions.</p>
        </div>
        <div className="flex justify-center gap-7 p-base font-opensans">
            <span className="font-opensans text-white">01</span>
            <p className="font-opensans">Explore articles on kitchen hacks, <br /> food trends, and tips to enhance <br /> your cooking.</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="px-5 py-[3] rounded-full outline outline-white/40 inline-flex justify-center items-center text-white text-base font-normal leading-[30px] font-opensans">Food</span>
          <span className="px-5 py-[3] rounded-full outline outline-white/40 inline-flex justify-center items-center text-white text-base font-normal leading-[30px] font-opensans">Crafted</span>
          <span className="px-5 py-[3] rounded-full outline outline-white/40 inline-flex justify-center items-center text-white text-base font-normal leading-[30px] font-opensans">Catering</span>
        </div>
      </section>
      <section className="right bg-blue-700 w-[35%]">hi</section>
    </main>
  );
};

export default Experience;
