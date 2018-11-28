import React from 'react'
import styles from './customInputs.css'

export const customInput = props => {
  const { label, id, type, meta } = props;
  return (
    <div className={`textInput`}>
        <input
          {...props.input}
          type={type}
          id={id}
          placeholder={label}
          className={meta.touched ? ( meta.error ? "invalid": "valid") : ""}
        />
        {<span className="help">{meta.touched ? meta.error: ''}</span>}
    </div>
  );
};