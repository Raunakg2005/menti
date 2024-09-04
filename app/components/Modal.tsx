import React from 'react'

interface ModalProps {
    title: string;
    subtitle: string;
    description?: string;
    actionLabel: string;
    secondaryActionLabel?: string;
    
}

const Modal: React.FC<ModalProps> = ({
    title,
    subtitle,
    description,
    actionLabel,
    secondaryActionLabel,

      
}) => {
  return (
    <div className=' flex flex-col items-center justify-center bg-sky-200 gap-4 rounded-3xl'>
        <div className='text-4xl text-black font-bold pt-10'>
            {title}
        </div>
        <div className='text-lg text-neutral-500 font-semibold'>
            {subtitle}
        </div>
        <div className='text-xl text-neutral-500 font-light'>
            {description}
        </div>
        <div className='px-20'>
            <input type="text " className='w-full h-12 border-[2px] bg-transparent
            rounded-lg border-box border-neutral-500' />
        </div>
        <div className='py-3 w-3/4 bg-blue-300 flex items-center justify-center text-white rounded-full text-xl'>
            {actionLabel}
        </div>
        <div className='flex flex-row gap-1 items-center justify-center py-4'>
        <hr className=' pb-4 w-48  border-neutral-500 flex items-center justify-center '/>
        <span className='text-neutral-500 font-medium text-lg flex items-center justify-center -mt-4'>OR</span>
        <hr className=' pb-4 w-48 border-neutral-500 flex items-center justify-center'/>
        </div>
        <div className='py-3 w-3/4 bg-white flex items-center justify-center text-white rounded-full text-xl'>
            {secondaryActionLabel}
        </div>
    </div>
  )
}

export default Modal
