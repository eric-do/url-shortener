import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import CreateLinkSheet from './CreateLinkSheet.jsx';

jest.mock('axios');

test('Make POST request on submit click', async () => {
  const { getByText } = render(<CreateLinkSheet />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByText('CREATE'))

  const greetingTextNode = await waitForElement(() => getByText('done'))

  expect(axiosMock.post).toHaveBeenCalledTimes(1)
})

test('Make POST request on paste', async () => {
  const { getByText, getByPlaceholderText } = render(<CreateLinkSheet />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.paste(getByPlaceholderText('enter'))

  const greetingTextNode = await waitForElement(() => getByText('done'))

  expect(axiosMock.post).toHaveBeenCalledTimes(1)
})