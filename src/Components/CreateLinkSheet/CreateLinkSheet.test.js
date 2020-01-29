import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import CreateLinkSheet from './CreateLinkSheet.jsx';
import UpdateLink from './UpdateLink.jsx';

jest.mock('axios');

it('renders without crashing', () => {
  shallow(<CreateLinkSheet />);
});

it('renders inactive empty text field', () => {
  const { getByLabelText, getByText } = render(<CreateLinkSheet />);
  const inputNode = getByLabelText('paste long url');

  expect(inputNode.value).toBe('');
});

describe('user successfully creates link', () => {
  
  it('successfully submits URL and displays received key', async () => {
    const { getByLabelText, getByText } = render(<CreateLinkSheet />);
    const inputNode = getByLabelText('paste long url');
  
    fireEvent.change(inputNode, { target: { value: 'www.google.com' } });
    expect(inputNode.value).toBe('www.google.com');
  
    axiosMock.post.mockResolvedValueOnce({
      data: 'testkey',
    })
  
    fireEvent.click(getByText('CREATE'))
    await waitForElement(() => getByText('testkey'));
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
  });
});

describe('user successfully updates link', () => {

  let updateLink;

  beforeEach(() => {
    updateLink = <UpdateLink hash="testkey" />;
  });

  it('correctly displays form elements', () => {
    const { getByLabelText, getByText } = render(updateLink);
    
    getByText('testkey');
    getByLabelText('title');
    getByLabelText('customize back-half');
    getByText('save');
  });
  
  it('successfully updates link', async () => {
    const { getByText } = render(updateLink);
        
    axiosMock.post.mockResolvedValueOnce();
    fireEvent.click(getByText('save'))
    await waitForElement(() => getByText('link has been edited'));
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
  })
});




xit('Makes POST request on paste', async () => {
  const { getByLabelText, getByText } = render(<CreateLinkSheet />);
  const inputNode = getByLabelText('paste long url');

  axiosMock.post.mockResolvedValueOnce({
    data: 'testkey',
  })

  fireEvent.paste(inputNode);

  await waitForElement(() => getByText('testkey'));
  expect(axiosMock.post).toHaveBeenCalledTimes(1);
})