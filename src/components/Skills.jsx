import '../styles/Skills.css'

//icons
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 200,
  once: true,
});

export function Skills() {
  return (
    <section className="technologies-container">
      <h3>Skills</h3>
      <div className="technologies-container-content" data-aos="zoom-in">
        <div className="technologies-container-contentOne">
          <div className="html circle">
            <i className='icon-skills'>
              <AiFillHtml5 />
            </i>
            <h4>HTML 5</h4>
          </div>
          <div className="js circle">
            <i className='icon-skills'>
              <SiJavascript />
            </i>
            <h4>JAVASCRIPT</h4>
          </div>
        </div>
        <div className="technologies-container-contentTwo">
          <div className="css circle">
            <i className='icon-skills'>
              <FaCss3Alt />
            </i>
            <h4>CSS 3</h4>
          </div>
          <div className="react circle">
            <i className='icon-skills'>
              <FaReact />
            </i>
            <h4>REACT</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
