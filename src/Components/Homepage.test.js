import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage.jsx';

it('renders without crashing', () => {
  shallow(<HomePage />);
});
