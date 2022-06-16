import React, { Component } from "react";

class GeneralRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { name, email, phone, address } = this.props.sendGeneralDataSECOND;

		return (
			<div className="flex-column-container flex-centered">
				<h1>{name ? name : "James Jameson"}</h1>
				<p>
					{phone ? phone : "+65 1222 3444"} &nbsp;|&nbsp;{" "}
					{email ? email : "ok@ok.com"}
				</p>
				<p>{address ? address : "Example Street 22"}</p>
			</div>
		);
	}
}

export default GeneralRender;
