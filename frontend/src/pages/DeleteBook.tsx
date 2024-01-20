import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import Button from "../components/Button"


const DeleteBook = () => {
const navigate = useNavigate()
const {id} = useParams()
const [ isLoading , setIsLoading] = useState<boolean>(false)

const handleDelete = (e: React.FormEvent): void => {
  e.preventDefault()
  setIsLoading(true)

  axios.delete(`http://localhost:5173/books/${id}/`)
  .then(()=>{
    setIsLoading(false)
    navigate("/")
  })
  .catch(()=>{
    alert("Could not delete book!")
    setIsLoading(false)
  })
}


  return (
    <div className="p-5">
      <div className=" mb-10">
        <BackButton destination="/"/>
        <h1 className=" text-2xl my-2">Delete Book</h1>
      </div>
      {isLoading ? 
        <div  className="flex justify-center items-center pt-16">
        <Spinner/>
        </div>
        :
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-8 shadow-xl hover:shadow-lg  gap-y-6 w-full sm:w-1/2 bg-gray-200 rounded-lg">
            <h1 className=" text-2xl font-semibold">Are you sure you want to delete this book ? </h1>
            <Button onClick={()=> handleDelete } types="button" className="bg-red-600 hover:bg-red-500" name="Delete"/>
          </div>
        </div>   
      }
    </div>  
  )
}

export default DeleteBook