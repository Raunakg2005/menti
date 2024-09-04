'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FcMenu, FcSearch } from 'react-icons/fc';

const Navbar = () => {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

  return (
   <div className='w-full h-auto py-4 pt-6 fixed flex flex-row md:justify-between justify-end  
    bg-sky-200 items-center  shadow-xl z-50
   '>
        <div className='flex flex-row gap-6 px-10 text-xl max-sm:hidden'>
            <div className='text-neutral-500 hover:text-black hover:cursor-pointer transition hover:scale-110'>Home</div>
            <div className='text-neutral-500 hover:text-black hover:cursor-pointer transition hover:scale-110'>For business</div>
            <div className='text-neutral-500 hover:text-black hover:cursor-pointer transition hover:scale-110'>For mentors</div>
            <div className='text-neutral-500 hover:text-black hover:cursor-pointer transition hover:scale-110'>Company</div>
        </div>
        <div className = 'flex flex-row gap-6 px-10 text-xl items-center justify-center font-bold max-sm:hidden'>
            <div className='max-sm:hidden flex items-center justify-center w-auto'>
                <div className='shadow-xl w-56 mr-10 h-10 rounded-full bg-white relative flex items-center'>
                <FcSearch size={30} className='shadow-xl hover:cursor-pointer absolute left-1 bg-neutral-200 p-1 rounded-full flex items-center justiy-center'/>
                </div>
            </div>
            <div className = 'bg-transparent px-8 text-black hover:cursor-pointer  p-[7px] rounded-lg border-[2px]  border-black ' >Login</div>
            <div className = 'bg-black text-white p-2 px-6 rounded-lg hover:cursor-pointer hover:opacity-80 active:opacity-70 trasition' >Sign up </div>
        </div>
        <div 
        onClick={() => {
            if(isOpen) {
                setIsOpen(false);
            }else{
                setIsOpen(true);
            }
        }}
        className=' max-sm:block hidden flex items-center rounded-full bg-white mr-2 justify-center p-2' >
        <FcMenu size={25} className='relative' />
        </div>
        {isOpen && (
            <div className='absolute top-20 right-4 text-white font-semibold text-xl  flex 
            flex-col items-center justify-center h-auto gap-px  '>
                <div className='rounded-lg py-1 px-3 bg-neutral-500 w-40 flex items-center justify-center'>
                    Login
                </div>
                <hr />
                <div className='rounded-lg py-1 px-3 bg-neutral-500 w-40 flex items-center justify-center'>
                    SignIn
                </div>
                
            </div>
        )}
   </div>

  )
}

export default Navbar
