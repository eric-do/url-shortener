import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RightSlider from './RightSlider.jsx';

it('renders without crashing', () => {
  shallow(<RightSlider />);
});

it('renders correct header title for action: create', () => {
  const { getByText } = render(<RightSlider action="create" />)
  const header = getByText('create link');
  expect(header).toBeTruthy();
});