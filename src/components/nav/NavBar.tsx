import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function HomeNavBar() {
  return (
    <div>
        <ul className={styles.HomeNavBar}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/portfolio"}>Portfolio</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}

function NavBar() {
  return (
    <section className={styles.NavContainer}>
            <h1 className={styles.Name}>Nnaemeka Joseph Elom</h1>
            <HomeNavBar />
        </section>
  )
}

export { HomeNavBar, NavBar }