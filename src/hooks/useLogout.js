import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  let navigate = useNavigate();


  const logout = async () => {
    setError(null)
    setIsPending(true)

    //LOGOUT

    try{
      await projectAuth.signOut()

      dispatch({type: 'LOGOUT'})

      navigate('/login')
      
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

  return {error, isPending, logout}
}