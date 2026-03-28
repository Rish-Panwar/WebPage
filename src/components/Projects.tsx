import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { LocateFixedIcon } from 'lucide-react'

const Projects = () => {
  return (
    <section id='projects' className='relative z-10'>
    <div className='py-20'>
      <h1 className="text-xl lg:text-5xl text-center mt-20">A small selection of {' '}
        <span className="text-purple-500 font-semibold ">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          // Project Card
          <div className="lg:min-h-130 sm:h-164 h-128 flex items-center justify-center sm:w-[570px] w-[80vw]" key={id}>
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] overflow-hidden m-1">
                <div className="relative w-full sm:h-112 h-[40vh] overflow-hidden rounded-3xl mb-40 bg-[#0f1220] border border-white/5">
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img src={img} alt={title} className='inset-0 w-full h-full object-cover absolute bottom-0' />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl mt-4 text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{ transform: `translateX(-${5 * index * 2}px)` }} key={icon}>
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Live Site</p>
                  <LocateFixedIcon className='ms-3' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}         
export default Projects
