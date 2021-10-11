import React, {Component} from 'react'
import { Img } from 'react-image'
import styles from './styles/styles.css'

class ImageLoader extends Component {
	constructor (props) {
    	super(props)
    	this.state = {}
    }

	render () {
        const {image, title, description, overlayPosition, enableOverlay} = this.props
        let dfOverlayPosition = styles.overlay

        switch (overlayPosition) {
            case 'left':
                dfOverlayPosition = styles.overlay_left
                break;
            case 'right':
                dfOverlayPosition = styles.overlay_right
                break;
            case 'full':
                dfOverlayPosition = styles.overlay_full
                break;
            default:
                dfOverlayPosition = styles.overlay
                break;
        }

		return (
			<div className={styles.container}>
                <Img 
					src={image}
					className={styles.image}
					loader={
						<div className={styles.label}>
							<i className="fa fa-lg fa-circle-notch fa-spin" /> <span>Loading Image ..</span>
						</div>
					}
					unloader={
						<div className={styles.label}>
							<i className="fa fa-lg fa-circle-notch fa-spin" /> <span>Try Again</span>
						</div>
					} />
                {enableOverlay && (
                    <div className={dfOverlayPosition}>
                        <h1>{ title }</h1>
                        <p>{ description }</p>
                    </div>
                )}
			</div>
		)
	}
}

export default ImageLoader