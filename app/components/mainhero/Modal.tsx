import React from 'react'

interface ModalProps {
  title_line1:string;
  title_line2:string;
  description:string;
  actionLabel:string;
}

const Modal: React.FC<ModalProps> = ({
  title_line1,
  title_line2,
  description,
  actionLabel,
}) => {
  return (
    <div className='w-full px-16 flex items-center justify-center'>
      <div className='w-3/4 bg-white/50 ml-40 h-auto flex flex-col 
      items-center justify-center  rounded-3xl'>
          <div className='text-4xl font-bold text-black opacity-100 py-6'>
          {title_line1},<br/>{title_line2}
          </div>
          <div className='text-lg px-10 text-black py-4 flex items-center justify-center'>
            {description}
          </div>
          <div className='text-white font-semibold text-xl bg-blue-500 mb-10 mt-10 py-2 px-10 rounded-lg'>
            {actionLabel}
          </div>
      </div>
    </div>
  )
}

export default Modal
