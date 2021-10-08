import React, { Component } from 'react'

import { LiveTextComponent } from 'btz-component'
import 'btz-component/dist/index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {}
    }

    render () {

        return (
            <div>
                <div style={{width: 400, height: 400}}>
                    <h2>Live Text</h2>
                    <LiveTextComponent 
                        image={'https://lelogama.go-jek.com/prime/upload/image/come-be-a-gojek-driver-partner.svg'} 
                        bubble={[
                            {title: '12', description: 'lorem ipsum', x: 15, y: 20, color: 'grey'},
                            {title: '19', description: 'lorem ipsum', x: 10, y: 67, color: 'orange'},
                            {title: '55', description: 'lorem ipsum', x: 32, y: 80, color: 'red'},
                            {title: '24', description: 'lorem ipsum', x: 60, y: 80, color: 'green'},
                            {title: '37', description: 'lorem ipsum', x: 43, y: 10, color: 'red'},
                            {title: '22', description: 'lorem ipsum', x: 45, y: 40, color: 'orange'},
                            {title: '80', description: 'lorem ipsum', x: 80, y: 27, color: 'blue'}
                        ]}
                    />
                </div>
            </div>
        )
    }
}

export default App
