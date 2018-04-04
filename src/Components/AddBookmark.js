import React, { Component } from 'react';

class AddBookmark extends Component {
  constructor(){
    super();
    this.state = {
      newBookmark: {}
    }
  }


  handleSubmit(e){
    if(this.refs.title.value != null){
      this.setState({
        newBookmark: {title: this.refs.title.value, link: this.refs.link.value
      }},function(){
        this.props.addBookmark(this.state.newBookmark);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add Bookmark</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='title' placeholder='Bookmark Title...' />
          <input type='text' ref='link' placeholder='Bookmark Link...' />
          <input type='submit' value='Add Bookmark' />
        </form>
      </div>
    );
  }
}

export default AddBookmark;