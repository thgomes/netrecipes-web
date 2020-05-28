import produce from 'immer';
import light from '../../../styles/themes/light';
import dark from '../../../styles/themes/dark';

const INITIAL_STATE = {
  theme: light,
};

export default function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@theme/CHANGE_THEME_REQUEST':
      return produce(state, (draft) => {
        draft.theme = state.theme === light ? dark : light;
      });
    default:
      return state;
  }
}
