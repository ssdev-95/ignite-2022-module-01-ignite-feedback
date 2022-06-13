import { HTMLAttributes } from 'react'

import styles from './style.module.scss'

interface AvatarProps extends HTMLAttributes<HTMLImageElemet> {
	hasBorder?: boolean;
}

function Avatar({ hasBorder=true, ...props}) {
  return (
    <img
			className={[
				styles.avatar,
				!hasBorder ? styles["no-border"] : ''
			].join(' ')}
			{...props}
		/>
  )
}

export default Avatar
