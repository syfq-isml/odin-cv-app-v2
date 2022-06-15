import React, { Component } from "react";

class GeneralForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			phone: "",
			address: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.sendGeneralData = this.sendGeneralData.bind(this);
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState(
			{
				[e.target.dataset.item]: e.target.value,
			},
			() => this.sendGeneralData()
		);
	}

	sendGeneralData() {
		this.props.getGeneralData(this.state);
	}

	render() {
		return (
			<div className="form-container">
				<fieldset>
					<legend>General Information</legend>
					<label htmlFor="full-name">Full Name</label>
					<input
						id="full-name"
						value={this.state.name}
						data-item="name"
						onChange={this.handleChange}
					></input>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						value={this.state.email}
						data-item="email"
						onChange={this.handleChange}
					></input>
					<label htmlFor="phone-number">Phone Number</label>
					<input
						id="phone-number"
						value={this.state.phone}
						data-item="phone"
						onChange={this.handleChange}
					></input>
					<label htmlFor="address">Address</label>
					<input
						id="address"
						value={this.state.address}
						data-item="address"
						onChange={this.handleChange}
					></input>
				</fieldset>
			</div>
		);
	}
}

export default GeneralForm;
