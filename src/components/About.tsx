import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const About = () => {
    return (
        <div className='xl:h-screen flex justify-center items-center p-4 sm:p-12 md:p-24 xl:px-32 xl:py-[152px]' id='about'>
            <div className='flex flex-col xl:flex-row w-full xl:h-full'>
                <div className='h-96 w-full xl:h-full xl:w-1/2 bg-blue flex flex-col justify-center px-16 items-center xl:items-start gap-8'>
                    <p className='text-5xl xl:text-7xl font-semibold'>About</p>
                    <p className='text-center xl:text-start'>
                        In the ever-evolving realm of cryptocurrency markets, innovation serves as the linchpin for success. Introducing STRIKEBIT, a revolutionary platform that reshapes the landscape of crypto derivatives analysis.
                    </p>
                    <Link
                        href=""
                        className='font-semibold white-btn'
                    >
                        Read Deck
                    </Link>
                </div>

                <div className='h-96 xl:h-auto grow relative'>
                    <Image
                        src="radiant-node-bg.svg"
                        alt=''
                        height={100}
                        width={100}
                        className='w-full h-full absolute z-[-5] object-cover'
                    />
                    <div className='flex justify-center items-center h-full tracking-widest font-semibold text-4xl'>RADIANT NODE</div>
                </div>
            </div>
        </div>
    )
}
