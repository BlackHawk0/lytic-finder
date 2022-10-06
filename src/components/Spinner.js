import React from 'react'
import spinner from '../resources/spinner.gif'

const Spinner = () => {
  return (
    <div>
        <img src={spinner} alt='Loading ---' style={{width: '200px', margin: '10px 560px', display: 'block'}} />
    </div>
  )
}

export default Spinner

