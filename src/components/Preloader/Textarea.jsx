import React from 'react';
import s from './Textarea.module.css'

export const Textarea = (props)=>{
    let error = props.meta.touched && props.meta.error
    return(
        <div>
            <div>
                <textarea {...props.input} className={ error ? s.error__textarea : ''}/>
            </div>
            <div>
    {error && <span className={s.error__span}>{props.meta.error}</span>}
                
            </div>
        </div>
    )
}

export const Input = (props)=>{
    let error = props.meta.touched && props.meta.error
    return(
        <div>
            <div>
                <input {...props.input} {...props} className={ error ? s.error__textarea : ''}/>
            </div>
            <div>
    {error && <span className={s.error__span}>{props.meta.error}</span>}
                
            </div>
        </div>
    )
}