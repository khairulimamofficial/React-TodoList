import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import ButtonProgress from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Make your own list/i);
  expect(linkElement).toBeInTheDocument();
});

test('add task snapshot', ()=> {
  const component = renderer.create(
    <App/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})