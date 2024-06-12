import React from 'react'

function Contrast() {
    return (
        <div className='flex gap-1'>
            <div className='bg-red-950 h-24 w-24 contrast-50'>
                asd
            </div>
            <div className='bg-red-950 h-24 w-24 contrast-100'>
                asd
            </div>
            <div className='bg-red-950 h-24 w-24 contrast-125'>
                asd
            </div>
            <div className='bg-red-950 h-24 w-24 contrast-200'>
                asd
            </div>
            <div class="contrast-125 bg-red-950 h-24 w-24 md:contrast-150">
                sdf
            </div>
        </div>
    )
}

export default Contrast
