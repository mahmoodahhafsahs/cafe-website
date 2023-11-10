import React from 'react'
const Hero=()=>{
    return (
        <div className='max-w-[1640px] mx-auto p-4'>

            <div className='max-h-[500px] relative'>
                {/*Overlay*/}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>PARADISE<span className='text-yellow-500'>BITE</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>at your</span>sight</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://img.freepik.com/free-photo/indulgent-homemade-chocolate-chip-cookies-rustic-table-generated-by-ai_188544-32827.jpg?t=st=1689188288~exp=1689191888~hmac=6c65ad8059c747b0746e0a74464608b0e75e3346609b07240f548863870de151&w=1380"></img>
            </div>
        </div>
    )
}
export default Hero