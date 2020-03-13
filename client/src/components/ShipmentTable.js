import React from 'react';

/*  Shipment Table component */ 
const ShipmentTable = props => (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mode</th>
          <th>Type</th>
          <th>Destination</th>
          <th>Origin</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.shipmement.length > 0 ? (
          props.shipmement.map((ship,key) => (
            <tr key={key} onClick={() => {
              props.editRow(ship)
          }}>
              <td>{ship.name}</td>
              <td>{ship.mode}</td>
              <td>{ship.type}</td>
              <td>{ship.destination}</td>
              <td>{ship.origin}</td>
              <td>{ship.total}</td>
              <td>{ship.status}</td>
              
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No shipmement data available </td>
          </tr>
        )}
      </tbody>
    </table>
  )

  export default ShipmentTable;