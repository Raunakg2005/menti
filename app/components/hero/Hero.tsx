import React from 'react'
import Image from 'next/image'
import back from '@/public/gmxeo23d.png'
import Modal from '../Modal'


const Hero = () => {
  return (
    <div className='max-sm:hidden md:w-full h-full bg-cover relative '>
      <Image src={back} alt='background' width={1600} />
      <div className='absolute top-60 left-36 flex flex-row gap-4
      text-7xl text-white font-bold drop-shadow-xl
      '>
        <div className='flex flex-col gap-10 w-1/2'>
        We are India’s Best<br/> Mentor connecting<br/> website
        <div className='text-lg font-semibold text-white'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste possimus m distinctio asperiores eveniet, iure vero autem deleniti suscipit aperiam delectus?
      </div>
        </div>
        <div className='w-1/2 px-16'>
          <Modal
          title='Sign up as a mentee'
          subtitle='Already have an account? Login'
          description='Enter your email address to create an account'
          actionLabel='Create an account'
          secondaryActionLabel='Continue with google'
          />
        </div>
     
      
      </div>
    </div>
  )
}

export default Hero
