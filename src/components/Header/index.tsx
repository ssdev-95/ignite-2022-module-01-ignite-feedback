import styles from './style.module.scss'
import IgnaitoLogo from '~/logo.svg'

function Header() {
  return (
    <div className={styles["header__container"]}>
			<img
				src={IgnaitoLogo}
				alt="Ignaito feed arrows logo"
			/>
    </div>
  )
}

export default Header
