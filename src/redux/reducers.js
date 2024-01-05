import { SELECT_LAYER } from './actions';

const initialState = {
  selectedLayers: [], // Array to store selected layers
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_LAYER:
      const { id, layer } = action.payload;
      const updatedLayers = [...state.selectedLayers];
      updatedLayers[id - 1] = layer;
      return {
        ...state,
        selectedLayers: updatedLayers,
      };
    default:
      return state;
  }
};

export default imageReducer;
