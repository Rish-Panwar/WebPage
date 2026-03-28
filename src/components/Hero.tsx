import { TextGenerateEffect } from './ui/text-generate-effect'
import { Plane } from 'lucide-react'
import { FlipWords } from './ui/flip-words'
import MagicButton from './ui/magic-button'

const Hero = () => {
    const words = ["beautiful", "modern", "smooth", "interactive"]
    return (
        <div className='flex justify-center relative z-10 my-20'>
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h1 className="text-blue-100 font-sora text-xl lg:text-4xl">
                    Hi, I'm Rishabh Panwar,
                </h1>
                <h2 className="text-center text-2xl md:text-4xl lg:text-6xl mt-2"> I create<FlipWords className='text-purple-500' words={words} />web experiences</h2>
                <TextGenerateEffect className='text-center text-xl lg:text-4xl md:text-xl font-light' words='which transforms ideas into reality.' />
                <a href="#about"><MagicButton title="See my Work" icon={<Plane />} position="right" otherClasses="relative px-8 py-3 rounded-full border border-purple-400 overflow-hidden group" />
                </a>
            </div>
        </div>

    )
}

export default Hero
