import React, { Component } from "react";
import WorkFormFill from "./WorkFormFill";
import WorkFormEdit from "./WorkFormEdit";

class WorkForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.editMode) {
			return (
				<div className="form-container">
					<fieldset>
						<legend>Work Experience</legend>
						<WorkFormEdit
							editObj={this.props.editObj}
							confirmEditWork={this.props.confirmEditWork}
						/>
					</fieldset>
				</div>
			);
		}
		return (
			<div className="form-container">
				<fieldset>
					<legend>Work Experience</legend>
					<WorkFormFill handleWork={this.props.handleWork} />
				</fieldset>
			</div>
		);
	}
}

export default WorkForm;
