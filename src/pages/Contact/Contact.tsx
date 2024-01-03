import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { NavBar } from '../../components/nav/NavBar'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Contact() {

  const [user_name, setName] = useState<string>('');
  const [user_email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const form = e.currentTarget as HTMLFormElement;  // Cast e.currentTarget to HTMLFormElement
  
      const templateParams = {
        from_name: user_name,
        from_email: user_email,
        message: message,
      };
  
      await emailjs.sendForm(
        'nnaemeka11',
        'junetech',
        form,
        'b49wpKl2Qtc_fuJk5'
      );
  
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. Please try again later.');
    }
  };
  

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
          <section className={styles.FollowSection}>
          <h3 className={styles.FollowMe}>Follow me on social media </h3>
          <aside className={styles.IconsContainer}>
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
            </section>
            <form onSubmit={handleSubmit} className={styles.FormSection}>
              <h3>Fill the form</h3>
              <span className={styles.InputContainers}>
                <span className={styles.EachInput}>
                <label htmlFor="name">Name</label>
                <input 
                      type="text" 
                      name="from_name" 
                      id="name" 
                      placeholder='Enter your name' 
                      required
                      value={user_name} onChange={(e) => setName(e.target.value)}
                      />
                </span>
                <span className={styles.EachInput}>
                <label htmlFor="email">Email</label>
                <input 
                      type="email" 
                      name="from_email" 
                      id="email" 
                      placeholder='Enter your email'
                      required
                      value={user_email} onChange={(e) => setEmail(e.target.value)}
                      />
                </span>
              </span>
              <span style={{display: 'flex', flexDirection: 'column'}}>
              <label htmlFor="message">Message</label>
              <textarea 
                    name="message" 
                    id="message" 
                    placeholder='Enter your message' 
                    required
                    value={message} onChange={(e) => setMessage(e.target.value)}
              />
              </span>
              <button type="submit">Send Message</button>
          </form>
        </section>

      </div>
    )
  }
  
  export default Contact