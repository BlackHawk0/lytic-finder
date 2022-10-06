import React from 'react'

function RenderTrack({track}) {
  
    return (
        <div className='md:w-1/2 pr-4 pl-4'>
            <div className='relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 mb-4 shadow-sm'>
                <div className='flex-auto p-6'>
                    <h5>{track.artist_name}</h5>
                    <p className='mb-0'><strong><i className='fas fa-play'></i>Track</strong>: {track.track_name}
                    <br />
                   <strong><i className='fas fa-compact-disc'></i>Album </strong>: {track.album_name}
                   </p>
                </div>
                <div className="p-5">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#{track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</span>
                </div>
            </div>
            {/* <Link to={`lyrics/track/${track.track_id}`}>
                <i className='fas fa-chevron-right'></i> View Lyrics
            </Link> */}
        </div>

    )
}

export default RenderTrack