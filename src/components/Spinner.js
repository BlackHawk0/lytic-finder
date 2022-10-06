import React from 'react'
import spinner from '../resources/spinner.gif'

const Spinner = () => {
  return (
    <div>
        <img src={spinner} alt='Loading ---' className='w-200 my-30 mx-auto'/>
    </div>
  )
}

export default Spinner

