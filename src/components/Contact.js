import React from 'react';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// icons
import { FaMailBulk, FaInstagram, FaTiktok, FaTwitch, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
<div 
className='container mx-auto'>
  <div className='flex flex-col lg:flex-row'>
    {/* text */}
    <div className='flex-1'>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}>
        <h4 className='text-xl uppercase text-accent font-meddium mb-2 tracking-wide'>
          Entre em contato
        </h4>
        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
        Vamos trabalhar <br/> juntos!
        </h2>
      </motion.div>
    </div>
    {/* form */}
    <form className='flex-1'>
   <div>
    <div className='flex text-[30px] p gap-x-6  max-w-max mx-auto lg:mx-0'>
              <a href='#'> Instagram
                <FaInstagram />
              </a>
              </div>
              <div className='flex text-[30px] p gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'> Tiktok
                <FaTiktok />
              </a>
              </div>
              <div className='flex text-[30px] p gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>Twitter
                <FaTwitter />
              </a>
              </div>
              <div className='flex text-[30px] p gap-x max-w-max mx-auto lg:mx-0'>
              <a href='#'> Twitch
                <FaTwitch />
              </a>
              </div>
              <div className='flex text-[30px] p gap-x max-w-max mx-auto lg:mx-0'>
              <a href='#'> jooanakretzer@gmail.com
                <FaMailBulk />
              </a>
              </div>
            </div>
    </form>
  </div>

</div>
    </section>
  );
};

export default Contact;
