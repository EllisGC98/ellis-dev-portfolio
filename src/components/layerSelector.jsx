// LayerSelector.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLayer } from '../redux/actions';

const LayerSelector = ({ dropdownId, layerOptions }) => {
  const dispatch = useDispatch();
  const selectedLayer = useSelector((state) => state.selectedLayers[dropdownId - 1]);

  const handleSelectLayer = (layer) => {
    dispatch(selectLayer({ id: dropdownId, layer }));
  };

  return (
    <div>
      <h2>Layer {dropdownId}</h2>
      <select value={selectedLayer || ''} onChange={(e) => handleSelectLayer(e.target.value)}>
        <option value="">Select Layer</option>
        {layerOptions.map((layer) => (
          <option key={layer} value={layer}>
            {layer}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LayerSelector;
