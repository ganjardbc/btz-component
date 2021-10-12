import React, { Component } from 'react'
import LiveTextComponent from './components/LiveTextComponent'
import MoveableListComponent from './components/MoveableListComponent'
import TooltipComponent from './components/TooltipComponent'
import BeautifulCardComponent from './components/BeautifulCardComponent'
import CoolPopupComponent from './components/CoolPopupComponent'
import CalendarHeatMapComponent from './components/CalendarHeatMapComponent'
import FlippingCardComponent from './components/FlippingCardComponent'
import ImageLoaderComponent from './components/ImageLoaderComponent'
import SweetAlertComponent from './components/SweetAlertComponent'
import DatePickerComponent from './components/DatePickerComponent'
import DateDropDownComponent from './components/DateDropDownComponent'
import './index.css'

class App extends Component {
    constructor (props) {
    	super(props)
    	this.state = {
            activeIndex: 10,
            navbar: [
                {title: 'Live Text'},
                {title: 'Moveable List'},
                {title: 'Tooltip'},
                {title: 'Beautiful Card'},
                {title: 'Cool Popup'},
                {title: 'Calendar Heatmap'},
                {title: 'Flipping Card'},
                {title: 'Image Loader'},
                {title: 'Sweet Alert'},
                {title: 'Date Picker'},
                {title: 'Date Drop Down'},
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
                    {activeIndex === 7 && ( <ImageLoaderComponent /> )}
                    {activeIndex === 8 && ( <SweetAlertComponent /> )}
                    {activeIndex === 9 && ( <DatePickerComponent /> )}
                    {activeIndex === 10 && ( <DateDropDownComponent /> )}
                </div>
            </div>
        )
    }
}

export default App
