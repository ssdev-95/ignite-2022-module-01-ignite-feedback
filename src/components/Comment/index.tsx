import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from '../Avatar'
import { IComment } from '../Post'
import { formatDate } from '../../services/date-format'
import Logo from '../../assets/logo.svg'
import styles from './style.module.scss'

interface CommentProps {
	onDeleteRequested: ()=>void;
	comment: IComment;
}

function Commentary({
	onDeleteRequested, comment
}:CommentProps) {
	const [upvotes, setUpvotes] = useState(0)
	const preview = formatDate(
		new Date(comment.createdAt),
		'comment'
	)

	function likeComment() {
		setUpvotes(prev => prev + 1)
	}

  return (
    <div className={styles["comment__container"]}>
			<Avatar
				hasBorder={false}
				src={comment.author.avatarUrl ?? Logo}
			/>
			<div
				className={styles["comment__content--wrapper"]}
			>
				<div>
					<strong>
						{comment.author.name}
						<time dateTime={comment.createdAt.toISOString()}>
							{preview}
						</time>
					</strong>
					<p>{comment.content}</p>
					<button onClick={onDeleteRequested}>
						<Trash size={20} />
					</button>
				</div>
				<button onClick={likeComment}>
					<ThumbsUp size={16} />
					Upvote
					<span>{upvotes}</span>
				</button>
			</div>
    </div>
  )
}

export default Commentary
