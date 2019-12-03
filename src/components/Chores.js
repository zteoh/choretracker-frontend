import React from 'react';
import PropTypes from "prop-types"
import NewChoreForm from './NewChoreForm';
import { addChore, toggleComplete, deleteChore } from "../api";
import '../style/Chores.css';


class Chores extends React.Component {

	// Constructor
	state = { 
		showForm: false
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

	addChore = (newChore) => {
		addChore(newChore)
		this.toggleForm() // Hide the chore form after the chore is added
	}

	toggleComplete = (index) => {
		toggleComplete(index)
		this.forceUpdate() // "Refetch" data
	}

	deleteChore = (index) => {
		deleteChore(index)
		this.forceUpdate() // "Refetch" data
	}

	// Rendering Helper Methods
	renderChores = () => {
		return this.props.chores.map((chore, index) => {
	        return (
	        	<tr key={index} >
	        	<td width="125" align="left">{chore.child}</td>
	        	<td width="200" align="left">{chore.task}</td>
	        	<td width="200" align="center">{chore.due_on}</td>
	        	<td width="125" align="center">{chore.completed ? "True" : "False"}</td>
	        	<td width="50" onClick={() => this.toggleComplete(index)}>Check</td>
	        	<td width="50" onClick={() => this.deleteChore(index)}>Delete</td>
	        	</tr>
	        	)
	    })
	}

	renderForm = () => {
		return (
			<div>
				<NewChoreForm 
					onSubmit = { this.addChore }
				/>
			</div>
		)
	}

	render() {
		return (
			<div className="chores">
				<table>
					<thead>
						<tr>
							<th width="125" align="left">Child</th>
							<th width="200" align="left">Task</th>
							<th width="75">Due on</th>
							<th width="125">Completed</th>
						</tr>
					</thead>
					<tbody>
							{ this.renderChores() }
					</tbody>
				</table>
				
				<button onClick={this.toggleForm} >New Chore</button>

				{ this.state.showForm ? this.renderForm() : null }

			</div>
		);
	}
}

// Defining the type of the props
Chores.propTypes = {
	children: PropTypes.array.isRequired
}

export default Chores;
