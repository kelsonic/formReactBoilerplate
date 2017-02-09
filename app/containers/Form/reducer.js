/*
 *
 * Form reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_INPUT,
  UPDATE_INPUT_LABEL,
} from './constants';

const initialState = fromJS({
  input: {
    value: '',
    label: 'Input Label',
  },
});

function formReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT:
      return state.setIn(['input', 'value'], action.value);
    case UPDATE_INPUT_LABEL:
      return state.setIn(['input', 'label'], action.value);
    default:
      return state;
  }
}

export default formReducer;
