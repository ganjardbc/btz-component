import React, { Component } from 'react'
import { Calendar } from 'react-date-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import M from 'moment'
import styles from './styles/styles.css'

class DateDropDown extends Component {
	constructor (props) {
    	super(props)
    	this.state = {
			datePicker: new Date(),
			placeDate: false 
		}
    }

	handleSelect = (range) => {
		this.setState({
		  	datePicker: range
		})
		this.props.onChange(range)
	}

	handleClickOutside(element) {
		const outsideclickListener = event => {
		  	if (!element.contains(event.target)) {
				removeClickListener()
		  	}
		}
	
		const removeClickListener = () => {
		  	this.setState({placeDate: false})
		  	document.removeEventListener('click', outsideclickListener)
		}
	
		document.addEventListener('click', outsideclickListener)
	}

	opDatePicker = () => {
		var element = document.getElementById('date-picker')
		this.setState({placeDate: true})
		this.handleClickOutside(element)
	}

	render () {
		const {placeDate, datePicker} = this.state 
		const {formatDate} = this.props
		return (
			<div className={styles.date_picker} id={'date-picker'}>
                <div className={styles.double}>
					<input
						type="text"
						className={styles.input}
						readOnly
						value={M(datePicker).format(formatDate ? formatDate : 'dddd, MMMM YYYY')}
						placeholder={'dd/mm/yyyy'}
					/>
					<button 
						type="button" 
						className={styles.btn}
						onClick={() => this.opDatePicker()}>
						<FontAwesomeIcon icon={faCalendarAlt} />
					</button>
				</div>

				{placeDate && (
					<div className={styles.content}>
						<Calendar 
							date={ datePicker } 
							onChange={ this.handleSelect }
							color="#2ecc71" />
					</div>
				)}

			</div>
		)
	}
}

export default DateDropDown