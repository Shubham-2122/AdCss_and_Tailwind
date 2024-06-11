import React from 'react'

function text_decoration() {
    return (
        <div>
            <p className="underline ...">This is a underline</p>
            <p className="line-through ...">ThThis is a line-through</p>
            <a href="#" className="no-underline ...">Link with no underline</a>

            <p className="no-underline md:underline ...">
                The quick brown fox jumps over the lazy dog.
            </p>
        </div>
    )
}

export default text_decoration
