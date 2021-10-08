import React, { Component } from 'react'

import { BeautifulCardComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {
        return (
            <div>
                <div style={{ width: '100%' }}>
                    <h2>Beautiful Card</h2>
                    <BeautifulCardComponent />
                </div>
            </div>
        )
    }
}

export default App
