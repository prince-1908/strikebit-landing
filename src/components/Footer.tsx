'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
    const handleNavigation = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }

    return (
        <div className='bg-blue p-4 md:p-16'>
            <div className='grid grid-cols-2 grid-rows-2 gap-12 sm:gap-0'>
                <div className='hidden sm:block'>
                    <Image
                        src="/logo2.png"
                        alt='strikebit'
                        height={100}
                        width={100}
                        className=''
                    />
                </div>
                <div className='flex items-center justify-center sm:justify-end col-span-2 sm:col-span-1'>
                    <button className='white-btn'>Purchase Node</button>
                </div>

                <div className='flex items-center lg:items-end col-span-2 lg:col-span-1'>
                    <ul className='flex flex-wrap justify-center gap-4'>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("about")}>About</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("product")}>Product</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("features")}>Features</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("technology")}>Technology</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("token")}>Token</li>
                        <li className='cursor-pointer hover:bg-white hover:text-blue-500 transition px-4 py2 rounded-md' onClick={() => handleNavigation("roadmap")}>Roadmap</li>
                    </ul>
                </div>
                <div className='flex gap-8 justify-center lg:justify-end items-end col-span-2 lg:col-span-1'>
                    <Link href="https://t.me/+PWmB7O5jhO5mNmVl" target='_blank'>
                        <Image
                            src="/telegram.svg"
                            alt='telegram'
                            height={25}
                            width={25}
                        />
                    </Link>
                    <Link href="https://x.com/StrikeBitDeFI" target='_blank'>
                        <Image
                            src="/twitter.svg"
                            alt='twitter'
                            height={25}
                            width={25}
                        />
                    </Link>
                    <Link href="" target='_blank'>
                        <Image
                            src="/medium.svg"
                            alt='medium'
                            height={25}
                            width={25}
                        />
                    </Link>
                    <Link href="https://discord.gg/qkBC4muq" target='_blank'>
                        <Image
                            src="/discord.svg"
                            alt='discord'
                            height={25}
                            width={25}
                        />
                    </Link>
                </div>

                <div className='sm:hidden col-span-2 flex justify-center'>
                    <Image
                        src="/logo2.png"
                        alt='strikebit'
                        height={100}
                        width={100}
                        className=''
                    />
                </div>
            </div>

            <div className='mt-8 text-center'>
                © 2024 StrikeBit
            </div>
        </div>
    )
}
