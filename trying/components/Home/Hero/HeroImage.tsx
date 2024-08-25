import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className='hidden lg:block'>
      <Image src={"/images/3.png"} alt='hero' width={500} height={300} className='rounded-full transition-all duration-500 scale-[100%] hover:scale-[90%]'/>
    </div>
  )
}

export default HeroImage
