import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types"

function MerchList(props) { //add props as a parameter
  return (
    <>
    <hr/>
      {props.merchlist.map((merch, index) => // Loop through the list passed down from MerchControl
        <Merch merchType={merch.merchType}
          merchDescription={merch.merchDescription}
          issues={merch.issue}
          key={index}/>
      )}
    </>
  )
}

  MerchList.propTypes = {
    merchList: PropTypes.array
  }

  export default MerchList;