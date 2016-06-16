import React from 'react';

class NowPlaying extends React.Component {

  contentHTML(track) {
    if (track) {
      return this.trackInfoHTML(
        track['title'],
        track['artist'],
        track['rating'],
        track['rating_class']
      )
    } else {
      return this.loadingHTML()
    }
  }

  trackInfoHTML(artistName, trackTitle, rating, rating_class) {
    return (
      <div>
        <h1>{ artistName }</h1>
        <p>{ trackTitle }</p>
        <p className={rating_class}>{rating}</p>
      </div>
    );
  }

  loadingHTML() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  render() {
    return this.contentHTML(this.props.track)
  }
}

export default NowPlaying;
