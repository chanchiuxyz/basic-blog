# page

![](./pic/image.png)

# Create project
```
   npx create-react-app basic-blog
   npm install axios
   
```

# Code --- App.jsx

```

import React from 'react'

import './App.css';
import List from  './components/List';

export default function App() {
  return (
    <div>
        <List />
    </div>
  )
}
```

# Code --- components/List/index.jsx

```
    import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function List() {
    const [posts,setPosts] = useState({dataShow:[]})
  
    useEffect(() => {
      // npm install i axios before use axios
      axios.get('https://jsonplaceholder.typicode.com/posts?').then(
        response => {           
            setPosts({dataShow: [...response.data.slice(0,5)],data:response.data.slice(5)})
            // console.log(posts)          
        },
        error => {console.log('error',error)}
      ) 
    },[])
  
    const getMoreData = () => {
        setPosts({dataShow:[...posts.dataShow,...posts.data.slice(0,5)],data: posts.data.slice(5)})
        // console.log(posts)
    }
    
  return (
    <div>
       <ul>
            {posts.dataShow.map(
                post => {
                    return (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )
                }                  
            )}
        </ul>
        <button onClick={getMoreData}>get 5 more</button>
    </div>
  )
}

```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
