import React from 'react'

function Front_style() {
    return (
        <div>
            <p className="italic">The quick brown fox ...</p>
            <p className="not-italic">The quick brown fox ...</p>
            <p className="italic md:not-italic">
                The quick brown fox jumps over the lazy dog.
            </p>
        </div>
    )
}

export default Front_style
