import React from 'react'

function Boxshadow() {
    return (
        <div>
            <h1>how to box shadow and Box Shadow Color</h1>
            <div class="shadow-md h-24 w-24">1</div>
            <div class="shadow-lg h-24 w-24">2</div>
            <div class="shadow-xl h-24 w-24">3</div>
            <div class="shadow-2xl h-24 w-24">4</div>

            <button class="bg-cyan-500 p-2 rounded-md shadow-lg shadow-cyan-500/50 ...">Subscribe</button>
            <button class="bg-blue-500  p-2 rounded-md  mx-2 shadow-lg shadow-blue-500/50 ...">Subscribe</button>
            <button class="bg-indigo-500  p-2 rounded-md  shadow-lg shadow-indigo-500/50 ...">Subscribe</button>
        </div> 
    )
}

export default Boxshadow
