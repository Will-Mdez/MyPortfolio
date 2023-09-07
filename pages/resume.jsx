import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Will | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">William Mendez Gonzalez</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/william-mendez-9a6158209/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Will-Mdez"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Computer Engineer <span className="px-1">|</span> Software
              Development <span className="px-1"></span>
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Computer Engineer</p>
            <p className="py-2">Software Development</p>
          </div>
        </div>
        <p>
          I am a passionate computer engineer with a strong focus on software
          development and artificial intelligence. My experience spans a wide
          range of programming languages, from Python and JavaScript to Java,
          Kotlin and C. I have worked on web and mobile application projects,
          which has given me a solid understanding of today&apos;s most relevant
          technologies, like Next.js and TypeScript. My main goal is to create
          innovative and effective solutions that improve people&apos;s lives.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> Python
            <span className="px-2">|</span> Java
            <span className="px-2">|</span> Kotlin
            <span className="px-2">|</span> SQL
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
          </p>
          <p>
            <ul>
              <li>
              Expert use of Python libraries for artificial intelligence, including Scikit-learn and Keras.
              </li>
              <li>
              Creation of high-performance and easy-to-maintain web and mobile applications.
              </li>
              <li>
Query optimization and data storage to improve application performance.</li>
            <li>
Collaboration in multidisciplinary teams to achieve common goals.
            </li>
            </ul>
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Dynamicore</span>
            <span className="px-2">|</span>Ciudad de Mexico, MX
          </p>
          <p className="py-1 italic">Front End (2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              My responsibilities primarily focused on frontend development,
              where I worked with Next.js and TypeScript to create high-quality
              user experiences. Additionally, I collaborated on backend
              development, providing me with a comprehensive view of the
              development cycle. I integrated sales and payment APIs to enhance
              application functionality, resulting in a smoother and more
              efficient user experience.
              <div className="flex">
                <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                  <li>
                    <a href="https://enpagos.mx/">
                      <u>enpagos</u>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.somoswemo.com/">
                      <u>somoswemo</u>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">University Projects</span>
            <span className="px-2">|</span>Universidad Tecnologica de la
            Mixteca, Oax, MX
          </p>
          <p className="py-1 italic"> 2018 - 2023</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              <span className="font-bold">
                Autonomous Drone Project (Social Service)
              </span>
              I participated in a project that consisted of developing a drone
              capable of flying autonomously by detecting data in real time. I
              worked on the creation of test scenarios and the implementation of
              machine learning models that would allow the drone to detect and
              react to different situations.
            </li>
            <li>
              <span className="font-bold">
                UMT Project (User Control Application)
              </span>
              A mobile application in Kotlin designed for professors of the
              Technological University of the Mixteca. This application allowed
              teachers to access a wide range of information about their stay at
              the institution, including control of their articles, subjects,
              thesis students, events, among others. The application used an API
              and took advantage of considerable resources for its operation.
            </li>
            <li>
              <span className="font-bold">
                Inventory and Sales Control System
              </span>
              I helped develop Java software that allowed stores to manage their
              inventory and track sales. We used technologies like PrimeFaces,
              HTML, and CSS for the user interface, which made it easy for
              businesses to upload products and calculate sales earnings.
            </li>
            <li>
              <span className="font-bold">
                Artificial Intelligence Projects
              </span>
              I implemented creative solutions, including a game that simulates
              the behavior of a squid using artificial vision based on green and
              red color game that detects the movement of the players. Use
              OpenCV resources for image recognition and demonstrated my ability
              to apply AI.
            </li>
          </ul>
        </div>
        {/* Experience */}
      </div>
    </>
  );
};

export default resume;
