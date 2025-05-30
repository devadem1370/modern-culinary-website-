import Image from "next/image"

const About = () => {
  return (
    <main className="mt-[200px] w-full flex justify-between">
        <div className=" w-full">
            <h1 className="text-white text-[80px] font-normal leading-[110px]">Deliciously Crafted for Food Lovers</h1>
            {/* cards */}
            
            <div className="flex">
                <div className="card1 bg-white/10 border border-white/20 backdrop-blur-[20.5px] rounded-[23px] max-w-[300px] p-[42px] flex flex-col items-center  justify-center">
                    <p className="text-white text-2xl font-normal text-start">Intractive recepie builder</p>
                    <Image src="/icons/editor_choice.svg" alt="arrow" width={147} height={147} className="mt-3"/>
                    <p className="text-white/60 font-opensans text-base font-normal text-start mt-10">Create your own recipes by mixing and matching.</p>
                </div>


                {/* <div className="w-[557.75px] h-[567.50px] bg-[#c4c4c4] rounded-[30px]" /> */}
            </div>
        </div>
        <div className=" w-[55%]">
            <p className="text-white/60 text-base font-normal font-opensans leading-[30px] justify-end flex">Welcome to a haven for those who live to eat <br /> and love to cook. At Savory, every recipe is a <br /> masterpiece, thoughtfully designed.</p>
            <p className="text-white text-2xl font-semibold leading-[39px] flex justify-start mt-[170px] ">Nutrition and Wellness <br /> Guidance</p>

            <p className="text-white/60 text-base font-normal font-opensans leading-[30px] justify-end flex mt-[90px]">Collaborate with nutritionists <br /> to provide healthy recipes and <br />dietary advice.</p>
        </div>
    </main>
  )
}

export default About