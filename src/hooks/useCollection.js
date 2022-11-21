import {useEffect, useRef, useState} from "react"
import { collection, onSnapshot,  query, where, orderBy } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";


export const useCollection = (data, _q, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_q).current
  const arrOrderBy = useRef(_orderBy).current

  useEffect(() => {

    let ref = collection(projectFirestore, data)

    if(q){
      ref = query(ref, where(...q), orderBy(...arrOrderBy));
    }

    const unsub = onSnapshot(ref, (sanpshot) => {

      let results = []  
      
      sanpshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })

      setDocuments(results)
      setError(null)

    }, (error) => {
      console.log(error)
      setError('Could not fetch the Data')
    })

    // Unsubscribe on Unmount

    return () => unsub()

  }, [data, q, arrOrderBy])

  return { documents, error}
}