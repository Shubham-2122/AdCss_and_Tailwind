import React from 'react'

function Background_attcehment() {
    const randoms={
        height:"1000px"
    }
    const divStyle = {
        
        backgroundImage: 'url("https://th.bing.com/th/id/OIP.h25CudydH-QJpuUsnCMLdQHaEK?w=292&h=180&c=7&r=0&o=5&pid=1.7")',
        backgroundSize: 'cover', // Optional: Adjust the background size
        backgroundPosition: 'center', // Optional: Adjust the background position
        height: '500px', // Adjust the height as needed
        width: '100%', // Adjust the width as needed
        margin:"50px 0"
      };
  return (
    <div style={randoms}>
      <div class="bg-fixed h-11 w-full" style={divStyle}></div>
    </div>
  )
}

export default Background_attcehment
