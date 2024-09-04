import React from 'react';

import back from '@/public/pikaso_enhance__vivid_2K_Art_r_c_.png'
import Image from 'next/image';
import Modal from './Modal';

const Hero = () => {
  
  return (
    <div
    className='w-full h-screen relative bg-cover'
    >
      <Image src={back} fill={true} alt='background' className='max-sm:hidden '/>
      <div className='absolute w-1/2 right-0 top-72 max-sm:hidden'>
        <Modal 
          title_line1='Find your path '
          title_line2='meet your mentor'
          description='Mentor Connect is a web app that bridges the gap between
           ambition and achievement. Our platform connects individuals seeking guidance with experienced
           mentors who can offer valuable insights, support, and direction.'
           actionLabel='Login now'
        />
      </div>
    </div>
  )
}

export default Hero
