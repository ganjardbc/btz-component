import React, { Component } from 'react'
import LiveTextComponent from './components/LiveTextComponent'
import MoveableListComponent from './components/MoveableListComponent'
import TooltipComponent from './components/TooltipComponent'
import BeautifulCardComponent from './components/BeautifulCardComponent'
import CoolPopupComponent from './components/CoolPopupComponent'
import CalendarHeatMapComponent from './components/CalendarHeatMapComponent'
import FlippingCardComponent from './components/FlippingCardComponent'
import './index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {
            activeIndex: 6,
            navbar: [
                {title: 'Live Text'},
                {title: 'Moveable List'},
                {title: 'Tooltip'},
                {title: 'Beautiful Card'},
                {title: 'Cool Popup'},
                {title: 'Calendar Heatmap'},
                {title: 'Flipping Card'},
            ]
        }
    }

    render () {
        const {navbar, activeIndex} = this.state 
        return (
            <div className="example-app">
                <div className="navbar">
                    <h1>Navbar</h1>
                    <ul>
                        {navbar && navbar.map((dt, i) => {
                            return (
                                <li 
                                    key={i} 
                                    className={i === activeIndex ? 'active' : ''}
                                    onClick={() => this.setState({activeIndex: i})}>
                                    { dt.title }
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="content">
                    {activeIndex === 0 && ( <LiveTextComponent /> )}
                    {activeIndex === 1 && ( <MoveableListComponent /> )}
                    {activeIndex === 2 && ( <TooltipComponent /> )}
                    {activeIndex === 3 && ( <BeautifulCardComponent /> )}
                    {activeIndex === 4 && ( <CoolPopupComponent /> )}
                    {activeIndex === 5 && ( <CalendarHeatMapComponent /> )}
                    {activeIndex === 6 && ( <FlippingCardComponent /> )}
                </div>
            </div>
        )
    }
}

export default App
