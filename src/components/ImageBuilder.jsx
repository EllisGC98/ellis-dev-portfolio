import React from 'react';
import LayerSelector from './LayerSelector';
import SelectedLayers from './SelectedLayers';

const ImageBuilder = () => {
  const layerOptions = {
    background: ['layers/bg1.jpg', 'layers/bg2.jpg', 'layers/bg3.jpg'], // Replace with your background images
    body: ['layers/body1.png', 'layers/body2.png', 'layers/body3.png'],   // Replace with your body images
    head: ['layers/head1.png', 'layers/head2.png', 'layers/head3.png'],   // Replace with your head images
    // Add more layer types as needed
  };

  return (
    <div>
      <h1>Image Builder</h1>
      {Object.entries(layerOptions).map(([layerType, options], index) => (
        <LayerSelector key={index} dropdownId={index + 1} layerOptions={options} />
      ))}
      <SelectedLayers />
    </div>
  );
};

export default ImageBuilder;

