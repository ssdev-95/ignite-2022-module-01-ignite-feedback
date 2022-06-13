import { useState, useEffect, HTMLAttributes } from 'react'
import styles from './style.module.scss'

interface AvatarProps extends HTMLAttributes<HTMLImageElemet> {
	hasBorder?: boolean;
	noLoader?: boolean;
}

function Avatar({
	hasBorder=true, noLoader=false, ...props
}) {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(()=>{
		const timer = setTimeout(()=>setIsLoading(false), 3500)

		return ()=>{
			clearTimeout(timer)
		}
	},[])

  return (<>
    {(isLoading && !noLoader) ? (
			<div className={[
				styles.avatar,
				styles["spinner__wrapper"],
				!hasBorder ? styles.sm : ''
			].join(' ')}>
				<div />
			</div>
		) : (
				<img
				className={[
					styles.avatar,
					!hasBorder ? styles["no-border"] : '',
					!hasBorder ? styles.sm : ''
				].join(' ')}
				loading="lazy"
				{...props}
			/>
		)}
  </>)
}

export default Avatar
