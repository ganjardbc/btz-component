import React, { Component } from 'react'

import { CalendarHeatMapComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {
        return (
            <div>
                <div>
                    <h2>Calendar HeatMap</h2>
                    <CalendarHeatMapComponent 
                        startDate={new Date('2019-01-01')}
                        endDate={new Date('2019-12-31')}
                        values={[
                            { date: '2019-01-01' },
                            { date: '2019-01-10' },
                            { date: '2019-01-20' },
                            { date: '2019-01-22' },
                        ]}
                    />
                </div>
            </div>
        )
    }
}

export default App
