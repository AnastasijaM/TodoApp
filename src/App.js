import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todoes from './components/Todoes';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
//import './App.css';
//import uuid from 'uuid'
import About from './components/pages/About'
import axios from 'axios';

class App extends Component {
  state = {
    todoes: [
      /*{
        id: uuid.v4(),
        title: 'Take out the trash',s
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Dinner with Nick',
        completed: true,
      },
      {
        id: uuid.v4(),
        title: 'Meating with boss',
        completed: false,
      }*/
    ]
  }
  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({
          todoes: res.data
        }))
  }

  markComplete = (id) => {
    //console.log(id)
    this.setState({
      todoes: this.state.todoes.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({
      //spread operator, expands the array to n arguments
      todoes: [...this.state.todoes.filter(todo => todo.id !== id)]
    }));
    
  }
  
  addTodo = (title) => {
    //console.log(title);

    /*const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };*/
    axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed:false,})
    .then(res=>this.setState({
      todoes: [... this.state.todoes, res.data]
    })
    )
    ;
    
  }
  render() {
    //console.log(this.state.todoes)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todoes todoes={this.state.todoes} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )}
            />
          <Route path="/about" component={About}
          
          />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;
