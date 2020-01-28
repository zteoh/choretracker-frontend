import React from 'react';
import PropTypes from "prop-types"
import NewChoreForm from './NewChoreForm';
import { addChoreAPI, toggleCompleteAPI, deleteChoreAPI } from "../api";
import '../style/Chores.css';


class Chores extends React.Component {

	// Constructor
	state = { 
		showForm: false,
		chores: this.props.chores
	}

	// Lifecycle Methods
	componentDidMount() {
	}

	// Methods
	toggleForm = () => {
		this.setState(prevState => ({
			showForm: !prevState.showForm
		}));
	}

	addNewChore = (newChore) => {
		this.setState(prevState => ({
			chores: addChoreAPI(prevState.chores, newChore)
		}));
		this.toggleForm() // Hide the chore form after the chore is added
	}

	toggleComplete = (index) => {
		this.setState(prevState => ({
			chores: toggleCompleteAPI(prevState.chores, index)
		}));
	}

	deleteChore = (index) => {
		this.setState(prevState => ({
			chores: deleteChoreAPI(prevState.chores, index)
		}));
	}

	// Rendering Helper Methods
	renderChores = () => {
		return this.state.chores.map((chore, index) => {
	        return (
	        	<tr key={index} >
	        	<td width="125">{chore.child}</td>
	        	<td width="200">{chore.task}</td>
	        	<td width="200">{chore.due_on}</td>
	        	<td width="125">{chore.completed ? "True" : "False"}</td>
	        	<td width="50" onClick={() => this.toggleComplete(index)}>Check</td>
	        	<td width="50" onClick={() => this.deleteChore(index)}>Delete</td>
	        	</tr>
	        	)
	    })
	}

	render() {
		return (
			<div className="chores">
			<h1> Chore Tracker </h1>
				<table>
					<thead>
						<tr>
							<th width="125">Child</th>
							<th width="200">Task</th>
							<th width="75">Due on</th>
							<th width="125">Completed</th>
						</tr>
					</thead>
					<tbody>
							{ this.renderChores() }
					</tbody>
				</table>
				
				<button onClick={this.toggleForm} >New Chore</button>

				{ this.state.showForm && 
					<NewChoreForm addNewChore={this.addNewChore} />}

			</div>
		);
	}
}

// Defining the type of the props
Chores.propTypes = {
	chores: PropTypes.array.isRequired
}

export default Chores;
