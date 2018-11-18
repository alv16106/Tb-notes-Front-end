import { combineReducers } from 'redux';

import * as types from '../types';
import friendList , * as fromFriends from './friends';

const token = (state = '', action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS: {
            const { token } = action.payload;
            return token;
        }
        case types.USER_LOG_OUT_SUCCESS: {
            return '';
        }
        default: {
            return state;
        }
    }
}

const uid = (state = -1, action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS: {
            const { id } = action.payload;
            return id;
        }
        case types.USER_LOG_OUT_SUCCESS: {
            return -1;
        }
        default: {
            return state;
        }
    }
}

const username = (state = '', action) => {
    switch (action.type) {
        case types.USER_LOG_IN_SUCCESS: {
            const { username } = action.payload;
            return username;
        }
        case types.USER_LOG_OUT_SUCCESS: {
            return '';
        }
        default: {
            return state;
        }
    }
}

//selector
export const getUser = (state) => ({
    token: state.token,
    uid: state.uid,
    username: state.username,
})
export const getFriend = (state, id) => fromFriends.getFriend(state.friendList, id);
export const getFriends = (state) => fromFriends.getFriends(state.friendList);
export const itsFriendsLoading = (state) => fromFriends.itsLoading(state.friendList); 

// reducer

export default combineReducers({
    token,
    uid,
    username,
    friendList
}); 