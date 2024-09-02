import './App.css';
import starIcon from './assets/icon-star.svg';
import minusIcon from './assets/icon-minus.svg';
import plusIcon from './assets/icon-plus.svg';
import React, { useState } from 'react';

function App() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(section); // Open the section
    }
  };

  return (
    <div className='major'>
      <div className='mbody'>
        <h1>
          <img className='img1' src={starIcon} alt="star icon" />
          Mola Tonny's FAQs
        </h1>
        <h2 onClick={() => toggleSection('about')}>
          ICT Administrator | Front-End Engineer | Linux (Ubuntu Desktop)
          <img src={openSection === 'about' ? minusIcon : plusIcon} alt={openSection === 'about' ? "minus icon" : "plus icon"} />
        </h2>
        <div className={`drop-content ${openSection === 'about' ? 'show' : ''}`}>
          <p>
            I am an ICT Administrator, Front-End Engineer, and Linux (Ubuntu Desktop) expert. With extensive experience in managing IT infrastructure, developing responsive websites, and optimizing Linux systems, I bring a comprehensive skill set to every project.
          </p>

          <p>
            <strong>Find me in my professional socials below: </strong>
            <ul>
              <li><a href='https://github.com/i-prince'>Github</a></li>
              <li><a href='https://www.linkedin.com/in/mola-brother-tonny/'>LinkedIn</a></li>
            </ul>
          </p>
        </div>

        <div className='dropdown'>
          <h3 className='drop1' onClick={() => toggleSection('ict')}>
            What are your core skills as an ICT Administrator?
            <img src={openSection === 'ict' ? minusIcon : plusIcon} alt={openSection === 'ict' ? "minus icon" : "plus icon"} />
          </h3>
          <div className={`drop-content ${openSection === 'ict' ? 'show' : ''}`}>
            <p>
              As an ICT Administrator, I specialize in managing and maintaining IT infrastructure, ensuring network security, and providing technical support. I have extensive experience with systems administration, particularly with Linux (Ubuntu Desktop), where I configure, deploy, and troubleshoot systems to optimize performance and security.
            </p>
          </div>

          <h3 className='drop2' onClick={() => toggleSection('frontend')}>
            What can you do as a Front-End Engineer?
            <img src={openSection === 'frontend' ? minusIcon : plusIcon} alt={openSection === 'frontend' ? "minus icon" : "plus icon"} />
          </h3>
          <div className={`drop-content ${openSection === 'frontend' ? 'show' : ''}`}>
            <p>
              In my role as a Front-End Engineer, I design and develop responsive, user-friendly websites using HTML, CSS, Bootstrap, and React. I am proficient in creating visually appealing interfaces and ensuring that websites are optimized for performance and accessibility. My focus is on delivering high-quality code that enhances the user experience.
            </p>
          </div>

          <h3 className='drop3' onClick={() => toggleSection('linux')}>
            How proficient are you with Linux (Ubuntu Desktop)?
            <img src={openSection === 'linux' ? minusIcon : plusIcon} alt={openSection === 'linux' ? "minus icon" : "plus icon"} />
          </h3>
          <div className={`drop-content ${openSection === 'linux' ? 'show' : ''}`}>
            <p>
              I am highly proficient with Linux, particularly Ubuntu Desktop. I can manage and automate tasks using shell scripting, configure servers, and optimize system performance. My expertise includes setting up development environments, managing software packages, and securing systems against potential threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
