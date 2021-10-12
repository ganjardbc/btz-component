import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBell, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/styles.css'

class App extends Component {
	constructor (props) {
    	super(props)
    	this.state = {}
    }

	render () {
		const {type, label, title, description, onClose, onOk} = this.props 
		let txtColor = '#555'
		let txtDescColor = '#888'
		let bgColor = styles.app_popup_content_success
		let btnColor = '#529ecc'
		let btnTxtColor = '#fff'
		let labelIcon = faCheckCircle
		let labelIconColor = '#529ecc'

		if (type === 'success') {
			txtColor = '#555'
			txtDescColor = '#888'
			bgColor = styles.app_popup_content_success
			btnColor = '#529ecc'
			btnTxtColor = '#fff'
			labelIcon = faCheckCircle
			labelIconColor = '#2ecc71'
		} 
		if (type === 'message') {
			txtColor = '#555'
			txtDescColor = '#888'
			bgColor = styles.app_popup_content_success
			btnColor = '#529ecc'
			btnTxtColor = '#fff'
			labelIcon = faInfoCircle
			labelIconColor = '#2ecc71'
		} 
		if (type === 'danger') {
			txtColor = '#fff'
			txtDescColor = '#fff'
			bgColor = styles.app_popup_content
			btnColor = '#fff'
			btnTxtColor = '#555'
			labelIcon = faBell
			labelIconColor = '#fff'
		}

		return (
			<div className={styles.app_popup}>
                <div className={styles.app_post_top}>

					<div className={bgColor}>

						<div style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<div>
								<div className={styles.app_popup_label} style={{ color: txtColor }}>
									{ label ? label : 'Danger' }
								</div>
							</div>
							<div>
								<button 
									className={styles.app_button} 
									style={{ color: txtColor }}
									onClick={() => onClose()}>
									<FontAwesomeIcon icon={faTimes} />
								</button>
							</div>
						</div>

						{type !== 'message' && (
							<div style={{ padding: 15 }}>
								<div style={{ color: labelIconColor, fontSize: 50, textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
									<FontAwesomeIcon icon={labelIcon} />
								</div>
							</div>
						)}

						<div style={{ padding: 15, textAlign: type === 'message' ? 'left' : 'center' }}>
							<h1 style={{ fontSize: 16, fontWeight: 'bold', color: txtColor, textTransform: 'uppercase' }}>
								{ title }
							</h1>
							<p style={{ fontSize: 16, color: txtDescColor }}>
								{ description }
							</p>
						</div>

						<div style={{ padding: 15 }}>
							{type === 'success' ? (
								<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
									<button 
										onClick={() => onOk()}
										className={styles.app_button_ok}
										style={{ backgroundColor: btnColor, color: btnTxtColor }}>
										OK, GOT IT!
									</button>
								</div>
							) : (
								<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
									<button 
										onClick={() => onOk()}
										className={styles.app_button_ok}
										style={{ backgroundColor: btnColor, color: btnTxtColor }}>
										OK, GOT IT!
									</button>
									<button 
										onClick={() => onClose()}
										className={styles.app_button_cancel}
										style={{ color: txtColor }}>
										CLOSE
									</button>
								</div>
							)}
						</div>

					</div>

				</div>
			</div>
		)
	}
}

export default App