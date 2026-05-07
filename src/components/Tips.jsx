import React from 'react';

const Tips = () => {
  return (
    <div className='w-11/12 md:w-3/4 mx-auto my-3 text-center'>
      <h1 className="text-center font-bold text-3xl md:text-4xl text-yellow-400 mb-10">Summer Care Tips</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      {/* tips 1 */}
      <div className='bg-linear-to-br from-sky-100 to-yellow-50 p-3 rounded-xl py-8 space-y-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>The Ultimate Hydration Guide: Beat the Summer Heat</h1>
        <p>Staying hydrated is more than just drinking 8 glasses of water. Learn how to mix electrolyte-rich fruits like watermelon, cucumber, and coconut water into your daily routine to keep your energy high and body cool during peak summer days.</p>
      </div>
      {/* tips 2 */}
      <div className='bg-linear-to-br from-sky-100 to-yellow-50 p-3 rounded-xl py-8 space-y-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Sunscreen Secrets: SPF, PA+, and What They Actually Mean</h1>
        <p>Not all sunscreens are created equal. Discover the crucial differences between physical and chemical blockers, how to correctly decode PA+ ratings for maximum UVA protection, and the exact amount you need to apply to prevent long-term skin damage.</p>
      </div>
      {/* tips 3 */}
      <div className='bg-linear-to-br from-sky-100 to-yellow-50 p-3 rounded-xl py-8 space-y-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>How to Keep Your Electronics Safe in Extreme Heat</h1>
        <p>Did you know leaving your phone in direct sunlight can permanently degrade its battery? From neck fans to portable speakers, learn the best storage practices, why you should avoid charging in hot environments, and how to prevent thermal throttling.</p>
      </div>
      {/* tips 4 */}
      <div className='bg-linear-to-br from-sky-100 to-yellow-50 p-3 rounded-xl py-8 space-y-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Smart Beach Packing: Essential Gear for the Perfect Day</h1>
        <p>Forget the heavy lifting. Packing for the beach is an art form that balances comfort and utility. From sand-repellent microfiber towels to waterproof pouches that save your phone from salt water, here is your minimal checklist for an effortless seaside vibe.</p>
      </div>
      
    </div>
    </div>
  );
};

export default Tips;