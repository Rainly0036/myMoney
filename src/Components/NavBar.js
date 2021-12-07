import { Link } from "react-router-dom"
import { useLogOut } from '../Hooks/useLogOut'
import { useAuthContext } from '../Hooks/useAuthContext'

// styles
import styles from './NavBar.module.css'

export default function Navbar() {
  const { logout } = useLogOut()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}><Link to="/">myMoney</Link></li>
        
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        
        {user && (
          <>
            <li>
              <h3>Hello, {user.displayName}</h3>
            </li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      
      </ul>
    </nav>
  )
}