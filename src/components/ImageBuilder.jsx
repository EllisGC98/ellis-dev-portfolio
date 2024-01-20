import React from 'react';
import { useSelector } from 'react-redux';
import LayerSelector from './LayerSelector';
import '../App.css';

const ImageBuilder = () => {
  // Retrieve selected layers from Redux store
  const selectedLayers = useSelector((state) => state.selectedLayers);

  // Assume layerOptions structure for each body part
  const layerOptions = {
    body: ['layers/Orc.png'],
    skin: ['layers/Ratnob.png', 'layers/Snitgut.png', 'layers/Mudgul.png'],
    eyes: ['layers/Evil.png', 'layers/Cute.png', 'layers/Shades.png'],
    mouth: ['layers/Grin.png', 'layers/Tongue.png', 'layers/Cigar.png'],
  };


  // Create image URLs for each selected layer
  const imageUrl = {
    mouth: selectedLayers[0] || '',
    skin: selectedLayers[1] || '',
    eyes: selectedLayers[2] || '',
    body: selectedLayers[3] || '',
  };

  return (
    <>
    <div className="image-builder-container">
      <div className="left-section">
        <h3 className="redux-text">Redux Showcase</h3>
        <h1 className="heading">Build Your Avatar 👇🏻</h1>
        {Object.entries(layerOptions).map(([layerType, options], index) => (
          <LayerSelector key={index} dropdownId={index + 1} layerOptions={options} />
        ))}
      </div>

      <div className="right-section">
        <div
          className="layered-image"
          style={{
            backgroundImage: `url(${imageUrl.body}), url(${imageUrl.mouth}), url(${imageUrl.eyes}), url(${imageUrl.skin})`,
          }}
        />
      </div>
    </div>
    </>
  );
};

export default ImageBuilder;
