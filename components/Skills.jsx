import React from 'react'
import Image from 'next/image';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import python from '../public/assets/skills/piton.png';
import kotlin from '../public/assets/skills/kotlin.png';
import java from '../public/assets/skills/java.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p>Skills</p>
            <h2>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>


        
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Github} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={python} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={java} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={kotlin} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Kotlin</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Html} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={Css} width='64px' height='64px' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills