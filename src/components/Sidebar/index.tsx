import { GithubLogo, Pen } from 'phosphor-react'
import Avatar from '../Avatar'
import Poster from '../../assets/poster.png'
import styles from './style.module.scss'

interface SidebarProps {
	isOpen: boolean;
}

export const user = {
	avatarUrl: 'https://en.gravatar.com/userimage/221952240/1f48c295029265db95bdc00a82b43988.jpg',
	name: 'Saromon',
	role:  'Frontend dev.',
	git: 'https://github.com/xSallus/?tab=repositories'
}

function Sidebar({ isOpen }:SidebarProps) {
  return (
    <div className={[
			styles["sidebar__container"],
		  isOpen ? styles.show : ''
		].join(' ')}>
			<img src={Poster} className={styles.poster}/>
			<a
				href={user.git}
				className={styles.anchor}
				target="__blank"
			>
				<GithubLogo size={36} weight="fill" />
			</a>
			<div>
				<Avatar src={user.avatarUrl} noLoader />
				<h6>
					{user.name}
					<p>{user.role}</p>
				</h6>
			</div>
			<div>
				<button>
					<Pen size={20} />
					Edit profile
				</button>
			</div>
    </div>
  )
}

export default Sidebar
