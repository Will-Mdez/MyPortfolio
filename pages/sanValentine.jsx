import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Howl } from 'howler';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const SanValentine = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const messageAnimation = useSpring({
    opacity: showMessage ? 1 : 0,
    transform: showMessage ? 'translateY(0)' : 'translateY(50px)',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



  const initializeAudio = () => {
    const newSound = new Howl({
      src: ['https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/b%20o%20b%20-%20nothin%20on%20you%20feat%20bruno%20mars-mixfiend(1)(3)(2).mp3?t=2024-02-13T02%3A16%3A37.017Z'], // Reemplaza con la ruta correcta de tu archivo de audio
      onend: () => {
        setIsPlaying(false);
      },
    });
    setSound(newSound);
  };

  const toggleAudio = () => {
    if (!sound) {
      initializeAudio();
    }

    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }

    setIsPlaying(!isPlaying);
  };



  return (
    <div className='w-full'>
      <div className='w-screen h-auto '>
        <div
          className='w-screen h-screen items-center justify-center bg-pink-100 grid'
          style={{
            backgroundImage: 'url(https://img.freepik.com/foto-gratis/ramo-tulipanes-sobre-fondo-rosa-copyspace_24972-271.jpg)',
            backgroundSize: '700px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='w-screen md:w-full h-auto mt-28 justify-center items-center block '>
            <div className=' p-4 text-black text-center text-lg font-serif flex md:grid'>
              Este San Valentín quiero prometerte que siempre te amaré, te respetaré y te cuidaré. Eres el amor de mi vida y no quiero perderte nunca.
            </div>
            <Carousel className='w-screen md:w-96 h-auto md:ml-96'>
              <div className='w-auto h-auto justify-center items-center flex pt-12'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/heart?t=2024-02-12T18%3A33%3A29.719Z' />
              </div>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/dic2023?t=2024-02-12T18%3A28%3A14.476Z' alt='Image 1' />
              </div>
              <div className='w-auto h-auto justify-center items-center flex pt-12'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/gym.jpg?t=2024-02-14T02%3A25%3A18.412Z' alt='Image 1' />
              </div>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/patron.jpg' alt='' />
              </div>
              <div className='w-auto h-auto justify-center items-center flex'>
                <img src='https://xnwlfjgheqxheajpsixj.supabase.co/storage/v1/object/public/assets/oax2023?t=2024-02-12T18%3A23%3A59.676Z' />
              </div>
              <div className='w-auto h-auto justify-center items-center flex pt-12'>
                <img src='https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/358600732_6363521850406167_5383663304029972596_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFysOjnC1YZroVwurWE_b9xrlstZD-MvByuWy1kP4y8HHzutk1kKqZQXun6s5lvZhXNYjXBcBhyo0Jl4RqeVdTd&_nc_ohc=A92jvuhQcOsAX81evVi&_nc_ht=scontent-qro1-2.xx&oh=00_AfCyq_AN6kQJaemiOrsu3lLN4a5LVN9nqcqFbiF8lONV6g&oe=65C9ADC7' alt='Image 2' />
              </div>
              {/* Agrega más imágenes según sea necesario */}
            </Carousel>
          </div>
          <div className='grid bg-pink-100'>

            <div className='grid justify-center mb-12'>
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
              <div className='justify-center'>

                {showMessage && (
                  <animated.div style={messageAnimation}>
                    <p className='flex justify-center'>¡Feliz Día de San Valentín, mi amor!</p>
                  </animated.div>
                )}
              </div>
              <button className='p-2 mt-5' onClick={toggleAudio} >{isPlaying ? 'Pausar Audio' : 'Reproducir Audio'}</button>
              <div className=' p-4 text-black text-center text-lg font-serif flex'>
              Esta página web es un espacio para que puedas recordar nuestros mejores momentos juntos. Te Amo Jocelyn 
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SanValentine;
