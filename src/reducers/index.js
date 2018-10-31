import { combineReducers } from 'redux';

import * as types from '../types';

import user, * as fromUser from './user';
import notes from './notes';

//selectors
// user y friends
export const getUser = (state) => fromUser.getUser(state.user);
export const getFriend = (state, id) => fromUser.getFriend(state.user, id);
export const getFriends = (state) => fromUser.getFriends(state.user);
// notes


export default combineReducers({
    user,
    notes,
});

