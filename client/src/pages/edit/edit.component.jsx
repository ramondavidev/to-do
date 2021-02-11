import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import { editToDo } from '../../redux/to-do/to-do.actions';

import FormInput from '../../components/formInput/formInput.component';
import Button from '../../components/button/button.component';

import './edit.styles.scss';

import api from '../../utils/api';


const EditTodo = ({ match, editToDo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const id = match.params.id;

    const history = useHistory();

    useEffect(() => {

        const fetchDebt = async () => {

            const res = await api.get(`/${id}`);

            setTitle(res.data.title);
            setDescription(res.data.description);
        }
        fetchDebt();
      }, [id]);

      

    const onSubmit = () => {
        const form = {
            title, description, id
        }
        editToDo(form);
        history.push("/to-do");
    }


    return (
        <div className='edit-todo'>
            <h2>Editar To-Do</h2>
            <div className='form-container'>
                <form onSubmit={onSubmit}>
                    <FormInput type='text' label='Título' handleChange={setTitle} value={title}  />
                    <FormInput type='text' label='Descrição' handleChange={setDescription} value={description} />
                    <Button content='Editar' />
                </form>
            </div>
        </div>
    )
}

export default connect(null, { editToDo })(EditTodo);