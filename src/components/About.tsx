import React from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'

export const About = () => {
    return (
        <div className='h-screen flex justify-center items-center p-32' id='about'>
            <div className='flex w-full h-full'>
                <div className='w-1/2 bg-blue flex flex-col justify-center px-16 items-start gap-8'>
                    <p className='text-7xl font-semibold'>About</p>
                    <p>Aqua Protocoal is a DeFI powerhouse built on OKex Chain. An innovative and integrative platform that offers a suite of DeFi products and services. </p>
                    <Button
                        sx={{
                            color: "#1214fd",
                            borderRadius: "0",
                            bgcolor: "white",
                            padding: "10px 20px",
                        }}
                        className='font-semibold'
                    >
                        Read Deck
                    </Button>
                </div>

                <div className='grow relative'>
                    <Image
                        src="/radiant-node-bg.png"
                        alt=""
                        height={100}
                        width={100}
                        className='h-full w-full absolute object-cover z-[-5]'
                    />
                    <div className='h-full w-full grid place-items-center bg-[#1214fd]/1 font-semibold text-5xl'>RADIANT NODE</div>
                </div>
            </div>
        </div>
    )
}
