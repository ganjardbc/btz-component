import React, {Component} from 'react'
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

class BeautifulCard extends Component {
	constructor (props) {
    	super(props)
    	this.state = {
			number: '',
			name: '',
			expiry: '',
			cvc: '',
			issuer: '',
			focused: '',
			formData: null,
		}
    }

    handleCallback = ({ issuer }, isValid) => {
		if (isValid) {
			this.setState({ issuer });
		}
	};

	handleInputFocus = ({ target }) => {
		this.setState({
			focused: target.name,
		});
	};

	handleInputChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const formData = [...e.target.elements]
		.filter(d => d.name)
		.reduce((acc, d) => {
			acc[d.name] = d.value;
			return acc;
		}, {});

		this.setState({ formData });
		this.form.reset();
	};

	render () {
        const { name, number, expiry, cvc, focused, issuer, formData } = this.state
		return (
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
				<div style={{width: '50%'}}>
                    <Card
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}
                    />
                </div>
                <div style={{width: '50%'}}>
                    <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                        <div style={{marginBottom: 15}}>
                            <input
								type="tel"
								name="number"
								placeholder="Card Number"
								pattern="[\d| ]{16,22}"
								required
								onChange={this.handleInputChange}
								onFocus={this.handleInputFocus}
							/>
							<small>E.g.: 49..., 51..., 36..., 37...</small>
                        </div>
                        <div style={{marginBottom: 15}}>
							<input
								type="text"
								name="name"
								placeholder="Name"
								required
								onChange={this.handleInputChange}
								onFocus={this.handleInputFocus}
							/>
						</div>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 15}}>
							<div>
								<input
									type="tel"
									name="expiry"
									placeholder="Valid Thru"
									pattern="\d\d/\d\d"
									required
									onChange={this.handleInputChange}
									onFocus={this.handleInputFocus}
								/>
							</div>
							<div>
								<input
									type="tel"
									name="cvc"
									placeholder="CVC"
									pattern="\d{3,4}"
									required
									onChange={this.handleInputChange}
									onFocus={this.handleInputFocus}
								/>
							</div>
						</div>
						
                        <input type="hidden" name="issuer" value={issuer} />

						<div>
							<button>PAY</button>
						</div>
                    </form>
                </div>
			</div>
		)
	}
}

export default BeautifulCard