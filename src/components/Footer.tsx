'use client'

import React from 'react';
import Image from 'next/image';

export const Footer = () => {
    const handleNavigation = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }

    return (
        <div className='bg-blue p-16'>
            <div className='grid grid-cols-2 grid-rows-2'>
                <div className=''>
                    <Image
                        src="/logo2.png"
                        alt='strikebit'
                        height={100}
                        width={100}
                        className=''
                    />
                </div>
                <div className='flex items-center justify-end'>
                    <button className='white-btn'>Purchasee Node</button>
                </div>
                <div className='flex items-end'>
                    <ul className='flex gap-4'>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("about")}>About</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("product")}>Product</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("features")}>Features</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("technology")}>Technology</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("token")}>Token</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("roadmap")}>Roadmap</li>
                    </ul>
                </div>
                <div className='flex gap-8 justify-end items-end'>
                    <Image
                        src="/telegram.svg"
                        alt='telegram'
                        height={25}
                        width={25}
                    />
                    <Image
                        src="/twitter.svg"
                        alt='twitter'
                        height={25}
                        width={25}
                    />
                    <Image
                        src="/medium.svg"
                        alt='medium'
                        height={25}
                        width={25}
                    />
                    <Image
                        src="/discord.svg"
                        alt='discord'
                        height={25}
                        width={25}
                    />
                </div>
            </div>

            <div className='mt-8 text-center'>
                © 2024 StrikeBit
            </div>
        </div>
    )
}
