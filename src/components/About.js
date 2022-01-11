import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Hasnaa.
            <br className="hidden lg:inline-block" />
            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-small text-white">
              I am a Full-Stack Developer.
            </h2>
          </h1>

          {/* <p className="mb-8 leading-relaxed">
            I graduated as an electrical
            engineer from the university of Jordan. I have always been
            interested in coding and technology in general, and recently decided
            to take the opportunity to become a web developer.
          </p> */}
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              download="Hasnaa-Habahbeh-Resume.pdf"
              href="./resume.pdf"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Download My CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          /> */}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./assets/hero.png"
          />
        </div>
      </div>
    </section>
  );
}
