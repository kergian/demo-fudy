import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'

import { Routes } from './data/routes'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'

import { AppLayout } from './layouts'

import * as Pages from './pages'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AppLayout />}
      errorElement={<Pages.Error />}
    >
      <Route
        path={Routes.Root}
        element={<Pages.Home />}
      />
      <Route
        path={Routes.Profile}
        element={<Pages.Profile />}
      />
    </Route>,
  ),
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            // Theme settings by component
            borderRadius: 0,
          },
          DatePicker: {
            borderRadius: 0,
          },
          Select: {
            borderRadius: 0,
          },
        },
        token: {
          // Global theme settings
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
