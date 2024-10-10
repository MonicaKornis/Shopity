# Harness Front end Coding Challenge

The Objective of this exercise is to understand how you think through problems, test fundamental knowledge of building an application, examine the tooling you are most comfortable with, and have an opportunity for you to show off! 

There are no right or wrong ways to approach these problems. If something is unclear please reach out and we will do our best to answer any questions. 

Styling is not the most critical. Feel free to use any component libraries, UI libraries, or style libraries that you are comfortable with. 
This does not mean to leave the application in an unstyled state. It can be minimal but still presentable. 

## Goals 
- Test out fundamental knowledge of NextJS including but not limited to: SSR, server actions, app router. 
- Test out fundamental knowledge of React including but not limited to: composition, context, hooks, component structure 
- Test out knowledge of Javascript including but not limited to: array functions, objects, equality. 


## Background 

You have been tasked with creating a collection of products in an e-commerce application. The goal of this page is to call some data provided by an API and render the data to the screen in a way that allows customers to easily sort, search, find out more details and add to a cart. 

The data is stored in the JSON file called "test_data.json" located in the "/app" folder. Use NextJS API routes or server actions to simulate an API call. Importing the JSON file directly into client-side code is not allowed.

### Objectives

- Call an API and populate a product collection page
- Add / remove items from a cart 
- View details about products 


## Shopping Cart

The cart does not need to be anything complex and can exist just on the client side. 

You have creative freedom with this project. Feel free to use any component library / style library you are comfortable with.
We should be able to do the following with the cart: 
- Add items to the cart with specific quantities
- Remove items from the cart with specific quantities
- Clear the entire cart 
- See final cost in the cart 
- View all items in the cart 
- Items should not be added to the cart if we do not have the correct amount in stock. 
- cart should persist between pages 
- if an item is added to the cart twice, we should have a single entry in the cart with the correct quantity displayed.

### Optional Goals: 
- create a "checkout" experience (keep it simple, this is just for fun)
- persist the cart between sessions. 
- 

## Collection Page 

To keep things simple feel free to create a SINGLE Product collection page. This page should have ALL the products available on it. This is an ecommerce application so speed is critical.

The goal of this page is to browse the products and quick add them to your cart. 

On the collection page, ensure you can:
- View products in an organized manner
- Sort
- search
- filter products
- Change the number of products displayed per page and implement pagination
- Add products to the cart directly from the collection page
- Display out-of-stock products


### Optional goals: 
`test_data_large.json` contains 300 products for you to use for more advanced cases
- create collection pages for each category of products 
- infinite scroll 

## View Details page

Create a lightweight product details page. 
The goal of this page should be to show up more details about a specific product. 

We should be able to do the following with the view details page:
- See more details about a specific product
- full resolution image.
- add to cart 
- show remaining quanity
- Ensure items added to the cart are within available stock quantities.

### Optional: 
- feel free to add dummy layout blocks that youd see on other sites: including but not limited to; testimonalis, product features, image gallery, etc. 

## Make it your own (Optional show off)
- Name your company 
- Create a global search 
- show off a fun about us page. 
- header with navigation. 

## Testing

100% test coverage is not required. Focus on testing critical paths such as data fetching, cart manipulation, and navigation. Use any tools you are comfortable with, such as Jest, Cypress, Playwright, or Storybook.


# Objectives
At a minimum you should have the following: 
- A styled product collection page that, searches, sorts, paginates, and has cart manipulation.
- A styled view cart page that allows basic cart manipulation functionality, as well as seeing the total items in the cart with the total purhcase value. 
- A styled product details page that shows the correct information for the selected product. It should also have cart manipulation functionality.