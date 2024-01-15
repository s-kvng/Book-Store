import axios from "axios"
import { useState, useEffect } from "react"

import Button from "../components/Button"

const Home = () => {
  const [books, setBooks] = useState<Object[]>([])
  const [isLoading , setIsLoading] = useState<boolean>(false)

  useEffect(()=>{

    setIsLoading(true)
    axios.get('http//:localhost:5173')
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })


  }, [])

  return (
    <div className="  p-5">
      <div className="flex justify-between items-center my-5">
        <h1>Books List</h1>
        <div className="">
        <Button className=" bg-sky-600 hover:bg-sky-300 text-xl" name="Table"/>
        </div>
      </div>
    </div>
  )
}

export default Home