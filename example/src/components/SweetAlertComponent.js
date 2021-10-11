import React, { Component } from 'react'
import { SweetAlertComponent } from 'btz-component'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {
            visibleDangerAlert: false 
        }
    }

    render () {
        const {visibleDangerAlert} = this.state 
        return (
            <div>
                <div>
                    <h2>Sweet Alert</h2>
                    <button onClick={() => this.setState({visibleDangerAlert: true})}>Open Danger Alert</button>

                    {visibleDangerAlert && (
                        <SweetAlertComponent 
                            label={'Your Attention Is Required'} 
                            title={'YOU SHOULD READ THIS!'} 
                            description={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'} 
                            onClose={() => this.setState({visibleDangerAlert: false})} 
                            onOk={() => alert('OK, GOT IT!')}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default App 