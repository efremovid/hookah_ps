import React from 'react'
import { useNavigate } from 'react-router-dom'

const BtnGoBack = () => {
const navigate = useNavigate()

const handleGoBack = () => {
    navigate(-1)
}

  return (
    <button onClick={handleGoBack}>BtnGoBack</button>
  )
}

export default BtnGoBack