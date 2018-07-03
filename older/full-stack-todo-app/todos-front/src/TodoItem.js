import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
      const isVisible = (this.props.completed === true) ?  {textDecoration: 'line-through'} : {textDecoration: 'none'}
    return (
      <div className='todo'>
            <h3>To do:</h3>
             <p style={isVisible} className='todo__name'>{this.props.todo.name}</p>
      </div>
    );
  }
}

export default TodoItem;
