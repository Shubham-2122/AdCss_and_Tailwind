import React from 'react'

function Ring() {
    return (
        <div>
            <h1>Ring width</h1>

            <button class="btn ring-0">ring-0</button>
            <button class="btn ring-2">ring-2</button>
            <button class="btn ring">ring</button>
            <button class="btn ring-4">ring-4</button>


            <h1>focus ring</h1>
            <button class="focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50">
                Focus Button
            </button>

            <h1>Ring color and opacity</h1>
            <button class="ring-4 ring-indigo-300">
                Button
            </button>

            <button class="ring-4 ring-yellow-500 ring-opacity-50">
                Button
            </button>


            <h1>ring offset width</h1>
            <button class="ring ring-pink-600 ring-offset-0">ring-0</button>
            <button class="mx-5 ring ring-pink-600 ring-offset-2">ring-2</button>
            <button class="ring ring-pink-600 ring-offset-4">ring-4</button>


            <div class=" bg-green-100">
                <button class="ring ring-green-600 ring-offset-4 ring-offset-green-100">
                    ring-offset-green-100
                </button>
            </div>

            <h1>ring offset color</h1>

            <button class="ring-2 ring-offset-2 ring-offset-blue-300 md:ring-offset-blue-500">
                offset color
            </button>
        </div>
    )
}

export default Ring
