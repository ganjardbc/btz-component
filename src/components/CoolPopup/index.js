import React, {Component} from 'react'
import styles from './styles/styles.css'

class CoolPopup extends Component {
	constructor (props) {
    	super(props)
    	this.state = {
            activeIndex: 0
        }
    }

	render () {
        const {activeIndex} = this.state 
        const {title, content, onClose, onChangeNavigator, navigator} = this.props
		return (
			<div className={styles.app_popup}>
                <div className={styles.app_popup_content}>
                    <button className={styles.app_popup_btn_close} onClick={() => onClose()}>
                        x 
                    </button>
                    <div>
                        <div className={styles.app_popup_header}>
							<div className={styles.app_popup_label}>
								{ title ? title : 'Popup' }
							</div>
						</div>
                        <div>
                            {navigator && (
                                <div style={{padding: 15}}>
                                    <ul className={styles.app_navigator}>
                                        {navigator && navigator.map((dt, i) => {
                                            return (
                                                <li 
                                                    key={i} 
                                                    style={{
                                                        backgroundColor: activeIndex === i ? '#000' : '',
                                                        color: activeIndex === i ? '#fff' : '',
                                                    }}
                                                    onClick={() => this.setState({activeIndex: i}, onChangeNavigator(i))}>
                                                    { dt.title }
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )}
                            <div style={{padding: 15, paddingTop: 0}}>
                                { content }
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		)
	}
}

export default CoolPopup