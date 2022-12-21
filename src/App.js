import React from 'react'
import './App.css'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'

export default function App() {
  let router = useRoutes(routes)

  return (
    <section className='containar-app'>
      <Navbar />
      <section className='container-main'>
        <Sidebar />
        {router}
      </section>
    </section>
  )
}
