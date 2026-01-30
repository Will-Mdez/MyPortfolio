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
          content="I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences."
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
          range of programming languages and technologies, including .NET, Java,
          Python, JavaScript, and Kotlin. I have worked on enterprise-level 
          applications, microservices architecture, and cloud platforms, which 
          has given me a solid understanding of modern software development 
          practices. My main goal is to create innovative and effective solutions 
          that improve people&apos;s lives.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> C#
            <span className="px-2">|</span> Java
            <span className="px-2">|</span> Python
            <span className="px-2">|</span> Kotlin
            <span className="px-2">|</span> JavaScript
            <span className="px-2">|</span> TypeScript
            <span className="px-2">|</span> Node.js
            <span className="px-2">|</span> SQL Server
            <span className="px-2">|</span> SAP HANA
            <span className="px-2">|</span> React
            <span className="px-2">|</span> Next.js
            <span className="px-2">|</span> Angular
            <span className="px-2">|</span> Tailwind CSS
          </p>
          <p>
            <ul>
              <li>
                Development of APIs and microservices using .NET and Java.
              </li>
              <li>
                Experience with cloud platforms including AWS and SAP BTP.
              </li>
              <li>
                Database design and optimization with SQL Server and SAP HANA.
              </li>
              <li>
                Implementation of event-driven architectures using Kafka.
              </li>
              <li>
                Code quality assurance and testing with SonarQube.
              </li>
              <li>
                Collaboration in multidisciplinary teams to achieve common goals.
              </li>
            </ul>
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        
        {/* Experience - Grupo Salinas */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Grupo Salinas</span>
            <span className="px-2">|</span>Tlalpan, Ciudad de México
          </p>
          <p className="py-1 italic">.NET, Java and Microservices Developer (May 2024 - Present)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Development of APIs and microservices in .NET and Java for enterprise-level applications.
            </li>
            <li>
              Development of Kafka event consumers and producers in AWS for real-time data processing.
            </li>
            <li>
              Development and integration of microservices on the SAP BTP platform (SAP Business Technology Platform).
            </li>
            <li>
              Design, development, and management of databases using SQL Server and SAP HANA.
            </li>
            <li>
              Implementation of APIs for expense and payment systems, including services with encryption algorithms.
            </li>
            <li>
              Unit testing and functional testing to ensure code quality and reliability.
            </li>
            <li>
              Development of stored procedures and triggers using SQL for complex business logic.
            </li>
            <li>
              Code quality validation using SonarQube to maintain high standards.
            </li>
          </ul>
        </div>

        {/* Experience - CFE */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Comisión Federal de Electricidad (CFE)</span>
            <span className="px-2">|</span>Oaxaca, Oax., México
          </p>
          <p className="py-1 italic">.NET Developer (November 2022 - May 2024)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Requirements analysis and documentation for software projects, ensuring alignment with business needs.
            </li>
            <li>
              Development of web reporting systems and user interfaces for internal management tools.
            </li>
            <li>
              Development of native Android mobile applications from scratch for daily operations and field workers.
            </li>
            <li>
              Created an application for daily meetings, reducing paper consumption and providing crucial information to workers.
            </li>
            <li>
              Development of computer systems for managers, generating dashboards with key indicators at the national, zonal and cycle levels.
            </li>
            <li>
              Technologies used: C#, Angular, TypeScript, SQL Server, Android Studio, Kotlin, Laravel, MVC.
            </li>
          </ul>
        </div>

        {/* Experience - Dynamicore */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Dynamicore</span>
            <span className="px-2">|</span>Remote
          </p>
          <p className="py-1 italic">.NET Developer (April 2021 - October 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Development of modules for administrative systems using .NET and modern web frameworks.
            </li>
            <li>
              Development and integration of APIs for sales and payments, enhancing application functionality.
            </li>
            <li>
              Improvement of user experience (UX) in web applications using React and Next.js.
            </li>
            <li>
              Frontend development with Next.js and TypeScript to create high-quality user experiences.
            </li>
            <li>
              Collaboration on backend development, providing a comprehensive view of the development cycle.
            </li>
            <li>
              Technologies used: C#, React, Next.js, Node.js, SQL Server, Tailwind CSS, MVC.
            </li>
            <li>
              Projects:
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

        {/* University Projects */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">University Projects</span>
            <span className="px-2">|</span>Universidad Tecnológica de la
            Mixteca, Oax, MX
          </p>
          <p className="py-1 italic">2018 - 2023</p>
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
      </div>
    </>
  );
};

export default resume;
