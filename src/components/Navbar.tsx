'use client'
import * as React from 'react';
import Image from 'next/image'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Menu, X, MoveRight } from 'lucide-react';

export const Navbar = () => {

    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, top: open });
            };


    const closeDrawer = () => {
        setState({ ...state, top: false });
    }

    const handleNavigation = (id: string) => {
        closeDrawer(); // Close the drawer
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

    }

    const list = () => (
        <div className='text-white'>
            <div className='flex justify-between items-center px-4'>
                <Image
                    src="/logo1.png"
                    alt='strikebit-logo-1'
                    height={100}
                    width={100}
                />
                <div className=''>
                    <button
                        className='gap-[10px] flex justify-center items-center bg-white text-blue px-7 py-4'
                        onClick={closeDrawer}
                    >
                        <p className='flex items-center justify-center font-semibold'>Close</p>
                        <X />
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-2 grid-rows-3 text-4xl px-16 py-16 gap-8 font-semibold'>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("about")}>
                    <p>About</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("technology")}>
                    <p>Technology</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("product")}>
                    <p>Product</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("token")}>
                    <p>Token</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("features")}>
                    <p>Features</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
                <div className='flex items-center gap-4 cursor-pointer bg-blue-light-hover py-2 px-4 rounded-md transition' onClick={() => handleNavigation("roadmap")}>
                    <p>Roadmap</p>
                    <MoveRight size={32} strokeWidth={3} />
                </div>
            </div>
        </div>
    );

    return (
        <div className='flex justify-between items-center px-4'>
            <Image
                src="/logo1.png"
                alt='strikebit-logo-1'
                height={100}
                width={100}
            />

            <div className='flex gap-4'>
                <button
                    className='text-white flex gap-[10px] rounded-none border border-white/20 px-7 py-4'
                >
                    中文
                </button>

                <button
                    className='gap-[10px] flex justify-center items-center blue-btn'
                    onClick={toggleDrawer(true)}
                >
                    <p className='flex items-center justify-center font-semibold'>Menu</p>
                    <Menu />
                </button>
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            background: 'rgba(0, 0, 0, 0.2)', // half-transparent background
                            backdropFilter: 'blur(100px)', // blur effect
                        },
                    }}
                    anchor="top"
                    open={state.top}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
        </div>
    )
}
