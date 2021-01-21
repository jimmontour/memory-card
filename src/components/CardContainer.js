import React, { useState, useEffect } from 'react'
import Card from './Card'
import './CardContainer.css'

export default function CardContainer(props) {

   const [deck, setDeck] = useState([
      {key: 1, src: '/img/1.png', chosen: false},
      { key: 2, src: '/img/2.png', chosen: false },
      { key: 3, src: '/img/3.png', chosen: false },
      { key: 4, src: '/img/4.png', chosen: false },
      { key: 5, src: '/img/5.png', chosen: false },
      { key: 6, src: '/img/6.png', chosen: false },
      { key: 7, src: '/img/7.png', chosen: false },
      { key: 8, src: '/img/8.png', chosen: false },
      { key: 9, src: '/img/9.png', chosen: false },
      { key: 10, src: '/img/10.png', chosen: false },
      { key: 11, src: '/img/11.png', chosen: false },
      { key: 12, src: '/img/12.png', chosen: false },
   ])

   const handleClick = (e) => {
      const chosenImg = e.target.attributes.src.nodeValue
      deck.map((card) => {
         if (chosenImg === card.src) {
            card.chosen = true;
         }
      })
   }

   return (
      <div className="card-container">
         {deck.map((card) => {
            return <Card
            key={card.id}
            src={card.src}
            chosen={card.chosen}
            handleClick={handleClick}
         />
         })}
      </div>
   )
}
