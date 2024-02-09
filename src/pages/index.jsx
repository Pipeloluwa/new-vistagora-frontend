import React from 'react'
import background_main from '../assets/images/background_main.webp';

const Index = () => {
  return (
    <div className='relative h-screen w-screen'>
      <div className='absolute w-full overflow-hidden h-screen'>
        <img alt='background image' src={background_main} className='object-cover'/>
      </div>
    </div>
  )
}

export default Index