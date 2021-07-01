import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

export default function newMerchForm(props) {

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
    names: event.target.names.value, 
      description: event.target.description.value,
      issue: event.target.issue.value, 
      id: v4()
    });
  }
  return (
    <>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input 
          type="text"
          name="Type"
          placeholder="Merch Type" />
        <input 
          type="text"
          name="Description"
          placeholder="Merch Description" />
        <input 
          type="text"
          name="issue"
          placeholder="Describe your issue" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

newMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};
