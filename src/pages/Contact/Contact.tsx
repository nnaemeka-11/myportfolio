import { NavBar } from '../../components/nav/NavBar'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    return (
      <div className={styles.Container}>
        <NavBar />
        <section className={styles.MainContainer}>
        <aside className={styles.AboutSection}>
            <h1 className={styles.Title}>Contact</h1>
          </aside>
          
          <h2 className={styles.Alert}>Do you have an idea in mind? Let's turn it into a business. Get in touch.</h2>
          <aside className={styles.ContactContainer}>
              <article>
                <span className={styles.Icon}><FontAwesomeIcon icon={faLocationDot} /></span>
                <span>
                  <h4>Location</h4>
                  <p>Raheen - Limerick, Ireland</p>
                </span>
              </article>
              <article>
                <span className={styles.Icon}><FontAwesomeIcon icon={faEnvelope} /></span>
                <span>
                  <h4>Email</h4>
                  <p>elomnnaemekaj@gmail.com</p>
                </span>
              </article>
              <article>
                <span className={styles.Icon}><FontAwesomeIcon icon={faPhone} /></span>
                <span>
                  <h4>Phone</h4>
                  <p>+353874904819</p>
                </span>
              </article>
          </aside>
          <aside className={styles.IconsContainer}>
            <h3>Follow me on social media </h3>
            <a href="https://www.linkedin.com/in/nnaemeka11"><span className={styles.IconContainer}>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.LinkedIn}/>
            </span></a>
            <a href="https://wa.me/2348135781471"><span className={styles.IconContainer}>
            <FontAwesomeIcon icon={faWhatsapp} className={styles.Whatsapp}/>
            </span></a>
            <a href="https://www.facebook.com/nnaemeka11"><span className={styles.IconContainer}>
            <FontAwesomeIcon icon={faFacebookF} className={styles.Facebook}/>
            </span></a>
            <a href="https://www.github.com/nnaemekaxi"><span className={styles.IconContainer}>
            <FontAwesomeIcon icon={faGithub} className={styles.Github}/>
            </span></a>
            </aside>
          <aside className={styles.FormSection}>
              <h3>Fill the form</h3>
              <span className={styles.InputContainers}>
                <span className={styles.EachInput}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' />
                </span>
                <span className={styles.EachInput}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" placeholder='Enter your name'/>
                </span>
              </span>
              <span style={{display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder='Enter your message'></textarea>
              </span>
              <button>Send Message</button>
          </aside>
        </section>

      </div>
    )
  }
  
  export default Contact