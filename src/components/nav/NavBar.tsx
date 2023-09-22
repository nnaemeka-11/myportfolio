import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div>
        <ul className={styles.NavBar}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/portfolio"}>Portfolio</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default NavBar