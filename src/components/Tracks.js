import React from 'react'
import Track from './Track'
import Spinner from './Spinner'

function Tracks({tracks}) {
  // Check if tracks are loaded
  const track_check = tracks.length === 0 || tracks === undefined ? <Spinner/> : tracks.map(track => (
      <Track key={track.track.track_id} track={track.track}/>
  ))
  return(
      <div>
          <h3 className='text-center mb-3 mt-6 font-bold'>Top 10 Tracks</h3>
          <div className='flex flex-wrap '>
              {track_check}
          </div>
      </div>
      
  )
}

export default Tracks