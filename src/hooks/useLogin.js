import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const [isCancelled, setIsCancelled] = useState(false)

  let navigate = useNavigate();


  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    try{
      
      const res = await signInWithEmailAndPassword(projectAuth, email, password)
      

      if(!res){
        throw new Error("Could not complete Login")
      }


      // Dispatch LOGIN Action
      dispatch({type: 'LOGIN', payload: res.user})

      navigate("/")


      if(!isCancelled){
        setError(null)
        setIsPending(false)
      }

    }catch(err){
      if(!isCancelled){
        console.log(err.message);
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])
  
  return {error, isPending, login}
}