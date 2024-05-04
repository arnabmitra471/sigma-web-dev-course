import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
      I am user { params.username }
    </div>
  )
}

export default User
