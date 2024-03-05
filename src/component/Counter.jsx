import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../counterSlice'

function Counter() {
  const [amount,setAmount] = useState(0)
  const dispatch = useDispatch()
  const Count = useSelector(state=>state.counterReducer.count)
  const handleIncrementByamount = ()=>{
    if(amount){
      dispatch(incrementByAmount(amount))
    }else{
      alert("enter a valid amount")
    }
  }
  return (
    <div  className='border rouded p-5 text-center bg-dark mt-5'>
        <h1 style={{fontSize:'100px',color:'white'}}>{Count}</h1>
        <div style={{width:'500px'}} className='d-flex justify-content-between'>
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>DECREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>


        </div>
        <div className='d-flex justify-content-between mt-5'>
            <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='increment Amount' />
            <button onClick={handleIncrementByamount} className='btn btn-primary ms-4'>INCREMENT BY AMOUNT</button>
        </div>
       
    
      
    

  </div>
  )
}

export default Counter