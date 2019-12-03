import React from "react"
import { children, tasks } from "../api";

class NewChoreForm extends React.Component {

	// Contructor
	state = {
		child: children ? children[0].first_name : null,
		task: tasks ? tasks[0].name : null,
		due_on: '',
		completed: false
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
	// 	this.setState({child: event.target.value});
	// }

	// handleTaskChange = (event) => {
	// 	this.setState({task: event.target.value});
	// }

	// handleDueOnChange = (event) => {
	// 	this.setState({due_on: event.target.value});
	// }

	onSubmit = () => {
		const newChore = {
			child: this.state.child, 
			task: this.state.task,
			due_on: this.state.due_on, 
			completed: this.state.completed
		}

		this.props.onSubmit(newChore);
	}

	// Render Helper Methods
	renderChildrenOptions = () => {
		return children.map((child, index) => {
		    return (
		    	<option value={child.first_name}> {child.first_name} </option>
		    )
		})
	}

	renderTasksOptions = () => {
		return tasks.map((task, index) => {
		    // return <li key={index}>Chore ID: {value.id}</li>
		    return (
		    	<option value={task.name}> {task.name} </option>
		    )
		})
	}

	render() {
		return (
	  		<div>
		        <label>
		          Child:
		          <select name="child" onChange={this.handleInputChange}>
		            { this.renderChildrenOptions() }
		          </select>
		        </label>
		        <br />

		        <label>
		          Task:
		          <select name="task" onChange={this.handleInputChange}>
		            { this.renderTasksOptions() }
		          </select>
		        </label>
		        <br />

		        <input type="date" name="due_on" onChange={this.handleInputChange}/>
		        <br />
		        
		        <button onClick={this.onSubmit}>Submit</button>
	      </div>
	  	)
	}
}

export default NewChoreForm