import React from 'react'

export const customInput = props => {
  const { label, id, type, meta } = props;
    return (
      <div className="row">
          <input
            {...props.input}
            type={type}
            id={id}
            className={meta.touched ? ( meta.error ? "invalid": "valid") : ""}
          />
          <label htmlFor={id}>{label}</label>
          <span className="help"></span>
      </div>
    );
  };