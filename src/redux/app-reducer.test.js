import React from 'react'
import AppReduce, { Initialed } from './app-reducer'

it('test reducer', ()=>{
    let initialState = {
        inition: false
    }
    let action = Initialed()
    let newState = AppReduce(initialState, action)
    expect (newState.inition).toBe(true)
})