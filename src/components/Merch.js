import React from "react";
import PropTypes from "prop-types"

function Merch(props) {
  return (
    <>
        <div onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.merchType} - {props.merchDescription}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </>
  )
}

Merch.propTypes = {
  merchType: PropTypes.string,
  merchDescription: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Merch;