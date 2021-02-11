import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getTodos, addToDo } from '../../redux/to-do/to-do.actions';

import ToDoCard from '../../components/todo-card/todo-card.component';
import FormInput from '../../components/formInput/formInput.component';
import Button from '../../components/button/button.component';
 
import './to-do.styles.scss';

const ToDo = ({ todos, getTodos, addToDo }) => {
    useEffect(() => {
        getTodos();
      }, [getTodos]);

      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');

    const onSubmit = () => {
        addToDo(title, description);
    }

    return (
        <div className='todo-page'>
            <h2>Adicionar Tarefa</h2>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <FormInput type='text' label='Título' handleChange={setTitle} value={title}  />
                    <FormInput type='text' label='Descrição' handleChange={setDescription} value={description} />
                    <Button content='Adicionar' />
                </form>
            </div>

            {
                todos.map(todo => (
                    <ToDoCard todo={todo} key={todo._id} />
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos, addToDo })(ToDo);