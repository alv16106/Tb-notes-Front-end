import React, { Component } from 'react';
import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

import './notebook-form-popup.css';

class NotebookForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.props.handleSubmit;
        this.close = this.props.close;
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.close();
        }
    }

    render() {
        return (
            <div className="popup-background">
                <div ref={this.setWrapperRef}>
                    <form className="popup" onSubmit={this.handleSubmit} >
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
                </div>
            </div>
        )
    }
}



const form = reduxForm({
    form: 'notebookForm', // a unique identifier for this form
    onSubmit(values, dispatch) {
        dispatch(actions.addNotebookRequest(
            uuid(),
            values.name,
            values.color
        ));
    },
})(NotebookForm)

export default connect(
    undefined,
    dispatch => ({
        close: (e) => {
            dispatch(actions.hideNotebookForm());
        }
    })
)(form);