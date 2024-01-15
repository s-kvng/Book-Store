import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import BackButton from "../components/BackButton" 
import Spinner from "../components/Spinner"
const ShowBook = () => {
  const {id} = useParams<string>()

  const [book , setBook] = useState({})
  const [isLoading , setIsLoading] = useState<boolean>(false)

  useEffect(()=>{
    setIsLoading(true)
    axios.get("")
    .then((res)=>{
      console.log(res.data)
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }, [])

  return (
    <div className="p-5">
      <BackButton destination="/"/>
      <h1 className=" font-bold text-4xl my-4">Show book</h1>
      { isLoading ? 
      <div className=" flex justify-center items-center pt-16">
      <Spinner/>
    </div> 
      : 
        <div className="flex flex-col border-2 border-sky-700 p-4 w-fit rounded-lg hover:shadow-blue-400 shadow-lg shadow-red-500">
          <div className=" my-4">
            <span className="text-xl mr-4 text-gray-500">No</span>
            <span>sdhdf</span>
          </div>
          <div className=" my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>sdhdf</span>
          </div>
          <div className=" my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>sdhdf</span>
          </div>
          <div className=" my-4">
            <span className="text-xl mr-4 text-gray-500">Published Year</span>
            <span>sdhdf</span>
          </div>
          <div className=" my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>sdhdf</span>
          </div>
          <div className=" my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>sdhdf</span>
          </div>
        </div>
      }
    </div>
  )
}

export default ShowBook