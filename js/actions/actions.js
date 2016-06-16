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

  updateRating: (rating) => {
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_RATING,
      rating: rating
    });
  }
};

module.exports = Actions;
