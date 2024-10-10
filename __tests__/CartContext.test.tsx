import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CartProvider from '../app/context/CartProvider';
import Page from '../app/cart/page';

 
describe('Cart Context', () => {
  it('renders a empty message', () => {
    render(<CartProvider><Page /></CartProvider>)
    const heading = screen.getByText("You haven't put any items in your bag")
 
    expect(heading).toBeInTheDocument()
  })
})