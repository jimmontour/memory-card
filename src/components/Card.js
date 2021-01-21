import React from 'react'
import  card from '../img/1.png'
import './Card.css'

export default function Card() {
   return (
      <div className="card">
         <img src={card} alt=""/>
      </div>
   )
}
