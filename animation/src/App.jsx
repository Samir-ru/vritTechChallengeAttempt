import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCardGrid from './AnimatedCardGrid'
import Expand from './Expand'
import ExplodingImages from './ExplodingImages'

function App() {


  return (
    <>
    <div className='w-screen h-screen flex items-center justify-center'>
      <ExplodingImages/>
    </div>
    </>
  )
}

export default App
