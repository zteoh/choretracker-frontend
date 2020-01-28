import React from "react"
import { children, tasks } from "../api";
import '../style/NewChoreForm.css';

class NewChoreForm extends React.Component {

	// Contructor
	state = {
		child: children ? children[0].first_name : null,
		// TODO : Add other states
		task: tasks ? tasks[0].name : null,
		due_on: null,
	}

	// Refactored Form Handling
	handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({
		  [name]: value
		});
	}

	// Basic Form Handling

	// handleChildChange = (event) => {
	// 	const selectedChild = event.target.value;
	// 	this.setState({ child: selectedChild });
	// }

	// handleTaskChange = (event) => {
	// 	const selectedTask = event.target.value;
	// 	this.setState({ task: selectedTask });
	// }

	// handleDueOnChange = (event) => {
	// 	const selectedDate = event.target.value;
	// 	this.setState({ due_on: selectedDate });
	// }

	submitChoreForm = () => {
		// TODO : create a newChore and pass it to this.props.onSubmit
		const newChore = {
			child: this.state.child, 
			task: this.state.task,
			due_on: this.state.due_on, 
			completed: false
		}

		this.props.addNewChore(newChore);
	}

	// Render Helper Methods
	renderChildrenOptions = () => {
		return children.map((child, index) => {
		    return (
		    	<option key={index} value={child.first_name}> {child.first_name} </option>
		    )
		})
	}

	renderTasksOptions = () => {
		return tasks.map((task, index) => {
		    return (
		    	<option key={index} value={task.name}> {task.name} </option>
		    )
		})
	}

	render() {
		return (
	  		<div className="chore-form">
	  			<h4>New Chore Form</h4>
		        <div className="form-input">
		          <span>Child: </span>
		          <select name="child" onChange={this.handleInputChange}>
		            { this.renderChildrenOptions() }
		          </select>
		        </div>

		        <div className="form-input">
		          <span>Task: </span>
		          <select name="task" onChange={this.handleInputChange}>
		            { this.renderTasksOptions() }
		          </select>
		        </div>

		        <div className="form-input">
		        	<span>Due on: </span>
		        	<input type="date" name="due_on" onChange={this.handleInputChange}/>
		        </div>
		        
		        <br />
		        <button onClick={this.submitChoreForm}>Submit</button>
	      </div>
	  	)
	}
}

export default NewChoreForm