import React, { useState, useEffect } from 'react'
import Card from './Card'
import './CardContainer.css'

export default function CardContainer(props) {
   const [score, setScore] = useState(0);
   const [highScore, setHighScore] = useState(0);

   const [deck, setDeck] = useState([
      { chosen: false, key: 1, src: '/img/1.png' },
      { chosen: false, key: 2, src: '/img/2.png' },
      { chosen: false, key: 3, src: '/img/3.png' },
      { chosen: false, key: 4, src: '/img/4.png' },
      { chosen: false, key: 5, src: '/img/5.png' },
      { chosen: false, key: 6, src: '/img/6.png' },
      { chosen: false, key: 7, src: '/img/7.png' },
      { chosen: false, key: 8, src: '/img/8.png' },
      { chosen: false, key: 9, src: '/img/9.png' },
      { chosen: false, key: 10, src: '/img/10.png' },
      { chosen: false, key: 11, src: '/img/11.png' },
      { chosen: false, key: 12, src: '/img/12.png' },
   ])

   const handleClick = (e) => {
      const cardSrc = e.target.attributes.src.nodeValue;
      incrementScore()
      checkForDuplicate(cardSrc)
      updateCardStatus(cardSrc)
   }

   const checkForDuplicate = (cardSrc) => {
      deck.map((card) => {
         if (cardSrc === card.src && card.chosen === true) {
            console.log(cardSrc, card.src, card.chosen)
            return resetGame()
         }
      })
   }

   const incrementScore = () => {
      setScore(score + 1)
   }

   const resetGame = () => {
      score > highScore
      ? setHighScore(score)
      : setHighScore(highScore)
      setScore(0);
      setDeck(
         deck.map((card) => {
            return {...card, chosen: false}
         })
      )

   }

   const updateCardStatus = (cardSrc) => {
      setDeck(
         deck.map((card) => {
            if (cardSrc === card.src) {
               return {...card, chosen: true}
            } else {
               return card;
            }
         })
      )
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


   return (
      <div>
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
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
         </div>
      </div>
   )
}
