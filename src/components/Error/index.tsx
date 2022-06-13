import { WarningOctagon } from 'phosphor-react'
import styles from './style.module.scss'

function InternalError() {
  return (
    <div className={styles["error__container"]}>
			<WarningOctagon size={32} weight="duotone" />
			<strong>Internal Server Error!</strong>
			<p>We're undergoing to fix things out!</p>
    </div>
  )
}

export default InternalError
