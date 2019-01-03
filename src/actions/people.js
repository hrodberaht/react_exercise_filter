import * as types from '../types/people';

export const applyFilter = payload => ({
  type: types.APPLY_FILTER,
  payload,
});
