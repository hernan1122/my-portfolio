import { PersonalInformation } from "./PersonalInformation"
import { Skills } from "./Skills"
import { MyInteresets } from "./MyInteresets"
import '../styles/About.css'

//icons
import { BsFillPersonFill } from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 400,
});

export function About(props) {
  return (
    <div id="about" className="about-container" >
      <div className="about-container-title">
        <h2>
          <BsFillPersonFill className="about-icon"/> About me
        </h2>
      </div>
      <div data-aos="fade-up">
        <p className="about-container-text">
          Hi, my name is Axel, I am 23 years old, I am a young man with a great desire to grow professionally and personally.
        </p>
        <br />
        <p className="about-container-text">
          I consider myself a responsible, punctual, proactive and friendly person. I am good at working individually and in groups. I study CANTERA SOFTWARE programming in.
        </p>
      </div>

      <section className="about-container-content">
        <PersonalInformation />
        <Skills />
        <MyInteresets />
      </section>
    </div>
  )
}
