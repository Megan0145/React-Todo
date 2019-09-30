import React, { Component } from 'react';

export default class TodoForm extends Component {
    render() {
        const { addTodo } = this.props;
        return(
            <div>
                <form>
                    <input placeholder='Add Todo...' />
                    <button onClick={addTodo} >Add Todo</button>
                    <button>Clear Completed Todos</button>
                </form>
            </div>
        );
    }
}