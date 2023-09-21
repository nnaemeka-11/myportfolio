import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div>
        <ul className={styles.NavBar}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar