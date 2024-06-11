import React from 'react'

function Background_gradient() {
    return (
        <div>
            <div>

                {/* stating color */}
                <div class="bg-gradient-to-r from-red-500 h-52"></div>

                {/* ending color */}

                <div class="bg-gradient-to-r from-green-400 to-blue-500 h-52"></div>

                {/* middle color from-color via-colorname to-color */}
                <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-52"></div>
            </div>
        </div>
    )
}

export default Background_gradient
