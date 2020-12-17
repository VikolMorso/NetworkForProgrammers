import React from 'react';
import { render } from '@testing-library/react';
import {AppNewContainer} from './AppNewContainer';

it('render', () => {
  const div = documentCreateElement('div')
   ReactDOM.render(<AppNewContainer />);
   ReactDOM.unmountComponentAtNode(div);
});
