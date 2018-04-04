import React, { Component } from 'react';

class BookmarkItem extends Component {
  render() {
    console.log(this.props);
    return (
      <a href={this.props.bookmark.link} target='_blank' className="BookmarkItem">
          {this.props.bookmark.title}
      </a>
    );
  }
}

export default BookmarkItem;