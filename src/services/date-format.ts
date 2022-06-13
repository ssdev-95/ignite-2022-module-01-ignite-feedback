import { formatDistance, subDays } from 'date-fns'

type IDate = string | Date;
type IType = 'comment' | 'post'

export function formatDate(time:Date, timeType:IType) {
	try {
		const preview = formatDistance(
			subDays(time, 3),
			new Date(),
			{ addSuffix: true }
		)

		return `${timeType==='post' ? '' : 'Almost '}${preview}.`
	} catch(err:any) {
		alert(err)
	}
}
