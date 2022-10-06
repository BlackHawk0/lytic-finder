import React, {useEffect, useState} from 'react'
import Tracks from './components/Tracks'

function Context() {  

  const [track_list, setTrackList] = useState([])

  useEffect(() => {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=b7e535ab2031c35380ca6416f0d6755d&format=json`)
      .then(res => res.json())
      .then(data => {
          setTrackList(data.tracks.track)
      })
      .catch(err => console.log(err))
  }, [])
  console.log(track_list);



  return (
    <div>
    <Tracks tracks={track_list}/>
    </div>
  )
}

export default Context