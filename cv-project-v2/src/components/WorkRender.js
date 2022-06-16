import React, { Component } from "react";

import uniqid from "uniqid";

class WorkRender extends Component {
	constructor(props) {
		super(props);

		this.renderOnVisit = this.renderOnVisit.bind(this);
	}

	renderOnVisit() {
		return (
			<div className="flex-row-container fl-jcsb cv-content">
				<div>
					<h2>Example Pte. Ltd.</h2>
					<p className="role-heading">Web Developer</p>
					<p>- Built amazing things</p>
				</div>
				<div>
					<p>2020 - Present</p>
				</div>
			</div>
		);
	}

	render() {
		let rows = this.props.workData.map((item, i) => {
			return (
				<div
					key={uniqid()}
					className={
						i === 1
							? "flex-row-container fl-jcsb cv-content"
							: "flex-row-container fl-jcsb cv-content-2"
					}
				>
					<div>
						<h2>{item.name}</h2>
						<p className="role-heading">{item.title}</p>
						<p className="white-space">{item.desc}</p>
					</div>
					<div className="flex-column-container">
						<p>
							{item.start} - {item.end}
						</p>
						<button
							data-id={item.id}
							onClick={this.props.deleteWork}
							className="del-btn"
						>
							Delete
						</button>
						<button
							data-id={item.id}
							onClick={this.props.editWork}
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
				<h1 className="cv-heading">Work Experience</h1>
				{this.props.workData.length === 0 ? this.renderOnVisit() : rows}
			</div>
		);
	}
}

export default WorkRender;
