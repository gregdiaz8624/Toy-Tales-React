import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toys: data,
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  updateToy= (toyId, addLikes) => {
    let modArray = this.state.toys.map((toyObj) => {
      if (toyObj.id === toyId) {
        let copiedObject = {
          ...toyObj,
          likes: toyObj.likes + addLikes
        }
        return copiedObject
      } else {
        return toyObj
      }
    })
    this.setState({
      toys: modArray
    })
  }

  addNewToy = (theNewToyPOJOIWantToAdd) => {

    let newToy = {...theNewToyPOJOIWantToAdd, likes: 0}
    let theNewCopyOfToysArray = [...this.state.toys, newToy]

    this.setState({
      toys: theNewCopyOfToysArray
    })
  }


  deleteAToy = (toyName) => {
    let filteredArray = this.state.toys.filter((toyPOJO) => {
      return toyPOJO.name !== toyName
    })

    this.setState({
      toys: filteredArray
    })

  }


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} 
                      updateToy={this.updateToy}
                      deleteAToy={this.deleteAToy}

        />
      </>
    );
  }

}

export default App;
