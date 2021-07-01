import React from "react";
import NewMerchForm from "./NewMerchForm";
import MerchList from "./MerchList";
import MerchDetail from "./MerchDetail";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMerchList: [],
      selectedTicket: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
   if(this.state.selectedMerch != null) {
     this.setState({
       formVisibleOnPage: false,
       selectedMerch: null
     });
   } else {
     this.setState(prevState => ({
       formVisibleOnPage: !prevState.formVisibleOnPage,
     }));
   }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
    this.setState({masterMerchList: newMasterMerchList,
                  formVisibleOnPage: false})
  }
  
  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.masterMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch})
  }
  render(){
    let currentlyVisibleState = <MerchDetail merch = {this.state.selectedMerch} />
    let buttonText = null;

    if (this.state.selectedMerch !=null) {
      currentlyVisibleState = <MerchDetail merch = {this.state.selectedMerch} />
      buttonText = "Return to Merch"
    } else if( this.state.formVisibleOnPage){
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}/>
      buttonText = "Return to Merch";
    } else {
      currentlyVisibleState = <MerchList merchList={this.state.masterMerchList} onTicketSelection={this.handleChangingSelectedMerch} />;
      buttonText = "Add Ticket"
    } 
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}


export default MerchControl;

