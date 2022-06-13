import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import Post from '../Post'
import styles from './style.module.scss'

function Commentary() {
	const [likes, setLikes] = useState(0)

	function likeComment() {
		setLikes(prev => prev + 1)
	}

  return (
    <div className={styles["comment__container"]}>
			<img
				className={styles.avatar}
				src="https://github.com/filipedeschamps.png"
			/>
			<div
				className={styles["comment__content--wrapper"]}
			>
				<div>
					<strong>
						Saromon
						<p>Almost 2h ago..</p>
					</strong>
					<p>Salame é bom..</p>
					<button>
						<Trash size={20} />
					</button>
				</div>
				<button onClick={likeComment}>
					<ThumbsUp size={16} />
					Upvote
					<span>{likes}</span>
				</button>
			</div>
    </div>
  )
}

export default Commentary
