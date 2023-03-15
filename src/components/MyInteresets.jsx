import '../styles/MyInteresets.css'

//icons
import { MdDirectionsBike } from 'react-icons/md'
import { FaPlane } from 'react-icons/fa'
import { MdLibraryMusic } from 'react-icons/md'
import { FaDog } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { MdPhotoCamera } from 'react-icons/md'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 200,
  once: true,
});

export function MyInteresets() {
  return (
    <section className="my-interesets">
      <h3>My Interesets</h3>
      <div className="interests-container" data-aos="zoom-in">
        <section className="interests-container-content">
          <div className="interests-container-content-circle">
            <i>
              <MdDirectionsBike />
            </i>
            <h4>BIKE</h4>
          </div>
          <div className="interests-container-content-circle"> 
            <i>
              <MdLibraryMusic />
            </i>
            <h4>MUSIC</h4>
          </div>
          <div className="interests-container-content-circle">
            <i>
              <FaPlane />
            </i>
            <h4>TRAVEL</h4>
          </div>
        </section>
        <section className="interests-container-content">
          <div className="interests-container-content-circle">
            <i>
              <FaDog />
            </i>
            <h4>ANIMALS</h4>
          </div>
          <div className="interests-container-content-circle">
            <i>
              <FaBook />
            </i>
            <h4>BOOKS</h4>
          </div>
          <div className="interests-container-content-circle">
            <i>
              <MdPhotoCamera />
            </i>
            <h4>PHOTOS</h4>
          </div>
        </section>
      </div>
    </section>
  )
}
