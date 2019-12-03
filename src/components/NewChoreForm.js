import React from "react"
import PropTypes from "prop-types"
import { children, tasks } from "../api";

class NewChoreForm extends React.Component {

	state = {
		child: children ? children[0].first_name : null,
		task: tasks ? tasks[0].name : null,
		due_on: '',
		completed: false
	}

	handleChildChange = (event) => {
		this.setState({child: event.target.value});
	}

	handleTaskChange = (event) => {
		this.setState({task: event.target.value});
	}

	handleDueOnChange = (event) => {
		this.setState({due_on: event.target.value});
	}

	onSubmit = () => {
		const newChore = {
			child: this.state.child, 
			task: this.state.task,
			due_on: this.state.due_on, 
			completed: this.state.completed
		}

		this.props.onSubmit(newChore);
	}

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
			          <select onChange={this.handleChildChange}>
			            { this.renderChildrenOptions() }
			          </select>
			        </label>
			        <br />

			        <label>
			          Task:
			          <select onChange={this.handleTaskChange}>
			            { this.renderTasksOptions() }
			          </select>
			        </label>
			        <br />

			        <input type="date" onChange={this.handleDueOnChange}/>
			        <br />
			        
			        <button onClick={this.onSubmit}>Submit</button>
	      </div>
	  	)
	}
}

export default NewChoreForm