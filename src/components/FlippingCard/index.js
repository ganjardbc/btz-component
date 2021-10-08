import React, { Component } from 'react'
import { Img } from 'react-image'
import styles from './styles/index.css'

class FlippingCard extends Component {
    
    constructor () {
        super()
        this.state = {
            cardFlipping: false  
        }
    }

    opCardFlipping = () => {
        this.setState({
            cardFlipping: !this.state.cardFlipping 
        })
    }

    render() {
        const {cardFlipping} = this.state 
        const {frontLabel, backLabel, frontButtonLabel, backLabelButton, frontContent, backContent} = this.props
        return(
            <div>
                <div className={styles.card_flipping}>
                    <div className={cardFlipping ? styles.card_flipping_active_card_body : styles.card_body}>
                        <div className={cardFlipping ? styles.card_flipping_active_side_front : styles.side_front}>
                            <div style={innerStyles.header}>
                                <div style={innerStyles.containerTitle}>
                                    <div style={innerStyles.title}>{ frontLabel ? frontLabel : 'FRONT' }</div>
                                </div>
                                <button className={styles.card_button} onClick={() => this.opCardFlipping()}>{frontButtonLabel ? frontButtonLabel : 'To Back'}</button>
                            </div>
                            <div style={innerStyles.content}>
                                { frontContent ? frontContent : '' }
                            </div>
                        </div>
                        <div className={cardFlipping ? styles.card_flipping_active_side_back : styles.side_back}>
                            <div style={innerStyles.header}>
                                <div style={innerStyles.containerTitle}>
                                    <div style={innerStyles.title}>{backLabel ? backLabel : 'BACK'}</div>
                                </div>
                                <button className={styles.card_button} onClick={() => this.opCardFlipping()}>{backLabelButton ? backLabelButton : 'To Front'}</button>
                            </div>
                            <div style={innerStyles.content}>
                                { backContent ? backContent : '' }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const innerStyles = {
    header: {
        position: 'relative',
        padding: 15,
        width: 'calc(100% - 30px)',
        borderBottom: '1px solid rgba(0,0,0,.1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555'
    },
    containerTitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        overflowY: 'auto'
    }
}

export default FlippingCard 