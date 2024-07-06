import React from 'react'
import Sidebar from './component/Sidebar'
import MusicP from './component/MusicP'
import Display from './component/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display/>
      </div>
        <MusicP />
    </div>
  )
}

export default App