import React from 'react';
import PropTypes from "prop-types";

export default function MerchDetail(props) {
  const { merch } = props;
  return (
    <>
      <h1>Merch Detail</h1>
      <h3>{merch.merchDescription} - {merch.merchType}</h3>
      <p><em>{merch.issue}</em></p>
      <hr/>
    </>
  )
}

MerchDetail.propTypes = {
  merch: PropTypes.object
};