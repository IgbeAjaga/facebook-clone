import React from 'react'
import'./Widgets.css';

function Widgets() {
  return (
    <div className='widgets'>
        <iframe
        src='https://weareheretofixit.com'
        title="This is a unique title"
        width='340'
        height='100%'
        style={{border:'none', overflow:'hidden'}}
        scrolling='no'
        frameBorder='0'
        allowTransparency='true'
        allow='encrypted-media'
        >
        </iframe>
    </div>
  )
}

export default Widgets