import React from 'react';

export default function Todo(props) {
    const { task, complete } = props;
    return (
        <div><p>{task}</p></div>
    );
}