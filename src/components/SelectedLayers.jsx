import React from 'react';
import { useSelector } from 'react-redux';

const SelectedLayers = () => {
    // useSelector hook from redux store to access selected layers
  const selectedLayers = useSelector((state) => state.selectedLayers);

    // If there are no selected layers, we display a message indicating that no layers are selected.
    //If there are selected layers, we map over the array and render them as a list.

  return (
    <div>
      <h2>Selected Layers</h2>
      {selectedLayers.length === 0 ? (
        <p>No layers selected</p>
      ) : (
        <ul>
          {selectedLayers.map((layer, index) => (
            <li key={index}>{layer}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedLayers;
