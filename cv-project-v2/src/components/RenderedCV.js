import React, { Component } from "react";
import GeneralRender from "./GeneralRender";
import EducationRender from "./EducationRender";
import WorkRender from "./WorkRender";

class RenderedCV extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex-column-container" id="cv-div">
				<GeneralRender
					sendGeneralDataSECOND={this.props.sendGeneralDataFIRST}
				/>
				<EducationRender
					sendEducationDataSECOND={this.props.sendEducationDataFIRST}
					deleteEducation={this.props.deleteEducation}
					editEducation={this.props.editEducation}
				/>
				<WorkRender
					company="Google Inc."
					title="Web Developer"
					desc="Designed multiple websites"
					start="2021"
					end="Present"
				/>
			</div>
		);
	}
}

export default RenderedCV;
