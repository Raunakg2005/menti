import Image from 'next/image'
import React from 'react'
import about_2 from '@/public/about_2final.png'
import { GiCheckMark } from 'react-icons/gi'

const About2 = () => {
  return (
    <div className='w-full h-screen bg-white gap-0 flex flex-row items-center justify-center'>
      <div className=' w-2/5 font-bold  flex flex-col gap-10 items-center justify-center'>
          <div className='text-5xl text-black'>
            Join 4,000+ mentees on<br/> their journey!
          </div>
          <div className='flex flex-row w-full justify-start items-center ml-16  gap-4'>
            <div className='bg-blue-200 rounded-full p-[6px]'>
              <GiCheckMark size={20} />
            </div>
            <div className='text-lg text-neutral-400 font-semibold'>
              Smart matching
            </div>
          </div>
          <div className='flex flex-row w-full justify-start items-center ml-16  gap-4'>
            <div className='bg-blue-200 rounded-full p-[6px]'>
              <GiCheckMark size={20} />
            </div>
            <div className='text-lg text-neutral-400 font-semibold'>
              Chat with mentors
            </div>
          </div>
          <div className='flex flex-row w-full justify-start items-center ml-16  gap-4'>
            <div className='bg-blue-200 rounded-full p-[6px]'>
              <GiCheckMark size={20} />
            </div>
            <div className='text-lg text-neutral-400 font-semibold'>
              Learning resources
            </div>
          </div>
          <div className='flex flex-row w-full justify-start items-center ml-16  gap-4'>
            <div className='bg-blue-200 rounded-full p-[6px]'>
              <GiCheckMark size={20} />
            </div>
            <div className='text-lg text-neutral-400 font-semibold'>
              1-on-1 calls
            </div>
          </div>
          <div className='flex flex-row gap-8 items-center justify-center'>
              <div className='text-xl font-semibold text-black border-2 border-neutral-400
                rounded-lg py-2 px-8
              '>
                Learn more
              </div>
              <div className='text-xl font-semibold text-white border-2 border-blue-500
                rounded-lg py-2 px-8 bg-blue-500
              '>
                Get started
              </div>
          </div>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <Image src={about_2} alt='about_2'/>
      </div>
    </div>
  )
}

export default About2
