import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
const ProctedRoute = ({element}) => {
    const cardItems=useSelector((state)=>state.card.card);
  return cardItems.length >0 ? element : <Navigate to="/"/>
    
  
};

export default ProctedRoute
