import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

var Actions = {
  connectionOpen: () => {
    Dispatcher.dispatch({
      actionType: Constants.CONNECTION_OPEN
    });
  },

  connectionError: (message) => {
    Dispatcher.dispatch({
      actionType: Constants.CONNECTION_ERROR,
      message: message
    });
  },

  connectionClosed: (message) => {
    Dispatcher.dispatch({
      actionType: Constants.CONNECTION_CLOSED,
      message: message
    });
  },

  updateTrack: (track) => {
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_TRACK,
      track: track
    });
  },

  updateUserID: (userID) => {
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_USER_ID,
      userID: userID
    });
  },

  updateVolume: (volume) => {
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_VOLUME,
      volume: volume
    });
  }

  updatePlayState: (playState) => {
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_PLAYSTATE,
      playState: playState
    });
  }
};

module.exports = Actions;
