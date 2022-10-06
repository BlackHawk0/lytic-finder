import React from 'react'
import RenderTrack from './RenderTrack'
import Spinner from './Spinner'

function ListTracks({tracks}) {
    
    // Check if tracks are loaded
    const track_check = tracks.length === 0 || tracks === undefined ? <Spinner/> : tracks.map(track => (
        <RenderTrack key={track.track.track_id} track={track.track}/>
    ))
    return(
        <div>
            {track_check}
        </div>
    )
}

export default ListTracks


// import React from 'react'
// import Spinner from './Spinner'


// //use tailwind in styling
// function ListTracks({tracks}) {
//     // Check if tracks are loaded
//     const track_check = tracks.length > 0 ? tracks.map(track => {
//         return (
//             <div className="w-full md:w-1/2 lg:w-1/3 p-3" key={track.track.track_id}>
//                 <div className="bg-white border rounded shadow">
//                     <div className="border-b p-3">
//                         <h5 className="font-bold uppercase text-gray-600">{track.track.artist_name}</h5>
//                         <h3 className="font-bold text-xl mb-3">
//                             <a href={track.track.track_share_url} target="_blank" rel="noopener noreferrer">{track.track.track_name}</a>
//                         </h3>
//                     </div>
//                     <div className="p-5">
//                         <p className="leading-relaxed mb-5">{track.track.track_name}</p>
//                         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{track.track.primary_genres.music_genre_list[0].music_genre.music_genre_name}</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }) : <Spinner />
//     return (
//         <div className="flex flex-wrap -mx-3">
//             {track_check}
//         </div>
//     )
// }

// export default ListTracks