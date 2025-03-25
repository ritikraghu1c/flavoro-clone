import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { HiH2 } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
const Card = () => {

    const [activeCard, setActiveCard] = useState(false);
    const cardItems = useSelector((state) => state.card.card);
    const totalQty=cardItems.reduce((totalQty,item)=>totalQty+item.qty,0);
    const totalPrice=cardItems.reduce((total,item)=>total+item.qty*item.price,0)

    const navigate=useNavigate();
    return (
        <>
            <div className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white mb-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-`}>
                <div className='flex justify-between items-center my-3'>
                    <span>My Order</span>
                    <IoMdClose onClick={() => setActiveCard(!activeCard)} className=' border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
                </div>
                { cardItems.length>0 ? cardItems.map((food) => { 
                    return (
                    <ItemCard 
                    key={food.id} 
                    id={food.id} 
                    name={food.name} 
                    price={food.price} 
                    img={food.img} 
                    qty={food.qty} 
                    />
                ) 
            }):<h2 className='text-center text-xl text-gray-500'>your card is empty</h2> }






                <div className='absolute bottom-0'>
                    <h3 className='font-semibold text-gray-800'>Items:{totalQty}</h3>
                    <h3 className='font-semibold text-gray-800'>Total Amount:{totalPrice}</h3>
                    <hr className='w-[90vw] lg:w-[18vw] my-2' />
                    <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg  w-[90vw] lg:w-[18vw] mb-5 '> Checkout</button>

                </div>

            </div> 
            <FaCartShopping onClick={() => setActiveCard(!activeCard)} className={`rounded-full bg-white shadow-md text-5xl p-3 pt-4 fixed bottom-4 right-4 ${totalQty>0 && "animate-bounce delay-500 transition-all "} `}/>

        </>
    )
}

export default Card
