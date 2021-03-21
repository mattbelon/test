import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'
import Toggle from '../App'
import 'regenerator-runtime/runtime'


test('Comprobaciones del Boton ', () => {
  render(<App />)

  const btnAdd = screen.getByTestId('btnAdd')
  
  expect( screen.getByTestId('btnAdd').textContent).toBe('New user');

  fireEvent.click(btnAdd)
});

test('toggle Definido', () => {
  expect(Toggle).toBeDefined();
});

test('Verificacion del DOM',() => {
  render(<App />)
  const card = screen.findAllByTestId('profileCard')
  expect(card).toMatchSnapshot()
});