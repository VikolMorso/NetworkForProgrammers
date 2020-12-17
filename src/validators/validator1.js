import React from 'react';

export const RequiredField = (value)=>{
    if (value) return undefined
    return 'fill in the field'
}
export const MaxLengthCreator=(number)=> {
    return (value)=>{
    if (value.length>number) return `maximum length ${number}`
    return undefined
}}