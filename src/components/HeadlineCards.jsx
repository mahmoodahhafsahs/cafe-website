import React from "react";
const HeadlineCards =()=> {
    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>suns out </p>
                    <p className='px-2'>suns out </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>suns out </button>
                </div>
                <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-photo/hot-chocolate-served-with-cookies_140725-1153.jpg?w=740&t=st=1689187581~exp=1689188181~hmac=1b03452fbb5582d531765ef17d74f379dd650a09f8bddc4f9c9d1f9d6ca84c38'
          alt='/'
        />
            </div>
            <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>suns out </p>
                    <p className='px-2'>suns out </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>suns out </button>
                </div>
                <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-photo/chocolate-cake-with-caramel-sauce-whipped-cream-top_1340-22847.jpg?t=st=1689187921~exp=1689191521~hmac=2197f5056ed8d31231f1429e4f1b5e57081bf55967143d4c8cda637b3ff46d26&w=1380'
          alt='/'
        />
            </div>
            <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>suns out </p>
                    <p className='px-2'>suns out </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>suns out </button>
                </div>
                <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.freepik.com/free-photo/rustic-waffle-stack-with-sweet-homemade-berry-sauce-generated-by-ai_188544-27350.jpg?t=st=1689188162~exp=1689191762~hmac=4b42e18c050571dd714112df30ce47a9131b8f5bf321125b369a8ddbb3cf47dc&w=1380'
          alt='/'
        />
            </div>

        </div>
    );
};
export default HeadlineCards;