import Image from 'next/image'
import React from 'react'

interface HeroCardProps {
  img: string;
  title: string;
}

const HeroCard = ({ img, title }: HeroCardProps) => {
  return (
    <div className= "bg-white/10 rounded-[20px] border w-[270px] gap-6 border-white/20 backdrop-blur-[20.50px]  px-[24px] py-[19px] items-center justify-center inline-flex ">
        <Image src={img} alt="icon" width={50} height={50}
        />
        <span className='text-white text-xl font-semibold leading-[25px]'>
            {title}
        </span>
    </div>
  )
}

export default HeroCard


1
