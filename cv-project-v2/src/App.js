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
		};

		this.handleGeneral = this.handleGeneral.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);
		this.editEducation = this.editEducation.bind(this);
		this.showInputValues = this.showInputValues.bind(this);
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

	showInputValues() {}

	render() {
		return (
			<div id="overall-wrapper">
				<section id="form-section">
					<GeneralForm getGeneralData={this.handleGeneral} />
					<EducationForm
						handleEducation={this.handleEducation}
						editObj={this.state.editObj}
						editMode={this.state.editMode}
					/>
					<WorkForm />
				</section>
				<section id="render-section">
					<RenderedCV
						sendGeneralDataFIRST={this.state.general}
						sendEducationDataFIRST={this.state.education}
						deleteEducation={this.deleteEducation}
						editEducation={this.editEducation}
					/>
				</section>
			</div>
		);
	}
}

export default App;
