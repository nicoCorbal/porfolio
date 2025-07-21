import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutSlider = ({ members }) => {
  const [activeCard, setActiveCard] = useState(null); // State to track the active card

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index); // Toggle active card
  };

  return (
    <Slider {...settings}>
      {members.map((member, index) => (
        <div key={index} className="px-2"> 
          <div 
            className={`relative group bg-black rounded-lg shadow-lg flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-300 cursor-pointer h-64 sm:h-64 overflow-hidden ${activeCard === index ? 'active' : ''}`} 
            onClick={() => handleCardClick(index)} // Handle click event
            role="button"
            aria-label={`View details for ${member.name}`}
          >
            <div className={`absolute inset-0 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`} data-member-image>
              <img 
                src={member.image} 
                alt={member.name} 
                className={`w-full h-full object-cover brightness-90 transition-all duration-300 ${activeCard === index ? 'brightness-100' : ''}`}
                style={{
                  objectPosition: `center ${member.imageFocus || '50%'}`,
                  transform: `scale(${member.imageScale || 1})`
                }}
              />
            </div>
            <div className={ `flex flex-col items-center justify-center h-full relative z-10 text-center transition-all duration-300 ${activeCard === index ? 'opacity-0' : 'opacity-100'}`} data-member-info>
              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{member.name}</h3>
              <p className="text-white text-xs sm:text-sm md:text-base font-light">{member.role}</p>
            </div>
            <div className={`absolute inset-0 flex flex-col items-center p-1 justify-end transition-all duration-300  bg-black/40 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`} data-member-details>
              <p className="text-white text-xs sm:text-sm md:text-base text-center font-light mb-1">{member.bio}</p>
              <div className="flex gap-6 mb-2">
                <a 
                  href={member.linkedin} 
                  className="text-white hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a 
                  href={member.github} 
                  className="text-white hover:text-gray-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`${member.name}'s GitHub profile`}
                >
                  {/* GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default AboutSlider;