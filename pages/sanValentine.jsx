import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Howl } from 'howler';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import chatbotImg from '../public/assets/projects/chatbot.png';
import tulipanes from '../public/assets/tulipanes.jpg';


const SanValentine = () => {
  const [showMessage, setShowMessage] = useState(false);

  const messageAnimation = useSpring({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? 'translateY(0)' : 'translateY(50px)',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const playAudio = () => {
    const sound = new Howl({
      src: ['path/to/your/audio.mp3'],
    });
    sound.play();
  };

  return (
    <div className='w-full'>
      <div className='w-screen h-auto '>
        <div
          className='w-full h-full items-center justify-center bg-pink-100 grid'
          style={{
            backgroundImage: 'url(https://img.freepik.com/foto-gratis/ramo-tulipanes-sobre-fondo-rosa-copyspace_24972-271.jpg)',
            backgroundSize: '1220px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='w-96 h-96 mt-28  items-center '>
            <Carousel className='w-auto h-auto justify-center items-center '>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/dic2023?t=2024-02-12T18%3A28%3A14.476Z' alt='Image 1' />
              </div>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/oax2023?t=2024-02-12T18%3A23%3A59.676Z'  />
              </div>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/heart?t=2024-02-12T18%3A33%3A29.719Z'  />
              </div>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/358600732_6363521850406167_5383663304029972596_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFysOjnC1YZroVwurWE_b9xrlstZD-MvByuWy1kP4y8HHzutk1kKqZQXun6s5lvZhXNYjXBcBhyo0Jl4RqeVdTd&_nc_ohc=A92jvuhQcOsAX81evVi&_nc_ht=scontent-qro1-2.xx&oh=00_AfCyq_AN6kQJaemiOrsu3lLN4a5LVN9nqcqFbiF8lONV6g&oe=65C9ADC7' alt='Image 2' />
              </div>
              {/* Agrega más imágenes según sea necesario */}
            </Carousel>
          </div>
          <div className='grid my-48'>

            <div className='grid justify-center mt-24 '>
              <div className='flex justify-center'>
                <animated.div
                  style={{
                    fontSize: '36px',
                    color: 'red',
                    ...messageAnimation,
                  }}
                >
                  ❤️
                </animated.div>

              </div>
              <div className='flex'>

                {showMessage && (
                  <animated.div style={messageAnimation}>
                    <p>¡Feliz Día de San Valentín, mi amor!</p>
                  </animated.div>
                )}
              </div>
            <button className='p-2 m-5' onClick={playAudio}>Reproducir Audio</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SanValentine;
