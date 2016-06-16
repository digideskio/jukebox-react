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

  sidePanelHTML(track, userId, volume, play_state) {
    return(
      <SidePanel track={track} userId={userId} volume={volume} play_state={play_state} />
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

  render() {
    let track = this.state.storeData.get('track');
    let userId = this.state.storeData.get('user_id');
    let volume = this.state.storeData.get('volume');
    let connection = this.state.storeData.get('connection');
    let play_state = this.state.storeData.get('play_state')
    return (
      <div>
        <DebugPanel connection={ connection } />
        <label>
          User ID: <input type='text' onChange={ this.updateUserID.bind(this) } />
        </label>
        { this.sidePanelHTML(track, userId, volume, play_state) }
      </div>
    );
  }
}

export default UI;
