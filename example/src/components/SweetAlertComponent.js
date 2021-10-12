import React, { Component } from 'react'
import { SweetAlertComponent } from 'btz-component'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {
            visibleDangerAlert: false,
            visibleSuccessAlert: false,
            visibleMessageAlert: false,
        }
    }

    render () {
        const {visibleDangerAlert, visibleSuccessAlert, visibleMessageAlert} = this.state 
        return (
            <div>
                <div>
                    <h2>Sweet Alert</h2>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <button onClick={() => this.setState({visibleDangerAlert: true})}>Danger Alert</button>
                        <button onClick={() => this.setState({visibleSuccessAlert: true})}>Success Alert</button>
                        <button onClick={() => this.setState({visibleMessageAlert: true})}>Message Alert</button>
                    </div>

                    {visibleDangerAlert && (
                        <SweetAlertComponent 
                            type={'danger'}
                            label={'Your Attention Is Required'} 
                            title={'YOU SHOULD READ THIS!'} 
                            description={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'} 
                            onClose={() => this.setState({visibleDangerAlert: false})} 
                            onOk={() => alert('OK, GOT IT!')}
                        />
                    )}

                    {visibleSuccessAlert && (
                        <SweetAlertComponent 
                            type={'success'}
                            label={'Congratulations'} 
                            title={'GOOD JOB!'} 
                            description={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'} 
                            onClose={() => this.setState({visibleSuccessAlert: false})} 
                            onOk={() => alert('OK, GOT IT!')}
                        />
                    )}

                    {visibleMessageAlert && (
                        <SweetAlertComponent 
                            type={'message'}
                            label={'Message'} 
                            title={'TITLE MUST BE IN HERE'} 
                            description={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'} 
                            onClose={() => this.setState({visibleMessageAlert: false})} 
                            onOk={() => alert('OK, GOT IT!')}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default App 