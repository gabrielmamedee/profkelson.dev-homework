import React from 'react'

const GaleriaImagens = ({ img1, img2, img3 }) => {
  return (
    <>
        <img src={img1} alt="img 1" />
        <img src={img2} alt="img 2" />
        <img src={img3} alt="img 3" />
    </>
  )
}

export default GaleriaImagens