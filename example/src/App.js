import React from 'react'

import { LiveTextComponent, MoveableListComponent, TooltipComponent, BeautifulCardComponent } from 'btz-component'
import 'btz-component/dist/index.css'

const App = () => {
    return (
        <div style={{padding: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
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

            <div style={{ width: 700 }}>
                <h2>Beautiful Card</h2>
                <BeautifulCardComponent />
            </div>
        </div>
    )
}

export default App
