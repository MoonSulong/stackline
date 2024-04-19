# Ecommerce Product Web Demo
- Developed a web application with React to produce the view and Redux to manage the state.

## Table of contents
* [1. Folder Structure ](#1-folder-structure)
* [2. Implementation](#2-implementation)

## 1. Folder Structure
- assets: contains logo and sorting arrow svgs
- components:
  - Dashboard: the body of the webpage
  - Graph: the line chart to show the retail stats
  - Header: top bar with logo on the webpage
  - Product:
    - ProductSummary: the summary of product includes img, title, etc...
    - ProductVisual: container for graph and table
  - Table: the table to present the retail stats
- features:
  - retail:
    - retailSlice: Redux slice to take care of data management
- mock: mock data, mock api and data interface
- redux: redux hooks and configs    

## 2. Implementation
- React
- Redux
- Typescript
- Recharts

This project used [Create React App](https://github.com/facebook/create-react-app), the [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/) TS template, and [Recharts](https://recharts.org/en-US/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


