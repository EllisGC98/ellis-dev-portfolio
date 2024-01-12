import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const SelectedLayers = () => {
    // useSelector hook from redux store to access selected layers
  const selectedLayers = useSelector((state) => state.selectedLayers);

  const simplifyLayerName = (layer) => layer.replace(/^layers\//, '').replace(/\.png$/, '');

    // If there are no selected layers, we display a message indicating that no layers are selected.
    //If there are selected layers, we map over the array and render them as a list.

  return (
    <div className='selected-layers'>
      <h2>Traits:</h2>
      {selectedLayers.length === 0 ? (
        <p>No Traits selected</p>
      ) : (
        <ul>
          {selectedLayers.map((layer, index) => (
            <li key={index}>{simplifyLayerName(layer)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedLayers;
