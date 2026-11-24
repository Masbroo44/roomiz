import { NavLink } from 'react-router-dom'
import styles from './TabBar.module.css'

const TABS = [
  { to: '/explore', label: 'Explore', icon: '🧭' },
  { to: '/knocks', label: 'Knocks', icon: '🚪' },
  { to: '/living-room', label: 'Living Room', icon: '🛋️' },
  { to: '/my-room', label: 'My Room', icon: '🔑' },
]

const TabBar = () => {
  return (
    <nav className={styles.tabBar} aria-label="Navigation principale">
      {TABS.map((tab) => (
        <NavLink key={tab.to} className={styles.tab} to={tab.to}>
          <span className={styles.icon} aria-hidden="true">
            {tab.icon}
          </span>
          {tab.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default TabBar
