import Post from '../Post'
import styles from './style.module.scss'

const posts = [
	{
		id: 'nwjedujej1928ruejj2j1jq',
		author: {
			name: 'Mayk Brito',
			avatarUrl: 'https://github.com/maykbrito.png',
			role: 'Educator @Rocketseat&trade;'
		},
		createdAt: '2022-06-13 07:59',
		content: [
			{
				type: 'paragraph',
				text: 'A galera da comunidade é insana',
				id: 'Jqjdixhwjaii2jfie29292d',
				href: undefined
			}
		]
	}, {
		id: 'k2idn38a8I2n2r9s8h__7238',
		author: {
			name: 'Tio Yan',
			avatarUrl: 'https://github.com/yants95.png',
			role: 'Ademiro Discord @Rocketseat&trade;'
		},
		createdAt: '2022-06-12 19:59',
		content: [
			{
				type: 'link',
				text: 'Github',
				id: 'JwiduUw7s7g2__b&H2be88a2bb2',
				href: 'https://github.com/yants95/?tab=repositories'
			}
		]
	}
]

function Posts() {
  return (
    <div className={styles["posts__container"]}>
			{ posts.map(item => (
				<Post key={item.id} post={item} />
			)) }
    </div>
  )
}

export default Posts
