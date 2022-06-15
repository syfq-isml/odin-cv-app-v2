import React, { Component } from "react";

class EducationFormEdit extends Component {
	constructor(props) {
		super(props);

		let { id, name, course, start, end, achievements } = this.props.editObj;
		this.state = {
			exp: {
				id: id,
				name: name,
				course: course,
				start: start,
				end: end,
				achievements: achievements,
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.confirmEdit = this.confirmEdit.bind(this);
	}

	handleChange(e) {
		let prop = e.target.getAttribute("data-item");
		this.setState((prevState) => ({
			exp: {
				...prevState.exp,
				[prop]: e.target.value,
			},
		}));
	}

	confirmEdit(e) {
		this.props.confirmEditEducation(e, this.state.exp);
	}

	render() {
		return (
			<div className="flex-column-container">
				<label htmlFor="school-name">Name of Institution</label>
				<input
					id="school-name"
					value={this.state.exp.name}
					data-item="name"
					onChange={this.handleChange}
					data-form-id={this.state.exp.id}
				></input>
				<label htmlFor="school-course">Course Of Study</label>
				<input
					id="school-course"
					value={this.state.exp.course}
					data-item="course"
					onChange={this.handleChange}
					data-form-id={this.state.exp.id}
				></input>
				<label htmlFor="school-duration">Duration Of Study</label>
				<div className="flex-row-container">
					<input
						placeholder="Start Year"
						value={this.state.exp.start}
						data-item="start"
						onChange={this.handleChange}
						data-form-id={this.state.exp.id}
					></input>
					<p> - </p>
					<input
						placeholder="End Year"
						value={this.state.exp.end}
						data-item="end"
						onChange={this.handleChange}
						data-form-id={this.state.exp.id}
					></input>
				</div>
				<label htmlFor="school-achievements">Key Achievements (if any)</label>
				<textarea
					id="school-achievements"
					value={this.state.exp.achievements}
					data-item="achievements"
					onChange={this.handleChange}
					data-form-id={this.state.exp.id}
				></textarea>
				<button data-id={this.state.exp.id} onClick={this.confirmEdit}>
					Confirm Edit
				</button>
			</div>
		);
	}
}

export default EducationFormEdit;
