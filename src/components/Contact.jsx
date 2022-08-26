import React from "react";
import "./App.css";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";
import {useEffect, useRef} from 'react';
import {useForm } from 'react-hook-form';
const Contact = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);
  
  const inputRef = useRef(null)
  
  useEffect(()=>{
 inputRef.current.focus()
  },[]
  )

  return (
    <div>
    <form  onSubmit={handleSubmit(handleRegistration)}>      
    <input name="name" type="text" class="feedback-input"  placeholder="Name"  {...register('fullname')} ref={inputRef}/>   
    <input name="email" type="text" class="feedback-input" placeholder="Email" {...register('Email')} />
    <textarea name="text" class="feedback-input" placeholder="Comment" {...register('Subject')}></textarea>
    <input type="submit" value="SUBMIT"/>
  </form> </div>
  );
}
export default Contact;