import React, { useState, useEffect } from 'react'
import './Score.css'

export default function Score(props) {



   return (
      <div className="score">
         <p>Score: {score}</p>
         <p>High Score: {highScore}</p>
      </div>
   )
}
