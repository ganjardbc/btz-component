import React, { Component } from 'react'

import { FlippingCardComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {

        return (
            <div>
                <h2>Flipping Card</h2>
                <div style={{width: 600}}>
                    <FlippingCardComponent 
                        frontLabel={'SAMPLE FRONT'} 
                        backLabel={'SAMPLE BACK'} 
                        frontButtonLabel={'TO BACK'} 
                        backLabelButton={'TO FRONT'}
                        frontContent={(
                            <div style={{textAlign: 'center', padding: 15}}>
                                <h3>Content 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        )} 
                        backContent={(
                            <div style={{textAlign: 'center', padding: 15}}>
                                <h3>Content 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default App