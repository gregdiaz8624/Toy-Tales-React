import React, { Component } from 'react';

class ToyCard extends Component {

  handleLikes = (event) =>{
    
    this.props.updateToy(this.props.toy.id , 1)
  }

  handleDelete = (e) => {
    this.props.deleteAToy(this.props.toy.id)
  }

  render() {
  
    let {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        {<img src={image} alt={name} className="toy-avatar" />}
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={ this.handleLikes } >Like {likes}    </button>
        <button className="del-btn" onClick={ this.handleDelete } >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
