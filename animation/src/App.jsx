import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedCardGrid from './AnimatedCardGrid'
import Expand from './Expand'

function App() {


  return (
    <>
    <div className='bg-gray-100 w-screen h-screen flex items-center justify-center'>
      <Expand/>
    </div>
    </>
  )
}

export default App
