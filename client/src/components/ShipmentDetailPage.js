import React, { useState,useEffect } from 'react';
import './css/shippingDetails.css';
import FormComponent from '../components/FormComponent';

const EditShipment = (props) => {
    const [shipments, setShipments] = useState({name:''});
    const url = 'http://localhost:5000/shipments/' + props.match.params.id;

    async function fetchUrl(url,options={},bflag=false) {
      try {
        const response = await fetch(url,options);
        const json = await response.json();
        setShipments(json); 
        if(bflag){
            alert('Successfully updated shipment name ');
        }
      }catch(error){
        console.log('Error');
      }
    }
  
    useEffect(() => {
      fetchUrl(url);
    }, []);
    
    const updateName = currentObj => {
        let options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentObj)
          }
      if(currentObj.name === ''){
          alert('Please enter the shipment name ');
          return;
      }    
      fetchUrl(url,options,true);
    }
  
    return(
       <FormComponent shipmentDetail={shipments} updateName={updateName}/>
    );
};

export default EditShipment;
