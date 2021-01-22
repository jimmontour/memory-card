import React, { useState, useEffect } from 'react'
import Card from './Card'
import './CardContainer.css'

export default function CardContainer(props) {
   const [score, setScore] = useState(0);
   const [highScore, setHighScore] = useState(0);

   const [deck, setDeck] = useState([
      { chosen: 0, key: 1, src: '/img/1.png' },
      { chosen: 0, key: 2, src: '/img/2.png' },
      { chosen: 0, key: 3, src: '/img/3.png' },
      { chosen: 0, key: 4, src: '/img/4.png' },
      { chosen: 0, key: 5, src: '/img/5.png' },
      { chosen: 0, key: 6, src: '/img/6.png' },
      { chosen: 0, key: 7, src: '/img/7.png' },
      { chosen: 0, key: 8, src: '/img/8.png' },
      { chosen: 0, key: 9, src: '/img/9.png' },
      { chosen: 0, key: 10, src: '/img/10.png' },
      { chosen: 0, key: 11, src: '/img/11.png' },
      { chosen: 0, key: 12, src: '/img/12.png' },
   ])

   const handleClick = (e) => {
      shuffle(deck)
      const cardSrc = e.target.attributes.src.nodeValue;
      updateCards(cardSrc)
      incrementScore()

   }

   const updateCards = (cardSrc) => {
      setDeck(
         deck.map((card) => {
            if (cardSrc === card.src && card.chosen === 0) {
               return { ...card, chosen: 1 }
            } else if (cardSrc === card.src && card.chosen === 1) {
               return { ...card, chosen: 2 }
            } else {
               return card;
            }
         })
      )
   }

   useEffect(() => {
      deck.map((card) => {
         if (card.chosen === 2) {
            console.log('game over')
            score - 1 > highScore ? setHighScore(score - 1) : setHighScore(highScore)
            setScore(0)
            resetGame()
         }
      })
   })

   const incrementScore = () => {
      setScore(score + 1)
   }

   const shuffle = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

         // Pick a remaining element...
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;

         // And swap it with the current element.
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
      }
      return array;
   }

   const resetGame = () => {
      setDeck(deck.map((card) => {
         return { ...card, chosen: 0 }
      }))
   }

   return (
      <main>
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
         <div className="score">
            <p>Score: <span>{score}</span></p>
            <p>High Score: <span>{highScore}</span></p>
         </div>
      </main>
   )
}
