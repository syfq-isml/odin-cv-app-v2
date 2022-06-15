import React, { Component } from "react";

import uniqid from "uniqid";

class EducationRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex-column-container">
				<h1 className="cv-heading">Education</h1>
				{this.props.sendEducationDataSECOND.map((data, i) => {
					return (
						<div
							className="flex-row-container fl-jcsb cv-content"
							key={uniqid()}
						>
							<div>
								<h2>{data.name}</h2>
								<p>{data.course}</p>
								<p>{data.achievements}</p>
							</div>
							<div>
								<p>
									{data.start} - {data.end}
								</p>
								<button
									data-id={data.id}
									data-index={i}
									onClick={this.props.deleteEducation}
								>
									Delete
								</button>
								<button
									data-id={data.id}
									data-index={i}
									onClick={this.props.editEducation}
								>
									Edit
								</button>
							</div>
						</div>
					);
				})}

				{/* <div className="flex-row-container fl-jcsb cv-content">
					<div>
						<h2>{this.props.institution}</h2>
						<p>{this.props.course}</p>
						<p>{this.props.desc}</p>
					</div>
					<div>
						<p>
							{this.props.start} - {this.props.end}
						</p>
					</div>
				</div> */}
			</div>
		);
	}
}

export default EducationRender;
