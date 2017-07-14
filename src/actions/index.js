import * as spriteActions from './sprite';
import * as startActions from './start';

const actionTypes = { ...spriteActions.actionTypes, ...startActions.actionTypes};

export default {
  ...spriteActions,
  ...startActions,
  actionTypes
};
