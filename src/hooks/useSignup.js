import { useNavigate } from "react-router-dom";

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const [isCancelled, setIsCancelled] = useState(false)

  let navigate = useNavigate();


  const signup = async (email, password, name) => {
    setError(null)
    setIsPending(true)

    try{
      
      const res = await createUserWithEmailAndPassword(projectAuth, email, password)
      

      if(!res){
        throw new Error("Could not complete signup")
      }

      // add display name to user

      await updateProfile(res.user, { displayName: name })

      // Dispatch LOGIN Action
      dispatch({type: 'LOGIN', payload: res.user})

      navigate("/")


      if(isCancelled){
        setError(null)
        setIsPending(false)
      }

    }catch(err){
      if(isCancelled){
        console.log(err.message);
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  
  return {error, isPending, signup}
}