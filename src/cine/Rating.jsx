/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import star from '../assets/star.svg'

const Rating = ({value}) => {
    const stars = Array(value).fill(star)
  return (
    <>

        {
            stars.map((star,index) => (
                <img 
                    key={index}
                    src={star}
                    alt="star"
                    height='14'
                    width='14'
                     />
            ))
        }
      
    </>
  )
}

export default Rating
