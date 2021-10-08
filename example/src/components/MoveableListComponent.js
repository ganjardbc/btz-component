import React, { Component } from 'react'

import { MoveableListComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {
        return (
            <div>
                <div style={{width: 400}}>
                    <h2>Moveable List</h2>
                    <MoveableListComponent data={[
                        {
                            id: 1,
                            content: 'Write a cool JS library',
                        },
                        {
                            id: 2,
                            content: 'Make it generic enough',
                        },
                        {
                            id: 3,
                            content: 'Write README',
                        },
                        {
                            id: 4,
                            content: 'Create some examples',
                        },
                        {
                            id: 5,
                            content: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
                        },
                        {
                            id: 6,
                            content: '???',
                        },
                        {
                            id: 7,
                            content: 'PROFIT',
                        },
                        {
                            id: 8,
                            content: 'AS IS AS',
                        },
                    ]} />
                </div>
            </div>
        )
    }
}

export default App
