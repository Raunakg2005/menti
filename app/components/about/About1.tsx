import Image from 'next/image'
import React from 'react'
import project_logo from '@/public/project_logo.jpeg'

const About1 = () => {
  return (
    <div className='bg-white w-full h-auto pb-20 pt-10 '>
      <div className=' flex flex-col items-center justify-center'>
          <Image src={project_logo} alt='project_logo' width={100} />
          <div className='text-black text-6xl font-semibold'>
            India's biggest portal for mentors
          </div>
      </div>
    </div>
  )
}

export default About1
