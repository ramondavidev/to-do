import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { editToDo, deleteToDo } from '../../redux/to-do/to-do.actions'; 

import './todo-card.styles.scss';

const ToDoCard = ({ todo, editToDo, deleteToDo }) => {
    const { title, description, done, _id } = todo;

    const todoDone = () => {
        const form = {
            done: !done,
            id: _id
        }
        editToDo(form);
    }

    return (
        <div className={done ? 'done todo-card' : 'todo-card'} >
            <div>
                <div className='title'>
                    {title}
                </div>
                <div className='description'>
                    {description}
                </div>
            </div>
            <div className='icons-container'>
                <span onClick={() => todoDone()}>
                    {done ? <i class="fas fa-undo icon-back"></i> : <i className="far fa-check-circle icon-check fa-lg"></i>}
                    
                </span>
                <Link to={`/${_id}`}>
                    <span>
                        <i className="far fa-edit icon-edit fa-lg"></i>
                    </span>
                </Link>
                <span onClick={() => deleteToDo(_id)}>
                    <i className="far fa-trash-alt icon-remove fa-lg"></i>
                </span>
            </div>
        </div>
    )
}

export default connect(null, { editToDo, deleteToDo })(ToDoCard);