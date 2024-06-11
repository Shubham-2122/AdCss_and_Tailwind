import React from 'react'

function Text_opacity() {
    return (
        <div>
            <p className="text-purple-700 text-opacity-100 ...">The quick brown fox ...</p>
            <p className="text-purple-700 text-opacity-75 ...">The quick brown fox ...</p>
            <p className="text-purple-700 text-opacity-50 ...">The quick brown fox ...</p>
            <p className="text-purple-700 text-opacity-25 ...">The quick brown fox ...</p>
            <p className="text-purple-700 text-opacity-0 ...">The quick brown fox ...</p>

            <div className="text-black">
                <div className="text-black text-opacity-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus illo quod ipsa minima suscipit rerum magnam hic distinctio molestias expedita ullam vitae corporis esse molestiae quidem consectetur, dolorum eaque id!</div>
            </div>
        </div>
    )
}

export default Text_opacity
