import React from 'react'
import Spinner from './Spinner'

function ListTracks({tracks}) {
    // Check if tracks are loaded
    const track_check = tracks.length === 0 || tracks === undefined ? <Spinner /> : <h1>Tracks Loaded</h1>
    
    return(
        <div>
            {track_check}
        </div>
    )
}

export default ListTracks