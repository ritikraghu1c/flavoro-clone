import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'



// import {provider} from 'react-redux'
// import Store from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store} >
        <App />
   </Provider>
  </StrictMode>,
)
