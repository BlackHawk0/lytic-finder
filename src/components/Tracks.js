import React, {useState, useEffect} from 'react'
import ListTracks from './ListTracks';

function Tracks() {
    const [topTen, setTopTen] = useState([])
  
    useEffect(() =>{
        fetch(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ke&f_has_lyrics=1&apikey=${process.env.REACT_APP_KEY}`)
        .then(res =>res.json())
        .then(data => setTopTen(data.message.body.track_list))
    }, [])
    console.log(topTen);
  return (
    <div>
      <ListTracks tracks={topTen}/>
    </div>
  )
}

export default Tracks