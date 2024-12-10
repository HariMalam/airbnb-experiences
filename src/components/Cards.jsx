import React from 'react'
import Card from './Card'

import data from '../data';

function Cards() {

  const cardElement = data.map(item => {
    return (
      <Card 
        img = {item.coverImg}
        ratting = {item.stats.ratting}
        reviewCount = {item.stats.reviwCount}
        country = {item.location}
        title = {item.title}
        price = {item.price}
        tag = {item.openSpots === 0 ? "SOLD OUT" : item.openSpots > 0 ? "ONLINE" : null}
        key = {item.id}
      />
    )
  })
  return (
    <section className='cards'>
      {cardElement}
    </section>
  )
}

export default Cards