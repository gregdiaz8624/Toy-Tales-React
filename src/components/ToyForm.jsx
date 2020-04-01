import React, { Component } from 'react';

class ToyForm extends Component {

  state = {

    name: "" ,
    image: ""

  }

  handleAllInputs = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addNewToy(this.state)
  }

  handleDelete = (e) => {
    this.props.deleteAToy(this.props.toy.name)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" 
                 name="name" 
                 placeholder="Enter a toy's name..." 
                 className="input-text"
                 autoComplete="off"
                 value={this.state.name}
                 onChange={this.handleAllInputs}
                 />
          <br/>
          <input type="text" 
                 name="image" 
                 placeholder="Enter a toy's image URL..." 
                 className="input-text"
                 autoComplete="off"
                 value={this.state.image}
                 onChange={this.handleAllInputs}
                 />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
