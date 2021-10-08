import React, { Component } from 'react'

import { TooltipComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {
        return (
            <div>
                <div style={{ width: 400, height: 200 }}>
                    <h2>Tooltip</h2>
                    <button 
                        data-scroll-hide="true"
                        data-tip=""
                        data-for="custom-tooltip">
                        Open Tooltip
                    </button>
                    <TooltipComponent 
                        clickable={true}
                        border={true}
                        type="light"
                        place="bottom" 
                        id="custom-tooltip"
                        content={(
                            <h1>CUSTOM TOOLTIP</h1>
                        )} />
                </div>
            </div>
        )
    }
}

export default App
