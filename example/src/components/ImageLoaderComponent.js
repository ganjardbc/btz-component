import React, { Component } from 'react'
import { ImageLoaderComponent } from 'btz-component'

class App extends Component {
    render () {
        return (
            <div>
                <h2>Image Loader</h2>
                <div style={{ width: 400, height: 400 }}>
                    <ImageLoaderComponent 
                        image={"https://pinchofyum.com/wp-content/uploads/Cashew-Coffee-Recipe.jpg"}
                        title={'Lorem Ipsum'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        overlayPosition={'bottom'}
                        enableOverlay={true}
                    />
                </div>
            </div>
        )
    }
}

export default App 