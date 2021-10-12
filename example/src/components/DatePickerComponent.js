import React, { Component } from 'react'

import { DatePickerComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {
        return (
            <div>
                <h2>Date Picker</h2>
                <DatePickerComponent 
                    formatFirstDate={'dddd, MMMM YYYY'} 
                    formatEndDate={'dddd, MMMM YYYY'}
                    direction={'horizontal'} 
                    months={2}
                    onChange={(data) => {
                        console.log(data);
                    }} 
                />
            </div>
        )
    }
}

export default App
