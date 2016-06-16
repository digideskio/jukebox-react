import React from 'react';
import Store from '../stores/store';
import Actions from '../actions/actions';
import Jukebox from './../utils/jukebox';
import SidePanel from './subviews/side-panel';
import DebugPanel from './subviews/debug-panel';
import Dispatcher from './../dispatcher/dispatcher';
import Immutable from 'immutable'

class UI extends React.Component {
  constructor(props) {
    super(props);
    let store = Store
    this.state = {
      jukebox: new Jukebox(),
      store: store,
      storeData: store.currentState()
    };
  }

  static childContextTypes = {
    jukebox: React.PropTypes.object
  }

  getChildContext = () => {
    return {
      jukebox: this.state.jukebox
    }
  }

  updateUserID(onChangeEvent) {
    Actions.updateUserID(onChangeEvent.target.value);
  }

  componentDidMount() {
    this.state.store.addChangeListener(this._onChange.bind(this));
    this.state.jukebox.openConnection();
  }

  componentWillUnmount() {
    this.state.store.removeChangeListener(this._onChange.bind(this));
  }

  sidePanelHTML(track, userId) {
    return(
      <SidePanel track={track} userId={userId} />
    )
  }

  /**
   * Event handler for 'change' events coming from the Store
   */
  _onChange() {
    this.setState({
      storeData: this.state.store.currentState()
    });
  }

  applyRatingChangesToTrack(track) {
    let rating = this.state.storeData.get('rating');
    if (rating) {
      if (rating.rating) {
        track.rating = rating.rating
      }
      track.rating_class = rating.rating_class
    }
  }

  render() {
    let track = this.state.storeData.get('track');
    this.applyRatingChangesToTrack(track)
    let userId = this.state.storeData.get('user_id');
    let connection = this.state.storeData.get('connection');
    return (
      <div>
        <DebugPanel connection={ connection } />
        <label>
          User ID: <input type='text' onChange={ this.updateUserID.bind(this) } />
        </label>
        { this.sidePanelHTML(track, userId) }
      </div>
    );
  }
}

export default UI;
