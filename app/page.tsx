
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">

      {/* Home */}

      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <Hero />
      </div>

      {/* About */}

      <div id="about" className="py-20 text-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:ml-0">
              <Image src="/profile-img.jpeg" alt="My-Pic" width={300} height={500} className="w-[90%] rounded-lg" />
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-600">About me</h2>

              <p className="text-lg mb-8 leading-relaxed">
                Hi, I am Ubaid, proficient in web development with skills in HTML, CSS, JavaScript, and TypeScript,
                learned through Giaic training. I am now expanding my expertise with Next.js and React.js. As a
                newcomer to the field, I am excited to apply my knowledge, learn from others, and take on new
                challenges. I am sharing my journey, projects, and experiments in this portfolio, and I am looking
                forward to connecting with others and growing together in the web development community.
              </p>

              <div className="flex flex-col">
                <p className="text-lg font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 inline-block">Skills</p>

                <ul>
                  <li className="mb-4">
                    <span className="text-indigo-400 font-semibold">Web Development</span>
                    <br /> Frontend Website Development
                  </li>
                  <li className="mb-4">
                    <span className="text-indigo-400 font-semibold">Web Designing</span>
                    <br /> Frontend Website Designing
                  </li>
                  <li className="mb-4">
                    <span className="text-indigo-400 font-semibold">Technologies</span>
                    <br /> Proficient in HTML, CSS, and JavaScript/TypeScript
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}

      <div id="services" className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8 text-white">My Services</h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-6">

            <div className="bg-gray-800 p-8 rounded-xl transition transform hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-green-500 hover:-translate-y-2">
              <Image
                src="/web-dev.png"
                alt="Web Development"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-medium mb-4 text-center text-white">Web Development</h2>
              <p className="text-base text-gray-200 mb-4">
                Crafting responsive and interactive web experiences with expertise in HTML, CSS, JavaScript, and TypeScript. Building dynamic solutions with Next.js and React.js, delivering high-quality web development services with attention to detail.
              </p>
              <a href="#" className="text-cyan-400 text-sm">Learn more</a>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl transition transform hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-green-500 hover:-translate-y-2">
              <Image
                src="/images.png"
                alt="Frontend Development"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-medium mb-4 text-center text-white">Frontend Development</h2>
              <p className="text-base text-gray-200 mb-4">
                Building fast, responsive, and interactive frontend experiences with expertise in JavaScript, TypeScript, and frameworks like Next.js and React.js.
              </p>
              <a href="#" className="text-cyan-400 text-sm">Learn more</a>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl transition transform hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-green-500 hover:-translate-y-2">
              <Image
                src="/web-des.png"
                alt="Web Design"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-medium mb-4 text-center text-white">Web Design</h2>
              <p className="text-base text-gray-200 mb-4">
                Creating visually stunning and user-friendly web designs that captivate audiences. Bringing ideas to life with custom HTML, CSS, and JavaScript solutions, tailored to elevate your online presence.
              </p>
              <a href="#" className="text-cyan-400 text-sm">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Work */}

      <div id="work" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8 text-white">My Work</h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-6">

            <div className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105">
              <Image
                src="/Capture.PNG"
                alt="1st Project"
                width={300}
                height={300}
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-500 to-transparent opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-center text-white p-6 transition-opacity duration-500">
                <h3 className="text-2xl font-medium mb-4 text-black">HTML-CSS Projects</h3>
                <p className="text-sm">This is my HTML-CSS Projects. Which I made when I was learning HTML and CSS.</p>
                <a href="https://html-journey.netlify.app/" target="_blank" className="mt-4 w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full">
                  &#8599;
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105">
              <Image
                src="/calculator.jpg"
                alt="2nd Project"
                width={300}
                height={300}
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-500 to-transparent opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-center text-white p-6 transition-opacity duration-500">
                <h3 className="text-2xl font-medium mb-4 text-black">Digital Calculator</h3>
                <p className="text-sm">This is the Simple Calculator. Made By using HTML, CSS, and JavaScript.</p>
                <a href="https://ubaidcalculator.netlify.app/" target="_blank" className="mt-4 w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full">
                  &#8599;
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105">
              <Image
                src="/clock.jpg"
                alt="3rd Project"
                width={300}
                height={300}
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-500 to-transparent opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-center text-white p-6 transition-opacity duration-500">
                <h3 className="text-2xl font-medium mb-4 text-black">Digital Clock</h3>
                <p className="text-sm">This is the Digital Clock. Made By using HTML, CSS, and JavaScript.</p>
                <a href="https://ubaidclock.netlify.app/" target="_blank" className="mt-4 w-10 h-10 flex items-center justify-center bg-white text-blue-500 rounded-full">
                  &#8599;
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 hover:bg-slate-200 text-white mt-4"><a href="#">See more</a></button>
          </div>
        </div>
      </div>

     {/* Contact */}

      <div id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">

            <div className="contact-left w-full md:w-1/3 mb-12 md:mb-0">
              <h1 className="text-4xl font-semibold mb-6">Contact Me</h1>
              <a href="mailto:ubaidkamal62@gmail.com" target="_blank" className="text-blue-400 text-xl flex items-center mb-4">
                ubaidkamal62@gmail.com
              </a>
              <a href="tel:+923410258688" target="_blank" className="text-blue-400 text-xl flex items-center mb-4">
                03410258688
              </a>
              <div className="social-icons flex mt-6">
                <a href="https://github.com/Sheikh-Ubaid-Raza" target="_blank" className="text-white mr-4 text-xl px-2 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Github</a>
                <a href="https://www.linkedin.com/in/ubaid-raza-8764332b9/?trk=contact-info" target="_blank" className="text-white text-xl px-2 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                Linkedin</a>
              </div>
              <a href="/cv.pdf" target="_blank">
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 hover:bg-slate-200 text-white mt-5">
                  Download CV
                </button>
              </a>
            </div>


            <div className="contact-right w-full md:w-2/3">
              <form className="bg-gray-800 p-6 rounded-lg shadow-md">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none"
                />
                <textarea
                  name="Message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none"
                />
                <button type="submit" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 hover:bg-slate-200 text-white">Submit</button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}

        <div className="copyright bg-gray-900 text-center py-6 mt-8">
          <p className="text-gray-400 text-sm"> © Ubaid. Made with{' '}<span className="text-red-500"></span>{' '}using HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

    </div>
  )
};