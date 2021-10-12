import React, {Component} from 'react'
import { DateRangePicker } from 'react-date-range'
import M from 'moment'
import styles from './styles/styles.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

class DatePicker extends Component {
	constructor (props) {
		super(props)
		this.state = {
			dateRangePicker: {
				selection: {
					startDate: new Date(),
					endDate: new Date(),
					key: 'selection',
					color: '#2ecc71'
				},
				compare: {
					startDate: new Date(),
					endDate: new Date(),
					key: 'compare',
				},
		  	},
		}
	}

	handleRangeChange = (which, payload) => {
		this.setState({
			[which]: {
				...this.state[which],
				...payload,
			},
		})
		this.props.onChange(payload)
	}

	render () {
		const {direction, months, formatFirstDate, formatEndDate} = this.props
		return (
			<div>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
					<input
						type="text"
						className={styles.txt}
						style={{width: 250, marginRight: '15px'}}
						readOnly
						value={ M(this.state.dateRangePicker.selection.startDate).format(formatFirstDate ? formatFirstDate : 'dddd, MMMM YYYY') }
					/>
					<input
						type="text"
						className={styles.txt}
						style={{width: 250}}
						readOnly
						value={ M(this.state.dateRangePicker.selection.endDate).format(formatEndDate ? formatEndDate : 'dddd, MMMM YYYY') }
					/>
				</div>

				<DateRangePicker
					onChange={this.handleRangeChange.bind(this, 'dateRangePicker')}
					ranges={[this.state.dateRangePicker.selection]}
					months={months ? months : 2}
					direction={direction ? direction : "horizontal"}
					showSelectionPreview={true}
					moveRangeOnFirstSelection={false}
				/>
			</div>
		)
	}
}

export default DatePicker