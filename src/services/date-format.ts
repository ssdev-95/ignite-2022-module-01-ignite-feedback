import { formatDistance, subDays } from 'date-fns'

type IDate = string | Date;
type IType = 'comment' | 'post'

export function formatDate(time:IDate, timeType:IType) {
	try {
		const date = typeof time === Date ? time : new Date(time)
		const preview = formatDistance(
			subDays(date, 3),
			new Date(),
			{ addSuffix: true }
		)

		return `${timeType==='post' ? '' : 'Almost '}${preview}.`
	} catch(err:any) {
		alert(err)
	}
}
