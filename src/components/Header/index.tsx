import * as Icon from 'phosphor-react'
import styles from './style.module.scss'
import IgnaitoLogo from '../../logo.svg'

function Header() {
  return (
    <header className={styles["header__container"]}>
			<img
				src={IgnaitoLogo}
				alt="Ignaito feed arrows logo"
			/>

			<button>
				<Icon.List size={40} />
			</button>
    </header>
  )
}

export default Header
