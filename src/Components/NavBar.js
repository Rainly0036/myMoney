import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
    )
}
