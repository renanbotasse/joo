import React from 'react';
// images
import Image from '../assets/avatar.png';

// icons
import { FaInstagram, FaTiktok, FaTwitch, FaTwitter } from 'react-icons/fa';

// type animation
import { TypeAnimation } from 'react-type-animation';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/*  text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              JOOANA <span>d'ART</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[66px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Sou</span>
              <TypeAnimation sequence={[
                'Narradora',
                2000,
                'Atriz',
                2000,
                'Figurinista',
                2000,
                'Maga',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-justify'>
              Oi, sou a Joo, narradora de RPG e criadora de conteúdo. Mergulho em aventuras cativantes nas mesas de RPG, trazendo personagens vívidos e cenários detalhados com minha expertise em Teatro. Compartilho também nas redes sociais análises de jogos e insights que dão vida às histórias. ♡
            </motion.p>
            <motion.div 
                        variants={fadeIn('up', 0.6)} 
                        initial="hidden" 
                        whileInView={'show'} 
                        viewport={{ once: false, amount: 0.7 }} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                Serviços
              </button>
              <a href='#' className='text-gradient btn-link'>Conteúdo</a>
            </motion.div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaInstagram />
              </a>
              <a href='#'>
                <FaTiktok />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaTwitch />
              </a>
            </div>
          </div>
          {/* image */}
          <motion.div 
                      variants={fadeIn('up', 0.8)} 
                      initial="hidden" 
                      whileInView={'show'} 
                      viewport={{ once: false, amount: 0.7 }} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
