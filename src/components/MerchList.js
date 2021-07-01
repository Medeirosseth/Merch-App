import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types"

function MerchList(props) { //add props as a parameter
  return (
    <>
    <hr/>
      {props.merchlist.map((merch) => // Loop through the list passed down from MerchControl
        <Merch
          whenMerchClicked = { props.onTicketSelection } 
          merchType={merch.merchType}
          merchDescription={merch.merchDescription}
          issues={merch.issue}
          id={merch.id}
          key={merch.id}/>
      )}
    </>
  )
}

  MerchList.propTypes = {
    merchList: PropTypes.array,
    onTicketSelection: PropTypes.func
  }

  export default MerchList;