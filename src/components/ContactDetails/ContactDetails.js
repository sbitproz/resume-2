import './ContactDetails.css';
import React from 'react';

export const ContactDetails = (parameters) => {

  return (
    <div className="ContactDetails">
      <div>{parameters.details.address}</div>
      <div>E: {parameters.details.email}</div>
    </div>
  )
}