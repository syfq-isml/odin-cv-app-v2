import React, { Component } from "react";

import uniqid from "uniqid";

class WorkRender extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let rows = this.props.workData.map((item) => {
			return (
				<div key={uniqid()} className="flex-row-container fl-jcsb cv-content">
					<div>
						<h2>{item.name}</h2>
						<p className="role-heading">{item.title}</p>
						<p>{item.desc}</p>
					</div>
					<div>
						<p>
							{item.start} - {item.end}
						</p>
						<button data-id={item.id}>Delete</button>
						<button data-id={item.id} onClick={this.props.editWork}>
							Edit
						</button>
					</div>
				</div>
			);
		});
		return (
			<div className="flex-column-container">
				<h1 className="cv-heading">Work Experience</h1>
				{rows}
			</div>
		);
	}
}

export default WorkRender;
