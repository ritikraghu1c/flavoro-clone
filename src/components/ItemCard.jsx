import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCard,incrementQty,decrementQty } from '../redux/slices/CardSlice';
import toast from 'react-hot-toast';

const ItemCard = ({id,name,qty,price,img}) => {
    const dispatch=useDispatch();
    return (
        <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
            <MdDelete onClick={()=> {dispatch(removeFromCard({id,img,name,price,qty}))
            toast(`${name} Removed!`, {
                icon: '👋',
              });
            }} 
             className='absolute right-7 text-gray-600 cursor-pointer ' />

            <img src={img} className='w-[50px] h-[50px] border rounded-full' alt="" />
            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>{name}</h2>
                <div className='flex justify-between'>
                    <span className='text-green-500 font-bold'>₹ {price}</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7 mt-2.5'>
                        
                        <FaMinus onClick={()=>qty>1? dispatch(decrementQty({id})):(qty=0)}
                         className='border-2 border-gray-600 text-gray-600 hover:text-white  hover:bg-green-600 hover:border-none  rounded-md p-1 text-xl cursor-pointer transition-all ease-linear' />
                            
                            <span>{qty}</span>

                        <FaPlus  onClick={()=>qty>=1? dispatch(incrementQty({id})):(qty=0)}
                         className='border-2 border-gray-600 text-gray-600 hover:text-white  hover:bg-green-600 hover:border-none   rounded-md p-1  text-xl  cursor-pointer transition-all ease-linear' />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
