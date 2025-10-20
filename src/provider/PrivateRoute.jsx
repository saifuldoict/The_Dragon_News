import React from 'react'

const PrivateRoute = ({children}) => {
  return (
    <div>
        <h2>This is From private Route</h2>
        {children}
    </div>
  )
}

export default PrivateRoute
