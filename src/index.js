import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { GlobalStyle } from './global-styled'
import { firebase } from './library/firebase.prod'
import { FirebaseContext } from './context/firebase'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle/>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// can also use as

// import React from 'react';
// import { render } from 'react-dom';
// import App from './App';

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// how to use render ()

// import { render } from 'react-dom' 
// then render ( <what has to be rendered />, document.getElementBy___where to be used_____)
