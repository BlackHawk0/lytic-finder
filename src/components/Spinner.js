import React, { Fragment } from 'react'
import spinner from '../resources/spinner.gif'

const Spinner = () => {
  return (
    <Fragment>
        <img src={spinner} alt='Loading ---' style={{width: '200px', margin: '10px 560px', display: 'block'}} />
    </Fragment>
  )
}

export default Spinner

