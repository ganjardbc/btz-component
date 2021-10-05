import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'
import { Img } from 'react-image'
import styles from './styles/styles.css'

class LiveText extends Component {
	constructor (props) {
    	super(props)
    	this.state = {}
    }

	render () {
		const {image, bubble} = this.props
		return (
			<div className={styles.container}>
				<Img 
					src={image}
					className={styles.image}
					loader={
						<div className="icn">
							<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Loading Image</span>
						</div>
					}
					unloader={
						<div className="icn">
							<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Try Again</span>
						</div>
					} />
						
				{bubble && bubble.map((dt, i) => {
					let bgColor = styles.bubble_red

					switch (dt.color) {
						case 'red':
							bgColor = styles.bubble_red
							break
						case 'orange':
							bgColor = styles.bubble_orange
							break
						case 'green':
							bgColor = styles.bubble_green
							break
						case 'blue':
							bgColor = styles.bubble_blue
							break
						case 'grey':
							bgColor = styles.bubble_grey
							break
						default:
							bgColor = styles.bubble_red
							break
					}

					return (
						<div 
							key={i} 
							data-tip={dt.description}
							data-type="light" 
							data-border="true"
							className={bgColor} 
							style={{position: 'absolute', top: `${dt.x}%`, left: `${dt.y}%`, cursor: 'default'}}>
							{ dt.title }
						</div>
					)
				})}

				<ReactTooltip />
			</div>
		)
	}
}

export default LiveText