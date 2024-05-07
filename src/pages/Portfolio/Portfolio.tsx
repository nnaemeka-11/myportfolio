import Design from '../../components/design/Design';
import { NavBar } from '../../components/nav/NavBar'
import styles from './Portfolio.module.css'
import smartlearning from '../../assets/smartlearning.png'
import dangelo from '../../assets/dangelo.png'
import linktree from '../../assets/linktree.png'
import card from '../../assets/card.png'



function Portfolio() {
  return (
    <div>
        <div className={styles.Container}>
        <NavBar />
        <section className={styles.MainContainer}>
          <aside className={styles.AboutSection}>
            <h1 className={styles.Title}>Portfolio</h1>
          </aside>
            <section className={styles.WorkSection}>
            <Design title={"Smartlearning"} source={smartlearning} text={'https://smartlearning.vercel.app/'} classname={styles.Design}/>
            <Design title={"Card Payment Auth"} source={card} text={'https://junetechepayment.netlify.app/'} classname={styles.Design}/>
            <Design title={"Link Tree Portfolio"} source={linktree} text={'https://nnaemeka11.netlify.app'} classname={styles.Design}/>
            <Design title={"D'Angelo Arts"} source={dangelo} text={'https://nnaemekaxi.github.io'} classname={styles.Design}/>
          </section>
        </section>
        
      </div>
    </div>
  )
}

export default Portfolio;