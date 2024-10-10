import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom'
import CartContext from '../app/context/cart-context';
import ItemCollectionDisplay from '../app/ui/ItemCollectionDisplay'

let item1 =   {
    "product_id": 1,
    "product_name": "Mrs",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "price": 828.26,
    "quantity_in_stock": 133,
    "category": "electronics",
    "brand": "Voonder",
    "color": "Purple",
    "size": "medium",
    "release_date": "6/3/2011",
    "image_url": "http://dummyimage.com/473x1000.png/ff4444/ffffff"
  }

let item2 =  {
    "product_id": 2,
    "product_name": "Mr",
    "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "price": 156.7,
    "quantity_in_stock": 227,
    "category": "home goods",
    "brand": "Eamia",
    "color": "Turquoise",
    "size": "small",
    "release_date": "4/24/2011",
    "image_url": "http://dummyimage.com/502x842.png/ff4444/ffffff"
  }

let mockCart = {
  2: [item1,4],
  1: [item2,2]

}
 
describe('Cart Collection Component', () => {
    let cart = mockCart;
    let addToCart = jest.fn();
    let removeAllFromCart = jest.fn();
    let removeOneFromCart = jest.fn();
    let addAmmountToCart = jest.fn();
    let clearCart = jest.fn()
    let contextValue = {
        cart,
        addToCart,
        removeAllFromCart,
        removeOneFromCart,
        addAmmountToCart,
        clearCart,
      }

  it('renders items in cart and displays clear button when passed in cart prop', () => {
    render(<CartContext.Provider value={contextValue}><ItemCollectionDisplay collectionLocation='cart'/></CartContext.Provider>)
    const itemHeading = screen.getByText( "Mr")
    const clearCartText = screen.getByText( "Clear Cart")
    expect(itemHeading).toBeInTheDocument();
    expect(clearCartText).toBeInTheDocument();
  })

test('calls clear cart function when button is clicked', () => {
    render(<CartContext.Provider value={contextValue}><ItemCollectionDisplay collectionLocation='cart'/></CartContext.Provider>)
    const clearCartButton = screen.getByText( "Clear Cart");
    fireEvent.click(clearCartButton);
    expect(clearCart).toHaveBeenCalled()
  })

  test('calls remove one function when button is clicked', () => {
    render(<CartContext.Provider value={contextValue}><ItemCollectionDisplay collectionLocation='cart'/></CartContext.Provider>)
    const removeButton = screen.getByTestId(`remove-one-button-2`)
    fireEvent.click(removeButton);
    expect(removeOneFromCart).toHaveBeenCalled()
  })

  test('calls remove all function when button is clicked', () => {
    render(<CartContext.Provider value={contextValue}><ItemCollectionDisplay collectionLocation='cart'/></CartContext.Provider>)
    const removeButton = screen.getByTestId(`remove-all-button-2`)
    fireEvent.click(removeButton);
    expect(removeAllFromCart).toHaveBeenCalled()
  })

  test('calls add one function when button is clicked', () => {
    render(<CartContext.Provider value={contextValue}><ItemCollectionDisplay collectionLocation='cart'/></CartContext.Provider>)
    const addOneButton = screen.getByTestId(`add-one-button-2`)
    fireEvent.click(addOneButton);
    expect(addToCart).toHaveBeenCalled()
  })
})