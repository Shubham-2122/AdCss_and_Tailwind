import React from 'react'

function Divide() {
    return (
        <div>
            {/* divide width as use to after div border */}
            <div class="grid grid-cols-4 divide-x divide-green-500">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            col
            <div class="grid grid-cols-1 divide-y divide-yellow-500">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            col-reverse
            <div class="flex flex-col-reverse divide-y divide-y-reverse divide-rose-400">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            divide color
            <div class="divide-y divide-fuchsia-300">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            opactiy chnage divide
            <div class="divide-y-4 divide-black divide-opacity-25">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            divide style
            <div class="divide-y-4 divide-yellow-600 divide-dashed">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            <div class="divide-y-4 divide-yellow-600 divide-dotted">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>

    )
}

export default Divide
