import React from "react";
import PropTypes from "prop-types"

function Merch(props) {
  return (
    <>
      <h3>{props.merchType} - {props.merchDescription}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </>
  )
}

Merch.propTypes = {
  merchType: PropTypes.string.isRequired,
  merchDescription: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Merch;