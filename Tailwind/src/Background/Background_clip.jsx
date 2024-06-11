import React from 'react'

function Background_clip() {
    return (
        <div>
            <div className="bg-clip-border p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed"> clip-border</div>
            <div className="bg-clip-padding p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">clip-padding</div>
            <div className="bg-clip-content p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">clip-content</div>

            {/* this is a gradient color  */}
            <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Hello world
                </span>
            </div>
        </div>
    )
}

export default Background_clip
