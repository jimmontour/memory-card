import React, { useState, useEffect } from 'react'
import Card from './Card'
import './CardContainer.css'

export default function CardContainer(props) {

   const [deck, setDeck] = useState([
      {id: 1, src: '/img/1.png', chosen: false},
      { id: 2, src: '/img/2.png', chosen: false },
      { id: 3, src: '/img/3.png', chosen: false },
      { id: 4, src: '/img/4.png', chosen: false },
      { id: 5, src: '/img/5.png', chosen: false },
      { id: 6, src: '/img/6.png', chosen: false },
      { id: 7, src: '/img/7.png', chosen: false },
      { id: 8, src: '/img/8.png', chosen: false },
      { id: 9, src: '/img/9.png', chosen: false },
      { id: 10, src: '/img/10.png', chosen: false },
      { id: 11, src: '/img/11.png', chosen: false },
      { id: 12, src: '/img/12.png', chosen: false },
   ])


   return (
      <div className="card-container">
         {deck.map((card) => {
            return <Card id={card.id} src={card.src} chosen={card.chosen} />
         })}
      </div>
   )
}
