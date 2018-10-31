import { combineReducers } from 'redux';

import * as types from '../types';

import user from './user';
import notes from './notes';

export default combineReducers({
    user,
    notes,
});

