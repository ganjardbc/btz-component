import React, {Component} from 'react'
import DNDContainer from './components/DNDContainer'

class DNDComponent extends Component {
	constructor (props) {
    	super(props)
    	this.state = {
        	data: props.data ? props.data : []
    	}
    }

	render () {
		const {data} = this.state 
		return (
			<div>
				<DNDContainer data={data} />
			</div>
		)
	}
}

export default DNDComponent