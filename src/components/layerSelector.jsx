import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLayer } from '../redux/actions'

const layerSelector = ({ dropdownId, layerOptions }) => {
  const layers = useSelector((state) => state.selectedLayers);
  const dispatch = useDispatch();

  const handleSelectLayer = (layer) => {
    dispatch(selectLayer({ id: dropdownId, layer }));
  }

  return (
    <div>
      <h2>Layer {dropdownId}</h2>
    </div>
  )
}

export default layerSelector
