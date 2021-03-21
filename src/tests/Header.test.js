import React from 'react' 
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect'

test('<Header comprobado con texto', () => {
  //const wrapper = render(<Header />);
  //  wrapper.debug();
  render(<Header />)
  expect(screen.getByText('Welcome to')).toBeInTheDocument();

});

test('<Header comprobado segun id', () => {
    //const wrapper = render(<Header />);
    //  wrapper.debug();
    render(<Header />)
    expect( screen.getByTestId('title').tagName).toBe('H2');
    expect( screen.getByTestId('title').tagName).not.toBe('h1');
    expect( screen.getByTestId('title').textContent).toBe('Welcome to ');

  });