import React from 'react';

export default function TodoForm(props) {
    const { formValue, onValueChange, onFormSubmit, clearCompleted } = props;
    return(
        <div>
            <form>
                <input placeholder='Add Todo...' value={formValue} onChange={onValueChange} />
                <button onClick={onFormSubmit}>Add</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    );
}