import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        const { task } = this.props;
        return(
            <div>
                <p>{task}</p>
            </div>
        );
    }
}