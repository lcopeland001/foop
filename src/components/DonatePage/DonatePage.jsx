import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function DonatePage() {
  const donerDetails = useSelector(store => store.donerReducer);
  const [donerFirstName, setDonerFirstName] = useState('');
  const [donerLastName, setDonerLastName] = useState('');
  const [donerEmail, setDonerEmail] = useState('');
  const [donerPhone, setDonerPhone] = useState('');
  const [donerCompany, setDonerCompany] = useState('');
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDonerDetails();
  }, []);

  const fetchDonerDetails = () => {
    dispatch({ type: 'FETCH_DONER_DETAILS'});
  };

  const addDonerDetails = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_DONER', 
                payload: donerFirstName,
                payload: donerLastName, 
                payload: donerEmail, 
                payload: donerPhone, 
                payload: donerCompany 
              });
  };

  return (
    <div className="container">
      <h2>Make a Donation</h2>
      <form onSubmit={addDonerDetails}>
        <input value={donerFirstName} onChange={(e)=> setDonerFirstName(e.target.value)} type="text" />
        <input value={donerLastName} onChange={(e)=> setDonerLastName(e.target.value)} type="text" />
        <input value={donerEmail} onChange={(e)=> setDonerEmail(e.target.value)} type="text" />
        <input value={donerPhone} onChange={(e)=> setDonerPhone(e.target.value)} type="text" />
        <input type="submit" />
      </form>

      <h2>Doner Details</h2>
      <pre>{JSON.stringify(donerDetails)}</pre>

    </div>
  );
}

export default DonatePage;