import React, { Component } from "react";

import uniqid from "uniqid";
import EducationFormFill from "./EducationFormFill";
import EducationFormEdit from "./EducationFormEdit";

class EducationForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
	}

	render() {
		if (this.props.editMode) {
			return (
				<div className="form-container">
					<fieldset>
						<legend>Education</legend>
						<EducationFormEdit
							handleEducation={this.props.handleEducation}
							editObj={this.props.editObj}
							confirmEditEducation={this.props.confirmEditEducation}
						/>
					</fieldset>
				</div>
			);
		}
		return (
			<div className="form-container">
				<fieldset>
					<legend>Education</legend>
					<EducationFormFill handleEducation={this.props.handleEducation} />
				</fieldset>
			</div>
		);
	}
}

export default EducationForm;
