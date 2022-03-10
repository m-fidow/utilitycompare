# Utility Compare - [Demo](https://utilitycompare.netlify.app/)
The goal was to create a basic compare website that users can at least two different broadband deals that are selected from a filled mock data of items. I was provided with screenshots of the final product to clone. From the images, I created a Single-page application with multiple reusable components styled with Material UI.

## Feautures
- An item component that holds provider’s name, rating, logo, deal name , monthly cost, setup costs, contract length. 
- A page that lists these items and components holding the items retrieved rom the mock api
- An overlay bottom drawer that becomes visible as soon as one of the “add to compare” buttons clicked in the list
- A Modal that lists selected deals side by side in a table.

### Component tree

- App
  -   DataTable
    -  Item
       -  ProviderInfo
    - Drawer
    -  Modal
 ### Hooks
 - useState Hook
 - useEffect
 
 ## Color Reference
| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background| ![#ffffff](https://via.placeholder.com/10/fff?text=+) #fffff |
| Add button| ![#1976d2](https://via.placeholder.com/10/1976d2?text=+) #1976d2 |
| Remove Button | ![#ff0000](https://via.placeholder.com/10/ff0000?text=+) #ff0000 |
|Rating stars| ![#faaf00](https://via.placeholder.com/10/faaf00?text=+) #faaf00|
|Odd numbered table lines| ![#e0e0e0](https://via.placeholder.com/10/e0e0e0?text=+) #e0e0e0|
|Table separators| ![#800080](https://via.placeholder.com/10/800080?text=+) #800080|



## Dependencies
```bash
    "@emotion/react": "^11.6.0",
    "@emotion/styled": "^11.6.0",
    "@mui/icons-material": "^5.2.0",
    "@mui/material": "^5.1.1",
    "@mui/x-data-grid": "^5.0.1",
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
```
## Create React App
This project was bootstrapped with Create React App.
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

