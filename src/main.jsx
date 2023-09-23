import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route';
import { HelmetProvider } from 'react-helmet-async';
import Provider from './ContextProvider/Provider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
        <HelmetProvider>
          <div className='container mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
    </Provider>
  </React.StrictMode>,
)
