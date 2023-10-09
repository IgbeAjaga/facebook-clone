import React from 'react'
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>
     <Story 
     image='https://images.pexels.com/photos/10127367/pexels-photo-10127367.jpeg?cs=srgb&dl=pexels-deane-bayas-10127367.jpg&fm=jpg'
     profileSrc='https://images.pexels.com/photos/2413839/pexels-photo-2413839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      title='Jossy Abel'
     /> 

<Story 
     image='https://images.pexels.com/photos/9811521/pexels-photo-9811521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
     profileSrc='https://images.pexels.com/photos/11202095/pexels-photo-11202095.jpeg?cs=srgb&dl=pexels-jasmin-chew-11202095.jpg&fm=jpg'
      title='Apeh Godwin'
     /> 

<Story 
     image='https://images.pexels.com/photos/11475396/pexels-photo-11475396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
     profileSrc='https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630'
      title='Rajah Raph'
     /> 

<Story 
     image='https://images.pexels.com/photos/9176859/pexels-photo-9176859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
     profileSrc='https://images.pexels.com/photos/4893864/pexels-photo-4893864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      title='Grace Johnson'
     /> 
        </div>
  )
}

export default StoryReel