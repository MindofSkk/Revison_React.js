import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './page/About'
import { Home } from './page/Home'
import { Test } from './page/Test'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
          
      </Routes>
  )
}

