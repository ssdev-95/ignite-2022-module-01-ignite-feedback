import { useState, ChangeEvent, FormEvent } from 'react'
import Commentary from '../Comment'
import Modal from '../Modal'
import { api } from '../../services/api'

import styles from './style.module.scss'

type SubmitEvent = FormEvent<HTMLFormElement>;
type InputEvent = ChangeEvent<HTMLTextareaElement>;
type Comment = {
	id: string,
	createdAt: string,
	author: {
		avatarUrl: string,
		name:string
	},
	content: string
}
const lol = {
  id: 1,
	createdAt:'',
	author: {name:'',avatarUrl:''},
	content:'lol'
}
const endpoint = '/api/?results=1&inc=name,picture'
function Post() {
	const [comments, setComments] = useState<Comment[]>([lol])
	const [newComment, setNewComment] = useState("")
	const [isModalOpen, setIsModalOpen] = useState(true)
	const [idToDelete, setIdToDelete] = useState("")

	function uuid(text:string, timestamp:string) {
		const id = [
			timestamp,
			text.replaceAll(" ", "-")
		].join('-').toLowerCase()

		return id;
	}

	function handleSendFeedback(e:SubmitEvent) {
		e.preventDefault()

		if(!newComment.length) {
			return
		}

		try {
			alert(newComment)
			/*const { data } = await api.get(endpoint)
			const { name, picture } = data.results[0] as Record<string, any>

			const stamp = String(Date.now())
			const comment = {
				id: uuid(newComment, stamp),
				createdAt: stamp,
				content: newComment,
				author: {
					name: `${name.first} ${name.last}`,
					avatarUrl: picture.large
				}
			}

			setComments(prev => [...prev, comment])*/
		} catch(err:any) {
			alert(err)
		} finally {
			setNewComment("")
			return
		}
	}

	function handleCreateNewFeedback(e:InputEvent) {
		const { value } = e.target

		setNewComment(value)
	}

	function handleDeleteFeeback(id:string) {
		alert(id)
	}

	function handleOpenModal(id:string) {
		setIsModalOpen(true)
		setIdToDelete(id)
	}

	function handleCloseModal() {
		setIsModalOpen(false)
		setIdToDelete("")
	}

  return (
    <div className={styles["post__container"]}>
			<header>
				<img
					className={styles.avatar}
					src="https://github.com/maykbrito.png"
				/>
				<p>
					Mayk Brito
					<p>Educator @Rocketseat&copy;</p>
				</p>
				<time
					datetime="2022-06-10 21:00"
				>
					Almost 4h ago..
				</time>
			</header>
			<main className={styles["post__content"]}>
				<p>Fala devs, tudo beleza!?</p>
				<p>Aqui é o Mayk Brito passando pra dizer que a Maratona Explorer foi insana.&nbsp;&nbsp;🥳</p>
				<p>As versões da comunidade ficaram sensacionais!</p>
				<p>A gente se vê na próxima!&nbsp;&nbsp;🚀</p>
				<p>Abraço do Maykao!&nbsp;&nbsp;💜</p>
			</main>
			<footer className={styles["post__footer"]}>
				<strong>Leave you feedback</strong>
				<form onSubmit={handleSendFeedback}>
					<textarea
						placeholder="Place your feedback here.."
						maxLength={100}
						minLength={5}
						autocomplete="off"
						multiline={false}
						defaultValue={newComment}
						required
					/>
					<button
						type="submit"
						className={!newComment ? 'hidden' : ''}
					>
						Comment
					</button>
				</form>
				{comments.map(comment => (
					<Commentary
						key={comment.id}
						onDeleteRequested={
							()=>handleOpenModal(comment.id)
						}
					/>
				))}
			</footer>
			{isModalOpen && (
				<Modal
					idToDelete={idToDelete}
					onDeleteRequested={handleDeleteFeedback}
					onClose={handleCloseModal}
				/>
			)}
    </div>
  )
}

export default Post
