import { NavBar } from '../../components/nav/NavBar'
import styles from './About.module.css'
import location from '../../assets/location.svg'
import email from '../../assets/email.svg'
import whatsapp from '../../assets/whatsapp.svg'
import phone from '../../assets/phone.svg'

function About() {
  return (
    <div className={styles.Container}>
        <NavBar />
        <section className={styles.MainContainer}>
            <aside className={styles.AboutSection}>
            <h1 className={styles.Title}>About</h1>
            <h2 className={styles.Stack}>Fullstack Web Developer</h2>
            <p className={styles.Decription}>With vast training in software development, I have extensive experience in web  development, 
            I am dedicated to understanding technologies better in order to provide answers and solutions 
            that generate excellent results in business and transform people's lives
            </p>
            <p> <img src={phone} alt="phone" />+353 87 490 4819</p>
            <p> <img src={whatsapp} alt="whatsapp" />+234 813 578 1471</p>
            <p> <img src={email} alt="email" />elomnnaemekaj@gmail.com</p>
            <p> <img src={location} alt="location" />Limerick, Ireland</p>
            </aside>
            <aside className={styles.SkillsSection}>
                <h1 className={styles.Title}>Skills</h1>
                <h4 className={styles.Description2}>MY PROGRAMMING LANGUAGES AND PROFICIENCY</h4>
                <article className={styles.RatingSection}>
                    <p>HTML <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                    <p>CSS <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                    <p>JAVASCRIPT <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                    <p>REACTJS <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                    <p>NODEJS/EXPRESS <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                    <p>TAILWIND CSS <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>                    
                    <p>PHP <span>&#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b> <b className={styles.WhiteStar}>&#9734;</b> </span></p>
                    <p>PYTHON/DJANGO <span>&#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b> <b className={styles.WhiteStar}>&#9734;</b> <b className={styles.WhiteStar}>&#9734;</b></span></p>

                </article>
                <h4 className={styles.Description2}>DATABASE LANGUAGES AND PROFICIENCY</h4>
                <article className={styles.RatingSection}>
                    <p>SQL/MYSQL <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                    <p>MONGODB <span>&#11088; &#11088; &#11088; &#11088; <b className={styles.WhiteStar}>&#9734;</b></span></p>
                </article>
                <h4 className={styles.Description2}>LANGUAGES AND PROFICIENCY</h4>
                <article className={styles.RatingSection}>
                    <p>ENGLISH <span>&#11088; &#11088; &#11088; &#11088; &#11088;</span></p>
                    
                </article>
            </aside>
            <aside className={styles.RefereesSection}>
                <h1 className={styles.RefereesSectionTitle}>Referees</h1>
                
            </aside>
        </section>
    </div>
  )
}

export default About