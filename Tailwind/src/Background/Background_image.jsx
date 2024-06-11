import React from 'react'

function Background_image() {
    return (
        <div>
            <p>Background Image
                Utilities for controlling an element's background image.

                Default class reference
                Class
                Properties
                bg-none	background-image: none;
                bg-gradient-to-t	background-image: linear-gradient(to top, var(--tw-gradient-stops));
                bg-gradient-to-tr	background-image: linear-gradient(to top right, var(--tw-gradient-stops));
                bg-gradient-to-r	background-image: linear-gradient(to right, var(--tw-gradient-stops));
                bg-gradient-to-br	background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
                bg-gradient-to-b	background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
                bg-gradient-to-bl	background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
                bg-gradient-to-l	background-image: linear-gradient(to left, var(--tw-gradient-stops));
                bg-gradient-to-tl	background-image: linear-gradient(to top left, var(--tw-gradient-stops));</p>
            
            <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-52"></div>
        </div>
    )
}

export default Background_image
