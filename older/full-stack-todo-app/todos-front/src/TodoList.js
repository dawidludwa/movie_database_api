import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
            //     {
            //     name: 'do laundry',
            // }
            ]
        }
    }
    componentWillMount(){
        /*global fetch*/
        fetch('http://api-workspace-mmicalt.c9users.io:8080/api/todos')
        .catch(err=> console.log(err))
        .then(data => data.json())
        .then(todos => this.setState({todos}))
        
    }
  render() {
      const todos = this.state.todos.map((el, i) => {
          return <TodoItem key={i} todo={el} />
      })
    return (
        <div>
            <h2>Todo List!</h2>
            {todos}
        </div>
    );
  }
}

export default TodoList;
