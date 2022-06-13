import Post from '../Post'
import styles from './style.module.scss'

const posts = [
	1,
	2,
	3
]

function Posts() {
  return (
    <div className={styles["posts__container"]}>
			{ posts.map(item => (
				<Post key={item} />
			)) }
    </div>
  )
}

export default Posts
