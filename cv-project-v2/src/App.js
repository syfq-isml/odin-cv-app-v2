import React, { Component } from "react";
import "./styles/normalize.css";
import "./styles/styles.css";

import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import RenderedCV from "./components/RenderedCV";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			general: {},
			education: [],
			work: [],

			editObj: {},
			editMode: false,

			editObj_work: {},
			editMode_work: false,
		};

		this.handleGeneral = this.handleGeneral.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);
		this.editEducation = this.editEducation.bind(this);
		this.confirmEditEducation = this.confirmEditEducation.bind(this);
		this.handleWork = this.handleWork.bind(this);
		this.editWork = this.editWork.bind(this);
		this.confirmEditWork = this.confirmEditWork.bind(this);
	}

	handleGeneral(obj) {
		this.setState({
			general: obj,
		});
	}

	handleEducation(obj) {
		this.setState((prevState) => ({
			education: [...prevState.education, obj],
		}));
	}

	handleWork(obj) {
		this.setState((prevState) => ({
			work: [...prevState.work, obj],
		}));
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	deleteEducation(e) {
		let id = e.target.dataset.id;
		this.setState((prevState) => {
			let edu = [...prevState.education];
			let newEdu = edu.filter((item) => item.id !== id);
			return {
				education: newEdu,
				editObj: {},
				editMode_work: false,
				editMode: false,
			};
		});
	}

	editEducation(e) {
		let id = e.target.dataset.id;
		this.setState((prevState) => {
			let edu = [...prevState.education];
			let obj = edu.find((item) => item.id === id);
			return { editObj: obj, editMode: true };
		});
	}

	confirmEditEducation(e, obj) {
		let id = e.target.dataset.id;
		console.log(id);
		this.setState((prevState) => {
			let edu = [...prevState.education];
			let index = edu.findIndex((item) => item.id === id);
			console.log(index);
			edu.splice(index, 1, obj);
			console.log(obj);
			return { education: edu, editObj: {}, editMode: false };
		});
	}

	editWork(e) {
		this.setState((prevState) => {
			let id = e.target.dataset.id;
			let obj = prevState.work.find((item) => item.id === id);
			return {
				editMode_work: true,
				editObj_work: obj,
			};
		});
	}

	confirmEditWork(e, obj) {
		this.setState((prevState) => {
			let id = e.target.dataset.id;
			let workCopy = [...prevState.work];
			let index = workCopy.findIndex((item) => item.id === id);
			workCopy.splice(index, 1, obj);
			return {
				work: workCopy,
				editObj_work: {},
				editMode_work: false,
			};
		});
	}

	render() {
		return (
			<div id="overall-wrapper">
				<section id="form-section">
					<GeneralForm getGeneralData={this.handleGeneral} />
					<EducationForm
						handleEducation={this.handleEducation}
						editObj={this.state.editObj}
						editMode={this.state.editMode}
						confirmEditEducation={this.confirmEditEducation}
					/>
					<WorkForm
						handleWork={this.handleWork}
						editMode={this.state.editMode_work}
						editObj={this.state.editObj_work}
						confirmEditWork={this.confirmEditWork}
					/>
				</section>
				<section id="render-section">
					<RenderedCV
						sendGeneralDataFIRST={this.state.general}
						sendEducationDataFIRST={this.state.education}
						deleteEducation={this.deleteEducation}
						editEducation={this.editEducation}
						workData={this.state.work}
						editWork={this.editWork}
					/>
				</section>
			</div>
		);
	}
}

export default App;
