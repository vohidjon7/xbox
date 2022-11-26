import React from 'react'
import './error.css'

export default function Error() {
  return (
    <div className='Error'>
      <div className="error">
        <div className="error d-grid">
        <h2>404 Page Error</h2>
        <button className='btn btn-outline-danger'>Go to Home</button>
        </div>
      </div>
    </div>
  )
}
