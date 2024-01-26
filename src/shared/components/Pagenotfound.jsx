import React from 'react'
import { error404Icon } from '../../assets'
import '../../styles/pagenotfound.css'
export default function Pagenotfound() {
  return (
    <div className='page-404-container'>
      <img src={error404Icon} alt="image not found" id='pagenotfound-image'/>
      <p id="page-not-found-text">
        Page not found!
      </p>
    </div>
  )
}
