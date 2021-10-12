import React, { Component } from 'react'

import { DateDropDownComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {
        return (
            <div>
                <div style={{ width: 400 }}>
                    <h2>Date Drop Down</h2>
                    <DateDropDownComponent 
                        formatDate={'dddd, MMMM YYYY'} 
                        onChange={(data) => {
                            console.log(data);
                        }} 
                    />
                </div>
            </div>
        )
    }
}

export default App
