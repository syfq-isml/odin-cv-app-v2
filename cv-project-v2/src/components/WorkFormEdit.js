import React, { Component } from "react";

import uniqid from "uniqid";

class WorkFormEdit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			exp: {
				id: this.props.editObj.id,
				name: this.props.editObj.name,
				title: this.props.editObj.title,
				start: this.props.editObj.start,
				end: this.props.editObj.end,
				desc: this.props.editObj.desc,
			},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState((prevState) => ({
			exp: {
				...prevState.exp,
				[e.target.dataset.item]: e.target.value,
			},
		}));
	}

	handleClick(e) {
		this.props.confirmEditWork(e, this.state.exp);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.editObj !== this.props.editObj) {
			this.setState({
				exp: {
					id: this.props.editObj.id,
					name: this.props.editObj.name,
					title: this.props.editObj.title,
					start: this.props.editObj.start,
					end: this.props.editObj.end,
					desc: this.props.editObj.desc,
				},
			});
		}
	}

	render() {
		return (
			<div key={uniqid()} className="flex-column-container">
				<label htmlFor="company-name">Company Name</label>
				<input
					id="company-name"
					value={this.state.exp.name}
					data-item="name"
					onChange={this.handleChange}
				></input>
				<label htmlFor="title">Position Title</label>
				<input
					id="title"
					value={this.state.exp.title}
					data-item="title"
					onChange={this.handleChange}
				></input>
				<label htmlFor="work-duration">Duration Of Work</label>
				<div className="flex-row-container">
					<input
						placeholder="Start Date"
						value={this.state.exp.start}
						data-item="start"
						onChange={this.handleChange}
					></input>
					<p> - </p>
					<input
						placeholder="End Date"
						value={this.state.exp.end}
						data-item="end"
						onChange={this.handleChange}
					></input>
				</div>
				<label>Role Responsibilities</label>
				<textarea
					value={this.state.exp.desc}
					data-item="desc"
					onChange={this.handleChange}
				></textarea>
				<button
					data-id={this.state.exp.id}
					onClick={this.handleClick}
					className="confirm-btn"
				>
					Confirm Edit
				</button>
			</div>
		);
	}
}

export default WorkFormEdit;
