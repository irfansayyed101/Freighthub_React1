import React from 'react';
import { shallow } from 'enzyme';
import PaginationComp from '../components/PaginationComp';

describe('<PaginationComp /> with props', () => {
    const initialFormState = { total: 24,
        per_page: 10,
        current_page: 1,
        limit:10
      };
      const container = shallow(<PaginationComp pagination={initialFormState}/>);
      it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
      });
});