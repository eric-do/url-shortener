import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import CreateLinkSheet from './CreateLinkSheet.jsx';

jest.mock('axios');

it('renders without crashing', () => {
  shallow(<CreateLinkSheet />);
});

it('renders inactive text field', () => {
  const { getByText } = render(<CreateLinkSheet />);
  const textField = getByText('paste long url');
});

xit('renders active text field when focused', () => {

});

xit('Makes POST request on submit click', async () => {
  const { getByText } = render(<CreateLinkSheet />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByText('CREATE'))

  await waitForElement(() => getByText('done'))

  expect(axiosMock.post).toHaveBeenCalledTimes(1)
})

xit('Makes POST request on paste', async () => {
  const { getByText, getByPlaceholderText } = render(<CreateLinkSheet />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.paste(getByPlaceholderText('enter'))

  await waitForElement(() => getByText('done'))

  expect(axiosMock.post).toHaveBeenCalledTimes(1)
})