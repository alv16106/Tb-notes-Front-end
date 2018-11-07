import React from 'react';
import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

import './notebook-form-popup.css';

const NotebookForm = ({ handleSubmit }) => (
    <form className="popup" onSubmit={handleSubmit}>

        <div>
            <label>Nombre: </label>
            <div>
                <Field
                    name="name"
                    component="input"
                    type="text"
                    placeholder="nombre"
                />
            </div>
        </div>

        <div>
            <label>Color: </label>
            <div>
                <Field
                    name="color"
                    component="input"
                    type="color"
                />
            </div>
        </div>

        <button className="submit" type="submit"> Add </button>
    </form>
);


export default reduxForm({
    form: 'notebookForm', // a unique identifier for this form
    onSubmit(values, dispatch) {
        dispatch(actions.addNotebookRequest(
            uuid(),
            values.name,
            values.color
        ));
    },
})(NotebookForm)