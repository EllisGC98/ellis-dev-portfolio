export const SELECT_LAYER = 'SELECT_LAYER';

export const selectLayer = (layer) => ({
    type: SELECT_LAYER,
    payload: layer,
});