import { WarningOctagon } from 'phosphor-react'
import styles from './style.module.scss'

interface ModalProps {
	idToDelete: string;
	onDeleteRequested: (id:string)=>void;
	onClose: ()=>void;
}

function Modal({
	idToDelete,
	onClose,
	onDeleteRequested
}:ModalProps) {
	function handleDeleteRequested() {
		onDeleteRequested(idToDelete)
		onClose()
	}
  return (
    <div className={styles["modal__overlay"]}>
			<div className={styles["modal__container"]}>
				<header>
					<WarningOctagon size={56} weight="duotone" />
				</header>
				<strong>Delete comment</strong>
				<p>Are you sure to delete this comment?</p>
				<footer>
					<button onClick={onClose}>Cancel</button>
					<button
						onClick={handleDeleteRequested}
					>Yes, delete</button>
				</footer>
			</div>
    </div>
  )
}

export default Modal
