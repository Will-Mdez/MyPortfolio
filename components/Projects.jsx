import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import SGImg from '../public/assets/projects/JuegoIA.png';
import carritoImg from '../public/assets/projects/carrito2.png';
import PortfolioImg from '../public/assets/projects/Portfolio.png';
import chatbotImg from '../public/assets/projects/chatbot.png';
import PizzaAPIImg from '../public/assets/projects/PizzaAPI.png';
import utmprojectIMG from '../public/assets/projects/utmProject.png';
import tierradelsolIMG from '../public/assets/projects/tierradelsol.png';




const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          
          <ProjectItem
            title='Pizza Delivery API'
            backgroundImg={PizzaAPIImg}
            projectUrl='/PizzaAPI'
            tech='Fast API | Supabase'
          />
          <ProjectItem
            title='Vision Artificial Squid Game'
            backgroundImg={SGImg}
            projectUrl='/squidgame'
            tech='Next JS'

          />
          <ProjectItem
            title='UTM Project'
            backgroundImg={utmprojectIMG}
            projectUrl='/utmproject'
            tech='Kotlin'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={PortfolioImg}
            projectUrl='/Portfolio'
            tech='Next JS | Tailwind'
          />
          <ProjectItem
            title='Chatbot'
            backgroundImg={chatbotImg}
            projectUrl='/chatbot'
            tech='HTML | CSS'
          />
          <ProjectItem
            title='Carrito | Java Maven Project'
            backgroundImg={carritoImg}
            projectUrl='/carrito'
            tech='Next JS'
          />
          <ProjectItem
            title='Tierra del Sol'
            backgroundImg={tierradelsolIMG}
            projectUrl='/tierradelsol'
            tech='Java'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
