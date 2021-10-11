import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/styles.css'

class App extends Component {
	constructor (props) {
    	super(props)
    	this.state = {}
    }

	render () {
		const {label, title, description, onClose, onOk} = this.props 
		return (
			<div className={styles.app_popup}>
                <div className={styles.app_post_top}>

					<div className={styles.app_popup_content}>

						<div style={{ padding: 15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
							<div>
								<div className={styles.app_popup_label}>
									{ label ? label : 'Danger' }
								</div>
							</div>
							<div>
								<button 
									className={styles.app_button} 
									onClick={() => onClose()}>
									<FontAwesomeIcon icon={faTimes} />
								</button>
							</div>
						</div>

						<div style={{ padding: 15 }}>
							<div style={{ color: '#fff', fontSize: 42, textAlign: 'center', paddingTop: 30, paddingBottom: 15 }}>
								<FontAwesomeIcon icon={faBell} />
							</div>
						</div>

						<div style={{ padding: 15, textAlign: 'center' }}>
							<h1 style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', textTransform: 'uppercase' }}>
								{ title }
							</h1>
							<p style={{ fontSize: 16, color: '#fff' }}>
								{ description }
							</p>
						</div>

						<div style={{ padding: 15 }}>
							<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
								<button 
									onClick={() => onOk()}
									className={styles.app_button_ok}>
									OK, GOT IT!
								</button>
								<button 
									onClick={() => onClose()}
									className={styles.app_button_cancel}>
									CLOSE
								</button>
							</div>
						</div>

					</div>

				</div>
			</div>
		)
	}
}

export default App