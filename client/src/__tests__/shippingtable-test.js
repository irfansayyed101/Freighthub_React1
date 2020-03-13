import React from 'react';
import { shallow } from 'enzyme';
import ShippingTable from '../components/ShipmentTable';

describe('<ShipmentTable /> with props ' , () =>{
    let shipments =  [{
        "id": "S1000",
        "name": "T2-Shirts(Summer 2018) from Shanghai to Hamburg",
        "cargo": [
          {
            "type": "Fabric",
            "description": "1000 Blue T-shirts",
            "volume": "2"
          },
          {
            "type": "Fabric",
            "description": "2000 Green T-shirts",
            "volume": "3"
          }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
          {
            "type": "customs"
          }
        ],
        "total": "1000",
        "status": "ACTIVE",
        "userId": "U1000"
      }]
    const container = shallow(<ShippingTable shipmement={shipments}/>);
    it('should match the snapshot', () => {
      expect(container.html()).toMatchSnapshot();
    });
});