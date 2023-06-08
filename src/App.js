import React from 'react'
import './App.css'

import NavBar from './Components/NavBar/NavBar'
import Filters from './Components/Filters/Filters'
import ProductList from './Components/ProductList/ProductList'


function App() {
  return (
    <div>
      <NavBar />
      <Filters />


      {/* <div className='body-content'>
        <Filters />
        <ProductList />
      </div> */}

    </div>
  )
}

export default App