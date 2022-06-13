import { WarningOctagon } from 'phosphor-react'
import styles from './style.module.scss'

interface ErrorProps {
	error: any;
}

function InternalError({ error }: ErrorProps) {
  return (
    <div className={styles["error__container"]}>
			<WarningOctagon size={32} weight="duotone" />
			<strong>{error}</strong>
			<p>Deu ruim cachuera!</p>
    </div>
  )
}

export default InternalError
