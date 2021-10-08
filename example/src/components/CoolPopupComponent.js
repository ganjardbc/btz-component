import React, { Component } from 'react'

import { CoolPopupComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {
            coolPopup: false,
            activeIndex: 0
        }
    }

    render () {
        const {coolPopup, activeIndex} = this.state 
        let contentCoolPopup = ''

        switch (activeIndex) {
            case 0:
                contentCoolPopup = (
                    <div style={{textAlign: 'center'}}>
                        <h3>Content 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                )
                break;
            case 1:
                contentCoolPopup = (
                    <div style={{textAlign: 'center'}}>
                        <h3>Content 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                )
                break;
            case 3:
                contentCoolPopup = (
                    <div style={{textAlign: 'center'}}>
                        <h3>Content 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                )
                break;
            default:
                contentCoolPopup = (
                    <div style={{textAlign: 'center'}}>
                        <h3>Content 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                )
                break;
        }

        return (
            <div>                
                <div style={{ width: 400 }}>
                    <h2>Cool Popup</h2>
                    <button onClick={() => this.setState({coolPopup: true})}>
                        Open Cool Popup 
                    </button>
                    {coolPopup && (
                        <CoolPopupComponent 
                            title={'Run On Your Device'} 
                            navigator={[
                                {title: 'Device ID'},
                                {title: 'Account'},
                                {title: 'QR Code'}
                            ]}
                            onClose={() => this.setState({coolPopup: false})}
                            onChangeNavigator={(index) => this.setState({activeIndex: index})}
                            content={contentCoolPopup} 
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default App
