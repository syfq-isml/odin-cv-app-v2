import React, { Component } from "react";

import uniqid from "uniqid";

class EducationRender extends Component {
	constructor(props) {
		super(props);

		this.renderOnVisit = this.renderOnVisit.bind(this);
	}

	renderOnVisit() {
		return (
			<div className="flex-row-container fl-jcsb cv-content">
				<div>
					<h2>Example University, Singapore</h2>
					<p>BSc. Computer Engineering</p>
					<p>- CGPA:5.00</p>
				</div>
				<div className="flex-column-container">
					<p className="date">2016 - 2020</p>
				</div>
			</div>
		);
	}

	render() {
		let rows = this.props.sendEducationDataSECOND.map((data, i) => {
			return (
				<div
					className={
						i === 1
							? "flex-row-container fl-jcsb cv-content"
							: "flex-row-container fl-jcsb cv-content-2"
					}
					key={uniqid()}
				>
					<div>
						<h2>{data.name}</h2>
						<p>{data.course}</p>
						<p>{data.achievements}</p>
					</div>
					<div className="flex-column-container">
						<p className="date">
							{data.start} - {data.end}
						</p>
						<button
							data-id={data.id}
							data-index={i}
							onClick={this.props.deleteEducation}
							className="del-btn"
						>
							Delete
						</button>
						<button
							data-id={data.id}
							data-index={i}
							onClick={this.props.editEducation}
							className="edit-btn"
						>
							Edit
						</button>
					</div>
				</div>
			);
		});
		return (
			<div className="flex-column-container">
				<h1 className="cv-heading">Education</h1>
				{this.props.sendEducationDataSECOND.length === 0
					? this.renderOnVisit()
					: rows}
			</div>
		);
	}
}

export default EducationRender;
