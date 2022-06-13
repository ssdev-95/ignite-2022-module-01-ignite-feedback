import { useState, ChangeEvent, FormEvent } from 'react'
import Commentary from '../Comment'
import Modal from '../Modal'
import Avatar from '../Avatar'
import { api } from '../../services/api'
import { formatDate } from '../../services/date-format'

import styles from './style.module.scss'

type SubmitEvent = FormEvent<HTMLFormElement>;
type InputEvent = ChangeEvent<HTMLTextAreaElement>;

type IPostContent = {
	type: 'paragraph' | 'link';
	text: string;
	id: string;
	href: string;
}

export interface IPost {
	id: string;
	author: {
		name: string;
		avatarUrl: string;
		role: string;
	}
	createdAt:string;
	content: IPostContent[];
}

export type IComment = {
	id: string,
	createdAt: Date,
	author: {
		avatarUrl: string,
		name:string
	},
	content: string
}

type PostProps = {
	post: IPost;
}

const endpoint = '/api/?results=1&inc=name,picture'
function Post({ post }: PostProps) {
	const [comments, setComments] = useState<IComment[]>([])
	const [newComment, setNewComment] = useState("")
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [idToDelete, setIdToDelete] = useState("")

	const preview = formatDate(
		new Date(post.createdAt),
		'post'
	)

	function uuid(text:string, timestamp:string) {
		const id = [
			timestamp,
			text.replaceAll(" ", "-")
		].join('-').toLowerCase()

		return id;
	}

	async function handleSendFeedback(e:SubmitEvent) {
		e.preventDefault()

		if(!newComment.length) {
			return
		}

		try {
			const { data } = await api.get(endpoint)
			const { name, picture } = data.results[0] as Record<string, any>

			const stamp = new Date()
			const comment = {
				id: uuid(newComment, stamp.toISOString()),
				createdAt: stamp,
				content: newComment,
				author: {
					name: [name.first, name.last].join(' '),
					avatarUrl: picture.large
				}
			}

			setComments(prev => [...prev, comment])
		} catch(err:any) {
			if (err) console.error(err)
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
		const updated = comments.filter(item => item.id!==id)
		setComments(updated)
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
				<Avatar src={post.author.avatarUrl} />
				<strong>
					{post.author.name}
					<p>{post.author.role}</p>
				</strong>
				<time
					dateTime={post.createdAt}
				>
					{preview}
				</time>
			</header>
			<main className={styles["post__content"]}>
				{post.content.map((item: IPostContent)=> {
					if(item.type === 'link') {
						return (
							<a
								key={item.id}
								href={item.href}
								target="__blank"
							>
								{item.text}
							</a>
						)
					} else {				
						return (
							<p key={item.id}>{item.text}</p>
						)
					}
				})}
			</main>
			<footer className={styles["post__footer"]}>
				<strong>Leave you feedback</strong>
				<form onSubmit={handleSendFeedback}>
					<textarea
						placeholder="Place your feedback here.."
						maxLength={100}
						minLength={5}
						autoComplete="off"
						value={newComment}
						onChange={handleCreateNewFeedback}
						required
					/>
					<button
						type="submit"
						className={!newComment ? 'hidden' : ''}
					>
						Comment
					</button>
				</form>
				{comments.map((comment: IComment) => (
					<Commentary
						key={comment.id}
						comment={comment}
						onDeleteRequested={
							()=>handleOpenModal(comment.id)
						}
					/>
				))}
			</footer>
			{isModalOpen && (
				<Modal
					idToDelete={idToDelete}
					onDeleteRequested={handleDeleteFeeback}
					onClose={handleCloseModal}
				/>
			)}
    </div>
  )
}

export default Post
