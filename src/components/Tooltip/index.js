import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

class Tooltip extends Component {
	constructor (props) {
    	super(props)
    	this.state = {}
    }

	render () {
		const {content, clickable, border, type, place, id} = this.props
		return (
			<div>
				<ReactTooltip
					clickable={clickable ? clickable : false}
					border={border ? border : false}
					type={type ? type : "light"}
					place={place ? place : "bottom"}
					id={id ? id : "custom-tooltip"}
				>
					{ content }
				</ReactTooltip>
			</div>
		)
	}
}

export default Tooltip