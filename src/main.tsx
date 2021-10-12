import React from 'react'
import ReactDOM from 'react-dom'

import { Routes } from '@/router/Routes'
import { Layout } from '@/router/Layout'

import '@/styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Routes />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
