import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLayer } from '../redux/actions';

const LayerSelector = ({ dropdownId, layerOptions }) => {
  const dispatch = useDispatch();
  const selectedLayer = useSelector((state) => state.selectedLayers[dropdownId - 1]);

  const simplifyLayerName = (layer) => layer.replace(/^layers\//, '').replace(/\.png$/, '');

  const handleSelectLayer = (layer) => {
    dispatch(selectLayer({ id: dropdownId, layer }));
  };

  return (
    <div className='layer-selector'>
      <h2>Trait {dropdownId}</h2>
      <select value={selectedLayer || ''} onChange={(e) => handleSelectLayer(e.target.value)}>
        <option value="">Select Layer</option>
        {layerOptions.map((layer) => (
          <option key={layer} value={layer}>
            {simplifyLayerName(layer)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LayerSelector;
