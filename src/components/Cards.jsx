import React from 'react'
import Card from './Card'
import swimmer from '../images/swimmer.svg'
import wedding from '../images/wedding-photography.svg'
import mountainBike from '../images/mountain-bike.svg'

function Cards() {
  return (
    <section className='cards'>

      <Card 
        img = {swimmer}
        ratting = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life lessons with Katie Zaferes"
        price = {136}
        tag = "SOLD OUT"
      />
      <Card 
        img = {wedding}
        ratting = "5.0"
        reviewCount = {30}
        country = "USA"
        title = "Learn wedding photography"
        price = {125}
        tag = "ONLINE"
      />
      <Card 
        img = {mountainBike}
        ratting = "4.8"
        reviewCount = {2}
        country = "USA"
        title = "Group Mountain Biking"
        price = {50}
      />
      
    </section>
  )
}

export default Cards