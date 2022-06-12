import * as Icon from 'phosphor-react'
import styles from './style.module.scss'
import IgnaitoLogo from '../../assets/logo.svg'

interface HeaderProps {
	toggleFunction: ()=>void;
	isOpen: boolean;
}

function Header({ isOpen, toggleFunction }:HeaderProps) {
  return (
    <header className={styles["header__container"]}>
			<img
				src={IgnaitoLogo}
				alt="Ignaito feed arrows logo"
			/>

			<button onClick={toggleFunction}>
				{
					isOpen ?
					<Icon.X size={40} /> :
					<Icon.List size={40} />
				}
			</button>
    </header>
  )
}

export default Header
