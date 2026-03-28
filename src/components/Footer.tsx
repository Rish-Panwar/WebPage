"use client";
import { FlagTriangleRightIcon } from 'lucide-react'
import MagicButton from './ui/magic-button'
import { socialMedia } from '@/data'
import { useState } from 'react';
import Contact from '../components/Contact';


const Footer = () => {
    const [open, setOpen] = useState(false);

    return (
        <footer className='w-full mt-40 pt-20 pb-10' id='contact'>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl text-white">
                    Ready to take your <span className='text-blue-400 font-bold'>Digital Presence</span> to the Next Level?
                </h1>
                <p className="text-white/80 md:mt-10 md:text-2xl  my-5 text-center">Let's Connect and Create Something Amazing Together!
                </p>
                <a className="text-white font-bold py-2 px-4 rounded">
                    <MagicButton
                        handleClick={() => setOpen(true)}
                        title="Let's get in touch"
                        icon={<FlagTriangleRightIcon />}
                        position="right" />
                    <Contact open={open} setOpen={setOpen} />
                </a>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center mt-10 md:text-base text-sm md:font-normal font-light">
                <p className="text-white/80">Copyright © 2025</p>
                <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='cursor-pointer w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <img src={profile.img} alt={String(profile.id)} width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
