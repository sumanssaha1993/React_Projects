import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { act } from '../state/index'

export default function Shop() {
  const amount = useSelector(state => state.amount)
  const dispatch = useDispatch()
  const {withdrawMoney, depositMoney} = bindActionCreators(act, dispatch)
  return (
    <div>
        <h2>Withdraw / Deposit amount</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update balance ({amount})
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}
