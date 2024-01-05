export const SELECT_LAYER = 'SELECT_LAYER';

export const selectLayer = ({ id, layer }) => ({
    type: SELECT_LAYER,
    payload: {id, layer },
});