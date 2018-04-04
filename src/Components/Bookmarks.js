import React, { Component } from 'react';
import BookmarkItem from './BookmarkItem';

class Bookmarks extends Component {
  render() {
    let bookmarkItems;
    if(this.props.bookmarks){
      bookmarkItems = this.props.bookmarks.map(bookmark => {
        // console.log(bookmark);
        return (
          <BookmarkItem key={bookmark.title} bookmark={bookmark} />
        )
      });
    }
    return (
      <div className="Bookmarks">
        {bookmarkItems}
      </div>
    );
  }
}

export default Bookmarks;