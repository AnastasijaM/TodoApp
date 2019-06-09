import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todoes extends Component {
  
  render() {
    return this.props.todoes.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

//Proptypes
Todoes.prototypes={
  todoes: PropTypes.array.isRequired
}
export default Todoes;
