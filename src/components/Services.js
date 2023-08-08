import React from 'react';

// icon
import { BsArrowUpRight } from 'react-icons/bs';

// motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';

// services data
const services = [
  {
    name: 'Narradora',
    description: 'Criei uma playlist com as mesas que fui narradora.',
    link: 'Veja Mais',
  },
  {
    name: 'Atriz',
    description: 'Também tenho uma playlist com as mesas de RPG que participei como jogadora, como nas mesas de skyfall, sufrágio e istituto flamel',
    link: 'Veja Mais',
  },
  {
    name: 'NPCs',
    description: 'Fiz um banco de NPCs em um dos destaques do meu Instagram.',
    link: 'Veja Mais',
  },
  {
    name: 'Dicas de RPG',
    description: 'O meu tiktok tem mais de um milhão de visualizações, pois é lá que guardo a maior parte do meu conteúdo com dicas de personagens, enredos e gerenciamento dos jogadores',
    link: 'Veja Mais',
  },
];


const Services = () => {
  return (
    <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
                  variants={fadeIn('right', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-center bg-no-repeat mix-blend mb-8 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'> 
          CONTEÚDO
          </h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          Aqui estão alguns dos conteúdos que já produzi 
          </h3>
          <button className='btn btn-sm'>Serviços</button>
        </motion.div>
        {/* services */}
        <motion.div 
                  variants={fadeIn('left', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.3}}
        className='flex-1'>
                {/* services list */}
                <div>
                  {services.map((service, index)=> {
                    // destructure service
                    const {name, description, link} = service;
                    return (
                      <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                        <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                        <p className='font-secondary leading-tight'>{description}</p>
                        </div>
                        <div className='flex flex-col flex-1 items-end'>
                          <a href='#' className='text-gradient'>{link}</a>
                        </div>
                      </div>
                    )
                  })}
                </div>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Services;
