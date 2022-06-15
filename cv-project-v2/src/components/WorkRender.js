import React, { Component } from "react";

class WorkRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex-column-container">
				<h1 className="cv-heading">Work Experience</h1>
				<div className="flex-row-container fl-jcsb cv-content">
					<div>
						<h2>{this.props.company}</h2>
						<p className="role-heading">{this.props.title}</p>
						<p>{this.props.desc}</p>
					</div>
					<div>
						<p>
							{this.props.start} - {this.props.end}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default WorkRender;
