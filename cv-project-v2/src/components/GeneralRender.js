import React, { Component } from "react";

class GeneralRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { name, email, phone, address } = this.props.sendGeneralDataSECOND;
		return (
			<div className="flex-column-container flex-centered">
				<h1>{name}</h1>
				<p>
					{phone} &nbsp;|&nbsp; {email}
				</p>
				<p>{address}</p>
			</div>
		);
	}
}

export default GeneralRender;
