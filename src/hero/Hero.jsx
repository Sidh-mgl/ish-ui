
<section className="relative w-full h-screen overflow-hidden">
  {/* Logo */}
  <img
  src="/logo.jpg"
  alt="EcoQuest AI Logo"
  className="absolute top-4 left-4 w-28 h-auto z-20"
  style={{ borderRadius: '2rem', background: 'white' }} // Optional for styling
/>

  {/* Background video and rest of content */}
</section>




import { motion } from "framer-motion";
import "./Hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src= "herosection.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay for darkening video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Turn <span className="learning-highlight">Learning</span> into Action
            <br />
            Gamified Environmental Education for Every Student!
          </h1>
          <p className="additional-text">
            Interactive quests, AI-personalized lessons, and Web AR challenges that make sustainability fun, engaging, and impactful.
          </p>

          {/* Buttons stacked vertically */}
          <div className="hero-buttons">
            <Link to="/register" className="animated-button">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Connect Now</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </Link>

            <button className="learn-more">
              <span aria-hidden="true" className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

