import React from 'react';
import Loader from '../LoadCircle';
import './load-page.css';

const LoadPage = ({
    title,
}) => (
  <div className="background">
    <div className="loaderWrapper" >
        <h2 className="title" > {title} </h2>
        <Loader className="loader" />
    </div>
  </div>
)

export default LoadPage;