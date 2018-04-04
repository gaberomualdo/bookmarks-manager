import React, { Component } from 'react';
import Bookmarks from './Components/Bookmarks';
import AddBookmark from './Components/AddBookmark';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bookmarks: [
        
      ]
    }
  }

  componentWillMount(){
    this.setState({bookmarks: [
      {
        title: "Google",
        link: "https://google.com/"
      }
    ]});
  }

  handleAddBookmark(bookmark){
    let bookmarks = this.state.bookmarks;
    bookmarks.push(bookmark);
    this.setState(bookmarks:bookmarks);
  }

  render() {
    return (
      <div className="App">
        <h1 className="mainTitle">Bookmark Manager</h1>
        <AddBookmark addBookmark={this.handleAddBookmark.bind(this)} />
        <Bookmarks bookmarks={this.state.bookmarks}/>
      </div>
    );
  }
}

export default App;
