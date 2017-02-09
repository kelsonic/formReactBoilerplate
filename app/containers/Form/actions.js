/*
 *
 * Form actions
 *
 */

import {
  UPDATE_INPUT,
  UPDATE_INPUT_LABEL,
} from './constants';

export function updateInput(value) {
  return {
    type: UPDATE_INPUT,
    value,
  };
}

export function updateInputLabel(value) {
  return {
    type: UPDATE_INPUT_LABEL,
    value,
  };
}
