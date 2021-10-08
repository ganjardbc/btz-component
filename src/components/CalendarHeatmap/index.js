import React, {Component} from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'
import 'react-calendar-heatmap/dist/styles.css'

class HeatMap extends Component {
	constructor (props) {
    	super(props)
    	this.state = {}
    }

	render () {
        const {startDate, endDate, values} = this.props

		return (
			<div>
                <CalendarHeatmap
					startDate={startDate}
					endDate={endDate}
					values={values}
                    tooltipDataAttrs={value => {
                        if (value) {
                            return {
                                'data-tip': `${value.date}`,
                            }
                        }
					}}
                    onClick={value => {
                        if (value) {
                            alert(`Clicked on value with count: ${value.date}`)
                        }
                    }}
				/>

                <ReactTooltip />
			</div>
		)
	}
}

export default HeatMap