import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Routes.jsx'

import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-7xl'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
