import NavBar from '../../components/nav/NavBar'
import styles from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <div className={styles.Container}>
        <section className={styles.ProfilePix}>

        </section>
        <section className={styles.Content}>
            <h1 className={styles.Name}>Nnaemeka Joseph Elom</h1>
            <h3 className={styles.Description}>Am a Web Developer</h3>
            
            <p className={styles.Details}>I build all kinds of websites such 
            as BTC website, school website, company website, crypto websites etc.</p>
            <NavBar />
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
    </div>
  )
}

export default Home