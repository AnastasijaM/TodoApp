import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title:''
    }
    //i don't facking understand
    changeTitle = (e) => this.setState({ [ e.target.name]:e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
                title:''
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text"
                 name="title" 
                 placeholder="Add Todo"
                 style={{flax:'10', padding:'5px'}}
                 value={this.state.title}
                 onChange={this.changeTitle}
                 />

                 <input type="submit" value="Submit" className="btn" style={{flex: '1'}}     />            
            </form>
        )
    }
}

export default AddTodo
