const START_GAME = Symbol('START_GAME');

export const actionTypes = {
  START_GAME
}

export const createStartGameAction = () => {

  return {
    type: START_GAME,
    payload: {
      started: true
    }
  };

};

export default {
  createStartGameAction
};
