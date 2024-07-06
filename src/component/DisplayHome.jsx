import React from 'react'
import Navbar from './Navbar'
import { albumsData} from '../assets/assets'
import { songsData } from '../assets/assets'
import Album from './Album'
import SongAlbum from './SongAlbum'
import { assets } from '../assets/assets'

const DisplayHome = () => {
  return (
<>
  <Navbar />
  <div className='grid grid-cols-2 gap-4 p-8'>
    <div className='flex items-center p-4 bg-[#1d1d1d] rounded-lg'>
      <img className='w-16 h-16 rounded' src={assets.gambar1} alt=''/>
      <p className="ml-4 text-white">Liked Songs</p>
    </div>
    <div className='flex items-center p-4 bg-[#1d1d1d] rounded-lg'>
      <img className='w-16 h-16 rounded' src={assets.gambar1} alt=''/>
      <p className="ml-4 text-white">Liked Songs</p>
    </div>
    <div className='flex items-center p-4 bg-[#1d1d1d] rounded-lg'>
      <img className='w-16 h-16 rounded' src={assets.gambar1} alt=''/>
      <p className="ml-4 text-white">Liked Songs</p>
    </div>
    <div className='flex items-center p-4 bg-[#1d1d1d] rounded-lg'>
      <img className='w-16 h-16 rounded' src={assets.gambar1} alt=''/>
      <p className="ml-4 text-white">Liked Songs</p>
    </div>
  </div>
  <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Galau Banget Jir</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item,index)=>(<Album key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
  </div>
  <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Today</h1>
        <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongAlbum key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
  </div>
</>
  )
}

export default DisplayHome