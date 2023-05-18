import React from 'react';
import { useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function DonatePage() {
  const donerDetails = useSelector(store => store.donerDetails);
  
  
  return (
    <div className="container">
      <div>
        <p>DonatePage</p>
      </div>
    </div>
  );
}

export default DonatePage;