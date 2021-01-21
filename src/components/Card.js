import React, { useState, useEffect } from 'react'

export default function Card(props) {


   return (
      <div className="card">
         <img src={props.src} alt=""/>
      </div>
   )
}
