import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import Header from 'home/Header'
import Footer from 'home/Footer'

const App = () => (
    <div className='text-3xl mx-auto max-w-6xl'>

  <Header/>
   <div className='m-10 bg-yellow-200'>--- Micro-app2 contents ----</div>
  <Footer/>

  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)