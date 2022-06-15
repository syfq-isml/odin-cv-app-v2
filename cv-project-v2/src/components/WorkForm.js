import React, { Component } from "react";

class WorkForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="form-container">
				<fieldset>
					<legend>Work Experience</legend>
					<label htmlFor="full-name">Company Name</label>
					<input id="full-name"></input>
					<label htmlFor="email">Position Title</label>
					<input id="email"></input>
					<label htmlFor="phone-number">Duration Of Work</label>
					<div className="flex-row-container">
						<input placeholder="Start Date"></input>
						<p> - </p>
						<input placeholder="End Date"></input>
					</div>
					<label>Role Responsibilities</label>
					<textarea></textarea>
				</fieldset>
			</div>
		);
	}
}

export default WorkForm;
