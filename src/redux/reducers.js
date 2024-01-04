import { SELECT_LAYER } from "./actions";

const intialState = {
    selectedLayers: [],
};

const imageReducer = (state = intialState, action) => {
    switch (action.type) {
        case SELECT_LAYER:
            return {
                ...state,
                selectedLayers: [...state.selectedLayers, action.payload],
            };
        default:
            return state;
    }
};

export default imageReducer;