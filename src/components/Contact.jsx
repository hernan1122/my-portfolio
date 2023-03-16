import { SocialMedia } from "./SocialMedia"
import '../styles/Contact.css'

//icons
import { AiFillPhone } from 'react-icons/ai'

export function Contact() {
  return (
    <footer id="contacts" className="footer-container">
      <div className="footer-container-title">
        <h2>
          <AiFillPhone className="contact-icon"/> Contact me
        </h2>
        <p className="footer-container-text">You can contact me on any of these social media.</p>
      </div>
      <SocialMedia />
    </footer>
  )
}
