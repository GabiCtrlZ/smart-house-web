import React from 'react'
import ProtectedRoute from '../../ProtectedRoute'


const Main = (): JSX.Element => (
  <ProtectedRoute>
    <div>
      Main
    </div>
  </ProtectedRoute>
)

export default Main