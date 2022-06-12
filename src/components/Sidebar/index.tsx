import * as Icon from 'phosphor-react'
import Poster from '../../assets/poster.png'
import styles from './style.module.scss'

interface SidebarProps {
	isOpen: boolean;
}

const user = {
	avatar_url: 'https://github.com/baliestri.png',
	firstName: 'Saromon',
	role:  'Frontend dev.'
}

function Sidebar({ isOpen }:SidebarProps) {
  return (
    <div className={[
			styles["sidebar__container"],
		  isOpen ? styles.show : ''
		].join(' ')}>
			<img src={Poster} className={styles.poster}/>
			<div>
				<img
					className={styles.avatar}
					src={user.avatar_url}
				/>
				<p>
					{user.firstName}
					<p>{user.role}</p>
				</p>
			</div>
			<div>
				<button>
					<Icon.Pen size={20} />
					Edit profile
				</button>
			</div>
    </div>
  )
}

export default Sidebar
