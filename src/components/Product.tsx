import React from 'react'
import Image from 'next/image'

export const Product = () => {
    return (
        <div className='xl:h-screen bg-gray p-4 sm:p-12 md:p-16 xl:p-32 flex justify-center items-center' id='product'>
            <div className='flex flex-col-reverse xl:flex-row w-full h-full'>
                <Image
                    src="/our-product.svg"
                    alt=''
                    height={1000}
                    width={1000}
                    className='w-full lg:w-1/2 xl:w-3/4 object-contain'
                />
                <div className='grow flex flex-col justify-center gap-8 p-4'>
                    <p className='text-4xl font-semibold'>Our Product</p>
                    <div className='grid grid-cols-2 grid-rows-2 sm:flex gap-4'>
                        <button className='px-4 py-2 rounded-3xl bg-blue'>Product Chip</button>
                        <button className='px-4 py-2 border rounded-3xl'>Chip</button>
                        <button className='px-4 py-2 border rounded-3xl'>Chip</button>
                        <button className='px-4 py-2 border rounded-3xl'>Chip</button>
                    </div>
                    <p>A pioneering ecosystem to advance Options Trading. Leveraging AI and blockchain, it empowers users and traders to unlock the unlimited potential of crypto-based options. </p>
                </div>
            </div>
        </div>
    )
}
